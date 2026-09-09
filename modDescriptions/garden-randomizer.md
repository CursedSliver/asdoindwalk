# Garden randomizer
Garden randomizer is a mod that randomizes all mutations in the garden and adds the following mechanics:
- Time cubes: time cubes are now required to tick the garden. Time cubes are generated passively over time, essentially storing ticks, and you can choose to use any specified amount to tick that many times at once.
- Augments & sugar lumps: sugar lumps are dropped at a small chance from unlocking new seeds, and is a guaranteed drop from unlocking a garden upgrade (e.g. duketater cookies). Replacing the vanilla soil cooldown refill button, sugar lumps can now be spent in one of three augments.
- Codes: you can generate them to send them to your friends to affect their garden. For example, for one sugar lump you can share two seeds you have unlocked with other players by sending a code, allowing whoever claims your code to also unlock them.

This mod is designed to be played by multiple people at once. To setup:
1. create a save with 0 sugar lumps, 1 sextillion cookies, 300 farms, and an empty garden with no seeds unlocked except for Baker's Wheat; if you are reusing an old save make sure to ascend once to get a new game seed. What the mutations end up becoming depends entirely on the game seed. You can use this tool to do this: [https://coderpatsy.bitbucket.io/cookies/editor.html](https://coderpatsy.bitbucket.io/cookies/editor.html)
2. distribute the save to your friends, then have them clear all mod data using the check mod data button in options (due to a bug wiping save or importing save won't clear this!), THEN load the mod. Mod loading details below.
3. now everyone should have the same randomized mutations. It's recommended to set up some kind of communication channel where everyone can share their codes. When everyone is ready, start! You can aim for as many seeds as possible in 1 hour, try to get max seeds as fast as possible, or whatever you want, it's up to you. 

There are also codes you can use to get unique rewards. Claim the following code to unlock a random seed; you can do this at the start of a run to make things a bit different each time.
`ENC=d3Z9cXxwfXltcHdtGBgfRFpVVldTYVNZXVpUalJQVB4ZFhYZFwIdGhYHCQwHDAYBDA0ABQsGBgcWGBYKAgwBAgIPDwQPBwMCDwI=`

Here is an example sheet for four players: [https://docs.google.com/spreadsheets/d/1VgnuLgKbUhH7WtJsZl2rgbjVTuXkJ5ZWFm0LbvTN4aw/edit?usp=sharing](https://docs.google.com/spreadsheets/d/1VgnuLgKbUhH7WtJsZl2rgbjVTuXkJ5ZWFm0LbvTN4aw/edit?usp=sharing)

To play it in singleplayer, you can set up multiple tabs with the mod loaded to simulate the multiplayer experience.

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
<td><code>https://glander.club/asjs/EQABuXqD</code></td>
<td>Install the <a href="https://chromewebstore.google.com/detail/cookie-clicker-mod-manage/gehplcbdghdjeinldbgkjdffgkdcpned">CCMM extension</a> and click the "Register new mod" box at the bottom. Paste the link into the URL field of the textbox that appears, then confirm.</td>
</tr>
<tr>
<td>Bookmarklet</td>
<td><code>javascript:{(function(){Game.LoadMod('https://glander.club/asjs/EQABuXqD');})();}</code></td>
<td>Input into the URL field of the bookmarklet, then click on the bookmark while on an instance of Cookie Clicker.</td>
</tr>
<tr>
<td>Console command</td>
<td><code>javascript:{(function(){Game.LoadMod('https://glander.club/asjs/EQABuXqD');})();}</code></td>
<td><a href="https://balsamiq.com/support/troubleshooting-faqs/browser-console/">Open the developer console</a> and paste the command into the console.</td>
</tr>
<tr>
<td>Tampermonkey/Greasemonkey</td>
<td>In the addendum section.</td>
<td>Post the code in the addendum of this document to a new script on your userscript manager, such as Tampermonkey or Greasemonkey.</td>
</tr>
<tr>
<td>Steam Workshop</td>
<td></td>
<td>Subscribe on Steam Workshop.</td>
</tr>
</tbody>
</table>

## Contact
To report bugs or make feature requests, and if you have questions/concerns, make a pull request or DM me on discord: @cursedsliver (make sure that you don't misspell it!)