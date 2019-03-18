const videos = $('.js-video-wrapper');

videos.each((index, el) => {
  const video = $(el).find('.js-video')[0];
  const btn = $(el).find('.js-video-play-btn');

  btn.on('click', () => {
    video.play();
  });
});
