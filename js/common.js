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
  var replace = $('.nav-item:nth-child(5)').html()
  $('.nav-item:nth-child(5)').html(replace.replace('COOPERATE', 'COOPERATION'))
  $('.nav-item:nth-child(5)>.nav-orders>li').each(function () {
    var content = $(this).find('a').text()
    $(this).find('a').text(content.toUpperCase())
  })
  $('.nav-item:nth-child(5)>.nav-orders>li').on('click', function (e) {
    e.preventDefault()
    var index = $(this).index()
    if (index === 0) {
      window.location.href = './cooperation.html'
    } else if (index === 1) {
      window.location.href = './legend.html'
    } else if (index === 2) {
      window.location.href = './part-sponsors.html'
    } else if (index === 3) {
      window.location.href = './associated-media.html'
    }
  })

  $('.J_contact').on('click', function () {
    $('.common-footer')[0].scrollIntoView()
  })

  var $footer = $('.common-footer')
  $footer.find('.mail p').text('autohelper@sina.com')
  $footer.find('.location p').text('You Fu Kong Jian, 7th Floor, Block C, Long Yuan Wen Hua Chuang Yi Yuan, Xi Dian No.1110, Chao Yang District, Beijing, 100123, P. R. China')
  $footer.find('.phone p').text('+0086-10-63380601  +0086-10-63380602')
})
