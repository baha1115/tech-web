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
  let words = ['World','Future','Identity'];

  let mainTimeline = gsap.timeline({
    repeat: -1 // loop للأبد
  });

  for(let i=0;i<=words.length;i++){
    if(i=words.length){
      i=0
    }
    let textTimeline = gsap.timeline({ repeatDelay: 1 });

    // أولاً يكتب الكلمة
    textTimeline.to(".hook", {
      text: words[i],
      duration: 1.5,
      ease: "power1.inOut"
    });

    // بعدين يمسحها
    textTimeline.to(".hook", {
      text: "",
      duration: 1,
      ease: "power1.inOut"
    });

    mainTimeline.add(textTimeline);
  }