$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $(".nvb").addClass("sticky");
    } else {
      $(".nvb").removeClass("sticky");
    }
  });

  // Toggle menu/navbar script
  $(".nav_btn").click(function () {
    $(".nav_bar").toggleClass("active1");
  });
  $(".list li a").click(function () {
    $(".nav_bar").removeClass("active1");
  });

  // typing animation code
  var typed = new Typed(".typing", {
    strings: ["Student", "Web Developer", "Security Researcher", "Designer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  //gsap to animate  the about section
  var tl = gsap.timeline();
  tl.from(".list li", {
    opacity: 0,
    duration: 1,
    delay: 0.1,
    y: -60,
    stagger: 0.1,
  });
  tl.from(".left", {
    opacity: 0,
    duration: 1,
    rotateY: -180,
    scale: 0.5,
  });
  tl.from(".right", { opacity: 0, duration: 1, x: 60 });

  //to animate the tools section
  gsap.from(".tools .col", {
    scrollTrigger: {
      trigger: ".grid_container",
      scroller: "body",
    },
    x: -100,
    scale: 0.7,
    opacity: 0,
    delay: 0.5,
    duration: 2,
    // stagger: 0.3,
  });

  //to animate the certificate section
  gsap.from(".certCol .card", {
    scrollTrigger: {
      trigger: ".certCol",
      scroller: "body",
      // markers: true,
      start: "top 70%",
    },
    y: 100,
    scale: 0.5,
    opacity: 0,
    delay: 0.5,
    duration: 1,
    stagger: 0.3,
  });

  //to animate the projects section
  gsap.from(".projects .col", {
    scrollTrigger: {
      trigger: ".projects .col",
      scroller: "body",
      // markers: true,
      start: "top 70%",
    },
    y: -100,
    scale: 0,
    delay: 0.3,
    opacity: 0,
    stagger: 0.3,
  });
});

//to animate the profile image in the about section
gsap.to(".left", {
  scrollTrigger: {
    trigger: ".left",
    scroller: "body",
    scrub: 2,
    // markers: true,
    start: "top 10%",
    // end: "top -3%",
  },
  rotation: -45, // Rotate the image diagonally by 45 degrees (adjust as needed)
  duration: 1, // Duration of the animation in seconds
  x:-600, // Move the image to the left by 100 pixels (adjust as needed)
  // ease: "power2.out", // Easing function (adjust as desired)
});
