import RestoDataSource from '../../data/resto-datasource';
import RestoBox from '../component/resto-box';
import Loading from '../component/loader';

const Home = {
  async render() {
    return `
      <div id="home">
        <div class="jumbotron">
          <picture> 
            <source media="(max-width: 620px)" 
                    srcset="./images/hero-small.webp"
                    width="100%"
                    height="300vh">
            <source media="(max-width: 850px)" 
                    srcset="./images/hero-medium.webp"
                    width="100%"
                    height="550vh">
            <img src="./images/hero-high.webp" 
                  alt="jumbotron"
                  width="100%"
                  height="550vh"/>
          </picture>
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
