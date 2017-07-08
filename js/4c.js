$(function () {
  var domList = ''
  for (var i = 1; i <= 50; i++) {
    domList += '<div class="item"><img src="./img/logo/' + i +'.png" alt=""></div>'
  }
  $('.logo-list-4c').append(domList)

  $('.banner').unslider({
    autoplay: true,
    arrows: false,
    delay: 5000,
    infinite: true
  })

  $('.J_contact').on('click', function () {
    $('.fc-footer')[0].scrollIntoView()
  })
})
