// import { FIXED } from '../constants';

// const footerMask = document.querySelector('.js-footer-mask');
// const footer = document.querySelector('.js-footer');

// window.addEventListener('scroll', () => {
//   const scrollSize = window.pageYOffset || document.documentElement.scrollTop;
//   const fullHeight = Math.max(
//     document.body.scrollHeight,
//     document.documentElement.scrollHeight,
//     document.body.offsetHeight,
//     document.documentElement.offsetHeight,
//     document.body.clientHeight,
//     document.documentElement.clientHeight
//   );
//   const innerHeight = window.innerHeight;

//   if (scrollSize > fullHeight - 2 * innerHeight) {
//     console.log(scrollSize, fullHeight);
//     footer.classList.add(FIXED);
//     document.body.style.paddingBottom = '100vh';
//     //   footerMask.style.opacity = sizer;
//   }
//   //   // let sizer = Math.abs((fullHeight - 2 * innerHeight - size) / innerHeight);
//   //   let sizer = ((fullHeight - scrollSize - innerHeight) / innerHeight).toFixed(
//   //     5
//   //   );
//   //   footer.classList.add(FIXED);
//   //   footerMask.style.opacity = sizer;
//   // } else {
//   //   footer.classList.remove(FIXED);
//   // }
// });

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
