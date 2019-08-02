/*!
	Colorbox 1.6.4
	license: MIT
	http://www.jacklmoore.com/colorbox
*/
(function(t,e,i){function n(i,n,o){var r=e.createElement(i);return n&&(r.id=Z+n),o&&(r.style.cssText=o),t(r)}function o(){return i.innerHeight?i.innerHeight:t(i).height()}function r(e,i){i!==Object(i)&&(i={}),this.cache={},this.el=e,this.value=function(e){var n;return void 0===this.cache[e]&&(n=t(this.el).attr("data-cbox-"+e),void 0!==n?this.cache[e]=n:void 0!==i[e]?this.cache[e]=i[e]:void 0!==X[e]&&(this.cache[e]=X[e])),this.cache[e]},this.get=function(e){var i=this.value(e);return t.isFunction(i)?i.call(this.el,this):i}}function h(t){var e=W.length,i=(A+t)%e;return 0>i?e+i:i}function a(t,e){return Math.round((/%/.test(t)?("x"===e?E.width():o())/100:1)*parseInt(t,10))}function s(t,e){return t.get("photo")||t.get("photoRegex").test(e)}function l(t,e){return t.get("retinaUrl")&&i.devicePixelRatio>1?e.replace(t.get("photoRegex"),t.get("retinaSuffix")):e}function d(t){"contains"in x[0]&&!x[0].contains(t.target)&&t.target!==v[0]&&(t.stopPropagation(),x.focus())}function c(t){c.str!==t&&(x.add(v).removeClass(c.str).addClass(t),c.str=t)}function g(e){A=0,e&&e!==!1&&"nofollow"!==e?(W=t("."+te).filter(function(){var i=t.data(this,Y),n=new r(this,i);return n.get("rel")===e}),A=W.index(_.el),-1===A&&(W=W.add(_.el),A=W.length-1)):W=t(_.el)}function u(i){t(e).trigger(i),ae.triggerHandler(i)}function f(i){var o;if(!G){if(o=t(i).data(Y),_=new r(i,o),g(_.get("rel")),!U){U=$=!0,c(_.get("className")),x.css({visibility:"hidden",display:"block",opacity:""}),I=n(se,"LoadedContent","width:0; height:0; overflow:hidden; visibility:hidden"),b.css({width:"",height:""}).append(I),j=T.height()+k.height()+b.outerHeight(!0)-b.height(),D=C.width()+H.width()+b.outerWidth(!0)-b.width(),N=I.outerHeight(!0),z=I.outerWidth(!0);var h=a(_.get("initialWidth"),"x"),s=a(_.get("initialHeight"),"y"),l=_.get("maxWidth"),f=_.get("maxHeight");_.w=Math.max((l!==!1?Math.min(h,a(l,"x")):h)-z-D,0),_.h=Math.max((f!==!1?Math.min(s,a(f,"y")):s)-N-j,0),I.css({width:"",height:_.h}),J.position(),u(ee),_.get("onOpen"),O.add(F).hide(),x.focus(),_.get("trapFocus")&&e.addEventListener&&(e.addEventListener("focus",d,!0),ae.one(re,function(){e.removeEventListener("focus",d,!0)})),_.get("returnFocus")&&ae.one(re,function(){t(_.el).focus()})}var p=parseFloat(_.get("opacity"));v.css({opacity:p===p?p:"",cursor:_.get("overlayClose")?"pointer":"",visibility:"visible"}).show(),_.get("closeButton")?B.html(_.get("close")).appendTo(b):B.appendTo("<div/>"),w()}}function p(){x||(V=!1,E=t(i),x=n(se).attr({id:Y,"class":t.support.opacity===!1?Z+"IE":"",role:"dialog",tabindex:"-1"}).hide(),v=n(se,"Overlay").hide(),L=t([n(se,"LoadingOverlay")[0],n(se,"LoadingGraphic")[0]]),y=n(se,"Wrapper"),b=n(se,"Content").append(F=n(se,"Title"),R=n(se,"Current"),P=t('<button type="button"/>').attr({id:Z+"Previous"}),K=t('<button type="button"/>').attr({id:Z+"Next"}),S=t('<button type="button"/>').attr({id:Z+"Slideshow"}),L),B=t('<button type="button"/>').attr({id:Z+"Close"}),y.append(n(se).append(n(se,"TopLeft"),T=n(se,"TopCenter"),n(se,"TopRight")),n(se,!1,"clear:left").append(C=n(se,"MiddleLeft"),b,H=n(se,"MiddleRight")),n(se,!1,"clear:left").append(n(se,"BottomLeft"),k=n(se,"BottomCenter"),n(se,"BottomRight"))).find("div div").css({"float":"left"}),M=n(se,!1,"position:absolute; width:9999px; visibility:hidden; display:none; max-width:none;"),O=K.add(P).add(R).add(S)),e.body&&!x.parent().length&&t(e.body).append(v,x.append(y,M))}function m(){function i(t){t.which>1||t.shiftKey||t.altKey||t.metaKey||t.ctrlKey||(t.preventDefault(),f(this))}return x?(V||(V=!0,K.click(function(){J.next()}),P.click(function(){J.prev()}),B.click(function(){J.close()}),v.click(function(){_.get("overlayClose")&&J.close()}),t(e).bind("keydown."+Z,function(t){var e=t.keyCode;U&&_.get("escKey")&&27===e&&(t.preventDefault(),J.close()),U&&_.get("arrowKey")&&W[1]&&!t.altKey&&(37===e?(t.preventDefault(),P.click()):39===e&&(t.preventDefault(),K.click()))}),t.isFunction(t.fn.on)?t(e).on("click."+Z,"."+te,i):t("."+te).live("click."+Z,i)),!0):!1}function w(){var e,o,r,h=J.prep,d=++le;if($=!0,q=!1,u(he),u(ie),_.get("onLoad"),_.h=_.get("height")?a(_.get("height"),"y")-N-j:_.get("innerHeight")&&a(_.get("innerHeight"),"y"),_.w=_.get("width")?a(_.get("width"),"x")-z-D:_.get("innerWidth")&&a(_.get("innerWidth"),"x"),_.mw=_.w,_.mh=_.h,_.get("maxWidth")&&(_.mw=a(_.get("maxWidth"),"x")-z-D,_.mw=_.w&&_.w<_.mw?_.w:_.mw),_.get("maxHeight")&&(_.mh=a(_.get("maxHeight"),"y")-N-j,_.mh=_.h&&_.h<_.mh?_.h:_.mh),e=_.get("href"),Q=setTimeout(function(){L.show()},100),_.get("inline")){var c=t(e).eq(0);r=t("<div>").hide().insertBefore(c),ae.one(he,function(){r.replaceWith(c)}),h(c)}else _.get("iframe")?h(" "):_.get("html")?h(_.get("html")):s(_,e)?(e=l(_,e),q=_.get("createImg"),t(q).addClass(Z+"Photo").bind("error."+Z,function(){h(n(se,"Error").html(_.get("imgError")))}).one("load",function(){d===le&&setTimeout(function(){var e;_.get("retinaImage")&&i.devicePixelRatio>1&&(q.height=q.height/i.devicePixelRatio,q.width=q.width/i.devicePixelRatio),_.get("scalePhotos")&&(o=function(){q.height-=q.height*e,q.width-=q.width*e},_.mw&&q.width>_.mw&&(e=(q.width-_.mw)/q.width,o()),_.mh&&q.height>_.mh&&(e=(q.height-_.mh)/q.height,o())),_.h&&(q.style.marginTop=Math.max(_.mh-q.height,0)/2+"px"),W[1]&&(_.get("loop")||W[A+1])&&(q.style.cursor="pointer",t(q).bind("click."+Z,function(){J.next()})),q.style.width=q.width+"px",q.style.height=q.height+"px",h(q)},1)}),q.src=e):e&&M.load(e,_.get("data"),function(e,i){d===le&&h("error"===i?n(se,"Error").html(_.get("xhrError")):t(this).contents())})}var v,x,y,b,T,C,H,k,W,E,I,M,L,F,R,S,K,P,B,O,_,j,D,N,z,A,q,U,$,G,Q,J,V,X={html:!1,photo:!1,iframe:!1,inline:!1,transition:"elastic",speed:300,fadeOut:300,width:!1,initialWidth:"600",innerWidth:!1,maxWidth:!1,height:!1,initialHeight:"450",innerHeight:!1,maxHeight:!1,scalePhotos:!0,scrolling:!0,opacity:.9,preloading:!0,className:!1,overlayClose:!0,escKey:!0,arrowKey:!0,top:!1,bottom:!1,left:!1,right:!1,fixed:!1,data:void 0,closeButton:!0,fastIframe:!0,open:!1,reposition:!0,loop:!0,slideshow:!1,slideshowAuto:!0,slideshowSpeed:2500,slideshowStart:"start slideshow",slideshowStop:"stop slideshow",photoRegex:/\.(gif|png|jp(e|g|eg)|bmp|ico|webp|jxr|svg)((#|\?).*)?$/i,retinaImage:!1,retinaUrl:!1,retinaSuffix:"@2x.$1",current:"image {current} of {total}",previous:"previous",next:"next",close:"close",xhrError:"This content failed to load.",imgError:"This image failed to load.",returnFocus:!0,trapFocus:!0,onOpen:!1,onLoad:!1,onComplete:!1,onCleanup:!1,onClosed:!1,rel:function(){return this.rel},href:function(){return t(this).attr("href")},title:function(){return this.title},createImg:function(){var e=new Image,i=t(this).data("cbox-img-attrs");return"object"==typeof i&&t.each(i,function(t,i){e[t]=i}),e},createIframe:function(){var i=e.createElement("iframe"),n=t(this).data("cbox-iframe-attrs");return"object"==typeof n&&t.each(n,function(t,e){i[t]=e}),"frameBorder"in i&&(i.frameBorder=0),"allowTransparency"in i&&(i.allowTransparency="true"),i.name=(new Date).getTime(),i.allowFullscreen=!0,i}},Y="colorbox",Z="cbox",te=Z+"Element",ee=Z+"_open",ie=Z+"_load",ne=Z+"_complete",oe=Z+"_cleanup",re=Z+"_closed",he=Z+"_purge",ae=t("<a/>"),se="div",le=0,de={},ce=function(){function t(){clearTimeout(h)}function e(){(_.get("loop")||W[A+1])&&(t(),h=setTimeout(J.next,_.get("slideshowSpeed")))}function i(){S.html(_.get("slideshowStop")).unbind(s).one(s,n),ae.bind(ne,e).bind(ie,t),x.removeClass(a+"off").addClass(a+"on")}function n(){t(),ae.unbind(ne,e).unbind(ie,t),S.html(_.get("slideshowStart")).unbind(s).one(s,function(){J.next(),i()}),x.removeClass(a+"on").addClass(a+"off")}function o(){r=!1,S.hide(),t(),ae.unbind(ne,e).unbind(ie,t),x.removeClass(a+"off "+a+"on")}var r,h,a=Z+"Slideshow_",s="click."+Z;return function(){r?_.get("slideshow")||(ae.unbind(oe,o),o()):_.get("slideshow")&&W[1]&&(r=!0,ae.one(oe,o),_.get("slideshowAuto")?i():n(),S.show())}}();t[Y]||(t(p),J=t.fn[Y]=t[Y]=function(e,i){var n,o=this;return e=e||{},t.isFunction(o)&&(o=t("<a/>"),e.open=!0),o[0]?(p(),m()&&(i&&(e.onComplete=i),o.each(function(){var i=t.data(this,Y)||{};t.data(this,Y,t.extend(i,e))}).addClass(te),n=new r(o[0],e),n.get("open")&&f(o[0])),o):o},J.position=function(e,i){function n(){T[0].style.width=k[0].style.width=b[0].style.width=parseInt(x[0].style.width,10)-D+"px",b[0].style.height=C[0].style.height=H[0].style.height=parseInt(x[0].style.height,10)-j+"px"}var r,h,s,l=0,d=0,c=x.offset();if(E.unbind("resize."+Z),x.css({top:-9e4,left:-9e4}),h=E.scrollTop(),s=E.scrollLeft(),_.get("fixed")?(c.top-=h,c.left-=s,x.css({position:"fixed"})):(l=h,d=s,x.css({position:"absolute"})),d+=_.get("right")!==!1?Math.max(E.width()-_.w-z-D-a(_.get("right"),"x"),0):_.get("left")!==!1?a(_.get("left"),"x"):Math.round(Math.max(E.width()-_.w-z-D,0)/2),l+=_.get("bottom")!==!1?Math.max(o()-_.h-N-j-a(_.get("bottom"),"y"),0):_.get("top")!==!1?a(_.get("top"),"y"):Math.round(Math.max(o()-_.h-N-j,0)/2),x.css({top:c.top,left:c.left,visibility:"visible"}),y[0].style.width=y[0].style.height="9999px",r={width:_.w+z+D,height:_.h+N+j,top:l,left:d},e){var g=0;t.each(r,function(t){return r[t]!==de[t]?(g=e,void 0):void 0}),e=g}de=r,e||x.css(r),x.dequeue().animate(r,{duration:e||0,complete:function(){n(),$=!1,y[0].style.width=_.w+z+D+"px",y[0].style.height=_.h+N+j+"px",_.get("reposition")&&setTimeout(function(){E.bind("resize."+Z,J.position)},1),t.isFunction(i)&&i()},step:n})},J.resize=function(t){var e;U&&(t=t||{},t.width&&(_.w=a(t.width,"x")-z-D),t.innerWidth&&(_.w=a(t.innerWidth,"x")),I.css({width:_.w}),t.height&&(_.h=a(t.height,"y")-N-j),t.innerHeight&&(_.h=a(t.innerHeight,"y")),t.innerHeight||t.height||(e=I.scrollTop(),I.css({height:"auto"}),_.h=I.height()),I.css({height:_.h}),e&&I.scrollTop(e),J.position("none"===_.get("transition")?0:_.get("speed")))},J.prep=function(i){function o(){return _.w=_.w||I.width(),_.w=_.mw&&_.mw<_.w?_.mw:_.w,_.w}function a(){return _.h=_.h||I.height(),_.h=_.mh&&_.mh<_.h?_.mh:_.h,_.h}if(U){var d,g="none"===_.get("transition")?0:_.get("speed");I.remove(),I=n(se,"LoadedContent").append(i),I.hide().appendTo(M.show()).css({width:o(),overflow:_.get("scrolling")?"auto":"hidden"}).css({height:a()}).prependTo(b),M.hide(),t(q).css({"float":"none"}),c(_.get("className")),d=function(){function i(){t.support.opacity===!1&&x[0].style.removeAttribute("filter")}var n,o,a=W.length;U&&(o=function(){clearTimeout(Q),L.hide(),u(ne),_.get("onComplete")},F.html(_.get("title")).show(),I.show(),a>1?("string"==typeof _.get("current")&&R.html(_.get("current").replace("{current}",A+1).replace("{total}",a)).show(),K[_.get("loop")||a-1>A?"show":"hide"]().html(_.get("next")),P[_.get("loop")||A?"show":"hide"]().html(_.get("previous")),ce(),_.get("preloading")&&t.each([h(-1),h(1)],function(){var i,n=W[this],o=new r(n,t.data(n,Y)),h=o.get("href");h&&s(o,h)&&(h=l(o,h),i=e.createElement("img"),i.src=h)})):O.hide(),_.get("iframe")?(n=_.get("createIframe"),_.get("scrolling")||(n.scrolling="no"),t(n).attr({src:_.get("href"),"class":Z+"Iframe"}).one("load",o).appendTo(I),ae.one(he,function(){n.src="//about:blank"}),_.get("fastIframe")&&t(n).trigger("load")):o(),"fade"===_.get("transition")?x.fadeTo(g,1,i):i())},"fade"===_.get("transition")?x.fadeTo(g,0,function(){J.position(0,d)}):J.position(g,d)}},J.next=function(){!$&&W[1]&&(_.get("loop")||W[A+1])&&(A=h(1),f(W[A]))},J.prev=function(){!$&&W[1]&&(_.get("loop")||A)&&(A=h(-1),f(W[A]))},J.close=function(){U&&!G&&(G=!0,U=!1,u(oe),_.get("onCleanup"),E.unbind("."+Z),v.fadeTo(_.get("fadeOut")||0,0),x.stop().fadeTo(_.get("fadeOut")||0,0,function(){x.hide(),v.hide(),u(he),I.remove(),setTimeout(function(){G=!1,u(re),_.get("onClosed")},1)}))},J.remove=function(){x&&(x.stop(),t[Y].close(),x.stop(!1,!0).remove(),v.remove(),G=!1,x=null,t("."+te).removeData(Y).removeClass(te),t(e).unbind("click."+Z).unbind("keydown."+Z))},J.element=function(){return t(_.el)},J.settings=X)})(jQuery,document,window);

/*
	jQuery ColorBox language configuration
	language: Russian (ru)
	translated by: Marfa
        site: themarfa.name
*/
jQuery.extend(jQuery.colorbox.settings, {
	current: "{current} из {total}",
	previous: "&larr;",
	next: "&rarr;",
	close: "закрыть",
	xhrError: "Не удалось загрузить содержимое.",
	imgError: "Не удалось загрузить изображение.",
        slideshowStart: "начать слайд-шоу",
        slideshowStop: "остановить слайд-шоу"
});

$(document).ready(function(){

colorbox_css = function() {
	    $('#colorbox').css('z-index','9999');
	    $('#cboxOverlay').css('z-index','9999');
	    $('#cboxOverlay').css('opacity','0.3');
	    $('#cboxWrapper').css('z-index','9999');
}


colorbox_resize = function() {

var modal_height = $('#cboxContent').height();
var modal_width = $('#cboxContent').width();

var modalheight_modal = $('#cboxLoadedContent').height();
var modalwidth_modal = $('#cboxLoadedContent').width();

 if (modal_height != modalheight_modal  || modal_width != modalwidth_modal) {
    if (modalheight_modal !=0 && modal_height!= null) {
    		if (modalwidth_modal !=0 && modal_width!= null) {
   				$(this).colorbox.resize();
			}
		}
	}
}


colorbox_image = function(e) {

var gal = $('.imagebox').colorbox({
	 width: "auto",
	 height: "auto",
	 scrolling: true,
	 returnFocusOther: true,
	 reposition: false,
	 fixed: false,
	 maxHeight: "90%",
	 maxWidth: "90%",
	 innerHeight: "90%",
	 innerWidth: "90%",
	 opacity: 0.5,
	 overlayClose: true,
     onLoad: function () {
     },
     onComplete: function () {

     	colorbox_css();
      

        $(this).colorbox.resize();

		colorboxInterval = setInterval( function() {
               colorbox_resize()
			 }, 2000 );
        },

	 onClosed: function(){
			 clearInterval(colorboxtimeout);
			 $.colorbox.close();

	 },
    });

  return gal;
}



colorbox_modal = function(e) {

var colorboxInterval;
var cmswidget =  $(e).attr('data-cmswidget');
var template_modal = $(e).attr('data-template_modal');
var modal_link = $(e).attr('href');

$.ajax({
	url: modal_link,
	type: 'POST',
	data: { cmswidget: cmswidget, sc_ajax: '2', template_modal: template_modal},
	dataType: 'html',
	beforeSend: function()
	{
	},
	success: function(html) {
	if (html) {
	 /************************/
		    $("#modal_base_tmp").remove();

			$('#cmswidget-' + cmswidget).append('<div id="modal_base_tmp" style="display: none; clear: both;"><div id="modal_tmp" style="clear: both;">'+html+'</div></div>');
		    $("#modal_tmp").css( { "width" : "100%" });

			$.colorbox({
			 title: "",
			 width: "auto",
			 height: "auto",
			 scrolling: true,
			 returnFocusOther: true,
			 reposition: false,
			 fixed: false,
			 maxHeight: "90%",
			 maxWidth: "90%",
			 innerHeight: "90%",
			 innerWidth: "90%",
			 opacity: 0.5,
			 overlayClose: true,
			 inline: true,
		     href: '#modal_tmp',
			 onOpen: function(){
			 },
			 onLoad: function(){
			 },
		     onComplete: function () {

                colorbox_css();
                var container_width = $("#modal_tmp").width() - 20;
			   // $("#cboxLoadedContent .breadcrumb ").hide();
		        $("#cboxLoadedContent > div ").css( { "margin" : "0", "padding" : "0px" } );
		        $("#cboxLoadedContent #content").css( { "margin" : "0", "padding" : "0px" } );
		        $("#cboxLoadedContent .row").css( { "margin" : "0", "padding" : "0px" } );
		        $("#cboxLoadedContent .container").css( { "width" : container_width+'px', "padding" : "0px" } );


		        $(window).resize(function() {
		          //colorbox_resize();
		        });

				colorboxInterval = setInterval( function() {
		              // colorbox_resize();
				}, 2000 );

		     },

			 onClosed: function(){
				 clearInterval(colorboxInterval);
				  $("#modal_base_tmp").remove();
		  	 },

			 });
	/*************************/
	}

	}
 });

	return false;

}


var colorbox_loader = function (event) {
	$(document).off('click', '.imagebox', colorbox_loader);
	var gl = colorbox_image(this);
	$(this).click();
	$(document).on('click', '.imagebox', colorbox_loader);
	return false;
}

var colorbox_modal_loader = function (event) {
	colorbox_modal(this);
	return false;
}


//*******************************************
    if ($.isFunction($.fn.on)) {
        $(document).on('click', '.imagebox', colorbox_loader);
    } else {
        $('.imagebox').live('click', colorbox_loader);
    }

    if ($.isFunction($.fn.on)) {
        $(document).on('click', '.colorbox_modal', colorbox_modal_loader);
    } else {
        $('.colorbox_modal').live('click', colorbox_modal_loader);
    }
});

/*
 ### jQuery Star Rating Plugin v4.04 - 2013-03-04 ###
 * Home: http://www.fyneworks.com/jquery/star-rating/
 * Code: http://code.google.com/p/jquery-star-rating-plugin/
 *
        * Licensed under http://en.wikipedia.org/wiki/MIT_License
 ###
*/

/*# AVOID COLLISIONS #*/
;if(window.jQuery) (function($){
/*# AVOID COLLISIONS #*/

        // IE6 Background Image Fix
        if ((!$.support.opacity && !$.support.style)) try { document.execCommand("BackgroundImageCache", false, true)} catch(e) { };
        // Thanks to http://www.visualjquery.com/rating/rating_redux.html

        // plugin initialization
        $.fn.rating = function(options){
                if(this.length==0) return this; // quick fail

                // Handle API methods
                if(typeof arguments[0]=='string'){
                        // Perform API methods on individual elements
                        if(this.length>1){
                                var args = arguments;
                                return this.each(function(){
                                        $.fn.rating.apply($(this), args);
    });
                        };
                        // Invoke API method handler
                        $.fn.rating[arguments[0]].apply(this, $.makeArray(arguments).slice(1) || []);
                        // Quick exit...
                        return this;
                };

                // Initialize options for this call
                var options = $.extend(
                        {}/* new object */,
                        $.fn.rating.options/* default options */,
                        options || {} /* just-in-time options */
                );

                // Allow multiple controls with the same name by making each call unique
                $.fn.rating.calls++;

                // loop through each matched element
                this
                 .not('.star-rating-applied')
                        .addClass('star-rating-applied')
                .each(function(){

                        // Load control parameters / find context / etc
                        var control, input = $(this);
                        var eid = (this.name || 'unnamed-rating').replace(/\[|\]/g, '_').replace(/^\_+|\_+$/g,'');
                        var context = $(this.form || document.body);

                        // FIX: http://code.google.com/p/jquery-star-rating-plugin/issues/detail?id=23
                        var raters = context.data('rating');
                        if(!raters || raters.call!=$.fn.rating.calls) raters = { count:0, call:$.fn.rating.calls };
                        var rater = raters[eid];

                        // if rater is available, verify that the control still exists
                        if(rater) control = rater.data('rating');

                        if(rater && control)//{// save a byte!
                                // add star to control if rater is available and the same control still exists
                                control.count++;

                        //}// save a byte!
                        else{
                                // create new control if first star or control element was removed/replaced

                                // Initialize options for this rater
                                control = $.extend(
                                        {}/* new object */,
                                        options || {} /* current call options */,
                                        ($.metadata? input.metadata(): ($.meta?input.data():null)) || {}, /* metadata options */
                                        { count:0, stars: [], inputs: [] }
                                );

                                // increment number of rating controls
                                control.serial = raters.count++;

                                // create rating element
                                rater = $('<span class="star-rating-control"/>');
                                input.before(rater);

                                // Mark element for initialization (once all stars are ready)
                                rater.addClass('rating-to-be-drawn');

                                // Accept readOnly setting from 'disabled' property
                                if(input.attr('disabled') || input.hasClass('disabled')) control.readOnly = true;

                                // Accept required setting from class property (class='required')
                                if(input.hasClass('required')) control.required = true;

                                // Create 'cancel' button
                                rater.append(
                                        control.cancel = $('<div class="rating-cancel"><a title="' + control.cancel + '">' + control.cancelValue + '</a></div>')
                                        .mouseover(function(){
                                                $(this).rating('drain');
                                                $(this).addClass('star-rating-hover');
                                                //$(this).rating('focus');
                                        })
                                        .mouseout(function(){
                                                $(this).rating('draw');
                                                $(this).removeClass('star-rating-hover');
                                                //$(this).rating('blur');
                                        })
                                        .click(function(){
                                         $(this).rating('select');
                                        })
                                        .data('rating', control)
                                );

                        }; // first element of group

                        // insert rating star (thanks Jan Fanslau rev125 for blind support https://code.google.com/p/jquery-star-rating-plugin/issues/detail?id=125)
                        var star = $('<div role="text" aria-label="'+ this.title +'" class="star-rating rater-'+ control.serial +'"><a title="' + (this.title || this.value) + '">' + this.value + '</a></div>');
                        rater.append(star);

                        // inherit attributes from input element
                        if(this.id) star.attr('id', this.id);
                        if(this.className) star.addClass(this.className);

                        // Half-stars?
                        if(control.half) control.split = 2;

                        // Prepare division control
                        if(typeof control.split=='number' && control.split>0){
                                var stw = ($.fn.width ? star.width() : 0) || control.starWidth;
                                var spi = (control.count % control.split), spw = Math.floor(stw/control.split);
                                star
                                // restrict star's width and hide overflow (already in CSS)
                                .width(spw)
                                // move the star left by using a negative margin
                                // this is work-around to IE's stupid box model (position:relative doesn't work)
                                .find('a').css({ 'margin-left':'-'+ (spi*spw) +'px' })
                        };

                        // readOnly?
                        if(control.readOnly)//{ //save a byte!
                                // Mark star as readOnly so user can customize display
                                star.addClass('star-rating-readonly');
                        //}  //save a byte!
                        else//{ //save a byte!
                         // Enable hover css effects
                                star.addClass('star-rating-live')
                                 // Attach mouse events
                                        .mouseover(function(){
                                                $(this).rating('fill');
                                                $(this).rating('focus');
                                        })
                                        .mouseout(function(){
                                                $(this).rating('draw');
                                                $(this).rating('blur');
                                        })
                                        .click(function(){
                                                $(this).rating('select');
                                        })
                                ;
                        //}; //save a byte!

                        // set current selection
                        if(this.checked)        control.current = star;

                        // set current select for links
                        if(this.nodeName=="A"){
    if($(this).hasClass('selected'))
     control.current = star;
   };

                        // hide input element
                        input.hide();

                        // backward compatibility, form element to plugin
                        input.change(function(){
    $(this).rating('select');
   });

                        // attach reference to star to input element and vice-versa
                        star.data('rating.input', input.data('rating.star', star));

                        // store control information in form (or body when form not available)
                        control.stars[control.stars.length] = star[0];
                        control.inputs[control.inputs.length] = input[0];
                        control.rater = raters[eid] = rater;
                        control.context = context;

                        input.data('rating', control);
                        rater.data('rating', control);
                        star.data('rating', control);
                        context.data('rating', raters);
  }); // each element

                // Initialize ratings (first draw)
                $('.rating-to-be-drawn').rating('draw').removeClass('rating-to-be-drawn');

                return this; // don't break the chain...
        };

        /*--------------------------------------------------------*/

        /*
                ### Core functionality and API ###
        */
        $.extend($.fn.rating, {
                // Used to append a unique serial number to internal control ID
                // each time the plugin is invoked so same name controls can co-exist
                calls: 0,

                focus: function(){
                        var control = this.data('rating'); if(!control) return this;
                        if(!control.focus) return this; // quick fail if not required
                        // find data for event
                        var input = $(this).data('rating.input') || $( this.tagName=='INPUT' ? this : null );
   // focus handler, as requested by focusdigital.co.uk
                        if(control.focus) control.focus.apply(input[0], [input.val(), $('a', input.data('rating.star'))[0]]);
                }, // $.fn.rating.focus

                blur: function(){
                        var control = this.data('rating'); if(!control) return this;
                        if(!control.blur) return this; // quick fail if not required
                        // find data for event
                        var input = $(this).data('rating.input') || $( this.tagName=='INPUT' ? this : null );
   // blur handler, as requested by focusdigital.co.uk
                        if(control.blur) control.blur.apply(input[0], [input.val(), $('a', input.data('rating.star'))[0]]);
                }, // $.fn.rating.blur

                fill: function(){ // fill to the current mouse position.
                        var control = this.data('rating'); if(!control) return this;
                        // do not execute when control is in read-only mode
                        if(control.readOnly) return;
                        // Reset all stars and highlight them up to this element
                        this.rating('drain');
                        this.prevAll().andSelf().filter('.rater-'+ control.serial).addClass('star-rating-hover');
                },// $.fn.rating.fill

                drain: function() { // drain all the stars.
                        var control = this.data('rating'); if(!control) return this;
                        // do not execute when control is in read-only mode
                        if(control.readOnly) return;
                        // Reset all stars
                        control.rater.children().filter('.rater-'+ control.serial).removeClass('star-rating-on').removeClass('star-rating-hover');
                },// $.fn.rating.drain

                draw: function(){ // set value and stars to reflect current selection
                        var control = this.data('rating'); if(!control) return this;
                        // Clear all stars
                        this.rating('drain');
                        // Set control value
                        if(control.current){
                                control.current.data('rating.input').attr('checked','checked').prop('checked',true);
                                control.current.prevAll().andSelf().filter('.rater-'+ control.serial).addClass('star-rating-on');
                        }
                        else
                         $(control.inputs).removeAttr('checked');
                        // Show/hide 'cancel' button
                        control.cancel[control.readOnly || control.required?'hide':'show']();
                        // Add/remove read-only classes to remove hand pointer
                        this.siblings()[control.readOnly?'addClass':'removeClass']('star-rating-readonly');
                },// $.fn.rating.draw





                select: function(value,wantCallBack){ // select a value
                        var control = this.data('rating'); if(!control) return this;
                        // do not execute when control is in read-only mode
                        if(control.readOnly) return;
                        // clear selection
                        control.current = null;
                        // programmatically (based on user input)
                        if(typeof value!='undefined' || this.length>1){
                         // select by index (0 based)
                                if(typeof value=='number')
                         return $(control.stars[value]).rating('select',undefined,wantCallBack);
                                // select by literal value (must be passed as a string
                                if(typeof value=='string'){
                                        //return
                                        $.each(control.stars, function(){
                                        //console.log($(this).data('rating.input'), $(this).data('rating.input').val(), value, $(this).data('rating.input').val()==value?'BINGO!':'');
                                                if($(this).data('rating.input').val()==value) $(this).rating('select',undefined,wantCallBack);
                                        });
                                        // don't break the chain
                        return this;
                                };
                        }
                        else{
                                control.current = this[0].tagName=='INPUT' ?
                                 this.data('rating.star') :
                                        (this.is('.rater-'+ control.serial) ? this : null);
                        };
                        // Update rating control state
                        this.data('rating', control);
                        // Update display
                        this.rating('draw');
                        // find data for event
                        var input = $( control.current ? control.current.data('rating.input') : null );
                        // change selection - required since 1.9, see http://code.google.com/p/jquery-star-rating-plugin/issues/detail?id=123
                        if(input.length) input.attr('checked','checked')[0].checked=true;
                        // click callback, as requested here: http://plugins.jquery.com/node/1655
                        if((wantCallBack ||wantCallBack == undefined) && control.callback) control.callback.apply(input[0], [input.val(), $('a', control.current)[0]]);// callback event
                        // don't break the chain
                        return this;
  },// $.fn.rating.select





                readOnly: function(toggle, disable){ // make the control read-only (still submits value)
                        var control = this.data('rating'); if(!control) return this;
                        // setread-only status
                        control.readOnly = toggle || toggle==undefined ? true : false;
                        // enable/disable control value submission
                        if(disable) $(control.inputs).attr("disabled", "disabled");
                        else                            $(control.inputs).removeAttr("disabled");
                        // Update rating control state
                        this.data('rating', control);
                        // Update display
                        this.rating('draw');
                },// $.fn.rating.readOnly

                disable: function(){ // make read-only and never submit value
                        this.rating('readOnly', true, true);
                },// $.fn.rating.disable

                enable: function(){ // make read/write and submit value
                        this.rating('readOnly', false, false);
                }// $.fn.rating.select

 });

        /*--------------------------------------------------------*/

        /*
                ### Default Settings ###
                eg.: You can override default control like this:
                $.fn.rating.options.cancel = 'Clear';
        */
        $.fn.rating.options = { //$.extend($.fn.rating, { options: {
                        cancel: 'Cancel Rating',   // advisory title for the 'cancel' link
                        cancelValue: '',           // value to submit when user click the 'cancel' link
                        split: 0,                  // split the star into how many parts?

                        // Width of star image in case the plugin can't work it out. This can happen if
                        // the jQuery.dimensions plugin is not available OR the image is hidden at installation
                        starWidth: 16//,

                        //NB.: These don't need to be pre-defined (can be undefined/null) so let's save some code!
                        //half:     false,         // just a shortcut to control.split = 2
                        //required: false,         // disables the 'cancel' button so user can only select one of the specified values
                        //readOnly: false,         // disable rating plugin interaction/ values cannot be changed
                        //focus:    function(){},  // executed when stars are focused
                        //blur:     function(){},  // executed when stars are focused
                        //callback: function(){},  // executed when a star is clicked
 }; //} });

        /*--------------------------------------------------------*/


          // auto-initialize plugin
                                $(function(){
                                 $('input[type=radio].star').rating();
                                });


/*# AVOID COLLISIONS #*/
})(jQuery);
/*# AVOID COLLISIONS #*/



// http://opencartadmin.com © 2011-2017 All Rights Reserved
// Distribution, without the author's consent is prohibited
// Commercial license
//************************************************
comments_vote = function (thisis) {
    var acr = load_acr(thisis);
    var acc = load_acc(thisis);

    var prefix = acr['prefix'];
    var mark = acr['mark'];


    if (typeof (acr['exec']) == "undefined" || acr['exec'] == '') {
        exec = '';
    } else {
        exec = acr['exec'];
    }

    var ascp_widgets_position_var = acr['ascp_widgets_position'];

    var text_voted_blog_plus_var = acc['text_voted_blog_plus'];
    var text_voted_blog_minus_var = acc['text_voted_blog_minus'];
    var text_all_var = acc['text_all'];

    var comment_id = $('#' + $(thisis).parents().prev('.container_comment_vars:first').prop('id')).find('.comment_id:first').text();
    var delta = 0;

    if ($(thisis).hasClass('blog_plus')) {
        delta = '1';
    } else {
        delta = '-1';
    }

    if ($(thisis).hasClass('loading')) {} else {
        $(thisis).addClass('loading');

        $.ajax({
            type: 'POST',
            url: 'index.php?route=record/treecomments/comments_vote&ascp_widgets_position=' + ascp_widgets_position_var + '&mark=' + mark,
            dataType: 'json',
            data: 'comment_id=' + encodeURIComponent(comment_id) + '&delta=' + encodeURIComponent(delta),
            beforeSend: function () {
                $('.success, .warning, .cmswidget .alert').remove();

            },
            success: function (data) {
                if (data.error) {
                    alert('error');
                }

                if (data.success) {

                    if (data.messages == 'ok') {

                        var voting = $('#voting_' + comment_id);
                        // выделим отмеченный пункт.
                        if (delta == '1') {
                            voting.addClass('voted_blog_plus').prop('title', text_voted_blog_plus_var);
                            $('.comment_yes', voting).addClass('voted_comment_plus');
                        } else if (delta == '-1') {
                            voting.addClass('voted_blog_minus').prop('title', text_voted_blog_minus_var);
                            $('.comment_no', voting).addClass('voted_comment_minus');
                        }

                        // обновим кол-во голосов
                        $('.score', voting).replaceWith('<span class="score" title="' + text_all_var + ' ' + data.success.rate_count + ': &uarr;' + data.success.rate_delta_blog_plus + ' и &darr;' + data.success.rate_delta_blog_minus + '">' + data.success.rate_delta + '</span>');

                        $('.score_plus', voting).html(data.success.rate_delta_blog_plus);
                        $('.score_minus', voting).html(data.success.rate_delta_blog_minus);

                        // раскрасим positive / negative
                        $('.mark', voting).prop('class', 'mark ' + data.sign);

                        if (exec != '') {
                           // eval(exec);
                        }

                    } else {

                        $('#' + prefix + 'comment_work_' + comment_id).append('<div class="warning alert alert-danger">' + data.success + ' <img src="catalog/view/theme/default/image/aclose.png" alt="" class="close"><button type="button" class="close" data-dismiss="alert">&times;</button></div>');
                        remove_success();
                    }

                }

            }
        });

        $(thisis).removeClass('loading');
    }

    return false;
}


//*************** $(document).on('click','.comments_vote') ********************


comments_vote_loader = function () {

    if ($.isFunction($.fn.on)) {

        $(document).on('click', '.comments_vote', function ( event, person) {

            comments_vote($(this));

            return false;
        });

    } else {

            $('.comments_vote').live('click', function () {
                comments_vote($( this ));
                return false;
            });

    }
  }


document.documentElement.id = "js";


$(document).ready(function () {





});
//*************** /$(document).on('click','.comments_vote') ********************


function captcha_fun() {

        $.ajax({
            type: 'POST',
            url: 'index.php?route=record/treecomments/captcham',
            dataType: 'html',
            success: function (data) {
                $('.captcha_status').html(data);
                return false;
            }
        });

        var timestamp = new Date().getTime();

        $('#imgcaptcha').removeAttr('src');
        /*
        $.ajax({
            type: 'POST',
            url: 'index.php?route=record/treecomments/captchadel&z=' + timestamp + Math.random(),
            dataType: 'html',
            success: function (data) {
                timestamp = new Date().getTime();
                $('#imgcaptcha').prop({
                    type: 'image/jpg',
                    src: 'index.php?route=record/treecomments/captcham5&m=' + timestamp + Math.random()
                });
            }
        });
        */
        return false;
    }
    //**************** /captcha_fun() ********************************

//**************** subcaptcha() ********************************
function subcaptcha(e) {

        ic = $('.captcha').val();
        $('.captcha').val(ic + this.value)
        return false;
    }
    //**************** /subcaptcha() ********************************
FSelectedText = function () {
    if (!$('#ctrlcopy').length > 0) {
        $('body').append('<div id=\"ctrlcopy\"><\/div>');
    }
    if ($.isFunction($.fn.on)) {
        $(document).on('mouseup', function (e) {
            // var highlighted;

            var selectedText = '';
            if (selectedText = window.getSelection) { // Не IE, используем метод getSelection
                selectedText = window.getSelection().toString();
            } else { // IE, используем объект selection
                selectedText = document.selection.createRange().text;
            }

            // if (window.getSelection) {
            //    highlighted  = window.getSelection();
            //   } else if (document.selection) {
            //      highlighted = document.selection.createRange();
            //   }
            //   if (highlighted.toString() !=='' && highlighted) {
            //  	var selectedText = highlighted.toString();
            //   }

            $('#ctrlcopy').text(selectedText + '');

            return selectedText; // to be added to clipboard
        });
    } else {

        $(document).live('mouseup', function () {

            var selectedText = '';
            if (selectedText = window.getSelection) { // Не IE, используем метод getSelection
                selectedText = window.getSelection().toString();
            } else { // IE, используем объект selection
                selectedText = document.selection.createRange().text;
            }

            $('#ctrlcopy').text(' ' + selectedText + ' ');


            return selectedText; // to be added to clipboard
        });

    }
}



insertSelectText = function (command, value, queryState) {
    // где, command - имя ББ кода
    // value - значение
    // queryState - активен ли этот ББ код в данный момент

    //this.wbbInsertCallback(command,value) // Вставка значения в редактора, value - объект с параметрами вставки
    //this.wbbRemoveCallback(command); // удаление текущего ББ кода с сохранением содержимого
    //this.wbbRemoveCallback(command,true) - удаление текущего ББ кода вместе со содержимым
    //this.showModal.call(this,command,opt.modal,queryState); //Показ модального окна средствами WysiBB
    //opt.modal.call(this,command,opt.modal,queryState); //Показ подключенного модального окна

    //В нашем примере, мы вставляем цитату
    var seltxt = $('#ctrlcopy').html();

    if (seltxt == 'false') seltxt = '';
    this.wbbInsertCallback(command, {
            seltext: seltxt
        })
        //Если не задать значение seltext - то будет взят текущий выделенный текст

}


//**************** wisybbinit() ********************************
wisybbinit = function (cid, prefix) {

        var my_id = '0';

        if (typeof (this.id) == "undefined") {
            my_id = '0';
        } else {
            my_id = this.id;
        }

        if (my_id == '0') {
            my_id = 'editor_' + cid;
        }

        var wbbOpt = {
            buttons: 'bold,italic,|,img,video,link,|,fontcolor,fontsize,|,quote',
            allButtons: {
                //quote: {
                //    cmd: insertSelectText, //подключение функции-обработчика
                 //   transform: {
                 //       '<div class="quote"><cite>{AUTHOR}</cite>{SELTEXT}</div>': '[quote{AUTHOR}]{SELTEXT}[/quote]'
                //    }
              //  }
            }
        }


        $('#' + prefix + my_id).wysibb(wbbOpt);
        //Передать фокус для Opera и старых версий браузеров
        // $('#'+prefix+my_id).execCommand("justifyleft");


        $('.wysibb-body').css('height', $('.blog-textarea_height').css('height'));



        $('span.powered').hide();
    }
    //**************** /wisybbinit() ********************************

//**************** wisybbdestroy() ********************************
wisybbdestroy = function (prefix, acr) {

        if (acr['visual_editor'] == '1') {
            $('.' + prefix + 'editor').each(function () {
                var data = $(this).data("wbb");
                if (data) {
                    $(this).destroy();
                }
            });
        }

        if (acr['visual_rating'] == '1') {
            ratingdestroy('.visual_star');
        }

    }
    //**************** /wisybbdestroy() ********************************

//**************** wisybbloader() ********************************
wisybbloader = function (cid, prefix, acr) {
        if (acr['visual_editor'] == '1') {
            wisybbdestroy(prefix, acr);
            wisybbinit(cid, prefix);
        }

        if (acr['visual_rating'] == '1') {
            ratingloader('.visual_star');
        }
    }
    //**************** /wisybbloader() ********************************




//**************** ratingdestroy() ********************************
ratingdestroy = function (id) {
        $('.star-rating-control').each(function () {
            $(this).remove();
            $(id).removeClass('star-rating-applied').show();
        });
    }
    //**************** /ratingdestroy() ********************************

//**************** ratingloader() ********************************
ratingloader = function (id) {
        $(id).rating({
            focus: function (value, link) {
                var tip = $('#hover-test');
                var rcolor = $(this).prop('alt');
                tip[0].data = tip[0].data || tip.html();
               // tip.html('<ins style="color:' + rcolor + ';">' + link.title + '<\/ins>' || 'value: ' + value);
                $('.rating-cancel').hide();
            },
            blur: function (value, link) {
                var tip = $('#hover-test');
                $('#hover-test').html(tip[0].data || '');
                $('.rating-cancel').hide();
            }
        });

        $('.rating-cancel').hide();

    }
    //**************** /ratingloader() ********************************


//**************** remove_success() ********************************
remove_success = function () {
        $('.cmswidget .success, .cmswidget .warning, .cmswidget .attention, .cmswidget .alert').fadeIn().animate({
            opacity: 0.3
        }, 10000, function () {
            $('.cmswidget .success, .cmswidget .warning, .cmswidget .attention , .cmswidget .alert').remove();
        });
    }
    //**************** /remove_success() ********************************




load_acr = function (this_data) {
    var cmswidget = $(this_data).attr('data-cmswidget');

    var avars = {};

    //avars['mark'] = $('#' + $(this_data).closest('div[id] .container_reviews').prop('id')).find('.mark:first').text();

    avars['mark'] = $('.acr' + cmswidget).find('.mark:first').attr('data-text');
    avars['mark_id'] = $('.acr' + cmswidget).find('.mark_id:first').attr('data-text');
    avars['theme'] = $('.acr' + cmswidget).find('.theme:first').attr('data-text');
    avars['exec'] = $('.acr' + cmswidget).find('.exec:first').attr('data-text');
    avars['visual_editor'] = $('.acr' + cmswidget).find('.visual_editor:first').attr('data-text');
    avars['ascp_widgets_position'] = $('.acr' + cmswidget).find('.ascp_widgets_position:first').attr('data-text');
    avars['settingswidget'] = $('.acr' + cmswidget).find('.settingswidget:first').attr('data-text');
    avars['text_wait'] = $('.acr' + cmswidget).find('.text_wait:first').attr('data-text');
    avars['visual_rating'] = $('.acr' + cmswidget).find('.visual_rating:first').attr('data-text');
    avars['signer'] = $('.acr' + cmswidget).find('.signer:first').attr('data-text');
    avars['imagebox'] = $('.acr' + cmswidget).find('.imagebox:first').attr('data-text');
    avars['prefix'] = $('.acr' + cmswidget).find('.prefix:first').attr('data-text');

    /*

if (typeof acrr == "undefined") {
	var acrr = new Array();
}
acrr['<?php echo $cmswidget; ?>_mark'] = '<?php echo $mark; ?>';
acrr['<?php echo $cmswidget; ?>_mark_id'] = '<?php echo $mark_id; ?>';
acrr['<?php echo $cmswidget; ?>_theme'] = '<?php echo $theme; ?>';
acrr['<?php echo $cmswidget; ?>_exec'] = '';
acrr['<?php echo $cmswidget; ?>_visual_editor'] = '<?php echo $visual_editor; ?>';
acrr['<?php echo $cmswidget; ?>_ascp_widgets_position'] = '<?php echo $this->registry->get('ascp_widgets_position');?>';
acrr['<?php echo $cmswidget; ?>_settingswidget'] = '<?php echo base64_encode(serialize($settingswidget)); ?>';
acrr['<?php echo $cmswidget; ?>_text_wait'] = '<?php echo $text_wait; ?>';
acrr['<?php echo $cmswidget; ?>_visual_rating'] = '<?php echo $settings_widget['visual_rating']; ?>';
acrr['<?php echo $cmswidget; ?>_signer'] = '<?php echo $settings_widget['signer']; ?>';
acrr['<?php echo $cmswidget; ?>_imagebox'] = '<?php echo $imagebox; ?>';
acrr['<?php echo $cmswidget; ?>_prefix'] = '<?php echo $prefix;?>';


    avars['mark'] = acrr[cmswidget+'_mark'];
    avars['mark_id'] = acrr[cmswidget+'_mark_id'];
    avars['theme'] = acrr[cmswidget+'_theme'];
    avars['exec'] = acrr[cmswidget+'_exec'];
    avars['visual_editor'] = acrr[cmswidget+'_visual_editor'];
    avars['ascp_widgets_position'] = acrr[cmswidget+'_ascp_widgets_position'];
    avars['settingswidget'] = acrr[cmswidget+'_settingswidget'];
    avars['text_wait'] = acrr[cmswidget+'_text_wait'];
    avars['visual_rating'] = acrr[cmswidget+'_visual_rating'];
    avars['signer'] = acrr[cmswidget+'_signer'];
    avars['imagebox'] = acrr[cmswidget+'_imagebox'];
    avars['prefix'] = acrr[cmswidget+'_prefix'];
      */

    return avars;
}


load_acc = function (this_data) {
    var cmswidget = $(this_data).attr('data-cmswidget');

    var avars = {};

   // avars['mark'] = $('#' + $(this_data).parents().find('.container_comments').attr('id')).find('.mark:first').text();

    avars['mark'] = $('.acc' + cmswidget).find('.mark:first').attr('data-text');
    avars['sorting'] = $('.acc' + cmswidget).find('.sorting:first').attr('data-text');
    avars['page'] = $('.acc' + cmswidget).find('.page:first').attr('data-text');
    avars['mark_id'] = $('.acc' + cmswidget).find('.mark_id:first').attr('data-text');
    avars['text_rollup_down'] = $('.acc' + cmswidget).find('.text_rollup_down:first').attr('data-text');
    avars['text_rollup'] = $('.acc' + cmswidget).find('.text_rollup:first').attr('data-text');
    avars['visual_editor'] = $('.acc' + cmswidget).find('.visual_editor:first').attr('data-text');
    avars['ascp_widgets_position'] = $('.acc' + cmswidget).find('.ascp_widgets_position:first').attr('data-text');
    avars['text_voted_blog_plus'] = $('.acc' + cmswidget).find('.text_voted_blog_plus:first').attr('data-text');
    avars['text_voted_blog_minus'] = $('.acc' + cmswidget).find('.text_voted_blog_minus:first').attr('data-text');
    avars['text_all'] = $('.acc' + cmswidget).find('.text_all:first').attr('data-text');
    avars['prefix'] = $('.acc' + cmswidget).find('.prefix:first').attr('data-text');

    /*
    avars['mark'] = accc[cmswidget+'_mark'];
    avars['sorting'] = accc[cmswidget+'_sorting'];
    avars['page'] = accc[cmswidget+'_page'];
    avars['mark_id'] = accc[cmswidget+'_mark_id'];
    avars['text_rollup_down'] = accc[cmswidget+'_text_rollup_down'];
    avars['text_rollup'] = accc[cmswidget+'_text_rollup'];
    avars['visual_editor'] = accc[cmswidget+'_visual_editor'];
    avars['ascp_widgets_position'] = accc[cmswidget+'_ascp_widgets_position'];
    avars['text_voted_blog_plus'] = accc[cmswidget+'_text_voted_blog_plus'];
    avars['text_voted_blog_minus'] = accc[cmswidget+'_text_voted_blog_minus'];
    avars['text_all'] = accc[cmswidget+'_text_all'];
    avars['prefix'] = accc[cmswidget+'_prefix'];
    */

    return avars;
}


//**************** comments() ********************************
$.fn.comments = function (acr, acc) {

		if (typeof acc == "undefined") {
			var acc = new Array();
		}

        var sorting = acc['sorting'];
        var page = acc['page'];

        var mark = acr['mark'];
        var mark_id = acr['mark_id'];
        var settingswidget = acr['settingswidget'];
        var ascp_widgets_position = acr['ascp_widgets_position'];
        var prefix = acr['prefix'];

        if (typeof (sorting) == "undefined") {
            sorting = 'none';
        }

        if (typeof (page) == "undefined") {
            page = '1';
        }
        var url_str = 'index.php?route=record/treecomments/comment&prefix=' + prefix + '&' + mark + '=' + mark_id + '&sorting=' + sorting + '&wpage=' + page + '&ascp_widgets_position=' + ascp_widgets_position + '&sc_ajax=1';

        return $.ajax({
            type: 'POST',
            url: url_str,
            data: {
                settingswidget: settingswidget
            },
        	    dataType: 'html',
    	        async: 'false',
  	          	beforeSend: function () {
            },

            success: function (data) {

                $('#' + prefix + 'comment_' + mark_id).html(data);

            },
            complete: function (data) {
                captcha_fun();
            }
        });
    }
    //**************** /comments() ********************************


//**************** comment_write() ********************************
function comment_write(event) {

    var acr = event.data.acr;
    var acc = event.data.acc;
    $('.success, .warning, .cmswidget .alert').remove();

    if (typeof (event.data.acc['sorting']) == "undefined") {
        sorting = 'none';
    } else {
        sorting = event.data.acc['sorting'];
    }

    if (typeof (event.data.acc['page']) == "undefined") {
        page = '1';
    } else {
        page = event.data.acc['page'];
    }

    if (typeof (event.data.acr['mark']) == "undefined") {
        mark = 'product_id';
    } else {
        mark = event.data.acr['mark'];
    }
    if (typeof (event.data.acr['exec']) == "undefined" || event.data.acr['exec'] == "") {
        exec = '';
    } else {
        exec = event.data.acr['exec'];
    }


    if (typeof (event.data.acr['settingswidget']) == "undefined") {
        settingswidget = '';
    } else {
        settingswidget = event.data.acr['settingswidget'];
    }

    if (typeof (event.data.acr['prefix']) == "undefined") {
        prefix = '';
    } else {
        prefix = event.data.acr['prefix'];
    }



    if (typeof (event.data.acr['mark_id']) == "undefined") {
        mark_id = false;
    } else {
        mark_id = event.data.acr['mark_id'];
    }

    if (typeof (event.data.acr['theme']) == "undefined") {
        theme = 'default';
    } else {
        theme = event.data.acr['theme'];
    }

    if (typeof (event.data.acr['visual_editor']) == "undefined") {
        visual_editor = '0';
    } else {
        visual_editor = event.data.acr['visual_editor'];
    }

    if (typeof (event.data.acr['ascp_widgets_position']) == "undefined") {
        ascp_widgets_position = '0';
    } else {
        ascp_widgets_position = event.data.acr['ascp_widgets_position'];
    }

    if (typeof (event.data.acr['text_wait']) == "undefined") {
        text_wait = 'Please wait...';
    } else {
        text_wait = event.data.acr['text_wait'];
    }


    if (typeof (this.id) == "undefined") {
        myid = '0';
    } else {
        myid = this.id.replace(prefix + 'button-comment-', '');
    }


    if (visual_editor == '1') {
        $('#' + prefix + 'editor_' + myid).wysibb().sync();
    }
    var data_form = $('#' + prefix + 'form_work_' + myid).serialize();

    var url_end = mark + '=' + mark_id + '&parent=' + myid + '&wpage=' + page + '&ascp_widgets_position=' + ascp_widgets_position + '&mark=' + mark;
    var url_str = 'index.php?route=record/treecomments/write&' + url_end;

    $.ajax({
        type: 'POST',
        url: url_str,
        dataType: 'html',
        data: data_form,

        beforeSend: function () {

            $('.cmswidget .success, .cmswidget .warning, .cmswidget .attention, .cmswidget  .alert').remove();
            $('.button-comment').hide();
            $('#' + prefix + 'comment_work_' + myid).hide();
            $('#' + prefix + 'comment_work_' + myid).before('<div class="attention alert alert-attention">'+text_wait+'<img src="catalog/view/theme/' + theme + '/image/aloading16.png" alt="">' +  '<button type="button" class="close" data-dismiss="alert">&times;</button></div>');

            wisybbdestroy(prefix, acr);

        },
        error: function () {
            $('.cmswidget .success, .cmswidget .warning, .cmswidget .attention, .cmswidget  .alert').remove();
            alert('error');
        },
        success: function (data) {

            $('#' + prefix + 'comment_work_' + myid).prepend(data);

            $('.success, .attention').remove();

            if (wdata['code'] == 'error') {
            	$('#' + prefix + 'comment_work_' + myid).show();
           		$('#' + prefix + 'comment_work_' + myid).prepend('<div class="warning alert alert-danger">' + wdata['message'] + ' <img src="catalog/view/theme/default/image/aclose.png" alt="" class="close"><button type="button" class="close" data-dismiss="alert">&times;</button></div>');
            }

            if (wdata['code'] == 'success') {

                $.when($('#' + prefix + 'comment_' + mark_id).comments(acr, acc)).done(function () {
	                $('#' + prefix + 'comment_work_' + myid).prepend('<div class="success alert alert-success">' + wdata['message'] + ' <img src="catalog/view/theme/default/image/aclose.png" alt="" class="close"><button type="button" class="close" data-dismiss="alert">&times;</button></div>');
                    remove_success();
                });

                $('#tabs').find('a[href=\'#tab-review\']').html(wdata['review_count']);

                $('input[name=\'name\']').val(wdata['login']);
                $('.wysibb-text-editor').html('');
                $('input[name=\'rating\']:checked').prop('checked', '');
                $('textarea[name=\'text\']').val('');
                $('input[name=\'captcha\']').val('');
                $('#' + prefix + 'comment_work_0').show();

            }

            $('.button-comment').show();

            //if (acr['visual_editor']=='1')
            {
                wisybbloader(myid, acr['prefix'], acr);
            }



        }
    });
}

//**************** /comment_write() ********************************



//**************** $(document).ready ********************************
$(document).ready(function () {

    var bingo = false;
	var $events = jQuery.data(jQuery(document)[0], "events" );

	if(typeof $events == "undefined"){
		var $events = jQuery(document).data('events');
	}
	if(typeof $events == "undefined"){
		var $events = jQuery(document).data('events');
	}

	if(typeof $events != "undefined"){
	    jQuery.each($events, function(i, event){
	        jQuery.each(event, function(i, handler){
	            if (handler['selector']=='.comments_vote') {
                  bingo = true;
	            }
	        });
	    });
	}

     //******* bingo *********//
    if (!bingo) {

    	 comments_vote_loader();
    	// FSelectedText();


    //*************** $(document).on('click','.comments_rollup') ********************
    if ($.isFunction($.fn.on)) {

        
        $(document).on('click', '.comments_rollup', function () {
            var acc = load_acc(this);
            var text_rollup_down = acc['text_rollup_down'];
            var text_rollup = acc['text_rollup'];

            var child_id = $(this).parents().next('.comments_parent:first').attr('id');

            if ($('#' + child_id).is(':hidden') == false) {
                $(this).html(text_rollup_down);
            } else {
                $(this).html(text_rollup);
            }

            $('#' + child_id).toggle();


            return false;
        });

    } else {
        $('.comments_rollup').live('click', function () {
            var acc = load_acc(this);
            var text_rollup_down = acc['text_rollup_down'];
            var text_rollup = acc['text_rollup'];

            var child_id = $(this).parents().next('.comments_parent:first').attr('id');

            if ($('#' + child_id).is(':hidden') == false) {
                $(this).html(text_rollup_down);
            } else {
                $(this).html(text_rollup);
            }

            $('#' + child_id).toggle();


            return false;
        });
    }
    //*************** /$(document).on('click','.comments_rollup') ********************


    //*************** $(document).on('click','.comment_reply') ********************
    if ($.isFunction($.fn.on)) {
        $(document).on('click', '.comment_reply', function () {
            var acr = load_acr(this);
            var acc = load_acc(this);


            var cid = $('#' + $(this).parents().prev('.container_comment_vars:first').prop('id')).find('.comment_id:first').text();
            if (cid == '') cid = 0;

            var prefix = acr['prefix'];

            wisybbdestroy(prefix, acr);


            $('.success, .warning, .cmswidget  .alert').remove();

            $('.' + acr['prefix'] + 'comment_work').html('');

            //html_reply = $('#' + acr['prefix'] + 'reply_comments').html();

            com_form_str = 'comment_form_'+acr['prefix'];
            com_form = window[com_form_str]

            $('#'+'comment_form_'+acr['prefix']+'reply_comments').remove();
            $('.'+acr['prefix']+'comment_form').remove();

            html_reply = com_form.html();

            $('#' + acr['prefix'] + 'comment_work_' + cid).html(html_reply);
            $('#' + acr['prefix'] + 'comment_work_' + cid).show();


            $('#' + acr['prefix'] + 'comment_work_' + cid).find('#' + acr['prefix'] + 'comment_work_').prop('id', acr['prefix'] + 'c_w_' + cid);
            $('#' + acr['prefix'] + 'comment_work_' + cid).find('#' + acr['prefix'] + 'form_work_').prop('id', acr['prefix'] + 'form_work_' + cid);
            $('#' + acr['prefix'] + 'comment_work_' + cid).find('#' + acr['prefix'] + 'editor_').prop('id', acr['prefix'] + 'editor_' + cid);

            $('#' + acr['prefix'] + 'comment_work_' + cid).find('.button-comment').prop('id', '' + acr['prefix'] + 'button-comment-' + cid);

            $('.bkey').unbind();
            $('.bkey').bind('click', {
                id: cid
            }, subcaptcha);

            $('#' + acr['prefix'] + 'button-comment-' + cid).bind('click', {
                acr: acr,
                acc: acc
            }, comment_write);

            captcha_fun();

            //if (acr['visual_editor']=='1')
            {
                wisybbloader(cid, acr['prefix'], acr);
            }


            return false;
        });

    } else {
        $('.comment_reply').live('click', function () {
            var acr = load_acr(this);
            var acc = load_acc(this);


            var cid = $('#' + $(this).parents().prev('.container_comment_vars:first').prop('id')).find('.comment_id:first').text();
            if (cid == '') cid = 0;

            var prefix = acr['prefix'];

            wisybbdestroy(prefix, acr);

            $('.success, .warning, .cmswidget  .alert').remove();

            $('.' + acr['prefix'] + 'comment_work').html('');

            html_reply = $('#' + acr['prefix'] + 'reply_comments').html();



            $('#' + acr['prefix'] + 'comment_work_' + cid).html(html_reply);
            $('#' + acr['prefix'] + 'comment_work_' + cid).show();

            $('#' + acr['prefix'] + 'comment_work_' + cid).find('#' + acr['prefix'] + 'comment_work_').prop('id', acr['prefix'] + 'c_w_' + cid);
            $('#' + acr['prefix'] + 'comment_work_' + cid).find('#' + acr['prefix'] + 'form_work_').prop('id', acr['prefix'] + 'form_work_' + cid);
            $('#' + acr['prefix'] + 'comment_work_' + cid).find('#' + acr['prefix'] + 'editor_').prop('id', acr['prefix'] + 'editor_' + cid);

            $('#' + acr['prefix'] + 'comment_work_' + cid).find('.button-comment').prop('id', '' + acr['prefix'] + 'button-comment-' + cid);

            $('.bkey').unbind();
            $('.bkey').bind('click', {
                id: cid
            }, subcaptcha);

            $('#' + acr['prefix'] + 'button-comment-' + cid).bind('click', {
                acr: acr,
                acc: acc
            }, comment_write);

            captcha_fun();

            //if (acr['visual_editor']=='1')
            {
                wisybbloader(cid, acr['prefix'], acr);
            }


            return false;
        });
    }
    //*************** /$(document).on('click','.comment_reply') ********************


    customer_enter = function (thisis) {
            var acr = load_acr(thisis);
            $('#' + acr['prefix'] + 'form_customer').show();
            return false;
        }
        //*************** $(document).on('click','.customer_enter') ********************
    if ($.isFunction($.fn.on)) {
        $(document).on('click', '.customer_enter', function () {
            customer_enter(this);
            return false;
        });

    } else {
          $('.customer_enter').live('click', function () {
            customer_enter(this);
            return false;
        });

    }
    //*************** /$(document).on('click','.customer_enter') ********************
    comments_sorting = function (thisis) {
        var acc = load_acc(thisis);
        var acr = load_acr(thisis);
        acc['sorting'] = thisis.value;

        $('#' + acr['prefix'] + 'comment_' + acr['mark_id']).comments(acr, acc);
        return false;
    }

    if ($.isFunction($.fn.on)) {
        $(document).on('change', '.comments_sorting', function (event) {
            comments_sorting(this);
            return false;
        });

    } else {

        $('.comments_sorting').live('change', function () {
            comments_sorting(this);
            return false;
        });

    }


    //*************** $(document).on('click','#tab-review .pagination a') ********************
    if ($.isFunction($.fn.on)) {
        $(document).on('click', '#tab-review .pagination a', function () {

            var acr = load_acr(this);

            var theme_var = acr['theme'];
            var text_wait_var = acr['text_wait'];

            $('#tab-review').prepend('<div class="attention alert alert-attention">'+text_wait_var+'<img src="catalog/view/theme/' + theme_var + '/image/aloading16.png" alt=""><button type="button" class="close" data-dismiss="alert">&times;</button></div>');

            urll = this.href + '#tab-review';
            location = urll;

            $('.attention').remove();

            return false;
        });

    } else {

        $('#tab-review .pagination a').live('click', function () {

            var acr = load_acr(this);

            var theme_var = acr['theme'];
            var text_wait_var = acr['text_wait'];

            $('#tab-review').prepend('<div class="attention alert alert-attention">'+text_wait_var+'<img src="catalog/view/theme/' + theme_var + '/image/aloading16.png" alt=""><button type="button" class="close" data-dismiss="alert">&times;</button></div>');

            urll = this.href + '#tab-review';
            location = urll;

            $('.attention').remove();


            return false;
        });

    }
    //*************** /$(document).on('click','#tab-review .pagination a') ********************

    //*************** $(document).on('click','#customer_enter') ********************
    if ($.isFunction($.fn.on)) {
        $(document).on('click', '#customer_enter', function () {

            $('#form_customer').show();

            return false;
        });

    } else {

        $('#customer_enter').live('click', function () {

            $('#form_customer').show();

            return false;
        });

    }
    //*************** /$(document).on('click','#customer_enter') ********************

    //*************** $(document).on('click','.comments_signer') ********************
    if ($.isFunction($.fn.on)) {
        $(document).on('click', '.comments_signer', function () {

            var acr = load_acr(this);

            var mark_var = acr['mark'];
            var mark_id_var = acr['mark_id'];
            var cmswidget = $(this).attr('data-cmswidget');

            $.ajax({
                type: 'POST',
                url: 'index.php?route=record/signer/subscribe&id=' + mark_id_var + '&pointer=' + mark_var + '&prefix=' + acr['prefix']+'&cmswidget='+cmswidget,
                dataType: 'html',
                data: $('#' + acr['prefix'] + 'form_signer').serialize() + '&subscribe=' + $('#customer_subscribe').serialize(),


                beforeSend: function () {
                    $('#' + acr['prefix'] + 'js_signer').html('');
                },
                error: function () {
                    $('.cmswidget .success, .cmswidget .warning, .cmswidget .attention, .cmswidget  .alert').remove();
                    alert('error');
                },
                success: function (data) {

                    $('#' + acr['prefix'] + 'js_signer').prepend(data).show();


                    if (sdata['code'] == 'error') {


                    }

                    if (sdata['code'] == 'success') {

                        if (sdata['success'] == 'remove') {
                            $('#' + acr['prefix'] + 'comments_signer').prop('checked', false);
                        }
                        if (sdata['success'] == 'set') {
                            $('#' + acr['prefix'] + 'comments_signer').prop('checked', true);
                        }
                    }

                }

            });

            return false;
        });

    } else {

        $('.comments_signer').live('click', function () {

            var acr = load_acr(this);

            var mark_var = acr['mark'];
            var mark_id_var = acr['mark_id'];

            $.ajax({
                type: 'POST',
                url: 'index.php?route=record/signer/subscribe&id=' + mark_id_var + '&pointer=' + mark_var,
                dataType: 'html',
                data: $('#' + acr['prefix'] + 'form_signer').serialize(),

                beforeSend: function () {
                    $('#' + acr['prefix'] + 'js_signer').html('');
                },
                error: function () {
                    $('.cmswidget .success, .cmswidget .warning, .cmswidget .attention, .cmswidget .alert').remove();
                    alert('error');
                },
                success: function (data) {
                    $('#' + acr['prefix'] + 'js_signer').prepend(data).show();

                    if (sdata['code'] == 'error') {

                    }

                    if (sdata['code'] == 'success') {

                        if (sdata['success'] == 'remove') {
                            $('#' + acr['prefix'] + 'comments_signer').prop('checked', false);
                        }
                        if (sdata['success'] == 'set') {
                            $('#' + acr['prefix'] + 'comments_signer').prop('checked', true);
                        }
                    }

                }

            });


            return false;
        });

    }
    //*************** /$(document).on('click','#comments_signer') ********************


   }
   //******* bingo *********//

});
//**************** /$(document).ready ********************************