'use strict'
$(window).ready(function () {
  $.get('pages/logo.html', function (data) {
    $('header').html(data)
  })
  $.get('pages/nav.html', function (data) {
    $('nav').html(data)
    $('#accueil').children('button').removeClass('btn-primary').addClass('btn-default')
    $('#accueil').children('button').on('click', function () {
      $('button').removeClass('btn-default').addClass('btn-primary')
      $('#accueil').children('button').removeClass('btn-primary').addClass('btn-default')
      $.get('pages/accueil.html', function (data) {
        $('main').html(data)
        $(document).ready(function () {
          $('.slider').bxSlider({
            auto: true,
            pager: false
          })
        })
      })
    })
    $('#la-carte').children('button').on('click', function () {
      $('button').removeClass('btn-default').addClass('btn-primary')
      $('#la-carte').children('button').removeClass('btn-primary').addClass('btn-default')
      $.get('pages/carte.html', function (data) {
        $('main').html(data)
        $(document).ready(function () {
          $('.slider').bxSlider({
            auto: true,
            pager: false
          })
        })
      })
    })
    $('#plan-acces').children('button').on('click', function () {
      $('button').removeClass('btn-default').addClass('btn-primary')
      $('#plan-acces').children('button').removeClass('btn-primary').addClass('btn-default')
      $.get('pages/plan.html', function (data) {
        $('main').html(data)
      })
    })
  })
  $.get('pages/accueil.html', function (data) {
    $('main').html(data)
    $(document).ready(function () {
      $('.slider').bxSlider({
        auto: true,
        pager: false
      })
    })
  })
})
