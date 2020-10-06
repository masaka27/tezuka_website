/* トップ
------------------------------------*/
if ($('body#top').size()) {
  /* 
	------------------------------------*/

  var target = $('<div class="js-slide"></div>');
  $('body').append(target);

  target.ready(function () {
    $('.title-scroll img:nth-child(1)').velocity(
      { opacity: 1.0, top: 0 },
      { duration: 600, delay: 100, easing: 'easeOutExpo' }
    );
    $('.title-scroll img:nth-child(2)').velocity(
      { opacity: 1.0, top: 0 },
      { duration: 600, delay: 200, easing: 'easeOutExpo' }
    );
    $('.title-scroll img:nth-child(3)').velocity(
      { opacity: 1.0, top: 0 },
      { duration: 600, delay: 300, easing: 'easeOutExpo' }
    );
    $('#js-slide1')
      .delay(800)
      .each(function (i) {
        $(this)
          .delay(60 * i)
          .velocity(
            { top: 0, opacity: 1.0 },
            {
              duration: 1200,
              easing: 'easeInOutQuart',
              complete: function (elements) {},
            }
          );
      });

    $('#js-slide1').simplyScroll({
      className: 'vert',
      horizontal: false,
      frameRate: 40,
      pauseOnHover: false,
      speed: 1,
    });
  });
}

/* トップスライダー history
------------------------------------*/
$(document).ready(function () {
  var keys = [
    '１００年の歴史',
    '未来に向けて',
    'Water',
    'Fire',
    'Love',
    'Love',
  ];

  var mySwiper = new Swiper('.swiper-container', {
    effect: 'fade',
    speed: 4000,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.elements',
      clickable: true,
      renderBullet: function (index, className) {
        return '<div class="' + className + '">' + keys[index] + '</div>';
      },
    },
  });
});



//TOPへ戻るボタン
(function ($) {
  const pagetop = $('#pageTop');
  pagetop.click(function () {
    $('body, html').animate({ scrollTop: 0 }, 500); //0.5秒かけてトップへ戻る
    return false;
  });
})(jQuery);