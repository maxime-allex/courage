var Trie = function(objKeywords){
    this.T = null;
    this.dictionary = objKeywords;
    
    console.log(this.dictionary);
    
    this.limit = 0;
    this.results = [];
    this.isFirst = false;
    
    this.T = new this.Node();
    
    var _this = this;

    for (var word in this.dictionary) {
        _this.insertWord(_this.T, word);
    }    
}

Trie.prototype.Node = function(){
    this.word = null;
    this.children = {};
    this.campaign = null;
}

Trie.prototype.insertWord = function (node, word) {
    var _this = this;
    
    for (var i = 0, len = word.length; i < len; i++) {
        var letter = word[i];

        if (!node.children[letter]) {
            node.children[letter] = new _this.Node();
        }

        node = node.children[letter];
    }

    node.word = word;
    node.campaign = this.dictionary[word];
}

Trie.prototype.range = function(start, end){
    var arrRange = [];

    if (typeof end === 'undefined') {
        end   = start;
        start = 0; 
    }

    for (var i = start; i < end; i++) {
        arrRange.push(i);
    }

    return arrRange;
}

Trie.prototype.getAllWords = function(node, letter){
    var _this = this,
        child,
        k;
    
    if(node.word != null){ 
        this.results.push({'nodeWord':node.word, 'nodeCampaign':node.campaign, nodeLimit:this.limit});
    }
    
    for(k in node.children){
        child = node.children[k];
        this.getAllWords(child, k);
    }
    
    return this.results;
}

Trie.prototype.autoComplete = function(str, pos, thisTrieOccurence){
    this.isFirst = false;
    
    var _this = this,
        results = undefined;
    
    this.results = [];
            
    if(pos == undefined){
        pos = 0;
    }
        
    if(thisTrieOccurence == undefined){
        thisTrieOccurence = this.T;
    }

    if(pos < str.length - 1){
        return _this.autoComplete(str,pos + 1, thisTrieOccurence.children[str[pos]]);
    } else {
        if(thisTrieOccurence.children[str[pos]].word == str){
            var lonelyResult = {'nodeWord':thisTrieOccurence.children[str[pos]].word, 'nodeCampaign':thisTrieOccurence.children[str[pos]].campaign, nodeLimit:this.limit};
            return lonelyResult;
        } else {
            return _this.getAllWords(thisTrieOccurence.children[str[pos]], str[pos]);      
        }
    }    
}

Trie.prototype.searchWord = function (word) {
    var currentRow = this.range(word.length + 1),
        results    = [],
        _this      = this;

    for (var letter in this.T.children) {
        _this.searchWordRecursive(_this.T.children[letter], letter, word, currentRow, results);
    }
    
    var result = results[0];
    
    return result;
}

Trie.prototype.searchWordRecursive = function(node, letter, word, previousRow, results, campaigns){
    var columns    = word.length + 1,
        currentRow = [previousRow[0] + 1],
        xrange     = this.range(1, columns),
        _this      = this;

    for (var i = 0, len = xrange.length; i < len; i++) {
        var column = xrange[i];

        var insertCost  = currentRow[column - 1] + 1,
            deleteCost  = previousRow[column] + 1;
            replaceCost = (word[column - 1] !== letter) ? previousRow[column - 1] + 1 : previousRow[column - 1];

        currentRow.push(Math.min(insertCost, deleteCost, replaceCost));
    }

    if (currentRow[currentRow.length - 1] <= this.limit && node.word) {
        results.push({'nodeWord':node.word, 'nodeCampaign':node.campaign, nodeLimit:this.limit});
    }

    if (Math.min.apply(Math, currentRow) <= this.limit) {
        for (var letter in node.children) {
            _this.searchWordRecursive(node.children[letter], letter, word, currentRow, results, campaigns);
        }
    }
}

var adSearch = function(url, id, poolId, that){
    this.url        = url;
    this.inputId    = id;
    this.input      = document.getElementById(this.inputId);
    this.isFocused  = false;
    this.maintrie   = null;
    this.trie       = null;
    this.data       = null;
    this.campaigns  = {};
    this.poolId     = poolId;
    this.container   = document.getElementById('mobpartner_mobsearch_' + this.poolId);
    this.adunit     = that;
    this.timer      = null;
    this.maskWrapper = null;
    this.currentCampaign = null;
    this.previewCampaignList = {};
    this.occurence = 0;
    this.limit = 0;
    this.keyword = null;
    this.keywords = null;
    this.results = [];
    this.currentResult = null;
    this.wordLimit = 4;
    this.maxLimit = 2;
    this.numberKeywords = null;
    this.choosenCampaign = null;
    this.choosenCampaignID = null;
    this.bestRank = 0;
    this.choosenCampaignLimit = null;
    this.isVisible = false;
    this.matchByWordArray = [];
    this.countNumber = 0;
    this.isWordLength  = 0;
    this.finalResults = null;
    this.choosenCampaignOccurence = 0;
    this.lastPrint = {};
    this.beforeResult = null;
    this.beforeResultOtherWord = null;
    
    this.input.addEventListener('click', this.checkFlag.bind(this));
};

adSearch.prototype.createMask = function(width, height){
    
    this.container.style.position = 'relative';
    this.container.style.height = height + 'px';
    
    this.maskWrapper = document.createElement('div');
    this.maskWrapper.id = 'mobpartnerMask';
    this.maskWrapper.style.width = width - 20 + 'px';
    this.maskWrapper.style.height = height - 20 + 'px';
    this.maskWrapper.style.margin = '10px';
    this.maskWrapper.style.top = '0';
    this.maskWrapper.style.opacity = '0';
    this.maskWrapper.style.position = 'absolute';
    this.maskWrapper.style.background = '#f5f5f5';
    this.maskWrapper.style.border = '1px solid #E3E3E3';
    this.maskWrapper.style.borderRadius = '4px';
    this.maskWrapper.style.overflow = 'hidden';
    this.maskWrapper.style.display = 'none';
    
    var animationLayer = document.createElement('div');
    animationLayer.style.position = 'absolute';
    animationLayer.style.width = '100%';
    animationLayer.style.height = '100%';
    
    animationLayer.style.background = 'url(http://api.mobpartner.mobi/assets/img/matching.gif) repeat-x';
    
    var labelLayer = document.createElement('div');
    labelLayer.style.position = 'absolute';
    labelLayer.style.zIndex = '1';
    labelLayer.style.textAlign = 'center';
    labelLayer.style.width = '42%';
    labelLayer.style.top = '40%';
    if(window.innerWidth >= 768){
        labelLayer.style.fontSize = '35px';
        if(window.innerWidth > 1024){
            labelLayer.style.fontSize = '14px';
        }
    } else {
        labelLayer.style.fontSize = '15px';
    }
    labelLayer.style.color = '#999999';
    labelLayer.style.left = '29%';
    labelLayer.style.fontFamily = 'helvetica, arial, sans-serif';
    labelLayer.style.fontWeight = 'bold';
    
    var picto = document.createElement('i');
    picto.style.float = 'left';
    picto.style.marginTop = '-1px';
    picto.style.marginRight = '5px';
    picto.style.background = 'url(http://api.mobpartner.mobi/assets/img/gears.png) no-repeat';
    if(window.innerWidth >= 768){
        picto.style.width = '50px';
        picto.style.height = '50px';
        if(window.innerWidth > 1024){
            picto.style.width = '20px';
            picto.style.height = '20px';
            picto.style.backgroundSize = '100%';
        }
    } else {
        picto.style.width = '20px';
        picto.style.height = '20px';
    }
    picto.style.backgroundSize = '100%';
    
    var text = document.createElement('span');
    text.innerHTML = 'App matching';
    
    labelLayer.appendChild(picto);
    labelLayer.appendChild(text);
    
    this.maskWrapper.appendChild(animationLayer);
    this.maskWrapper.appendChild(labelLayer);
    this.container.appendChild(this.maskWrapper);
    
}

adSearch.prototype.showMask = function(){
    this.maskWrapper.style.display = 'block';
    this.maskWrapper.style.opacity = '1';
    this.isVisible = true;
}

adSearch.prototype.hideMask = function(){
    this.isVisible = false;
    this.maskWrapper.style.opacity = '0';
    this.maskWrapper.style.display = 'none';
}

adSearch.prototype.checkFlag = function(){
    if(!this.input.className.match(/mobsearch_is_focused/)){
        this.input.classList.add('mobsearch_is_focused');
        this.makeRequest();
    }
}

adSearch.prototype.makeRequest = function(){
    var _this = this,
        xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 ) {
            if(xmlhttp.status == 200){
                _this.createData(xmlhttp.responseText);
                _this.listenSearch();
            }
        }
    }

    xmlhttp.open("GET", this.url, true);
    xmlhttp.send();
};

adSearch.prototype.listenSearch = function(){
    var _this = this;

    this.input.addEventListener('keyup', function(e){
        _this.finalResults = {};
        _this.isWordLength = 0;
        var testValue = this.value.toLowerCase();
        var keywords = testValue.split(/[ ,]+/);
        _this.trie.results = [];
        _this.countNumber = 0;
                
        _this.finalResults = [];
        _this.numberKeywords = keywords.length;
        
        for (var w = 0; w < keywords.length; ++w){
            _this.results = [];
            _this.isWordLength ++;
            _this.countNumber ++;
            
            if(keywords[w].length >= 3){    
                var thisresult = _this.trie.autoComplete(keywords[w]);
                if(thisresult.length > 0){
                    _this.processResult(thisresult);
                } else {
                    var keywords = _this.input.value.split(/[ ,]+/);

                    for(var i = 0; i < keywords.length; ++i){
                        _this.search(keywords[w]);
                    }
                }
            }
        }
    });
};

adSearch.prototype.search = function(keyword){
    var _this = this,
        result = [];
        
    if(keyword != ''){
        var thisSearch = _this.processSearch(keyword);
        if(typeof thisSearch != 'boolean'){
            result.push(thisSearch);
        } else {
            this.numberKeywords -= 1;
        }
    }

    if(_this.numberKeywords == this.numberKeywords){
        this.processResult(result);
    };
    
}

adSearch.prototype.processSearch = function(keyword){
    var list = this.trie.searchWord(keyword);

    if(list != undefined){
        this.trie.limit = 0;
        this.limit = 0;
        return list;
    } else if(this.trie.limit == this.maxLimit){
        return false;
    } else {
        if(keyword.length >= this.wordLimit){
            this.limit += 1;
            if(this.limit > this.maxLimit){
                this.limit = this.maxLimit;
            }
            
            if(this.trie.limit < this.maxLimit + 1){
                this.trie.limit = this.limit;
                return this.processSearch(keyword);
            } else {
                return false;
            }
        } else {
            return false;
        }
    }
}

adSearch.prototype.processResult = function(result){

    var _this = this;
    var newCampaingList = [];
    var results;
    if(result.length > 1){
        results = this.createNewCampaignArray(result);       
    } else {
        for(var g = 0; g < result.length; ++g){
            var campaignArray = result[g].nodeCampaign;

            if(!_this.finalResults.rank){
                _this.findByBestRank(campaignArray);
            } else {
                _this.findByBestMatchingCampaign(campaignArray, _this.finalResults.ID);   
            }
        }
    }
        
    
};

adSearch.prototype.createNewCampaignArray = function(result){
    
    var campaignArray = [];
    var _this = this;
    
    for(var g = 0; g < result.length; ++g){        
        for(var i = 0; i < result[g].nodeCampaign.length; ++i){
            campaignArray.push(result[g].nodeCampaign[i]);    
        }
    }
        
    this.searchBestCampaign(campaignArray);
}

adSearch.prototype.searchBestCampaign = function(campaignArray){
    var _this = this;
    
    if(!this.finalResults.rank){
        this.findByBestRank(campaignArray);
    } else {
        this.findByBestMatchingCampaign(campaignArray, this.finalResults.ID);   
    }
}

adSearch.prototype.findByBestRank = function(campaignArray){
    
    var _this = this;
    var thisBestCampaign = null;
    
    for(var i = 0; i < campaignArray.length; ++i){
        if(thisBestCampaign == null){
            thisBestCampaign = i;
        } else {
            if(_this.campaigns[campaignArray[i]].rank < _this.campaigns[campaignArray[thisBestCampaign]].rank) {
                thisBestCampaign = i;  
            }
        }
    }
    
    if(thisBestCampaign != null){
        this.finalResults = {
            'ID' : campaignArray[thisBestCampaign],
            'occurence' : this.countNumber,
            'rank' : this.campaigns[campaignArray[thisBestCampaign]].rank,
            'url' : this.campaigns[campaignArray[thisBestCampaign]].url
        };

        if(this.beforeResult != this.finalResults.ID){
            this.showAd(this.finalResults.url);
        }

        this.beforeResult = this.finalResults.ID;
    }
        
}

adSearch.prototype.findByBestMatchingCampaign = function(campaignArray, lastCampaignID){
    var _this = this;
    var thisBestCampaign = null;
        
    for(var i = 0; i < campaignArray.length; ++i) {
        if(campaignArray[i] != lastCampaignID){
            if(thisBestCampaign == null){
                thisBestCampaign = i;
            } else {
                if(_this.campaigns[campaignArray[i]].rank < _this.campaigns[campaignArray[thisBestCampaign]].rank) {
                    thisBestCampaign = i;  
                }
            }
        }
    }
    
    if(thisBestCampaign != null){
        this.finalResults = {
            'ID' : campaignArray[thisBestCampaign],
            'occurence' : this.countNumber,
            'rank' : this.campaigns[campaignArray[thisBestCampaign]].rank,
            'url' : this.campaigns[campaignArray[thisBestCampaign]].url
        };

        if(this.beforeResultOtherWord != this.finalResults.ID){
            this.showAd(this.finalResults.url);
        }

        this.beforeResultOtherWord = this.finalResults.ID;
    }
    
}

adSearch.prototype.showAd = function(campaign){
    var _this = this;
    if(document.getElementById('mobpartnerMask')){
        this.showMask();
    }
    
    setTimeout(function(){
        _this.adunit.insertMobSearch(campaign);
    }, 500);

}

adSearch.prototype.createData = function(data){
    var dataObject = JSON.parse(data),
        _this = this;
    
    this.data = dataObject.promotion;
    this.createCampaignArray(dataObject.promotion);    
    this.trie = new Trie(dataObject.keywords);
}

adSearch.prototype.createCampaignArray = function(data){
    var _this = this;
    for (var c = 0; c < data.length; ++c){
        _this.campaigns[data[c].campaign.id] = {
            'url' : data[c].mobsearch,
            'rank' : c + 1,
            'id' : data[c].campaign.id,
            'name' : data[c].campaign.name
        };
        if(c === 0){
            _this.currentCampaign = data[c].campaign.id;
            _this.showAd(data[c].mobsearch); 
        }
    }
}