$(document).ready(function () {
  $.get('pages/logo.html', function (logo) {
    $('header').html(logo)
    $.get('pages/nav.html', function (nav) {
      $('nav').html(nav)
      $.get('pages/accueil.html', function (accueil) {
        $('main').html(accueil)
        $(window).ready(function () {
          $('.flexslider').flexslider({
            selector: '.slides > img',
            controlNav: false,
            directionNav: false,
            randomize: true
          })
          $('.flexslider').removeClass('hidden')
        })
        $.get('pages/carte.html', function (carte) {
          $.get('pages/plan.html', function (plan) {
            $('#accueil button').on('click', function () {
              $('button').removeClass('btn-default').addClass('btn-primary')
              $('#accueil').children('button').removeClass('btn-primary').addClass('btn-default')
              $('main').html(accueil)
              $(window).ready(function () {
                $('.flexslider').flexslider({
                  selector: '.slides > img',
                  controlNav: false,
                  directionNav: false,
                  randomize: true
                })
                $('.flexslider').removeClass('hidden')
              })
            })
            $('#la-carte button').on('click', function () {
              $('button').removeClass('btn-default').addClass('btn-primary')
              $('#la-carte').children('button').removeClass('btn-primary').addClass('btn-default')
              $('main').html(carte)
              $(window).ready(function () {
                $('.flexslider').flexslider({
                  selector: '.slides > a',
                  controlNav: false
                })
                $('.flexslider').removeClass('hidden')
              })
            })
            $('#plan-acces button').on('click', function () {
              $('button').removeClass('btn-default').addClass('btn-primary')
              $('#plan-acces').children('button').removeClass('btn-primary').addClass('btn-default')
              $('main').html(plan)
              $('.flexslider').flexslider({
                selector: '.slides > div',
                controlNav: false,
                slideShow: false,
                animation: 'slide'
              })
              $('.flexslider').removeClass('hidden')
            })
          })
        })
      })
    })
  })
})
