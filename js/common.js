$(function () {
  // nav tab
  $('.has-order').hover(function () {
    $('.has-order').removeClass('active')
    $(this).addClass('active')
  }, function () {
    $('.has-order').removeClass('active')
  })

  $('.scroll-p').on('click', function () {
    $('.section-partners')[0].scrollIntoView()
  })

  $('.scroll-c').on('click', function () {
    $('.section-contact')[0].scrollIntoView()
  })
})
