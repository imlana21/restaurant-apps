import Home from './pages/home';
import AppBar from './component/appbar';
import AppFooter from './component/appfooter';
import Loading from './component/loader';

class App {
  constructor({ appBar, appBody, appFooter }) {
    this._appBar = appBar;
    this._appBody = appBody;
    this._appFooter = appFooter;
  }

  async _initAppShell() {
    this._appBar.innerHTML = await AppBar.render();
    await AppBar.afterRender();
    this._appFooter.innerHTML = await AppFooter.render();
  }

  async render() {
    this._initAppShell();
    this._appBody.innerHTML = Loading.render();
    this._appBody.innerHTML = await Home.render();
  }
}

export default App;
