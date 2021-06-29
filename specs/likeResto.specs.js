import FavoriteRestoDb from "../src/scripts/data/favorite-idb";
import buttonPresenter from "./helpers/likePresenter";

const restoId = 'rqdv5juczeskfw1e867';

describe('(LIKE BUTTON TESTING)', () => {
  beforeEach(async () => {
    await buttonPresenter(restoId);
    await FavoriteRestoDb.deleteResto(restoId);
  });

  describe('Ketika restorant belum disukai =>', () => {
    it('Like button tampil', async () => {
      // Cek Button Like
      expect(document.querySelector('[aria-label="like resto"]')).toBeTruthy();
    });
  
    it('Unlike button tidak tampil', async () => {
      // Cek Button Like
      expect(document.querySelector('[aria-label="unlike resto"]')).toBeFalsy();
    });
  });
  

  describe('Mengecek Movie =>', () => {
    it('Ada di database ketika like ditekan', async () => {
      document.querySelector('#likeButton').dispatchEvent(new Event('click'));
      
      const resto = await FavoriteRestoDb.getResto(restoId);
   
      expect(resto).toEqual(jasmine.objectContaining({ id: restoId})); 

    });

    it('Tidak ada didatabase ketika like belum ditekan', async () => {
      const resto = await FavoriteRestoDb.getResto(restoId);
   
      expect(resto).not.toEqual(jasmine.objectContaining({ id: restoId})); 
    });

    afterEach( async () => {
      await FavoriteRestoDb.deleteResto(restoId);
    })
  });
});

