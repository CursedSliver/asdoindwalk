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

<table>
<colgroup>
<col width="20%">
<col width="30%">
<col width="50%">
</colgroup>
<thead>
<tr>
<th width="20%">Method</th>
<th width="30%">Code/Link</th>
<th width="50%">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>CCMM extension</td>
<td><code>https://cursedsliver.github.io/asdoindwalk/autoclicker.js</code></td>
<td>Install the <a href="https://chromewebstore.google.com/detail/cookie-clicker-mod-manage/gehplcbdghdjeinldbgkjdffgkdcpned">CCMM extension</a> and click the "Register new mod" box at the bottom. Paste the link into the URL field of the textbox that appears, then confirm.</td>
</tr>
<tr>
<td>Bookmarklet</td>
<td><code>javascript:{(function(){Game.LoadMod('https://cursedsliver.github.io/asdoindwalk/autoclicker.js');})();}</code></td>
<td>Input into the URL field of the bookmarklet, then click on the bookmark while on an instance of Cookie Clicker.</td>
</tr>
<tr>
<td>Console command</td>
<td><code>javascript:{(function(){Game.LoadMod('https://cursedsliver.github.io/asdoindwalk/autoclicker.js');})();}</code></td>
<td><a href="https://balsamiq.com/support/troubleshooting-faqs/browser-console/">Open the developer console</a> and paste the command into the console.</td>
</tr>
<tr>
<td>Tampermonkey/Greasemonkey</td>
<td>In the addendum section.</td>
<td>Post the code in the addendum of this document to a new script on your userscript manager, such as Tampermonkey or Greasemonkey.</td>
</tr>
<tr>
<td>Steam Workshop</td>
<td><a href="https://steamcommunity.com/sharedfiles/filedetails/?id=3789272470">https://steamcommunity.com/sharedfiles/filedetails/?id=3789272470</a></td>
<td>Subscribe on Steam Workshop.</td>
</tr>
</tbody>
</table>

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