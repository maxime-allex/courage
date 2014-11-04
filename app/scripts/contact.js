var nictationImage = assetUri + "background/back_3.jpg"
,   freezeImage = assetUri + "background/back_4.jpg"
,   baseImage = assetUri + "background/back_2.jpg"




function Nictation ($contener, nictationImage, baseImage, variation) {

    this.$contener = $contener;
    this.src = nictationImage;
    this.originalSrc = baseImage;
    this.variation = variation;
    this.timer = null;
    this.processNictate = null;

    this.timer = this.processTimer();
    this.nictate()
}

// TEST CURLY BRACE MISSING !!!
Nictation.prototype.processTimer = function()
    var timer = Math.floor((Math.random()*this.variation)+75);

    return timer
};

Nictation.prototype.nictate = function(){

    var _this = this;

    this.timer = _this.processTimer();
    
    this.$contener.attr('src', _this.src)

    setTimeout($.proxy(_this.reBase, _this), 100)

    this.processNictate = setTimeout($.proxy(_this.nictate, _this), _this.variation - _this.timer);
};

Nictation.prototype.play = function(){
    var _this = this;
    this.processNictate = setTimeout($.proxy(_this.nictate, _this), _this.variation - _this.timer);
};

Nictation.prototype.reset = function() {
    console.log('reset')
    clearTimeout(this.processNictate);
};

Nictation.prototype.reBase = function() {

    this.$contener.attr('src', this.originalSrc)
}

var contact = function() {    

    nictation = new Nictation($('#bkgd img'), nictationImage, baseImage,  5000);

    isNictate = true;
}