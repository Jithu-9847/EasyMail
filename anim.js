
// ---------------------------------------------------animation-------------------------------------------------------------

var t1=gsap.timeline();

t1.from("#separate",
  { 
    y: -700,
    opacity: 0,
    duration:1
  }
   
)
t1.from("#bar img",
  { 
    x: -100,
    opacity: 0,
    duration:0.7,
    stagger:0.7,
    scale:0
  }
   
)
t1.from("#home_head",{
    y:-100,
    duration:0.7,
    opacity:0,
    
})
t1.from("#home_intro",{
  x:-100,
  duration:0.7,
  opacity:0,
  
})
t1.from("#web_logo_img",{
  opacity:0,
  scale:0
})
t1.from("#compose",{
  opacity:0,
  scale:0
})

t1.to("#plus",{
  rotate:360,
  delay:2,
  duration:1,
  repeat:4
})
 
gsap.from("#about1 h1,#about1 p",{
  x:-100,
  duration:1,
  stagger:0.7,
  opacity:0,
})