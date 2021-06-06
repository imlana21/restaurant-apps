import AppBar from './component/appbar';
import AppFooter from './component/appfooter';
import Loading from './component/loader';
import DetailResto from './pages/detail_page';

class App {
  constructor({ appBar, appBody, appFooter }) {
    this._appBar = appBar;
    this._appBody = appBody;
    this._appFooter = appFooter;
  }

  async _initAppShell() {
    this._appBar.innerHTML = AppBar.render();
    this._appFooter.innerHTML = AppFooter.render();
    await AppBar.afterRender();
  }

  async render() {
    this._initAppShell();
    this._appBody.innerHTML = Loading.render();
    this._appBody.innerHTML = await DetailResto.render();
  }
}

export default App;
