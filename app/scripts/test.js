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