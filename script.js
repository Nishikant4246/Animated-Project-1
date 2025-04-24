function page1Animation(){
    var tl = gsap.timeline()

tl.from("nav h1, nav h4, nav button",{
    y: -20,
    duration: 1,
    delay:0.4,
    opacity:0,
    stagger:0.5
})
tl.from(".center-part1 h1, .center-part1 p, .center-part1 button",{
   x:-100,
   duration:0.5,
   delay:0.2,
   opacity:0,
   stagger:1,
})
tl.from(".center-part2",{
   x:100,
   duration:0.3,
   delay:0.1,
   opacity:0,
})
tl.from(".section1bottom img", {
    y:30,
    opacity:0,
    rotate:160 -280,
    repeat:1,
    duration:0.2,
    delay:0.2,
    stagger:0.2
})
}


function page2Animation(){
    var tl2 = gsap.timeline({
        scrollTrigger:{
            trigger:".section2",
            scroller:"body",
            // markers:true,
            start:"top 55%",
            end:"top 0",
            scrub:1,
        }
    })
    tl2.from(".services h3, .services p", {
        x:-20,
        opacity:0,
    })
    tl2.from(".elem1", {
        x:-30,
        opacity:0,
        duration:0.7,
    },"Nishikant")
    tl2.from(".elem2", {
        x:30,
        opacity:0,
        duration:0.7,
    },"Nishikant")
    tl2.from(".elem3", {
        x:-30,
        opacity:0,
        duration:0.7,
    },"Animation")
    tl2.from(".elem4", {
        x:40,
        opacity:0,
        duration:0.7,
    },"Animation")
    tl2.from(".elem5", {
        x:-30,
        opacity:0,
        duration:0.7,
    },"Anime")
    tl2.from(".elem6", {
        x:-40,
        opacity:0,
        duration:0.7,
    },"Anime")
}

function page3Animation(){
    var tl3 = gsap.timeline({
        scrollTrigger:{
            trigger:".section3",
            scroller:"body",
            start:"top 55%",
            end:"top 1%",
            scrub:1,
        }
    })
    tl3.from(".section3-part1",{
        x:-20,
        opacity:0,
        duration:0.5
    })
    tl3.from(".section3-part2",{
        x:20,
        opacity:0,
        duration:0.4
    })
}

function page4Animation() {
    var tl4 = gsap.timeline({
      scrollTrigger: {
        trigger: ".section4",
        scroller: "body",
        start: "top 70%",
        end: "top 20%",
        scrub: 1,
      }
    });
  
    tl4.from(".section4 .heading", {
      y: -50,
      opacity: 0,
      filter: "blur(5px)",
      duration: 0.6,
      ease: "power2.out"
    });
    // Cards animation w
    tl4.from(".section4 .card", {
      y: 50,
      opacity: 0,
      scale: 0.95,
      duration: 0.5,
      stagger: 0.2,
      ease: "power2.out"
    });
  }

  function page5Animation() {
    var tl5 = gsap.timeline({
      scrollTrigger: {
        trigger: ".section5",
        scroller: "body",
        start: "top 70%",
        end: "top 30%",
        scrub: 2,
      }
    });
  
    tl5.from(".section5 .section-title", {
      y: 50,
      opacity: 0,
      duration: 0.6,
      ease: "power2.out"
    });
    tl5.from(".section5 .accordion-item", {
      x: -50,
      opacity: 0,
      scale: 0.95,
      duration: 0.5,
      stagger: 0.4,
      ease: "power2.out"
    });
  }
  
page1Animation()
page2Animation()
page3Animation()
page4Animation()
page5Animation()
function toggleAccordion(header) {
    const item = header.parentElement;
    const isOpen = item.classList.contains('active');

    document.querySelectorAll('.accordion-item').forEach(el => {
      el.classList.remove('active');
      el.querySelector('.icon').textContent = '+';
    });

    if (!isOpen) {
      item.classList.add('active');
      item.querySelector('.icon').textContent = '-';
    }
}