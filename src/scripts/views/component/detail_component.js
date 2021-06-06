/* eslint-disable no-return-assign */
import ApiEndpoint from '../../globals/api-endpoint';

const Review = {
  render(reviews) {
    return `
      <!-- customerReviews -->
      <h3> Reviews </h3>
      ${this._listMap(reviews)}
    `;
  },
  _listMap(reviews) {
    let list = '';
    const test = reviews.filter((review) => (
      review.name === '' || review.name === undefined ? false : reviews
    ));

    test.map((review) => list += `
      <div class="review">
        <div>
          <h4> ${review.name} </h4>
          <span> ${review.date} </span>
        </div>
        <p> ${review.review} </p>
      </div>
    `);

    return list;
  },
};

const Menu = {
  listMenu(menus) {
    return `
      <!-- menus -->
      <h3> Menu </h3>
      <div>
        <h4> Food </h4>
        <ol>
          ${this._listName(menus.foods)}
        </ol>
      </div>
      <div>
        <h4> Drinks </h4>
        <ol>
          ${this._listName(menus.drinks)}
        </ol>
      </div>
    `;
  },
  listCategori(categories) {
    return `
      <h3> Katagori </h3>
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
      <!-- description -->
      <h3> Deskripsi </h3>
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
      <img src="${ApiEndpoint.imageGet.url.lowRes(pictureId)}" alt="${name}">
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
