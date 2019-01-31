const footer = document.querySelector('.footer');

window.addEventListener('scroll', () => {
  const size = window.pageYOffset || document.documentElement.scrollTop;
  const fullHeight = Math.max(
    document.body.scrollHeight,
    document.documentElement.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.offsetHeight,
    document.body.clientHeight,
    document.documentElement.clientHeight
  );
  const innerHeight = window.innerHeight;

  if (size > fullHeight - 2 * innerHeight) {
    // let sizer = Math.abs((fullHeight - 2 * innerHeight - size) / innerHeight);
    let sizer = ((size + 2 * innerHeight - fullHeight) / innerHeight).toFixed(
      5
    );
    footer.style.opacity = sizer;
  }
});
