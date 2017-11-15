'use strict'
$(window).ready(function () {
  $.get('pages/logo.html', function (logo) {
    $.get('pages/nav.html', function (nav) {
      $.get('pages/accueil.html', function (accueil) {
        $.get('pages/carte.html', function (carte) {
          $.get('pages/plan.html', function (plan) {
            $('header').html(logo)
            $('nav').html(nav)
            $('main').html(accueil)
            $(window).ready(function () {
              $('.slider').bxSlider({
                pager: false
              }).startAuto()
            })
            $('#accueil').children('button').removeClass('btn-primary').addClass('btn-default')
            $('#accueil').children('button').on('click', function () {
              $('button').removeClass('btn-default').addClass('btn-primary')
              $('#accueil').children('button').removeClass('btn-primary').addClass('btn-default')
              $('main').html(accueil)
              $(document).ready(function () {
                $('.slider').bxSlider({
                  auto: true,
                  pager: false
                }).reloadSlider()
              })
            })
            $('#la-carte').children('button').on('click', function () {
              $('button').removeClass('btn-default').addClass('btn-primary')
              $('#la-carte').children('button').removeClass('btn-primary').addClass('btn-default')
              $('main').html(carte)
              $(document).ready(function () {
                $('.slider').bxSlider({
                  auto: true,
                  pager: false
                }).reloadSlider()
              })
            })
            $('#plan-acces').children('button').on('click', function () {
              $('button').removeClass('btn-default').addClass('btn-primary')
              $('#plan-acces').children('button').removeClass('btn-primary').addClass('btn-default')
              $('main').html(plan)
            })
          })
        })
      })
    })
  })
})
