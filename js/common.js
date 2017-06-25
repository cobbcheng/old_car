$(function () {
  // nav tab
  $('.has-order').hover(function () {
    $('.has-order').removeClass('active')
    $(this).addClass('active')
  }, function () {
    $('.has-order').removeClass('active')
  })
})
