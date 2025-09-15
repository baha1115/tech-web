let firstFront=document.querySelector('.first-front')
let div1 = document.querySelector('.div1');
let div2 = document.querySelector('.div2');
gsap.registerPlugin(ScrollTrigger);


let tl = gsap.timeline({paused: true});

  // النص + الشعار يختفون
  tl.to('.begining, svg, .scroll-down', {
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
      document.querySelector('.scroll-down').style.display = "none";
      document.querySelector('.hero-section').style.display = "block";
    }
  },'-=1');

  // تشغيل الانيميشن عند double click
  document.addEventListener("dblclick", () => {
    tl.play();
  });
//hero-section-animation
  gsap.registerPlugin(TextPlugin);
  let words=['Data','Future','Business','Identity']
  let maintimeline=gsap.timeline({
    repeat:-1
  })
  words.forEach(word=>{
    let texttimeline=gsap.timeline()
    texttimeline.to('.hook',{
      text:word,duration:0.5
    })
  })