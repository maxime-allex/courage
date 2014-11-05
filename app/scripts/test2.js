var core = {
    _locale: '',
    _platform: '',
    _header: [],
    _footer: [],
    flagHome: false,
    intersticiel: true,
    ie: false,
    oldIe : false,
    ie7 : false,
    mobile: false,
    android : false,
    ipad: false,
    overlay: $('#overlay'),
    dir: null,
    loc: [],
    h : 0,
    IsFunction: function(a) {
        return typeof(a) == "function";
    },
    isVideo : false,
    isSlideshow : false,

    Init: function() {
        $(".DS_addict_plusPopin").unbind('click').bind('click', core.popinFoot.open );
        core.accordionFoot.init();

        core.h = $('body').height();

        core.lang = {
            'fr_BE': 'fr',
            'nl_BE': 'nl',
            'de_DE': 'de',
            'es_ES': 'es',
            'fr_FR': 'fr',
            'it_IT': 'it',
            'ru_RU': 'ru',
            'en_UK': 'en',
            'pt_BR': 'pt',
            'en_US': 'en',
            'zh_CN': 'zh',
            'zh_HK': 'zh',
            'en_HK': 'en',
            'ja_JP': 'ja',
            'ko_KR': 'ko',
            'zh_TW': 'zh',
            'en': 'en'
        };
        core.market = {
            'fr_BE': 'bel',
            'nl_BE': 'bel',
            'de_DE': 'deu',
            'es_ES': 'esp',
            'fr_FR': 'fra',
            'it_IT': 'ita',
            'ru_RU': 'rus',
            'en_UK': 'gbr',
            'pt_BR': 'bra',
            'en_US': 'usa',
            'zh_CN': 'chn',
            'zh_HK': 'hkg',
            'en_HK': 'hkg',
            'ja_JP': 'jpn',
            'ko_KR': 'kor',
            'zh_TW': 'twn',
            'en': 'int'
        };
        core.loc = {
            'fr_BE': 'bel/fr',
            'nl_BE': 'bel/nl',
            'de_DE': 'deu/de',
            'es_ES': 'esp/es',
            'fr_FR': 'fra/fr',
            'it_IT': 'ita/it',
            'ru_RU': 'rus/ru',
            'en_UK': 'gbr/en',
            'pt_BR': 'bra/pt',
            'en_US': 'usa/en',
            'zh_CN': 'chn/zh',
            'zh_HK': 'hkg/zh',
            'en_HK': 'hkg/en',
            'ja_JP': 'jpn/ja',
            'ko_KR': 'kor/ko',
            'zh_TW': 'twn/zh',
            'en': 'int/en'
        };

        //ie6 blocker
        if ( $.browser.version === '6.0' ) {

            $('body').addClass('ieFix').prepend('<div class="wrapMsg"><div class="msg"><strong>La version de votre navigateur est trop ancienne.</strong><p>Pour une meilleure expérience, nous vous recommandons de télécharger une version plus récente de votre navigateur.</p><a href="http://www.google.fr/intl/fr/chrome/browser/">Télécharger</a></div></div>');

        }

        core.loadLocale();

        if (navigator.userAgent.match(/(android|iphone|ipad|blackberry|symbian|symbianos|symbos|netfront|model-orange|javaplatform|iemobile|windows phone|samsung|htc|opera mobile|opera mobi|opera mini|presto|huawei|blazer|bolt|doris|fennec|gobrowser|iris|maemo browser|mib|cldc|minimo|semc-browser|skyfire|teashark|teleca|uzard|uzardweb|meego|nokia|bb10|playbook)/gi)) {
            if ( ((screen.width  >= 800) && (screen.height >= 480)) || navigator.userAgent.match(/ipad/gi) ) {
                core.ipad = true;
                $('body').addClass('ipad');
            } else {
                core.mobile = true;
                if (navigator.userAgent.match(/(android)/gi)) {
                    core.android = true;
                }
            }
        }

        if (navigator.userAgent.match(/(blackberry|bb10|playbook)/gi)) $('body').addClass('bb');

        if ($.browser.msie) core.ie = true;

        if ($.browser.msie && $.browser.version <= 8) core.oldIe = true;

        if ($.browser.msie && $.browser.version <= 7) core.ie7 = true;

        if (core.mobile === false)
        {
            core.createLayout();

            if (core.ie === false)
            {
                var cl = new CanvasLoader('canvasloader-container');
                cl.setColor('#7d7d7d'); // default is '#000000'
                cl.setShape('spiral'); // default is 'oval'
                cl.show();
            }

            core.hash();
            core.resize();
            core.ajaxify();

            $('#content.minisite a').on('click', function()
            {
                hasher.changed.active = false;
            });

            if (modules) modules.header.init();
        }
        else
        {
            var splitHref = window.location.href.split('/');
            if(splitHref[5] == '') splitHref[5] = 'homepage';
            var href ='';

            for (var h = 5; h < splitHref.length; ++h) {
                if(h == splitHref.length - 1) href += splitHref[h];
                else href += splitHref[h] + '/';
            }

            core.pushTrack(href);

            // add class for android device
            if (/Android/i.test(navigator.userAgent))
            {
                $('body').addClass('androidUa');
            }

            // create return button on header
            $('#header div a').click(function(e)
            {
                e.preventDefault();

                var route = Routing.generate('diorBackstageFrontBundle_index_home', {
                    '_locale': core._locale,
                    '_platform': core._platform
                });
                document.location.href = route;
            });

            // rearrange popin
            if ($('#popin').length > 0)
            {
                var cover = $('.popin-cover');

                cover.remove();

                $('.nav-popin').after(cover);
            };

            // add typo function
            if ($('#popin').length > 0 || $('.look-cover').length > 0)
            {

                var tmp = '<div class="typo border"><a href="#" class="less no-redir">normal</a><a href="#" class=" no-redir more">big</a></div>';

                $('.tag').before(tmp);

                $('.typo a').click(function(e) {

                    e.preventDefault();

                    if($(this).hasClass('big'))
                    {
                        $('.typo a.less').removeClass('big').addClass('lil');
                        $('.typo a.more').removeClass('big').addClass('lil');
                        $('p').css({
                            'font-size': '12px'
                        });
                    }
                    else
                    {
                        $('.typo a.less').removeClass('lil').addClass('big');
                        $('.typo a.more').removeClass('lil').addClass('big');
                        $('p').css({
                            'font-size': '14px'
                        });
                    }
                });
            }

            // launch FX
            if($('#content').length > 0)
            {
                var controller = $('#content').attr('data-controller');
                core.fire(controller);
            }
            if($('#popin').length > 0)
            {
                core.popin.launchFx();
            }

        };

        //FB.init({appId: "205785986155879", status: true, cookie: true});
    },

    getParameters : function()
    {
        var searchString = window.location.href.split('?'),
            params = searchString[1].split("&"),
            hashParam = {};

        if (!searchString || searchString === '') return {};

        for (var i = 0; i < params.length; i++) {
            var val = params[i].split("=");
            hashParam[unescape(val[0])] = unescape(val[1]);
        }

        return hashParam.anchor;
    },

    ajaxify: function()
    {
        $('a').each(function(i, item)
        {
            var href = $(this).attr('href');

            if (typeof(href) !== 'undefined')
            {
                var href = $(this).attr('href'),
                    dataAjax = $(this).attr('data-ajax');
            };
            if (typeof(href) !== 'undefined' && dataAjax != 'false')
            {
                var splitedHref = href.split('/'),
                    newUri = '';

                if (splitedHref[0] !== 'http:' && splitedHref[0] !== 'https:')
                {
                    for (var i = 0; i <= splitedHref.length; ++i)
                    {
                        var tmp = "/" + splitedHref[i];

                        if (i == 0) tmp = splitedHref[i];
                        if (i == 3) tmp = '/#/' + splitedHref[i];
                        if (splitedHref[i] === '#') tmp = "/" + splitedHref[i];
                        if (typeof(splitedHref[i]) != 'undefined')
                        {
                            newUri += tmp;
                        }
                    };
                    $(this).attr('href', newUri);
                }

                if(core.ie7)
                {
                    var sectionHref = splitedHref[5];

                    if(sectionHref == 'article' || sectionHref == 'look'|| sectionHref == 'search')
                    {
                        for (var i = 0; i <= splitedHref.length; ++i)
                        {
                            var tmp = "/" + splitedHref[i];

                            if (i == 0) tmp = splitedHref[i];
                            if (i == 5) tmp = '/#/' + splitedHref[i];
                            if (splitedHref[i] === '#') tmp = "/" + splitedHref[i];
                            if (typeof(splitedHref[i]) != 'undefined')
                            {
                                newUri += tmp;
                            }
                        };
                        $(this).attr('href', newUri).data('ie7Ajax', true);
                    }
                }
            }
        });
    },

    resize: function()
    {
        $(window).resize(function()
        {

            var _wW = $(window).width();
            var _W = core.loader.wrapper.width();
            var _H = core.loader.wrapper.height();
            var _css = {
                'border-left-width': _W + 1,
                'border-top-width': _H + 2
            };

            $('#topbar').css({
                'width': _wW
            });

            //placement des éléments de navigation
            var navMag = $('#nav-mag'),
                navSearch = $('#nav-search'),
                windowH = $(window).height(),
                navMagH = navMag.height(),
                navSearchH = navSearch.height(),
                loader = $('#loader div'),
                marTop = 0;

            if(core.ie == true) marTop = ((windowH - 40) / 2) + 120;
            else marTop = ((windowH - 40) / 4);

            loader.css({'margin-top': marTop});

            navMag.css({
                'top': (windowH - navMagH) / 2
            });
            navSearch.css({
                'top': (windowH - navSearchH) / 2
            });
        }).trigger('resize')
    },

    popinFoot: {

        content: null,

        open: function( e ){
            e.preventDefault();


            var id      				= $(this).attr('href');
            core.popinFoot.content = $(id).clone();

            $('body').css('overflow' , 'hidden' );
            $('.m_addict_popin .m_popin-content').prepend( core.popinFoot.content ).find('.m_popWrap').removeAttr('style');
            $('.DS_addict_overlay').fadeIn(500).find('.m_addict_popin').delay(500).fadeIn(500).parents('body').find('#content').css('left' , '-200%' );

            $('.m_nav-popin a.m_closePopin').unbind('click').bind('click', core.popinFoot.close );
        },

        close: function(e){
            e.preventDefault();
            $('#content').removeAttr('style');
            $('.DS_addict_overlay').fadeOut(1000)
                .find('#m_popin .m_popin-content').delay(500).empty();
            $('body').css('overflow' , 'scroll' );
            $(".m_addict_popin .m_popin-content , .m_addict_popin").removeAttr('style');
        }

    },

    accordionFoot: {

        init: function() {
            $('[data-role=accordion]').find('.trigger').live("click", function() {
                core.accordionFoot.run( $(this) );
            });

        },

        run: function( $this ) {

            if( $this.hasClass('on') ) {
                $this.removeClass('on').parent().find('.target').slideUp('slow');
            } else {
                $('[data-role=accordion]').find('.trigger').removeClass('on').next('.target').slideUp('slow');
                $this.addClass('on').parent().find('.target').slideDown('slow');
            }
        }
    },

    hash: function()
    {
        function handleChanges(newHash, oldHash)
        {
            //console.log('[core] handleChanges', newHash, oldHash);
            //console.log('[core] handleChanges', core.firstHash );

            // if first access to the site, and no hash : track homepage and manage all cases : /, /#, /#/
            if (oldHash===undefined && newHash==='') {
                //console.log('- first time: HOME without #', oldHash);
                core.pushTrack(newHash);
                core.managePage.page.build( document.getElementsByTagName('html')[0].innerHTML, oldHash );
                return;
            } else {
                //console.log('- navigation');
                core.pushTrack(newHash);
                core.managePage.init(newHash, oldHash);
            }
        };

        var locationHref = window.location.href;
        //console.log('[core] location = ', locationHref);

        if(!locationHref.match(/minisite|dioraddict-fluidstick/)) {
            // listen to url changes
            hasher.changed.add(handleChanges);

            // init hasher to have the first track (no more track on html base.html.twig)
            // see handleChange
            hasher.initialized.add(handleChanges);
            hasher.init();
        } else {
            hasher.changed.active = false;
        }

    },

    pushTrack : function(href)
    {
        var location = document.location.href;

        var splitLocation = location.split('/');
        var loc = splitLocation[4];

        if(core.mobile == true)
        {
            if(splitLocation[5] == 'special')
            {
                var special = '';
                var anchor = '';
                var search = document.location.search.split('=');

                if(search == '')
                {
                    anchor = 'homepage';
                    special = splitLocation[7];

                    href = special + '/' + anchor;
                }
                if(search[0]==="?anchor")
                {
                    anchor = search[1];

                    var splitSpecial = splitLocation[7].split('?');
                    special = splitSpecial[0];

                    href = special + '/' + anchor;
                }
                else
                {
                    anchor = 'homepage';

                    var splitSpecial = splitLocation[7].split('?');
                    special = splitSpecial[0];

                    href = special + '/' + anchor;
                }
            }
        }
        else
        {
            if(splitLocation[4] == 'special')
            {
                var special = '';
                var anchor = '';
                var search = document.location.search.split('=');

                if(search == '')
                {
                    anchor = 'homepage';
                    special = splitLocation[6];

                    href = special + '/' + anchor;
                }
                if(search[0]==="?anchor")
                {
                    anchor = search[1];

                    var splitSpecial = splitLocation[6].split('?');
                    special = splitSpecial[0];

                    href = special + '/' + anchor;
                }
                else
                {
                    anchor = 'homepage';

                    var splitSpecial = splitLocation[6].split('?');
                    special = splitSpecial[0];

                    href = special + '/' + anchor;
                }
            }
            else
            {
                var splitHref = window.location.href.split('/');
                if(splitHref[5] == '') splitHref[5] = 'homepage';
                var href ='';

                for (var h = 5; h < splitHref.length; ++h) {
                    if(splitHref[h] != '#')
                    {
                        if(h == splitHref.length - 1) href += splitHref[h];
                        else href += splitHref[h] + '/';
                    }
                }

                var searchHref = href.split('?');

                if(searchHref[1] != undefined)
                {
                    var splitedSearch = searchHref[1].split('&');
                    var splitedParameter = splitedSearch[0].split('=');

                    if(splitedParameter[0] == 'anchor')
                    {
                        href = searchHref[0] + '/' + splitedParameter[1];
                    }
                    else
                    {
                        href = searchHref[0];
                    }
                }
            }
        }



        var locale = "";
        switch(loc)
        {
            case "fr_BE" :
                locale = 'bel/fr';
                break;

            case "nl_BE" :
                locale = 'bel/nl';
                break;

            case "de_DE" :
                locale = 'deu/de';
                break;

            case "es_ES" :
                locale = 'esp/es';
                break;

            case "fr_FR" :
                locale = 'fra/fr';
                break;

            case "it_IT" :
                locale = 'ita/it';
                break;

            case "ru_RU" :
                locale = 'rus/ru';
                break;

            case "en_UK" :
                locale = 'gbr/en';
                break;

            case "pt_BR" :
                locale = 'bra/pt';
                break;

            case "en_US" :
                locale = 'usa/en';
                break;

            case "zh_CN" :
                locale = 'chn/zh';
                break;

            case "zh_HK" :
                locale = 'hkg/zh';
                break;

            case "en_HK" :
                locale = 'hkg/en';
                break;

            case "ja_JP" :
                locale = 'jpn/ja';
                break;

            case "ko_KR" :
                locale = 'kor/ko';
                break;

            case "zh_TW" :
                locale = 'twn/zh';
                break;

            case "en" :
                locale = 'int/en';
                break;
        }


        if (!href || href==="") href = 'homepage';

        var newHref = '';
        if(core.mobile == true) newHref = '/beauty/' + locale + '/backstage/mobile/' + href;
        else newHref = '/beauty/' + locale + '/backstage/' + href;

        // google track page
        _gaq.push(['_trackPageview', newHref]);
        dataLayer.push({'pageVirtualPath': newHref});
    },

    fire: function(func, funcname)
    {
        funcname = (typeof funcname === 'undefined') ? 'init' : funcname;

        if (func !== '' && core[func] && typeof core[func][funcname] == 'function')
        {
            //console.log('-> call', func, funcname);
            core[func][funcname]();
        };

        var title = $('#content').attr('data-title');
        document.title = title;
    },

    loader:
    {
        wrapper: $('#loader'),

        launch: function(callback)
        {
            core.loader.wrapper.addClass('open').fadeIn(700, function()
            {
                if (typeof callback == 'function') callback();
            });
        },

        close: function()
        {
            core.loader.wrapper.removeClass('open').fadeOut(700);
        }
    },
    share: {
        init: function() {
            //facebook share feed
            //   $('.facebooker').click(function(e) {
            //       e.preventDefault();

            //       var uri = $(this).attr('data-url'),
            //           pic = $(this).attr('data-pic'),
            //           title = $(this).attr('data-title'),
            //           description = $(this).attr('data-content');

            //       var obj = {
            //   method: 'feed',
            //   redirect_uri: uri,
            //   link: uri,
            //   picture: pic,
            //   name: title,
            //   caption: title,
            //   description: description
            // };

            //       FB.ui(obj);

            //   });
            //twitter feed
            $('.twitter').click(function(e) {
                e.preventDefault();
                var uri = $(this).attr('data-url'),
                    description = $(this).attr('data-content'),
                    twitUrl = 'https://twitter.com/share?';
                twitUrl += 'url=' + uri + '&text=' + description;
                window.open(twitUrl, 'twitter', 'location=no,width=575,height=250');
            });
            //tumblr feed
            $('.tumblr').click(function(e) {
                e.preventDefault();
                var uri   = $(this).attr('data-uri'),
                    media = $(this).attr('data-media'),
                    title = $(this).attr('data-title'),
                    desc  = $(this).attr('data-description');

                var media = encodeURIComponent(media);
                var uri = encodeURIComponent(uri);
                var title = encodeURIComponent(title);
                var desc = encodeURIComponent(desc);

                var url = "http://www.tumblr.com/share/photo?source="+ media +"&caption=" + desc + "&click_thru=" + uri;

                //console.log(url);

                window.open(url, 'tumblr', 'location=no,width=575,height=250');
            });
            //kaixin feed
            $('.kaixin').click(function(e) {
                e.preventDefault();
                var uri = $(this).attr('href');
                window.open(uri, 'kaixin', 'location=no,width=575,height=250');
            });
            //weibo feed
            $('.weibo').click(function(e) {
                e.preventDefault();
                var uri = $(this).attr('href');
                window.open(uri, 'kaixin', 'location=no,width=575,height=250');
            });
            //pinterest feed
            $('.pinterest').click(function(e)
            {
                e.preventDefault();
                var uri = document.location.origin;
                var media = $(this).attr('data-media');
                var description = $(this).attr('data-description');

                var url = 'http://pinterest.com/pin/create/button/?url=' + uri + '&media=' + media + '&description=' + description;

                window.open(url, 'pinterest', 'location=no,width=575,height=250');
            });
            //share by mail
            $('.email').click(function(e) {
                e.preventDefault();
                $('#overlay').fadeIn(350, function() {
                    $('#mail-pop').fadeIn(350);
                    var reg = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
                    if( $('#mail-pop input[name=firstname]').val() != '' && $('#mail-pop input[name=lastname]').val() != '' && !reg.test($('#mail-pop input[name=mail-dest]').val()) ) {
                        $('.form p.submit input').css({ 'background' : '#000' });
                    }
                });
            });
            $('#mail-pop .close').click(function() {
                $('#mail-pop').fadeOut(350, function() {
                    $('#overlay').fadeOut(350);
                });

            });

            $('#mail-pop input[type=submit]').unbind('click').click(function() {

                var firstname 			= $('#mail-pop input[name=firstname]').val(),
                    lastname 			= $('#mail-pop input[name=lastname]').val(),
                    mailDest 			= $('#mail-pop input[name=mail-dest]').val(),
                    mailMes 			= $('#mail-pop input[name=message_mail]').val(),
                    subjectMail 		= $('#mail-pop input[name=subject_mail]').val(),
                    imageMail 			= $('#mail-pop input[name=image_mail]').val(),
                    logoMail 			= $('#mail-pop input[name=logo_mail]').val(),
                    tmplink 			= window.location.href.split('?'),
                    link  				= tmplink[0],
                    linkMessage 		= '<span style="color:#FFF; text-decoration:none; font-size : 14px; font-family:arial; text-transform : uppercase"><font color="#FFFFFF">' + $('#mail-pop input[name=libelle_lien]').val() + '</font></span>';


                var nbrInput = $('#mail-pop .fstd-input').length;
                var errorMsg = '';
                var loc = core._locale;

                for (var i = 0; i < nbrInput; ++i) {
                    var thisInput = $('#mail-pop .fstd-input:eq(' + i + ')');
                    var val = thisInput.val();
                    var inputName = thisInput.attr('name');
                    if (val === '') {
                        thisInput.addClass('inputError');
                        var label = $('#mail-pop label[for=' + inputName + ']').html();
                        errorMsg = Translator.get("Merci de renseigner le champ vide") + '<br/>';
                    }
                };
                var reg = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
                if (!reg.test(mailDest)) {

                    $('#mail-pop input[name=mail-dest]').addClass('inputError');
//                    errorMsg += Translator.get("L'email n'est pas valide.");
                }

                if (errorMsg != '') $('#mail-pop .error').html(errorMsg);
                if (reg.test(mailDest) && firstname != '' && lastname != '') {

                    subjectMail = firstname + " " + lastname + subjectMail;
                    mailMes = firstname + " " + lastname + mailMes;

                    var data = {
                        'email': mailDest,
                        'email_exp': 'Dior',
                        'firstname': firstname,
                        'name': lastname,
                        'image1': imageMail,
                        'image1_home': '',
                        'image2': '',
                        'image3': '',
                        'image4': '',
                        'image5': '',
                        'image_footer': '',
                        'image_logo': logoMail,
                        'langue': core.lang[loc],
                        'libLinkDior': 'www.backstage.dior.com',
                        'linkDlDior': '',
                        'linkDior': "http://backstage.dior.com",
                        'libLinkMessage': linkMessage,
                        'linkMessage': link,
                        'maquette_name': 'jadore',
                        'site': core.market[loc],
                        'style_email_invisible': '',
                        'style_link_dior': 'color:#6a6a6a;font-family:Helvetica, Arial, sans-serif;font-size:10px;margin-right:40%;',
                        'style_link_message': 'color:#cccccc;font-family:Helvetica, Arial, sans-serif;font-size:11px;',
                        'style_subtitle': 'color:#cccccc;font-family:Helvetica, Arial, sans-serif;font-size:13px;',
                        'style_title': 'color:#ffffff;font-family:Granjon, Granjon LT, Times New Roman, Times, serif;font-size:26px;',
                        'subtitle_message': mailMes,
                        'subtitle_message_home': mailMes,
                        'subtitle_message_product': '',
                        'sujet': subjectMail,
                        'sujet_backup': subjectMail,
                        'title_message': '',
                        'background_color': '000'
                    };

                    var webservice  = 'http://www.dior.com/beauty/' + core.loc[loc] + '/tinyWebSite/sendToFriend.ep';

                    $.ajax({
                        type: "POST",
                        url: webservice,
                        data: data,
                        error: function(data)
                        {
                            $('#mail-pop .form').html('<p class="valid">'+Translator.get("Your email was sent.")+'</p>')
                        },
                        success: function(data)
                        {
                            $('#mail-pop .form').html(Translator.get("Your email was sent."))
                        }
                    });
                }

            });
        }

    },
    loadLocale: function() {
        $('#languages a').unbind('click').click(function(e) {
            e.preventDefault();
            var loc = $(this).attr('data-locale');
            var route = Routing.generate('diorBackstageFrontBundle_index_home', {
                '_locale': loc,
                '_platform': core._platform
            });
            window.location.href = route;
        });
    },
    createLayout: function() {

        var headerData = $.parseJSON(core._header),
            headerDataLength = headerData.length;

        // NAVLESS
        /*
         for(var i = 0; i < headerDataLength; ++i) {
         var thisData = headerData[i];

         var nbrColumn = 0;

         $('.wrapMainNav').append('<li>\
         <a href="http://www.dior.com' + thisData.url + '" class="arial-narrow sub-nav-trigger" data-subnav-index="' + i + '">' + thisData.label + '</a>\
         </li>\
         ');

         var firstLi = $('.top-content:eq(' + i + ') li.first');
         firstLi.append('<h3>' + thisData.lead_name + '</h3><a href="' + thisData.lead_img_link[0].url + '" class="nav-img"><img src="http://www.dior.com' + thisData.lead_img_link[0].image.image + '" alt="' + thisData.lead_img_link[0].image.name + '" width="' + thisData.lead_img_link[0].image.width + '" height="' + thisData.lead_img_link[0].image.height + '"/><small>' + thisData.lead_img_link[0].label + '</small></a>');

         if(thisData.optionalLinks.length > 0) {
         for (var o = 0; o < thisData.optionalLinks.length; ++o) {
         if(!thisData.optionalLinks[o].url.match(/backstage/)) {
         firstLi.append('<a href="' + thisData.optionalLinks[o].url + '" >' + thisData.optionalLinks[o].label + '</a>')
         }
         }
         };

         var thisWrapper = $('.top-content:eq(' + i + ') ul');

         if(thisData.additional_links.length > 0) {
         nbrColumn += 1;
         var tempAdditional = $('<li/>');
         tempAdditional.append('<h3 class="sans-st">' + thisData.additional_title + '</h3>');
         for (var a = 0; a < thisData.additional_links.length; ++a) {
         tempAdditional.append('<a href="http://www.dior.com' + thisData.additional_links[a].url + '" >' + thisData.additional_links[a].label + '</a>')
         }

         thisWrapper.append(tempAdditional);
         };

         for(var param in thisData.columns) {

         nbrColumn += 1;

         var column = thisData.columns[ param ];

         var template = $('<li/>');

         for (var c = 0; c < column.length; ++c) {

         if(c === 0) template.append('<h3 class="sans-st">' + column[c].title + '</h3>');
         else template.append('<h3 class="sans-st in-list">' + column[c].title + '</h3>');

         for(var l = 0; l < column[c].links.length; ++l) {
         if(column[c].links[l].url.match(/http:\/\//)) {
         template.append('<a href="' + column[c].links[l].url + '">' + column[c].links[l].label + '</a>')
         } else {
         template.append('<a href="http://www.dior.com' + column[c].links[l].url + '">' + column[c].links[l].label + '</a>')
         }

         }
         }

         thisWrapper.append(template);
         }

         for (var f = 0; f < thisData.footer_links.length; ++f) {

         var template = $('<li class="image"/>');

         if(thisData.footer_links[f].url.match(/http:\/\//)){
         template.append('<a href="' + thisData.footer_links[f].url + '" class="nav-img"><img src="http://www.dior.com' + thisData.footer_links[f].over_image.image + '" alt="' + thisData.footer_links[f].over_image.name + '" width="' + thisData.footer_links[f].over_image.width + '" height="' + thisData.footer_links[f].over_image.height + '"/><img src="http://www.dior.com' + thisData.footer_links[f].image.image + '" class="bw" alt="' + thisData.footer_links[f].image.name + '" width="' + thisData.footer_links[f].image.width + '" height="' + thisData.footer_links[f].image.height + '"/><strong><h3>' + thisData.footer_links[f].label + '</h3><p>' + thisData.footer_links[f].description + '</p></strong></a>')
         } else {
         template.append('<a href="http://www.dior.com' + thisData.footer_links[f].url + '" class="nav-img"><img src="http://www.dior.com' + thisData.footer_links[f].over_image.image + '" alt="' + thisData.footer_links[f].over_image.name + '" width="' + thisData.footer_links[f].over_image.width + '" height="' + thisData.footer_links[f].over_image.height + '"/><img src="http://www.dior.com' + thisData.footer_links[f].image.image + '" class="bw" alt="' + thisData.footer_links[f].image.name + '" width="' + thisData.footer_links[f].image.width + '" height="' + thisData.footer_links[f].image.height + '"/><strong><h3>' + thisData.footer_links[f].label + '</h3><p>' + thisData.footer_links[f].description + '</p></strong></a>')
         }

         $('.bottom-content:eq(' + i + ') ul').append(template);
         }

         if (nbrColumn === 2) $('.top-content:eq(' + i + ') ul').addClass('three-col').removeClass('four-col');
         };

         $('.sub-nav-trigger:eq(1)').addClass('active');
         */

        var metanavData = $.parseJSON(core._metanav);

        $('#univers-trigger span').html(metanavData[2].infos_categ.name1 + ' ' + metanavData[2].infos_categ.name2);

        /*
         $('#menuList-01 li:eq(0)').html('<a href="' + metanavData[0].list_sous_categ[0].url + '" alt="' + metanavData[0].list_sous_categ[0].name + '">' + metanavData[0].list_sous_categ[0].name + '</a>');
         $('#menuBloc-01 ul:eq(1) li').html('<a href="' + metanavData[0].list_sous_categ[1].url + '" alt="' + metanavData[0].list_sous_categ[1].subname + '" target="_BLANK">' + metanavData[0].list_sous_categ[1].subname + '</a>');
         */

        var nbrItemTotal = metanavData.length;

        for (var i = 0; i < nbrItemTotal; ++i) {

            var _nlbr = ' ';
            //if (metanavData[i].infos_categ.name2 != '') var _nlbr = '<br/>';

            $('#menuBloc-0' + (i+1)).remove();

            var headerCol;

            if (i==0) {
                headerCol = $('<li id="menuBloc-0' + (i+1) + '" class="col padding-max"/>');
            } else if (i==nbrItemTotal-2) {
                headerCol = $('<li id="menuBloc-0' + (i+1) + '" class="col padding-max"/>');
            } else if (i==nbrItemTotal-1) {
                headerCol = $('<li id="menuBloc-0' + (i+1) + '" class="col last"/>');
            } else {
                headerCol = $('<li id="menuBloc-0' + (i+1) + '" class="col"/>');
            }

            var title = $('<h4/>').html(metanavData[i].infos_categ.name1 + _nlbr + metanavData[i].infos_categ.name2);
            var ul = $('<ul id="menuList-0' + i + '" />\
                ');

            headerCol.prepend(title).append(ul);

            $('#universContent > .container > ul').append(headerCol);

            for(var e = 0; e < metanavData[i].list_sous_categ.length; ++e)
            {
                if(metanavData[i].list_sous_categ[e] != undefined)
                {
                    var li = '<a href="' + metanavData[i].list_sous_categ[e].url + '" title="' + metanavData[i].list_sous_categ[e].name + '">' + metanavData[i].list_sous_categ[e].name + '</a> ';
                }
                $('#menuBloc-0' + (i + 1) + ' ul').append('<li>\
                    '+ li + '</li>\
                    ');
            }
        }

        var footerData = $.parseJSON(core._footer),
            template = '',
            _l, _data,
            _links = [],
            _socialLinks = [];

        // PRECIMPUTED LINKS
        // -> SOCIAL LINKS: links that have img set
        _l = footerData.length;
        for (var i=0; i<_l; ++i) {
            _data = footerData[i];
            if (_data.image!="") {
                _socialLinks.push( _data );
            } else {
                _links.push( _data );
            }
        }

        if (_socialLinks.length>0) {
            _l = _socialLinks.length;

            // SOCIAL LINKS
            for (i = 0; i < _l; ++i)
            {
                _data = _socialLinks[i];

                if (!_data.url.search('http') == 0)
                {
                    _data.url = 'http://www.dior.com' + _data.url;
                }

                if (i==0) {
                    template += '<li class="picto first"><a href="' + _data.url + '" target="_blank"><img src="'+ _data.image +'" alt="' + _data.label + '"></a></li>';
                } else {
                    template += '<li class="picto"><a href="' + _data.url + '" target="_blank"><img src="'+ _data.image +'" alt="' + _data.label + '"></a></li>';
                }
            }
        }

        if (_links.length>0) {
            _l = _links.length;
            for (i = 0; i < _l; ++i)
            {
                _data = _links[i];

                if (!_data.url.search('http') == 0)
                {
                    _data.url = 'http://www.dior.com' + _data.url;
                }

                if (i==0 || i==(_l-1)) {
                    template += '<li class="separator"><a href="' + _data.url + '" target="_blank">' + _data.label + '</a></li>';
                } else {
                    template += '<li><a href="' + _data.url + '" target="_blank">' + _data.label + '</a></li>';
                }
            }
            $('#footer-nav ul').html( template );
        }
    },
    hyphenate: function( str ) {
        if (str) return str.replace(/([A-Z])/g, function(str,m1){ return '-' + m1.toLowerCase(); }).replace(/^ms-/,'-ms-');
        else return;
    }
};
            $(document).ready(function() {
    core.Init();
})

Params = {
    Idevice				: (/iPhone|iPod|iPad|BlackBerry|Android/.test(navigator.userAgent))
}

He = {
    IsNumber : function(a)
    {
        return typeof(a) == "number" && !isNaN(a);
    }
}

Jewel =
{
    Overlay :
    {
        Obj: null,

        Show: function(_callback)
        {
            if(Jewel.Overlay.Obj.is(':visible'))
            {
                if(core.IsFunction(_callback))
                {
                    _callback();
                }
            }
            else
            {
                Jewel.Overlay.Obj.fadeIn(200, function()
                {
                    if(core.IsFunction(_callback))
                    {
                        _callback();
                    }
                });
            }
        },

        Hide: function(_callback)
        {
            if(Jewel.Overlay.Obj.is(':hidden'))
            {
                if(core.IsFunction(_callback))
                {
                    _callback();
                }
            }
            else
            {
                Jewel.Overlay.Obj.fadeOut(200, function()
                {
                    if(core.IsFunction(_callback))
                    {
                        _callback();
                    }
                });
            }
        },

        Init: function()
        {
            var _w = (core.ie) ? $('#content').height() : '100%';
            var _p = (core.ie) ? 'absolute' : 'fixed';

            $('<div></div>')
                .attr('id', 'content-overlay')
                .css({
                    background: '#000',
                    display: 'none',
                    opacity: .6,
                    height: _w,
                    width: '100%',
                    position: _p,
                    left: 0,
                    top: 0,
                    zIndex: 99
                })
                .appendTo('body');
            //$('#content').append('<div id="content-overlay"></div>');

            Jewel.Overlay.Obj = $('#content-overlay');
        }
    },

    SubNav :
    {
        Triggers	: null,
        Items		: null,
        ItemsHeight	: new Array(),
        Drawer		: null,
        IsOpen		: false,
        Current		: null,
        Duration	: 300,
        Timer		: null,
        TimeOut		: 500,
        Speed		: 500,
        Delay		: 200,
        Fader		: 10,
        Flag		: false,
        Deploy      : true,

        mouseOverHeader: false,
        scrollTop: 0,
        isMainNavOpen: true,

        SetTimer: function( _index )
        {
            window.clearTimeout(Jewel.SubNav.Timer);

            Jewel.SubNav.Timer = window.setTimeout(function()
            {
                Jewel.SubNav.Hide(_index);
            }, Jewel.SubNav.TimeOut);
        },

        CancelTimer: function()
        {
            window.clearTimeout( Jewel.SubNav.Timer );
        },

        Open: function( _index )
        {
            Jewel.SubNav.CancelTimer();
            Jewel.SubNav.Items.hide();

            var _height		= Jewel.SubNav.ItemsHeight[_index];

            //console.log( 'open SubNav.Drawer: '+_height );

            if ( !isNaN(_index) && _index===Jewel.SubNav.Current ) {
                Jewel.SubNav.IsOpen	= true;
                Jewel.SubNav.Show();
            } else if ( _height>0 && !Jewel.SubNav.IsOpen || !isNaN(_index) ) {
                Jewel.SubNav.IsOpen	= true;
                Jewel.Overlay.Show();

                if (!isNaN(_index)) Jewel.SubNav.Current = _index;

                Jewel.SubNav.Drawer.stop(true, true).show().animate({height: _height},
                    Jewel.SubNav.Duration,
                    function()
                    {
                        Jewel.SubNav.Flag = true;
                        Jewel.SubNav.Show();
                    });
            }
        },

        Close: function()
        {
            Jewel.SubNav.CancelTimer();
            //He.OnClickOutside.TearDown();

            if (Jewel.SubNav.IsOpen) {

                //Jewel.SubNav.Current = null;
                Jewel.SubNav.IsOpen = false;
                Jewel.Overlay.Hide();

                Jewel.SubNav.Drawer.stop(true, true).animate({height: 0},
                    Jewel.SubNav.Duration,
                    function()
                    {
                        Jewel.SubNav.Flag = false;
                        Jewel.SubNav.onScroll();
                    });
                Jewel.SubNav.Hide();
            }
        },

        Show: function()
        {
            Jewel.SubNav.Items.hide();
            var _dom	= Jewel.SubNav.Items[ Jewel.SubNav.Current ];

            $(_dom).stop().fadeIn(Jewel.SubNav.Fader, function()
            {
                Jewel.SubNav.Flag = false;
            });
        },

        Hide: function(_index)
        {
            var _dom = Jewel.SubNav.Items[ Jewel.SubNav.Current ];

            Jewel.SubNav.Current = null;

            $(_dom).stop().fadeOut(Jewel.SubNav.Fader, function()
            {
                $(_dom).css({'opacity':1})
                if(He.IsNumber(_index))
                {
                    if (Jewel.SubNav.Current !== _index) Jewel.SubNav.Open(_index);
                    else Jewel.SubNav.Close();
                }
                else
                {
                    Jewel.SubNav.Close();
                }
            });
        },

        GetItemsHeights: function()
        {
            Jewel.SubNav.Items.each(function()
            {
                var $this = $(this),
                    _height	= $this.height();

                if ($('html').hasClass('ie7')) _height += 20;

                Jewel.SubNav.ItemsHeight.push( _height );

                $this.hide();
            });
        },


        onScroll: function() {
            if (!core.isTactile && Jewel.SubNav.Deploy) {
                Jewel.SubNav.scrollTop = $(window).scrollTop();

                //console.log('#onScroll', Jewel.SubNav.isMainNavOpen, Jewel.SubNav.IsOpen);

                if(Jewel.SubNav.mouseOverHeader) {
                    Jewel.SubNav.openNav();
                } else if (!Jewel.SubNav.IsOpen) {
                    if (Jewel.SubNav.scrollTop > 5) {
                        Jewel.SubNav.closeNav();
                    } else {
                        Jewel.SubNav.openNav();
                    }
                }
            }
        },

        openNav: function( e ) {
            //console.log('#open Main Nav', Jewel.SubNav.isMainNavOpen, Jewel.SubNav.IsOpen);
            Jewel.SubNav.CancelTimer();

            if (!Jewel.SubNav.isMainNavOpen) {
                $(document.getElementById('main-nav')).stop().animate( {top: 0}, Jewel.SubNav.Duration );
                Jewel.SubNav.isMainNavOpen = true;
            } else if (Jewel.SubNav.mouseOverHeader) {
                Jewel.SubNav.Close();
            }
        },
        closeNav: function( e ) {
            //console.log('#close Main Nav', Jewel.SubNav.isMainNavOpen, Jewel.SubNav.IsOpen);

            if (!Jewel.SubNav.IsOpen && !Jewel.SubNav.mouseOverHeader) {
                $(document.getElementById('main-nav')).stop().animate( {top: -32}, Jewel.SubNav.Duration );
                Jewel.SubNav.isMainNavOpen = false;
            }
        },


        Init: function()
        {
            Jewel.SubNav.Triggers	= $(document.getElementById('main-nav')).find('a.sub-nav-trigger');
            Jewel.SubNav.Items		= $('div.sub-nav-content');
            Jewel.SubNav.Drawer		= $(document.getElementById('sub-nav'));

            Jewel.SubNav.GetItemsHeights();

            /*if($('html').hasClass('ie') && $('html').hasClass('lte6'))
             {
             DD_belatedPNG.fix('#sub-nav div');
             }

             if($('html').hasClass('ie'))
             {
             Jewel.SubNav.Fader = 0;
             }

             Jewel.SubNav.Drawer.find('ul li a').off('mouseenter mouseleave').hover(function()
             {
             Jewel.SubNav.CancelTimer();

             var imageHover = $(this).find('img.bw');
             imageHover.hide();
             var imageParagraph =  $(this).find('p');
             imageParagraph.css({'color':'#FFF'});
             })
             .mouseleave( function() {
             var imageHover = $(this).find('img.bw');
             imageHover.show();
             var imageParagraph =  $(this).find('p');
             imageParagraph.css({'color':'#6A6B6D'});
             });


             Jewel.SubNav.Triggers.each(function(i)
             {
             var _this = $(this),
             _index = _this.data('subnav-index');


             if(Params.Idevice) // Ipad ready
             {
             _this.on('touchstart', function(event)
             {
             if(_index ==  Jewel.SubNav.Current)
             {
             //alert('go to href');
             }
             else
             {
             if(!Jewel.SubNav.IsOpen)
             {
             //console.log('-> open sub nav');
             if (event.preventDefault) event.preventDefault();
             else event.returnValue = false;

             Jewel.Languages.Close();

             if (!isNaN(_index)) {
             //var subnavHeight = $('#sub-nav').height();

             Jewel.Overlay.Show();
             Jewel.SubNav.Open( _index );

             //He.OnClickOutside.Init('sub-nav-content', Jewel.SubNav.Hide);

             $(document).click(function(event) {
             if($(event.target).parents().index($('.sub-nav-content')) == -1) {
             if($('.sub-nav-content').is(":visible")) {
             Jewel.SubNav.Hide();
             }
             }
             })

             Jewel.SubNav.IsOpen = true;
             }
             return false;
             }
             if (Jewel.SubNav.IsOpen)
             {
             //console.log('-> update subnav content');
             Jewel.SubNav.Hide( _index );
             Jewel.SubNav.IsOpen = false;
             }
             return false;
             }
             });
             }
             else
             {
             _this.bind('hover', { speed:Jewel.SubNav.Speed, delay:Jewel.SubNav.Delay }, function()

             // _this.hoverIntent(
             //     function()
             {
             // Reset Timer and close Languages Drawer
             Jewel.SubNav.CancelTimer();
             Jewel.Languages.Close();

             //if(_index !=  Jewel.SubNav.Current)
             //{
             if (!isNaN(_index)) {
             Jewel.Overlay.Show();
             Jewel.SubNav.Open( _index );
             //He.OnClickOutside.Init('sub-nav-content', Jewel.SubNav.Hide);

             $(document).click(function(event) {
             if($(event.target).parents().index($('.sub-nav-content')) == -1) {
             if($('.sub-nav-content').is(":visible")) {
             Jewel.SubNav.Hide();
             }
             }
             })

             } else {
             Jewel.SubNav.Hide();
             }
             //}
             },

             function() {
             Jewel.SubNav.SetTimer(null);
             }
             );

             _this.on('mouseleave', function()
             {
             Jewel.SubNav.SetTimer();
             });
             }
             });


             Jewel.SubNav.Items.off('mouseenter').hover( Jewel.SubNav.CancelTimer );
             Jewel.SubNav.Items.find('ul').hover( Jewel.SubNav.CancelTimer );

             Jewel.SubNav.Items.on('mouseleave', function()
             {
             Jewel.SubNav.SetTimer( _index );
             });

             Jewel.SubNav.Drawer.on('mouseenter', Jewel.SubNav.CancelTimer );
             Jewel.SubNav.Drawer.on('mouseleave', Jewel.SubNav.SetTimer );*/

            // init Dior.com V5 behavior
            // -> deploy sub nav roll header
            if (!core.isTactile && Jewel.SubNav.Deploy) {
                $(window).scroll( Jewel.SubNav.onScroll );
                $(window).resize( Jewel.SubNav.onScroll );
            }

            $(document.getElementById('topbar')).mouseenter( function() {
                if (!Jewel.SubNav.mouseOverHeader) {
                    Jewel.SubNav.mouseOverHeader = true;
                    Jewel.SubNav.openNav();
                }
            })
                .mouseleave( function() {
                    Jewel.SubNav.mouseOverHeader = false;
                });
            $(document.getElementById('main-nav')).mouseleave( Jewel.SubNav.onScroll );

            //--------------------------------------------------------------------//
            // TRACKING
            // Jewel.SubNav.Items.each( function() {

            //     var _topLabel = $(this).data('track-event-label');

            //     $(this).find('li').each(function() {

            //         $(this).find('a').on('click', function() {
            //             core.trackEvent('TopMenu', _topLabel+' - '+$(this).data('track-event-label') );
            //         });
            //     });
            // });
        }
    },

    /*
     namespace: Languages

     Gestion du selecteur de langues/pays du footer

     */

    Languages :
    {
        Drawer: null,
        Lists: null,
        Default: null,
        Duration: 500,
        Trigger: null,

        Toggle: function(event)
        {
            if (event.preventDefault) event.preventDefault();
            else event.returnValue = false;

            if(Jewel.Languages.Drawer.is(':visible'))
            {
                Jewel.Overlay.Hide();
                Jewel.Languages.Close();
            }
            else
            {
                Jewel.Overlay.Show();
                Jewel.Languages.Open();
            }
        },

        Open: function()
        {
            Jewel.Languages.Trigger.addClass('active');
            Jewel.Languages.Drawer.stop(true, true).slideDown(Jewel.Languages.Duration, function()
            {
                //$(document).off('click').on('click', function(e)
                //{
                if(Jewel.Languages.Drawer.is(':visible'))
                {
                    if(!$(this).parents('#footer')) Jewel.Languages.Toggle();
                }
                //});
            });
        },

        Close: function()
        {
            Jewel.Languages.Trigger.removeClass('active');
            Jewel.Languages.Drawer.stop(true, true).slideUp(Jewel.Languages.Duration, function()
            {
                //$(document).unbind('click');
                // Reset Default Languages
                Jewel.Languages.Lists.hide();
                Jewel.Languages.ResetActive();
                Jewel.Languages.Default.show();
                Jewel.Languages.Default.prev('h6').addClass('active');
            });
        },

        ResetActive: function()
        {
            Jewel.Languages.Titles.removeClass('active');
        },

        Init: function()
        {
            Jewel.Languages.Drawer  = $('#languages');
            Jewel.Languages.Trigger = $('#languages-trigger');
            Jewel.Languages.Lists   = Jewel.Languages.Drawer.find('ul');
            Jewel.Languages.Default = Jewel.Languages.Drawer.find('ul.default');
            Jewel.Languages.Titles  = Jewel.Languages.Drawer.find('h6');

//      Languages.Drawer.css('display', 'none');

            Jewel.Languages.Trigger.click(Jewel.Languages.Toggle)

            Jewel.Languages.Titles.click(function()
            {
                Jewel.Languages.ResetActive();

                var _next = $(this).addClass('active').next('ul');

                Jewel.Languages.Lists.not(_next).slideUp('fast');
                _next.slideToggle();

                var height = 0;
            });

            Jewel.Overlay.Obj.click(function()
            {
                Jewel.Languages.Close();
                Jewel.Overlay.Hide();
            });

        }
    },


    MetaNav :
    {
        trigger:null,
        isOpen: false,
        drawer:null,
        Duration: 300,

        open: function()
        {
            Jewel.MetaNav.setActive();

            Jewel.MetaNav.drawer.stop(true, true).slideDown(Jewel.MetaNav.Duration, function()
            {
                Jewel.MetaNav.isOpen = true;

                $(document).off('click').on('click', function(event){
                    if(Jewel.MetaNav.isOpen) {
                        if($(event.target).parents().index($('#univers-drawer')) == -1) {
                            if($('#univers-drawer').is(":visible")) {
                                Jewel.MetaNav.close();
                            }
                        }
                    }
                })
            });
        },

        close: function()
        {
            Jewel.MetaNav.drawer.stop(true, true).slideUp(Jewel.MetaNav.Duration, function()
            {
                Jewel.Overlay.Hide();
                Jewel.MetaNav.resetActive();
                Jewel.MetaNav.isOpen = false;
                Jewel.MetaNav.news();
            });
        },

        setActive: function()
        {
            $('#header #topbar span').addClass('active');
        },

        resetActive: function()
        {
            $('#header #topbar span').removeClass('active');
        },

        news : function()
        {
            nbNews  = $news.find('li').size();
            _heigth = (nbNews * 25);

            if($newsHolder.hasClass('open'))
            {
                $news.animate({'height': '74px'}, 200, function()
                {
                    $newsHolder.removeClass('open');
                })
            }
            else
            {
                $news.animate({'height': _heigth}, 200, function()
                {
                    $newsHolder.addClass('open');
                })
            }
        },

        Init: function()
        {
            Jewel.MetaNav.trigger = $('#univers-trigger');
            Jewel.MetaNav.drawer = $('#univers-drawer');
            $news = $('.univers-drawer-news');
            $newsHolder = Jewel.MetaNav.drawer.find('li.univers-drawer-block-news');

            $('#univers-drawer-news-trigger').click(function()
            {
                Jewel.MetaNav.news();
            });

            $('#content-overlay').click(function(){
                Jewel.MetaNav.close();
            })

            Jewel.MetaNav.trigger.click(function(e)
            {
                e.preventDefault();
                if(Jewel.MetaNav.isOpen)
                {

                    Jewel.MetaNav.close();

                }
                else
                {
                    Jewel.MetaNav.open();
                    Jewel.Overlay.Show();

                    var headerHextra = $('#univers-drawer-content'),
                        headerHextraWidth = $('#univers-drawer-content').width(),
                        headerHextraNewWidth = headerHextraWidth;
                    headerHextra.css({'width':headerHextraNewWidth+'px','float':'none'});

                }
            });
        }
    }

}


$(function()
{
    Jewel.Overlay.Init();
    //Jewel.SubNav.Init();
    Jewel.Languages.Init();
//	Newsletter.Init();
//	Account.Init();
//	Jewel.MetaNav.Init();
});


core.popin =
{
    firstCall : function(href)
    {
        //var home = Routing.generate('diorBackstageFrontBundle_index_home', { '_locale' : core._locale, '_platform' : core._platform });

        //console.log('[popin] firstCall');
        core.managePage.page.build( document.getElementsByTagName('html')[0].innerHTML, '', true );
        core.fire('home');

        core.flagHome = true;

        setTimeout(function()
        {
            core.popin.display(href);
        }, 100);
    },

    display : function(href)
    {
        if(core.overlay.hasClass('open'))
        {
            var overOverlay = '<div class="load-pop"><div id="canvaspopin-container"></div></div>';
            core.overlay.append(overOverlay);

            if(core.ie === false)
            {
                var cl = new CanvasLoader('canvaspopin-container');
                cl.setColor('#ffffff'); // default is '#000000'
                cl.setShape('spiral'); // default is 'oval'
                cl.show();

                var h = $(window).height();
                $('.load-pop div').css({'top': (h - 40) / 4});

            }

            $('.load-pop').fadeIn(500);
        }


        core.managePage.call(href);

        core.managePage.request.done(function(data)
        {
            if(core.overlay.hasClass('open'))
            {
                if(core.dir === 'right')
                {
                    $('#popin').animate({'left': '-100%'}, 500, function()
                    {
                        $('#popin').remove();
                        core.overlay.prepend($(data).find('#popin'));
                        $('#popin').addClass('right').animate({'left':'50%'}, 500, function()
                        {

                            $('.load-pop').fadeOut(500, function()
                            {
                                $('.load-pop').remove();
                            });
                        });
                        core.popin.launchFx();
                    });
                }
                else
                {
                    $('#popin').animate({'left': '200%'}, 500, function()
                    {
                        $('#popin').remove();
                        core.overlay.prepend($(data).find('#popin'));
                        $('#popin').addClass('left').animate({'left':'50%'}, 500, function()
                        {

                            $('.load-pop').fadeOut(500, function()
                            {
                                $('.load-pop').remove();
                            });
                        });
                        core.popin.launchFx();
                    });
                }

            }
            else
            {
                if(core.ie7 == false) core.home.scroll = typeof window.pageYOffset !== 'undefined' ? window.pageYOffset: document.documentElement.scrollTop? document.documentElement.scrollTop: document.body.scrollTop? document.body.scrollTop:0;

                core.h = $('body').height();

                core.overlay.html($(data).find('#popin'));

                core.overlay.addClass('open').fadeIn(750, function()
                {

                    $('#popin img').ready(function()
                    {
                        core.popin.launchFx(function()
                        {
                            $('#popin').css({'left':'50%'});
                            $('#close-popin').css({'left':'50%'});

                            $('#popin').fadeIn(500, function()
                            {
                                if(core.ie7 == false) $('#page').css({'top':core.home.scroll * -1}).addClass('fixed');
                            });

                        });

                    });

                    if($('#loader').hasClass('open'))
                    {
                        core.loader.close();
                    }
                });

                $('#overlay').append('<div id="close-popin" />');

                if(core.ie7)
                {
                    $('#overlay').height(h);

                    if($('#popin').height() > core.h)
                    {
                        $('body').height($('#popin').height())
                    }
                }
            }
        });
    },

    launchFx : function(callback)
    {
        if(core.mobile == false)
        {
            $(document).scrollTop(0);

            $('#close-popin').unbind('click').click(function()
            {
                //change history without load page
                hasher.changed.active = false;
                hasher.setHash('');
                hasher.changed.active = true;

                $('#popin').fadeOut(500, function()
                {
                    if(core.ie) document.documentElement.scrollTop = core.home.scroll;
                    if(core.ie7 == false) $('#page').removeClass('fixed');
                    if(core.ie7 == true)
                    {
                        $('body').height($('#popin').height(core.h));
                    }
                    $('body, html').scrollTop(core.home.scroll);
                    $('#page').css({'width':'100%'});

                    $('#close-popin').remove();

                    core.overlay.fadeOut(500, function()
                    {
                        $('#nav-search').css({'right':'0'});

                        core.medias.video.destroy();
                        core.overlay.removeClass('open').html('');
                    });
                });
            });

            core.ajaxify();

            if($('a.push-half').length > 0)
            {
                $('a.push-half:odd').addClass('right');
            }

            $('.left-arrow').unbind('click').click(function()
            {
                core.dir = 'left';
            });

            $('.right-arrow').unbind('click').click(function()
            {
                core.dir = 'right';
            });

            $('.do-not-miss a').hover(function()
            {
                $(this).find('strong').stop(true, true).fadeIn(300);
            }).mouseleave(function()
            {
                $(this).find('strong').stop(true, true).fadeOut(300);
            });

            var title = $('#popin').attr('data-title');
            document.title = title;

        }

        core.share.init();

        // color & medias management
        core.home.popinColor = $('#popin').attr('data-color');

        $('.bloc-text a').css({'color': '#'+core.home.popinColor});

        /*if($('.push-full').length > 0)
         {
         var css = {'color': '#'+core.home.popinColor};

         $('.push-full strong').css(css);
         $('.push-full h4').css(css);
         $('.push-full span').css(css).css({'border-color': '#'+core.home.popinColor});
         }*/

        $('.tag a').hover(function()
        {
            var thisColor = $(this).attr('data-color');
            var color = '#' + thisColor;
            $(this).css({'color':color});
        }).mouseleave(function()
        {
            $(this).css({'color':'#FFF'});
        });

        var allMedias = $("#popin").attr('data-media');

        if( typeof(allMedias) !== 'undefined')
        {
            var controller = allMedias.split(' ');

            for (var i = 0; i < controller.length; i++)
            {
                core.medias.init(controller[i]);
            }
        };

        if(typeof(callback) == 'function') callback();




    }
};
core.managePage =
{
    type        : null,
    controller  : null,
    request     : null,
    content     : $('#content'),
    //gestion de l'appel aux pages
    init : function(href, oldHash)
    {
        core.medias.video.destroy();
        core.managePage.type = href.split('/');

        if (core.managePage.type[0] === 'article')
        {
            if ( core.flagHome === false )
            {
                core.loader.launch(function()
                {
                    core.popin.firstCall(href);
                });
            }
            else
            {
                setTimeout(function()
                {
                    core.popin.display(href);
                }, 100);
            }
        }
        else
        {
            core.loader.launch(function()
            {
                core.managePage.page.init(href, oldHash);
            });
        }
    },

    call : function(href)
    {
        core.managePage.request = $.ajax(
            {
                url         : href,
                dataType    : 'html'
            });
    },

    page :
    {
        init : function(href, oldHash)
        {
            //console.log('[core.manage.page] init');            
            if(href == '')
            {
                href = Routing.generate('diorBackstageFrontBundle_index_home', { '_locale' : core._locale, '_platform' : core._platform });
            }
            core.managePage.call(href);
            core.managePage.content.remove();
            core.managePage.request.done( core.managePage.page.build );
        },

        build : function( data, oldHash, noDisplay ) {
            //console.log('[core.manage.page] build page', oldHash, noDisplay);

            if($('#page').hasClass('fixed')) {
                $('#page').removeClass('fixed');
                core.overlay.removeClass('open').html('').hide();
                $('#close-popin').remove();
            }

            $('#content').remove();

            if('#page #popin')
            {
                $('#page #popin').remove();
            }
            if(core.ie7 == true)
            {
                $('#overlay').html('').removeClass('open').removeAttr('style');
            }

            var content = $(data).find('#content');

            if( content.html() === null) content = $(data).find('#popin');

            $('#nav-search').after(content);

            //console.log(typeof noDisplay);

            if (!noDisplay || typeof noDisplay === 'object') {
                //console.log('-> display page');
                if (oldHash==='success') oldHash = '';
                core.managePage.page.loadFx( oldHash );
            }
        },

        loadFx : function(oldHash)
        {
            //console.log('[core.manage.loadFx]');

            $(window).resize(function()
            {
                $('#content').css({'height':'auto'});
            }).trigger('resize');

            $(window).scrollTop(0);

            var controller 	= $('#content').attr('data-controller');

            if(controller === 'home') core.flagHome = true;
            else core.flagHome = false;

            if($('.return a').length > 0)
            {
                if(typeof oldHash != 'undefined')
                {
                    splitHash = oldHash.split('/');

                    var newHref = '/makeup-mag/' + core._locale + '/#';

                    for(var h=0; h < splitHash.length; ++h)
                    {
                        newHref += '/' + splitHash[h];
                    }
                    if(controller === 'result')
                    {
                        newHref = Routing.generate('diorBackstageFrontBundle_index_search', { '_locale' : core._locale, '_platform' : core._platform });
                    }
                    if(controller === 'search')
                    {
                        newHref = '/makeup-mag/' + core._locale + '/#';
                    }

                    $('.return a').attr('href', newHref);
                }
                else
                {
                    route = Routing.generate('diorBackstageFrontBundle_index_home', { '_locale' : core._locale, '_platform' : core._platform });

                    var newHref = route + '/#';

                    $('.return a').attr('href', newHref);
                }
            }


            if(core.mobile == false) core.ajaxify();

            core.fire(controller);
            core.share.init();

            if($('#page #popin').length > 0)
            {
                core.popin.launchFx();
                if(core.ie7 == true) $('body').css('marginTop', '100px')
                core.loader.close();
            }
            else if($('.ds').length > 0)
            {
                core.loader.close();
            }

            $('a[data-ajax=false]').click(function()
            {
                hasher.changed.active = false;
            });

            if($('.vAlign').length > 0)
            {
                if(core.mobile === false){
                    setTimeout(function(){
                        $('.vAlign').vAlign();
                    }, 500)
                }
            }
        }
    }
};
core.medias =
{
    init : function(media)
    {
        switch(media)
        {
            case "video" :
                if($('video').length > 0)
                {
                    if(core.mobile == false)
                    {
                        core.medias.video.init();
                    }
                }

                break;

            case "slideshow" :
                if($('ul.slides').length > 0)
                {
                    core.medias.slider.init();
                }
                break;
        }
    },

    video :
    {
        player 	: [],
        height 	: 0,
        width	: 0,

        init : function()
        {
            $('video').each(function()
            {
                core.medias.video.width = $(this).parent().width();

                var thisId = $(this).attr('id');

                core.medias.video.player.push(_V_(thisId, {}));

                var css = {'height': (core.medias.video.width / 16) * 9, 'width': core.medias.video.width};

                $('#' + thisId).css(css);
                //$('#' + thisId + 'video').css(css);
                if(core.ie7 == false) $('#' + thisId + ' img').css(css);
                else $('#' + thisId + ' img').css({'height':'100%'});

                if(core.mobile)
                {
                    $('.vjs-default-skin .vjs-big-play-button').css({'margin-top':'0'});
                }

                var title = $(this).attr('data-title');
                var titleColor = $(this).attr('data-title-color');
                var subtitle = $(this).attr('data-subtitle');

                if(title)
                {
                    $('#' + thisId).append('<div class="title-wrapper" />');
                    var tmpTitle = '<div class="video-title">' + title + '</div>';
                    $('.title-wrapper').prepend(tmpTitle);
                    $('.video-title').css({'color':'#'+titleColor});
                    if( !core.mobile)
                    {
                        /*$('.title-wrapper').vAlign();*/
                        $('.title-wrapper').css({'padding-top': ($('#' + thisId).height() - $('.title-wrapper').height()) * 0.5 - 80});
                        $('.title-wrapper').height('100%');
                        /*$('.vjs-big-play-button').css({'margin-top':'140px'});*/

                    }
                };

                if(subtitle)
                {
                    var tmpSubtitle = '<div class="video-subtitle">' + subtitle + '</div>'
                    $('.title-wrapper').append(tmpSubtitle);
                }

                // affiche le poster à la fin de la vidéo
                _V_(thisId).addEvent("ended", function()
                {
                    $('#' + thisId + ' img.vjs-poster').css({'display':'block'});
                    $('#' + thisId + ' .vjs-loading-spinner div').hide();
                });


            });

            core.medias.video.bindEvent();
        },

        bindEvent : function()
        {
            /*$('.vjs-poster, .vjs-big-play-button, .vjs-play-control, .vjs-tech').click(function(e)
             {
             var thisSrc = $(this).parents('.bloc-media').attr('data-mp4');
             if( thisSrc ) {
             var splitSrc = thisSrc.split('/'),
             nbrEl		= splitSrc.length;

             _gaq.push(['_trackEvent', 'Backstage_Makeup_Mag', splitSrc[nbrEl - 1] , 'Click Vidéo ']);
             }

             var thisWrapper 	= $(this).parents('.video-js'),
             title 			= thisWrapper.find('.title-wrapper');

             console.log( $(this) );
             console.log( thisWrapper );
             console.log( title );

             if(thisWrapper.hasClass('vjs-paused'))
             {
             if(title) title.hide();
             };

             });*/

            $('.title-wrapper').click(function(e)
            {
                // 2 type of video container : .bloc-media (brief videos) and .video-look (on look pages)
                var thisSrc = $(this).parents('.bloc-media').attr('data-mp4');
                var splitSrc = null;
                if( thisSrc ) {
                    splitSrc 	= thisSrc.split('/'),
                        nbrEl		= splitSrc.length;
                } else {
                    thisSrc = $(this).parents('.video-look').attr('data-mp4');
                    if (thisSrc) {
                        splitSrc 	= thisSrc.split('/'),
                            nbrEl		= splitSrc.length;
                    }
                }
                if (splitSrc) {
                    _gaq.push(['_trackEvent', 'Backstage_Makeup_Mag', 'Video - '+splitSrc[nbrEl - 1] , 'Click Vidéo']);
                }

                var thisWrapper 	= $(this).parents('.video-js'),
                    title 			= thisWrapper.find('.title-wrapper');

                if(thisWrapper.hasClass('vjs-paused'))
                {
                    if(title) title.hide();
                };

                var thisId  	= thisWrapper.attr('id');
                _V_(thisId).play();
            });


            $('.vjs-fullscreen-control').live('click', function()
            {
                var par 	= $(this).parents('.video-js').parent(),
                    thisId  	= $(this).parents('.video-js').attr('id'),
                    mp4Src 		= par.attr('data-mp4'),
                    oggSrc 		= par.attr('data-ogg'),
                    subtitles   = par.attr('data-subtitles')
                template 	= '<div id="fullscreenWrapper"><div class="close-fullscreen"></div><video id="fullscreenVideo" class="video-js vjs-default-skin" controls preload="auto" width="100%" height="100%"><source src="' + mp4Src + '" type="video/mp4"><source src="' + oggSrc + '" type="video/ogg"><track src="' + subtitles + '" kind="subtitles" /></video></div>';

                //ajouter le fullscreen au DOM
                $('body').append(template);
                var wrapper = $('#fullscreenWrapper');

                //stopper la vidéo en cours et récupérer son timecode
                var currentTimer = _V_(thisId).currentTime();
                _V_(thisId).pause();

                //appliquer videoJs
                var fullscreenPlayer = _V_("fullscreenVideo");

                fullscreenPlayer.ready(function()
                {
                    fullscreenPlayer.play();

                    wrapper.css({'display':'none', 'left':'0'});
                    if(core.ie == false)
                    {
                        wrapper.fadeIn(700);
                    }
                    else
                    {
                        wrapper.show(0);
                    }


                    $('#fullscreenVideo .vjs-fullscreen-control').remove();

                    // affiche le poster à la fin de la vidéo
                    _V_(thisId).addEvent("ended", function()
                    {
                        $('#' + thisId + ' img.vjs-poster').css({'display':'block'});
                        $('#' + thisId + ' .vjs-loading-spinner').css({'display':'none'});
                    });

                });

                $('.close-fullscreen').click(function()
                {
                    fullscreenPlayer.destroy();
                    if(core.ie == false)
                    {
                        wrapper.fadeOut(700, function()
                        {
                            wrapper.remove();
                        });
                    }
                    else
                    {
                        wrapper.remove();
                    }
                });
            });
        },

        pushVideo : function(_this)
        {
            var mp4Src 		= _this.attr('data-mp4'),
                oggSrc 		= _this.attr('data-ogg'),
                ieSrc		= _this.attr('data-ie'),
                subtitle    = _this.attr('data-videosubtitle'),
                urlSpecial 	= document.location.href.split('/');

            if(core.oldIe === false)
            {
                template           = '<div id="fullscreenWrapper"><div class="close-fullscreen"></div><video id="fullscreenVideo" class="video-js vjs-default-skin" controls preload="auto" width="100%" height="100%"><source src="' + mp4Src + '" type="video/mp4"><source src="' + oggSrc + '" type="video/ogg"><track src="' + subtitle + '" kind="subtitles" /></video></div>';
            }
            else
            {
                if(ieSrc != undefined) template = '<div id="fullscreenWrapper"><div class="close-fullscreen"></div><video id="fullscreenVideo" class="video-js vjs-default-skin" controls preload="auto" width="100%" height="100%"><source src="' + ieSrc + '" type="video/mp4"></video></div>';
                else template = '<div id="fullscreenWrapper"><div class="close-fullscreen"></div><video id="fullscreenVideo" class="video-js vjs-default-skin" controls preload="auto" width="100%" height="100%"><source src="' + mp4Src + '" type="video/mp4"></video></div>';
            }

            if(core.mobile == false)
            {
                $('body').append(template);
                var wrapper = $('#fullscreenWrapper');

                if ($.browser.msie && $.browser.version <= 10) _V_.options.techOrder = ["flash"];


                var fullscreenPlayer = _V_("fullscreenVideo");

                fullscreenPlayer.ready(function()
                {
                    fullscreenPlayer.play();

                    wrapper.css({'display':'none', 'left':'0'});
                    if(core.ie == false)
                    {
                        wrapper.fadeIn(700);
                    }
                    else
                    {
                        wrapper.show(0);
                    }

                    $('#fullscreenVideo .vjs-fullscreen-control').remove();

                });

                $('.close-fullscreen').click(function()
                {
                    fullscreenPlayer.destroy();
                    if(core.ie == false)
                    {
                        wrapper.fadeOut(700, function()
                        {
                            wrapper.remove();
                        });
                    }
                    else
                    {
                        wrapper.remove();
                    }

                });
            }
        },

        destroy : function()
        {
            if( core.medias.video.player.length > 0)
            {
                var n = core.medias.video.player.length;

                for (var i = 0; i < n; i++)
                {
                    //core.medias.video.player[i].tech.destroy();
                    core.medias.video.player[i].destroy();
                };

                core.medias.video.player = [];
            }
        }
    },

    slider :
    {
        init : function()
        {
            $('ul.slides').each(function()
            {
                var thisParent = $(this).parent();

                thisParent.flexslider({
                    animation : 'slide',
                    slideshowSpeed: 4000,
                    pauseOnHover : false,
                    animationLoop : true,
                    slideshow: true,
                    directionNav: false,
                    touch: true
                });
            });
        }
    }
}
core.home =
{
    globalHeight 	: 0,
    contentW 		: 0,
    headerH 		: 0,
    subFooterH 		: 0,
    footerH 		: 0,
    contentH		: 0,
    popinColor		: null,
    scroll 			: null,
    video           : 'undefined',
    page            : 1,
    firstLoad       : true,

    flexSlider      : null,

    init : function()
    {
        //console.log('[Home] init');
        if(core.mobile)
        {
            var back = $('#covers li:first-child').attr('data-background')

            $('#covers li:first-child').css({'display': 'block', 'background':'#'+back});

            $('#more-tiles').click(function(e)
            {
                e.preventDefault();

                core.home.page += 1;

                var tilesRoute = Routing.generate('diorBackstageFrontBundle_article_show', { '_locale' : core._locale, '_platform' : core._platform, 'page': core.home.page });

                var req = $.ajax(
                    {
                        url         : tilesRoute,
                        dataType    : 'json'
                    });

                req.success(function(data)
                {
                    if( data.next === null)
                    {
                        $('#more-tiles').hide();
                    }

                    $('#tiles').append(data.content);
                });

            });
        }
        else
        {
            $('#tiles a').unbind('click').click(function(e)
            {
                e.preventDefault();
                var allRoute   = $(this).attr('href');
                var external = new RegExp(/http/);

                if(core.ie7)
                {
                    if($(this).data('ie7Ajax') == true)
                    {
                        var route       = allRoute.split('#/');
                        var myRoute     = route[1];

                        core.managePage.init(myRoute);

                        hasher.changed.active = false;
                        hasher.setHash(myRoute);
                        hasher.changed.active = true;

                        core.pushTrack(myRoute);
                    }
                }
                else
                {
                    if(!external.test(allRoute))
                    {
                        e.preventDefault();

                        var reg = new RegExp(/\#/);

                        if (reg.test(allRoute))
                        {
                            var route       = allRoute.split('#/');
                            var myRoute    = route[1];

                            core.managePage.init(myRoute);

                            hasher.changed.active = false;
                            hasher.setHash(myRoute);
                            hasher.changed.active = true;

                            core.pushTrack(myRoute);

                        }
                    }
                    else
                    {
                        document.location = allRoute;
                        return true;
                    }
                }
            });

            $('.wrapper li').each(function()
            {
                var back = $(this).attr('data-background');

                $(this).css({'background':'#'+back});
            });

            //launch tiler
            var tiles = $('#tiles li');
            var options = {
                autoResize : true,
                offset : 20,
                container: $('#tiles')
            };



            $('img').load(function(){
                core.home.wook = tiles.wookmark(options);

                //launch slider
                $('#covers').flexslider({
                    selector: '.wrapper > li',
                    animation : 'slide',
                    animationLoop : true,
                    slideshow: false,
                    controlNav: true,
                    controlsContainer : '.covers-control',
                    touch: false
                });

                core.home.resize();
            });

            var ww = $(window).width();

            /*if(ww > 1580)
             {
             var tilesRoute = Routing.generate('diorBackstageFrontBundle_article_show', { '_locale' : core._locale, '_platform' : core._platform, 'page': 2});

             var req = $.ajax(
             {
             url         : tilesRoute,
             dataType    : 'json'
             });

             req.success(function(data)
             {
             if( data.next === null)
             {
             $('#more-tiles').hide();
             }

             //tiles.wookmarkClear();

             $('#tiles').append(data.content);

             var options = {
             autoResize : true,
             offset : 20,
             container: $('#tiles')
             };

             tiles = $('#tiles li');

             core.ajaxify();

             $('#tiles img').load(function()
             {
             tiles.wookmark(options);
             core.home.resize();
             });

             core.home.page = 2;
             });
             }*/

            if(core.home.page > 1)
            {
                for( var t = 1; t < core.home.page; ++t )
                {
                    var tilesRoute = Routing.generate('diorBackstageFrontBundle_article_show', { '_locale' : core._locale, '_platform' : core._platform, 'page': t + 1});

                    var req = $.ajax(
                        {
                            url         : tilesRoute,
                            dataType    : 'json'
                        });

                    req.success(function(data)
                    {
                        if( data.next === null)
                        {
                            $('#more-tiles').hide();
                        }

                        //tiles.wookmarkClear();

                        $('#tiles').append(data.content);

                        var options = {
                            autoResize : true,
                            offset : 20,
                            container: $('#tiles')
                        };

                        tiles = $('#tiles li');

                        core.ajaxify();


                        $('#tiles img').load(function()
                        {
                            tiles.wookmark(options);
                            core.home.resize();
                        });
                    });
                }
            }


            //add more tiles
            $('#more-tiles').unbind('click').click(function(e)
            {
                e.preventDefault();
                core.home.page += 1;

                var tilesRoute = Routing.generate('diorBackstageFrontBundle_article_show', { '_locale' : core._locale, '_platform' : core._platform, 'page': core.home.page });

                var label = $(this).html();

                if(core.ie === false)
                {
                    $(this).html('<div id="loading-article"></div>');
                    var cl = new CanvasLoader('loading-article');
                    cl.setColor('#7d7d7d'); // default is '#000000'
                    cl.setShape('spiral'); // default is 'oval'
                    cl.setDiameter(15);
                    cl.show();
                };

                var req = $.ajax(
                    {
                        url         : tilesRoute,
                        dataType    : 'json'
                    });

                req.success(function(data)
                {
                    if( data.next === null)
                    {
                        $('#more-tiles').hide();
                    }

                    tiles.wookmarkClear();

                    $('#tiles').append(data.content);

                    var options = {
                        autoResize : true,
                        offset : 20,
                        container: $('#tiles')
                    };

                    tiles = $('#tiles li');

                    core.ajaxify();

                    $('#tiles img').load(function()
                    {
                        tiles.wookmark(options);
                        $('#more-tiles').html(label)
                        core.home.resize();
                    });
                });
            });

            $(window).resize(function()
            {
                core.home.resize();
            });
        }
    },

    placeIntersticiel : function()
    {
        if (core.ie == false)
        {
            if( core.intersticiel === true )
            {
                var _l = $('.background-cover').length,
                    coverImg = 0;

                for (var i=0; i<_l; ++i) {
                    coverImg = Math.max( coverImg, $('.background-cover:eq('+(_l-1)+')').height() );
                };

                $('#covers .wrapper li div.intersticiel').css({'top' : coverImg * .25});

                setTimeout(function()
                {
                    $('#covers .wrapper li div.intersticiel').fadeOut(1000, function()
                    {
                        $('#covers .wrapper li div.accroche').fadeIn(1000);

                        core.intersticiel = false;
                    });
                }, 3000);
            }

            if( core.intersticiel === false )
            {
                $('#covers .wrapper li div.intersticiel').hide();
                $('#covers .wrapper li div.accroche').show();
            }

            core.loader.close();
        }
        else
        {
            $('#covers .wrapper li div.intersticiel').hide();
            $('#covers .wrapper li div.accroche').show();
            core.loader.close();
        };

        core.home.firstLoad = false;
    },

    resize : function()
    {
        core.home.contentW = $(window).width();
        core.home.contentH = $('#page-content').height();


        var imgHeight = setTimeout(function()
        {
            var _l = $('.background-cover').length,
                coverImg = 0;

            for (var i=0; i<_l; ++i) {
                coverImg = Math.max( coverImg, $('.background-cover:eq('+(_l-1)+')').height() );
            }

            // dif = cover - 49% of cover ? so dif = 51% of cover
            //var difCover = coverImg - ((coverImg * 49) / 100);
            var difCover = coverImg * 0.51;

            // why this? media queries in css... :S
            $('#page-content').css({'top' : coverImg - difCover});

            if($('#page-content').length > 0) $('.wrapper li').height(core.home.contentH + $('#page-content').position().top);

            $('.accroche').each(function(){
                var accrocheHeight = $(this).height();

                $(this).css({'top' : ($('#page-content').position().top - accrocheHeight) / 2});
            });

            core.home.placeIntersticiel();

        }, 200);

    }
};

core.look =
{


    init : function()
    {
        if(core.mobile == false)
        {
            core.medias.video.init();
        }

        core.look.preload();

        core.look.slider.init();

        $('.push li:even').addClass('push-top');

        if(core.mobile == false)
        {
            $('.push li a').click(function(e)
            {
                var videoAttr = $(this).attr('data-mp4');

                if(videoAttr != undefined)
                {
                    e.preventDefault();

                    core.medias.video.pushVideo($(this));
                }
            });
        }

        $('.tag a').hover(function()
        {
            var thisColor = $(this).attr('data-color');
            var color = '#' + thisColor;
            $(this).css({'color':color});
        }).mouseleave(function()
        {
            $(this).css({'color':'#FFF'});
        });
    },

    displaySection : function()
    {
        var parameter = core.getParameters();

        if( parameter != undefined){
            var hDisplay = $('.' + parameter).offset().top;

            if(core.ie7 == true)
            {
                if(parameter == 'making-of') $(document).scrollTop(hDisplay);
                else $(document).scrollTop(hDisplay - 20);
            }
            else
            {
                if(parameter == 'making-of') $("html, body").scrollTop(hDisplay);
                else if(parameter == 'collection') $("html, body").scrollTop(hDisplay + 60);
                else $("html, body").scrollTop(hDisplay - 20);
            }
        }
    },

    preload : function () {
        var s,
            images = [],
            loaded = 0;

        $('img').each(function () {
            var src = $(this).attr('src');
            images.push(src);
        });

        core.look.launchPreload(images);
    },

    launchPreload : function (arr) {
        var newimages = [], loadedimages = 0,
            arr = (typeof arr !== "object") ? [arr] : arr;

        function imageloadpost () {
            loadedimages++;

            if (loadedimages === arr.length) {
                var searchLocation = document.location.href.split('?');

                if(searchLocation[1] != undefined) core.look.displaySection();

                core.loader.close();
            }
        };

        for (var i=0; i<arr.length; i++) {
            newimages[i] = new Image();
            newimages[i].src = arr[i];
            if($('html').hasClass('ie8'))
            {
                imageloadpost();
            }
            else if($('html').hasClass('ie7'))
            {
                imageloadpost();
            }
            else
            {
                newimages[i].onload = function()
                {
                    imageloadpost();
                }
                newimages[i].onerror = function()
                {
                    imageloadpost();
                }
            }
        };
    },

    slider :
    {
        previous 		: 0,
        current 		: 1,
        next 			: 2,
        table 			: [],
        flag			: false,

        init : function()
        {


            if(core.mobile)
            {
                $('.slider ul li img').each(function()
                {
                    var thisSrc = $(this).attr('src');

                    core.look.slider.table.push(thisSrc)
                });

                core.look.slider.buildMobile();

                // var height = $('.video-look img').height();

                // $('.video-look').css({'height': height});
            }
            else
            {



                var	wrapper = $('.slider ul');

                wrapper.prepend($('.slider ul li:last-child').clone()).append($('.slider ul li:eq(1)').clone()).append($('.slider ul li:eq(2)').clone());

                var item 		= $('.slider ul li'),
                    nbrItem 	= item.length;

                item.each(function(i)
                {
                    $(this).addClass('item-' + i).attr('data-item', i)
                });

                $('.slider-nav a').click(function(e)
                {
                    e.preventDefault();

                    if(core.look.slider.flag === false)
                    {
                        core.look.slider.flag = true;
                        setTimeout(function(){core.look.slider.flag = false;}, 700);

                        if($(this).hasClass('previous'))
                        {
                            item.each(function(i)
                            {
                                var curIndex 	= $(this).attr('data-item');
                                var newIndex	= parseInt(curIndex) + 1;

                                if( newIndex > nbrItem - 1 )
                                {
                                    newIndex = 0;
                                }

                                $(this).removeClass().addClass('item-' + newIndex ).attr('data-item', newIndex)

                            });
                        };

                        if($(this).hasClass('next'))
                        {
                            item.each(function(i)
                            {
                                var curIndex 	= $(this).attr('data-item');
                                var newIndex	= parseInt(curIndex) - 1;

                                if( newIndex < 0 )
                                {
                                    newIndex = nbrItem - 1;
                                }

                                $(this).removeClass().addClass('item-' + newIndex ).attr('data-item', newIndex)

                            });
                        }
                    }
                });
            }


        },

        buildMobile : function()
        {

            $('.slider ul, .slider-nav').remove();
            var nbrItem = core.look.slider.table.length;

            var template = '<div class="flexslider"><ul class="slides">';

            for (s = 0; s < nbrItem; s++)
            {
                template += '<li><img src="' + core.look.slider.table[s] + '"/></li>'
            }

            template += '</ul></div>'

            $('.slider .look-text').after(template);

            if(core.android) {
                $('.flexslider').flexslider({
                    animation : 'slide',
                    slideshowSpeed: 4000,
                    pauseOnHover : false,
                    animationLoop : true,
                    slideshow: true,
                    directionNav: false,
                    touch: true
                });
            } else {
                $('.flexslider').flexslider({
                    animation : 'slide',
                    slideshowSpeed: 4000,
                    pauseOnHover : false,
                    animationLoop : true,
                    slideshow: true,
                    directionNav: true,
                    touch: false
                });
            }

        }
    }

}
core.search =
{
    currentColor    : null,

    init : function()
    {

        var subFooter = $('#sub-footer').height();
        var footer = $('#footer').height();
        var layoutH = subFooter + footer;

        $(window).resize(function()
        {
            var _H = $(window).height();
            var dif = _H - layoutH;

            if($('#content').height() < dif) $('#content').css({'height':dif});

        }).trigger('resize');

        var link = $('.search-wrapper a');

        link.each(function()
        {
            var thisColor = $(this).attr('data-color');
            $(this).css({'color': '#' + thisColor});

        }).hover(function()
        {
            $(this).css({'color':'#000'});
        }).mouseleave(function()
        {
            var thisColor = $(this).attr('data-color');
            $(this).css({'color': '#' + thisColor});
        });

        core.loader.close();

    }

}
core.result =
{
    page 	: 1,
    tag : 0,
    init : function()
    {
        if(!core.mobile)
        {
            var tiles = $('#tiles li');
            var options = {
                autoResize : true,
                offset : 20,
                container: $('#tiles')
            };

            $('img').load(function()
            {
                tiles.wookmark(options);

                core.result.resize();

            });

            $(window).resize(function()
            {
                core.result.resize();
            });
        }

        $('#more-tiles').click(function(e)
        {
            e.preventDefault();

            core.result.tag = $(this).attr('data-tag');
            core.result.page += 1;
            var tilesRoute = Routing.generate('diorBackstageFrontBundle_tag_show', { '_locale' : core._locale, '_platform' : core._platform, 'tag':core.result.tag ,  'page': core.result.page });

            var label = $(this).html();

            if(core.ie === false)
            {
                $(this).html('<div id="loading-article"></div>');
                var cl = new CanvasLoader('loading-article');
                cl.setColor('#7d7d7d'); // default is '#000000'
                cl.setShape('spiral'); // default is 'oval'
                cl.setDiameter(15);
                cl.show();
            };

            var req = $.ajax(
                {
                    url         : tilesRoute,
                    dataType    : 'json'
                });

            req.success(function(data)
            {
                if( data.next === null)
                {
                    $('#more-tiles').hide();
                }

                tiles.wookmarkClear();

                $('#tiles').append(data.content);

                var options = {
                    autoResize : true,
                    offset : 20,
                    container: $('#tiles')
                };

                tiles = $('#tiles li');

                core.ajaxify();


                $('#tiles img').load(function()
                {
                    tiles.wookmark(options);
                    $('#more-tiles').html(label)
                    core.result.resize();
                })
            });
        });

        core.loader.close();

    },

    resize : function()
    {
        core.home.contentW = $(window).width();
        core.home.contentH = $('#page-content').height();

        if($("#content[data-controller=result]").length)
        {
            var pos = $('#tiles li:first-child').offset();
            var left = pos.left;

            var height = $('#tiles').height();
            $('#result-wrapper').css({'height':height + 150});


            $('.search-resume').css({'margin-left':left});
        }

    }
}
    /* Modernizr 2.8.2 (Custom Build) | MIT & BSD
     * Build: http://modernizr.com/download/#-opacity-csstransitions-video-touch-mq-cssclasses-prefixed-teststyles-testprop-testallprops-prefixes-domprefixes
     */
;window.Modernizr=function(a,b,c){function A(a){j.cssText=a}function B(a,b){return A(m.join(a+";")+(b||""))}function C(a,b){return typeof a===b}function D(a,b){return!!~(""+a).indexOf(b)}function E(a,b){for(var d in a){var e=a[d];if(!D(e,"-")&&j[e]!==c)return b=="pfx"?e:!0}return!1}function F(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:C(f,"function")?f.bind(d||b):f}return!1}function G(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+o.join(d+" ")+d).split(" ");return C(b,"string")||C(b,"undefined")?E(e,b):(e=(a+" "+p.join(d+" ")+d).split(" "),F(e,b,c))}var d="2.8.2",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k,l={}.toString,m=" -webkit- -moz- -o- -ms- ".split(" "),n="Webkit Moz O ms",o=n.split(" "),p=n.toLowerCase().split(" "),q={},r={},s={},t=[],u=t.slice,v,w=function(a,c,d,e){var f,i,j,k,l=b.createElement("div"),m=b.body,n=m||b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:h+(d+1),l.appendChild(j);return f=["&#173;",'<style id="s',h,'">',a,"</style>"].join(""),l.id=h,(m?l:n).innerHTML+=f,n.appendChild(l),m||(n.style.background="",n.style.overflow="hidden",k=g.style.overflow,g.style.overflow="hidden",g.appendChild(n)),i=c(l,a),m?l.parentNode.removeChild(l):(n.parentNode.removeChild(n),g.style.overflow=k),!!i},x=function(b){var c=a.matchMedia||a.msMatchMedia;if(c)return c(b)&&c(b).matches||!1;var d;return w("@media "+b+" { #"+h+" { position: absolute; } }",function(b){d=(a.getComputedStyle?getComputedStyle(b,null):b.currentStyle)["position"]=="absolute"}),d},y={}.hasOwnProperty,z;!C(y,"undefined")&&!C(y.call,"undefined")?z=function(a,b){return y.call(a,b)}:z=function(a,b){return b in a&&C(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=u.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(u.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(u.call(arguments)))};return e}),q.touch=function(){var c;return"ontouchstart"in a||a.DocumentTouch&&b instanceof DocumentTouch?c=!0:w(["@media (",m.join("touch-enabled),("),h,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(a){c=a.offsetTop===9}),c},q.opacity=function(){return B("opacity:.55"),/^0.55$/.test(j.opacity)},q.csstransitions=function(){return G("transition")},q.video=function(){var a=b.createElement("video"),c=!1;try{if(c=!!a.canPlayType)c=new Boolean(c),c.ogg=a.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),c.h264=a.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),c.webm=a.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,"")}catch(d){}return c};for(var H in q)z(q,H)&&(v=H.toLowerCase(),e[v]=q[H](),t.push((e[v]?"":"no-")+v));return e.addTest=function(a,b){if(typeof a=="object")for(var d in a)z(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b}return e},A(""),i=k=null,e._version=d,e._prefixes=m,e._domPrefixes=p,e._cssomPrefixes=o,e.mq=x,e.testProp=function(a){return E([a])},e.testAllProps=G,e.testStyles=w,e.prefixed=function(a,b,c){return b?G(a,b,c):G(a,"pfx")},g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+t.join(" "):""),e}(this,this.document);
/*!
 * jQuery Cookie Plugin v1.4.0
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 */
(function (factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD
        define(['jquery'], factory);
    } else if (typeof exports === 'object') {
        // CommonJS
        factory(require('jquery'));
    } else {
        // Browser globals
        factory(jQuery);
    }
}(function ($) {

    var pluses = /\+/g;

    function encode(s) {
        return config.raw ? s : encodeURIComponent(s);
    }

    function decode(s) {
        return config.raw ? s : decodeURIComponent(s);
    }

    function stringifyCookieValue(value) {
        return encode(config.json ? JSON.stringify(value) : String(value));
    }

    function parseCookieValue(s) {
        if (s.indexOf('"') === 0) {
            // This is a quoted cookie as according to RFC2068, unescape...
            s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
        }

        try {
            // Replace server-side written pluses with spaces.
            // If we can't decode the cookie, ignore it, it's unusable.
            // If we can't parse the cookie, ignore it, it's unusable.
            s = decodeURIComponent(s.replace(pluses, ' '));
            return config.json ? JSON.parse(s) : s;
        } catch(e) {}
    }

    function read(s, converter) {
        var value = config.raw ? s : parseCookieValue(s);
        return $.isFunction(converter) ? converter(value) : value;
    }

    var config = $.cookie = function (key, value, options) {

        // Write

        if (value !== undefined && !$.isFunction(value)) {
            options = $.extend({}, config.defaults, options);

            if (typeof options.expires === 'number') {
                var days = options.expires, t = options.expires = new Date();
                t.setTime(+t + days * 864e+5);
            }

            return (document.cookie = [
                encode(key), '=', stringifyCookieValue(value),
                options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
                options.path    ? '; path=' + options.path : '',
                options.domain  ? '; domain=' + options.domain : '',
                options.secure  ? '; secure' : ''
            ].join(''));
        }

        // Read

        var result = key ? undefined : {};

        // To prevent the for loop in the first place assign an empty array
        // in case there are no cookies at all. Also prevents odd result when
        // calling $.cookie().
        var cookies = document.cookie ? document.cookie.split('; ') : [];

        for (var i = 0, l = cookies.length; i < l; i++) {
            var parts = cookies[i].split('=');
            var name = decode(parts.shift());
            var cookie = parts.join('=');

            if (key && key === name) {
                // If second argument (value) is a function it's a converter...
                result = read(cookie, value);
                break;
            }

            // Prevent storing a cookie that we couldn't decode.
            if (!key && (cookie = read(cookie)) !== undefined) {
                result[name] = cookie;
            }
        }

        return result;
    };

    config.defaults = {};

    $.removeCookie = function (key, options) {
        if ($.cookie(key) === undefined) {
            return false;
        }

        // Must not alter options, thus extending a fresh object...
        $.cookie(key, '', $.extend({}, options, { expires: -1 }));
        return !$.cookie(key);
    };

}));

(function( modules ) {

    modules.header = {
        $page: null,
        page: '',
        transformCSS: '',

        useTransform: false,
        cookieOptions: {expires: 15, path: '/'},

        init : function() {
            //DIORCOM: #mainScroller
            // -> override by Backstage, etc...
            modules.header.$page = $('#content');
            modules.header.page = $('#wrapper').data('page');

            modules.header.transformCSS = core.hyphenate( Modernizr.prefixed('transform') );

            // COOKIE: don't set defaults (minisites could use cookie too)
            // - use in basket
            // - advantage layer use specific cookie (specific expires)
            modules.header.cookieOptions.domain = window.location.host.substring(window.location.host.lastIndexOf(".", window.location.host.lastIndexOf(".") - 1) + 1);
            modules.header.cookieOptions.path = '/';
            modules.header.cookieOptions.expires = 15;

            // MINISITES: navLess case
            if ($('body').hasClass('navLess')) {
                modules.header.topLayer.paddingTop = parseInt($('#headerBar').outerHeight(true));
            } else if (modules.header.$page.hasClass('topbottom') && !core.ie6) {
                modules.header.topLayer.paddingTop = parseInt($('#headerBar').outerHeight(true)) + parseInt($('#main-nav').outerHeight(true));
                modules.header.$page.css('padding-top', modules.header.topLayer.paddingTop+'px');
            }

            // USER IS LOGGED?
            // -> hide/show the 'deconnection' button
            // -> set 'My Acount' link (if connected, no rollover, link to account page)
            var _connected = $.cookie('global_isauthenticated');

            if (_connected && _connected!=undefined) {
                $('#logout-trigger').show();
                $('#user-account-link > a').removeAttr('data-targetroll');
            } /*else {
             $('#user-account-link > a').attr('href', 'javascript:void(0);');
             }*/

            var _cartItemCount = $.cookie('CartItemsCount');
            modules.header.basket.updateTotalCount(_cartItemCount);

            modules.header.topLayer.init();
            modules.header.rolls.init();
            if (!$('body').hasClass('navLess')) modules.header.topMenu.init();

            //modules.header.account.init();
            //modules.header.basket.init();
            //modules.header.newsletter.init();
            //modules.header.search.init();

            modules.header.tracking.init();

            /* EXTRACT ALL LI <= 1024px: modules.header link on 2 lines */
            $('#topbar-nav').find('li').each( function() {
                modules.header.topLayer.linkArray[$(this).attr('id').replace('-trigger', '')] = $(this);
            });

            /* margin for hover label "Deconnexion" $('#logout-trigger a span').css('margin-left', (-$('#logout-trigger a span').width()-24)+'px' ); */

            $(window).resize( function(){
                modules.header.topLayer.onResize();
                modules.header.topMenu.onResize();
                if (! core.tablet) {
                    modules.header.rolls.onResize();
                }
            });

            $(window).scroll( function(){
                modules.header.topLayer.onScroll();
                modules.header.topMenu.onScroll();
                modules.header.rolls.onScroll();
            });
            if ( core.tablet ){
                core.scrollSignal.add(modules.header.topLayer.onScroll);
                core.scrollSignal.add(modules.header.topMenu.onScroll);
                core.scrollSignal.add(modules.header.rolls.onScroll);
            }
        },

        topLayer : {
            current:    null,
            activeMenu: $("#topbar-nav .advantages"),

            isOpened:   false,

            autoOpen: undefined,
            timesOpened: 0,
            maxTimesOpen: 2,

            timer:      null,
            linkArray:  {},
            TWO_LINES:  'two-lines',
            $el:        $('#headerTopLayer'),
            paddingTop: 94,
            giftWidth: 0,

            init: function() {
                // MINISITES: navLess case
                if ($('body').hasClass('navLess')) {
                    //modules.header.topLayer.paddingTop = 56;
                    $('#main-nav').remove();
                    modules.header.topLayer.paddingTop = parseInt($('#headerBar').outerHeight(true));
                } else /*if (modules.header.$page.hasClass('topbottom'))*/ {
                    // CONTEXT MINISITE
                    modules.header.$page.addClass('init-padding');
                    // QUICK FIX: prevent css transition
                    setTimeout( function() { modules.header.$page.addClass('use-padding'); }, 0);
                    modules.header.useTransform = false;

                    if (!core.ie6) modules.header.topLayer.paddingTop = parseInt($('#headerBar').outerHeight(true)) + parseInt($('#main-nav').outerHeight(true));
                    else modules.header.topLayer.paddingTop = 0;
                } /*else {
                 // CONTEXT DIOR.COM
                 modules.header.$page.addClass('init-transform');
                 // QUICK FIX: prevent css transition
                 setTimeout( function() { modules.header.$page.addClass('use-transform'); }, 0);
                 modules.header.useTransform = true;
                 }*/

                if (Modernizr.csstransitions) {
                    if (modules.header.useTransform) {
                        var _css = {};
                        _css[modules.header.transformCSS] = 'translate(0px, '+ modules.header.topLayer.paddingTop +'px)';
                        modules.header.$page.css( _css );
                    } else {
                        modules.header.$page.css('padding-top', modules.header.topLayer.paddingTop+'px');
                    }
                } else {
                    modules.header.$page.css('padding-top', modules.header.topLayer.paddingTop+'px');
                }

                // USER IS LOGGED?
                // -> hide/show the 'deconnection' button
                // -> set 'My Acount' link (if connected, no rollover, link to account page)
                var _connected = $.cookie('global_isauthenticated');

                if (_connected && _connected!=undefined) {
                    $('#logout-trigger').show();
                    $('#user-account-link > a').removeAttr('data-targetroll');
                } else {
                    $('#logout-trigger').hide();
                    $('#user-account-link > a').attr('data-targetroll', 'accountRoll');
                }

                if ($("#advantagesContent").length>0) {

                    modules.header.topLayer.current = $("#advantagesContent");
                    modules.header.topLayer.mode = 'init';
                    modules.header.topLayer.vAlign();

                    // READ PARAMS
                    modules.header.topLayer.autoOpen = modules.header.topLayer.$el.data('auto-open');

                    if (modules.header.topLayer.autoOpen) {
                        modules.header.topLayer.maxTimesOpen = modules.header.topLayer.$el.data('capping');
                        // DEFAULT: 1 open every 15 days
                        if (!modules.header.topLayer.maxTimesOpen) {
                            modules.header.topLayer.maxTimesOpen = 1;
                        }

                        modules.header.topLayer.delay = parseInt( modules.header.topLayer.$el.data('delay') );
                        if (modules.header.topLayer.delay && header.delay>0) {
                            modules.header.topLayer.delay = header.delay * 1000;
                        } else {
                            modules.header.topLayer.delay = 5000;
                        }

                        //$.cookie.defaults.path = '/';

                        modules.header.topLayer.timesOpened = $.cookie('advantages_opened');

                        if (!modules.header.topLayer.timesOpened || modules.header.topLayer.timesOpened==undefined) {
                            modules.header.topLayer.timesOpened = 0;
                        }

                        if (modules.header.topLayer.timesOpened < modules.header.topLayer.maxTimesOpen) {
                            modules.header.topLayer.autoOpen = true;

                            $.cookie( 'advantages_opened', '1', modules.header.cookieOptions);
                        } else {
                            modules.header.topLayer.autoOpen = false;
                        }
                    }
                }
                if ($('#headerTopLayer .gift').length > 0 ) modules.header.topLayer.giftWidth = $('#headerTopLayer .gift').outerWidth(true);

                /* FIRST TIME OPEN */
                if (modules.header.topLayer.autoOpen) {
                    modules.header.topLayer.timer = setTimeout( modules.header.topLayer.close, 2500 );
                    modules.header.topLayer.open();
                }

                modules.header.topLayer.$el.on('mouseover', function() {
                    clearTimeout( modules.header.topLayer.timer );
                });

                $('#headerTopLayer .close').on('click', modules.header.topLayer.close);
                $(document).on('click', '#topbar a[data-targettoplayer]', function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    var newTopLayer = $('#' + $(this).data('targettoplayer'));
                    modules.header.topLayer.toggle(newTopLayer, $(this));
                } );




            },

            vAlign : function() {
                modules.header.topLayer.$el.find('.v-align').each(function(){
                    $(this).css({ 'margin-top': ($(this).parent().height() - $(this).height()) / 2});
                });

            },

            onResize: function() {

                var winWidth        = $(window).width(),
                    extraWidth          = $('#headerTopLayer .gift').length > 0 ? modules.header.topLayer.giftWidth  + 50 : 0,
                /* don't get outerWidth: margin-left cause wrong results! */
                    decorWidth          = $('#headerTopLayer .decor').width() + 26,
                    listWidthAvailable  = winWidth - decorWidth - extraWidth,
                    $list               = $('#advantagesContent .advantages-wrap li'),
                    length              = $list.length,
                    decorVisibleWidth   = decorWidth,
                    margL               = 0;

                var minWidth, maxWidth;
                if ( winWidth > 1024 ) {

                    if( winWidth < 1800 ) {
                        $('.header-top-layer').removeClass('wide');
                        decorVisibleWidth =  (1024 - extraWidth) / length,
                            margL = decorWidth - decorVisibleWidth ;
                    } else {
                        decorVisibleWidth = ( (1024 - extraWidth) / length) + (winWidth - (1800 -1)),
                            margL = decorWidth - decorVisibleWidth ;
                        if (margL  <= 0) {
                            $('.header-top-layer').addClass('wide');
                            margL = 0;
                        }
                    }

                    $('.header-top-layer').removeClass('tiny');

                    if (modules.header.topLayer.mode == modules.header.topLayer.TWO_LINES || modules.header.topLayer.mode == 'init' ) {
                        modules.header.topLayer.mode = '';
                        $('#topbar-nav').removeClass('two-lines');

                        $('#logout-trigger span').css('margin-left', 0);

                        $('#topbar-nav').empty()
                            .append( '<ul id="headerLinkFirstLine" class="header-links-line"></ul>' );

                        if (modules.header.topLayer.$addtoCart) {
                            $('#topbar-nav').append( modules.header.topLayer.$addtoCart );
                        }

                        $('#headerLinkFirstLine').append( modules.header.topLayer.linkArray.search, modules.header.topLayer.linkArray.gocart );

                        $('#headerLinkFirstLine').append( modules.header.topLayer.linkArray['user-account-link'] );
                        if (modules.header.topLayer.linkArray.logout) {
                            $('#headerLinkFirstLine').append( modules.header.topLayer.linkArray.logout );
                        }
                        if (modules.header.topLayer.linkArray.diva) {
                            $('#headerLinkFirstLine').append( modules.header.topLayer.linkArray.diva );
                        }
                        if (modules.header.topLayer.linkArray.exclusive) {
                            $('#headerLinkFirstLine').append( modules.header.topLayer.linkArray.exclusive );
                        }
                        $('#headerLinkFirstLine').append( modules.header.topLayer.linkArray.newsletter );

                        if (modules.header.topLayer.linkArray.advantages) {
                            $('#headerLinkFirstLine').append( modules.header.topLayer.linkArray.advantages );
                        }
                    }

                } else {

                    decorVisibleWidth =  ( winWidth - extraWidth ) / length,
                        margL = decorWidth - decorVisibleWidth ;
                }

                if( winWidth < 1200 ) {

                    if (modules.header.topLayer.mode != modules.header.topLayer.TWO_LINES ) {
                        modules.header.topLayer.mode = modules.header.topLayer.TWO_LINES;

                        $('.header-top-layer').addClass('tiny').removeClass('wide');

                        $('#topbar-nav').addClass('two-lines');

                        $('#topbar-nav').empty().append( '<ul id="headerLinkFirstLine" class="header-links-line"></ul> <ul id="headerLinkSecondLine" class="header-links-line"></ul>' );

                        if (modules.header.topLayer.$addtoCart) {
                            $('#topbar-nav').append( modules.header.topLayer.$addtoCart );
                        }

                        $('#headerLinkFirstLine').append( modules.header.topLayer.linkArray.search );

                        if (modules.header.topLayer.linkArray.diva) {
                            $('#headerLinkFirstLine').append( modules.header.topLayer.linkArray.diva );
                        }

                        if (modules.header.topLayer.linkArray.exclusive) {
                            $('#headerLinkFirstLine').append( modules.header.topLayer.linkArray.exclusive );
                        }

                        $('#headerLinkFirstLine').append( modules.header.topLayer.linkArray.newsletter );
                        if (modules.header.topLayer.linkArray.advantages) {
                            $('#headerLinkFirstLine').append( modules.header.topLayer.linkArray.advantages );
                        }

                        $('#headerLinkSecondLine').append( modules.header.topLayer.linkArray.search, modules.header.topLayer.linkArray.gocart, modules.header.topLayer.linkArray['user-account-link'] );
                        if (modules.header.topLayer.linkArray.logout) {
                            $('#headerLinkSecondLine').append( modules.header.topLayer.linkArray.logout );
                        }
                    }
                }

                $('#headerTopLayer .decor').css('margin-left', -margL+'px' );

                listWidthAvailable =  winWidth - decorVisibleWidth;

                if( extraWidth > 0 ) {

                    if( listWidthAvailable /3 >= 400) {
                        $('#headerTopLayer .gift').width(400);
                    }
                    else {
                        $('#headerTopLayer .gift').width(modules.header.topLayer.giftWidth);
                    }
                    $list.width(( 2/3 * listWidthAvailable )/3);
                } else {
                    $list.width(listWidthAvailable / length );
                }

                var _advList = $('.advantages-wrap li');
                if (_advList.length>0) {
                    /* -> reinit natural height */
                    _advList.height('auto');
                    /* FORCE MAX-HEIGHT ON EACH LI */
                    var _maxHeight = 0;
                    _advList.each( function() {
                        _maxHeight = Math.max( _maxHeight,  $(this).height() );
                    });
                    _advList.height( _maxHeight );
                }
                modules.header.topLayer.vAlign();

                if (core.ie6) {
                    $('#logout-trigger a').hover(function() {
                            $(this).find('span').show().css('visibility', 'visible');
                        },
                        function() {
                            $(this).find('span').hide().css('visibility', 'hidden');
                        });
                }

            },
            onScroll: function() {
                if (modules.header.topLayer.isOpened) {
                    modules.header.topLayer.close();
                }
            },
            open : function() {
                modules.header.topLayer.isOpened = true;
                var newHeight = parseInt(modules.header.topLayer.current.find('.container').outerHeight(true));

                if (Modernizr.csstransitions) {
                    modules.header.topLayer.current.height(newHeight);
                    if (modules.header.useTransform) {
                        var _css = {};
                        _css[modules.header.transformCSS] = 'translate(0px, '+ (newHeight + modules.header.topLayer.paddingTop) +'px)';
                        modules.header.$page.css( _css );
                    } else {
                        modules.header.$page.css('padding-top', (newHeight + modules.header.topLayer.paddingTop)+"px");
                    }
                } else {
                    modules.header.topLayer.$el.animate({height: newHeight});
                    modules.header.topLayer.current.animate({height: newHeight});
                    modules.header.$page.animate({ paddingTop: (newHeight + modules.header.topLayer.paddingTop)+"px" });
                }

                $('body').addClass( modules.header.topLayer.current.attr('id')+'Opened' );

                modules.header.topLayer.activeMenu.parent().addClass('active');

            },
            close : function() {
                modules.header.topLayer.isOpened  = false;
                if (Modernizr.csstransitions) {
                    modules.header.topLayer.current.height(0);

                    if (modules.header.useTransform) {
                        var _css = {};
                        _css[modules.header.transformCSS] = 'translate(0px, '+ modules.header.topLayer.paddingTop +'px)';
                        modules.header.$page.css( _css );
                    } else {
                        modules.header.$page.css('padding-top', modules.header.topLayer.paddingTop);
                    }
                } else {
                    modules.header.topLayer.$el.animate({height: 0});
                    modules.header.topLayer.current.animate({height: 0});
                    modules.header.$page.animate({ paddingTop: modules.header.topLayer.paddingTop+'px' });
                }

                $('body').removeClass( modules.header.topLayer.current.attr('id')+'Opened' );

                modules.header.topLayer.activeMenu.parent().removeClass('active');

                if(core.tablet) {
                    window.setTimeout(function() {
                        pages.Transverses.stickyFooter();
                    },800);
                }
            },
            toggle : function( newTopLayer, active ) {
                if( !modules.header.topLayer.current || newTopLayer.attr('id') != modules.header.topLayer.current.attr('id')) {
                    if (modules.header.topLayer.isOpened) {
                        modules.header.topLayer.close();
                    }
                    modules.header.topLayer.current    = newTopLayer;
                    modules.header.topLayer.activeMenu = active;

                    modules.header.topLayer.open();
                }
                else {
                    if (modules.header.topLayer.isOpened) {
                        modules.header.topLayer.close();
                    } else {
                        modules.header.topLayer.open();
                    }
                }
            }
        },

        rolls : {
            current:    null,
            activeMenu: null,
            isOpened:   false,
            timerOut: null,

            init: function() {

                if(! core.tablet ) {
                    $(document).on('mouseover', '#topbar a[data-targetroll], .header-roll',function(e){

                        e.preventDefault();
                        e.stopPropagation();

                        window.clearTimeout(modules.header.rolls.timerOut);
                        modules.header.rolls.timerOut = null;

                        var newRoll = null;
                        if ($(this).data('targetroll') && $(this).data('targetroll') != 'passwordRoll') newRoll = $('#' + $(this).data('targetroll'));
                        else if ($(this).hasClass('header-roll')) newRoll = $(this);
                        else return;

                        modules.header.rolls.toggle(newRoll, $(this));

                    });

                    $(document).on('mouseout', '#topbar a[data-targetroll], .header-roll',function(e){
                        if (modules.header.rolls.timerOut == null) {
                            modules.header.rolls.timerOut = window.setTimeout(function() {
                                if (modules.header.rolls.isOpened) {
                                    modules.header.rolls.close();
                                }
                            }, 500);
                        }
                    });
                } else {
                    $(document).on('click', '#topbar a[data-targetroll]',function(e){
                        e.preventDefault();
                        e.stopPropagation();
                        var newRoll = $('#' + $(this).data('targetroll'));
                        modules.header.rolls.toggle(newRoll, $(this));

                        /*modules.header.rolls.validForm();*/
                    });

                    $(document).on('click',function(e){
                        var target = $('.header-roll');
                        if(! (target.is(event.target))  && (target.has(event.target).length === 0) ){
                            if (modules.header.rolls.isOpened) {
                                modules.header.rolls.close();
                            }
                        }
                    });

                    var fullHeader = $('.js-header');

                    $(document).on('focusin', 'input, textarea', function() {
                        fullHeader.parent('#container').addClass('unfixed');
                    }).on('focusout', 'input, textarea', function () {
                        fullHeader.parent('#container').removeClass('unfixed');
                        if ( core.tablet ){
                            core.scrollSignal.add(modules.header.topLayer.onScroll);
                            core.scrollSignal.add(modules.header.topMenu.onScroll);
                            core.scrollSignal.add(modules.header.rolls.onScroll);
                        }
                    });

                }

                $(document).on('click', '#accountRoll a[data-targetroll], .header-roll',function(e){

                    /* NO PREVENT: keep content active (FORM!!!) */
                    if ($(this) == $(e.target) ) {
                        e.preventDefault();
                        e.stopPropagation();
                    }

                    window.clearTimeout(modules.header.rolls.timerOut);
                    modules.header.rolls.timerOut = null;

                    var newRoll = null;
                    /* preventDefault for menu link */
                    if ($(e.target).data('targetroll')!=undefined) {
                        e.preventDefault();
                        e.stopPropagation();
                        newRoll = $('#' + $(this).data('targetroll'));
                    }
                    else if ($(e.target).hasClass('header-roll')) {
                        e.preventDefault();
                        e.stopPropagation();
                        newRoll = $(this);
                    }
                    else return;

                    modules.header.rolls.toggle(newRoll, $(this));

                });

                $(document).on('click', '#cartRoll .next',function(e){
                    e.preventDefault();
                    e.stopPropagation();
                    modules.header.basket.scrollNext();
                } );
                $(document).on('click', '#cartRoll .prev',function(e){
                    e.preventDefault();
                    e.stopPropagation();
                    modules.header.basket.scrollPrev();
                } );

                $(document).on('click', '.close-roll',function(e){
                    e.preventDefault();
                    e.stopPropagation();
                    modules.header.rolls.close();
                    $(document.getElementById('newsletter-valid-pop')).hide();
                });

                /* INPUT VALUE RESET */
                $('.header-roll input[type=text]').each(function() {
                    $(this).on('focusin', function() {
                        $(this).val('');
                        if( $(this).hasClass('header-password') ) {
                            var newObject = document.createElement('input');
                            newObject.type = "password";
                            var oldObject = $(this)[0];
                            if(oldObject.size) newObject.size = oldObject.size;
                            if(oldObject.value) newObject.value = oldObject.value;
                            if(oldObject.name) newObject.name = oldObject.name;
                            if(oldObject.id) newObject.id = oldObject.id;
                            if(oldObject.className) newObject.className = oldObject.className;
                            oldObject.parentNode.replaceChild(newObject,oldObject);
                        }
                    });
                });
            },
            onResize: function() {

                if (modules.header.rolls.current != null){
                    modules.header.rolls.moveArrow();
                    modules.header.rolls.moveRollsTop();
                }
            },
            onScroll: function() {
                if (modules.header.rolls.isOpened && !$('.js-header').parent('#container').hasClass('unfixed')) {
                    modules.header.rolls.close();
                }
                modules.header.basket.scrollPosition = [];
                if( modules.header.basket.scrollContainer != null)
                    modules.header.basket.scrollContainer.scrollTop(0);
            },
            open : function() {
                /* if already open close hide arrow */
                if (!modules.header.rolls.isOpened) {
                    modules.header.rolls.current.parent().addClass('opened-rolls');
                }

                modules.header.rolls.isOpened = true;

                if (Modernizr.csstransitions) {
                    modules.header.rolls.current.addClass('open');
                } else {
                    var newHeight = parseInt(modules.header.rolls.current.children().first().outerHeight(true));

                    if (modules.header.rolls.current.attr('id')=="cartRoll" && core.ie) {
                        newHeight = 'auto';
                        modules.header.rolls.current.height( 'auto' );
                    } else {
                        modules.header.rolls.current.animate({height: newHeight});
                    }
                }

                if(! modules.header.rolls.current.hasClass('password-roll') ) modules.header.rolls.moveArrow();
                modules.header.rolls.moveRollsTop();
                modules.header.rolls.activeMenu.parent().addClass('active-roll');
            },
            close : function() {
                /* if already open close hide arrow */
                if (modules.header.rolls.isOpened) {
                    modules.header.rolls.current.parent().removeClass('opened-rolls');
                }

                modules.header.rolls.isOpened = false;

                if (Modernizr.csstransitions) {
                    modules.header.rolls.current.removeClass('open');
                } else {
                    modules.header.rolls.current.animate({height: 0});
                }
                modules.header.rolls.activeMenu.parent().removeClass('active-roll');
            },
            toggle : function( newRoll, active, params ) {
                if( modules.header.rolls.current != null && (newRoll.attr('id') != modules.header.rolls.current.attr('id') || !modules.header.rolls.isOpened)) {
                    if (modules.header.rolls.isOpened) {
                        modules.header.rolls.close();
                    }
                    modules.header.rolls.current    = newRoll;
                    modules.header.rolls.activeMenu = active;

                    /* IF CART: open only if carts not empty */
                    if (newRoll.attr('id')=="cartRoll") {
                        modules.header.basket.get( params );
                    } else {
                        modules.header.rolls.open();
                    }
                }
                else {
                    if (modules.header.rolls.current == null) {
                        modules.header.rolls.current    = newRoll;
                        modules.header.rolls.activeMenu = active;

                        /* IF CART: open only if carts not empty */
                        if (newRoll.attr('id')=="cartRoll") {
                            modules.header.basket.get( params );
                        } else {
                            modules.header.rolls.open();
                        }
                    }
                }

            },
            moveArrow : function() {
                var arrowWidth = modules.header.rolls.current.parent().find('.arrow-roll').outerWidth(true);
                var activeCenter = ($(window).width() - (modules.header.rolls.activeMenu.offset().left + (modules.header.rolls.activeMenu.outerWidth()*0.5))) - arrowWidth/2 ;
                modules.header.rolls.current.parent().find('.arrow-roll').css('right', activeCenter+'px');
            },
            moveRollsTop : function() {
                var winWidth    = $(window).width();

                if ( winWidth > 1024 ) {
                    if (modules.header.rolls.current != null)
                        modules.header.rolls.current.parent().css('top','100%');
                } else {
                    if( modules.header.rolls.activeMenu.offset().top < modules.header.topLayer.current.outerHeight(true) + 25)
                        modules.header.rolls.current.parent().css('top','35px');
                    else
                        modules.header.rolls.current.parent().css('top','100%');
                }
            }

        },

        topMenu : {
            current:    null,
            activeMenu: $(".wrapMainNav a.active"),
            isOpened:   false,
            $el:        null,
            overlay: null,
            timerLeave    : null,
            timeOut     : 500,

            init: function() {
                if ($(".header-top-menu .nav-content").length>0) {
                    modules.header.topMenu.current = $(".header-top-menu .nav-content:first");
                    modules.header.topMenu.$el = $('#headerTopMenu');

                    var _h = ($('html').hasClass('ie') && $('html').hasClass('lte6')) ? $(document.getElementById('wrapper')).height() : '100%',
                        _p = ($('html').hasClass('ie') && $('html').hasClass('lte6')) ? 'absolute' : 'fixed';

                    if (document.getElementById('content-overlay')==null) {
                        modules.header.topMenu.overlay = $('<div></div>')
                            .attr('id', 'content-overlay')
                            .css({
                                height: _h,
                                width: '100%'
                            }).appendTo('#wrapper');
                    } else {
                        modules.header.topMenu.overlay = $(document.getElementById('content-overlay'));
                    }

                    if (core.ie6) {
                        var left = parseInt($('.header-top-menu').offset().left);
                        $('.header-top-menu').css('margin-left','-'+left);
                    }

                    var column = [];
                    $('.header-top-menu .nav-content').each(function(i){

                        /* INPUT POSITION */
                        if($(this).hasClass('column-switch')) modules.header.topMenu.inputPosition($(this));

                        /* SET COLUMN HEIGHT */
                        $(this).find('.column').each(function(j){
                            if( column[i] == undefined || column[i] && column[i] < $(this).height()){
                                column[i] = $(this).height();
                            }
                        });

                        /*dynamic container height */
                        var $container = $(this).find('.container').first();
                        $container.find('.column:not(.last-line)').css('height', column[i]+'px');
                        var totalHeight = $container.find('.content').outerHeight(true);
                        $container.css('height',totalHeight+'px').attr('data-height', totalHeight);
                    });


                    if(!core.tablet) {
                        $(document).on('mouseover', '.wrapMainNav a[data-targettopmenu]',function(e){
                            e.preventDefault();
                            e.stopPropagation();
                            var $link = $(this);


                            window.clearTimeout(modules.header.topMenu.timerLeave);
                            var newTopLayer = $('#' + $link.data('targettopmenu'));
                            modules.header.topMenu.toggle(newTopLayer, $link);

                        } );
                        $(document).on('mouseleave', '#main-nav',function(e){
                            e.preventDefault();
                            e.stopPropagation();
                            modules.header.topMenu.timerLeave = window.setTimeout(function()
                            {
                                modules.header.topMenu.close();
                                modules.header.topMenu.$el.stop().animate({height: 0},300);
                                modules.header.topMenu.current.stop().animate({height: 0},300).fadeOut(50);
                                modules.header.topMenu.overlay.fadeOut(50);
                            }, 600);
                        });
                    }
                    else {
                        $(document).on('click', '.wrapMainNav a[data-targettopmenu]',function(e){

                            if (!modules.header.topMenu.isOpened || (modules.header.topMenu.isOpened && modules.header.topMenu.current.attr('id') != $(this).data('targettopmenu'))) {
                                e.preventDefault();
                                e.stopPropagation();
                                var $link = $(this);

                                modules.header.topMenu.timerOver = window.setTimeout(function()
                                {
                                    window.clearTimeout(modules.header.topMenu.timerOver);
                                    var newTopLayer = $('#' + $link.data('targettopmenu'));
                                    modules.header.topMenu.toggle(newTopLayer, $link);
                                }, 300);
                            }
                        });
                    }

                    /* MEDIAS ROLL */
                    $(document).on('mouseover', '.medias-roll a',function(e){
                        e.preventDefault();
                        var src = $(this).attr('data-img');
                        $(this).parents('.medias-roll').prev().find('img').attr('src', src);
                    });
                    $(document).on('mouseleave', '.medias-roll',function(){
                        var src = $(this).prev().find('img').attr('data-img');
                        $(this).prev().find('img').attr('src', src);
                    });
                }
            },

            onResize: function() {
                if (modules.header.topMenu.current != null) {
                    modules.header.topMenu.moveArrow();
                }
            },
            onScroll: function() {
                if (modules.header.topMenu.isOpened) {
                    modules.header.topMenu.close();
                    modules.header.topMenu.$el.stop().animate({height: 0},100);
                    modules.header.topMenu.current.stop().animate({height: 0},100).fadeOut(50);
                    modules.header.topMenu.overlay.fadeOut('slow');
                }
            },
            open : function() {
                /* if already open close hide arrow */
                if (!modules.header.topMenu.isOpened) {
                    modules.header.topMenu.current.parent().addClass('opened-topMenu');
                }

                modules.header.topMenu.isOpened = true;
                var newHeight = parseInt(modules.header.topMenu.current.children().first().data('height'));

                modules.header.topMenu.$el.stop().animate({height: newHeight},100);
                modules.header.topMenu.current.stop().delay(200).animate({height: newHeight},100).fadeIn(100);

                modules.header.topMenu.moveArrow();
                modules.header.topMenu.activeMenu.parent().addClass('active');
                modules.header.topMenu.overlay.fadeIn('slow');
            },
            close : function() {
                /* if already open close hide arrow */
                if (modules.header.topMenu.isOpened) {
                    modules.header.topMenu.current.parent().removeClass('opened-topMenu');
                }
                modules.header.topMenu.isOpened  = false;

                modules.header.topMenu.current.fadeOut(50);
                modules.header.topMenu.activeMenu.parent().removeClass('active');

            },
            toggle : function( newTopLayer, active ) {
                if( modules.header.topMenu.activeMenu.length>0 && newTopLayer.attr('id') != modules.header.topMenu.current.attr('id')) {
                    if (modules.header.topMenu.isOpened) {
                        modules.header.topMenu.close();
                    }
                }
                modules.header.topMenu.current    = newTopLayer;
                modules.header.topMenu.activeMenu = active;

                modules.header.topMenu.timerOver = window.setTimeout(function() {
                    window.clearTimeout(modules.header.topMenu.timerOver);
                    modules.header.topMenu.open();
                }, 300);
            },
            moveArrow : function() {
                var arrowWidth = modules.header.topMenu.current.parent().find('.arrow-topMenu').outerWidth(true),
                    activeCenter = 0;

                if ( modules.header.topMenu.activeMenu.length>0) {
                    activeCenter = ($(window).width() - (modules.header.topMenu.activeMenu.offset().left + (modules.header.topMenu.activeMenu.outerWidth()*0.5))) - arrowWidth*0.5;
                } else {
                    activeCenter = $(window).width()*0.5 - arrowWidth*0.5;
                }
                //modules.header.topMenu.current.parent().find('.arrow-topMenu').css('right', activeCenter+'px');
            },
            inputPosition: function($this) {
                var column      = $this.find('.column'),
                    inputLength = column.length;

                column.last().addClass('last-col');

                switch( inputLength ) {

                    case 5:
                        column.eq(2).addClass('last-col').after('<br />');
                        column.slice(-2).addClass('last-line');
                        break;
                    case 6:
                        column.eq(2).addClass('last-col').after('<br />');
                        column.slice(-3).addClass('last-line');
                        break;
                    case 7:
                        column.eq(3).addClass('last-col').after('<br />');
                        column.slice(-3).addClass('last-line');
                        break;
                    case 8:
                        column.eq(3).addClass('last-col').after('<br />');
                        column.slice(-4).addClass('last-line');
                        break;
                    case 9:
                        column.eq(2).addClass('last-col').after('<br />');
                        column.eq(5).addClass('last-col').after('<br />');
                        column.slice(-3).addClass('last-line');
                        break;
                    case 10:
                        column.eq(3).addClass('last-col').after('<br />');
                        column.eq(6).addClass('last-col').after('<br />');
                        column.slice(-4).addClass('last-line');
                        break;
                    case 11:
                        column.eq(3).addClass('last-col').after('<br />');
                        column.eq(7).addClass('last-col').after('<br />');
                        column.slice(-3).addClass('last-line');
                        break;
                    case 12:
                        column.eq(3).addClass('last-col').after('<br />');
                        column.eq(7).addClass('last-col').after('<br />');
                        column.slice(-4).addClass('last-line');
                        break;
                    default:
                        column.addClass('last-line');
                }
            }
        },

        account : {
            params: {},
            init: function() {
                if ( $('#user-account-link').length>0 ) {
                    /* L O S T   P A S S W O R D */
                    $(document).on('click','#passwordRoll .valid-form', function(e)
                    {
                        e.preventDefault();

                        if ( utils.FormValidator.validForm($('#passwordRoll form:first')) ) {

                            var emailVal = $('#passwordRoll').find("#email-header2").val();

                            $.ajax({
                                url: core.AjaxConfig.Account.HEADER_RESET_PASSWORD.url,
                                type: core.AjaxConfig.Account.HEADER_RESET_PASSWORD.method,
                                data: {email: emailVal},
                                success: function(response) {
                                    if (response.status=='ok') {
                                        $(document.getElementById('account-valid-pop')).show();
                                    } else {
                                        utils.FormValidator.errors( $('#passwordRoll form.password-form'), response );
                                    }
                                }
                            });
                        }

                        $("#passwordRoll .close-roll").on("click", function(e){
                            e.preventDefault();
                        });
                    });

                    $('#accountRoll .log-form .valid-form').on('click', function (e) {
                        e.preventDefault();
                        e.stopPropagation();
                        e.stopImmediatePropagation();

                        var $form = $(this).parents('.header-roll').find('.header-form');
                        if ( utils.FormValidator.validForm ($form) ) {
                            modules.header.tracking.account($(this));
                            modules.header.account.params = utils.FormValidator.getParams( $form );
                            modules.header.account.send();
                        }
                    });
                }
            },
            send: function() {
                $.ajax({
                    url: core.AjaxConfig.Account.LOGIN.url,
                    type: core.AjaxConfig.Account.LOGIN.method,
                    data: modules.header.newsletter.params,
                    success: function(response) {
                        if (response.status=='ok') {
                            window.location.href = $('#accountRoll form.header-form').attr('action');
                        } else {
                            utils.FormValidator.errors( $('#accountRoll form.header-form'), response );
                        }
                    }
                });
            },
            message: {
                timer: null,
                show: function( msg ) {
                    //clearTimeout( header.account.message.timer );

                    $('#passwordRoll .error-msg').html( msg ).show();

                    //header.account.message.timer = setTimeout( header.account.message.hide, 2500 );
                },
                hide: function() {
                    $('#passwordRoll .error-msg').hide();
                }
            }
        },

        newsletter : {
            params: {},
            init: function() {
                if ( $('#newsletterRoll').length>0 ) {

                    $('#newsletterRoll .valid-form').on('click', function (e) {
                        e.preventDefault();
                        var _this     = $(this);
                        var $form      =  _this.parents('form:first');

                        // utils.FormValidator
                        // - if $form hasn't ths class 'noSubmit': $form submit
                        if ( _this.hasClass('legal-trigger') ) {
                            $form.addClass('noSubmit');
                        }

                        if ( utils.FormValidator.validForm($form) ) {

                            modules.header.newsletter.params = utils.FormValidator.getParams( $form );

                            if ( _this.hasClass('legal-trigger') ) {
                                $(document.getElementById('legal-pop')).show();
                                $('#legal-pop .scroller').tinyscrollbar();

                                $(document.getElementById('legal-submit')).off('click').on('click', function(e) {
                                    e.preventDefault();
                                    if ($(document.getElementById('legal-accept')).is(':checked') ) {
                                        modules.header.tracking.newsletter(_this);
                                        modules.header.newsletter.send();
                                    } else {
                                        $('#legal-pop .alert').html( $(this).attr('data-error') );
                                        return false;
                                    }
                                });
                            } else {
                                modules.header.tracking.newsletter(_this);
                                modules.header.newsletter.send();
                            }
                        }
                    });
                }
            },
            send: function() {
                $.ajax({
                    url: core.AjaxConfig.Newsletter.url,
                    type : core.AjaxConfig.Newsletter.method,
                    data : modules.header.newsletter.params,
                    success : function( response ) {
                        if (response.status=='ok') {
                            $(document.getElementById('legal-pop')).hide();
                            $(document.getElementById('newsletter-valid-pop')).show();
                        } else {
                            $(document.getElementById('legal-pop')).hide();
                            utils.FormValidator.errors( $('#newsletterRoll form:first'), response );
                        }
                    }
                });
            }
        },

        basket : {
            $el: null,
            scrollItems: null,
            scrollContainer: null,
            scrollPosition: 0,
            scrollPositionArray: [],
            basketTotal: 0,
            currentCartItem: 0,
            prevButton: false,
            scrollItemsHeight: 0,

            /* itemsVisible dynamic */
            // ! NOT IN CSS: .scrollContainer & .container have static max-height
            defaultItemsVisible: 3,
            itemsVisible: 0,
            double: false,

            xhrPCD: null,
            xhrCDC: null,
            timeout: null,

            pcdSuccess: false,
            cdcSuccess: false,


            init: function() {
                if ($('#cartRoll').length>0) {
                    modules.header.basket.scrollContainer = $('#cartRoll .scrollContainer');
                    modules.header.basket.$el = $('#cartRoll');
                    // LOADER
                    if (core.ie === false) {
                        var cl = new CanvasLoader('basket-loader');
                        cl.setColor('#7d7d7d'); // default is '#000000'
                        cl.setShape('spiral'); // default is 'oval'
                        cl.show();
                    }

                    // L O C A L   T E S T S
                    // - set cart CDC
                    //$.cookie( core.AjaxConfig.Cart.CDC.COOKIE, '1', {path: '/'} );
                    // - set cart PCD
                    //$.cookie( core.AjaxConfig.Cart.PCD.COOKIE, 'gdskh', {path: '/'} );
                }
            },

            /* Open basket. If followind an 'addToCart', scroll to the last product added
             * @param sku String [optional]: if set, indicates the product that has just been added
             */
            get: function( sku ) {
                clearTimeout( modules.header.basket.timer );
                // REINIT
                modules.header.basket.scrollContainer.animate( {scrollTop: 0}, 0);
                modules.header.basket.currentCartItem = 0;
                modules.header.basket.scrollPosition = 0;
                modules.header.basket.scrollPositionArray = [];
                modules.header.basket.hideScrollArrow('previous');
                modules.header.basket.basketTotal = 0;

                modules.header.basket.$el.find('.pcd').hide();
                modules.header.basket.$el.find('.cdc').show();

                // NO DEFAULTS PARAMS: minisites could use cookie too
                //$.cookie.defaults.path = '/';
                // GET CART TOTAL
                var _cdcCart = $.cookie( core.AjaxConfig.Cart.CDC.COOKIE, Number ),
                    _pcdCart = $.cookie( core.AjaxConfig.Cart.PCD.COOKIE );


                //-----------------//
                // H E   D E B U G //
                //-----------------//
                //
                // FORCE VALUE FOR IE
                // He internal fix: subdomain with '_' aren't W3C compliant:
                // -> cookies won't be set
                if (window.location.href.indexOf("happyend-prep") > -1) {
                    // if on Gamme: only PCD cart
                    if ( document.location.href.indexOf('Gamme')!=-1) {
                        _pcdCart = 'jkjbkjbk';
                    }
                    // if on Collection: only CDC cart
                    else if ( document.location.href.indexOf('Collections')!=-1) {
                        _cdcCart = 5;
                    }

                    // else: both
                    else {
                        _cdcCart = 5;
                        _pcdCart = 'jkjbkjbk';
                    }
                }

                // if no-cdc class: no CDC cart
                if (modules.header.basket.$el.hasClass('no-cdc')){
                    _cdcCart = -1;
                }
                // if no-pcd class: no PCD cart
                if (modules.header.basket.$el.hasClass('no-pcd')){
                    _pcdCart = undefined;
                }

                //-----------------//
                // H E   D E B U G //
                //-----------------//


                // CHECK IF COOKIE EXISTS
                if ( (_cdcCart > 0 || _pcdCart != undefined) && modules.header.page != 'prehome') {

                    // OPEN CART
                    modules.header.rolls.open();
                    // if sku: cart opened from QuickBuy or AddToCart: auto close timer
                    if (sku) {
                        // - use header.rolls timer
                        modules.header.rolls.timerOut = window.setTimeout(function() {
                            if (modules.header.rolls.current.attr('id')=="cartRoll") modules.header.rolls.close();
                        }, 2500);
                    }

                    // DISPLAY LOADING
                    modules.header.basket.loading(true);

                    // DOUBLE: hide advantages
                    if (_cdcCart > 0 && _pcdCart != undefined) {
                        modules.header.basket.double = true;

                        $('#cartRoll').addClass('double');
                        $('#cartRoll .cart-ecommerce').hide();
                        // only 1 cart: we display the popin (if timeout, error displayed)
                    } else {
                        modules.header.basket.double = false;
                        $('#cartRoll').removeClass('double');

                        // single: hide avantages for CDC
                        if (_cdcCart > 0) {
                            $('#cartRoll .cart-ecommerce').hide();
                        } else {
                            $('#cartRoll .cart-ecommerce').show();
                            //$('#cartRoll .container').height( 520 + $('#cartRoll .cart-ecommerce').height() );
                        }
                    }

                    // IF SINGLE CART: itemsVisible is correct
                    // IF DOUBLE: the two universe titles fill space: itemsVisible -= 1 !
                    modules.header.basket.itemsVisible = modules.header.basket.defaultItemsVisible;
                    if (modules.header.basket.double) {
                        modules.header.basket.itemsVisible = modules.header.basket.itemsVisible - 1;
                    }

                    modules.header.basket.abort( true );
                    clearTimeout( modules.header.basket.timeout );
                    //modules.header.basket.timeout = setTimeout( modules.header.basket.abort, core.AjaxConfig.Cart.TIMEOUT_DELAY );

                    modules.header.basket.pcdSuccess = modules.header.basket.cdcSuccess = false;

                    if (_pcdCart != undefined) {
                        modules.header.basket.xhrPCD = $.ajax({
                            url : core.AjaxConfig.Cart.PCD.GET_BASKET.url,
                            type: core.AjaxConfig.Cart.PCD.GET_BASKET.method,

                            success : function(data) {
                                modules.header.basket.pcdSuccess = true;
                                modules.header.basket.xhrPCD = null;
                                modules.header.basket.render( data, 'pcd', sku );
                            },
                            error: function(data) {
                                modules.header.basket.pcdSuccess = true;
                                modules.header.basket.xhrPCD = null;
                            }
                        });
                    } else {
                        modules.header.basket.$el.find('.pcd').hide();
                    }

                    if (_cdcCart > 0) {
                        modules.header.basket.xhrCDC = $.ajax({
                            url : core.AjaxConfig.Cart.CDC.GET_BASKET.url,
                            type: core.AjaxConfig.Cart.CDC.GET_BASKET.method,

                            success : function(data) {
                                modules.header.basket.cdcSuccess = true;
                                modules.header.basket.xhrCDC = null;
                                modules.header.basket.render( data, 'cdc', sku );
                            },
                            error: function(data) {
                                modules.header.basket.cdcSuccess = true;
                                modules.header.basket.xhrCDC = null;
                            }
                        });
                    } else {
                        modules.header.basket.$el.find('.cdc').hide();
                    }



                }
            },
            abort: function( noError ) {
                if (modules.header.basket.xhrPCD) modules.header.basket.xhrPCD.abort();
                if (modules.header.basket.xhrCDC) modules.header.basket.xhrCDC.abort();

                // IF NO SUCCESS - display error
                if (!noError && !modules.header.basket.cdcSuccess && !modules.header.basket.pcdSuccess) {
                    modules.header.rolls.close();
                    modules.header.error.open();
                }
            },

            render: function( json, universe, sku ) {
                modules.header.basket.$el.find('.'+universe).show();

                var _tpl = '',
                    _locaQuantity = $('#cartRoll').data('loca-quantity'),
                    i = 0, l = json.basket.items.length, nofreeCount = 0;
                for (i=0; i<l; ++i) {
                    if( !json.basket.items[i].free ) {
                        _tpl += modules.header.basket.renderItem( i, json.basket.items[i], _locaQuantity );
                        modules.header.basket.basketTotal += 1;
                        nofreeCount +=1;

                    }
                }
                modules.header.basket.$el.find('.cart-title.'+universe+' i').html( nofreeCount );
                modules.header.basket.updateTotalCount(modules.header.basket.basketTotal);

                var _items = modules.header.basket.$el.find('.cart-items.'+universe);

                _items.empty().append( _tpl );
                modules.header.basket.$el.find('.cart-submit.'+universe+' .cart-subtotal--amount').html( json.basket.articlesSubTotalWithCurrency );

                // WS DELETE ITEM
                _items.find('a.item-remove').on('click', function() {
                    var _sku = $(this).data('sku');

                    // DISPLAY LOADING
                    modules.header.basket.loading(true);

                    var UNIVERSE = universe.toUpperCase();
                    $.ajax({
                        url : core.AjaxConfig.Cart[UNIVERSE].DELETE_ITEM.url,
                        type: core.AjaxConfig.Cart[UNIVERSE].DELETE_ITEM.method,
                        data: 'sku=' + _sku,
                        success : function(data) {
                            // RELOAD
                            modules.header.basket.get();
                        },
                        error: function(data) {
                            //console.log(data);
                        }
                    });
                });

                // AVANTAGES
                if ( json.conditions ) {
                    $('#cartRoll .cart-ecommerce > p').empty().append( json.conditions );
                }

                // GET ALL SCROLL ITEMS
                // update scroll
                modules.header.basket.updateScroller();

                // product just added?
                if (sku) {
                    // MATCH TARGET WITH .scrollItem
                    modules.header.basket.$el.find('.cart-item').each( function(i) {
                        if ($(this).data('sku') == sku ) {
                            // scroll to item
                            modules.header.basket.currentCartItem = i;
                            modules.header.basket.scrollPosition = $(this).offset().top;

                            modules.header.basket.scrollContainer.animate( {scrollTop: modules.header.basket.scrollPosition}, 0);
                            return false;
                        }
                    });
                }

                modules.header.basket.updateArrows();
                modules.header.basket.loading(false);
            },

            renderItem: function( i, json, locaQuantity ) {
                return '<div class="cart-item'+(i>0 ? ' scrollItem' : '')+'" data-sku="'+json.sku+'">\
                            <div class="container">\
                                <span class="visual"><img src="'+json.packshot+'" alt="" class="cart-item--picture"></span><!--\
                                --><div class="cart-item--infos">\
                                    <span class="item-infos item-infos--title">'+json.name+'</span>\
                                    <span class="item-infos item-infos--subtitle">'+json.title+'</span>\
                                    <span class="item-infos item-infos--variant">'+json.description+'</span>\
                                    <div class="item-infos--oneLine">\
                                        <span class="item-infos item-infos--quantity">'+locaQuantity+''+ json.quantity+'</span>\
                                        <span class="item-infos item-infos--price">'+json.subTotalWithCurrency+'</span>\
                                        <a href="javascript:void(0);" class="item-infos item-remove" data-sku="'+json.sku+'"></a>\
                                    </div>\
                                </div>\
                            </div>\
                        </div>';
            },

            scrollNext : function() {
                if ( modules.header.basket.currentCartItem == 0) {
                    modules.header.basket.scrollPositionArray[0] = 0;
                }
                if ( modules.header.basket.currentCartItem+1 < modules.header.basket.scrollItems.length ){

                    var extraOffset = $('.topbar').outerHeight(true) + parseInt($('.topbar').offset().top);
                    if ( modules.header.topLayer.isOpened){
                        extraOffset += modules.header.topLayer.current.outerHeight(true);
                    }
                    if ( modules.header.rolls.prevButton)
                        extraOffset += modules.header.rolls.current.find('.prev').outerHeight(true);

                    modules.header.basket.currentCartItem ++;
                    modules.header.basket.scrollPosition = parseInt(modules.header.basket.scrollPosition + modules.header.basket.scrollItems.eq(modules.header.basket.currentCartItem).offset().top - extraOffset);
                    modules.header.basket.scrollPositionArray[modules.header.basket.currentCartItem]= parseInt(modules.header.basket.scrollPosition);

                    modules.header.basket.scrollContainer.animate( {scrollTop: modules.header.basket.scrollPosition}, 350);

                    modules.header.basket.updateArrows();
                }
            },
            scrollPrev : function() {
                if ( modules.header.basket.currentCartItem-1 >= 0 ) {
                    modules.header.basket.currentCartItem --;
                    modules.header.basket.scrollPosition = modules.header.basket.scrollPositionArray[modules.header.basket.currentCartItem];

                    modules.header.basket.scrollContainer.animate( {scrollTop:modules.header.basket.scrollPosition }, 350);

                    modules.header.basket.updateArrows();
                }
            },
            allNextItemAreVisible: function () {
                return modules.header.basket.scrollContainer.outerHeight(true) >= modules.header.basket.scrollItemsHeight - modules.header.basket.scrollPosition  ? true : false;
            },
            allPrevItemAreVisible: function () {
                return modules.header.basket.scrollPosition > 0  ? true : false;
            },

            showScrollArrow : function ( arrow ) {

                if ( modules.header.rolls.current.find('.cart-item').length > modules.header.basket.itemsVisible ) {

                    if ( arrow === "next" ){
                        modules.header.rolls.current.find('.next').removeClass('hidden');
                    }
                    else {
                        modules.header.rolls.current.find('.prev').removeClass('hidden', function(){
                            modules.header.rolls.prevButton = true;
                        });
                    }
                }
            },
            hideScrollArrow : function ( arrow ) {
                if ( modules.header.rolls.current ) {
                    if ( arrow === "next" ){
                        modules.header.rolls.current.find('.next').addClass('hidden');
                    }
                    else {
                        modules.header.rolls.current.find('.prev').addClass('hidden', function() {
                            modules.header.rolls.prevButton = false;
                        });
                    }
                }
            },

            updateScroller: function() {
                modules.header.basket.scrollContainer.children().each(function(){
                    modules.header.basket.scrollItemsHeight += $(this).outerHeight(true);
                });
                modules.header.basket.scrollContainer.parent().find('.next,.prev').addClass('hidden');

                modules.header.basket.scrollItems = modules.header.basket.scrollContainer.find('.scrollItem');

                //modules.header.basket.showScrollArrow();
            },
            // UPDATE ARROWS VISIBILITY
            updateArrows: function() {
                //console.log('#updateArrows');
                //console.log( modules.header.basket.currentCartItem );
                //console.log( modules.header.basket.allPrevItemAreVisible() );
                //console.log( modules.header.basket.allNextItemAreVisible() );

                if (modules.header.basket.currentCartItem<1) {
                    modules.header.basket.hideScrollArrow('previous');
                } else {
                    modules.header.basket.showScrollArrow('previous');
                }

                // IF SINGLE CART: itemsVisible is correct
                // IF DOUBLE: the two universe titles fill space: itemsVisible -= 1 !
                if (modules.header.basket.scrollItems.length - modules.header.basket.currentCartItem < modules.header.basket.itemsVisible) {
                    modules.header.basket.hideScrollArrow('next');
                } else {
                    modules.header.basket.showScrollArrow('next');
                }
            },
            updateTotalCount: function( count ) {
                // Update total count
                if ($("#cart-total-preview").length>0 && count != undefined) {
                    $("#cart-total-preview").html("(" + count + ")");
                }
            },

            loading: function( bool ) {
                if (bool) {
                    // FORCE LOADING HIDE
                    // - prevent loading vertcical
                    // - not accurate (scroller real height when ajax done)
                    // $('#cartRoll .basket-loader').height( $('#cartRoll .scrollContainer').height() );
                    $('#cartRoll .basket-loader').fadeIn();
                } else {
                    $('#cartRoll .basket-loader').fadeOut();
                }
            }
        },

        search : {

            init: function() {
                var $li      = $('#searchRoll li'),
                    l        = $li.length;

                if (l>0) {
                    var _top = $($li[0]).position().top;

                    $('#searchRoll li:first').append('<span class="hr">-</span>');

                    for( var i = 1; i < l; ++i ) {

                        var $current = $($li[i]);

                        // IF NEW LINE
                        if( $current.position().top > _top ) {
                            // FORCE NEW LINE
                            $current.addClass('new-line').append('<span class="hr">-</span>');
                            // REMOVE '-' AT THE END OF THE CURRENT LINE
                            $( $li[i-1] ).find('.hr').remove();
                            _top = $current.offset().top;
                        } else {
                            // ADD '-', AND CHECK FOR NEW LINE
                            $current.append('<span class="hr">-</span>');
                            if( $current.offset().top > _top ) {
                                $current.find('.hr').remove();
                                // FORCE NEW LINE ON NEXT ITEM
                                $( $li[i+1] ).addClass('new-line').append('<span class="hr">-</span>');
                                _top = $( $li[i+1] ).offset().top;
                                // - skip next item
                                ++i;
                            }
                        }
                    }
                    $('#searchRoll li:last').find('.hr').remove();
                }
            }

        },

        error : {

            timer: null,

            open: function() {

                $('#errorRoll').slideDown();
                $('#errorRoll p').css({ 'margin-top': ( - $('#errorRoll').height() - $('#errorRoll p').height()) * 0.5 });

                modules.header.error.timer = window.setTimeout(function() {
                    clearTimeout(modules.header.error.timer);
                    modules.header.error.close();
                }, 4000);
            },

            close: function() {
                $('#errorRoll').slideUp();
            }
        },

        tracking : {
            init: function() {
                /* Advantages */
                $('.js-header').on('click', '.advantages', function(){
                    var _this = $(this);
                    core.trackEvent('Header', 'Avantages Eco' );
                });

                /* MetaNav */
                $('.js-header').on('click', '.univers-content ul a', function(){
                    var _this = $(this),
                        section = _this.parents('.col').find('h4').text(),
                        label = _this.data('track-event-label');

                    if (label == "") label = 'Undefined';

                    core.trackEvent('Header - MetaNav', section + ' - ' + label);
                });

                /* Account */
                $('.js-header').on('click', '.js-create', function(){
                    modules.header.tracking.account($(this));
                });

                /* Cart */
                $('.js-header').on('click', '.js-cart-command--button', function(){
                    var _this = $(this),
                        label = _this.data('track-label');

                    if (label == "") label = 'Undefined';

                    core.trackEvent('Header', 'RollPanier - ' + label);
                });

                /* Search */
                $('.js-header').on('click', '.search-roll ul li a', function(){
                    var _this = $(this),
                        label = _this.data('track-label');

                    if (label == "") label = 'Undefined';

                    core.trackEvent('Header', 'Recherche - ' + label);
                });

                /* TopMenu */
                $('.js-header').on('click', '.header-top-menu a', function(){
                    var _this = $(this),
                        section = (_this.parents('.column').length > 0) ? _this.parents('.column').find('h4').text() : _this.parents('.insert').find('h4').text(),
                        label = _this.data('track-label');

                    if (label == "") label = 'Undefined';

                    core.trackEvent('TopMenu', section+' - ' + label );
                });
            },
            newsletter: function (submitBtn) {
                var label = 'Newsletter - ';
                var universe = []
                submitBtn.parents('.newsletter-roll').find(".universe :checkbox:checked").each(function(){
                    if ( $.inArray($(this).data('track-label'), universe) < 0 ){
                        universe.push( $(this).data('track-label') );
                    }
                });
                label = label + universe.join(' + ');
                core.trackEvent('Header',label );
            },
            account: function( submitBtn ) {
                core.trackEvent('Header', 'VotreCompte - ' +submitBtn.data('track-label') );
            }
        }
    };

})( window.modules = window.modules || {} );
