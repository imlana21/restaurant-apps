import {
  Detail,
  Description,
  Menu,
  Review,
} from '../component/detail_component';
import RestoDataSource from '../../data/resto-datasource';
import UrlParser from '../../routes/urlParser';
import LikedButton from '../component/liked-btn';

const DetailResto = {
  async render() {
    const data = await this._getData();
    const detail = [
      data.pictureId,
      data.name,
      data.rating,
      data.address,
      data.city,
    ];

    return `
      <div id="detailresto">
        <div id="content">
            <div class="leftside">
              ${Detail.render(detail)}
            </div>
            <article class="rightside">
              <div id="description" tabindex="1">
                <h3> Deskripsi </h3>
                ${Description.render(data.description)}
              </div>
              <div id="categories" tabindex="1">
                <h3> Katagori </h3>
                ${Menu.listCategori(data.categories)}
              </div>
              <div id="menus">
                <h3> Menu </h3>
                ${Menu.listMenu(data.menus)}
              </div>
            </article>
          </div>
          <div id="reviews">
            <h3> Reviews </h3>
            <div>
              ${Review.render(data.customerReviews)}
            </div>
          </div> 
          <div id="like_container">
          </div>
        </div>
      </div>
    `;
  },

  async afterRender() {
    const likeContainer = document.getElementById('like_container');

    await LikedButton.init({
      buttonContainer: likeContainer,
      restoData: await this._getData(),
    });
  },

  async _getData() {
    const url = UrlParser.parseUrlWithoutCombiner();
    const restoData = await RestoDataSource.detail(url.id);

    return restoData;
  },
};

export default DetailResto;
