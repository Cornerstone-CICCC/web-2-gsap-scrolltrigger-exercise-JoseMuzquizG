gsap.registerPlugin(ScrollTrigger)

const lightMode = gsap.timeline({
    scrollTrigger: {
        trigger: ".line-one",
        start: "top top",
        pin: true,
        scrub: true,
        // markers: true
    }
})

const midText = gsap.timeline({
    scrollTrigger: {
        trigger: ".line-two",
        start: "top top",
        pin: true,
        scrub: true,
        // markers: true
    }
})

const darkMode = gsap.timeline({
    scrollTrigger: {
        trigger:".line-three",
        start: "top top",
        pin: true,
        scrub: true,
        // markers: true
    }
})

lightMode
  .from('.line-one span', {y: "100vh", stagger: .3,})
  .to('.line-one', {backgroundColor: "yellow"})
  .from('.sun', {x: "100vw"})
  .to(".line-one span", {x: "100vw"}, "+=2")
  .to(".sun", {x: "-100vw"}, "<")
  .to('.line-one', {backgroundColor: "white"}, "<")

midText
  .from('.line-two span', {scale: 20, duration: 1})
  .from('.line-two span:first-child', {x: "-100vw", duration: 1}, "<")
  .from('.line-two span:last-child', {x: "100vw", duration: 1}, "<")
  .to('.line-two span:first-child', {y: -30, duration: 1})
  .to('.line-two span:first-child', {y: 0, duration: 1})
  .to('.line-two span:last-child', {y: -30, duration: 1}, "<")
  .to('.line-two span:last-child', {y: 0, duration: 1})

darkMode
  .from('.line-three span', {y: "100vh", stagger: .3})  
  .to('.line-three',  {color: "white", backgroundPositionX: 0, duration: 2})
  .from('.moon', {x: "100vw", duration: 2}, "<")
