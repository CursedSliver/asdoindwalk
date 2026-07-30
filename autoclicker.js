(() => { 
    // LZString: https://github.com/pieroxy/lz-string
    var LZString=function(){var r=String.fromCharCode,o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$",e={};function t(r,o){if(!e[r]){e[r]={};for(var n=0;n<r.length;n++)e[r][r.charAt(n)]=n}return e[r][o]}var i={compressToBase64:function(r){if(null==r)return"";var n=i._compress(r,6,function(r){return o.charAt(r)});switch(n.length%4){default:case 0:return n;case 1:return n+"===";case 2:return n+"==";case 3:return n+"="}},decompressFromBase64:function(r){return null==r?"":""==r?null:i._decompress(r.length,32,function(n){return t(o,r.charAt(n))})},compressToUTF16:function(o){return null==o?"":i._compress(o,15,function(o){return r(o+32)})+" "},decompressFromUTF16:function(r){return null==r?"":""==r?null:i._decompress(r.length,16384,function(o){return r.charCodeAt(o)-32})},compressToUint8Array:function(r){for(var o=i.compress(r),n=new Uint8Array(2*o.length),e=0,t=o.length;e<t;e++){var s=o.charCodeAt(e);n[2*e]=s>>>8,n[2*e+1]=s%256}return n},decompressFromUint8Array:function(o){if(null==o)return i.decompress(o);for(var n=new Array(o.length/2),e=0,t=n.length;e<t;e++)n[e]=256*o[2*e]+o[2*e+1];var s=[];return n.forEach(function(o){s.push(r(o))}),i.decompress(s.join(""))},compressToEncodedURIComponent:function(r){return null==r?"":i._compress(r,6,function(r){return n.charAt(r)})},decompressFromEncodedURIComponent:function(r){return null==r?"":""==r?null:(r=r.replace(/ /g,"+"),i._decompress(r.length,32,function(o){return t(n,r.charAt(o))}))},compress:function(o){return i._compress(o,16,function(o){return r(o)})},_compress:function(r,o,n){if(null==r)return"";var e,t,i,s={},u={},a="",p="",c="",l=2,f=3,h=2,d=[],m=0,v=0;for(i=0;i<r.length;i+=1)if(a=r.charAt(i),Object.prototype.hasOwnProperty.call(s,a)||(s[a]=f++,u[a]=!0),p=c+a,Object.prototype.hasOwnProperty.call(s,p))c=p;else{if(Object.prototype.hasOwnProperty.call(u,c)){if(c.charCodeAt(0)<256){for(e=0;e<h;e++)m<<=1,v==o-1?(v=0,d.push(n(m)),m=0):v++;for(t=c.charCodeAt(0),e=0;e<8;e++)m=m<<1|1&t,v==o-1?(v=0,d.push(n(m)),m=0):v++,t>>=1}else{for(t=1,e=0;e<h;e++)m=m<<1|t,v==o-1?(v=0,d.push(n(m)),m=0):v++,t=0;for(t=c.charCodeAt(0),e=0;e<16;e++)m=m<<1|1&t,v==o-1?(v=0,d.push(n(m)),m=0):v++,t>>=1}0==--l&&(l=Math.pow(2,h),h++),delete u[c]}else for(t=s[c],e=0;e<h;e++)m=m<<1|1&t,v==o-1?(v=0,d.push(n(m)),m=0):v++,t>>=1;0==--l&&(l=Math.pow(2,h),h++),s[p]=f++,c=String(a)}if(""!==c){if(Object.prototype.hasOwnProperty.call(u,c)){if(c.charCodeAt(0)<256){for(e=0;e<h;e++)m<<=1,v==o-1?(v=0,d.push(n(m)),m=0):v++;for(t=c.charCodeAt(0),e=0;e<8;e++)m=m<<1|1&t,v==o-1?(v=0,d.push(n(m)),m=0):v++,t>>=1}else{for(t=1,e=0;e<h;e++)m=m<<1|t,v==o-1?(v=0,d.push(n(m)),m=0):v++,t=0;for(t=c.charCodeAt(0),e=0;e<16;e++)m=m<<1|1&t,v==o-1?(v=0,d.push(n(m)),m=0):v++,t>>=1}0==--l&&(l=Math.pow(2,h),h++),delete u[c]}else for(t=s[c],e=0;e<h;e++)m=m<<1|1&t,v==o-1?(v=0,d.push(n(m)),m=0):v++,t>>=1;0==--l&&(l=Math.pow(2,h),h++)}for(t=2,e=0;e<h;e++)m=m<<1|1&t,v==o-1?(v=0,d.push(n(m)),m=0):v++,t>>=1;for(;;){if(m<<=1,v==o-1){d.push(n(m));break}v++}return d.join("")},decompress:function(r){return null==r?"":""==r?null:i._decompress(r.length,32768,function(o){return r.charCodeAt(o)})},_decompress:function(o,n,e){var t,i,s,u,a,p,c,l=[],f=4,h=4,d=3,m="",v=[],g={val:e(0),position:n,index:1};for(t=0;t<3;t+=1)l[t]=t;for(s=0,a=Math.pow(2,2),p=1;p!=a;)u=g.val&g.position,g.position>>=1,0==g.position&&(g.position=n,g.val=e(g.index++)),s|=(u>0?1:0)*p,p<<=1;switch(s){case 0:for(s=0,a=Math.pow(2,8),p=1;p!=a;)u=g.val&g.position,g.position>>=1,0==g.position&&(g.position=n,g.val=e(g.index++)),s|=(u>0?1:0)*p,p<<=1;c=r(s);break;case 1:for(s=0,a=Math.pow(2,16),p=1;p!=a;)u=g.val&g.position,g.position>>=1,0==g.position&&(g.position=n,g.val=e(g.index++)),s|=(u>0?1:0)*p,p<<=1;c=r(s);break;case 2:return""}for(l[3]=c,i=c,v.push(c);;){if(g.index>o)return"";for(s=0,a=Math.pow(2,d),p=1;p!=a;)u=g.val&g.position,g.position>>=1,0==g.position&&(g.position=n,g.val=e(g.index++)),s|=(u>0?1:0)*p,p<<=1;switch(c=s){case 0:for(s=0,a=Math.pow(2,8),p=1;p!=a;)u=g.val&g.position,g.position>>=1,0==g.position&&(g.position=n,g.val=e(g.index++)),s|=(u>0?1:0)*p,p<<=1;l[h++]=r(s),c=h-1,f--;break;case 1:for(s=0,a=Math.pow(2,16),p=1;p!=a;)u=g.val&g.position,g.position>>=1,0==g.position&&(g.position=n,g.val=e(g.index++)),s|=(u>0?1:0)*p,p<<=1;l[h++]=r(s),c=h-1,f--;break;case 2:return v.join("")}if(0==f&&(f=Math.pow(2,d),d++),l[c])m=l[c];else{if(c!==h)return null;m=i+i.charAt(0)}v.push(m),l[h++]=i+m.charAt(0),i=m,0==--f&&(f=Math.pow(2,d),d++)}}};return i}();"function"==typeof define&&define.amd?define(function(){return LZString}):"undefined"!=typeof module&&null!=module?module.exports=LZString:"undefined"!=typeof angular&&null!=angular&&angular.module("LZString",[]).factory("LZString",function(){return LZString});
    // hijack loc to record all loc strings
    /*window.locSet = new Set();
    const loc = t => {
        window.locSet.add(t);
        return t;
    }*/
    function r() { Game.registerMod('metaclicker', {
    init: function() {
        this.TraversalPattern.addToCatalogue(this.TraversalPattern.createFromData(this.traversalPatternsData));
        this.setTraversalPattern(this.TraversalPattern.catalogue[1]);
        this.applyStyles();
        AddLanguage('EN', 'english', LANG, true);
        const lang = localStorageGet('CookieClickerLang') ?? 'EN';
        const langMap = {
            'CN': LANG_CN
        }
        if (lang !== 'EN' && langMap[lang]) {
            AddLanguage(lang, Langs[lang].name, langMap[lang], true);
        }
        document.addEventListener('mousemove', e => {
            this.track.realMouseX = e.clientX;
            this.track.realMouseY = e.clientY;
        });
        document.addEventListener('mousedown', e => {
            this.track.realMouseHeld = true;
        });
        document.addEventListener('mouseup', e => {
            this.track.realMouseHeld = false;
        });
        this.createHotkeys();
        this.createWidget();
        Game.registerHook('logic', () => this.updateCustomParticles());
        Game.registerHook('logic', () => this.syncPrefCheckboxes());
        this.injectParticleDrawPoint();
        this.injectParticleAddSuppression();
        this.injectCookieSoundSuppress();
        Game.registerHook('draw', () => this.regenerateLimiters());
        this.buildCookieImagesCache();
        Game.registerHook('check', () => this.buildCookieImagesCache());
        Game.registerHook('reset', hard => {
            if (hard) { 
                this.state.lbMode = 'none';
                this.refreshTab();
            }
        });
    },
    state: {
        enabled: false,
        clickIntervalMS: 20,
        clickLimitEnabled: false,
        clickLimit: 100,
        toggleHotkey: null, // set later with a Hotkey object
        bigCookieEnabled: false,
        bigCookieClickCap: 'faithful', // "faithful" | "hacker" | "godmode"
        visuals: 'enhanced', // "hidden" | "vanilla" | "enhanced"
        bigCookieClickMode: 'automatic', // "automatic" | "hoverover" | "held-down"
        bigCookieClicksIntervalMS: 20,
        bigCookieToggleHotkey: null,
        traversalPattern: null,
        speedMult: 1,
        reverseTraversal: false,
        constantSpeed: false,
        trail: false,
        soundMult: 100, // 0-150 percentage multiplier for click sound volume
        lbMode: 'none', // "none" | "competitive" | "finnless" | "general"
        openedTab: 'universal',
    },
    track: {
        realMouseX: -1,
        realMouseY: -1,
        realMouseHeld: false,
        lastBigCookieClick: performance.now(),
        queuedClicks: 0, // for when the interval is less than 1 ms (godmode), batch clicks
        tAccumulator: 0,
        lastBigCookieEnableDate: performance.now(),
        clicksSoFar: 0,
        particleGenerationLimiter: 100, // 100 particles, regenerates over time
        textGenerationLimiter: 15,
        soundLimiter: 10,
        velX: 0, velY: 0, //simulated velocities, not real velocities, for big cookie particle visuals only
        lastClickSpot: [0, 0],
        defaultParticleAddSuppress: false,
        soundSuppressed: false,
        trailTimeout: null
    },
    regenerateLimiters: function() {
        // Bundles particle generation to draw speed to avoid throttling
        const actualSpeed = Math.max(this.state.bigCookieClicksIntervalMS, (this.state.bigCookieClickCap === 'faithful')?20:0, (this.state.bigCookieClickCap === 'hacker')?1:0);
        const particleGenRecovery = (4 * Math.min(Math.log2(Math.max(1000 / actualSpeed - 120, 0) / 240 + 2), 3));
        this.track.particleGenerationLimiter = Math.min(this.track.particleGenerationLimiter + particleGenRecovery, 100);
        this.track.textGenerationLimiter = Math.min(this.track.textGenerationLimiter + particleGenRecovery / 2, 15);  
        this.track.soundLimiter = Math.min(this.track.soundLimiter + particleGenRecovery / 4, 10);
    },
    universalLoop: function() {
        if (!this.state.enabled) {
            return;
        }
        this.mockClick(this.track.realMouseX, this.track.realMouseY);
        this.track.clicksSoFar++;
        if (this.state.clickLimitEnabled && this.track.clicksSoFar >= this.state.clickLimit) {
            this.disableAC();
            this.track.clicksSoFar = 0;
            if (l('ac-enabled')) {
                l('ac-enabled').textContent = loc('Click to enable');
            }
            return;
        }
        setTimeout(() => this.universalLoop(), this.state.clickIntervalMS);
    },
    enableAC: function() {
        this.state.enabled = true;
        this.track.clicksSoFar = 0;
        this.universalLoop();
    },
    disableAC: function() {
        this.state.enabled = false;
    },
    bigCookieLoop: function() {
        if (!this.state.bigCookieEnabled) {
            return;
        }

        const left = Game.LeftBackground?.canvas;
        if (!left) {
            setTimeout(() => this.bigCookieLoop(), Math.ceil(this.state.bigCookieClicksIntervalMS));
            return;
        }
        const oldX = Game.mouseX, oldY = Game.mouseY;
        const centerX = left.getBoundingClientRect().left + left.getBoundingClientRect().width / 2;
        const centerY = /*left.getBoundingClientRect().top + */left.getBoundingClientRect().height * 0.4; // game code is bad

        const mode = this.state.bigCookieClickMode;
        let shouldClick = true;

        if (mode === 'hoverover' || mode === 'held-down') {
            const bigCookie = l('bigCookie');
            let hovered = false;
            if (bigCookie) {
                const el = document.elementFromPoint(this.track.realMouseX, this.track.realMouseY);
                if (el && (el === bigCookie || bigCookie.contains(el))) {
                    hovered = true;
                }
            }
            if (!hovered) {
                shouldClick = false;
            }
            if (mode === 'held-down' && !this.track.realMouseHeld) {
                shouldClick = false;
            }
            this.track.velX = this.track.velY = 0;
        } else if (this.state.visuals !== 'hidden') {
            const pattern = this.state.traversalPattern;
            const totalSpace = pattern.spaceTable[pattern.spaceTable.length - 1];
            const acc = this.state.reverseTraversal
                ? totalSpace - (this.track.tAccumulator % totalSpace)
                : this.track.tAccumulator;
            const off = pattern.positionAt(pattern.tAt(this.state.constantSpeed?acc:pattern.distAt(acc)))[0]
                .map(e => e * 128);
            this.track.tAccumulator += (performance.now() - this.track.lastBigCookieClick) / 1000 * pattern.speedMult * this.state.speedMult;
            Game.mouseX = centerX + off[0];
            Game.mouseY = centerY + off[1];

            const friction = (0.001 + 0.019 * Math.pow(Math.min(this.state.bigCookieClicksIntervalMS / 100, 1), 0.5)) ** ((performance.now() - this.track.lastBigCookieClick) / 1000);
            this.track.velX *= friction;
            this.track.velY *= friction;
            if (this.track.lastClickSpot) {
                this.track.velX += (off[0] - this.track.lastClickSpot[0]) / Math.sqrt(this.state.speedMult);
                this.track.velY += (off[1] - this.track.lastClickSpot[1]) / Math.sqrt(this.state.speedMult);
                //console.log(this.track.velX, this.track.velY, off[0] - this.track.lastClickSpot[0], off[1] - this.track.lastClickSpot[1]);
            }
            this.track.lastClickSpot = [off[0], off[1]];
        }

        Game.BigCookieState = 2;

        if (shouldClick) {
            const oldClick = Game.lastClick;
            const ev = new Event('click');
            if (this.state.visuals !== 'vanilla') { this.track.defaultParticleAddSuppress = true; }
            if (this.track.soundLimiter < 1) {
                this.track.soundSuppressed = true;
            } else {
                this.track.soundLimiter--;
            }
            if (this.state.bigCookieClickCap === 'godmode') {
                const now = performance.now();
                this.track.queuedClicks += Math.min(now - this.track.lastBigCookieClick, 3) / this.state.bigCookieClicksIntervalMS;
                this.track.lastBigCookieClick = now;
                this.customClickCookie(ev, Math.floor(this.track.queuedClicks));
                this.track.queuedClicks = this.track.queuedClicks % 1;
            } else {
                this.track.lastBigCookieClick = performance.now();
                this.customClickCookie(ev);
            }
            if (this.state.bigCookieClickCap === 'hacker') {
                Game.lastClick = oldClick;
            }
            this.track.defaultParticleAddSuppress = false;
            this.track.soundSuppressed = false;
        }
        Game.mouseX = oldX;
        Game.mouseY = oldY;

        setTimeout(() => this.bigCookieLoop(), Math.ceil(this.state.bigCookieClicksIntervalMS));
    },
    customClickCookie: function(ev, count = 1) {
        if (this.state.bigCookieClickCap === 'faithful' && Date.now() - Game.lastClick < 20) { return; }
        if (Game.OnAscend || Game.AscendTimer>0) { return; }
        for (let i = 0; i < count; i++) { Game.ClickCookie(ev); }
        if (this.state.visuals !== 'enhanced' || this.track.particleGenerationLimiter <= 0) { return; }

        const actualSpeed = Math.max(Math.max(this.state.bigCookieClicksIntervalMS, 1), (this.state.bigCookieClickCap === 'faithful')?20:0, (this.state.bigCookieClickCap === 'hacker')?1:0);
        const vx = this.track.velX, vy = this.track.velY;
        const baseMult = Math.pow(1000 / actualSpeed, 0.5) / 10 + 1;
        const reducedMult = Math.pow(baseMult, 1 / 3);
        // estimate: when ms = 1, particle drama +300% approximately

        // big cookie wobbling simulation
        Game.BigCookieSizeD -= Math.min((3 + Math.sqrt(vx * vx + vy * vy)) * reducedMult / 150 * actualSpeed, 1) / 1000 * Game.fps;

        this.track.particleGenerationLimiter--; 
        if (this.track.textGenerationLimiter > 0 && Game.prefs.numbers) {
            this.track.textGenerationLimiter--;
            this.ParticleTypes.Text.create()
                .setX(Game.mouseX+Math.random()*8-4)
                .setY(Game.mouseY-8+Math.random()*8-4)
                .setContent('+' + Beautify(Game.computedMouseCps))
                .setDY(-60)
                .deploy()
        }
        const chosen = Game.season === 'fools' ? [0, 0, 'smallDollars.png'] : 
            ((Game.bakeryName === 'ortiel' || Math.random() < 1/10000) ? [17, 5] : choose(this.cookieImagesCache).icon);
        Game.prefs.particles && this.ParticleTypes.Cookie.create()
            .setX(Game.mouseX)
            .setY(Game.mouseY)
            .setDX(((Math.random()*120-60) + vx * 5) * reducedMult)
            .setDY(((Math.random()*-80-10) + vy * 5) * reducedMult * reducedMult) // counteracts the increased gravity
            .setDDY(7.5 * reducedMult)
            .setScale(Math.max(0.5 + Math.random()*0.75 / reducedMult, 0.25))
            .setMT((1 + 2 * Math.random() * reducedMult))
            .setZ(2)
            .setCookie(chosen[0], chosen[1])
            .setURL(chosen[2] ?? '')
            .deploy();
        /*this.ParticleTypes.Cookie.create()
            .setX(Game.mouseX)
            .setY(Game.mouseY)
            .setDX(0)
            .setDY(0)
            .setDDY(0)
            .setScale(0.25)
            .setMT(1000)
            .setZ(2)
            .setCookie(chosen[0], chosen[1])
            .setURL(chosen[2] ?? '')
            .deploy();*/
    },
    cookieImagesCache: [],
    buildCookieImagesCache: function() {
        this.cookieImagesCache = [];
        for (let i in Game.Upgrades) {
            if (Game.Upgrades[i].bought && Game.Upgrades[i].pool === 'cookie') {
                this.cookieImagesCache.push(Game.Upgrades[i]);
            }
        }
    },
    enableBigCookieAC: function() {
        this.state.bigCookieEnabled = true;
        this.track.lastBigCookieClick = performance.now();
        this.track.lastBigCookieEnableDate = performance.now();
        if (this.state.bigCookieClickCap === 'godmode') {
            Game.Win('Cheated cookies taste awful');
        }
        this.lastClickSpot = null;
        this.track.velX = 0;
        this.track.velY = 0;
        if (this.state.trail && this.state.bigCookieClickMode === 'automatic' && this.state.visuals === 'enhanced') {
            this.trailSpawnLoop();
        }
        this.bigCookieLoop();
    },
    disableBigCookieAC: function() {
        this.state.bigCookieEnabled = false;
        if (Game.BigCookieState === 2) { Game.BigCookieState = 0; }
        this.stopTrailLoop();
    },
    trailSpawnLoop: function() {
        if (!this.state.trail || !this.state.bigCookieEnabled || this.state.bigCookieClickMode !== 'automatic' || this.state.visuals !== 'enhanced') {
            return;
        }
        const left = Game.LeftBackground?.canvas;
        if (!left) {
            this.track.trailTimeout = setTimeout(() => this.trailSpawnLoop(), 20);
            return;
        }
        const centerX = left.getBoundingClientRect().left + left.getBoundingClientRect().width / 2;
        const centerY = left.getBoundingClientRect().height * 0.4;
        const pattern = this.state.traversalPattern;
        if (!pattern) {
            this.track.trailTimeout = setTimeout(() => this.trailSpawnLoop(), 20);
            return;
        }
        const totalSpace = pattern.spaceTable[pattern.spaceTable.length - 1];
        const acc = this.state.reverseTraversal
            ? totalSpace - (this.track.tAccumulator % totalSpace)
            : this.track.tAccumulator % totalSpace;
        const off = pattern.positionAt(pattern.tAt(this.state.constantSpeed ? acc : pattern.distAt(acc)))[0]
            .map(e => e * 128);
        const x = centerX + off[0];
        const y = centerY + off[1];

        this.ParticleTypes.Trail.create()
            .setX(x)
            .setY(y)
            .setScale(Math.random() * 0.5 + 0.2)
            .setRot(Math.random() * Math.PI * 2)
            .setDR((Math.random() - 0.5) * 1.5)
            .setMT(5 / this.state.speedMult)
            .deploy();

        this.track.trailTimeout = setTimeout(() => this.trailSpawnLoop(), 20);
    },
    stopTrailLoop: function() {
        if (this.track.trailTimeout !== null) {
            clearTimeout(this.track.trailTimeout);
            this.track.trailTimeout = null;
        } 
    },
    createWidget: function() {
        var that = this;
        var container = document.createElement('div');
        container.id = 'metaclicker-container';
        container.classList.add('framed');
        container.innerHTML = `
            <h3>${loc('Metaclicker v%1', '1.0')}<a class="option" id="metaclicker-minimize">${loc('-')}</a></h3>
            <div class="line"></div>
            <div id="tab-switcher">
                <a class="option tab selected" id="tab-universal">${loc('Universal')}</a>
                <a class="option tab" id="tab-big-cookie">${loc('Big Cookie')}</a>
            </div>
            <div id="metaclicker-content" class="block">
                ${this.contentAC()}
            </div>
        `;
        l('game').appendChild(container);
        this.eventsAC();
        l('tab-universal').addEventListener('click', e => {
            l('metaclicker-content').innerHTML = this.contentAC();
            this.eventsAC();
            e.target.parentNode.querySelectorAll('.selected').forEach(e => e.classList.remove('selected'));
            e.target.classList.add('selected');
            this.state.openedTab = 'universal';
        });
        l('tab-big-cookie').addEventListener('click', e => {
            l('metaclicker-content').innerHTML = this.contentBigCookieAC();
            this.eventsBigCookieAC();
            e.target.parentNode.querySelectorAll('.selected').forEach(e => e.classList.remove('selected'));
            e.target.classList.add('selected');
            this.state.openedTab = 'big-cookie';
        });

        let restoreBtn = document.createElement('a');
        restoreBtn.id = 'metaclicker-restore';
        restoreBtn.className = 'option framed';
        restoreBtn.textContent = loc('+');
        restoreBtn.style.cssText = 'position:absolute;bottom:20px;right:20px;z-index:100001;display:none;padding:4px 12px;font-size:18px;';
        l('game').appendChild(restoreBtn);

        l('metaclicker-minimize').addEventListener('click', function() {
            container.style.display = 'none';
            restoreBtn.style.display = '';
        });
        restoreBtn.addEventListener('click', function() {
            container.style.display = '';
            restoreBtn.style.display = 'none';
        });
    },
    refreshTab: function() {
        const content = l('metaclicker-content');
        if (!content) { return; }
        switch(this.state.openedTab) {
            case 'universal': 
                content.innerHTML = this.contentAC();
                this.eventsAC();
                break;
            case 'big-cookie':
                content.innerHTML = this.contentBigCookieAC();
                this.eventsBigCookieAC();
                break;
        }
    },
    contentAC: function() {
        // Within autoclicker (universal):
        // (in this order) enabled, toggleHotkey, clickIntervalMS
        const lb = this.state.lbMode === 'none';
        if (this.state.lbMode === 'competitive') {
            return `
            <div class="block lb-warn">${loc('Autoclickers are not allowed in the competitive leaderboard.')}</div>
            `;
        }
        return `
        <a class="option big-button${this.state.enabled?' ac-active':''}" id="ac-enabled">${this.state.enabled?loc('Click to disable'):loc('Click to enable')}</a>
        <br>${loc('Toggle hotkey:')} <div class="block hotkey-details" id="hotkey-details-container">${this.state.toggleHotkey.toString()}</div> <a class="option" id="hotkey-record">${loc('Record')}</a>
        <div class="line"></div>
        ${loc('Click interval (ms):')} <input type="number" id="ac-clicks-per-second" value="${this.state.clickIntervalMS}">
        <div class="line"></div>
        <label class="click-limit-row">
            <input type="checkbox" id="ac-click-limit-enabled" ${this.state.clickLimitEnabled ? 'checked' : ''}>
            ${loc('Click')}
            <input type="number" id="ac-click-limit" value="${this.state.clickLimit}">
            ${loc('times')}
        </label>
        `;
    },
    eventsAC: function() {
        var that = this;
        // Toggle universal autoclicker on/off
        l('ac-enabled')?.addEventListener?.('click', function() {
            if (that.state.enabled) {
                that.disableAC();
            } else {
                that.enableAC();
            }
            l('ac-enabled').textContent = that.state.enabled ? loc('Click to disable') : loc('Click to enable');
            l('ac-enabled').classList.toggle('ac-active', that.state.enabled);
        });
        // Hotkey
        l('hotkey-record')?.addEventListener?.('click', function() {
            that.state.toggleHotkey.record(e => {
                if (l('hotkey-details-container')) l('hotkey-details-container').innerText = that.state.toggleHotkey.toString();
                if (e.status === 'set' && l('hotkey-record')) {
                    l('hotkey-record').innerText = loc('Record');
                }
            });
            l('hotkey-record').innerText = loc('...');
            l('hotkey-details-container').innerText = that.state.toggleHotkey.toString();
        });
        // Clicks interval (ms between clicks)
        l('ac-clicks-per-second')?.addEventListener?.('change', function() {
            var v = parseInt(this.value, 10);
            if (!isNaN(v) && v > 0) {
                that.state.clickIntervalMS = v;
            } else {
                this.value = that.state.clickIntervalMS;
            }
        });
        // Click limit (auto-stop after N clicks)
        l('ac-click-limit-enabled')?.addEventListener?.('change', function() {
            that.state.clickLimitEnabled = this.checked;
        });
        l('ac-click-limit')?.addEventListener?.('change', function() {
            var v = parseInt(this.value, 10);
            if (!isNaN(v) && v > 0) {
                that.state.clickLimit = v;
            } else {
                this.value = that.state.clickLimit;
            }
        });
        l('lb-configure')?.addEventListener?.('click', e => this.promptLB());
    },
    contentBigCookieAC: function() {
        // Within big cookie autoclicker: 
        // (in this order) enabled, bigCookieToggleHotkey, 
        // clicksPerSecond, bigCookieClickCap, 
        // bigCookieclickerMode
        // traversalPattern, speedMult
        const lb = this.state.lbMode === 'none';
        if (this.state.lbMode === 'competitive') {
            return `
            <div class="block lb-warn">${loc('Autoclickers are not allowed in the competitive leaderboard.')}</div>
            <a class="option big-button" id="lb-configure">${loc('Leaderboard mode: %1', this.state.lbMode.toUpperCase())}</a>
            `;
        }
        return `
        <a class="option big-button${this.state.bigCookieEnabled?' ac-active':''}" id="big-cookie-ac-enabled">${this.state.bigCookieEnabled?loc('Click to disable'):loc('Click to enable')}</a>
        <br>${loc('Toggle hotkey:')} <div class="block hotkey-details" id="hotkey-details-container-big-cookie">${this.state.bigCookieToggleHotkey.toString()}</div> <a class="option" id="hotkey-record-big-cookie">${loc('Record')}</a>
        <br><div id="click-interval" class="${this.state.bigCookieClickCap === 'godmode'?'ac-details-hidden':''}">${loc('Click interval (ms):')} <input type="number" id="big-cookie-click-interval" value="${this.state.bigCookieClicksIntervalMS}"></div>
        <div id="clicks-per-second" class="${this.state.bigCookieClickCap !== 'godmode'?'ac-details-hidden':''}">${loc('Clicks per second:')} <input type="number" id="big-cookie-clicks-per-second" value="${Math.floor(1000 / this.state.bigCookieClicksIntervalMS)}"></div>
        <div class="${lb?'':'ac-details-hidden'}">${loc('Click cap:')} <select id="big-cookie-clicker-cap">
            <option value="faithful" ${this.state.bigCookieClickCap === 'faithful' ? 'selected' : ''}>${loc('Faithful')}</option>
            <option value="hacker" ${this.state.bigCookieClickCap === 'hacker' ? 'selected' : ''}>${loc('Hacker')}</option>
            <option value="godmode" ${this.state.bigCookieClickCap === 'godmode' ? 'selected' : ''}>${loc('God mode')}</option>
        </select><a class="option" id="click-cap-help">?</a></div>

        <div class="block lb-warn${!lb?'':' ac-details-hidden'}">${loc('Some settings are restricted due to your leaderboard settings. To use the big cookie autoclicker, you must hold down your mouse over the big cookie for it to activate.')}</div>
        <div class="line${lb?'':' ac-details-hidden'}"></div>
        <div class="${lb?'':'ac-details-hidden'}">${loc('Click mode:')} <select id="big-cookie-clicker-mode">
            <option value="automatic" ${this.state.bigCookieClickMode === 'automatic' ? 'selected' : ''}>${loc('Automatic')}</option>
            <option value="hoverover" ${this.state.bigCookieClickMode === 'hoverover' ? 'selected' : ''}>${loc('Hover over')}</option>
            <option value="held-down" ${this.state.bigCookieClickMode === 'held-down' ? 'selected' : ''}>${loc('Held down')}</option>
        </select></div>
        <div class="line${lb?'':' ac-details-hidden'}"></div>
        <div class="${lb?'':'ac-details-hidden'}">${loc('Visuals:')} <select id="big-cookie-clicker-visuals">
            <option value="hidden" ${this.state.visuals === 'hidden' ? 'selected' : ''}>${loc('Hidden')}</option>
            <option value="vanilla" ${this.state.visuals === 'vanilla' ? 'selected' : ''}>${loc('Vanilla')}</option>
            <option value="enhanced" ${this.state.visuals === 'enhanced' ? 'selected' : ''}>${loc('Enhanced')}</option>
        </select></div>
        <div class="ac-prefs-row">
            <label><input type="checkbox" id="ac-prefs-numbers" ${Game.prefs.numbers ? 'checked' : ''}> ${loc('Numbers')}</label>
            <label><input type="checkbox" id="ac-prefs-particles" ${Game.prefs.particles ? 'checked' : ''}> ${loc('Particles')}</label>
        </div>
        <label class="ac-sound-slider-label">${loc('Click sound')}: <input type="range" id="ac-sound-mult" min="0" max="150" value="${this.state.soundMult}" step="1"><span id="ac-sound-mult-value">${this.state.soundMult}%</span></label>
        <div id="traversal-pattern-container" style="${this.state.bigCookieClickMode === 'automatic'?'':'display:none;'}">
            <div class="line"></div>
            ${loc('Traversal pattern:')} <select id="big-cookie-traversal-pattern">
            ${this.TraversalPattern.catalogue.map(e => `<option value="${e.name}" ${e.name === this.state.traversalPattern.name ? 'selected' : ''}>${e.name}</option>`).join('')}
            </select>
            <br>${loc('Speed multiplier:')} <input type="number" id="big-cookie-speed-mult" value="${this.state.speedMult}">
            <br><label><input type="checkbox" id="big-cookie-reverse-traversal" ${this.state.reverseTraversal ? 'checked' : ''}> ${loc('Reverse direction')}</label>
            <br><label><input type="checkbox" id="big-cookie-constant-speed" ${this.state.constantSpeed ? 'checked' : ''}> ${loc('Constant travel speed')}</label>
        </div>
        <div class="${this.state.visuals === 'enhanced' ? '' : 'ac-details-hidden'}">
            <label><input type="checkbox" id="big-cookie-trail" ${this.state.trail ? 'checked' : ''}> ${loc('Trail particles')}</label>
        </div>
        <div class="line"></div>
        <a class="option big-button" id="lb-configure">${loc('Leaderboard mode: %1', this.state.lbMode.toUpperCase())}</a>
        `;
    },
    eventsBigCookieAC: function() {
        var that = this;
        // Toggle big cookie autoclicker on/off
        l('big-cookie-ac-enabled')?.addEventListener?.('click', function() {
            if (that.state.bigCookieEnabled) {
                that.disableBigCookieAC();
            } else {
                that.enableBigCookieAC();
            }
            l('big-cookie-ac-enabled').textContent = that.state.bigCookieEnabled ? loc('Click to disable') : loc('Click to enable');
            l('big-cookie-ac-enabled').classList.toggle('ac-active', that.state.bigCookieEnabled);
        });
        // Hotkey
        l('hotkey-record-big-cookie')?.addEventListener?.('click', function() {
            that.state.bigCookieToggleHotkey.record(e => {
                if (l('hotkey-details-container-big-cookie')) l('hotkey-details-container-big-cookie').innerText = that.state.bigCookieToggleHotkey.toString();
                if (e.status === 'set' && l('hotkey-record-big-cookie')) {
                    l('hotkey-record-big-cookie').innerText = loc('Record');
                }
            });
            l('hotkey-record-big-cookie').innerText = loc('...');
            l('hotkey-details-container-big-cookie').innerText = that.state.bigCookieToggleHotkey.toString();
        });
        // Clicks intervals
        l('big-cookie-click-interval')?.addEventListener?.('change', function() {
            var v = parseInt(this.value, 10);
            if (!isNaN(v) && v > 0) {
                that.state.bigCookieClicksIntervalMS = v;
            } else {
                this.value = that.state.bigCookieClicksIntervalMS;
            }
            l('big-cookie-clicks-per-second').value = Math.round(1000 / v);
        });
        l('big-cookie-clicks-per-second')?.addEventListener?.('change', function() {
            var v = parseInt(this.value, 10);
            if (!isNaN(v) && v > 0) {
                that.state.bigCookieClicksIntervalMS = 1000 / v;
            } else {
                this.value = Math.floor(1000 / that.state.bigCookieClicksIntervalMS);
            }
            l('big-cookie-click-interval').value = Math.max(Math.round(1000 / v), 1);
        });
        // Click cap
        l('big-cookie-clicker-cap')?.addEventListener?.('change', function() {
            if (this.value === 'godmode') {
                that.promptGodmodeWarn();
                this.value = that.state.bigCookieClickCap;
                return;
            }
            that.state.bigCookieClickCap = this.value;
            that.godModeToggle(this.value);
            that.track.queuedClicks = 0;
        });
        // Click mode
        l('big-cookie-clicker-mode')?.addEventListener?.('change', function() {
            that.state.bigCookieClickMode = this.value;
            if (this.value === 'automatic') {
                l('traversal-pattern-container').style.display = '';
                if (that.state.trail && that.state.bigCookieEnabled && that.state.visuals === 'enhanced') {
                    that.trailSpawnLoop();
                }
            } else {
                l('traversal-pattern-container').style.display = 'none';
                that.stopTrailLoop();
            }
        });
        l('big-cookie-clicker-visuals')?.addEventListener?.('change', function() {
            that.state.visuals = this.value;
            if (this.value !== 'enhanced') {
                that.stopTrailLoop();
            } else if (that.state.trail && that.state.bigCookieEnabled && that.state.bigCookieClickMode === 'automatic') {
                that.trailSpawnLoop();
            }
            that.refreshTab();
        });
        // Traversal pattern
        l('big-cookie-traversal-pattern')?.addEventListener?.('change', function() {
            var pattern = that.TraversalPattern.catalogue.find(function(p) { return p.name === this.value; }.bind(this));
            if (pattern) {
                that.setTraversalPattern(pattern);
            }
        });
        // Speed multiplier
        l('big-cookie-speed-mult')?.addEventListener?.('change', function() {
            var v = parseFloat(this.value);
            if (!isNaN(v) && v > 0) {
                that.state.speedMult = v;
            } else {
                this.value = that.state.speedMult;
            }
        });
        // Reverse traversal checkbox
        l('big-cookie-reverse-traversal')?.addEventListener?.('change', function() {
            that.state.reverseTraversal = this.checked;
        });
        l('big-cookie-constant-speed')?.addEventListener?.('change', function() {
            that.state.constantSpeed = this.checked;
        });
        l('big-cookie-trail')?.addEventListener?.('change', function() {
            that.state.trail = this.checked;
            if (this.checked && that.state.bigCookieEnabled && that.state.bigCookieClickMode === 'automatic' && that.state.visuals === 'enhanced') {
                that.trailSpawnLoop();
            } else if (!this.checked) {
                that.stopTrailLoop();
            }
        });
        l('ac-prefs-numbers')?.addEventListener?.('change', function() {
            Game.prefs.numbers = this.checked ? 1 : 0;
            Game.UpdateMenu();
        });
        l('ac-prefs-particles')?.addEventListener?.('change', function() {
            Game.prefs.particles = this.checked ? 1 : 0;
            Game.UpdateMenu();
        });
        l('ac-sound-mult')?.addEventListener?.('input', function() {
            that.state.soundMult = parseInt(this.value);
            var valEl = l('ac-sound-mult-value');
            if (valEl) valEl.textContent = this.value + '%';
        });
        l('click-cap-help')?.addEventListener?.('click', e => this.promptCap());
        l('lb-configure')?.addEventListener?.('click', e => this.promptLB());
    },
    godModeToggle: function(value) {
        if (!l('click-interval') || !l('clicks-per-second')) { return; }
        if (value === 'godmode') {
            l('click-interval').classList.add('ac-details-hidden');
            l('clicks-per-second').classList.remove('ac-details-hidden');
        } else {
            l('click-interval').classList.remove('ac-details-hidden');
            l('clicks-per-second').classList.add('ac-details-hidden');
        }
    },
    promptCap: function() {
        Game.Prompt(`
            <h3>${loc('Click cap explanation')}</h3>
            <div class="line"></div>
            <div class="block centered"><b>${loc('Faithful')}</b>
            <br>${loc('Click speed is capped to 50 clicks per second regardless what you set the interval to, which is what the game normally caps all autoclickers to.')}</div>
            <div class="block"><b>${loc('Hacker')}</b>
            <br>${loc('The autoclicker can click as fast as 1,000 clicks per second, which is not possible with any external autoclickers. Some people may consider this cheating.')}</div>
            <div class="block"><b>${loc('God mode')}</b>
            <br>${loc('"Click interval" is replaced with "Clicks per second", allowing you to click as fast as your CPU can handle. You will also get the Cheated Cookies Taste Awful shadow achievement.')}</div>
        `, [[loc('Got it')]]);
    },
    promptLB: function() {
        // If leaderboard mode is already set, show locked/read-only view
        if (this.state.lbMode !== 'none') {
            Game.Prompt(`
                <h3>${loc('Leaderboard settings')}</h3>
                <div class="line"></div>
                <div class="block">
                    ${loc('Leaderboard mode: %1', `<b>${loc(this.state.lbMode.charAt(0).toUpperCase() + this.state.lbMode.slice(1))}</b>`)}
                </div>
                <div class="block">
                    ${loc('Leaderboard mode selection is permanent. Once set, it cannot be changed for this save. Wiping save will reset leaderboard modes.')}
                </div>
            `, [[loc('All done!')]]);
            return;
        }
        // Leaderboard mode is still 'none', allow initial selection
        Game.Prompt(`
            <h3>${loc('Leaderboard settings')}</h3>
            <div class="line"></div>
            <div class="block">${loc('Leaderboard mode: ')}<select id="lb-mode">
                <option value="none" selected>${loc('None')}</option>
                <option value="competitive">${loc('Competitive')}</option>
                <option value="finnless">${loc('Finnless')}</option>
                <option value="general">${loc('General')}</option>
            </select></div>
            <div class="block">
                ${loc('Leaderboard modes are setting restrictions on the autoclicker, based on the %1.', `<a href="https://docs.google.com/spreadsheets/d/1qgqDVmOy3aTUjA0LTQnM3GXf6R9bXU7GU_ufSDC7h4o/edit" target="_blank">${loc('Dashnet Forums Cookie Clicker Leaderboards')}</a>`)}
                <div class="line"></div>
                ${loc('If you choose any leaderboard mode other than "none", some of your settings will be restricted.')}
                <br>${loc('The big cookie autoclicker\'s click mode will be forced to "Held down" in all leaderboards, and the click cap will be set to "Faithful".')} 
                <div class="line"></div>
                ${loc('In addition, you cannot use the autoclicker in the competitive leaderboard.')}
                <div class="line"></div>
                <div class="lb-warn">${loc('Warning: Once you select a leaderboard mode, it becomes permanent and cannot be changed later, even if you ascend!')}</div>
            </div>
        `, [
            [loc('Confirm selection'), `var s=l('lb-mode').value;if(s==='none'){Game.ClosePrompt();}else{metaclicker.promptLBConfirm(s);}`],
            [loc('Cancel')]
        ]);
    },
    lbPassPhrases: {
        competitive: 'all hail our lord lookas123',
        finnless: 'lets go gambling aw dang it',
        general: 'the genlarps are out of control'
    },
    promptLBConfirm: function(mode) {
        var modeLabel = loc(mode.charAt(0).toUpperCase() + mode.slice(1));
        Game.Prompt(`
            <h3>${loc('Confirm leaderboard mode')}</h3>
            <div class="line"></div>
            <div class="block">
                ${loc('You are about to set your leaderboard mode to %1.', '<b>' + modeLabel + '</b>')}
                <div class="line"></div>
                ${loc('This choice is permanent and irreversible. You will not be able to switch leaderboards or change this setting later.')}
                <div class="line"></div>
                ${loc('You will <b>not</b> join the leaderboard automatically. This mod will not prevent you from breaking any leaderboard rules and is not proof of eligibility. Make sure that you have already followed the rules for your leaderboard of choice. To join, follow the instructions by clicking on <a href="%1" target="_blank">this link</a>.', 'https://docs.google.com/spreadsheets/d/1qgqDVmOy3aTUjA0LTQnM3GXf6R9bXU7GU_ufSDC7h4o/edit')}
            </div>
            <div class="line"></div>
            <div class="block">
                ${loc('To confirm, please sort all words in the following phrase in alphabetical order separated by spaces, then type it in the box below.')}
                <br><b>${this.lbPassPhrases[mode]}</b>
                <input type="text" id="lb-confirm-input" style="width:100%;text-align:center;margin-top:8px;" placeholder="${loc('Type the confirmation phrase above')}">
                <div id="lb-confirm-error" class="warning" style="display:none;font-weight:bold;font-size:11px;margin-top:4px;"></div>
            </div>
        `, [
            [loc('Confirm'), 'var v=l(\'lb-confirm-input\').value.trim();if(v === \''+
                this.lbPassPhrases[mode].split(' ').sort().join(' ')
                +'\'){metaclicker.state.lbMode=\'' + mode + '\';if(\'' + mode + '\'!==\'competitive\'){metaclicker.state.bigCookieClickMode=\'held-down\';metaclicker.state.bigCookieClickCap=\'faithful\';metaclicker.state.visuals=\'vanilla\';}var el=l(\'metaclicker-content\');if(el){el.innerHTML=metaclicker.contentBigCookieAC();metaclicker.eventsBigCookieAC();}Game.ClosePrompt();}else{var err=l(\'lb-confirm-error\');if(err){err.style.display=\'\';err.innerHTML=\'' + loc('Phrase does not match. Please try again.') + '\';}}', 'float:left'],
            [loc('Cancel'), '', 'float:right']
        ]);
        // Focus the input field
        setTimeout(function() {
            var inp = l('lb-confirm-input');
            if (inp) inp.focus();
        }, 50);
    },
    promptGodmodeWarn: function() {
        Game.Prompt(`<id godmode-warn><noClose>
            <h3>${loc('Are you sure?')}</h3>
            <div class="line"></div>
            <div class="block">${loc('You will get the <b>%1</b> achievement. Are you sure you want to enable it?', Game.Achievements['Cheated cookies taste awful'].dname)}</div>
            <div class="line"></div>
        `, [[loc('Nevermind'), 'Game.ClosePrompt();'], [loc('I\'m aware of the consequences, proceed'), 'metaclicker.state.bigCookieClickCap=\'godmode\';l(\'big-cookie-clicker-cap\') && (l(\'big-cookie-clicker-cap\').value = \'godmode\');metaclicker.godModeToggle(\'godmode\');Game.Win(\'Cheated cookies taste awful\');Game.ClosePrompt();']]);
    },
    styles: `
    .option.tab.selected {
        border: #fff solid 1px;
        color: #fff;
    }
    #tab-switcher {
        margin-bottom: 4px;
    }
    #metaclicker-container {
        position: absolute;
        bottom: 20px;
        right: 20px;
        z-index: 100000;
        text-align: center;
        pointer-event: auto;
        padding-top: 10px;
        max-height: 75vh;
        overflow-y: auto;
    }
    #metaclicker-container input {
        max-width: 50px;
    }
    #metaclicker-minimize {
        float: right;
        margin: 0;
        margin-top: -3px;
        margin-left: -21px;
        padding: 3px 8px;
    }
    .option.big-button {
        width: 100%;
        box-sizing: border-box;
        margin-bottom: 5px;
    }
    .option.big-button.ac-active {
        border: 1px solid #fff;
        color: #fff;
        text-shadow: none;
        background-color: #222;
        box-shadow: 0px 0px 1px 2px rgba(0,0,0,0.5), 0px 1px 4px rgba(0,0,0,0.25), 0px 2px 3px 1px rgba(0,0,0,0.5) inset;
    }
    .option.big-button.ac-active:hover {
        border: 1px solid #fff;
        color: #fff;
        text-shadow: 0px 0px 4px #fff;
        background-color: #2a2a2a;
    }
    .option.big-button.ac-active:active {
        background-color: #111;
        box-shadow: 0px 0px 1px 2px rgba(0,0,0,0.5), 0px 2px 4px rgba(0,0,0,0.25), 0px 3px 5px 2px rgba(0,0,0,0.5) inset;
    }
    .ac-details-hidden {
        display: none;
    }
    .lb-warn {
        color: rgb(255, 55, 24);
    }
    .block.lb-warn {
        padding: 5px;
        color: rgb(255, 55, 24);
        border-color: rgb(255, 55, 24);
        max-width: 200px;
        margin-top: 5px;
    }
    .block.centered {
        text-align: center;
    }
    .block.hotkey-details {
        width: auto;
        display: inline-block;
        padding: 4px;
        margin: 3px;
        font-family: Courier,monospace;
        background-color: #000;
        color: #fff;
        border: #fff solid 1px;
    }
    .click-limit-row {
        display: inline-flex;
        align-items: center;
        gap: 4px;
    }
    .ac-prefs-row {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 16px;
        margin-bottom: 2px;
    }
    .ac-sound-slider-label {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 4px;
        line-height: 100%;
    }
    .ac-sound-slider-label input[type="range"] {
        width: 100px;
        margin: 0;
    }
    `,
    applyStyles: function() {
        if (l('game')) { l('game').appendChild(document.createElement('style')).innerHTML = this.styles; }
        else { document.head.appendChild(document.createElement('style')).innerHTML = this.styles; }
    },
    mockClick: function(x, y) {
        // A real click at any arbitrary location on the page
        // 1. Find the element at the given coordinates
        const element = document.elementFromPoint(x, y);

        if (!element) {
            return;
        }
        if (element.id === 'ac-enabled') { 
            // Do not click on the enabling button
            return; 
        }

        // 2. Create the synthetic mouse events
        // Dispatching a sequence of mousedown, mouseup, and click is most realistic
        const eventOptions = {
            view: window,
            bubbles: true,
            cancelable: true,
            clientX: x,
            clientY: y
        };

        const mousedownEvent = new MouseEvent('mousedown', eventOptions);
        const mouseupEvent = new MouseEvent('mouseup', eventOptions);
        const clickEvent = new MouseEvent('click', eventOptions);

        // 3. Dispatch the events to the target element
        element.dispatchEvent(mousedownEvent);
        element.dispatchEvent(mouseupEvent);
        element.dispatchEvent(clickEvent);
    },
    createHotkeys: function() {
        this.Hotkey.initializeEventListeners();
        this.state.toggleHotkey = new this.Hotkey(e => {
            this.state.enabled?this.disableAC():this.enableAC();
            if (l('ac-enabled')) {
                l('ac-enabled').innerHTML = this.state.enabled ? loc('Click to disable') : loc('Click to enable');
                l('ac-enabled').classList.toggle('ac-active', this.state.enabled);
            }
        });
        this.state.bigCookieToggleHotkey = new this.Hotkey(e => {
            this.state.bigCookieEnabled?this.disableBigCookieAC():this.enableBigCookieAC();
            if (l('big-cookie-ac-enabled')) {
                l('big-cookie-ac-enabled').innerHTML = this.state.bigCookieEnabled ? loc('Click to disable') : loc('Click to enable');
                l('big-cookie-ac-enabled').classList.toggle('ac-active', this.state.bigCookieEnabled);
            }
        });
    },
    Hotkey: class Hotkey {
        constructor(callback, defaultKeys = []) {
            this.callback = callback;
            this.keys = new Set(defaultKeys.map(e => e.toLowerCase()));
            this.constructor.all.add(this);
            if (!this.keys.isSubsetOf) {
                // old browser
                this.keys.isSubsetOf = function(keys) {
                    for (let key of keys) {
                        if (!this.has(key)) {
                            return false;
                        }
                    }
                    return true;
                }
            }
        }
        forceSetKeys(keys) {
            this.keys = new Set(keys.map(e => e.toLowerCase()));
        }

        toString() {
            if (this.status === 'await') {
                return loc('(press keys)');
            }
            if (this.status === 'recording') {
                return loc('(release to set)');
            }
            if (!this.keys.size) {
                return loc('(none)');
            }
            return this.constructor.formatKeys(this.keys);
        }
        static formatKeys(keys) {
            // Modifiers like Shift, Ctrl, go first, then keys, capitalized
            keys = Array.from(keys);
            const cap = str => str.charAt(0).toUpperCase() + str.slice(1);
            return keys.filter(e => e.length > 1).map(cap).join('+') + 
            (keys.find(e => e.length === 1) && keys.find(e => e.length > 1)? '+' : '') +
            keys.filter(e => e.length === 1).map(cap).join('+');
        }
        status = 'set'; // "set" | "await" | "recording"
        hooks = new Set();
        record(callback) {
            if (this.status !== 'set') {
                return;
            }
            this.status = 'await';
            this.hooks.add(callback);
        }
        trigger(keys) {
            if (this.keys.size && this.keys.isSubsetOf(keys)) {
                this.callback(keys);
            }
        }

        static all = new Set();
        static track = new Set();
        static initializeEventListeners() {
            document.addEventListener('keydown', e => {
                const key = e.key.toLowerCase();
                this.track.add(key);
                let suppress = false;
                for (let hotkey of this.all) {
                    if (hotkey.status !== 'set') {
                        suppress = true;
                        break;
                    }
                }
                if (suppress) e.preventDefault();
                for (let hotkey of this.all) {
                    if (hotkey.status === 'set') {
                        if (suppress) { continue; }
                        hotkey.trigger(this.track);
                    }
                    if (hotkey.status === 'await') {
                        hotkey.status = 'recording';
                        hotkey.keys = new Set([key]);
                        hotkey.hooks.forEach(e => e(hotkey));
                    }
                    if (hotkey.status === 'recording') {
                        hotkey.keys.add(key);
                        hotkey.hooks.forEach(e => e(hotkey));
                    }
                }
            });
            document.addEventListener('keyup', e => {
                this.track.delete(e.key.toLowerCase());
                for (let hotkey of this.all) {
                    if (hotkey.status === 'recording') {
                        hotkey.status = 'set';
                        hotkey.hooks.forEach(e => e(hotkey));
                        hotkey.hooks.clear();
                        e.preventDefault();
                    }
                }
            })
        }
        toJSON() {
            return Array.from(this.keys);
        }
    },
    TraversalPattern: class TraversalPattern {
        constructor(id, pointList, spaceNodesList = [], speedMult, name, sizeMult) {
            if (!Array.isArray(pointList)) throw new Error("pointList must be an array");
            if (pointList.length < 2) throw new Error("pointList must have at least 2 points");
            //if (!Array.isArray(spaceNodesList)) throw new Error("spaceNodesList must be an array");
            //if (spaceNodesList.length < 2) throw new Error("spaceNodesList must have at least 2 points");
            //if (spaceNodesList[0].d !== 0) throw new Error("spaceNodesList must start with a node at d=0");
            this.id = id;
            let normalizationDist = 1;
            pointList.forEach(e => {
                const x = e.x ?? e.p[0]; 
                const y = e.y ?? e.p[1];
                normalizationDist = Math.max(normalizationDist, Math.sqrt(x * x + y * y) / sizeMult);
            });
            this.normalizationDist = normalizationDist;
            const formatHelper = n => {
                // n is [x, y], convert to [direction, magnitude]
                return [Math.atan2(n[1], n[0]), Math.sqrt(n[0] * n[0] + n[1] * n[1])];
            }
            this.pointList = pointList
                .map(e => {
                    return {
                        x: (e.x ?? e.p[0]) / normalizationDist,
                        y: (e.y ?? e.p[1]) / normalizationDist,
                        id: e.id ?? (formatHelper(e.tOut)[0]), // yes it's the opposite of what you think
                        im: e.im ?? (formatHelper(e.tOut)[1] / normalizationDist),
                        od: e.od ?? (formatHelper(e.tIn)[0] - Math.PI),
                        om: e.om ?? (formatHelper(e.tIn)[1] / normalizationDist),
                    };
                })
                .map(e => {
                    return new this.constructor.Point(e.x, e.y, e.id, e.im, e.od, e.om)
                });
            this.speedMult = speedMult;
            this.sizeMult = sizeMult;
            this.totalTime = this.pointList.length - 1;
            this.spaceNodesList = null;
            this.spaceNodesListRaw = spaceNodesList;
            //this.autoFillTangents();
            //this.initializeTable();
            this.name = name ?? 'Unknown pattern';
        }
        autoFillTangents() {
            const pts = this.pointList;
            const n = pts.length;
            const closed = n >= 2 &&
                pts[0].x === pts[n - 1].x &&
                pts[0].y === pts[n - 1].y;

            for (let i = 0; i < n; i++) {
                const p = pts[i];
                const needIn = p.id == null || p.im == null;
                const needOut = p.od == null || p.om == null;
                if (!needIn && !needOut) continue;

                let vx, vy;
                if (closed) {
                    // Wrap around, skipping the duplicate endpoint
                    const prevIdx = i === 0 ? n - 2 : i - 1;
                    const nextIdx = i === n - 1 ? 1 : i + 1;
                    vx = (pts[nextIdx].x - pts[prevIdx].x) / 2;
                    vy = (pts[nextIdx].y - pts[prevIdx].y) / 2;
                } else if (i === 0) {
                    // Forward difference at the start of an open path
                    vx = pts[1].x - pts[0].x;
                    vy = pts[1].y - pts[0].y;
                } else if (i === n - 1) {
                    // Backward difference at the end of an open path
                    vx = pts[n - 1].x - pts[n - 2].x;
                    vy = pts[n - 1].y - pts[n - 2].y;
                } else {
                    // Central difference for interior points
                    vx = (pts[i + 1].x - pts[i - 1].x) / 2;
                    vy = (pts[i + 1].y - pts[i - 1].y) / 2;
                }

                const mag = Math.sqrt(vx * vx + vy * vy);
                const dir = Math.atan2(vy, vx);

                if (needIn) {
                    p.id = dir;
                    p.im = mag;
                }
                if (needOut) {
                    p.od = dir;
                    p.om = mag;
                }
            }
        }
        static basis = [
            [2, -2, 1, 1],
            [-3, 3, -2, -1],
            [0, 0, 1, 0],
            [1, 0, 0, 0]
        ]
        static Point = class Point {
            /**
             * A point in the Hermite spline.
             * @param {*} x - (-1, 1)
             * @param {*} y - (-1, 1)
             * @param {*} id - incoming velocity direction (radian). Right is 0, counterclockwise. null = auto-fill.
             * @param {*} im - incoming velocity vector magnitude. null = auto-fill.
             * @param {*} od - output velocity direction. null = auto-fill.
             * @param {*} om - output velocity magnitude. null = auto-fill.
             */
            constructor(x, y, id, im, od, om) {
                this.x = x;
                this.y = y;
                this.id = id == null ? null : id % (2 * Math.PI);
                if (this.id != null && this.id < 0) {
                    this.id = 2 * Math.PI + this.id;
                }
                this.im = im;
                this.od = od == null ? null : od % (2 * Math.PI);
                if (this.od != null && this.od < 0) {
                    this.od = 2 * Math.PI + this.od;
                }
                this.om = om;
            }
            pos() {
                return [this.x, this.y];
            }
            velIn() {
                //return [this.id, this.im];
                return [Math.cos(this.id) * this.im, Math.sin(this.id) * this.im];
            }
            velOut() {
                //return [this.od, this.om];
                return [Math.cos(this.od) * this.om, Math.sin(this.od) * this.om];
            }
        }
        distTable = null;
        spaceTable = null;
        precision = 168;
        spacePrecision = 64;
        initializeTable() {
            this.initializeDistTable();

            this.spaceNodesList = this.spaceNodesListRaw.map(e => new this.constructor.SpaceNode(e.s, e.e, e.d / this.normalizationDist, e.k));
            if (this.spaceNodesList.length == 0) {
                this.spaceNodesList = [
                    new this.constructor.SpaceNode(1, 1, 0, 1),
                    new this.constructor.SpaceNode(1, 1, this.distTable[this.distTable.length - 1], 1)
                ];
            }
            this.initializeSpaceTable();
        }
        initializeDistTable() {
            const size = this.totalTime * this.precision;
            this.distTable = new Float32Array(size);
            let previousX = this.pointList[0].x;
            let previousY = this.pointList[0].y;
            this.distTable[0] = 0;
            for (let i = 1; i < size; i++) {
                const a = this.positionAt(i / this.precision);
                const x = a[0][0];
                const y = a[0][1];
                //console.log(x, y);
                this.distTable[i] = Math.sqrt((x - previousX) * (x - previousX) + (y - previousY) * (y - previousY)) + this.distTable[i - 1];
                previousX = x;
                previousY = y;
            }
        }
        initializeSpaceTable() {
            const spaceSize = Math.ceil(this.distTable[this.distTable.length - 1] * this.spacePrecision);
            this.spaceTable = new Float32Array(spaceSize);
            this.spaceTable[0] = 0;
            for (let i = 1; i < spaceSize; i++) {
                const a = this.sIntAt(i / this.spacePrecision);
                this.spaceTable[i] = a;
            }
        }
        positionAt(t) {
            // normalize t
            t = t % this.totalTime;
            if (t < 0) t += this.totalTime;
            const offset = Math.floor(t);
            t = t % 1;
            if (t < 0) t += 1;

            //console.log(this.pointList[offset].velOut(), this.pointList[offset + 1].velIn())
            return this.matrixMultiply(this.matrixMultiply([[t * t * t, t * t, t, 1]], this.constructor.basis), [
                this.pointList[offset].pos(),
                this.pointList[offset + 1].pos(),
                this.pointList[offset].velOut(),
                this.pointList[offset + 1].velIn()
            ]);
        }
        tAt(dist) {
            // binary search to find corresponding t to dist
            dist = dist % this.distTable[this.distTable.length - 1];
            let low = 0;
            let high = this.totalTime * this.precision - 1;
            let best = 0;
            while (low <= high) {
                const mid = (low + high) >>> 1;
                if (this.distTable[mid] < dist) {
                    best = mid;
                    low = mid + 1;
                } else { 
                    high = mid - 1;
                }
            }
            // linearly interpolate
            low = best;
            high = low + 1;
            // this could result in NaN due to duplicated point but in practice just don't have duplicated points ok
            const t = (dist - this.distTable[low]) / (this.distTable[high] - this.distTable[low]);
            return (low + t) / this.precision;
        }
        distAt(acc) {
            // binary search to find the corresponding space to acc
            acc = acc % this.spaceTable[this.spaceTable.length - 1];
            let low = 0;
            let high = this.spaceTable.length - 1;
            let best = 0;
            while (low <= high) {
                const mid = (low + high) >>> 1;
                if (this.spaceTable[mid] < acc) {
                    best = mid;
                    low = mid + 1;
                } else { 
                    high = mid - 1;
                }
            }
            // linearly interpolate
            low = best;
            high = low + 1;
            const t = (acc - this.spaceTable[low]) / (this.spaceTable[high] - this.spaceTable[low]);
            return (low + t) / this.spacePrecision;
        }
        static SpaceNode = class SpaceNode {
            constructor(s, e, d, k) {
                // Steepness specification: goes forward to the next node, 
                // so yes the k for the last node is irrelevant
                this.s = s;
                this.e = e; // ending space factor
                this.d = d;
                this.k = k; // higher k = more steep, t is bounded between 0 and 1
                this.kc = Math.exp(k / 2);
            }
            spaceStart() {
                return this.s;
            }
            spaceEnd() {
                return this.e;
            }
            dist() {
                return this.d;
            }
            steepness() {
                return this.k;
            }

            static sCurve(ekd, kc) {
                // ekd = Math.exp(k * d), kc is cached
                return (kc * (ekd - 1)) / ((kc - 1) * (ekd + kc));
            }
            static sCurveIntLocal(d, k, kc) {
                // integral of the S curve from 0 to d, needs renormalization after output
                if (k === 0) { return d * d / 2; }
                return (1 / (kc - 1)) * ((kc + 1) / k * Math.log((Math.exp(k * d) + kc) / (1 + kc)) - d);
            }
        }
        sIntAt(d) {
            // Find the two relevant space nodes
            let relevant = this.spaceNodesList.length - 1;
            for (let i in this.spaceNodesList) {
                // While a binary search scales better this should be fine
                if (this.spaceNodesList[i].d > d) {
                    relevant = parseInt(i);
                    break;
                }
            }

            // Calculate cumulative space 
            const list = this.spaceNodesList;
            let sum = 0;
            for (let i = 0; i < relevant - 1; i++) {
                const dd = list[i + 1].d - list[i].d;
                const ds = Math.abs(list[i].e - list[i].s);
                sum += 0.5 // integral over any s curve
                 * dd * ds + dd * Math.min(list[i].e, list[i].s);
            }

            const low = this.spaceNodesList[relevant - 1];
            const high = this.spaceNodesList[relevant];
            sum += this.constructor.SpaceNode.sCurveIntLocal((d - low.d) / (high.d - low.d), low.k, low.kc)
                * (high.d - low.d) * (low.e - low.s) + (d - low.d) * low.s;
            //console.log((d - low.d) / (high.d - low.d), low.k, low.kc);
            return sum;
        }

        matrixMultiply(a, b) {
            if (a[0].length !== b.length) throw new Error("Incompatible dimensions");
            const result = new Array(a.length).fill(0).map(() => new Array(b[0].length).fill(0));
            for (let i = 0; i < a.length; i++) {
                for (let j = 0; j < b[0].length; j++) {
                    for (let k = 0; k < a[0].length; k++) {
                        result[i][j] += a[i][k] * b[k][j];
                    }
                }
            }
            return result;
        }
        static catalogue = []; // will be initialized in init()
        static addToCatalogue(list) {
            list.forEach(e => this.catalogue.push(e));
        }
        static createFromData(data) {
            const thisObject = this;
            console.log(thisObject.decompress(data[1].points));
            return data.map(e => {
                const d = thisObject.decompress(e.points);
                return new thisObject(e.id, d.nodes
                .concat(e.closed?Object.assign({}, d.nodes[0]):[])
                .map(i => Object.assign(i, {
                    id: (i.id == null || i.tIn) ? null : i.id * Math.PI,
                    od: (i.od == null || i.tOut) ? null : i.od * Math.PI
                })), d.spaceNodes, e.speedMult, e.name, e.sizeMult)
            });
        }
        static decompress(points) {
            if (typeof points !== 'string') {
                return { nodes: points };
            }
            if (!LZString) {
                console.error('LZString not found');
                return [];
            }
            return JSON.parse(LZString.decompressFromBase64(points.trim()));
        }
        toJSON() {
            return this.id;
        }
    },
    setTraversalPattern: function(pattern) {
        pattern.initializeTable();
        this.state.traversalPattern = pattern;
        this.track.lastClickSpot = null;
        this.track.velX = 0;
        this.track.velY = 0;
    },
    traversalPatternsData: [
        {
            id: 'point',
            name: loc('Point'),
            points: `
            N4IgbgpgTgzglgewHYgFwBYA0ICGBXAFwQDE4AbMtUAWwgIAsEATNEAMziTgIgFom4bNtAhIAxhBDYC+NAAZpo+MnkA6AKwBfbAAccDGGgDaoOC1QgkARikgEUJtHnYYMqAQByzCAElzlgCZbKAhIWElUNhwyGAhsAVcAFQQZSlQAgIAOVQC5OQB2TQBdFz0JL0dDVBMQPQY/VmtbKqtsCNaQcwUQAGs0K21QOvoGiyaXfrbJzrQM7NyC7D7UAZLLbyqas0ag3WMFOTWCHxRq3gCATlULgDZMgMwrG9V0dAD8o4B5QmNL67uHrwni83h9sPgiCc0AQoHg4rhCAhvgRobD4WROD0IOYYXDBiBtmN1LYdMZ1NkLlZ8g90ABmDQ3G4XI5Q6pyDRyW6YXi0+YBG5WL4/M7s9Scm6YXk5fmC8GI1m4+EQpHCxXYDFILE4tH4wmWGx7M5WVRyKyUzD5Z7odQZFmnIx/a2ZCUBY35TK09BClFnR3kiXnN0er1yyGnNUIojI1Fw9WY7ExiDFNpMADmEE2Rn1tiQQRKWaQxOwTXzgRzxKKa1TUAQeB0myKmiAA===
            `,
            speedMult: 0.0,
            sizeMult: 0.5,
            closed: true
        },
        {
            id: 'circle',
            name: loc('Circle'),
            points: `
            N4IgbgpgTgzglgewHYgFwBYA0ICGBXAFwQDE4AbMtUAWwgIAsEATNEAMziTgIgFom4bNtAhIAxhBDYC+NAAZpo+MnkA6AKwBfbAAccDGGgDaoOC1QgkbKSARQm0NFhAwZUAgDlmEAJLnLYDZQEJCwkqhsOGQwENgCrgAqCDKUqABsAEwAHKpy6OoZmgC62DB6El4OhqgmIHoMfqxWNtUAjNjhcqpprQDM7SDmCiAA1mhamKD19I0WzaVqPf0dahkAnOi9cWgA7GvdeVnYY6gTU/oz/vMuqxtbIOED5q3q6qpraWtrx2i92ucNK7WBaoAaPbbpDJpbpQ+4nVr/OoXWaWYE3UErDGDNCZHJ5Ao/UHFbBIbzVWpmJqBXTGBS8VpyOQlEAEHwoGp7DRpNKYJnSADyhGMvE56m5vOZ+CIbLQkWisVwhAQgoIsqiMWwZE4Iwg5gIUDwEERlLm9BsOmFOy6OwZO0wIuttuZrPZRjFqihrTtvHdnp2zpVwt9PTtwa9kqVMoi6oVUuVQuj8s12t1aH1huNV0MNJq9MZEukUaMdNF3IDCeLmFLaQj0vZco1iqIgcTja1SB1eoNRsmIBNlgAVubLY65HaraobWPnUWfdC/faw/6BRWl5gl7WEFGG7GlS2d8mO6nUOme6Yrigc5WGXyWbPqwWWS2jA/b3HtzHsHH95+QO3O2m3aZk0lBXhOU7jqOy53q6c4eiG67ziG5aqjUa5wX6m4fkmTbxqhB5/imXYZr2/ZIHgw41Dej4urSVb7GKNYrqhlYigxZZfpG9a/t+CYEf+x6nsBcxohaHJQfaNq5FkLwzq6a4bsxQZIV6i4qdB77cThvH4b+AnEUazK6gA5hA5JGAENhIGaJQWdZVmGLZljZoOIBOUgQ4kig7mXpYlDuaBlgUe5FEktY7lokggRFMyxlQAgeA6OSRSaEAA==
            `,
            speedMult: 0.5,
            sizeMult: 0.75,
            closed: true
        },
        {
            id: 'infinity',
            name: loc('Infinity'),
            points: `
            N4IgbgpgTgzglgewHYgFwBYA0ICGBXAFwQDE4AbMtUAWwgIAsEATNEAYxwOrwoFooE1ENgL40ABhEQk8ZBIB0AVgC+2AA6d6MNAG1QcFqhBIAjMJAIoTaBOwxRUAgDlmEAJKHjZ7FAiRYEGgAZjhkMBDYTHD2ACoIopSoABwAnABM8ikpAGwqALp2GmwQLtbaqHogGgwerKbm5Sby6EnZAMzYgaji8tkmaSmRtiAA1mgqmKDV9LVG9XYKfQOdCuhrWCCGJv1KAxtjqBNTmrNeDavrK93yAOzZfUOoaYqKmUk3g6Pjqsc1nvMgco9O4PEBdJrvdAdTZoNoDeTiNpI7AHI5VE7/byAtAQm5Qq5ND5pJKPNqKG6ZdBpEwo76TdF/OpYxq3dIksGrG6KR5QprZFImG60w4/BkzTHna7oLlXHppbLibkww4mHrocTZdmo0XTU4AoHyeWK2WG9CKNKPckpW6KbJCr4i+m6iULa5pM0WjlSy7K7JUw03No0h1o51MyVqn3g+Rtdr2ww3EzoXoK/Z037i8Oupqxtr26PqlLxtBJDXyExB+3ap0YrPY1BNQv5nGPVIZLK5YUmZQFYyucqVAx1tS6XjbSS8XK9ghuFAVMfiSSq1nm6cAeUIulVE+XH1X2HwRFnwVC4QPhAQG4IJ7CERAZDgSBGEEMBCgeAgoqHczS5hH88UCdAOnY8AO5Xg4SUddNwqF5MEgxRe0PBBQLfD9zyIK80DQu8HyfF9sPfT96W/YwhHUXRJHEEC5x0XhAMwejqJELDYMkYCMJQuccM41iePvR9n1fIiv3+bQKLYzAOJAGdaPo8CEOg69YO5RTONQojeJg/i8KEwiP1EuooD/LdVUwKcRFAujt0wXcUn3GTWJ0GyFxXNIkIvUCQlvLTlO8s8BPw4SDJI/5rwk5yFUwZiZKsyQLMcmCdAnBLkI09DcAvPjNMCvTUBwwy5jAEyKnHRiEtkrdF0wJJyzZJTRxc2qTHq9S538u9kNYjrsF0gj8pE0K6jwEqdAYpiaN0OCIIyRCWKS+T4Nmjyj24nKuu0nK+uC4j9H+AAPUaqMmySJvm5S6IY6S0rWjKNuUnTBP6gqhrmFgIqYqSYsqlTGLUxKLsW/6bv0zqss2jLttBwrjECD6yoqqybOa1qAca6reBR4kVq4m8AvuvHcKenaYaQFJRrHKLvri8y5rRioUrpkGBru8GHq24nod7F8AHMIAHHQzmwJBfwKQWyfMeoxeMd7YZAaWkDh4xyYV39haEBXxOMYyFeM4XrwV4rhZGhXwuMYqFfI4xtAVkbhcOhXDuFlg8l7HmBDwNQBzyZQgA
            `,
            speedMult: 0.5,
            sizeMult: 0.75,
            closed: true
        },
        {
            id: 'ellipse',
            name: loc('Ellipse'),
            points: `
            N4IgbgpgTgzglgewHYgFwBYA0ICGBXAFwQDE4AbMtUAWwgIAsEATNEAMziTgIgFom4bNtAhIAxhBDYC+NAAZpo+MnkA6AKwBfbAAccDGGgDaoOC1QgkARikgEUJtHnYYMqAQByzCAElzlgA5bKAhIWElUNhwyGAhsAVcAFQQZSlQrAGYAuVUAdgA2OVzNAF0XPQkvR0NUExA9Bj9Wa1saq1U5K1yA7Aic/Kt1HpBzBRAAazQtTFAG+iaLFpc1AaHetHaAJlyrTfiN3IyO9U2M7EnUAE5tWf15/yWQNtVt3fXUI/R0Tfz9j/R1KpCrlLuc0NcZvU7gtLDZlh9VF8fu8chkMrlcn91F1VAF0BlfhNwTcoY0HnCnmo0RiUS8slgRmh8pccod8piiahNiS5jDHjUcqc8bTvps9ozUAF8kdupdxRcIbcyc0KQLEWLxRF2rk5AFxeYrHICaoMl91GDUPkedDya0NnldZqNn9drqNCDhgrrcrFqrnSAtS6sqzgRarKVsEhvDU6mZmkFdMZeIMFHIyiACD4ULUFMnNmnpAB5QjGBSu9P4IhZtBRGJxXCEBDFgg16KxbBkTjjCDmAhQPAQElxxYZWw6UtA9RyX6FdOZ7NGZPZTAFjPN4xWZerysIauRNv1nfr/d1jtdntoPsDocPdBjjdTyfTzC8QVdfJzvdGMv5ufH78vuW2A7nutbtg2RDHmB9adkg3a9v2g6QsOsL3jmT6/Lw6iXBo7Kfgum6pn+Ja1EuRHAY2oEHhRkEkdBZ5wReqBXkhpgPJsaGLimK74aWgG/kWJEAUBEG7tm9GiVB1EgLB8GXohN7NJcnH9FOM6rvOSaETxgktrU2nbpR4nSUedHSbJTEsYpiw4JxKYYS+b4FLxOaYCJBD/rmIkgcZp6SWZfkWQh17IQ8uQqQ5WE4eoeHSF+BnEXpXFbhWRmtn5pl6RJQXyde6Y9gA5hAMZGKhkYcWUpVIKOkZ3pVlh3pGNj1Ug4WRkELXKZGtktbZkbhS1HGRspLUJpYo4lOmBVQAgeA6DGbGsAV+S2FGjh+DGZWWEN42rXVLh4AARgA4jNc0bcY6Z6CESCZuYSB4BQ1kgAV9Crd4F21JYfWWG1gSrSNB0nWdOifUYV04Ddd1oA9T0lJoQA==
            `,
            speedMult: 0.75,
            sizeMult: 0.75,
            closed: true
        },
        {
            id: 'triangle',
            name: loc('Triangle'),
            points: `
            N4IgbgpgTgzglgewHYgFwBYA0ICGBXAFwQDE4AbMtUAWwgIAsEATNEAYxwOrwoFooE1ENgL40ARhEQk8ZGgAMAOgCsAX2wAHTvRhoA2qDgtUIJOOEgEUJtAXYYoqAQByzCAEljp89igRIsBBoAGY4ZDAQ2ExwDgAqCKKUqMriAJwqAByp6KoAuvZabBCuNrqoBiBaDJ6sZhZlAEzYQaiSIMby2ADWaBnqoFX0NSZ19hLNCooNylG9AGyKWehYID0Y/ZXaw971aE0gLW3G4gDsAMxT8mcZ3b0bg9ujIGVtLUrTs6jT6ScNN6toHKYAZbLxPRoTVqfM7oBboK6pW6oPrAzbVME+Z7jA6TD7tQFnBqLeTyfZrIEg9G1TEQnFQ/HJNKZbJI8R5bBINxlCpGakWDT6Tq8cQk/IgAjuFDlTryMUEADyhEFmFl2HwRElaAIUDwkVwhAQioIWp1erIcCQXQgxm1uo2vJGDX5+l4GQWc0wylV4s10pVcqNyu96oQvttepDgdQ4ew5st1pNdtRDtMZ2d5Tdig9Xrlvr0MoDSr9wYNYdNaoNUZjIDjVptpvZByYAHMINy9DsOU78h2kE6OWme6mLHVcmLmwI8BpublVEA==
            `,
            speedMult: 0.75,
            sizeMult: 0.8,
            closed: true
        }
    ],
    Particle: class Particle {
        constructor() {
            this.x = 0;
            this.y = 0;
            this.r = 0;
            this.z = 0;
            this.dx = 0;
            this.dy = 0;
            this.dr = 0;
            this.s = 1; // Scale
            this.mt = 4;
            this.t = 1e-30; // Increases by 1 / fps every frame, setting float to hint the engine 
        }
        setX(x) {
            this.x = x;
            return this;
        }
        setY(y) {
            this.y = y;
            return this;
        }
        setZ(z) {
            this.z = z;
            return this;
        }
        setRot(radians) {
            this.r = radians;
            return this;
        }
        setDX(dx) {
            this.dx = dx;
            return this;
        }
        setDY(dy) {
            this.dy = dy;
            return this;
        }
        setDR(dr) {
            this.dr = dr;
            return this;
        }
        setScale(s) {
            this.s = s;
            return this;
        }
        setMT(mt) {
            this.mt = mt;
            return this;
        }
        deploy() {
            this.t = 0;
            Particle.all.add(this);
            return this;
        }
        static create() {
            return new this(arguments);
        }

        draw(ctx) {
            throw new Error('Unimplemented');
        }
        static all = new Set();
        static drawAll(ctx, filter) {
            let last = {
                x: 0,
                y: 0,
                r: 0
            };
            ctx.save();
            for (let particle of this.all) {
                if (!filter(particle)) { continue; }

                // Set up translations and rotations
                ctx.translate(particle.x - last.x, particle.y - last.y);
                //console.log(particle.x - last.x, particle.y - last.y);
                ctx.rotate(particle.r);
                particle.draw(ctx);
                ctx.rotate(-particle.r);

                last = particle;
            }
            ctx.restore();
        }
        update() {
            this.x += this.dx / Game.fps;
            this.y += this.dy / Game.fps;
            this.r += this.dr / Game.fps;
            this.t += 1 / Game.fps;
            if (this.t > this.mt) {
                this.die();
            }
        }
        die() {
            this.constructor.all.delete(this);
        }
        static updateAll() {
            for (let particle of this.all) {
                particle.update();
            }
        }
    },
    ParticleTypes: Particle => ({
        Cookie: class CookieParticle extends Particle {
            constructor() {
                super();
                this.friction = 0;
                this.xi = 0;
                this.yi = 0;
                this.ddy = 0;
                this.url = ''; // For third party spritesheets by other mods
            }
            static create() {
                return new this(arguments);
            }
            setDDY(ddy) {
                this.ddy = ddy;
                return this;
            }
            setFriction(friction) {
                this.friction = friction;
                return this;
            }
            setCookie(xi, yi) {
                this.xi = xi * 48;
                this.yi = yi * 48;
                return this;
            }
            setURL(url) {
                this.url = url;
                return this;
            }

            draw(ctx) {
                ctx.globalAlpha = Math.sqrt(1 - (this.t / this.mt));
                //console.log(Pic(this.url || 'icons.png'), this.xi, this.yi, 48, 48, -24 * this.s, -24 * this.s, 48 * this.s, 48 * this.s);
                ctx.drawImage(Pic(this.url || 'icons.png'), this.xi, this.yi, 48, 48, -24 * this.s, -24 * this.s, 48 * this.s, 48 * this.s);
                //ctx.drawImage(Pic('icons.png'), 1, 1, 48, 48, 0, 0, 200, 200);
            }
            static trimHeight = Game.LeftBackground.canvas.height + 100;
            static trimWidth = Game.LeftBackground.canvas.width + 100;
            update() {
                this.dy += this.ddy;
                this.dy *= Math.pow(1 - this.friction, 1 / Game.fps);
                if (this.y > this.constructor.trimHeight || this.x > this.constructor.trimWidth || this.x < -100) {
                    this.die();
                }
                super.update();
            }
        },
        Text: class TextParticle extends Particle {
            constructor() {
                super();
                this.z = 2;
                this.content = '';
                this.fontSize = 20;
            }
            static create() {
                return new this(arguments);
            }
            setContent(content) {
                this.content = content;
                return this;
            }
            setSize(size) {
                this.fontSize = size;
                return this;
            }

            draw(ctx) {
                ctx.globalAlpha = Math.sqrt(1 - (this.t / this.mt));
                ctx.font = `${this.fontSize}px Merriweather`;
                ctx.fillText(this.content, 0, 0);
            }
        },
        Trail: class TrailParticle extends Particle {
            constructor() {
                super();
                this.z = 2;
            }
            static create() {
                return new this(arguments);
            }
            draw(ctx) {
                ctx.globalAlpha = Math.sqrt(1 - (this.t / this.mt));
                const old = ctx.globalCompositeOperation;
                ctx.globalCompositeOperation = 'lighter';
                const shrink = 1 - (this.t / this.mt);
                const size = 48 * this.s * shrink;
                ctx.drawImage(Pic('glint.png'), -size / 2, -size / 2, size, size);
                ctx.globalCompositeOperation = old;
            }
        }
    }),
    drawCustomParticles: function(z, ctx) {
        // z of 0: draw normal particles
        // z of 2: draw text particles and manual click particles
        const that = this;
        switch(z) {
            case 0:
                this.Particle.drawAll(ctx, p => p.z === 0);
                break;
            case 2:
                this.Particle.drawAll(ctx, p => p.z === 2);
                break;
            default:
                break;
        }
    },
    updateCustomParticles: function() {
        this.Particle.updateAll();
    },
    syncPrefCheckboxes: function() {
        const numbersCb = l('ac-prefs-numbers');
        const particlesCb = l('ac-prefs-particles');
        if (numbersCb && numbersCb.checked !== !!Game.prefs.numbers) {
            numbersCb.checked = !!Game.prefs.numbers;
        }
        if (particlesCb && particlesCb.checked !== !!Game.prefs.particles) {
            particlesCb.checked = !!Game.prefs.particles;
        }
    },
    injectParticleDrawPoint: function() {
        this.ParticleTypes = this.ParticleTypes(this.Particle);
        this.drawCustomParticles.bind(this);

        const func = Game.particlesDraw;
        const str = func.toString();
        let unsafe = false;
        if (str.includes(`function(z)`) && 
            str.includes(`ctx.restore();`) &&
            str.includes(`ctx.save();`) &&
            str.includes(`for (var i=0;i<Game.particlesN;i++)`) &&
            str.includes(`var ctx=Game.LeftBackground;`) &&
            str.includes(`if (me.pic=='icons.png')`)) {
            // Probably safe to inject, but test for scoped stuff
            window.__test_particle_draw_injection = null;
            eval('window.__test_particle_draw_injection = ' + str);
            try {
                for (let i = 0; i < 100; i++) { window.__test_particle_draw_injection(i); }
            } catch (e) {
                unsafe = true;
            } 
        } else {
            unsafe = true;
        }
        if (unsafe) {
            // Wrap the function
            window.___old_particlesDraw_func = func;
            Game.particlesDraw = function(z) {
                window.___old_particlesDraw_func(z);
                metaclicker.drawCustomParticles(z, Game.LeftBackground);
            }
        } else {
            // Inject the function
            eval('Game.particlesDraw='+str.slice(0, str.length - 1) + '\nmetaclicker.drawCustomParticles(z, ctx);}');
        }

        // Also register a mutationobserver for canvas height
        const callback = e => {
            this.ParticleTypes.Cookie.trimHeight = Game.LeftBackground.canvas.height + 100;
            this.ParticleTypes.Cookie.trimWidth = Game.LeftBackground.canvas.width + 100;
        }
        const observer = new MutationObserver(callback);
        const element = Game.LeftBackground.canvas;
        if (!element) {
            console.error('Game.LeftBackground.canvas not found');
            return;
        }
        observer.observe(element, {
            attributes: true,
            attributeFilter: ['height', 'width'],
            attributeOldValue: true,
        });
    },
    injectParticleAddSuppression: function() {
        const func = Game.particleAdd;
        const str = func.toString();
        let unsafe = false;
        if (str.includes('function(x,y,xd,yd,size,dur,z,pic,text') &&
            str.includes('cookies.push(cookie.icon);')) {
            window.__test_particle_add_function = null;
            eval('window.__test_particle_add_function = ' + str);
            try {
                for (let i = 0; i < 25; i++) { window.__test_particle_add_function(i, i, i, i, i, 6, i, i, i); }
            } catch (e) {
                console.log('injectParticleAddSuppression unsafe, switching to wrapping');
                unsafe = true;
            }
        } else {
            unsafe = true;
        }
        if (unsafe) {
            window.___old_particleAdd_func = func;
            Game.particleAdd = function(x, y, d, yd, size, dur, z, pic, text) {
                if (!metaclicker.track.defaultParticleAddSuppress) { 
                    window.___old_particleAdd_func(x, y, d, yd, size, dur, z, pic, text); 
                }
            }
        } else {
            eval('Game.particleAdd='+str.slice(0, str.indexOf('{') + 1) + '\nif (metaclicker.track.defaultParticleAddSuppress) { return; }\n' + str.slice(str.indexOf('{') + 1, str.length));
        }
    },
    injectCookieSoundSuppress: function() {
        // test for the following: `if (Game.prefs.cookiesound)`, `function()`, `if (Game.cookieClickSound>7) Game.cookieClickSound-=7;`
        // if passes inject a return clause at the very beginning based on this.track.soundSuppressed, otherwise wrap with return clause
        const func = Game.playCookieClickSound;
        const str = func.toString();
        let unsafe = false;
        if (str.includes('if (Game.prefs.cookiesound)') &&
            str.includes('if (Game.cookieClickSound>7) Game.cookieClickSound-=7;') &&
            str.includes('function()')) {
            window.__test_cookie_sound_function = null;
            eval('window.__test_cookie_sound_function = ' + str);
            try {
                for (let i = 0; i < 25; i++) { window.__test_cookie_sound_function(); }
            } catch (e) {
                unsafe = true;
            }
        } else {
            unsafe = true;
        }
        if (unsafe) {
            window.___old_cookieSound_func = func;
            Game.playCookieClickSound = function() {
                if (!metaclicker.track.soundSuppressed) { 
                    var oldVol = Game.volume;
                    Game.volume = oldVol * metaclicker.state.soundMult / 100;
                    window.___old_cookieSound_func();
                    Game.volume = oldVol;
                }
            }
        } else {
            eval('Game.playCookieClickSound='+str.slice(0, str.indexOf('{') + 1) +
                '\nif (metaclicker.track.soundSuppressed) { return; }\n' +
                'var oldVol=Game.volume;Game.volume=oldVol*metaclicker.state.soundMult/100;\n' +
                str.slice(str.indexOf('{') + 1, str.length - 1) +
                '\nGame.volume=oldVol;}');
        }
    },
    save: function() {
        return JSON.stringify(this.state);
    },
    load: function(data) {
        if (!data) {
            return;
        }
        const d = JSON.parse(data);
        const excluded = new Set(['toggleHotkey', 'bigCookieToggleHotkey', 'traversalPattern']);
        for (let i in d) {
            if (excluded.has(i)) continue;
            this.state[i] = d[i];
        }
        this.state.toggleHotkey.forceSetKeys(d.toggleHotkey);
        this.state.bigCookieToggleHotkey.forceSetKeys(d.bigCookieToggleHotkey);
        this.setTraversalPattern(this.TraversalPattern.catalogue.find(e => e.id === d.traversalPattern) ?? this.TraversalPattern.catalogue[0]);
        this.universalLoop();
        this.bigCookieLoop();
        switch(this.state.openedTab) {
            case 'universal': 
                l('tab-universal')?.click?.();
                break;
            case 'big-cookie':
                l('tab-big-cookie')?.click?.();
                break;
        }
    }
});
window.metaclicker = Game.mods.metaclicker;
} 

const LANG = {
  "Point": "Point",
  "Circle": "Circle",
  "Infinity": "Infinity",
  "Ellipse": "Ellipse",
  "Triangle": "Triangle",
  "Metaclicker v%1": "Metaclicker v%1",
  "-": "-",
  "Universal": "Universal",
  "Big Cookie": "Big Cookie",
  "Click to enable": "Click to enable",
  "Toggle hotkey:": "Toggle hotkey:",
  "(none)": "(none)",
  "Record": "Record",
  "Click interval (ms):": "Click interval (ms):",
  "Click": "Click",
  "times": "times",
  "+": "+",
  "Clicks per second:": "Clicks per second:",
  "Some settings are restricted due to your leaderboard settings. To use the big cookie autoclicker, you must hold down your mouse over the big cookie for it to activate.": "Some settings are restricted due to your leaderboard settings. To use the big cookie autoclicker, you must hold down your mouse over the big cookie for it to activate.",
  "Click cap:": "Click cap:",
  "Faithful": "Faithful",
  "Hacker": "Hacker",
  "God mode": "God mode",
  "Click mode:": "Click mode:",
  "Automatic": "Automatic",
  "Hover over": "Hover over",
  "Held down": "Held down",
  "Visuals:": "Visuals:",
  "Hidden": "Hidden",
  "Vanilla": "Vanilla",
  "Enhanced": "Enhanced",
  "Ultra": "Ultra",
  "Traversal pattern:": "Traversal pattern:",
  "Speed multiplier:": "Speed multiplier:",
  "Reverse direction": "Reverse direction",
  "Constant travel speed": "Constant travel speed",
  "Trail particles": "Trail particles",
  "Numbers": "Numbers",
  "Particles": "Particles",
  "Click sound": "Click sound",
  "Leaderboard mode: %1": "Leaderboard mode: %1",
  "Click to disable": "Click to disable",
  "Leaderboard settings": "Leaderboard settings",
  "Leaderboard mode: ": "Leaderboard mode: ",
  "None": "None",
  "Competitive": "Competitive",
  "Finnless": "Finnless",
  "General": "General",
  "Dashnet Forums Cookie Clicker Leaderboards": "Dashnet Forums Cookie Clicker Leaderboards",
  "Leaderboard modes are setting restrictions on the autoclicker, based on the %1.": "Leaderboard modes are setting restrictions on the autoclicker, based on the %1.",
  "If you choose any leaderboard mode other than \"none\", some of your settings will be restricted.": "If you choose any leaderboard mode other than \"none\", some of your settings will be restricted.",
  "The big cookie autoclicker's click mode will be forced to \"Held down\" in all leaderboards, and the click cap will be set to \"Faithful\".": "The big cookie autoclicker's click mode will be forced to \"Held down\" in all leaderboards, and the click cap will be set to \"Faithful\".",
  "In addition, you cannot use the autoclicker in the competitive leaderboard.": "In addition, you cannot use the autoclicker in the competitive leaderboard.",
  "Leaderboard mode selection is permanent. Once set, it cannot be changed for this save. Wiping save will reset leaderboard modes.": "Leaderboard mode selection is permanent. Once set, it cannot be changed for this save. Wiping save will reset leaderboard modes.",
  "Warning: Once you select a leaderboard mode, it becomes permanent and cannot be changed later, even if you ascend!": "Warning: Once you select a leaderboard mode, it becomes permanent and cannot be changed later, even if you ascend!",
  "You will <b>not</b> join the leaderboard automatically. This mod will not prevent you from breaking any leaderboard rules and is not proof of eligibility. Make sure that you have already followed the rules for your leaderboard of choice. To join, follow the instructions by clicking on <a href=\"%1\" target=\"_blank\">this link</a>.": "You will <b>not</b> join the leaderboard automatically. This mod will not prevent you from breaking any leaderboard rules and is not proof of eligibility. Make sure that you have already followed the rules for your leaderboard of choice. To join, follow the instructions by clicking on <a href=\"%1\" target=\"_blank\">this link</a>.",
  "Confirm leaderboard mode": "Confirm leaderboard mode",
  "You are about to set your leaderboard mode to %1.": "You are about to set your leaderboard mode to %1.",
  "This choice is permanent and irreversible. You will not be able to switch leaderboards or change this setting later.": "This choice is permanent and irreversible. You will not be able to switch leaderboards or change this setting later.",
  "To confirm, please sort all words in the following phrase in alphabetical order separated by spaces, then type it in the box below.": "To confirm, please sort all words in the following phrase in alphabetical order separated by spaces, then type it in the box below.",
  "Type the confirmation phrase above": "Type the confirmation phrase above",
  "Confirm selection": "Confirm selection",
  "I understand and accept": "I understand and accept",
  "Phrase does not match. Please try again.": "Phrase does not match. Please try again.",
  "All done!": "All done!",
  "Cancel": "Cancel",
  "Click cap explanation": "Click cap explanation",
  "Click speed is capped to 50 clicks per second regardless what you set the interval to, which is what the game normally caps all autoclickers to.": "Click speed is capped to 50 clicks per second regardless what you set the interval to, which is what the game normally caps all autoclickers to.",
  "The autoclicker can click as fast as 1,000 clicks per second, which is not possible with any external autoclickers. Some people may consider this cheating.": "The autoclicker can click as fast as 1,000 clicks per second, which is not possible with any external autoclickers. Some people may consider this cheating.",
  "\"Click interval\" is replaced with \"Clicks per second\", allowing you to click as fast as your CPU can handle. You will also get the Cheated Cookies Taste Awful shadow achievement.": "\"Click interval\" is replaced with \"Clicks per second\", allowing you to click as fast as your CPU can handle. You will also get the Cheated Cookies Taste Awful shadow achievement.",
  "Got it": "Got it",
  "Are you sure?": "Are you sure?",
  "You will get the <b>%1</b> achievement. Are you sure you want to enable it?": "You will get the <b>%1</b> achievement. Are you sure you want to enable it?",
  "I'm aware of the consequences, proceed": "I'm aware of the consequences, proceed",
  "Nevermind": "Nevermind",
  "...": "...",
  "(press keys)": "(press keys)",
  "(release to set)": "(release to set)"
}

const LANG_CN = Object.assign({}, LANG); // translate later

if (typeof Game !== 'undefined' && Game && Game.ready) { r(); } 
else { 
    const int = setInterval(() => {
        if (typeof Game !== 'undefined' && Game && Game.ready) {
            r();
            clearInterval(int);
        }
    }, 100);
}
})();