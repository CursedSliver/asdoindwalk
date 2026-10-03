//version 1.0: Sweet finder made
//version 1.01: Fixed some minor issues, mainly trailing digits with the sweet finding notification
//version 1.1: Added customization for maximum find distance and allows for skipping of unviable sweets, and finding a spell now plays a sound
//version 1.11: Added option to instead display cast amount in terms of amount of unskippable spells
//version 1.12: Options now save as mod data.
//version 1.13: Added an option that enables saving when a sweet is successfully found. No sweet found message now disappears a lot quicker. Sweet found messages now last a long time.
//version 1.14: Critical patch; now options actually properly save
//version 1.15: Updated description for save on success option to mention bannability
//version 1.2: Updated the unskippable spell count functionality based on updated GFD Skip Skip
//version 1.21: Updated for game version v2.058

//I love stealing code from cccem
function getPromptOne() {
    Game.Prompt('<id ImportSave><h3>'+"Input value"+'</h3><div class="block">'+loc("Input to modify the variable.")+'<div id="importError" class="warning" style="font-weight:bold;font-size:11px;"></div></div><div class="block"><textarea id="textareaPrompt" style="width:100%;height:128px;">'+'</textarea></div>',[[loc("Commit"),';Game.ClosePrompt(); Game.prefs.upperBound=Number((l(\'textareaPrompt\').value));'],loc("Cancel")]);
    l('textareaPrompt').focus();
}

var oneChangeHint = ((Game.version >= 2.057)?'Use any non-Christmas season.':'Use Easter or Valentine\'s.');
var noChangeHint = ((Game.version >= 2.057)?'Use no season or Christmas.':'Use any season other than Easter or Valentine\'s.');

var sweetFinderVer = "v1.21";
const sweetFinderInitFunction = function() {
    Game.prefs.upperBound = 10000;
    Game.prefs.upperGC = 2;
    Game.prefs.backfireLimEnabled = 0;
    Game.prefs.spellDisplayMode = 0;
    Game.prefs.saveOnSuccess = 0;
    function findFirstSweet() {
        let castCount = (Game.Objects['Wizard tower'].minigame?Game.Objects["Wizard tower"].minigame.spellsCastTotal:0);
        let castA = [];
        for (let i = castCount; i < castCount+Game.prefs.upperBound; i++) {
            castA = findOutcome(i);
            for (let j in castA) { if (castA[j] == 'free sugar lump') {castA[j] = true;} else {castA[j] = false;}}
            castA.push(1-findBackfire(i));
            if (!(castA[0] || castA[1] || castA[2] || castA[3] )) { continue; }
            if (castA[2] || castA[3]) {
                if (castA[4] < (0.15*1.11+Game.prefs.upperGC*0.15) || !Game.prefs.backfireLimEnabled) { 
                    let str = '';
                    if (castA[3]) { str = '.<br>'+oneChangeHint; }
                    if (castA[2]) { str = '.<br>'+noChangeHint; }
                    if (Game.prefs.saveOnSuccess) { Game.WriteSave(); }
                    if (Game.prefs.spellDisplayMode) { 
                        Game.Notify('Sweet found after '+compileUnskippableCasts(castCount,i)+' unskippable casts!', 'At cast <b>'+(i-castCount+1)+'</b>.<br>Backfire; requires a backfire chance of <b>'+(tfwotd(100*castA[4],3))+'%</b>'+str, [29,14],20); PlaySound('snd/squeak'+Math.floor(Math.random()*4+1)+'.mp3'); return true;
                    } else {
                        Game.Notify('Sweet found at cast '+(i-castCount+1)+'!', 'Backfire; requires a backfire chance of <b>'+(tfwotd(100*castA[4],3))+'%</b>'+str, [29,14],20); PlaySound('snd/squeak'+Math.floor(Math.random()*4+1)+'.mp3'); return true;
                    }
                }
            }
            if (castA[0] || castA[1]) {
                if (castA[4] < 0.03) { 
                    let str = '';
                    if (castA[1]) { str = '.<br>'+oneChangeHint; }
                    if (castA[0]) { str = '.<br>'+noChangeHint; }
                    if (Game.prefs.saveOnSuccess) { Game.WriteSave(); }
                    if (Game.prefs.spellDisplayMode) { 
                        Game.Notify('Sweet found after '+compileUnskippableCasts(castCount,i)+' unskippable casts!', 'At cast <b>'+(i-castCount+1)+'</b>.<br>Success; will stop backfiring below <b>'+(tfwotd(100*castA[4],3))+'%</b>'+str, [29,15],20); PlaySound('snd/squeak'+Math.floor(Math.random()*4+1)+'.mp3'); return true;
                    } else {
                        Game.Notify('Sweet found at cast '+(i-castCount+1)+'!', 'Success; will stop backfiring below <b>'+(tfwotd(100*castA[4],3))+'%</b>'+str, [29,15],20); PlaySound('snd/squeak'+Math.floor(Math.random()*4+1)+'.mp3'); return true;
                    }
                }
            }
        }
        Game.Notify('No sweets found.','',0,1); return false;
    }
    AddEvent(document, 'keydown', function(e) { if (e.key.toLowerCase() == 'f') { findFirstSweet(); } });
    
    function compileUnskippableCasts(start, end) {
        let unskippables = 0;
        for (let i = start; i < end; i++) {
            let bb = findBackfire(i);
            if (bb < 0.875) { continue; }
            
            if (i > start && findBackfire(i - 1) >= (3/7) && findBackfire(i - 1) < (1/2)) { 
                unskippables++;
                continue; 
            }
            
            let bbb = findBackfire(i + 1);
            if ((bbb >= (3/7) && bbb < (2/3)) || (bbb >= (6/7))) { unskippables++; }
        }
        return unskippables;
    }
    
    function findOutcome(at) {
        let toReturn = [];
        //success, no change
        Math.seedrandom(Game.seed + '/' + at);
        Math.random(); Math.random(); Math.random();
        let choices = [];
        choices.push('frenzy','multiply cookies');
        if (!Game.hasBuff('Dragonflight')) choices.push('click frenzy');
        if (Math.random()<0.1) choices.push('cookie storm','cookie storm','blab');
        if (Game.BuildingsOwned>=10 && Math.random()<0.25) choices.push('building special');
        if (Math.random()<0.15) choices=['cookie storm drop'];
        if (Math.random()<0.0001) choices.push('free sugar lump');
        toReturn.push(choose(choices));
        
        //success, has season
        Math.seedrandom(Game.seed + '/' + at);
        Math.random(); Math.random(); Math.random(); Math.random();
        choices = [];
        choices.push('frenzy','multiply cookies');
        if (!Game.hasBuff('Dragonflight')) choices.push('click frenzy');
        if (Math.random()<0.1) choices.push('cookie storm','cookie storm','blab');
        if (Game.BuildingsOwned>=10 && Math.random()<0.25) choices.push('building special');
        if (Math.random()<0.15) choices=['cookie storm drop'];
        if (Math.random()<0.0001) choices.push('free sugar lump');
        toReturn.push(choose(choices));
            
        //backfire
        Math.seedrandom(Game.seed + '/' + at);
        Math.random(); Math.random(); Math.random();
        choices = [];
        choices.push('clot','ruin cookies');
        if (Math.random()<0.1) choices.push('cursed finger','blood frenzy');
        if (Math.random()<0.003) choices.push('free sugar lump');
        if (Math.random()<0.1) choices=['blab'];
        toReturn.push(choose(choices));
        
        //backfire, has season
        Math.seedrandom(Game.seed + '/' + at);
        Math.random(); Math.random(); Math.random(); Math.random();
        choices = [];
        choices.push('clot','ruin cookies');
        if (Math.random()<0.1) choices.push('cursed finger','blood frenzy');
        if (Math.random()<0.003) choices.push('free sugar lump');
        if (Math.random()<0.1) choices=['blab'];
        toReturn.push(choose(choices));
        return toReturn;
    }    
     
    function findBackfire(at) {
        Math.seedrandom(Game.seed + '/' + at);
        return Math.random();
    }
    
    // toFixed without trailing digits
    function tfwotd(input, digit) {
        //let ad = Math.floor(input).toString().length;
        input = Number(input).toFixed(digit);
        
        //console.log(input);
        //if (input.length>(digit+ad+1)) { console.log('detected'); input = input.slice(0, digit+ad+2); }
        return input;
    }
    
    Game.WriteCycleButton=function(prefName,button,minimum,maximum,name,callback)
            {
                if (!callback) callback='';
                callback+='PlaySound(\'snd/tick.mp3\');';
                callback+='Game.UpdateMenu();'
                return '<a class="smallFancyButton prefButton option'+'" id="'+button+'" '+Game.clickStr+'="Game.prefs[\''+prefName+'\']++;if(Game.prefs[\''+prefName+'\']>'+maximum+'){Game.prefs[\''+prefName+'\']='+minimum+';}'+callback+'">'+name+Game.prefs[prefName]+'</a>';
            }
    
    eval('Game.UpdateMenu='+Game.UpdateMenu.toString().replace(`game will reload")+')</label><br>'+`,`game will reload")+')</label><br>'+
    Game.WritePrefButton('backfireLimEnabled','backfirelimButton',loc("Backfire detection ")+ON,loc("Backfire detection ")+OFF)+'<label>('+loc("skips unviable sweets that requires too much backfire chance.")+')</label><br>'+
    Game.WriteCycleButton('upperGC','uppergcButton',0,7,loc("Maximum onscreens "))+'<label>('+loc("sets the maximum amount of backfire chance in terms of GCs onscreen.")+')</label><br>'+
    Game.WritePrefButton('spellDisplayMode','spellDisplayButton',loc("Notify as unskippable spells ")+ON,loc("Notify as unskippable spells ")+OFF)+'<label>('+loc("when finding sweets, instead notify as the amount of unskippable spells according to GFD skip skip.")+')</label><br>'+
    Game.WritePrefButton('saveOnSuccess','saveOSButton',loc("Save on success ")+ON,loc("Save on success ")+OFF)+'<label>('+loc("automatically save the game upon finding a successful sweet. BANNABLE IN FINNLESS AND GENERAL LEADERBOARDS")+')</label><br>'+`));
    
    eval('Game.UpdateMenu='+Game.UpdateMenu.toString().replace(`created by mods")+')</label></div>':'')+`,`created by mods")+')</label></div>':'')+
    '<div class="listing"><a class="option smallFancyButton"'+Game.clickStr+'="getPromptOne();">'+loc("Set find depth")+'</a><label>('+loc("set the maximum amount of casts to search.")+')</label></div>'+`));
    
    Game.registerHook('reincarnate',findFirstSweet);
}

Game.registerMod('sweetFinder',{ 
	init:function() { 
        if (l('topbarFrenzy')) { return; }
		Game.Notify('Sweet finder '+sweetFinderVer+' initialized!', 'Will attempt to find the nearest Sweet in Grimoire upon reincarnation or upon hitting F.<br>Check options for customization!', [29,16]);
        sweetFinderInitFunction();
    },
    save:function() {
    	let str = "";
        str+=Game.prefs.upperBound+'/';
        str+=Game.prefs.upperGC+Game.prefs.backfireLimEnabled+Game.prefs.spellDisplayMode+Game.prefs.saveOnSuccess;
        return str;
    },
    load:function(str) {
        console.log(str);
        if (str == '') { return false; }
    	Game.prefs.upperBound = parseInt(str.slice(0,str.indexOf('/')))
        str = str.split('/')[1];
        if (typeof str[0] !== 'undefined') { Game.prefs.upperGC=parseInt(str[0]); }
        if (typeof str[1] !== 'undefined') { Game.prefs.backfireLimEnabled=parseInt(str[1]); }
        if (typeof str[2] !== 'undefined') { Game.prefs.spellDisplayMode=parseInt(str[2]); }
        if (typeof str[3] !== 'undefined') { Game.prefs.saveOnSuccess=parseInt(str[3]); }
    }
});
