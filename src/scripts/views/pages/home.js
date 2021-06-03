import RestoDataSource from '../../data/resto-datasource';
import AppBox from '../component/appbox';
import Loading from '../component/loader';

const Home = {
  async render() {
    return `
      <div id="home">
        <div class="jumbotron">
          <h1> Restaurant Apps </h1>
        </div>
        <article id="content">
          <h2> Select Restaurant </h2>
          <div id="restolist">
            ${await this._getData()}
          </div>
        </article>
      </div>
    `;
  },
  async _getData() {
    const datasource = await RestoDataSource.listData();

    let pages = Loading.render();

    if (datasource) {
      pages = '';
      datasource.map(async (data) => {
        pages += AppBox.render(data);
      });
    }
    return pages;
  },
};

export default Home;
