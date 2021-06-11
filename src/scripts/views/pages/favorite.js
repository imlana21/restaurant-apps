/* eslint-disable no-unused-vars */
import FavoriteRestoDb from '../../data/favorite-idb';
import EmptyDB from '../component/emptyDb';
import RestoBox from '../component/resto-box';

const FavoriteResto = {
  async render() {
    return `
      <div id="favorite">
        <article id="content">
          <h2> Select Restaurant </h2>
          <div id="restolist">
          </div>
        </article>
      </div>
    `;
  },

  async afterRender() {
    const favoriteContainer = document.getElementById('restolist');
    favoriteContainer.innerHTML = await this._restoList();
  },

  async _restoList() {
    const datasource = await FavoriteRestoDb.getAllResto();
    let pages = '';
    datasource.map(async (data) => {
      pages += RestoBox.render(data);
    });

    if (pages === '') pages = EmptyDB.render();

    return pages;
  },
};

export default FavoriteResto;
