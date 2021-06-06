import {
  Detail,
  Description,
  Menu,
  Review,
} from '../component/detail_component';
import RestoDataSource from '../../data/resto-datasource';

const DetailResto = {
  async render() {
    const data = await this._getData('rqdv5juczeskfw1e867');
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
              <div id="description">
                ${Description.render(data.description)}
              </div>
              <div id="categories">
                ${Menu.listCategori(data.categories)}
              </div>
              <div id="menus">
                ${Menu.listMenu(data.menus)}
              </div>
              <div id="reviews">
                ${Review.render(data.customerReviews)}
              </div>
            </article> 
          </div>
        </div>
      </div>
    `;
  },
  async _getData(id) {
    const datasource = await RestoDataSource.detail(id);

    return datasource;
  },
};

export default DetailResto;
