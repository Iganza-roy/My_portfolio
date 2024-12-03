import mobileNav from './utils/mobile-nav.js';
import darkMode from './utils/dark-mode.js';
import lazyLoading from './utils/lazy-loading.js';
import calcScrollValue from './utils/top-scroll.js';
import cursorMov from './utils/cursor.js';

mobileNav();
darkMode();
lazyLoading();
calcScrollValue();
cursorMov();

particlesJS.load('particles-js', '/particles.json', function () {
  console.log('Particles.js loaded; All Good!');
});
