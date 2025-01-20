//version 1.0 made p for pause, the funny mod for pausing the game
//version 1.1 added a bit of functionality, such as to make it possible to set tick speed
//version 1.2 fixed most problems and added UI to CCCEM, and made keybinds easy to rebind

var gamePause=0
var gardenStepDifference=Game.Objects.Farm.minigame.nextStep-Date.now()
var pantheonSwapDifference=0
var lumpTimeDifference=0
var gfdID=0
var gfdArr=[]
var tpsLoop=0
var tpsSpeed=30
var pForPause=[[80, "P"], [84, "T"], [82, "R"]] //keycodes for pause, step and reset, being p, t, r
var newKeyBind=0
var changeKeyBind=0

function HoldVars() {
    var time=Date.now(); 
    gardenStepDifference=Game.Objects.Farm.minigame.nextStep-time; 
    if (Game.Objects.Temple.minigame.swaps<3) {pantheonSwapDifference=time-Game.Objects.Temple.minigame.swapT} 
    lumpTimeDifference=time-Game.lumpT
    }

function PauseGame() {gamePause=!gamePause; HoldVars();}
function TickStep() {
    gardenStepDifference-=1000/Game.fps; 
    pantheonSwapDifference+=1000/Game.fps; 
    Game.lumpTimeDifference+=1000/Game.fps; 
    Game.Logic(); 
    HoldVars();
    }

function SetTPS(tps) {
    if (!gamePause) {PauseGame()}; 
    if (tpsLoop) {
        clearTimeout(tpsLoop); 
        tpsLoop=0}; 
        if (!(tps<=0)) {tpsSpeed=tps; TPSStep()
        }
    }

function TPSStep() {
    if (gamePause) {TickStep()}; 
    tpsLoop=setTimeout(TPSStep,Math.round(1000/tpsSpeed))
    }

function PForPauseButtons() {
    for (var i in pForPauseButtons) {moreButtons[2].push(pForPauseButtons[i])}; 
    RedrawCCCEM();
    }

function NewKeyBind(key, button) {
    pForPause[button][0]=key; 
    pForPause[button][1]=String.fromCharCode((96 <= key && key <= 105) ? key-48 : key); 
    changeKeyBind=0
    UpdatePForPB();
    }

Game.ObjectsById[7].minigame.spellsById[6].win=function(){
    var spells=[];
    var selfCost=Game.ObjectsById[7].minigame.getSpellCost(Game.ObjectsById[7].minigame.spells['gambler\'s fever dream']);
    for (var i in Game.ObjectsById[7].minigame.spells)
    {if (i!='gambler\'s fever dream' && (Game.ObjectsById[7].minigame.magic-selfCost)>=Game.ObjectsById[7].minigame.getSpellCost(Game.ObjectsById[7].minigame.spells[i])*0.5) spells.push(Game.ObjectsById[7].minigame.spells[i]);}
    if (spells.length==0){Game.Popup('<div style="font-size:80%;">'+loc("No eligible spells!")+'</div>',Game.mouseX,Game.mouseY);return -1;}
    var spell=choose(spells);
    var cost=Game.ObjectsById[7].minigame.getSpellCost(spell)*0.5;
    gfdArr[gfdID]=[, 0]
    gfdArr[gfdID][0]=setInterval(function(spell,cost,seed,gfdID){return function(){
        if (gfdArr[gfdID][1]>=1000) {
        if (Game.seed!=seed) return false;
        var out=Game.ObjectsById[7].minigame.castSpell(spell,{cost:cost,failChanceMax:0.5,passthrough:true});
        if (!out)
        {
            Game.ObjectsById[7].minigame.magic+=selfCost;
            setTimeout(function(){
                Game.Popup('<div style="font-size:80%;">'+loc("That's too bad!<br>Magic refunded.")+'</div>',Game.mouseX,Game.mouseY);
            },1500);
        }
        clearInterval(gfdArr[gfdID][0]);}
    }}(spell,cost,Game.seed,gfdID),1000/Game.fps);
    gfdID++
    Game.Popup('<div style="font-size:80%;">'+loc("Casting %1<br>for %2 magic...",[spell.name,Beautify(cost)])+'</div>',Game.mouseX,Game.mouseY);
    };

eval("Game.Loop="+Game.Loop.toString().replace("Game.Logic();","if (!gamePause) {Game.Logic();} else {Game.Objects.Farm.minigame.nextStep=Math.floor(Date.now()+gardenStepDifference); Game.Objects.Temple.minigame.swapT=Math.floor(Date.now()-pantheonSwapDifference); Game.lumpT=Math.floor(Date.now()-lumpTimeDifference)}"))
eval("Game.Loop="+Game.Loop.toString().replace("Game.accumulatedDelay+=((time-Game.time)-1000/Game.fps);","if (!gamePause) Game.accumulatedDelay+=((time-Game.time)-1000/Game.fps);"))
eval("Game.Logic="+Game.Logic.toString().replace("//minigames","for (var i in gfdArr) {gfdArr[i][1]+=1000/Game.fps}"))
eval("Game.harvestLumps="+Game.harvestLumps.toString().replace("Game.lumpT=Date.now();","Game.lumpT=Date.now(); lumpTimeDifference=0;"))

AddEvent(window,'keydown',function(e){
    if (e.keyCode==pForPause[0][0] && !changeKeyBind) {PauseGame()}; 
    if (e.keyCode==pForPause[1][0] && !changeKeyBind) {TickStep()}});

if (!(typeof CCCEMUILoaded === 'undefined')) {
    UpdatePForPB=function() {
        for (var i in moreButtons) {for (var ii in pForPauseButtons) {moreButtons[i].splice(moreButtons[i].indexOf(pForPauseButtons),1)}}
        pForPauseButtons[0]='<div class="line"></div>'
        pForPauseButtons[1]='<a class="option neato" '+Game.clickStr+'="PauseGame(); UpdatePForPB(); RedrawCCCEM();">'+(gamePause?'Unpause':'Pause')+'</a>'
        pForPauseButtons[2]='<a class="option neato" '+Game.clickStr+'="TickStep();">Tick step</a><br>'
        pForPauseButtons[3]='<a class="option neato" '+Game.clickStr+'="if (!changeKeyBind) changeKeyBind=1;">Pause: '+pForPause[0][1]+'</a>'
        pForPauseButtons[4]='<a class="option neato" '+Game.clickStr+'="if (!changeKeyBind) changeKeyBind=2;">Step: '+pForPause[1][1]+'</a>'
        pForPauseButtons[5]='<a class="option neato" '+Game.clickStr+'="if (!changeKeyBind) changeKeyBind=3;">Reset: '+pForPause[2][1]+'</a><br>'
        PForPauseButtons();
        RedrawCCCEM();
        }
    AddEvent(window,'keydown',function(e){if (changeKeyBind) {NewKeyBind(e.keyCode, changeKeyBind-1)} else if (e.keyCode==pForPause[2][0]) {ResetAll(1)};});
    UpdatePForPB();
    };
