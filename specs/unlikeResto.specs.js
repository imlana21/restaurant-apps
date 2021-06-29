import FavoriteRestoDb from "../src/scripts/data/favorite-idb";
import RestoDataSource from "../src/scripts/data/resto-datasource";
import buttonPresenter from "./helpers/likePresenter";

const restoId = 'rqdv5juczeskfw1e867';

describe('UNLIKE BUTTON TESTING', () => {;
  beforeEach( async () => {
    await buttonPresenter(restoId);
    const dataResto = await RestoDataSource.detail(restoId);
    await FavoriteRestoDb.putResto(dataResto);
  });

  describe('Ketika restorant sudah disukai => ', () => {
    it('Unlike button tampil', async () => {
      expect(document.querySelector('[aria-label="unlike resto"]')).toBeTruthy();
    }, 3000);

    it('Like button tak tampil', async () => {
      expect(document.querySelector('[aria-label="like resto"]')).toBeFalsy();
    }, 3000);
  });

  describe('Cek data Resto di IndexDB =>', () => {
    it('Ada ketika Unlike belum ditekan', async () => {
      const isAvailable = await FavoriteRestoDb.getResto(restoId);

      expect(isAvailable).toEqual(jasmine.objectContaining({ id: restoId }));
    }, 3000)

    it('Tidak ada ketika tombol Unlike sudah ditekan', async () => {
      document.querySelector('#likeButton').dispatchEvent(new Event('click'));

      const isAvailable = await FavoriteRestoDb.getResto(restoId);

      expect(isAvailable).not.toEqual(jasmine.objectContaining({ id: restoId }));
    }, 3000);
  });


  afterEach( async () => {
    const dataResto = await RestoDataSource.detail(restoId);
    await FavoriteRestoDb.putResto(dataResto);
  });
});