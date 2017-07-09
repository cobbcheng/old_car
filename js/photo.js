$(function () {
  var $picNode = $('.pic-for-show')
  var $picBox = $('.show-pic-box')

  $('body').on('click', '.photo-list li', function () {
    var url = $(this).find('img').attr('src')
    $picNode.attr('src', url)
    $picBox.fadeIn()
    $('body').css('overflow', 'hidden')
  })
  $('.J_close').on('click', function () {
    $picBox.fadeOut()
    $picNode.attr('src', '')
    $('body').css('overflow', 'auto')
  })
  // render
  var list = ''
  for (var i = 1; i <= 32; i++) {
    list += '<li><img src="http://www.classiccarchina.org/newsite/piclist/p' + i +'.jpg" alt=""></li>'
  }
  $('.J_list').append(list)
})
