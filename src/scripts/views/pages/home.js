import RestoDataSource from '../../data/resto-datasource';
import RestoBox from '../component/resto-box';
import Loading from '../component/loader';

const Home = {
  async render() {
    return `
      <div id="home">
        <div class="jumbotron">
          <div>
            <h1> Restaurant Apps </h1>
          </div>
        </div>
        <article id="content">
          <h2> Select Restaurant </h2>
          <div id="restolist">
          </div>
        </article>
      </div>
    `;
  },

  async afterRender() {
    const restoListContainer = document.getElementById('restolist');

    restoListContainer.innerHTML = Loading.render();
    restoListContainer.innerHTML = await this._restoList();
  },

  async _restoList() {
    const datasource = await RestoDataSource.listData();
    let pages = '';

    datasource.map(async (data) => {
      pages += RestoBox.render(data);
    });

    return pages;
  },
};

export default Home;
