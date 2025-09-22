// ================== المتغيرات العامة ==================
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-bar nav ul");

// ================== تفعيل إضافات GSAP ==================
gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin, TextPlugin);

// ================== قائمة الهامبرغر ==================
hamburger.addEventListener("click", () => {
   hamburger.classList.toggle("active");
   navMenu.classList.toggle("show");
});

// ================== تهيئة Locomotive Scroll + ScrollTrigger ==================
const locoScroll = new LocomotiveScroll({
   el: document.querySelector("[data-scroll-container]"),
   smooth: true
});

locoScroll.on("scroll", ScrollTrigger.update);

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
      "transform" : "fixed"
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh();

// ================== أنيميشن الهيرو ==================
let maintl = gsap.timeline({ repeat: -1, yoyo: true });
let words = ['threats', 'risks', 'attacks', 'dangers'];
let secontl = gsap.timeline({ delay: 0.5 });

words.forEach(word => {
   secontl.to('.tapping', { text: word, duration: 1.5 })
          .to('.tapping', { text: '', duration: 1 });
});
maintl.add(secontl);

// ================== أنيميشن مراحل الأمان ==================
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

// ================== أنيميشن Section 2 ==================
let section2tl = gsap.timeline({
  scrollTrigger: {
    trigger: '.section2',
    start: 'top 80%',
    end: '+=600',
    scrub: 1,
    scroller: "[data-scroll-container]"
  }
});

ScrollTrigger.matchMedia({
  // شاشات كبيرة (حاسوب)
  "(min-width:1025px)": function() {
    document.querySelector('.paths').style.display = 'none';
    document.querySelector('.arrows').style.display = 'block';
    document.querySelector('.ipad-paths').style.display = 'none';
    section2tl.from('.underline', { drawSVG: '50% 50%' })
              .from('.line', { drawSVG: '0% 0%' })
              .from('.head', { drawSVG: '50% 50%' })
              .from('.services', { opacity: 0, y: 20 });
  },
  // شاشات iPad
  "(min-width: 501px) and (max-width: 1024px)": function() {
    document.querySelector('.paths').style.display = 'none';
    document.querySelector('.arrows').style.display = 'none';
    document.querySelector('.ipad-paths').style.display = 'block';
    section2tl.from('.pl', { drawSVG: '0% 0%' })
              .from('.services', { opacity: 0, y: 30 });
  },
  // شاشات صغيرة (جوال)
  "(max-width: 500px)": function() {
    document.querySelector('.paths').style.display = 'block';
    document.querySelector('.arrows').style.display = 'none';
    document.querySelector('.ipad-paths').style.display = 'none';
    section2tl.from('.FF', { drawSVG: '0% 0%' })
              .from('.services', { opacity: 0, y: 30 });
  }
});

// ================== تأثير Glitch على العنوان ==================
let hackeffecttitle = ['111010', '010010', '111001', '1011011', '0011', '11001', '00101', '11001'];
let titleTl;

ScrollTrigger.create({
   trigger: '.section-title',
   scroller: "[data-scroll-container]",
   start: 'top bottom',
   onEnter: () => {
      if (titleTl) titleTl.kill();
      titleTl = gsap.timeline();
      hackeffecttitle.forEach(word => {
         titleTl.to('.section-title', { text: word, duration: 0.15 });
      });
      titleTl.to('.section-title', { text: "Services", duration: 0.5 });
   },
   onLeave: () => {
      if (titleTl) titleTl.kill();
      gsap.to('.section-title', { text: "Services", duration: 0.5 });
   }
});

// ================== أنيميشن معلومات الخدمات ==================
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

// ================== تأثير Glitch على عناوين الخدمات ==================
let hackeffecttitle2 = ['#@$%', 'X0_1', 'LOST', '###', 'A9@', 'H@CK'];
document.querySelectorAll('.services-title').forEach(ser => {
   let originalText = ser.textContent;
   ser.addEventListener('mouseenter', e => {
      if (ser.timeline) ser.timeline.kill();
      let tl = gsap.timeline();
      hackeffecttitle2.forEach(word => {
         tl.to(e.target, { text: word, duration: 0.15 });
      });
      tl.to(e.target, { text: originalText, duration: 0.2 });
      ser.timeline = tl;
   });
});