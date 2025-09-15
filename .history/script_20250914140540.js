let firstFront = document.querySelector('.first-front')
let div1 = document.querySelector('.div1');
let div2 = document.querySelector('.div2');
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-bar nav ul");
// GSAP + Plugins
gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin, TextPlugin);


hamburger.addEventListener("click", () => {
   hamburger.classList.toggle("active");
   navMenu.classList.toggle("show");
});

let tl = gsap.timeline({
   paused: true
});

// النص + الشعار يختفون
tl.to('.begining, .text, .scroll-down', {
   opacity: 0,
   duration: 1
});

// div1 يطلع لليسار
tl.to('.div1', {
   x: -900,
   duration: 1.5
}, ">"); // "<" يعني مع بعض مع اللي قبله

// div2 يطلع لليمين
tl.to('.div2', {
   x: 900,
   duration: 1.5
}, "<");

// اخفاء first-front كلياً
tl.to('.first-front', {
   opacity: 0,
   duration: 1,
   onComplete: () => {
      document.querySelector('.first-container').style.display = "none";
      document.querySelector('.dblclick').style.display = "none";
   }
}, '-=1');

// تشغيل الانيميشن عند double click
document.addEventListener("dblclick", () => {
   tl.play();
});
const scroll = new LocomotiveScroll({
   el: document.querySelector('[data-scroll-container]'),
   smooth: 4
})
scroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("[data-scroll-container]", {
   scrollTop(value) {
      return arguments.length ?
         scroll.scrollTo(value, 0, 0) :
         scroll.scroll.instance.scroll.y;
   },
   getBoundingClientRect() {
      return {
         top: 0,
         left: 0,
         width: window.innerWidth,
         height: window.innerHeight
      };
   },
   pinType: document.querySelector("[data-scroll-container]").style.transform ?
      "transform" :
      "fixed"
});

// تحدّث كل ما يكمل السكروول
ScrollTrigger.addEventListener("refresh", () => scroll.update());
ScrollTrigger.refresh();

//hero-section-animation

let maintl = gsap.timeline({
   repeat: -1,
   yoyo: true
})
let words = ['threats', 'risks', 'attacks', 'dangers']
let secontl = gsap.timeline({
   delay: 0.5
})
words.forEach(word => {
   secontl.to('.tapping', {
      text: word,
      duration: 1.5
   })
   secontl.to('.tapping', {
      text: '',
      duration: 1
   })

})
maintl.add(secontl)

gsap.to('.etape1', {
   '--line-height': '90px',
   scrollTrigger: {
      trigger: '.etape1',
      start: 'top 80%',
      end: '+=100',
      scrub: 1,
      scroller: "[data-scroll-container]",
      onLeave: () => {
         document.querySelector('.etape2').style.background = 'aqua';
      }
   }
});
gsap.to('.etape2', {
   '--line-height2': '90px',
   scrollTrigger: {
      trigger: '.etape2',
      start: 'top 80%',
      end: '+=100',
      scrub: 1,
      scroller: "[data-scroll-container]",
      onLeave: () => {
         document.querySelector('.etape3').style.background = 'aqua';
      }
   }
});

//section2
// ========== Locomotive + GSAP Sync ==========
const locoScroll = new LocomotiveScroll({
   el: document.querySelector("[data-scroll-container]"),
   smooth: true
});

// لما يصير scroll، نعمل update للـ ScrollTrigger
locoScroll.on("scroll", ScrollTrigger.update);

// نعرف ScrollTrigger كيفاش يتحكم في Locomotive
ScrollTrigger.scrollerProxy("[data-scroll-container]", {
   scrollTop(value) {
      return arguments.length ?
         locoScroll.scrollTo(value, 0, 0) :
         locoScroll.scroll.instance.scroll.y;
   },
   getBoundingClientRect() {
      return {
         top: 0,
         left: 0,
         width: window.innerWidth,
         height: window.innerHeight
      };
   },
   pinType: document.querySelector("[data-scroll-container]").style.transform ?
      "transform" :
      "fixed"
});

// تحديث ScrollTrigger بعد refresh
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh();

// ========== Section 2 Animations ==========
let section2tl = gsap.timeline({
    scrollTrigger: {
        trigger: '.section2',
        start: 'top 80%',
        end: '+=600',
        scrub: 1,
        scroller: "[data-scroll-container]"
    }
});

if(window.innerWidth > 800){
    section2tl.from('.underline', { drawSVG: '50% 50%' })
              .from('.line', { drawSVG: '0% 0%' });
} else {
    section2tl.from('.FF', { drawSVG: '0% 0%' });
}

// مشتركة بين الكل
section2tl.from('.head', { drawSVG: '50% 50%' })
          .from('.services', { opacity: 0, y: 20 });
// ========== Glitch Effect Title ==========
let hackeffecttitle = ['111010', '010010', '111001', '1011011', '0011', '11001', '00101', '11001'];
let titleTl;

ScrollTrigger.create({
   trigger: '.section-title',
   scroller: "[data-scroll-container]",
   start: 'top bottom',
   onEnter: () => {
      if (titleTl) titleTl.kill(); // نوقف أي قديم
      titleTl = gsap.timeline();
      hackeffecttitle.forEach(word => {
         titleTl.to('.section-title', {
            text: word,
            duration: 0.15
         });
      });
      titleTl.to('.section-title', {
         text: "Services",
         duration: 0.5
      });
   },
   onLeave: () => {
      if (titleTl) titleTl.kill();
      gsap.to('.section-title', {
         text: "Services",
         duration: 0.5
      });
   }
});

// ========== Section 2 Part 2 Animations ==========
let i;
let serinfos = document.querySelectorAll('.services-information');

serinfos.forEach((serv) => {
   serv.addEventListener('click', e => {
      if (i) {
         i.querySelector('p').style.display = 'none';
         i.style.gridTemplateRows = '1fr';
      }
      serv.style.gridTemplateRows = '1fr 4fr';
      serv.querySelector('p').style.display = 'block';
      i = serv;
   });
});

// دخول العناصر بتأث

// الكلمات أو الرموز اللي تعمل بيها "قليتش"
let hackeffecttitle2 = ['#@$%', 'X0_1', 'LOST', '###', 'A9@', 'H@CK'];

document.querySelectorAll('.services-title').forEach(ser => {
   let originalText = ser.textContent; // النص الأصلي

   ser.addEventListener('mouseenter', e => {
      // نوقف أي أنيميشن قديم
      if (ser.timeline) ser.timeline.kill();

      // نعمل تايملاين جديد
      let tl = gsap.timeline();

      // نمر على الرموز تباعاً
      hackeffecttitle2.forEach(word => {
         tl.to(e.target, {
            text: word,
            duration: 0.15
         });
      });

      // يرجع للنص الأصلي
      tl.to(e.target, {
         text: originalText,
         duration: 0.2
      });

      ser.timeline = tl;
   });
});