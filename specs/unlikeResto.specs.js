import FavoriteRestoDb from "../src/scripts/data/favorite-idb";
import buttonPresenter from "./helpers/likePresenter";
import saveDataToDB from "./helpers/saveDataToDB";
import { restoId } from "./helpers/restoId";

describe('(UNLIKE BUTTON TESTING)', () => {
  beforeEach( async () => { 
    await buttonPresenter(restoId);
    await saveDataToDB();
  });

  describe('Ketika restorant sudah disukai =>', () => {
    it('Unlike button tampil', async () => {
      // Cek Button Like
      expect(document.querySelector('[aria-label="unlike resto"]')).toBeTruthy();
    });
  
    it('Like button tidak tampil', async () => {
      // Cek Button Like
      expect(document.querySelector('[aria-label="like resto"]')).toBeFalsy();
    });
  });
  
  describe('Mengecek Movie =>', () => {
    it('Ada didatabase ketika unlike belum ditekan', async () => {
      const resto = await FavoriteRestoDb.getResto(restoId);
   
      expect(resto).toEqual(jasmine.objectContaining({ id: restoId})); 
    });
    
    it('Tidak ada di database ketika unlike ditekan', async () => {
      if(document.querySelector('[aria-label="unlike resto"]')) {
        document.getElementById('likeButton').dispatchEvent(new Event('click'));

        const resto = await FavoriteRestoDb.getResto(restoId);
        
        expect(resto).not.toEqual(jasmine.objectContaining({ id: restoId})); 
      } else {
        
      }
    });
  });

  afterEach( async () => {
    saveDataToDB();
    console.log(document.getElementById('likeButton').attributes);
  });
});

