let firstFront=document.querySelector('.first-front')
let div1 = document.querySelector('.div1');
let div2 = document.querySelector('.div2');
gsap.registerPlugin(ScrollTrigger);
   
let tl = gsap.timeline({paused: true});

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
  },'-=1');

  // تشغيل الانيميشن عند double click
  document.addEventListener("dblclick", () => {
    tl.play();
  });
//hero-section-animation

  let maintl=gsap.timeline({
    repeat:-1,yoyo:true
  })
  let words=['threats','risks','attacks','dangers']
  let secontl=gsap.timeline({delay:0.5})
  words.forEach(word=>{
    secontl.to('.tapping',{
      text:word,duration:1.5
    })
     secontl.to('.tapping',{
      text:'',duration:1
    })
    
  })
  maintl.add(secontl)
  //section2
    gsap.registerPlugin(DrawSVGPlugin)
    gsap.from('.line',{scrollTrigger:{trigger:'.section2',start:'top 110%',end:'+=800',scrub:2},drawSVG:'0% 0%'})
