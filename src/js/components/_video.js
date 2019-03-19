const videos = $('.js-video-wrapper');

videos.each((index, el) => {
  const video = $(el).find('.js-video')[0];
  const playBtn = $(el).find('.js-video-play-btn');
  const pauseBtn = $(el).find('.js-video-pause-btn');

  playBtn.on('click', () => {
    video.play();
    $(el).addClass('is-playing');
    $(el).removeClass('is-paused');
  });

  pauseBtn.on('click', () => {
    video.pause();
    $(el).addClass('is-paused');
    $(el).removeClass('is-playing');
  });

});
