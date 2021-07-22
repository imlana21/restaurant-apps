/* eslint-disable no-return-assign */
import ApiEndpoint from '../../globals/api-endpoint';
import escapeHtml from '../../utils/htmlescape';

const Review = {
  render(reviews) {
    return `
      ${this._listMap(reviews)}
    `;
  },
  _listMap(reviews) {
    let list = '';
    const filteredReview = reviews.filter((review) => (
      review.name === '' || review.name === undefined ? false : reviews
    ));

    filteredReview.map((review) => list += `
      <div class="review" tabindex="0">
        <div>
          <h4> ${escapeHtml(review.name)} </h4>
          <span> ${review.date} </span>
        </div>
        <p> ${escapeHtml(review.review)} </p>
      </div>
    `);

    return list;
  },
};

const Menu = {
  listMenu(menus) {
    return `
      <div>
        <div tabindex="1">
          <h4> Food </h4>
          <ol>
            ${this._listName(menus.foods)}
          </ol>
        </div>
        <div tabindex="1">
          <h4> Drinks </h4>
          <ol>
            ${this._listName(menus.drinks)}
          </ol>
        </div>
      </div>
    `;
  },
  listCategori(categories) {
    return `
      <ol>
         ${this._listName(categories)}
      </ol>
    `;
  },
  _listName(datas) {
    let lists = '';

    datas.map((data) => lists += `<li> ${data.name} </li>`);

    return lists;
  },
};

const Description = {
  render(description) {
    return `
      <p> ${description} </p>
    `;
  },
};

const Detail = {
  render([
    pictureId,
    name,
    rating,
    address,
    city,
  ]) {
    return `
      <img class="lazyload" 
           data-src="${ApiEndpoint.imageGet.url.largeRes(pictureId)}" 
           alt="${name}">
      <div>
        <div>
          <h2> ${name} </h2>
          <span> Rating : ${rating} </span>
        </div>
        <p> ${address}, ${city} </p>
      </div>
    `;
  },
};

export {
  Review,
  Menu,
  Description,
  Detail,
};
