/* image zoom - add data-action="zoom" to images */

+function ($) {
  'use strict';

  // CSS TRANSITION SUPPORT (Shoutout: http://www.modernizr.com/)
  // ============================================================

  function transitionEnd() {
    var el = document.createElement('bootstrap')

    var transEndEventNames = {
      WebkitTransition : 'webkitTransitionEnd',
      MozTransition    : 'transitionend',
      OTransition      : 'oTransitionEnd otransitionend',
      transition       : 'transitionend'
    }

    for (var name in transEndEventNames) {
      if (el.style[name] !== undefined) {
        return { end: transEndEventNames[name] }
      }
    }

    return false // explicit for ie8 (  ._.)
  }

  // http://blog.alexmaccaw.com/css-transitions
  $.fn.emulateTransitionEnd = function (duration) {
    var called = false
    var $el = this
    $(this).one('bsTransitionEnd', function () { called = true })
    var callback = function () { if (!called) $($el).trigger($.support.transition.end) }
    setTimeout(callback, duration)
    return this
  }

  $(function () {
    $.support.transition = transitionEnd()

    if (!$.support.transition) return

    $.event.special.bsTransitionEnd = {
      bindType: $.support.transition.end,
      delegateType: $.support.transition.end,
      handle: function (e) {
        if ($(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
      }
    }
  })

  // Video playback

  $('.demo-video').addClass('demo-video-paused');
  $('.demo-video').bind('click', function () {
      var video = $(this).find('video').get(0);
      if (video.paused) {
          video.play();
      } else {
          video.pause();
      }
  });

  $('.demo-video').bind('mouseenter', function () {
      var video = $(this).find('video').get(0);
      if (!video.paused) {
          $(this).addClass('demo-video-hover');
      }
  });

  $('.demo-video').bind('mouseleave', function () {
      var video = $(this).find('video').get(0);
      if (!video.paused) {
          $(this).removeClass('demo-video-hover');
      }
  });

  $('.demo-video video').on('pause', function() {
      $(this).parent().addClass('demo-video-paused');
      $(this).parent().removeClass('demo-video-hover');
  });

  $('.demo-video video').on('play', function() {
      $(this).parent().removeClass('demo-video-paused');
  });

  // drawer

  $(document).ready(function() {
    $('.drawer').drawer();
  });

}(jQuery);

// Code for creating links from heading IDs
//
// const headings = document.querySelectorAll('h3,h4'); // 1
// const linkContent = '🔗'; // 2
// for (const heading of headings) { // 3
//     const linkIcon = document.createElement('a'); // 4
//     linkIcon.setAttribute('href', `#${heading.id}`); // 5
//     linkIcon.innerHTML = linkContent; // 6
//     heading.appendChild(linkIcon); // 7
// }
//
