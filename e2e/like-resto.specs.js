const assert = require('assert');

Feature('Like Resto');

Before( async ({I}) => {
  I.amOnPage('/');

  await I.waitForElement('.readmore', 5);
});

Scenario('Check Like Button', async ({ I }) => {
  I.amOnPage('/');
  // Cek apakah restobox termuat
  I.seeElement('.readmore a');
  I.click(locate('.readmore a').first());

  I.seeElement('#likeButton');
});

Scenario('Like dan Unlike Resto Test', async ({I}) => {
  await I.amOnPage('/');
  // Cek apakah restobox termuat
  I.seeElement('.readmore a');

  const restoTitleElement = 'figure figcaption h2';
  const dashRestoList = [];

  // Crawl resto title from dashboard
  for (i = 1; i <= 3; i++) {
    I.seeElement(restoTitleElement);

    dashRestoList.push(
      await I.grabTextFrom(locate(restoTitleElement).at(i))
    );

    I.click(locate('.readmore a').at(i));

    I.seeElement('#likeButton');
    I.click('#likeButton');

    I.amOnPage('/');
  }

  const favRestoList = [];
  
  // Crawl favorite resto title
  for( i = 1; i <= 3; i++) {
    I.amOnPage('/#/favorite');

    I.seeElement(restoTitleElement);

    favRestoList.push(
      await I.grabTextFrom(locate(restoTitleElement).at(i))
    );
  }

  // Cek jumlah data dashRestoList dan favRestoList apakah sama
  assert.strictEqual(dashRestoList.length, favRestoList.length);

  dashRestoList.map( (title, index) => {
    assert.strictEqual(title, favRestoList[index]);
  })

  // Unlike Resto
  for(i = 1; i < favRestoList.length; i++ ) {
    await I.seeElement('.readmore a');
    await I.click(locate('.readmore a').at(i));

    await I.seeElement('#likeButton');
    await I.click('#likeButton');

    await I.amOnPage('#/favorite');
  }
});
