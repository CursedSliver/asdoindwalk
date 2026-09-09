# Metaclicker - the ultimate autoclicker mod
This mod adds two autoclickers to the game: one universal autoclicker that is capable of clicking anywhere, and a big cookie autoclicker dedicated to the nonstop clicking of the big cookie. It has the following notable features:
- Enable/disable hotkeys for both autoclickers
- Click X times then stop 
- Enhanced visuals for the big cookie autoclicker
- Customizable traversal patterns, letting the clicking spot trace out a path over time
- Leaderboard support for the [Dashnet Forums leaderboards](https://docs.google.com/spreadsheets/d/1qgqDVmOy3aTUjA0LTQnM3GXf6R9bXU7GU_ufSDC7h4o/edit)

This was originally a browser-exclusive mod. It was created in July 2026.

## Installation
Choose one of the following methods to install the mod. For a browser, the CCMM extension is recommended.

| Method | Code/Link | Description&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; |
| ------ | --------- | ----------- |
| CCMM extension | `https://cursedsliver.github.io/asdoindwalk/autoclicker.js` | Install the [CCMM extension](https://chromewebstore.google.com/detail/cookie-clicker-mod-manage/gehplcbdghdjeinldbgkjdffgkdcpned) and click the "Register new mod" box at the bottom. Paste the link into the URL field of the textbox that appears, then confirm. |
| Bookmarklet | `javascript:{(function(){Game.LoadMod('https://cursedsliver.github.io/asdoindwalk/autoclicker.js');})();}` | Input into the URL field of the bookmarklet, then click on the bookmark while on an instance of Cookie Clicker. |
| Console command | `javascript:{(function(){Game.LoadMod('https://cursedsliver.github.io/asdoindwalk/autoclicker.js');})();}` | [Open the developer console](https://balsamiq.com/support/troubleshooting-faqs/browser-console/) and paste the command into the console. |
| Tampermonkey/Greasemonkey | In the addendum section. | Post the code in the addendum of this document to a new script on your userscript manager, such as Tampermonkey or Greasemonkey. |
| Steam Workshop | [https://steamcommunity.com/sharedfiles/filedetails/?id=3789272470](https://steamcommunity.com/sharedfiles/filedetails/?id=3789272470) | Subscribe on Steam Workshop. |

## Localization support
This mod currently supports **English** and **Chinese**. Support for further languages are possible; if you wish to contribute, contact me on discord (cursedsliver) for more details.

## Contact
To report bugs or make feature requests, and if you have questions/concerns, make a pull request or DM me on discord: @cursedsliver (make sure that you don't misspell it!)

If you wish for more traversal patterns to be added, also DM me, and I will give you a custom tool to make them.

### Addendum

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