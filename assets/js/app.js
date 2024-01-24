"use strict";
(self["webpackChunknrdliebling"] = self["webpackChunknrdliebling"] || []).push([["/js/app"],{

/***/ "./js/app.js":
/*!*******************!*\
  !*** ./js/app.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var headroom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! headroom.js */ "./node_modules/headroom.js/dist/headroom.js");
/* harmony import */ var headroom_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(headroom_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var tippy_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tippy.js */ "./node_modules/tippy.js/dist/tippy.esm.js");
/* harmony import */ var tippy_js_dist_tippy_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tippy.js/dist/tippy.css */ "./node_modules/tippy.js/dist/tippy.css");
/* harmony import */ var shave__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! shave */ "./node_modules/shave/dist/shave.es.js");
/* harmony import */ var _tryghost_content_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @tryghost/content-api */ "./node_modules/@tryghost/content-api/es/content-api.js");
/* harmony import */ var fuse_js_dist_fuse_basic_esm_min_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! fuse.js/dist/fuse.basic.esm.min.js */ "./node_modules/fuse.js/dist/fuse.basic.esm.min.js");
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.esm.js");
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! swiper/css */ "./node_modules/swiper/swiper.min.css");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./helpers */ "./js/helpers.js");










jquery__WEBPACK_IMPORTED_MODULE_0___default()(function () {
  if ((0,_helpers__WEBPACK_IMPORTED_MODULE_7__.isRTL)()) {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('html').attr('dir', 'rtl').addClass('rtl');
  }

  var $body = jquery__WEBPACK_IMPORTED_MODULE_0___default()('body');
  var $header = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-header');
  var $announcementBar = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#announcement-bar-root');
  var $openMenu = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-open-menu');
  var $closeMenu = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-close-menu');
  var $menu = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-menu');
  var $toggleSubmenu = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-toggle-submenu');
  var $submenuOption = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-submenu-option')[0];
  var $submenu = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-submenu');
  var $recentSlider = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-recent-slider');
  var $openSecondaryMenu = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-open-secondary-menu');
  var $openSearch = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-open-search');
  var $closeSearch = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-close-search');
  var $search = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-search');
  var $inputSearch = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-input-search');
  var $searchResults = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-search-results');
  var $searchNoResults = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-no-results');
  var $toggleDarkMode = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-toggle-darkmode');
  var $mainNav = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-main-nav');
  var $mainNavLeft = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-main-nav-left');
  var $newsletterElements = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-newsletter');
  var $nativeComments = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-native-comments > div > iframe')[0];
  var currentSavedTheme = localStorage.getItem('theme');
  var fuse = null;
  var submenuIsOpen = false;
  var secondaryMenuTippy = null;

  var showSubmenu = function showSubmenu() {
    $header.addClass('submenu-is-active');
    $toggleSubmenu.addClass('active');
    $submenu.removeClass('closed').addClass('opened');
  };

  var hideSubmenu = function hideSubmenu() {
    $header.removeClass('submenu-is-active');
    $toggleSubmenu.removeClass('active');
    $submenu.removeClass('opened').addClass('closed');
  };

  var toggleScrollVertical = function toggleScrollVertical() {
    $body.toggleClass('no-scroll-y');
  };

  var tryToRemoveNewsletter = function tryToRemoveNewsletter() {
    if (typeof disableNewsletter !== 'undefined' && disableNewsletter) {
      $newsletterElements.remove();
    }
  };

  var trySearchFeature = function trySearchFeature() {
    if (typeof ghostSearchApiKey !== 'undefined' && typeof nativeSearchEnabled === 'undefined') {
      getAllPosts(ghostHost, ghostSearchApiKey);
    } else {
      $openSearch.css('visibility', 'hidden');
      $closeSearch.remove();
      $search.remove();
    }
  };

  var getAllPosts = function getAllPosts(host, key) {
    var api = new _tryghost_content_api__WEBPACK_IMPORTED_MODULE_4__["default"]({
      url: host,
      key: key,
      version: 'v5.0'
    });
    var allPosts = [];
    var fuseOptions = {
      shouldSort: true,
      ignoreLocation: true,
      findAllMatches: true,
      includeScore: true,
      minMatchCharLength: 2,
      keys: ['title', 'custom_excerpt', 'tags.name']
    };
    api.posts.browse({
      limit: 'all',
      include: 'tags',
      fields: 'id, title, url, published_at, custom_excerpt'
    }).then(function (posts) {
      for (var i = 0, len = posts.length; i < len; i++) {
        allPosts.push(posts[i]);
      }

      fuse = new fuse_js_dist_fuse_basic_esm_min_js__WEBPACK_IMPORTED_MODULE_8__["default"](allPosts, fuseOptions);
    })["catch"](function (err) {
      console.log(err);
    });
  };

  var toggleDesktopTopbarOverflow = function toggleDesktopTopbarOverflow(disableOverflow) {
    if (!(0,_helpers__WEBPACK_IMPORTED_MODULE_7__.isMobile)()) {
      if (disableOverflow) {
        $mainNav.addClass('toggle-overflow');
        $mainNavLeft.addClass('toggle-overflow');
      } else {
        $mainNav.removeClass('toggle-overflow');
        $mainNavLeft.removeClass('toggle-overflow');
      }
    }
  };

  $openMenu.on('click', function () {
    $header.addClass('mobile-menu-opened');
    $menu.addClass('opened');
    toggleScrollVertical();
  });
  $closeMenu.on('click', function () {
    $header.removeClass('mobile-menu-opened');
    $menu.removeClass('opened');
    toggleScrollVertical();
  });
  $toggleSubmenu.on('click', function () {
    submenuIsOpen = !submenuIsOpen;

    if (submenuIsOpen) {
      showSubmenu();
    } else {
      hideSubmenu();
    }
  });
  $openSearch.on('click', function () {
    $search.addClass('opened');
    setTimeout(function () {
      $inputSearch.trigger('focus');
    }, 400);
    toggleScrollVertical();
  });
  $closeSearch.on('click', function () {
    $inputSearch.trigger('blur');
    $search.removeClass('opened');
    toggleScrollVertical();
  });
  $inputSearch.on('keyup', function () {
    if ($inputSearch.val().length > 0 && fuse) {
      var results = fuse.search($inputSearch.val());
      var bestResults = results.filter(function (result) {
        if (result.score <= 0.5) {
          return result;
        }
      });
      var htmlString = '';

      if (bestResults.length > 0) {
        for (var i = 0, len = bestResults.length; i < len; i++) {
          htmlString += "\n          <article class=\"m-result\">            <a href=\"".concat(bestResults[i].item.url, "\" class=\"m-result__link\">              <h3 class=\"m-result__title\">").concat(bestResults[i].item.title, "</h3>              <span class=\"m-result__date\">").concat((0,_helpers__WEBPACK_IMPORTED_MODULE_7__.formatDate)(bestResults[i].item.published_at), "</span>            </a>          </article>");
        }

        $searchNoResults.hide();
        $searchResults.html(htmlString);
        $searchResults.show();
      } else {
        $searchResults.html('');
        $searchResults.hide();
        $searchNoResults.show();
      }
    } else {
      $searchResults.html('');
      $searchResults.hide();
      $searchNoResults.hide();
    }
  });
  $toggleDarkMode.on('change', function () {
    if ($toggleDarkMode.is(':checked')) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('html').attr('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('html').attr('data-theme', 'light');
      localStorage.setItem('theme', 'light');
    }

    if ($nativeComments) {
      $nativeComments.contentDocument.location.reload(true);
    }
  });
  $toggleDarkMode.on('mouseenter', function () {
    toggleDesktopTopbarOverflow(true);
  });
  $toggleDarkMode.on('mouseleave', function () {
    toggleDesktopTopbarOverflow(false);
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('click', function (e) {
    if (submenuIsOpen) {
      if ($submenuOption && !$submenuOption.contains(e.target)) {
        submenuIsOpen = false;
        hideSubmenu();
      }
    }
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on('keyup', function (e) {
    if (e.key === 'Escape' && $search.hasClass('opened')) {
      $closeSearch.trigger('click');
    }
  });

  if (currentSavedTheme) {
    if (currentSavedTheme === 'dark') {
      $toggleDarkMode.each(function () {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr('checked', true);
      });
    }
  }

  if ($header.length > 0) {
    var headroom = new (headroom_js__WEBPACK_IMPORTED_MODULE_1___default())($header[0], {
      tolerance: {
        down: 10,
        up: 20
      },
      offset: 15,
      onUnpin: function onUnpin() {
        if (!(0,_helpers__WEBPACK_IMPORTED_MODULE_7__.isMobile)() && secondaryMenuTippy) {
          var desktopSecondaryMenuTippy = secondaryMenuTippy[0];

          if (desktopSecondaryMenuTippy && desktopSecondaryMenuTippy.state.isVisible) {
            desktopSecondaryMenuTippy.hide();
          }
        }
      }
    });
    headroom.init();
  }

  if ($announcementBar.length > 0) {
    $header.addClass('with-announcement-bar');
    setTimeout(function () {
      $header.removeAttr('data-animate');
    }, 500);
    var barMutationObserver = new MutationObserver(function (e) {
      if (e[0].addedNodes.length) {
        $announcementBar.detach().prependTo($header);
        var barHeight = $announcementBar.height();
        document.documentElement.style.setProperty('--announcement-bar-height', "".concat(barHeight, "px"));
      }

      if (e[0].removedNodes.length) {
        document.documentElement.style.setProperty('--announcement-bar-height', '0px');
      }
    });
    var barResizeObserver = new ResizeObserver(function (entries) {
      entries.forEach(function (entry) {
        var barHeight = entry.contentRect.height;
        document.documentElement.style.setProperty('--announcement-bar-height', "".concat(barHeight, "px"));
      });
    });
    barMutationObserver.observe($announcementBar[0], {
      childList: true
    });
    barResizeObserver.observe($announcementBar[0]);
  } else {
    setTimeout(function () {
      $header.removeAttr('data-animate');
    }, 500);
  }

  if ($recentSlider.length > 0) {
    var recentSwiper = new swiper__WEBPACK_IMPORTED_MODULE_5__["default"]('.js-recent-slider', {
      modules: [swiper__WEBPACK_IMPORTED_MODULE_5__.FreeMode, swiper__WEBPACK_IMPORTED_MODULE_5__.A11y],
      freeMode: true,
      slidesPerView: 'auto',
      a11y: true,
      on: {
        init: function init() {
          (0,shave__WEBPACK_IMPORTED_MODULE_3__["default"])('.js-recent-article-title', 50);
        }
      }
    });
  }

  if ($openSecondaryMenu.length > 0) {
    var template = document.getElementById('secondary-navigation-template');
    secondaryMenuTippy = (0,tippy_js__WEBPACK_IMPORTED_MODULE_9__["default"])('.js-open-secondary-menu', {
      appendTo: document.body,
      content: template.innerHTML,
      allowHTML: true,
      arrow: true,
      trigger: 'click',
      interactive: true,
      onShow: function onShow() {
        toggleDesktopTopbarOverflow(true);
      },
      onHidden: function onHidden() {
        toggleDesktopTopbarOverflow(false);
      }
    });
  }

  (0,tippy_js__WEBPACK_IMPORTED_MODULE_9__["default"])('.js-tooltip', {
    allowHTML: true
  });
  (0,shave__WEBPACK_IMPORTED_MODULE_3__["default"])('.js-article-card-title', 100);
  (0,shave__WEBPACK_IMPORTED_MODULE_3__["default"])('.js-article-card-title-no-image', 250);
  tryToRemoveNewsletter();
  trySearchFeature();
});

/***/ }),

/***/ "./js/helpers.js":
/*!***********************!*\
  !*** ./js/helpers.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   adjustImageGallery: () => (/* binding */ adjustImageGallery),
/* harmony export */   formatDate: () => (/* binding */ formatDate),
/* harmony export */   getParameterByName: () => (/* binding */ getParameterByName),
/* harmony export */   isMobile: () => (/* binding */ isMobile),
/* harmony export */   isRTL: () => (/* binding */ isRTL),
/* harmony export */   makeImagesZoomable: () => (/* binding */ makeImagesZoomable),
/* harmony export */   managePostImages: () => (/* binding */ managePostImages)
/* harmony export */ });
var isRTL = function isRTL() {
  var $html = document.querySelector('html');
  return ['ar', 'he', 'fa'].includes($html.getAttribute('lang'));
};
var isMobile = function isMobile() {
  var width = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '768px';
  return window.matchMedia("(max-width: ".concat(width, ")")).matches;
};
var formatDate = function formatDate(date) {
  if (date) {
    return new Date(date).toLocaleDateString(document.documentElement.lang, {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }

  return '';
};
var getParameterByName = function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, '\\$&');
  var regex = new RegExp("[?&]".concat(name, "(=([^&#]*)|&|#|$)"));
  var results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
};
var adjustImageGallery = function adjustImageGallery() {
  var images = document.querySelectorAll('.kg-gallery-image img');

  for (var i = 0, len = images.length; i < len; i++) {
    var container = images[i].closest('.kg-gallery-image');
    var width = images[i].attributes.width.value;
    var height = images[i].attributes.height.value;
    var ratio = width / height;
    container.style.flex = "".concat(ratio, " 1 0%");
  }
};
var managePostImages = function managePostImages($) {
  $('.js-post-content').find('img').each(function () {
    if (!$(this).closest('figure').hasClass('kg-bookmark-card') && !$(this).closest('figure').hasClass('kg-nft-card') && !$(this).parent().is('a') && !$(this).hasClass('kg-product-card-image') && !$(this).hasClass('kg-audio-thumbnail')) {
      $(this).addClass('js-zoomable');
    }
  });
};
var makeImagesZoomable = function makeImagesZoomable($, mediumZoom) {
  var zoom = mediumZoom('.js-zoomable');
  zoom.on('opened', function () {
    setTimeout(function () {
      var $mediumZoomImages = $('.medium-zoom-image--opened');

      if ($mediumZoomImages.length > 1) {
        $mediumZoomImages.last().hide();
      }
    }, 10);
  });
};

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["/js/vendor"], () => (__webpack_exec__("./js/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);