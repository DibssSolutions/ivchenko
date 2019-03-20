const footerMask = document.querySelector('.js-footer-mask');

window.addEventListener('scroll', () => {
  const scrollSize = window.pageYOffset || document.documentElement.scrollTop;
  const fullHeight = Math.max(
    document.body.scrollHeight,
    document.documentElement.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.offsetHeight,
    document.body.clientHeight,
    document.documentElement.clientHeight
  );
  const innerHeight = window.innerHeight;

  if (scrollSize > fullHeight - 2 * innerHeight) {
    // let sizer = Math.abs((fullHeight - 2 * innerHeight - size) / innerHeight);
    let sizer = (
      (fullHeight - scrollSize - innerHeight) /
      innerHeight
    ).toFixed(5);
    footerMask.style.opacity = sizer;
  }
});
