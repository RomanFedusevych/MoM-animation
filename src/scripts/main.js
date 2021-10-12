import gsap from 'gsap';

let now = Date.now();
let i = 0;

  function throttle(cb, interval) {
      return function() {
          if ((now + interval - Date.now()) < 0) {
              cb();
              now = Date.now();
          }
      }
  }

  const onScroll = throttle(() => {
    i++;

    if (i === 1) {
      gsap.to('.slide__video', {
        opacity: 1,
        duration: 2
      });
      gsap.to('.slide__svg', {
        opacity: 0, 
        duration: 2, 
        delay: 0 
      })
    }

    if (i === 3) {
      gsap.to('.slide__video', {
        opacity: 0,
        duration: 1
      });
      gsap.fromTo('.slide__svgBlack', 
      {height: '0vw'}, {
        opacity: 1, 
        height: '50vw', 
        duration: 2, 
        delay: 0
      })
    } 

    if (i === 5) {
      gsap.to('.slide__svgBlack', {
        opacity: 1,
        duration: 2, 
        delay: 0
      })
      gsap.to('.slide__svg', { 
        opacity: 1, 
        duration: 2, 
        delay: 0 
      })

      i = 0;
    } 
  }, 1000);

window.addEventListener('wheel', function(event) {
  if (event.deltaY < 0 || event.deltaY > 0) {
    onScroll();
  }
})
