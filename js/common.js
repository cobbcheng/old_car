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
  $('.nav-item:nth-child(5)>.nav-orders>li>a').on('click', function (e) {
    e.preventDefault()

  })
  $('.nav-item:nth-child(5)>.nav-orders>li').on('click', function (e) {
    e.preventDefault()
    var index = $(this).index()
    if (index === 0) {

    } else if (index === 1) {

    } else if (index === 2) {
      window.location.href = './part-sponsors.html'
    } else if (index === 3) {

    }
  })
})
