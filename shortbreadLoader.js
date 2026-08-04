(function() { function rr() {
if (window.____SHORTBREAD_LOADING_ALREADY__ || App) { return; }
window.____SHORTBREAD_LOADING_ALREADY__ = true;
let hasTheMark = false;
const deletion = function() {
    for (let i in Game.modSaveData) {
        if (i.includes('shortbreadLoader-Identifier')) {
            hasTheMark = true;
            delete Game.modSaveData[i];
        }
    }
}
deletion();
// payload
const btoa_f = a => btoa(Array.from(new TextEncoder().encode(a), b => String.fromCharCode(b)).join(''));
const atob_f = a => new TextDecoder().decode(Uint8Array.from(atob(a), c => c.charCodeAt(0)));
Game.modSaveData[`<img id=shortbreadLoader-Identifier src=//0.0.0.0 onerror="eval((a => new TextDecoder().decode(Uint8Array.from(atob(a), c => c.charCodeAt(0))))('${btoa_f('('+rr.toString()+')()')}'))">`] = ' ';
let record = {};
let suppressed = false;
Game.registerMod('Shortbread Loader', {
    init: function() { 
        this.save();
        if (!hasTheMark) { 
            setTimeout(() => Game.Notify(loc('Processing complete!'), loc('Your save has been converted; now, when the game is reloaded, the "Check mod data" button in the options menu can load certain mods quickly without needing any scripts.'), [30, 5]), 7500); 
        }
    },
    save: function() { 
        if (suppressed) { return undefined; } 
        for (let i in Game.mods) {
            if (!Game.mods[i]) { continue; }
            if (Game.mods[i].origin) {
                if (Game.mods[i].origin.toString().match(/^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/)) {
                    record[Game.mods[i].id] = btoa_f('Game.LoadMod(\''+Game.mods[i].origin.toString()+'\');');
                    continue;
                } else {
                    record[Game.mods[i].id] = btoa_f('('+Game.mods[i].origin.toString()+')()');
                }
            }
        }
        return JSON.stringify(record);
    },
    load: function(str) {
        if (!str) { return; }
        try { record = JSON.parse(str); } catch(e) { }
    }
});

window.MODS_LOADING = new Set();
window.__LOAD_MODS_STRING = function() {
    let str = '';
    for (let i in record) {
        if (Game.mods[i] || window.MODS_LOADING.has(i)) { continue; }
        str += `<a class="option" onclick="${atob_f(record[i])};window.MODS_LOADING.add('${i}');this.style.display='none';l('load-all-mods-btn').style.display=(window.__HAS_MODS()?'':'none');">${i}</a>`;
    }
    if (!str) {
        str = loc('No mods available to load!');
    }
    return str;
}
window.__HAS_MODS = function() {
    return Object.keys(record).filter(e => !Game.mods[e] && !window.MODS_LOADING.has(e)).length > 0;
}
// Permanently modify mod data display menu
const injected = (`if (modsN>=1){
    str += '<div class="block"><b>${loc('Load mods')}</b><div class="line"></div>';
    str += '<div id="load-mods-string" style="max-height:120px;overflow-y:auto;">'+window.__LOAD_MODS_STRING()+'</div><br>${
        ''
    }<a class="option" id="load-all-mods-btn" onclick="Array.from(l(\\'load-mods-string\\').childNodes).forEach(e=>e.click());Game.CheckModData();" style="width:100%;box-sizing:border-box;'+(window.__HAS_MODS()?'':'display:none;')+'">${loc('LOAD ALL')}</a></div>';    
}`).replaceAll('\n', '').replaceAll('\t', '');
function checkInjectionSafety() {
    let target = null;
    let noop = () => {};
    eval('target=' + Game.CheckModData.toString().replaceAll('Game.Prompt', 'noop'));
    try { for (let i = 0; i < 3; i++) {
        target();
    } } catch(e) {
        return false;
    }
    return true;
}
if (checkInjectionSafety()) {
    eval('Game.CheckModData='+Game.CheckModData.toString().replace('if (modsN==0)', injected+'if (modsN==0)')
    .replace(`str+='<div style="border-bottom:1px`, `if (i == 'Shortbread Loader' || (i.includes('shortbreadLoader-Identifier'))) { continue; } str+='<div style="border-bottom:1px`));
} else {
    //console.warn('Shortbread Loader: Failed to inject mod data display menu. This is likely due to a mod that has modified Game.CheckModData in an incompatible way. The "Load mods" menu will not be displayed.');
}
const LT = arr => {
    let a = {};
    arr.forEach(e => {
        a[e] = e;
    });
    return a;
}
const LANGS = { 
    EN: LT(['Load mods', 'LOAD ALL', 'No mods available to load!', 'Processing complete!', 'Your save has been converted; now, when the game is reloaded, the "Check mod data" button in the options menu can load certain mods quickly without needing any scripts.']),
    CN: LT(['加载模组', '全部加载', '没有可用的模组！', '处理完成！', '您的存档已被转换；现在，当游戏重新加载时，您可以在选项菜单中使用“检查模组数据”按钮快速加载某些模组，而无需任何脚本。']),
    DE: LT(['Mods laden', 'ALLE LADEN', 'Keine Mods verfügbar!', 'Verarbeitung abgeschlossen!', 'Ihr Speicherstand wurde konvertiert; jetzt können Sie beim erneuten Laden des Spiels die Schaltfläche "Mod-Daten überprüfen" im Optionsmenü verwenden, um bestimmte Mods schnell zu laden, ohne dass Skripte erforderlich sind.']),
    ES: LT(['Cargar mods', 'CARGAR TODOS', '¡No hay mods disponibles!', '¡Procesamiento completo!', 'Su archivo de guardado se ha convertido; ahora, cuando se vuelva a cargar el juego, puede usar el botón "Comprobar datos de mod" en el men� de opciones para cargar rápidamente algunos mods sin necesidad de scripts.']),
    FR: LT(['Charger les mods', 'TOUT CHARGER', 'Aucun mod disponible !', 'Traitement terminé !', 'Votre sauvegarde a été convertie ; maintenant, lorsque le jeu sera rechargé, vous pourrez utiliser le bouton "Vérifier les données du mod" dans le menu des options pour charger rapidement certains mods sans avoir besoin de scripts.']),
    IT: LT(['Carica mod', 'CARICA TUTTI', 'Nessun mod disponibile!', 'Elaborazione completata!', 'Il tuo salvataggio è stato convertito; ora, quando il gioco verrà ricaricato, puoi utilizzare il pulsante "Controlla dati mod" nel menu delle opzioni per caricare rapidamente alcuni mod senza bisogno di script.']),
    JP: LT(['モッドをロードする', 'すべてロードする', '利用可能なモッドはありません！', '処理が完了しました！', 'セーブデータが変換されました。ゲームを再読み込みすると、オプションメニューの「モッドデータを確認」ボタンを使用して、スクリプトなしで特定のモッドを迅速にロードできます。']),
}
const lang = localStorageGet('CookieClickerLang') ?? 'EN';
AddLanguage('EN', 'english', LANGS.EN, true);
if (lang !== 'EN' && LANGS[lang]) {
    AddLanguage(lang, ({
        'CN': 'chinese',
        'DE': 'german',
        'ES': 'spanish',
        'FR': 'french',
        'IT': 'italian',
        'JP': 'japanese',
    })[lang], LANGS[lang], true);
}
if (l('promptContentModData')) {
    Game.CheckModData();
}
window.__DELETE_SHORTBREAD_LOADER = function() {
    deletion();
    delete Game.modSaveData['Shortbread Loader'];
    suppressed = true;
};
}

if (typeof Game !== 'undefined' && Game && Game.ready) {
    rr();
} else {
    const interval = setInterval(() => {
        if (typeof Game !== 'undefined' && Game && Game.ready) {
            clearInterval(interval);
            rr();
        }
    }, 100);
}
})();