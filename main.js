'use strict'
$(document).ready(function() {
  $.get('pages/logo.html', function(data) {
    $('#header').html(data)
  })
  $.get('pages/nav.html', function(data) {
    $('#nav').html(data)
    $('#accueil').children('button').removeClass('btn-primary').addClass('btn-default')
    $('#accueil').children('button').click(function() {
      if (!$('#accueil').children('button').hasClass('btn-default')) {
        $('button').removeClass('btn-default').addClass('btn-primary')
        $('#accueil').children('button').removeClass('btn-primary').addClass('btn-default')
        $.get('pages/diapo.html', function(data) {
          $('#main').html(data)
        })
      }
    })
    $('#la-carte').children('button').click(function() {
      if (!$('#la-carte').children('button').hasClass('btn-default')) {
        $('button').removeClass('btn-default').addClass('btn-primary')
        $('#la-carte').children('button').removeClass('btn-primary').addClass('btn-default')
        $.get('pages/carte.html', function(data) {
          $('#main').html(data)
        })
      }
    })
    $('#en-images').children('button').click(function() {
      if (!$('#en-images').children('button').hasClass('btn-default')) {
        $('button').removeClass('btn-default').addClass('btn-primary')
        $('#en-images').children('button').removeClass('btn-primary').addClass('btn-default')
        $.get('pages/diapo.html', function(data) {
          $('#main').html(data)
        })
      }
    })
    $('#notre-histoire').children('button').click(function() {
      if (!$('#notre-histoire').children('button').hasClass('btn-default')) {
        $('button').removeClass('btn-default').addClass('btn-primary')
        $('#notre-histoire').children('button').removeClass('btn-primary').addClass('btn-default')
        $.get('pages/histor.html', function(data) {
          $('#main').html(data)
        })
      }
    })
    $('#plan-acces').children('button').click(function() {
      if (!$('#plan-acces').children('button').hasClass('btn-default')) {
        $('button').removeClass('btn-default').addClass('btn-primary')
        $('#plan-acces').children('button').removeClass('btn-primary').addClass('btn-default')
        $.get('pages/plan.html', function(data) {
          $('#main').html(data)
        })
      }
    })
    $('#avis').children('button').click(function() {
      if (!$('#avis').children('button').hasClass('btn-default')) {
        $('button').removeClass('btn-default').addClass('btn-primary')
        $('#avis').children('button').removeClass('btn-primary').addClass('btn-default')
        $.get('pages/avis.html', function(data) {
          $('#main').html(data)
        })
      }
    })
    $('#nous-contacter').children('button').click(function() {
      if (!$('#nous-contacter').children('button').hasClass('btn-default')) {
        $('button').removeClass('btn-default').addClass('btn-primary')
        $('#nous-contacter').children('button').removeClass('btn-primary').addClass('btn-default')
        $.get('pages/contact.html', function(data) {
          $('#main').html(data)
        })
      }
    })
  })
  $.get('pages/diapo.html', function(data) {
    $('#main').html(data)
  })
})