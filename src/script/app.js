import '../sass/main.scss';

//////////////////////////////////////////////
// Animate on scroll

// Select all elements that needs to be animated
const allAnimationEle = document.querySelectorAll('.animate-on-scroll');

// Create animate function
const animateEle = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  entry.target.classList.remove('animate-on-scroll');
  observer.unobserve(entry.target);
};

// Create animate element options object
const animateEleOpt = {
  root: null,
  threshold: 0.1,
};

// Create new intersection onserver
const eleObserver = new IntersectionObserver(animateEle, animateEleOpt);

// Call observe method on each element
allAnimationEle.forEach(ele => eleObserver.observe(ele));
