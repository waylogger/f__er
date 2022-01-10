const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");
    const navLink = document.querySelectorAll(".nav-link");
    hamburger.addEventListener("click", mobileMenu);
    navLink.forEach(n => n.addEventListener("click", closeMenu));
    function mobileMenu() {
      hamburger.classList.toggle("active");
      navMenu.classList.toggle("active");
    }
    function closeMenu() {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
    }

// Cards style
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const square = entry.target.getElementsByClassName('offer__block-img');
    if (entry.isIntersecting) {
      for (let i = 0; i < square.length; ++i)
        square[i].classList.add('bubble-reveal');
      return; // if we added the class, exit the function
    }
    // We're not intersecting, so remove the class!
    for (let i = 0; i < square.length; ++i)
      square[i].classList.remove('bubble-reveal');
  });
});

observer.observe(document.querySelector('.offer__blocks'));

const observer2 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const square = entry.target.getElementsByClassName('offer__block-odd');
    if (entry.isIntersecting) {
      for (let i = 0; i < square.length; ++i)
        square[i].classList.add('offer__block-odd-ani');
      return; // if we added the class, exit the function
    }
    // We're not intersecting, so remove the class!
    for (let i = 0; i < square.length; ++i)
      square[i].classList.remove('offer__block-odd-ani');
  });
});
observer2.observe(document.querySelector('.offer__blocks'));

const observer3 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const square = entry.target.getElementsByClassName('offer__block-even');
    if (entry.isIntersecting) {
      for (let i = 0; i < square.length; ++i)
        square[i].classList.add('offer__block-even-ani');
      return; // if we added the class, exit the function
    }
    // We're not intersecting, so remove the class!
    for (let i = 0; i < square.length; ++i)
      square[i].classList.remove('offer__block-even-ani');
  });
});
observer3.observe(document.querySelector('.offer__blocks'));


$("#slider").roundSlider({
  sliderType: "min-range",
  handleShape: "round",
  width: 22,
  radius: 138,
  value: 0,
  showTooltip: false,
  editableTooltip: false,
  keyboardAction: false,
  mouseScrollAction: false,
  max: "100",
  min: "0",
  startAngle: 90,
});

let sliderIsLaunch = false;

function sliderStartGreat768() {
  setTimeout(() => {
    sliderIsLaunch = true;
    $("#slider").roundSlider({
      value: 20,
      animation: true,
    });

    $("#currencies__item_0_id").css("opacity", 1);
  }, 0);
  setTimeout(() => {
    $("#currencies__item_1_id").css("opacity", 1);
    $("#slider").roundSlider("option", "value", 40);
  }, 1500);
  setTimeout(() => {
    $("#currencies__item_2_id").css("opacity", 1);
    $("#slider").roundSlider("option", "value", 60);
  }, 3000);
  setTimeout(() => {
    $("#currencies__item_3_id").css("opacity", 1);
    $("#slider").roundSlider("option", "value", 80);
  }, 4500);
  setTimeout(() => {
    $("#currencies__item_4_id").css("opacity", 1);
    $("#slider").roundSlider("option", "value", 100);
  }, 6000);
  setTimeout(() => {
    $("#slider").roundSlider({
      animation: false,
      value: 0,
    });
  }, 7500);
}
let scrollAccess = false;
let numberOfScroll = 0;
let maxNumberOfScroll = 4;
$("#currencies__items").scroll((event) => {
  // console.log(event.target.scrollLeft);
  if (scrollAccess) {
    const step = $(window).width() >= '500' ? 300 : 343;
    console.log(event.target.scrollLeft);
    if (numberOfScroll >= maxNumberOfScroll) {
      event.target.scrollLeft = 12;
      numberOfScroll = 0;
    }
    else if (event.target.scrollLeft === 0) event.target.scrollLeft = 12;
    else 
    {
      event.target.scrollLeft += step;
      numberOfScroll++;
    }
    scrollAccess = false;
  }
});

function triggerScroll() {
  scrollAccess = true;
  $("#currencies__items").trigger("scroll");
}
function sliderStartLess768() {
  if (sliderIsLaunch) return;
  setTimeout(() => {
    sliderIsLaunch = true;
    $("#slider").roundSlider({
      value: 20,
      animation: true,
    });

    triggerScroll();
  }, 0);
  setTimeout(() => {
    $("#slider").roundSlider("option", "value", 40);

    triggerScroll();
  }, 1500);
  setTimeout(() => {
    $("#slider").roundSlider("option", "value", 60);

    triggerScroll();
  }, 3000);
  setTimeout(() => {
    $("#slider").roundSlider("option", "value", 80);

    triggerScroll();
  }, 4500);
  setTimeout(() => {
    $("#slider").roundSlider("option", "value", 100);

    triggerScroll();
  }, 6000);
  setTimeout(() => {
    sliderIsLaunch = false;
    $("#slider").roundSlider({
      animation: false,
      value: 0,
    });
  }, 7500);
}

const sliderObserver = new IntersectionObserver((entries) => {
  entries.forEach((ent) => {
    if (ent.isIntersecting && !sliderIsLaunch && $(window).width() > "768") {
      sliderStartGreat768();
    } else if (
      ent.isIntersecting &&
      !sliderIsLaunch &&
      $(window).width() < "768"
    ) {
      sliderStartLess768();
      setInterval(() => {
        sliderStartLess768();
      }, 8000);
    }
  });
});
sliderObserver.observe(document.querySelector(".currencies__inner"));