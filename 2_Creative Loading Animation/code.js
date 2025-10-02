
let scaleGroup = gsap.timeline({ repeat: -1, yoyo: true });

scaleGroup
  .fromTo(".midd", 
    { opacity: 0, scale: 0 }, 
    { opacity: 1, scale: 1.5, duration: 2, backgroundColor: "black", zIndex: 1, ease: "power1.inOut" }
  )
  .fromTo(".center", 
    { opacity: 0, scale: 0 }, 
    { opacity: 1, scale: 2, duration: 2, backgroundColor: "orange", zIndex: 5, ease: "power1.inOut" },
    "<" // start at same time
  )
  .fromTo(".side", 
    { opacity: 0, scale: 0 }, 
    { opacity: 1, scale: 1, duration: 2, backgroundColor: "red", zIndex: 2, ease: "power1.inOut" },
    "<"
  )
  .fromTo(".last", 
    { opacity: 0, scale: 0 }, 
    { opacity: 1, scale: 0.5, duration: 2, backgroundColor: "yellow", zIndex: 0, ease: "power1.inOut" },
    "<"
  );


// Movement group
let moveGroup = gsap.timeline({ repeat: -1, yoyo: true });

moveGroup
  .fromTo(".l2", { x: 30 }, { x: -30, duration: 2.5, ease: "sine.inOut" }, "<")
  .fromTo(".l1", { x: -30 }, { x: 30, duration: 2.5, ease: "sine.inOut" }, "<")
  .fromTo(".s2", { x: 10 }, { x: -20, duration: 2, ease: "sine.inOut" }, "<")
  .fromTo(".s1", { x: -10 }, { x: 20, duration: 2, ease: "sine.inOut" }, "<")
  .fromTo(".m2", { y: 0 }, { y: -20, duration: 1.5, ease: "sine.inOut" }, "<")
  .fromTo(".m1", { y: 0 }, { y: -20, duration: 1.5, ease: "sine.inOut" }, "<")
  .fromTo(".c1", { y: 10 }, { y: -40, duration: 1, ease: "sine.inOut" }, "<");


// Master timeline (sync both groups)
let master = gsap.timeline();
master.add(scaleGroup, 0).add(moveGroup, 0);
