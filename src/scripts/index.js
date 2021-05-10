import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.scss';

import './component/app-bar';
import './component/app-footer';
import './component/app-box';
import './component/app-main';

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('skip').addEventListener('focus', () => {
        document.body.scrollTop = 0; 
        document.documentElement.scrollTop = 0;
    });
});