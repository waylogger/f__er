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