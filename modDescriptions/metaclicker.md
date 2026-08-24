# Metaclicker - the ultimate autoclicker mod
This mod adds two autoclickers to the game: one universal autoclicker that is capable of clicking anywhere, and a big cookie autoclicker dedicated to the nonstop clicking of the big cookie. It has the following notable features:
- Enable/disable hotkeys for both autoclickers
- Click X times then stop 
- Enhanced visuals for the big cookie autoclicker
- Customizable traversal patterns, letting the clicking spot trace out a path over time
- Leaderboard support for the [Dashnet Forums leaderboards](https://docs.google.com/spreadsheets/d/1qgqDVmOy3aTUjA0LTQnM3GXf6R9bXU7GU_ufSDC7h4o/edit)

This was originally a browser-exclusive mod. It was created in July 2026.

## Installation
Use Metaclicker on web using the following bookmarklet:
`javascript:{(function(){Game.LoadMod('https://cursedsliver.github.io/asdoindwalk/autoclicker.js');})();}`
It is also usable as a console command.

If you use tampermonkey or greasemonkey, use the following userscript:
```js 
// ==UserScript==
// @name Metaclicker
// @namespace metaclicker
// @include https://orteil.dashnet.org/cookieclicker/
// @include https://cookieclicker.eu/cookieclicker/
// @grant none
// ==/UserScript==

window.eval("javascript:{(function(){Game.LoadMod('https://cursedsliver.github.io/asdoindwalk/autoclicker.js');})();}");
```

## Localization support
This mod currently supports **English** and **Chinese**. Support for further languages are possible; if you wish to contribute, contact me on discord (cursedsliver) for more details.

## Contact
To report bugs or make feature requests, and if you have questions/concerns, make a pull request or DM me on discord: @cursedsliver (make sure that you don't misspell it!)

If you wish for more traversal patterns to be added, also DM me, and I will give you a custom tool to make them.