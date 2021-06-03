import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.scss';
import App from './views/app';

const app = new App({
  appBar: document.querySelector('header'),
  appBody: document.querySelector('main'),
  appFooter: document.querySelector('footer'),
});

// Lifecycle

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('skip').addEventListener('focus', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  });
});

window.addEventListener('load', () => {
  app.render();
});

window.addEventListener('hashchange', () => {
  app.render();
});

window.addEventListener('beforeunload', () => {

});
