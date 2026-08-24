# Sweet finder
If you have used the [FtHoF planner](https://plasma4.github.io/FtHoF-Planner-v6) or have gotten lucky, you might know that you can occasionally get sugar lumps from the Force the Hand of Fate grimoire spell, albeit at an extremely low chance. The effect is called "Sweet!" and gives you one sugar lump. This mod makes it so that upon pressing F or reincarnating, you are notified about the minimum number of spells needed to get a sweet, and how to get it.

This is commonly used with GFD Skip Skip in a strategy called Sweet Plannering, which is the fastest way to get sugar lumps in the game without directly manipulating the RNG with hard exploits. It has a top lump gain rate of **~7 lumps per hour** when used with this mod. More info here: [https://pastebin.com/WSdRdqx2]

This mod is entirely hand-coded with NO AI assistance of any form. It has a long history of being a browser-exclusive mod; it was created on January, 2024. 

This mod currently does not support translations.

## Installation
Use Sweet finder on web using the following bookmarklet:
`javascript:{(function(){Game.LoadMod('https://glander.club/asjs/X0hQVTeP');})();}`
It is also usable as a console command.

If you use tampermonkey or greasemonkey, use the following userscript:
```js 
// ==UserScript==
// @name Sweet finder
// @namespace sweetFinder
// @include https://orteil.dashnet.org/cookieclicker/
// @include https://cookieclicker.eu/cookieclicker/
// @grant none
// ==/UserScript==

window.eval("javascript:{(function(){Game.LoadMod('javascript:{(function(){Game.LoadMod('https://glander.club/asjs/X0hQVTeP');})();}');})();}");
```

## Contact
I am the mod creator. To contact me regarding bugs, feature requests, and questions/concerns, DM me on discord: @cursedsliver (make sure that you don't misspell it!)

P.S. There is now a FtHoF Planner **v6.1**! It is more powerful than v5 or v4: [https://plasma4.github.io/FtHoF-Planner-v6]