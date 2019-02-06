const textarea = $('.js-textarea');

textarea.on('keydown', () => {
  const scrollHeight = textarea.prop('scrollHeight');
  textarea.css('height', scrollHeight);
});
