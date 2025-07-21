$(function () {
  // Load logo
  $.get('pages/logo.html').then(function (logo) {
    $('header').html(logo);
    return $.get('pages/nav.html');
  }).then(function (nav) {
    $('nav').html(nav);
    return $.get('pages/accueil.html');
  }).then(function (accueil) {
    $('main').html(accueil);
    initSlider('.slides > img');

    return Promise.all([
      $.get('pages/carte.html'),
      $.get('pages/plan.html')
    ]).then(function ([carte, plan]) {
      setupButtons(accueil, carte, plan);
    });
  });

  function initSlider(selector) {
    $('.flexslider').flexslider({
      selector: selector,
      controlNav: false,
      directionNav: false,
      randomize: true
    });
    $('.flexslider').removeClass('hidden');
  }

  function setupButtons(accueil, carte, plan) {
    $('#accueil button').on('click', function () {
      updateButtons('#accueil');
      $('main').html(accueil);
      initSlider('.slides > img');
    });

    $('#la-carte button').on('click', function () {
      updateButtons('#la-carte');
      $('main').html(carte);
      $('.flexslider').flexslider({
        selector: '.slides > a',
        controlNav: false
      });
      $('.flexslider').removeClass('hidden');
    });

    $('#plan-acces button').on('click', function () {
      updateButtons('#plan-acces');
      $('main').html(plan);
      $('.flexslider').flexslider({
        selector: '.slides > div',
        controlNav: false,
        slideShow: false,
        animation: 'slide'
      });
      $('.flexslider').removeClass('hidden');
    });
  }

  function updateButtons(activeId) {
    $('button').removeClass('btn-default').addClass('btn-primary');
    $(activeId).children('button').removeClass('btn-primary').addClass('btn-default');
  }
});
