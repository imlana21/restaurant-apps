Feature('Like Resto');

Before(({I}) => {
  I.amOnPage('/#/detail/rqdv5juczeskfw1e867')
});

Scenario('Showing Like Button', ({ I }) => {
  I.seeElement('#likeButton');
});
