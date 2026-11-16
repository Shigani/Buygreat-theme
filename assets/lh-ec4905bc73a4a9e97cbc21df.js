;(function($){var ajax = (p, c, e) => { $.ajax({url: window.location.href, method: "POST",							data: $.extend(true, p !== undefined && typeof p == "object" ? p : {}, {								action: "layouthub_section_ajax", section_id: "Yt3mTFnMIS"							}), success: c, error: e});						}, cb  = function(section, $) {function floatToString(t,e){var o=t.toFixed(e).toString();return o.match(/^\.\d+/)?"0"+o:o}"undefined"==typeof window.Shopify&&(window.Shopify={}),Shopify.each=function(t,e){for(var o=0;o<t.length;o++)e(t[o],o)},Shopify.map=function(t,e){for(var o=[],i=0;i<t.length;i++)o.push(e(t[i],i));return o},Shopify.arrayIncludes=function(t,e){for(var o=0;o<t.length;o++)if(t[o]==e)return!0;return!1},Shopify.uniq=function(t){for(var e=[],o=0;o<t.length;o++)Shopify.arrayIncludes(e,t[o])||e.push(t[o]);return e},Shopify.isDefined=function(t){return void 0!==t},Shopify.getClass=function(t){return Object.prototype.toString.call(t).slice(8,-1)},Shopify.extend=function(t,e){function o(){}o.prototype=e.prototype,t.prototype=new o,(t.prototype.constructor=t).baseConstructor=e,t.superClass=e.prototype},Shopify.locationSearch=function(){return window.location.search},Shopify.locationHash=function(){return window.location.hash},Shopify.replaceState=function(t){window.history.replaceState({},document.title,t)},Shopify.urlParam=function(t){var e=RegExp("[?&]"+t+"=([^&#]*)").exec(Shopify.locationSearch());return e&&decodeURIComponent(e[1].replace(/\+/g," "))},Shopify.newState=function(t,e){return(Shopify.urlParam(t)?Shopify.locationSearch().replace(RegExp("("+t+"=)[^&#]+"),"$1"+e):""===Shopify.locationSearch()?"?"+t+"="+e:Shopify.locationSearch()+"&"+t+"="+e)+Shopify.locationHash()},Shopify.setParam=function(t,e){Shopify.replaceState(Shopify.newState(t,e))},Shopify.Product=function(t){Shopify.isDefined(t)&&this.update(t)},Shopify.Product.prototype.update=function(t){for(property in t)this[property]=t[property]},Shopify.Product.prototype.optionNames=function(){return"Array"==Shopify.getClass(this.options)?this.options:[]},Shopify.Product.prototype.optionValues=function(o){if(!Shopify.isDefined(this.variants))return null;var t=Shopify.map(this.variants,function(t){var e="option"+(o+1);return t[e]==undefined?null:t[e]});return null==t[0]?null:Shopify.uniq(t)},Shopify.Product.prototype.getVariant=function(i){var r=null;return i.length!=this.options.length||Shopify.each(this.variants,function(t){for(var e=!0,o=0;o<i.length;o++){t["option"+(o+1)]!=i[o]&&(e=!1)}1!=e||(r=t)}),r},Shopify.Product.prototype.getVariantById=function(t){for(var e=0;e<this.variants.length;e++){var o=this.variants[e];if(t==o.id)return o}return null},Shopify.money_format="${{amount}}",Shopify.formatMoney=function(t,e){function n(t,e){return void 0===t?e:t}function o(t,e,o,i){if(e=n(e,2),o=n(o,","),i=n(i,"."),isNaN(t)||null==t)return 0;var r=(t=(t/100).toFixed(e)).split(".");return r[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g,"$1"+o)+(r[1]?i+r[1]:"")}"string"==typeof t&&(t=t.replace(".",""));var i="",r=/\{\{\s*(\w+)\s*\}\}/,a=e||this.money_format;switch(a.match(r)[1]){case"amount":i=o(t,2);break;case"amount_no_decimals":i=o(t,0);break;case"amount_with_comma_separator":i=o(t,2,".",",");break;case"amount_with_space_separator":i=o(t,2," ",",");break;case"amount_with_period_and_space_separator":i=o(t,2," ",".");break;case"amount_no_decimals_with_comma_separator":i=o(t,0,".",",");break;case"amount_no_decimals_with_space_separator":i=o(t,0," ");break;case"amount_with_apostrophe_separator":i=o(t,2,"'",".")}return a.replace(r,i)},Shopify.OptionSelectors=function(t,e){return this.selectorDivClass="selector-wrapper",this.selectorClass="single-option-selector",this.variantIdFieldIdSuffix="-variant-id",this.variantIdField=null,this.historyState=null,this.selectors=[],this.domIdPrefix=t,this.product=new Shopify.Product(e.product),this.onVariantSelected=Shopify.isDefined(e.onVariantSelected)?e.onVariantSelected:function(){},this.replaceSelector(t),this.initDropdown(),e.enableHistoryState&&(this.historyState=new Shopify.OptionSelectors.HistoryState(this)),!0},Shopify.OptionSelectors.prototype.initDropdown=function(){var t={initialLoad:!0};if(!this.selectVariantFromDropdown(t)){var e=this;setTimeout(function(){e.selectVariantFromParams(t)||e.fireOnChangeForFirstDropdown.call(e,t)})}},Shopify.OptionSelectors.prototype.fireOnChangeForFirstDropdown=function(t){this.selectors[0].element.onchange(t)},Shopify.OptionSelectors.prototype.selectVariantFromParamsOrDropdown=function(t){this.selectVariantFromParams(t)||this.selectVariantFromDropdown(t)},Shopify.OptionSelectors.prototype.replaceSelector=function(t){var e=document.getElementById(t),o=e.parentNode;Shopify.each(this.buildSelectors(),function(t){o.insertBefore(t,e)}),e.style.display="none",this.variantIdField=e},Shopify.OptionSelectors.prototype.selectVariantFromDropdown=function(t){var e=document.getElementById(this.domIdPrefix).querySelector("[selected]");if(e||(e=document.getElementById(this.domIdPrefix).querySelector('[selected="selected"]')),!e)return!1;var o=e.value;return this.selectVariant(o,t)},Shopify.OptionSelectors.prototype.selectVariantFromParams=function(t){var e=Shopify.urlParam("variant");return this.selectVariant(e,t)},Shopify.OptionSelectors.prototype.selectVariant=function(t,e){var o=this.product.getVariantById(t);if(null==o)return!1;for(var i=0;i<this.selectors.length;i++){var r=this.selectors[i].element,n=o[r.getAttribute("data-option")];null!=n&&this.optionExistInSelect(r,n)&&(r.value=n)}return"undefined"!=typeof jQuery?jQuery(this.selectors[0].element).trigger("change",e):this.selectors[0].element.onchange(e),!0},Shopify.OptionSelectors.prototype.optionExistInSelect=function(t,e){for(var o=0;o<t.options.length;o++)if(t.options[o].value==e)return!0},Shopify.OptionSelectors.prototype.insertSelectors=function(t,e){Shopify.isDefined(e)&&this.setMessageElement(e),this.domIdPrefix="product-"+this.product.id+"-variant-selector";var o=document.getElementById(t);Shopify.each(this.buildSelectors(),function(t){o.appendChild(t)})},Shopify.OptionSelectors.prototype.buildSelectors=function(){for(var t=0;t<this.product.optionNames().length;t++){var e=new Shopify.SingleOptionSelector(this,t,this.product.optionNames()[t],this.product.optionValues(t));e.element.disabled=!1,this.selectors.push(e)}var i=this.selectorDivClass,r=this.product.optionNames();return Shopify.map(this.selectors,function(t){var e=document.createElement("div");if(e.setAttribute("class",i),1<r.length){var o=document.createElement("label");o.htmlFor=t.element.id,o.innerHTML=t.name,e.appendChild(o)}return e.appendChild(t.element),e})},Shopify.OptionSelectors.prototype.selectedValues=function(){for(var t=[],e=0;e<this.selectors.length;e++){var o=this.selectors[e].element.value;t.push(o)}return t},Shopify.OptionSelectors.prototype.updateSelectors=function(t,e){var o=this.selectedValues(),i=this.product.getVariant(o);i?(this.variantIdField.disabled=!1,this.variantIdField.value=i.id):this.variantIdField.disabled=!0,this.onVariantSelected(i,this,e),null!=this.historyState&&this.historyState.onVariantChange(i,this,e)},Shopify.OptionSelectorsFromDOM=function(t,e){var o=e.optionNames||[],i=e.priceFieldExists||!0,r=e.delimiter||"/",n=this.createProductFromSelector(t,o,i,r);e.product=n,Shopify.OptionSelectorsFromDOM.baseConstructor.call(this,t,e)},Shopify.extend(Shopify.OptionSelectorsFromDOM,Shopify.OptionSelectors),Shopify.OptionSelectorsFromDOM.prototype.createProductFromSelector=function(t,n,a,s){if(!Shopify.isDefined(a))a=!0;if(!Shopify.isDefined(s))s="/";var e=document.getElementById(t),o=e.childNodes,p=(e.parentNode,n.length),l=[];Shopify.each(o,function(t){if(1==t.nodeType&&"option"==t.tagName.toLowerCase()){var e=t.innerHTML.split(new RegExp("\\s*\\"+s+"\\s*"));0==n.length&&(p=e.length-(a?1:0));var o=e.slice(0,p),i=a?e[p]:"",r=(t.getAttribute("value"),{available:!t.disabled,id:parseFloat(t.value),price:i,option1:o[0],option2:o[1],option3:o[2]});l.push(r)}});var i={variants:l};if(0==n.length){i.options=[];for(var r=0;r<p;r++)i.options[r]="option "+(r+1)}else i.options=n;return i},Shopify.SingleOptionSelector=function(o,i,t,e){this.multiSelector=o,this.values=e,this.index=i,this.name=t,this.element=document.createElement("select");for(var r=0;r<e.length;r++){var n=document.createElement("option");n.value=e[r],n.innerHTML=e[r],this.element.appendChild(n)}return this.element.setAttribute("class",this.multiSelector.selectorClass),this.element.setAttribute("data-option","option"+(i+1)),this.element.id=o.domIdPrefix+"-option-"+i,this.element.onchange=function(t,e){e=e||{},o.updateSelectors(i,e)},!0},Shopify.Image={preload:function(t,e){for(var o=0;o<t.length;o++){var i=t[o];this.loadImage(this.getSizedImageUrl(i,e))}},loadImage:function(t){(new Image).src=t},switchImage:function(t,e,o){if(t&&e){var i=this.imageSize(e.src),r=this.getSizedImageUrl(t.src,i);o?o(r,t,e):e.src=r}},imageSize:function(t){var e=t.match(/.+_((?:pico|icon|thumb|small|compact|medium|large|grande)|\d{1,4}x\d{0,4}|x\d{1,4})[_\.@]/);return null!==e?e[1]:null},getSizedImageUrl:function(t,e){if(null==e)return t;if("master"==e)return this.removeProtocol(t);var o=t.match(/\.(jpg|jpeg|gif|png|bmp|bitmap|tiff|tif)(\?v=\d+)?$/i);if(null==o)return null;var i=t.split(o[0]),r=o[0];return this.removeProtocol(i[0]+"_"+e+r)},removeProtocol:function(t){return t.replace(/http(s)?:/,"")}},Shopify.OptionSelectors.HistoryState=function(t){this.browserSupports()&&this.register(t)},Shopify.OptionSelectors.HistoryState.prototype.register=function(t){window.addEventListener("popstate",function(){t.selectVariantFromParamsOrDropdown({popStateCall:!0})})},Shopify.OptionSelectors.HistoryState.prototype.onVariantChange=function(t,e,o){this.browserSupports()&&(!t||o.initialLoad||o.popStateCall||Shopify.setParam("variant",t.id))},Shopify.OptionSelectors.HistoryState.prototype.browserSupports=function(){return window.history&&window.history.replaceState};
(function(a,b){"use strict";function c(b,c){this.element=a(b),this.options=a.extend({},d,c),this._defaults=d,this._name="countDown",this.init()}var d={css_class:"countdown",always_show_days:!1,with_labels:!0,with_seconds:!0,with_separators:!0,with_hh_leading_zero:!0,with_mm_leading_zero:!0,with_ss_leading_zero:!0,label_dd:"days",label_hh:"hours",label_mm:"minutes",label_ss:"seconds",separator:":",separator_days:","};a.extend(c.prototype,{init:function(){this.element.children().length||(this.element.attr("datetime")&&(this.endDate=this.parseEndDate(this.element.attr("datetime"))),void 0===this.endDate&&(this.endDate=this.parseEndDate(this.element.text())),void 0===this.endDate||(this.element.is("time")?this.timeElement=this.element:(this.timeElement=a("<time></time>"),this.element.html(this.timeElement)),this.markup(),this.setTimeoutDelay=this.sToMs(1),this.daysVisible=!0,this.timeElement.on("time.elapsed",this.options.onTimeElapsed),this.timeElement.on("time.tick",this.options.onTick),this.doCountDown()))},parseEndDate:function(a){var b;return(b=this.parseDuration(a),b instanceof Date)?b:(b=this.parseDateTime(a),b instanceof Date)?b:(b=this.parseHumanReadableDuration(a),b instanceof Date)?b:(b=Date.parse(a),!isNaN(b))?new Date(b):void 0},parseDuration:function(a){var b=a.match(/^P(?:(\d+)D)?T?(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)(?:\.(\d{1,3}))?S)?$/);if(b){var c,e,f,g,h,i;return e=b[1]?this.dToMs(b[1]):0,f=b[2]?this.hToMs(b[2]):0,g=b[3]?this.mToMs(b[3]):0,h=b[4]?this.sToMs(b[4]):0,i=b[5]?parseInt(b[5],10):0,c=new Date,c.setTime(c.getTime()+e+f+g+h+i),c}},parseDateTime:function(a){var b=a.match(/^(\d{4,})-(\d{2})-(\d{2})[T\s](\d{2}):(\d{2})(?:\:(\d{2}))?(?:\.(\d{1,3}))?([Z\+\-\:\d]+)?$/);if(b){var c=b[8]?b[8].match(/^([\+\-])?(\d{2}):?(\d{2})$/):void 0,e=0;c&&(e=this.hToMs(c[2])+this.mToMs(c[3]),e="-"===c[1]?e:-e);var f,g,h,i,j,k,l,m;return g=b[1],h=b[2]-1,i=b[3],j=b[4]||0,k=b[5]||0,l=b[6]||0,m=b[7]||0,f=new Date(Date.UTC(g,h,i,j,k,l,m)),f.setTime(f.getTime()+e),f}},parseHumanReadableDuration:function(a){var b=a.match(/^(?:(\d+).+\s)?(\d+)[h:]\s?(\d+)[m:]?\s?(\d+)?[s]?(?:\.(\d{1,3}))?$/);if(b){var c,e,f,g,h,i;return c=new Date,e=b[1]?this.dToMs(b[1]):0,f=b[2]?this.hToMs(b[2]):0,g=b[3]?this.mToMs(b[3]):0,h=b[4]?this.sToMs(b[4]):0,i=b[5]?parseInt(b[5],10):0,c.setTime(c.getTime()+e+f+g+h+i),c}},sToMs:function(a){return 1e3*parseInt(a,10)},mToMs:function(a){return 1e3*(60*parseInt(a,10))},hToMs:function(a){return 1e3*(60*(60*parseInt(a,10)))},dToMs:function(a){return 1e3*(60*(60*(24*parseInt(a,10))))},msToS:function(a){return parseInt(a/1e3%60,10)},msToM:function(a){return parseInt(a/1e3/60%60,10)},msToH:function(a){return parseInt(a/1e3/60/60%24,10)},msToD:function(a){return parseInt(a/1e3/60/60/24,10)},markup:function(){var a=["<span class=\"item item-dd\">","<span class=\"dd\"></span>","<span class=\"label label-dd\">",this.options.label_dd,"</span>","</span>","<span class=\"item item-hh\">","<span class=\"hh-1\"></span>","<span class=\"hh-2\"></span>","<span class=\"label label-hh\">",this.options.label_hh,"</span>","</span>","<span class=\"hub-theme-color item item-mm\">","<span class=\"mm-1\"></span>","<span class=\"mm-2\"></span>","<span class=\"label label-mm\">",this.options.label_mm,"</span>","</span>","<span class=\"hub-theme-color item item-ss\">","<span class=\"ss-1\"></span>","<span class=\"ss-2\"></span>","<span class=\"label label-ss\">",this.options.label_ss,"</span>","</span>"];this.timeElement.html(a.join("")),this.options.with_labels||this.timeElement.find(".label").remove(),this.options.with_separators||this.timeElement.find(".separator").remove(),this.options.with_seconds||(this.timeElement.find(".item-ss").remove(),this.timeElement.find(".separator").last().remove()),this.item_dd=this.timeElement.find(".item-dd"),this.separator_dd=this.timeElement.find(".separator-dd"),this.remaining_dd=this.timeElement.find(".dd"),this.remaining_hh1=this.timeElement.find(".hh-1"),this.remaining_hh2=this.timeElement.find(".hh-2"),this.remaining_mm1=this.timeElement.find(".mm-1"),this.remaining_mm2=this.timeElement.find(".mm-2"),this.remaining_ss1=this.timeElement.find(".ss-1"),this.remaining_ss2=this.timeElement.find(".ss-2"),this.timeElement.addClass(this.options.css_class)},doCountDown:function(){var a=this.endDate.getTime()-new Date().getTime(),c=this.msToS(a),d=this.msToM(a),e=this.msToH(a),f=this.msToD(a);if(0>=a&&(c=d=e=f=0),this.displayRemainingTime({ss:10>c?(this.options.with_ss_leading_zero?"0":" ")+c.toString():c.toString(),mm:10>d?(this.options.with_mm_leading_zero?"0":" ")+d.toString():d.toString(),hh:10>e?(this.options.with_hh_leading_zero?"0":" ")+e.toString():e.toString(),dd:f.toString()}),this.options.with_seconds||0!==f||0!==d||0!==e||(c=0),0===f&&0===d&&0===e&&0===c)return this.timeElement.trigger("time.elapsed");var g=this;return b.setTimeout(function(){g.doCountDown()},g.setTimeoutDelay),this.timeElement.trigger("time.tick",a)},displayRemainingTime:function(a){var b=[];b.push("P"),"0"!==a.dd&&b.push(a.dd,"D"),b.push("T",a.hh,"H",a.mm,"M"),this.options.with_seconds&&b.push(a.ss,"S"),this.timeElement.attr("datetime",b.join("")),this.daysVisible&&!this.options.always_show_days&&"0"===a.dd&&(this.item_dd.remove(),this.separator_dd.remove(),this.daysVisible=!1),this.remaining_dd.text(a.dd),this.remaining_hh1.text(a.hh[0].trim()),this.remaining_hh2.text(a.hh[1]),this.remaining_mm1.text(a.mm[0].trim()),this.remaining_mm2.text(a.mm[1]),this.remaining_ss1.text(a.ss[0].trim()),this.remaining_ss2.text(a.ss[1])}}),a.fn.countDown=function(b){var d=arguments;if(b===void 0||"object"==typeof b)return this.each(function(){a.data(this,"plugin_countDown")||a.data(this,"plugin_countDown",new c(this,b))});if("string"==typeof b&&"_"!==b[0]&&"init"!==b){var e;return this.each(function(){var f=a.data(this,"plugin_countDown");f instanceof c&&"function"==typeof f[b]&&(e=f[b].apply(f,Array.prototype.slice.call(d,1))),"destroy"==b&&a.data(this,"plugin_countDown",null)}),void 0===e?this:e}}})(window.jQuery,window,document);function moveCurrencySymbol() {
  const prices = document.querySelectorAll(
    ".lh-price-box .lh-product-price, .lh-price-box .lh-product-compare-price"
  );

  prices.forEach(function (el) {
    let text = el.innerText.trim();

    // Chỉ xử lý nếu ký hiệu tiền nằm đầu
    if (text.match(/^[€$£]/)) {
      const symbol = text.charAt(0);
      const number = text.substring(1).trim();
      el.innerText = number + symbol;
    }
  });
}

// Chạy lần đầu
moveCurrencySymbol();

// Theo dõi khi LayoutHub render lại
const observer = new MutationObserver(function () {
  moveCurrencySymbol();
});

observer.observe(document.body, {
  childList: true,
  subtree: true,
});


window.HUB = window.HUB || {};

window.HUB.formatMoney = window.HUB.formatMoney || function(t, r) {
    function n(t, r) {
        return void 0 === t ? r : t
    }

    function e(t, r, e, o) {
        if (r = n(r, 2),
            e = n(e, ","),
            o = n(o, "."),
            isNaN(t) || null == t)
            return 0;
        var a = (t = (t / 100)
                .toFixed(r))
            .split(".");
        return a[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1" + e) + (a[1] ? o + a[1] : "")
    }
    "string" == typeof t && (t = t.replace(".", ""));
    var o = "",
        a = /\{\{\s*(\w+)\s*\}\}/,
        i = r || '${{amount}}';
    switch (i.match(a)[1]) {
        case "amount":
            o = e(t, 2);
            break;
        case "amount_no_decimals":
            o = e(t, 0);
            break;
        case "amount_with_comma_separator":
            o = e(t, 2, ".", ",");
            break;
        case "amount_with_space_separator":
            o = e(t, 2, " ", ",");
            break;
        case "amount_with_period_and_space_separator":
            o = e(t, 2, " ", ".");
            break;
        case "amount_no_decimals_with_comma_separator":
            o = e(t, 0, ".", ",");
            break;
        case "amount_no_decimals_with_space_separator":
            o = e(t, 0, ".", "");
            break;
        case "amount_with_space_separator":
            o = e(t, 2, ",", "");
            break;
        case "amount_with_apostrophe_separator":
            o = e(t, 2, "'", ".")
    }
    return i.replace(a, o)
};;var cb  = function($) {
var $this = $(this),
	$dom  = $this.closest('.lh-collection-page');;
	$this.find('.lh-toggle-menu').on('click', function(){
		$(this).closest('li').toggleClass('lh-show').find('>ul').slideToggle(200);
	});
	onClickTag();
	function onClickTag(){
		var size_tags = parseInt($dom.find('.lh-filter-content').data('sizeTags')),
				l_search  = window.location.search;
		$dom.find('.lh-filter-content .lh-filter-block[data-multi-select="false"]').each(function(){
			$(this).find('.lh-item-filter a:not(.active)').click(function(e){
				var current     = $(this),
						parent      = current.parent(),
						tag_handle  = parent.data('handle'),
						tag_active  = parent.siblings(':has(a.active)').find('a');
				if(tag_active.length){
					e.preventDefault();
					var url = (size_tags < 2) ? tag_active[0].href.replace(l_search,'') + "/" : tag_active[0].href.replace(l_search,'');
					if(!window.LAYOUTHUB_LIVE)
					window.location = url + (size_tags >= 2 ? '+':'') + tag_handle + l_search;
				}
			});
		});

	}
 };						cb.bind($('section[data-section-id="Yt3mTFnMIS"] include[data-name="filter"][data-id="2"]').get(0))(jQuery);;var cb  = function($) {
    var $this               = $(this),
        $collection_page    = $this.closest('.lh-collection-page'),
        $filter             = $this.find('.lh-filter-collection'),
        $collection_content = $this.find('.lh-collection-items'),
        type_layout         = window.localStorage.getItem('lh-view-type') ? window.localStorage.getItem('lh-view-type','123') : "lh-grid",
        html_list           = '';
    var queryParams = {},
        html_backup = $collection_content.find('.lh-product-item').clone();
    var resizeImage = function(t, r) {
          try {
            if (t.indexOf('cdn.shopify.com') === -1)
                return t;
            if (!r || "original" == r ||  "full" == r || "master" == r)
                return t;
            var o = t.match(/\.(jpg|jpeg|gif|png|bmp|bitmap|tiff|tif)((\#[0-9a-z\-]+)?(\?v=.*)?)?$/igm);
                if (null == o)
                    return null;
                var i = t.split(o[0])
                  , x = o[0];
                return i[0] + "_" + r + x;
            } catch (o) {
                return t
          }
    }
    initHTMLList();
    if (location.search.length) {
        for (var aKeyValue, i = 0, aCouples = location.search.substr(1).split('&'); i < aCouples.length; i++) {
          aKeyValue = aCouples[i].split('=');
          if (aKeyValue.length > 1) {
            queryParams[decodeURIComponent(aKeyValue[0])] = decodeURIComponent(aKeyValue[1]);
          }
        }
      }
    $(function() {
      $this.on('click', '.cl-select_orderby li', function(){
        if(window.LAYOUTHUB_LIVE){
          return;
        }
        var _this= $(this);
        queryParams.sort_by =  _this.data('value');
        location.search = jQuery.param(queryParams);
      });
      $this.on('click', '.lh-filter-button', function(){
        var $root = $this.closest('.lh-collection-page');
        $root.toggleClass('lh-open-filter');
        $filter.slideToggle(200);
      })
      $this.on('click', '.lh-type-view a', function(e){
        e.preventDefault()
        var type = $(this).data('type');

        setTypeLayout(type);
      })
      setTypeLayout(type_layout);
    });
    function initHTMLList(){
      html_backup.each(function(){
        var $entry = $(this).clone();
        $entry.removeClass('lh-col-md-3').addClass('lh-col-md-12');
        $entry.find('.lh-product-item-images').after($('<div class="lh-item-content"></div>'));
        $entry.find('.lh-item-content').append($entry.find('.lh-item-info'));
        $entry.find('.lh-item-info').after($('<div class="lh-item-buttons"></div>'));
        $entry.find('.lh-item-buttons').append($entry.find('.lh-rating-wrapper,.lh-price-box'));
        $entry.find('.lh-item-buttons > *:last').after($entry.find('.lh-wrap-button'));
        $entry.find('.lh-item-buttons > *:last').after($entry.find('.lh-product-item-actions').clone());
        $entry.find('.lh-product-countdown').before($entry.find('.lh-wrap-swatch'));
        $entry.find('.lh-product-bottom,.lh-item-buttons .lh-quickview-wrapper').remove();
        $entry.find('.lh-product-item-images .lh-wishlist-wrapper').css('display','none');
        html_list += $entry.prop('outerHTML');
      });
    }
    function setTypeLayout(type){
      $collection_page.attr('data-type',type);
      var html_new = '';
      if(type == "lh-list"){
        html_new = html_list
      }else{
        html_new = html_backup.clone();
      }
      $collection_content.html(html_new);
      $collection_content.find('.lh-product-item').each(function(){
        $(this).addClass('lh-show');
      });
      window.localStorage.setItem('lh-view-type',type);
      initRating();
      initSwatch();
      countdown();
    }
    function initRating(){
      if(!document.querySelector('#lh-fake-review') && !window.SPR && (window.LAYOUTHUB_LIVE === true || window.location.protocol === 'blob:' ))
      {
        jQuery.get('https://productreviews.shopifycdn.com/assets/v4/spr.js', function(code) {
          var regex = new RegExp(['"','/','/'].join(''),'gm');
          code = code.replace(regex, '"https://').replace(/SPR\./g,'window.SPR.').replace('window.SPR=','window.SPR=window.SPR || ');
          code = code.replace('return r=t.remote_id.toString()','if(!t.remote_id)return 0;return r=t.remote_id.toString()');
          code = code.replace('return r.fn.serializeObject','return !r || !r.fb ? false : r.fn.serializeObject');
          var blob = new Blob([code], {
            type: "application/javascript"
          });
          var url = URL.createObjectURL(blob);
          var script = document.createElement("script");
          script.src = url;
          script.id = "lh-fake-review";
          script.type = "text/javascript";
          if (!window.SPR)
          document.head.append(script);
        })
      }
      else
      {
        if(window.SPR && window.SPR.$){
          window.SPR.loadjQueryExtentions(window.SPR.$);
          window.SPR.$(document).ready(function() {
              return window.SPR.registerCallbacks(), window.SPR.initRatingHandler(), window.SPR.initDomEls(), window.SPR.loadProducts(), window.SPR.loadBadges()
          })
        }
      }
    }
    function initSwatch(){
      if (!window.Shopify || !window.Shopify.OptionSelectors) return 1;
      var $doms           = $this.find('.lh-product-item'),
          $block_content  = $this.find('.lh-collection-content'),
          money_format    = decodeURIComponent($block_content.data('moneyFormat')).replace(/\+/g,' ');
      $doms.each(function(){
        var $dom        = $(this),
            product_id  = $dom.data('id');
        if($dom.find('.lh-wrap-swatch').length){
          if(!product_id  || !document.getElementById('lh-product-json-' + product_id)) return;
          var data_json     = $dom.find('#lh-product-json-' + product_id).html();
          try{
            data_json = JSON.parse(data_json);
          }catch(err){return}
          var productSelect = new window.Shopify.OptionSelectors('product-select-' + product_id, {
    	        product: data_json,
    	        onVariantSelected: selectCallback,
    	        enableHistoryState: false
    	    });

          $dom.find('.lh-swatch-select').on('click', function() {
    	        var _this = $(this);
    					if(!_this.hasClass('active')){
    		        _this.siblings('li.active').removeClass('active');
    		        _this.addClass('active');
    		        var index = _this.closest('.swatch-index').attr('data-option-index');
    		        $this.find('select#product-select-' + product_id + '-option-' + index).val(_this.data('value')).trigger('change');
    					}
    	    });
        }
      });
      function selectCallback(variant, selector){
        var $block_item = $(selector.variantIdField).closest('.lh-product-item'),
            $soldout    = $block_item.find('.lh-sold-out'),
            $price      = $block_item.find('.lh-price-box'),
            price        = "" ;
        if(variant){
          if(variant.featured_image){
            var wrap_img = $block_item.find('.lh-product-item-images')
                tag_img  = wrap_img.find('.lh-product-item-image img:first-child'),
                url_old  = tag_img.attr('src'),
                url_img  = resizeImage(variant.featured_image.src,section.settings.image_size.trim());
            if(url_old != url_img){
              tag_img.attr('src',url_img);
              wrap_img.addClass('lh-loading');
              let img = new Image();
              img.onload = function(){
                wrap_img.removeClass('lh-loading');
              }
              img.src = url_img;
            }
          }
          $block_item.attr('data-v-type','');
          if(!variant.available){
            $block_item.attr('data-v-type','soldout');
            $soldout.attr('data-lhi','label_soldout').html(section.settings.label_soldout);
          }
          if(variant.compare_at_price > variant.price){
            if(variant.available){
              $block_item.attr('data-v-type','sale');
            }
            price += '<del class="lh-product-compare-price">'+ window.HUB.formatMoney(variant.compare_at_price,money_format) +'</del>'
          }
          price += '<ins class="lh-product-price">'+ window.HUB.formatMoney(variant.price,money_format) +'</ins>';
          $price.html(price);
          for(var i = 1 ; i <= 3 ; i++){
            if(variant['option' + i]){
              var wrap_swatch = $block_item.find('.lh-swatch-variations[data-option-index="' + (i - 1) + '"]'),
                  value 			= variant['option' + i];
              if(!wrap_swatch.length) continue;
              var wrap_active = wrap_swatch.find(`.lh-swatch-select[data-value='${value.replace(/'/g, "'")}']`);
              wrap_active.addClass('active').siblings().removeClass('active');
            }
          }
        }else{
          $block_item.attr('data-v-type','unavai');
          $soldout.attr('data-lhi','label_unavai').html(section.settings.label_unavai);
        }
      }
    }
    function countdown(){
      var prefix='lh-countdown-';
      var countdown_trans = {
      	label_dd: section.settings.days,
      	label_hh: section.settings.hours,
      	label_mm: section.settings.minutes,
      	label_ss:  section.settings.seconds,
      	css_class: 'countdown-alt-2'

      };
      $this.find('.count_time').each(function(){
        var wrap_countdown  = $(this),
            is_random       = $(this).hasClass('lh-random-countdown');
        if(is_random){
          var pid = wrap_countdown.data('pid');
          if(pid){
        		var key = prefix+pid;
        		var d = window.localStorage.getItem(key);
        		if (!Date.parse(d) || Date.parse(d) < new Date().getTime()){
        			d = new Date();
        			d.setDate(d.getDate()+ (Math.floor(Math.random() * 14) + 1));
        			window.localStorage.setItem(key,d);
        		}
        		wrap_countdown.html(typeof d == 'string' ? d : d.toISOString());
        	}
        }
        jQuery.fn.countDown &&  wrap_countdown.countDown(countdown_trans);
        wrap_countdown.on('time.elapsed', function () {
        		 wrap_countdown.closest('.lh-product-countdown').remove()
        });

      })
    }
 };						cb.bind($('section[data-section-id="Yt3mTFnMIS"] include[data-name="product-items"][data-id="2"]').get(0))(jQuery);;var cb  = function($) {
  if(document.querySelector('.page-container') && window.getComputedStyle(document.querySelector('.page-container')).transform.indexOf('matrix') != -1){
    document.querySelector('.page-container').style.webkitTransform='none';
    document.querySelector('.page-container').style.transform='none';
  }
 };						cb.bind($('section[data-section-id="Yt3mTFnMIS"]').get(0))(jQuery);};					cb.bind($('section[data-section-id="Yt3mTFnMIS"]').get(0))({						url: "https://library.layouthub.com/HUB/files/U2VwLS0yMDIw/NTk5NDQ1MzA1/shopify-third-release/pages/lIrXN42TyZa9B81G/collection/",						settings: {"image_size":"2362x3543","label_soldout":"SOLD OUT","label_unavai":"UNAVAILABLE","days":"DAYS","hours":"HR","minutes":"MIN","seconds":"SC"}					}, jQuery);})(jQuery);;console.log('This page layout has been built by https://www.layouthub.com');