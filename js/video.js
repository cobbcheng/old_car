$(function () {
  var $play = $('.J_play')
  var $box = $('.show-video-box')
  var $close = $('.J_close')
  var Video = $('.J_main_video')[0]

  var domArr = [
    '<embed src="https://imgcache.qq.com/tencentvideo_v1/playerv3/TPout.swf?max_age=86400&v=20161117&vid=q05242h1nel&auto=0" allowFullScreen="true" quality="high" width="1000" height="600" align="middle" allowScriptAccess="always" type="application/x-shockwave-flash"></embed>',
    '<embed src="https://imgcache.qq.com/tencentvideo_v1/playerv3/TPout.swf?max_age=86400&v=20161117&vid=b0524mss8sr&auto=0" allowFullScreen="true" quality="high" width="1000" height="600" align="middle" allowScriptAccess="always" type="application/x-shockwave-flash"></embed>',
    '<embed src="https://imgcache.qq.com/tencentvideo_v1/playerv3/TPout.swf?max_age=86400&v=20161117&vid=i0524baf6ua&auto=0" allowFullScreen="true" quality="high" width="1000" height="600" align="middle" allowScriptAccess="always" type="application/x-shockwave-flash"></embed>',
    '<embed src="https://imgcache.qq.com/tencentvideo_v1/playerv3/TPout.swf?max_age=86400&v=20161117&vid=i0524ui8cdx&auto=0" allowFullScreen="true" quality="high" width="1000" height="600" align="middle" allowScriptAccess="always" type="application/x-shockwave-flash"></embed>',
    '<embed src="https://imgcache.qq.com/tencentvideo_v1/playerv3/TPout.swf?max_age=86400&v=20161117&vid=a0524ltyt7p&auto=0" allowFullScreen="true" quality="high" width="1000" height="600" align="middle" allowScriptAccess="always" type="application/x-shockwave-flash"></embed>',
    '<embed src="https://imgcache.qq.com/tencentvideo_v1/playerv3/TPout.swf?max_age=86400&v=20161117&vid=p0524px0a8t&auto=0" allowFullScreen="true" quality="high" width="1000" height="600" align="middle" allowScriptAccess="always" type="application/x-shockwave-flash"></embed>',
    '<embed src="https://imgcache.qq.com/tencentvideo_v1/playerv3/TPout.swf?max_age=86400&v=20161117&vid=m052443rl9n&auto=0" allowFullScreen="true" quality="high" width="1000" height="600" align="middle" allowScriptAccess="always" type="application/x-shockwave-flash"></embed>'
  ]
  $play.on('click', function () {
    $box.fadeIn()
    var source = $(this).attr('data-source')
    var video = domArr[source]
    // Video.src = source
    // Video.play()
    $('.J_video_box').html(video)
  })
  $close.on('click', function () {
    $box.fadeOut()
    // Video.pause()
    // Video.src = ''
    $('.J_video_box').html('')
  })
})
