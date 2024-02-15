var tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".two",
    start: "0% 95%",
    end: "50% 50%",
    scrub: true,
    // markers: true,
  },
});

tl.to(
  "#fanta",
  {
    top: "120%",
    left: "1%",
  },
  "fanta"
);

tl.to(
  "#orange-cut",
  {
    top: "160%",
    left: "23%",
    rotate: "200deg",
  },
  "fanta"
);
tl.to(
  "#orange",
  {
    width: "15%",
    top: "168%",
    right: "8%",
  },
  "fanta"
);

tl.to(
  "#leaf",
  {
    top: "110%",
    rotate: "130deg",
    left: "70%",
  },
  "fanta"
);
tl.to(
  "#leaf2",
  {
    top: "110%",
    rotate: "130deg",
    left: "0%",
  },
  "fanta"
);

var tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".three",
    start: "0% 95%",
    end: "30% 50%",
    scrub: true,
    // markers: true,
  },
});

// tl2.from(".lemon",{
//     rotate: "-90deg",
//     left: "-100%",
//     top: "110%"
// }, 'fanta')
// tl2.from("#cocacola",{
//     rotate: "-90deg",
//     top: "110%",
//     left: "-100%",
// }, 'fanta')

// tl2.from("#icecubes",{
//     // rotate: "90deg",
//     left: "100%",
//     top: "110%"
// }, 'fanta')
// tl2.from("#pepsi",{
//     rotate: "90deg",
//     top: "110%",
//     left: "100%",
// }, 'fanta')

tl2.to(
  "#orange-cut",
  {
    width: "19%",
    left: "40.5%",
    top: "210%",
    rotate: "200deg",
  },
  "orange-cut"
);
tl2.to(
  "#fanta",
  {
    width: "34%",
    top: "220%",
    left: "33%",
  },
  "orange-cut"
);

///////SPRITE-DRINK///////////
var tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".two",
    start: "0% 85%",
    end: "30% 50%",
    scrub: true,
    // markers: true,
  },
});
tl2.to(
  "#sprite",
  {
    top: "120%",
    left: "10%",
  },
  "sprite"
);
tl2.to(
  "#lemon-cut",
  {
    top: "157%",
    left: "18%",
    rotate: "200deg",
  },
  "sprite"
);
tl2.to(
  "#lemon",
  {
    width: "17%",
    top: "163%",
    right: "10%",
  },
  "sprite"
);

var tl4 = gsap.timeline({
  scrollTrigger: {
    trigger: ".three-sprite",
    start: "0% 95%",
    end: "20% 50%",
    scrub: true,
    // markers: true,
  },
});
tl4.to(
  "#lemon-cut",
  {
    width: "21%",
    left: "40%",
    top: "205%",
    rotate: "200deg",
  },
  "sprite"
);
tl4.to(
  "#sprite",
  {
    width: "16%",
    top: "221%",
    left: "42%",
  },
  "sprite"
);

///////colaaa-DRINK///////////
var tl5 = gsap.timeline({
  scrollTrigger: {
    trigger: ".two",
    start: "0% 95%",
    end: "70% 50%",
    scrub: true,
    // markers: true,
  },
});

tl5.to(
  "#cocacola1",
  {
    top: "134%",
    width: "14%",
    left: "12%",
  },
  "fanta"
);
tl5.to(
  "#ice",
  {
    // width: "19%",
    top: "169%",
    right: "8%",
  },
  "fanta"
);
var tl6 = gsap.timeline({
  scrollTrigger: {
    trigger: ".three-coca",
    start: "0% 95%",
    end: "20% 50%",
    scrub: true,
    // markers: true,
  },
});

tl6.to(
  "#cocacola1",
  {
    width: "14%",
    top: "223%",
    left: "43%",
  },
  "cap"
);
tl6.to(
  "#cap",
  {
    // width:"14%",
    left: "48%",
    top: "258.5%",
  },
  "cap"
);

///////RIO-DRINK///////////
var tl7 = gsap.timeline({
  scrollTrigger: {
    trigger: ".two",
    start: "0% 95%",
    end: "60% 50%",
    scrub: true,
    // markers: true,
  },
});

tl7.to(
  "#rio1",
  {
    top: "126%",
    // width: "26%",
    // height: "56%",
    left: "7%",
  },
  "fanta"
);
tl7.to(
  "#rawmango1",
  {
    top: "165%",
    right: "7%",
  },
  "fanta"
);

var tl8 = gsap.timeline({
  scrollTrigger: {
    trigger: ".three-rio",
    start: "0% 95%",
    end: "40% 50%",
    scrub: true,
    // markers: true,
  },
});
tl8.to(
  "#rio1",
  {
    // width: "26%",
    // height: "56%",
    top: "222%",
    left: "38.5%",
  },
  "cap"
);
tl8.to(
  "#smile",
  {
    // width:"14%",
    left: "25.5%",
    top: "263.5%",
  },
  "cap"
);
