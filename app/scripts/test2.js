var Ad = function(){
	this.viewportWidth 		= window.innerWidth;
	this.viewportHeight 	= window.innerHeight;
    this.parentUri          = null;
	this.classString 		= document.getElementById('mobpartner_banner').className;
	this.isDragging 		= false;
    this.type               = null;
    this.config             = null;
    this.isMobile           = false;
    this.isTablet           = false;
    this.isDesktop          = false;
    this.isPortrait         = false;
    this.isLandscape        = false;
    this.orientation        = null;
    this.random             = null;
    this.oldAndroid         = false;

    this.detectDevice();
    this.resize();
    
};

Ad.prototype.detectDevice = function(){
    var _this = this;
    
    if (navigator.userAgent.match(/(android|iphone|ipad|blackberry|symbian|symbianos|symbos|netfront|model-orange|javaplatform|iemobile|windows phone|samsung|htc|opera mobile|opera mobi|opera mini|presto|huawei|blazer|bolt|doris|fennec|gobrowser|iris|maemo browser|mib|cldc|minimo|semc-browser|skyfire|teashark|teleca|uzard|uzardweb|meego|nokia|bb10|playbook)/gi)) {
        if (((window.innerWidth  >= 800) && (window.innerHeight >= 480)) || navigator.userAgent.match(/ipad/gi) ||  ((window.innerWidth  >= 480) && (window.innerHeight >= 800))) {
            _this.isTablet = true;
            _this.isMobile = false;
            _this.isDesktop = false;
        } else {
            if(navigator.userAgent.match(/Galaxy Nexus Build/)) {
                this.oldAndroid = true;
                document.getElementById('mobpartner_banner').classList.add('olDroid');
            }
            _this.isTablet = false;
            _this.isMobile = true;
            _this.isDesktop = false; 
        }
    } else {
        _this.isTablet = false;
        _this.isMobile = false;
        _this.isDesktop = true;
    }
};

Ad.prototype.resize = function(){
    var _this = this;
    switch(window.orientation) 
    {  
        case -90:
        case 90:
            _this.isPortrait = false;
            _this.isLandscape = true;
            break; 
        default:
            _this.isPortrait = true;
            _this.isLandscape = false;
            break; 
    }
}

Ad.prototype.getRequest = function(e, callback) {
    if(e.data.match(/config/)) {
        this.config['random'] = e.data.split('=')[1];
        e.source.postMessage(this.config, e.origin);
    }
    if(e.data.match(/size/) && this.type === 'interstitial') {
        this.viewportHeight = e.data.split('=')[1];
        this.resizeWrapper();
    }
    if(e.data.match(/url/) && this.type === 'interstitial') {
        this.parentUri = e.data.split('=')[1];
    }
    if(e.data.match(/width/)) {
        this.viewportWidth = e.data.split('=')[1];
        if(typeof callback == 'function')  callback();
    }
}

Ad.prototype.closeRequest = function(e){
    e.source.postMessage('close', e.origin);
};Ad.prototype.blockingScroll = function(e){
	if(this.isDragging == false) {
		e.preventDefault();
	} 

	this.isDragging = true;
	
};Ad.prototype.centerAd = function() {

    var link = document.getElementsByClassName('plainAd')[0],
		top,
        image = document.getElementById('interstitial_image');
    
    
        
	if(image != null) {
        image.style.visibility = 'hidden';
        
		var	img 	= new Image(),
			_this 	= this;

		img.onload = function(){
            
            setTimeout(function(){
                top  = (_this.viewportHeight - link.offsetHeight) / 2;

                link.style.marginTop = top + 'px';
                
                image.style.visibility = 'visible ';
            }, 250)
		}     
        img.src = document.getElementById('interstitial_image').getAttribute('src');
	} else {
        top  = (this.viewportHeight - link.offsetHeight) / 2;

        link.style.marginTop = top + 'px';	
	}
    
    	
}

Ad.prototype.resizeWrapper = function(){
    this.adUnit.setAttribute('style', 'height:' + this.viewportHeight + 'px');
};Ad.prototype.setCaroussel = function(){
	this.startTouch 					= 0;
	this.adHorizontalPosition 			= null;
	this.adVerticalPosition 			= null;
	this.displaceDelta 					= 0;
	this.count 							= 1;
	this.timeIn 						= 0;
	this.isAnimate 						= false;
	this.listWrapper 					= this.adUnit.getElementsByTagName('ul')[0];
	this.listEl 						= this.adUnit.getElementsByTagName('li');
	this.nbrEl 							= this.listEl.length;
	this.duration 						= 4000;
	this.position 						= this.adUnit.getAttribute('data-position');
	this.displayType 					= this.adUnit.getAttribute('data-displaytype');
	this.typeEffect 					= this.adUnit.getAttribute('data-slideeffect');
	this.isCaroussel 					= false;
	this.autoSlide 						= null;
	this.scrollPointY 					= 0;
	this.scrollDelta 					= 0;
    this.slideWidth                     = 0;
	this.checkScroll;

    if(this.nbrEl > 1){
        this.createClones();
    }
	
	if(this.isAnimate === false) {

		if(this.nbrEl > 1) {
			this.isCaroussel = true;
			this.autoSlide = setTimeout(this.launchCaroussel.bind(this), this.duration);
		}

		this.adUnit.addEventListener('touchstart', this.startDrag.bind(this), false);
		this.adUnit.addEventListener('touchmove', this.doDrag.bind(this), false);
		this.adUnit.addEventListener('touchend', this.stopDrag.bind(this), false);
	}
}

Ad.prototype.createClones = function(){
    var _this = this;
    
    for (var i = 0; i < this.nbrEl; ++i) {
        if(i == 0){
            var createFirstClone = _this.listEl[i].cloneNode('true');
            _this.listWrapper.appendChild(createFirstClone);
        }
        
        if(i == this.nbrEl - 1){
            var createLastClone = _this.listEl[i].cloneNode('true');
            _this.listWrapper.insertBefore(createLastClone, _this.listEl[0]);
        }
    }
    
    this.listWrapper 					= this.adUnit.getElementsByTagName('ul')[0];
	this.listEl 						= this.adUnit.getElementsByTagName('li');
	this.nbrEl 							= this.listEl.length;
    
    this.styleCaroussel();
}

Ad.prototype.styleCaroussel = function(){
    var left = (this.nbrEl > 1)? this.viewportWidth * -1 : 0;
	this.listWrapper.setAttribute('style', 'width:' + this.viewportWidth * this.nbrEl + 'px; left:' + left + 'px');
    this.slideWidth = this.viewportWidth;
	var _this = this;
	
	for(var i = 0; i < this.nbrEl; ++i) {
		_this.listEl[i].setAttribute('style', 'width:' + _this.viewportWidth + 'px');
	}
}

Ad.prototype.stopCaroussel = function(){
    var _this = this;
    
	clearTimeout(_this.autoSlide);
}

Ad.prototype.launchCaroussel = function(){
	this.count ++;
	if(this.count > this.nbrEl - 1) this.count = 0;
	this.Goto();
}

Ad.prototype.endSliding = function(){
	this.isAnimate = false;
	this.listWrapper.className = '';
	this.listWrapper.style.webkitTransition = '';
    this.listWrapper.style.MozTransition = '';
    if(this.count == 0) {
        this.listWrapper.style.left = (this.slideWidth * (this.nbrEl - 2)) * -1 + 'px';
        this.count = this.nbrEl - 2;
    }
    if(this.count == this.nbrEl - 1) {
        this.listWrapper.style.left = this.slideWidth * -1 + 'px';
        this.count = 1;
    }
    this.stopCaroussel();
	if(this.isCaroussel === true) this.autoSlide = setTimeout(this.launchCaroussel.bind(this), this.duration);
}

Ad.prototype.Goto = function(timerest){
	var SlidingDelay = (timerest)? timerest : 500;

	if(SlidingDelay > 1) SlidingDelay = .5;

	this.listWrapper.style.webkitTransition = 'left ease-out ' + SlidingDelay + 's';
    this.listWrapper.style.MozTransition = 'left ease-out ' + SlidingDelay + 's';
	this.listWrapper.style.left = ((this.slideWidth * -1) * this.count) + 'px';

	SlidingDelay *= 1000;

	var endSlidingDelay = (timerest)? (timerest * 1000) + 100 : 500;
	this.autoSlide = setTimeout(this.endSliding.bind(this), endSlidingDelay);	
}

Ad.prototype.startDrag = function(event){
	this.isDragging = false;
	document.addEventListener('touchmove', this.blockingScroll.bind(this), false);
	this.timeIn = (new Date()).getTime();
	this.stopCaroussel();
	this.startTouch  = event.changedTouches[0].pageX;
	this.adHorizontalPosition = this.listWrapper.offsetLeft;
}

Ad.prototype.doDrag = function(event) {
	this.timeOut ++;
	this.displaceDelta = event.changedTouches[0].pageX - this.startTouch;
	this.listWrapper.style.left = (this.adHorizontalPosition <= 0)? (this.adHorizontalPosition + this.displaceDelta) + 'px' : 0 + 'px';
}

Ad.prototype.stopDrag = function(event) {
	this.displaceDelta = event.changedTouches[0].pageX - this.startTouch;

	var timeOut = (new Date()).getTime(),
		timeDiff = timeOut - this.timeIn,
		percentScroll = (100 / this.viewportWidth) * Math.abs(this.displaceDelta),
		timeRest = (((timeDiff * 100) / percentScroll) - percentScroll) / 1000,
		stopTouch = event.changedTouches[0].pageX;

	this.isAnimate = true;
		
	if(stopTouch < this.startTouch && (this.displaceDelta * -1) >=  this.viewportWidth * .1) {
		this.count += 1;
		if(this.count > this.nbrEl - 1) this.count = this.nbrEl - 1;
	} else if (stopTouch > this.startTouch && this.displaceDelta >=  this.viewportWidth * .1) {
		this.count -= 1;
		if(this.count < 0) this.count = 0;
	}
	this.Goto(timeRest);
};;Ad.prototype.redirect = function() {
    this.target = document.getElementById('target');
    this.parent = null;
    this.redirectHref = null;
    
    var falseLink = document.getElementsByClassName('redirectionButton');
    
    for(var l = 0; l < falseLink.length; ++l){
        falseLink[l].addEventListener('click', function(e){
            e.preventDefault();
        });
    }
    
	if(this.target){
        this.parent = this.target;
        this.redirectHref = this.target.getAttribute('data-href');
        this.redirectById();
    } else {
        this.redirectByTag();
    }
}

Ad.prototype.redirectById = function(){
    
    var _this   = this;
    
    this.target.addEventListener('click', function(e){
        _this.launchLoader(e);
    });
}

Ad.prototype.redirectByTag = function(){
    
    var links           = document.getElementsByTagName('a'),
        linksLength     = links.length,
        _this           = this;
    
    for(var i = 0; i < linksLength; ++i){
        links[i].addEventListener('click', function(e){
            e.preventDefault();
            _this.parent = _this.searchTarget(this);
            _this.redirectHref = this.getAttribute('href');
            
            _this.launchLoader(e);
        });
    }
    
}

Ad.prototype.searchTarget = function(thisEl){
    var parent = thisEl.parentNode;
        
    if(parent.className.match('adWrapper')){
        return parent;
    } else {
        return this.searchTarget(parent);
    }
}

Ad.prototype.launchLoader = function(event){
    var templateWrapper = document.createElement('div');
    
    templateWrapper.classList.add('spinner');
    
    for(var i = 1; i <= 12; ++i){
        var block = document.createElement('div');

        block.classList.add('bar' + i);
        templateWrapper.appendChild(block);
    }
            
    this.insertInButton(templateWrapper, event);
}

Ad.prototype.insertInButton = function(template, event){
        
    var button                  = this.parent.getElementsByClassName('redirectionButton')[0],
        buttonBaseContent       = button.innerHTML,
        buttonWidth             = button.offsetWidth,
        buttonHeight            = button.offsetHeight,
        lastPadding             = {},
        buttonBorder            = 2,
        _this                   = this;
    
    lastPadding.left = window.getComputedStyle(button, null).getPropertyValue('padding-left').split('p')[0];
    lastPadding.right = window.getComputedStyle(button, null).getPropertyValue('padding-right').split('p')[0];
    lastPadding.top = window.getComputedStyle(button, null).getPropertyValue('padding-top').split('p')[0];
    lastPadding.bottom = window.getComputedStyle(button, null).getPropertyValue('padding-bottom').split('p')[0];
    
    
    if(this.adUnit.className.match(/mobwidget|mobwall/)){
        buttonBorder = 6;
    }
    if(this.adUnit.className.match(/interstitial/)){
        buttonBorder = 0;
    }
    
    button.style.width = buttonWidth - buttonBorder + 'px';
    button.style.height = buttonHeight - buttonBorder + 'px';
    button.style.paddingLeft = '0px';
    button.style.paddingRight = '0px';
    button.style.paddingTop = '0px';
    button.style.paddingBottom = '0px';
    
    template.style.marginTop = (((buttonHeight - buttonBorder) - 16) / 2) + 'px';
    
    button.innerHTML = "";
    button.appendChild(template);
    
    setTimeout(function(){
        _this.makeRedirection(event, button, buttonBaseContent, buttonWidth, buttonHeight, lastPadding, buttonBorder);
    }, 1000);
}

Ad.prototype.makeRedirection = function(event, buttonElement, baseContent, buttonWidth, buttonHeight, lastPadding, buttonBorder){
    event.preventDefault();
        
    if(this.isMraid == true){      
        mraid.open(this.redirectHref);     
    } else {
        window.open(this.redirectHref);
    }

    buttonElement.innerHTML = baseContent;
    buttonElement.style.width = buttonWidth - lastPadding.left - lastPadding.right - buttonBorder + 1 + 'px';
    buttonElement.style.height = buttonHeight - lastPadding.top - lastPadding.bottom - buttonBorder + 'px  ';
    buttonElement.style.paddingLeft = lastPadding.left + 'px';
    buttonElement.style.paddingRight = lastPadding.right + 'px';
    buttonElement.style.paddingTop = lastPadding.top + 'px';
    buttonElement.style.paddingBottom = lastPadding.bottom + 'px';
};var Video = function(that) {
	this.adUnit = that.adUnit;
    this.viewportHeight = that.viewportHeight;
    
	this.resizeVideoViewport();
    
    this.redirect();
};

Video.prototype = new Ad;

Video.prototype.resizeVideoViewport = function(){
    
	this.centerAd();
};var Interactive = function(that) {
	this.images 		= {};
	this.adUnit 		= document.querySelectorAll('.mobAd')[0];
    this.viewportHeight = that.viewportHeight;
	this.canvas 		= {'temp':null, 'draw':null};
	this.mainCanvas 	= document.getElementById('maincanvas');
	this.area 			= 0;
	this.scratchArea	= 0;
	this.oldLocal 		= {
		'x' : 0,
		'y' : 0
	};
	this.stride = 100;
	this.text = that.text;
        
	this.images.back = {
		'url' : this.mainCanvas.getAttribute('data-back-image'), 'img' : null
	}

	this.images.front = {
		'url' : this.mainCanvas.getAttribute('data-front-image'), 'img' : null
	}

	this.loadImages();
}

Interactive.prototype = new Ad;

Interactive.prototype.getEventCoords = function(ev) {
	var coords = {};

	coords.pageX = ev.changedTouches[0].pageX;
	coords.pageY = ev.changedTouches[0].pageY;

	return coords;
}

Interactive.prototype.getLocalCoords = function(elem, coords){
	var ox = 0, oy = 0;

	while (elem != null) {
		ox += elem.offsetLeft;
		oy += elem.offsetTop;
		elem = elem.offsetParent;
	}

	return { 'x': coords.pageX - ox, 'y': coords.pageY - oy };
}

Interactive.prototype.scratchLine = function(can, x, y, fresh){
	var ctx = can.getContext('2d');
	ctx.lineWidth = 100;
	ctx.lineCap = ctx.lineJoin = 'round';
	ctx.strokeStyle = '#f00';
	if (fresh) {
		ctx.beginPath();
		ctx.moveTo(x, y);
	}
	ctx.lineTo(x, y);
	ctx.stroke();
}

Interactive.prototype.recompositeCanvas = function(){
	var tempctx = this.canvas.temp.getContext('2d');
	var mainctx = this.mainCanvas.getContext('2d');

	this.canvas.temp.width = this.canvas.temp.width;

	tempctx.drawImage(this.canvas.draw, 0, 0);

	tempctx.globalCompositeOperation = 'source-atop';
	tempctx.drawImage(this.images.back.img, 0, 0, this.mainCanvas.width, this.mainCanvas.height);

	mainctx.drawImage(this.images.front.img, 0, 0,  this.mainCanvas.width, this.mainCanvas.height);
	mainctx.font = "bold 40px Arial";
	mainctx.fillStyle = "rgba(0,0,0, .5)";
	mainctx.textAlign = 'center';
	mainctx.fillText(this.text, this.canvas.temp.width/2, this.canvas.temp.height/2);
	mainctx.drawImage(this.canvas.temp, 0, 0);
}

Interactive.prototype.setupCanvas = function(){

	var _this = this;
    if(this.images.back.img.width > window.innerWidth){
        this.mainCanvas.width = 320;
	    this.mainCanvas.height = 320 * (this.images.back.img.height / this.images.back.img.width);
    } else {
        this.mainCanvas.width = this.images.back.img.width;
	    this.mainCanvas.height = this.images.back.img.height;
    }
	
	this.area = this.mainCanvas.width * this.mainCanvas.height;

	this.centerAd();

	this.canvas.temp = document.createElement('canvas');
	this.canvas.draw = document.createElement('canvas');
	this.canvas.temp.width = this.canvas.draw.width = this.mainCanvas.width;
	this.canvas.temp.height = this.canvas.draw.height = this.mainCanvas.height;

	this.recompositeCanvas();

	this.mainCanvas.addEventListener('touchstart', this.startTouchHandler.bind(this));
	this.mainCanvas.addEventListener('touchmove', this.moveTouchHandler.bind(this));
	this.mainCanvas.addEventListener('touchend', this.endTouchHandler.bind(this));

//	_this.mainCanvas.removeEventListener('touchstart', _this.startTouchHandler.bind(_this));
//	_this.mainCanvas.removeEventListener('touchmove', _this.moveTouchHandler.bind(_this));
//	_this.mainCanvas.removeEventListener('touchend', _this.endTouchHandler.bind(_this));

	setTimeout(function(){
		_this.mainCanvas.removeEventListener('touchstart', _this.startTouchHandler.bind(_this));
		_this.mainCanvas.removeEventListener('touchmove', _this.moveTouchHandler.bind(_this));
		_this.mainCanvas.removeEventListener('touchend', _this.endTouchHandler.bind(_this));

		_this.scratchLine(_this.canvas.draw, _this.canvas.draw.width, 0, false);
		_this.recompositeCanvas();
		_this.showAd();
	}, 3000);
}

Interactive.prototype.startTouchHandler = function(e){
	document.addEventListener('touchmove', this.blockingScroll.bind(this), false);

	var local = this.getLocalCoords(this.mainCanvas, this.getEventCoords(e));
	touchstart = true;

	this.scratchLine(this.canvas.draw, local.x, local.y, true);
	this.recompositeCanvas();

	return false;
}

Interactive.prototype.moveTouchHandler = function(e){
	var local = this.getLocalCoords(this.mainCanvas, this.getEventCoords(e));

	this.scratchLine(this.canvas.draw, local.x, local.y, false);
	this.recompositeCanvas();
	return false;

}

Interactive.prototype.showAd = function(){
	var _this = this;
	var amount = 100;
	var ctx = this.canvas.draw.getContext('2d');
    var thisAnimation = 1000;
    if(this.isDesktop) thisAnimation = 2000;
	var timer = setInterval(function(){
		amount += 40;
        
		if(amount < thisAnimation) {
			ctx.lineWidth = amount;
			ctx.lineCap = ctx.lineJoin = 'round';
			ctx.strokeStyle = '#f00';
			ctx.lineTo(0, 0);
			ctx.stroke();
			_this.recompositeCanvas();
		} else {
			clearInterval(timer)
		}
	}, 30);
}

Interactive.prototype.endTouchHandler = function(e){
	document.removeEventListener('touchmove',this.blockingScroll.bind(this), false);
	return true;
}

Interactive.prototype.loadImages = function(){
    
    if(this.isDesktop){
        document.getElementById('mobpartner_banner').style.width = '100%';
    }
    
	var _this = this,
		loadCount = 0,
		loadTotal = 2,
		loadingIndicator;

		function imageLoaded(e) {
			loadCount++;

			if (loadCount >= loadTotal) {
				_this.setupCanvas();
			}
		}

		for(i in this.images) if (this.images.hasOwnProperty(i)) {
			_this.images[i].img = document.createElement('img');
			_this.images[i].img.src = _this.images[i].url;
			_this.images[i].img.onload = function(){
				imageLoaded();
			}
		}
}
;var Mobwall = function(el, isMraid){
    this.adUnit = el;
    this.type = 'mobwall';
    this.isMraid = isMraid;
    this.width = window.innerWidth;
    this.configType = this.adUnit.getAttribute('data-detailedappdescription');
    this.sendConfig();
        
    var link = document.getElementsByTagName('a');
    
    for(var a = 0; a < link.length; ++a){
        link[a].id = "click-" + a;
    }
};

Mobwall.prototype = new Ad;

Mobwall.prototype.sendConfig = function(){
    
    var _this = this;
    
    if(this.isTablet){
        this.adUnit.classList.add('tablet');
    } else {
        this.adUnit.style.width = this.width + 'px';
    }
    
    var header = (document.getElementsByTagName('header').length > 0) ? document.getElementsByTagName('header')[0].offsetHeight : 0;
    var height = (document.getElementsByTagName('li').length * 62) + header + 25;
    
    if(this.isMraid == false){
        this.config = {
            'type':'mobwall',
            'height':height
        }

        window.addEventListener("message", function(e){
            _this.getRequest(e);
        }, false);
    }
    
    var _this = this;
        
    if(this.configType == 1){     
        var clickWrapper = document.getElementsByClassName('item-info');
        
        for (var info = 0; info < clickWrapper.length; ++info){
            var linkClick = clickWrapper[info].getElementsByTagName('a');
            
            for(var i = 0; i < linkClick.length; ++i){
                linkClick[i].addEventListener('click', function(e){
                    e.preventDefault();
                    var parent = this.parentNode.parentNode.parentNode;

                    var descriptionWrapper = parent.getElementsByClassName('item-description')[0],
                        expandButton = parent.getElementsByClassName('readMore'),
                        expandDesc = parent.getElementsByClassName('more'),
                        paragraph = descriptionWrapper.getElementsByTagName('p')[0];
                    
                    if(paragraph.innerHTML != ''){
                        if(descriptionWrapper.className.match(/open/)){
                            if(_this.isMraid){
                                mraid.open(this.getAttribute('href'));
                            } else {
                                window.open(this.getAttribute('href'));
                            }
                        } else {
                            descriptionWrapper.className += ' open';

                            expandButton[0].addEventListener('click', function(e){
                                e.preventDefault();

                                if(expandButton[0].className.match(/close-description/)){
                                    descriptionWrapper.classList.remove('open');
                                    expandDesc[0].classList.remove('active');
                                    expandButton[0].classList.remove('close-description');
                                    expandButton[0].innerHTML = '<span class="fa fa-arrow-down"></span><i>' + expandButton[0].getAttribute('data-open') + '</i>'
                                } else {
                                    expandDesc[0].className += ' active';
                                    expandButton[0].className += ' close-description';
                                    expandButton[0].innerHTML = '<span class="fa fa-arrow-up"></span><i>' + expandButton[0].getAttribute('data-close') + '</i>';
                                }
                            })
                        }
                    } else {
                        if(_this.isMraid){
                            mraid.open(this.getAttribute('href'));
                        } else {
                            window.open(this.getAttribute('href'));
                        }
                    }
                })
            }
        }
    } else {
        this.redirect();
    }
}

Mobwall.prototype.clickEvent = function(){
    if(this.isMraid){
        mraid.open(this.getAttribute('data-href'));
    } else {
        window.open(this.getAttribute('data-href'));
    }
};var Mobwidget = function(el, isMraid) {
	this.adUnit = el;
	this.collection = [];
    this.isMraid = isMraid;
	this.appNbr = el.getAttribute('data-numberofappsdisplayed');
    this.type = el.getAttribute('data-sliderdirection');
    this.headerConfig = el.getAttribute('data-header');
    
    if(this.headerConfig != '1'){
        this.adUnit.classList.add('noHeader');
    }
    
    var nbrLi = this.adUnit.getElementsByTagName('li').length;
    if(nbrLi <= 1){
        this.type = 'vertical';
    }
    if(this.type == 'vertical'){
        this.adUnit.classList.add('vertical');
    }
    if(this.isMobile){
        this.adUnit.classList.add('mobile');
    }
    
    this.sendConfig();
    
    var link = document.getElementsByTagName('a');
    
    for(var a = 0; a < link.length; ++a){
        link[a].id = "click-" + a;
    }
    
    var _this = this;
    var thisLink = document.getElementsByClassName('app');  

    this.redirect();
}

Mobwidget.prototype = new Ad;

Mobwidget.prototype.sendConfig = function(){
    var _this = this;
    var header = (document.getElementsByTagName('header').length > 0) ? document.getElementsByTagName('header')[0].offsetHeight : 0;
    var footer = (document.getElementsByTagName('footer').length > 0) ? document.getElementsByTagName('footer')[0].offsetHeight : 0
    var height = (this.type != 'vertical')? (document.getElementsByTagName('li')[0].offsetHeight) + header + footer : (document.getElementsByClassName('item')[0].offsetHeight * this.appNbr) + header + footer;
    
    if(this.isMraid != true){
        this.config = {
            'type':'mobwidget',
            'height':height + 5
        }

        window.addEventListener("message", function(e){
            _this.getRequest(e, function(){
                if(_this.type != 'vertical'){
                    _this.setCaroussel();
                    _this.styleCaroussel();
                }
            });
        }, false);
        
        _this.setHeight();
    } else {
        
        _this.setHeight();
    }
    
    if(document.location.hostname.match(/mobwidget.mobpartner.com/)){
        if(_this.type != 'vertical'){
            _this.setCaroussel();
            _this.styleCaroussel();
        }
    }
    
}

Mobwidget.prototype.styleCaroussel = function(){

	this.viewportWidth = this.viewportWidth;

	Ad.prototype.styleCaroussel.call(this);
}

Mobwidget.prototype.setHeight = function(){
	var liHeight = (this.type != 'vertical')? document.getElementsByTagName('li')[0].offsetHeight : document.getElementsByClassName('item')[0].offsetHeight * this.appNbr;
    var headerHeight = 0;
    var footerHeight = 0;
    
    if(document.getElementsByTagName('header').length > 0){
        headerHeight = 30;
    }
    if(document.getElementsByTagName('footer').length > 0){
        footerHeight = 19;
    }

	this.adUnit.style.height = (liHeight + footerHeight + headerHeight) + 'px';
};var Mobstream = function(el, isMraid){
	this.adUnit 				= el;
    this.isMraid                = isMraid;
    this.format                 = this.adUnit.getAttribute('data-format');
    this.config                 = null;
    this.unit                   = 0;
    
    var _this = this;
    
    this.configure();
    if(this.isMraid != true) this.sendConfig();
    
    if(this.isTablet){
        this.adUnit.classList.add('tablet');
    }
    
	this.resizeMobstream();
};

Mobstream.prototype = new Ad;

Mobstream.prototype.configure = function(){
    this.unit = this.viewportWidth;
    if(this.unit == 0) this.unit = window.innerWidth;
}

Mobstream.prototype.resizeMobstream = function(){
    
    this.redirect();
    
    var poster = document.getElementsByClassName('bkgd-border')[0],
        _this = this;
    
    switch(this.format){
        case '2x2' :
            if(_this.isDesktop){
                _this.unit = 160
            }
            _this.adUnit.style.width = _this.unit + 'px';
            _this.adUnit.style.height = _this.unit + 'px';
            document.getElementById('grid2x2').style.width = _this.unit + 'px';
            document.getElementById('grid2x2').style.height = _this.unit + 'px';
            poster.style.height = (_this.unit - 20) / 1.35 + 'px';
            _this.config = {
                'type':'mobstream',
                'height' : _this.unit,
                'width' : _this.unit
            }
            break;

        case '2x3' :
            if(_this.isDesktop){
                _this.unit = 160
            }
            _this.adUnit.style.width = _this.unit + 'px';
            document.getElementById('grid2x3').style.width = _this.unit + 'px';
            document.getElementById('grid2x3').style.height = _this.unit * 1.5 + 'px';
            poster.style.height = (_this.unit - 20) / .75 + 'px';
            _this.config = {
                'type':'mobstream',
                'height' : _this.unit * 1.5,
                'width' : _this.unit
            }
            break;

        case '4x1' :
            if(_this.isDesktop){
                _this.unit = 320
            }
            _this.adUnit.style.width = _this.unit + 'px';
            document.getElementById('grid4x1').style.width = _this.unit + 'px';
            document.getElementById('grid4x1').style.height = _this.unit * .25 + 'px';
            _this.config = {
                'type':'mobstream',
                'height' : _this.unit * .25,
                'width' : _this.unit
            }
            break;

        case '4x2' :
            if(_this.isDesktop){
                _this.unit = 320
            }
            _this.adUnit.style.width = _this.unit + 'px';
            document.getElementById('grid4x2').style.width = _this.unit + 'px';
            document.getElementById('grid4x2').style.height = _this.unit * .5 + 'px';
            poster.style.height = (_this.unit - 20) / 3 + 'px';
            _this.config = {
                'type':'mobstream',
                'height' : _this.unit * .5,
                'width' : _this.unit
            }
            break;

        default :
            if(_this.isDesktop){
                _this.unit = 320
            }
            _this.adUnit.style.width = _this.unit + 'px';
            document.getElementById('grid4x3').style.width = _this.unit + 'px';
            document.getElementById('grid4x3').style.height = _this.unit * .75 + 'px';
            poster.style.height = (_this.unit - 20) / 1.875 + 'px';
            _this.config = {
                'type':'mobstream',
                'height' : _this.unit * .75,
                'width' : _this.unit
            }
            break;
    }
}

Mobstream.prototype.sendConfig = function(){
    var _this = this;
    
    window.addEventListener("message", function(e){
        _this.getRequest(e);
    }, false);
};var Intersticial = function(el, isMraid, screenSize){
	this.adUnit 				= el;
	this.closeButtonImage 		= this.adUnit.getAttribute('data-closebuttonimage');
	this.closeButtonPosition	= this.adUnit.getAttribute('data-closebuttonposition');
	this.closeButtonDelay		= this.adUnit.getAttribute('data-closebuttonautointeractiondelay') * 1000;
	this.creativeType			= this.adUnit.getAttribute('data-interstitialtype');
	this.specialEffect			= this.adUnit.getAttribute('data-specialeffect');
	this.text					= this.adUnit.getAttribute('data-interstitialtext');
	this.wrapperBackgroundColor = this.adUnit.getAttribute('data-backgroundcolor');
    this.type                   = 'interstitial';
    this.isMraid                = isMraid;
    this.screenSize             = null;

    this.createWrapper();
    this.clickUrl();
}

Intersticial.prototype = new Ad;

Intersticial.prototype.createWrapper = function(callback){  
    var _this = this;
    
    if(this.isMobile && window.innerWidth > 480){
        this.adUnit.classList.add('landscape')
    }
    
    if(this.isTablet && window.innerWidth > 850){
        this.adUnit.classList.add('tabletLandscape')
    }
    
    if(this.isTablet){
        this.adUnit.classList.add('tablet');
    }
    
    this.createCloseButton();
    
    if(this.isMraid != true){
        this.sendConfig();
    } else {
        this.resizeFromSDK();
    };
};

Intersticial.prototype.sendConfig = function(){
    var _this = this;
    
    this.config = {
        'type':'interstitial',
        'position' : 'top'
    }
    
    window.addEventListener("message", function(e){
        _this.getRequest(e);
    }, false);
}

Intersticial.prototype.resizeWrapper = function(){
    this.adUnit.setAttribute('style', 'height:' + this.viewportHeight + 'px');

    this.selectCreativeType();
}

Intersticial.prototype.resizeFromSDK = function(){
    var _this = this,
        size;
    
    this.screenSize = mraid.getScreenSize();
    if(typeof this.screenSize == 'string'){
        size = JSON.parse(this.screenSize);
    } else {
        size = this.screenSize;
    }
    this.viewportHeight = size.height;
    this.resizeWrapper();
}

Intersticial.prototype.selectCreativeType = function(){
    var _this = this;

    switch(this.creativeType) {

		case 'interactive' :
			new Interactive(this);
			break;

		case 'mobwall' :
			break;

		case 'perspective' :
			new Perspective(this);
			break;

		case 'video' :
			new Video(this);
            break;

		default :
			this.centerAd();
			break;

		case 'appPromo' :
			this.setCaroussel();
			break;
	}
}

Intersticial.prototype.clickUrl = function(){
    var _this = this;
    
    if(this.creativeType != 'video'){
        document.getElementById('target').addEventListener('click', function(e){
            if(this.getAttribute('href') == 'undefined'){
                if(_this.isMraid == true){
                    mraid.open(this.getAttribute('data-href'));
                    setTimeout(function(){
                        mraid.close();
                    }, 5000);
                }else {
                    window.open(this.getAttribute('data-href'));
                    setTimeout(function(){
                        window.parent.postMessage('?close', _this.parentUri);
                    }, 5000);
                }
            } else {
                if(_this.isMraid == true){
                    e.preventDefault();
                    mraid.open(this.getAttribute('href'));
                    setTimeout(function(){
                        mraid.close();
                    }, 5000);
                }else {
                    setTimeout(function(){
                        window.parent.postMessage('?close', _this.parentUri);
                    }, 5000);
                }
            }

        });
    }
    
    
    if(this.creativeType == 'video'){
        var video = document.getElementsByTagName('video')[0];
    
        document.getElementById('launchVideo').addEventListener('click', function(e){
            e.preventDefault();

            document.getElementById('poster').style.display = 'none';
            video.play();
        });

        video.volume = 0;

        var playing = setInterval(function(){
            if(video.paused){
                if(document.getElementById('poster').style.display == 'none'){
                    document.getElementById('poster').style.display = 'block';
                }
            } else {
                if(document.getElementById('poster').style.display == 'block'){
                    document.getElementById('poster').style.display = 'none';
                }
            }
        }, 33)
    }
    
}

Intersticial.prototype.createCloseButton = function(){

    var _this = this,
        count = 0,
        decount = document.createElement('canvas');

    decount.id="closeButton";
	decount.style.position = 'absolute';
	decount.style.width = '25px';
	decount.style.height = '25px';
    if(this.isMraid == true) decount.style.top = '10px';
	else decount.style.top = '0px';
	decount.style.display = 'block';
	decount.style.fontFamily = 'arial, sans-serif';
	decount.style.fontSize = '0px';
	decount.style.fontWeight = 'bold';
    decount.style.cursor = 'pointer';
    decount.style.padding = '10px';

	if(this.closeButtonPosition == 'top left') {
        if(this.isMraid == true) decount.style.left = '10px';
	    else decount.style.left = '0px';
	} else {
        if(this.isMraid == true) decount.style.right = '10px';
	    else decount.style.right = '0px';
	}

	_this.adUnit.appendChild(decount);

	var context = decount.getContext('2d'),
		timeRemind = this.closeButtonDelay,
		diff = 2 / (1000 / 30 * (this.closeButtonDelay / 1000)),
		newArc = 0,
		thisTime = this.closeButtonDelay / 1000;

	context.canvas.width = 50;
	context.canvas.height = 50;

	var delay = 0,
		barWidth = 0;
		
	var canvasAnim = setInterval(function(){
		
		context.clearRect ( 0 , 0 , context.canvas.width , context.canvas.height );

		context.beginPath();
		context.arc(25, 25, 24, 0, 2 * Math.PI, false);
		context.fillStyle = '#FFF';
		context.fill();
		context.beginPath();
		context.arc(25, 25, 20, Math.PI * -.5, Math.PI * (newArc - .5), false);
		context.lineWidth = 5;
		context.stroke();

		newArc += diff;

		timeRemind -= 30;

		thisTime = Math.ceil(timeRemind / 1000);
        if(count >= _this.closeButtonDelay ) {
			clearInterval(canvasAnim);

			var createClose = setInterval(function(){
				delay ++;
				barWidth ++;
				context.clearRect ( 0 , 0 , context.canvas.width , context.canvas.height );

				context.beginPath();
				context.arc(25, 25, 24, 0, 2 * Math.PI, false);
				context.fillStyle = '#FFF';
				context.fill();

				context.beginPath();
				context.moveTo(25, 25);
				context.lineTo(25 + barWidth, 25 - barWidth);
				context.stroke();

				context.beginPath();
				context.moveTo(25, 25);
				context.lineTo(25 + barWidth, 25 + barWidth);
				context.stroke();

				context.beginPath();
				context.moveTo(25, 25);
				context.lineTo(25 -barWidth, 25 - barWidth);
				context.stroke();

				context.beginPath();
				context.moveTo(25, 25);
				context.lineTo(25 - barWidth, 25 + barWidth);
				context.stroke();

				context.beginPath();
				context.arc(25, 25, 20, 0, 2 * Math.PI, false);
				context.lineWidth = 5;
				context.stroke();

				if (delay >= 8) {
                    clearInterval(createClose)
                    document.getElementById('closeButton').addEventListener('click', function(e){
                        e.preventDefault();
                        if(_this.isMraid === true){
                            mraid.close();
                        } else {
                            window.parent.postMessage('?close', _this.parentUri);   
                        }
                    });
                };

			}, 30);
		}
		count += 30
	}, 30);	
}

//------------------------------------------------------------------------------------------------------------//
//------------------------------------------------------------------------------------------------------------//
//																											  //
//												OVERRIDE AD METHODS											  //
//																											  //
//------------------------------------------------------------------------------------------------------------//
//------------------------------------------------------------------------------------------------------------//

Intersticial.prototype.styleCaroussel = function(){

	this.listWrapper.setAttribute('style', 'width:' + (this.viewportWidth * .8) * this.nbrEl + 'px');

	var _this = this;
	
	for(var i = 0; i < this.nbrEl; ++i) {
		_this.listEl[i].setAttribute('style', 'width:' + (_this.viewportWidth * .8) + 'px');
	}

	this.adUnit.getElementsByTagName('a')[0].style.height = (this.listWrapper.offsetHeight + document.getElementById('intro').offsetHeight) + 'px';
	this.insertPagination();
	this.centerAd();
}

Intersticial.prototype.launchCaroussel = function(){
	return false;
}

Intersticial.prototype.Goto = function(timerest){
	var SlidingDelay = (timerest)? timerest : 500;

	if(SlidingDelay > 1) SlidingDelay = .5;

	this.listWrapper.style.webkitTransition = 'left ease-out ' + SlidingDelay + 's';
    this.listWrapper.style.MozTransition = 'left ease-out ' + SlidingDelay + 's';
	this.listWrapper.style.left = (((this.viewportWidth * .8) * -1) * this.count) + 'px';

	SlidingDelay *= 1000;

	var endSlidingDelay = (timerest)? (timerest * 1000) + 100 : 500;
	this.autoSlide = setTimeout(this.endSliding.bind(this), endSlidingDelay);

	this.setPagination();
}

Intersticial.prototype.insertPagination = function(){
	var carousselWrapper = this.listWrapper.parentNode;

	var pagination = document.createElement('ul');

	pagination.id = 'pagination';
	pagination.style.width = 12 * this.nbrEl + 'px';

	for (var l = 0; l < this.nbrEl; ++l) {

		var li = document.createElement('li');
		if(l === 0) li.className = 'active';
		pagination.appendChild(li);
	}

	carousselWrapper.appendChild(pagination)
}

Intersticial.prototype.setPagination = function(){
	
	var li = document.getElementById('pagination').getElementsByTagName('li');

	for(var i = 0; i < li.length; ++i) {

		if(i === this.count) li[i].className = 'active';
		else li[i].className = '';

	}
}





;var Banner  = function(el, mraid){
	this.adUnit 						= el;
    this.slides                         = document.getElementsByTagName('li');
    this.slidesLength                   = this.slides.length;
	this.position 						= this.adUnit.getAttribute('data-displayposition');
	this.scrollEffect 					= this.adUnit.getAttribute('data-displayoption');
	this.type 							= 'banner';
	this.timer 							= null;
	this.top 							= 0;
	this.oldTop 						= 0;
    this.href                           = null;
    this.isMraid                        = mraid;
    
    this.launchBanner();
	this.sendConfig();
}

Banner.prototype = new Ad;

Banner.prototype.resizeBanner = function(){
    if(window.innerWidth > 480){
        this.viewportWidth = 320;
        if(this.slidesLength > 1) this.styleCaroussel();
    } else {
        this.viewportWidth = window.innerWidth;
        if(this.slidesLength > 1) this.styleCaroussel();
    }
    
    if(this.isTablet) {
        this.viewportWidth = window.innerWidth;
        if(this.slidesLength > 1) this.styleCaroussel();
    }
    
    if(this.position == 'floatingbottom'){
        this.adUnit.classList.add('bottom');
    }
}

Banner.prototype.sendConfig = function(){
    var _this = this,
        device = null,
        height = 0;
    
    this.position = this.adUnit.getAttribute('data-displayposition');
    
    if(this.isTablet == true) device = 'tablet';
    if(this.isMobile == true) device = 'phone';
    if(this.isDesktop == true) device = 'desktop';
    
    //resize viewport
    if(this.isDesktop) {
        this.viewportWidth = 320;
        height = 50;
    } else if(this.isTablet) {
        this.viewportWidth = window.innerWidth;
        this.adUnit.classList.add('ad-tablet');
        height = 120;
    } else {
        this.adUnit.classList.add('ad-fluid');
        height = 50;
    };

	this.config = {
		'type':'banner',
		'position' : this.position,
		'scrollEffect' : this.scrollEffect,
        'height' : height,
        'device' : device
	}

	window.addEventListener("message", function(e){
        _this.getRequest(e, function(){
            if(_this.isDesktop){
                this.viewportWidth = 320;
            }
        });
    }, false);
}

Banner.prototype.launchBanner = function(){
    
    this.href = document.getElementsByTagName('a')[0].getAttribute('href');
    var _this = this;
    
    var thisLink = document.getElementsByTagName('a');
    
    for(var l = 0; l < thisLink.length; ++l){
        thisLink[l].addEventListener('click', function(e){
            if(_this.isMraid == true){
                e.preventDefault();
                mraid.open(this.getAttribute('href'));
            }
        });
    }
    
	if(this.slidesLength > 1) this.setCaroussel();
    else this.adUnit.classList.add('oneAndOnly');
    
    this.resizeBanner();
    
    window.addEventListener('resize', function(){
        _this.resizeBanner();
    })
    
    
};var Mobsearch = function(el, isMraid){
	this.adUnit 				= el;
    this.isMraid                = isMraid;
    this.config                 = null;
    this.unit                   = 0;
    
    this.configure();
    if(this.isMraid != true) this.sendConfig();
    
    var _this = this;
    
	this.resizeMobsearch();
};

Mobsearch.prototype = new Ad;

Mobsearch.prototype.configure = function(){
    this.redirect();
    
    this.unit = this.viewportWidth;
    if(this.unit == 0) this.unit = window.innerWidth;
}

Mobsearch.prototype.resizeMobsearch = function(){     
    var poster = document.getElementsByClassName('bkgd-border')[0],
        _this = this;
    
        if(this.isDesktop){
            this.unit = 320
        }
        _this.adUnit.style.width = _this.unit + 'px';
        document.getElementById('grid4x1').style.width = _this.unit + 'px';
        document.getElementById('grid4x1').style.height = _this.unit * .25 + 'px';
        this.config = {
            'type':'mobsearch',
            'height' : _this.unit * .25,
            'width' : _this.unit
        }
}

Mobsearch.prototype.sendConfig = function(){
    var _this = this;
    
    window.addEventListener("message", function(e){
        _this.getRequest(e);
    }, false);
};var isMraid = false,
    screenSize;

var launchAd = function(){
    var ads 		= document.querySelectorAll('.mobAd'),
        adsLenght 	= ads.length,
        type        = null;
    
    if(screenSize === undefined) {
        screenSize = {
            'width' : 320,
            'height' : 540
        }
    }

    for(var i = 0; i < adsLenght; i++) {
        var adType = ads[i].className;

        if(adType.match('banner')) {new Banner(ads[i], isMraid)};
        if(adType.match('interstitial')) {new Intersticial(ads[i], isMraid, screenSize)};
        if(adType.match('mobwall')) {new Mobwall(ads[i], isMraid)};
        if(adType.match('mobwidget')) {new Mobwidget(ads[i], isMraid)};
        if(adType.match('mobstream')) {new Mobstream(ads[i], isMraid)};
        if(adType.match('mobsearch')) {new Mobsearch(ads[i], isMraid)};
        if(adType.match('overlay')) {new Overlay(ads[i], isMraid)};
    }
}

var launchMraidAd = function(){
    isMraid = true;
        
    launchAd();
}

document.addEventListener('DOMContentLoaded', function(){
    document.removeEventListener( "DOMContentLoaded", arguments.callee, false);

    if (typeof mraid !== 'undefined') { 
        if (mraid.getState() === 'loading') { 
            mraid.addEventListener('ready', launchMraidAd); 
        } else if (mraid.getState() === 'default') { 
            launchMraidAd(); 
        } 
    } else {
        launchAd();
    }    
});