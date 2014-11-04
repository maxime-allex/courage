    var resizeSection = function() {

        var sections = document.getElementsByTagName('section')

        for(var i = 0; i < sections.length; i++) {
            sections[i].setAttribute('style', 'height:' + wH + 'px')
        }

    }

    var changeBackground = function(target) {
            
        var image = new Image();

        image.src = assetUri + 'background/' + target.getAttribute('data-bkgd');

        image.onload = function() {
            
            backImageNaturalWidth = image.naturalWidth
            backImageNaturalHeight = image.naturalHeight
            

            document.getElementById('bkgd').getElementsByTagName('img')[0].setAttribute('src', assetUri + 'background/' + target.getAttribute('data-bkgd'));

            resizeBackground()
        }
    } 

    var resizeBackground = function() {

        var bkgd = document.getElementById('bkgd')
        ,   imgBkgd = bkgd.getElementsByTagName('img')[0]
        ,   backImageNaturalRatio = parseFloat(backImageNaturalWidth / backImageNaturalHeight)
        ,   left = ($(window).width() - (wH * backImageNaturalRatio)) / 2

        //resize Background
        bkgd.setAttribute('style','height:' + wH + 'px')
        imgBkgd.setAttribute('style', 'margin-left:' + left + 'px')
    }

    $(function() {
        $('nav a').off('click').on('click', function(e){

            e.preventDefault();

            var tarIndex = $(this).index();

            nav(tarIndex);
        });

        $(window).off('mousewheel').on('mousewheel', function(e){

            e.preventDefault()

            if(isScrolling) {
                return false
            } else {
                isScrolling = true

                var delta = e.originalEvent.detail < 0 || e.originalEvent.wheelDelta > 0 ? 1 : -1
                ,   thisIndex = $('section.active').index()
                ,   nextIndex = delta < 1? thisIndex + 1 : thisIndex - 1

                if(nextIndex >= document.getElementsByTagName('section').length) {
                    nextIndex = 0
                }
                if(nextIndex < 0) {
                    nextIndex = document.getElementsByTagName('section').length - 1
                }
                
                nav(nextIndex);
            }

        })

        resizeSection()
        changeBackground(document.getElementById('about'))

        $('#bkgd').delay(1000).removeClass('intro')

        work()

    })

    $(window).on('resize', function() {
        wH = $(this).height()

        resizeBackground();

        resizeSection();

    })