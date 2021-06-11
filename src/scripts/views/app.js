import UrlParser from '../routes/urlParser';
import AppBar from './component/appbar';
import AppFooter from './component/appfooter';
import Loading from './component/loader';
import routes from '../routes/route';

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
    const url = UrlParser.parseUrlWithCombiner();
    const page = routes[url];
    this._initAppShell();
    this._appBody.innerHTML = Loading.render();
    this._appBody.innerHTML = await page.render();
    await page.afterRender();
  }
}

export default App;
