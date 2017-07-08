$(function () {
  var domList = ''
  for (var i = 1; i <= 50; i++) {
    domList += '<div class="item"><img src="./img/logo/' + i +'.png" alt=""></div>'
  }
  $('.logo-list-4c').append(domList)
})
