var nav = function(targetIndex)
{
    var updateNav = function(){

        $('nav a').removeClass('active')

        document.getElementsByTagName('nav')[0].getElementsByTagName('a')[targetIndex].className += " active";
    }

    var sectionTarget = document.getElementsByTagName('section')[targetIndex]

    if(sectionTarget.getAttribute('id') == 'about' || $('section.active').attr('id') == 'about') {
        $('header').addClass('morphing')
    }

    $('section.active').removeClass('active')
    sectionTarget.className += " active"

    if($(sectionTarget).attr('id') === 'contact')
    {
        if(isNictate) nictation.play();
        else contact();


    }
    else {
        if(nictation) nictation.reset();
    }
    
    if(sectionTarget.getAttribute('data-bkgd')) changeBackground(sectionTarget);

    scroll(targetIndex)

    updateNav()
}

var scroll = function(_index){

    var changeNav = function(){
        setTimeout(function(){isScrolling = false}, 1000)

        if($('section.active').attr('id') != 'about') {

            $('header').delay(500).removeClass('morphing').removeClass('landing').unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd").bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function(){
                $('body').hide(0,function(){$('body').show(0)})
            });
        }
        else {
            $('header').delay(500).removeClass('morphing').addClass('landing').unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd").bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function(){
                $('body').hide(0,function(){$('body').show(0)})
            });
        }
    }

    var scrollAmount = ((wH * _index) * -1) - $('main').position().top;

    move('main')
        .add('top', scrollAmount)
        .end(changeNav);

}