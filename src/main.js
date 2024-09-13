import mobileNav from './utils/mobile-nav.js';
import darkMode from './utils/dark-mode.js';
import lazyLoading from './utils/lazy-loading.js';
import calcScrollValue from './utils/top-scroll.js';

mobileNav();
darkMode();
lazyLoading();
calcScrollValue();

particlesJS.load('particles-js', '/src/particles.json', function () {
  console.log('Particles.js loaded');
});
