gsap.registerPlugin(ScrollTrigger);

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

/* gsap
------------------------------------*/
//fade-animation
const fade = gsap.utils.toArray('.fade');
fade.forEach((act, i) => {
  ScrollTrigger.create({
    trigger: act,
    toggleClass: 'active',
    start: 'top 80%',
    // end: 'bottom top',
    markers: false,
    once: true,
    // toggleActions: 'play none none none'
  });
});

//slide-animation
const reverl = gsap.utils.toArray('.cover-slide-txt');
reverl.forEach((txt, i) => {
  ScrollTrigger.create({
    trigger: txt,
    toggleClass: 'active',
    start: 'top 80%',
    end: 'bottom top',
    markers: false,
    once: true,
    // toggleActions: 'play none none none'
  });
});
//entry-animation
gsap.to('#footerEntryBtn', {
  scrollTrigger: {
    trigger: '.entry-trigger',
    start: 'top center',
    end: 'bottom 100%',
    // toggleClass: 'active',
    toggleActions: 'play pause resume reset', // スクロールを戻したらもう一度開始させる
    markers: false,
  },
  right: '45px',
});

// 縦組みanimations
Splitting();
// gsap.to('.lr-text-anim', {
//   scrollTrigger: {
//     trigger: '.lr-text-anim',
//     start: 'top 80%',
//     end: 'bottom top',
//     toggleClass: 'active',
//     // toggleActions: 'play pause resume reset', // スクロールを戻したらもう一度開始させる
//     markers: false,
//     once: true,
//   },
//   right: '45px',
// });



const scrollTxt = gsap.utils.toArray('.lr-text-anim');
scrollTxt.forEach((scr, i) => {
  ScrollTrigger.create({
    trigger: scr,
    toggleClass: 'active',
    start: 'top 80%',
    end: 'bottom top',
    markers: false,
    once: true,
    // toggleActions: 'play none none none'
  });
});