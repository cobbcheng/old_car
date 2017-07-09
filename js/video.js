$(function () {
  var $play = $('.J_play')
  var $box = $('.show-video-box')
  var $close = $('.J_close')
  var Video = $('.J_main_video')[0]
  $play.on('click', function () {
    $box.fadeIn()
    var source = $(this).attr('data-source')
    Video.src = source
    Video.play()
  })
  $close.on('click', function () {
    $box.fadeOut()
    Video.pause()
    Video.src = ''
  })
})
