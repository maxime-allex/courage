var templates = {
    nav : '{{#projects}}<li><a href="#" data-tech="{{tech}}">{{title}}</a></li>{{/projects}}',

    box : '{{#projects}}\
           <div class="project" id="{{title}}">\
            <a href="{{link}}" target="_blank">Voir le site</a>\
            <h3>Année : {{year}}</h3>\
            <h4>Client : {{client}}</h4>\
            <p>\
              {{description}}\
            </p>\
            <div class="capture">\
              {{#images}}\
              <div class="{{mockup}}" style="background:url({{src}}) no-repeat">\
                <img src="assets/images/mockups/{{mockup}}.png"/>\
              </div>\
              {{/images}}\
            </div>\
          </div>\
          {{/projects}}',
}

var work = function() {

    var work

    var setNavProjects = function(){
        
        var output = Mustache.render(templates.nav, work);

        $('#work ul.items').html(output);

        $('ul.items a').each(function(index) {
            $(this).attr('data-slide', index);
        })

        $('ul.items a:eq(0)').addClass('active');

    }

    var setBoxProjects = function(){

        var output = Mustache.render(templates.box, work)

        $('#work .right').html(output);

        for (var i = 0; i < work.projects.length; i++) {
            
            if(work.projects[i].link == null) {
                $('.project:eq(' + i + ') a').remove();
            }
        }

        $('.project .capture div').each(function() {
            switch($(this)[0].className) {
                case "mobile" :
                    $(this).css({'background-size':'197px'});
                break;

                default :
                    $(this).css({'background-size':'334px'});
                break;
            }
        })

        $('.project p').each(function(){
            $(this).html($(this).html().replace(/\n/g, '<br/>'))
        })

        $('.project:eq(0)').addClass('active');

    }

    var filter = function(e) {
        $(this).addClass('active');
        var filter = $(this).attr("data-filter")

        $('ul.items li a').each(function() {

            var filters = $(this).attr("data-tech").split(',')

            for (var i = 0; i < filters.length; i++) {

                if(filters[i] == filter) {
                    $(this).removeClass('inactive')
                    break;
                } else {
                    $(this).addClass('inactive');
                }
            }

        })

    }

    var undoFilter = function() {
        $(this).removeClass('active');
        $('ul.items li a').removeClass('inactive');
    }

    var bind = function() {
        $('ul.items').on('click', 'a', function(e){
            e.preventDefault();

            var index = $(this).attr('data-slide');

            $('.project, ul.items a').removeClass('active');

            $(this).addClass('active');
            $('.project:eq(' + index + ')').addClass('active');
        });

        $('.filters li span').on('mouseover', filter).on('mouseleave', undoFilter)
    }

    $.ajax({
        url : 'assets/json/content.json',
        success : function(data){

            work = data

            setNavProjects()

            setBoxProjects()

        }
    })

    bind()


}