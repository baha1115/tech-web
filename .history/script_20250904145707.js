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
    let titletl2;
    let titletl;
    let section2tl=gsap.timeline({scrollTrigger:{trigger:'.section2',start:'top 80%',end:'+=600',scrub:2}})
    section2tl.from('.underline',{drawSVG:'50% 50%'})
    section2tl.from('.line',{drawSVG:'0% 0%'})
    section2tl.from('.head',{drawSVG:'50% 50%'})
    section2tl.from('.services',{opacity:0,stagger:0.2})
     gsap.to('.section-title',{
      scrollTrigger:{trigger:'.section2',start:'top bottom',end:'+=500',onEnter:()=>{
      let hackeffecttitle=['111010','010010','111001','1011011','0011','11001','00101','11001']
    titletl=gsap.timeline({scrollTrigger:{trigger:'.section-title',start:'top bottom'}
      ,repeat:-1,yoyo:true
    })
    titletl2=gsap.timeline()
    hackeffecttitle.forEach(word=>{
       titletl2.to('.section-title',{
        text:word,duration:0.2
       })

    })
    titletl.add(titletl2)
      },onLeave:()=>{
        titletl.pause()
        titletl2.pause()
        gsap.to('.section-title',{text:'Services',duration:1})}},
    })
    
    //section2-part2
    let i;
    let serinfos=document.querySelectorAll('.services-information')
    serinfos.forEach((serv)=>{
      serv.addEventListener('click',e=>{
        if(i){
          i.querySelector('p').style.display='none'
          i.style.gridTemplateRows='1fr'
        }
        serv.style.gridTemplateRows='1fr 4fr'
        serv.querySelector('p').style.display='block'
         i=serv
      })
    })
    gsap.from('.si',{
      opacity:0,y:10,stagger:0.2,scrollTrigger:{
        trigger:'.section2-part2',start:'top 80%',scrub:1
      }
    })
    //glitch-part
  