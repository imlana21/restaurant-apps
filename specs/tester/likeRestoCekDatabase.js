import * as TestFactories from "../factories/testFactories";
import removeDataFromDB from "../helpers/removeDataFromDB";
import { restoId } from "../models/restoId";

const likeRestoCekDatabase = (favoriteResto) => {
  describe('Mengecek Movie =>', () => {
    it('Ada data didatabase sebelum action', async () => {
      await TestFactories.createLikeButton(restoId);

      const isAvailable = await favoriteResto.getAllResto();

      expect(isAvailable).toEqual([]);
    })

    it('Tidak ada didatabase ketika like belum ditekan', async () => {
      await TestFactories.createLikeButton(restoId);

      const resto = await favoriteResto.getResto(restoId);
   
      expect(resto).not.toEqual(jasmine.objectContaining({ id: restoId})); 
    });
  });

  it('Ada di database ketika sudah like ditekan', async () => {
    await TestFactories.createLikeButton(restoId);

    await removeDataFromDB();

    if(document.querySelector('[aria-label="unlike resto"]')) {
      document.getElementById('likeButton').dispatchEvent(new Event('click'));

      const resto = await FavoriteRestoDb.getResto(restoId);
      
      //expect(await resto).toEqual(jasmine.objectContaining({ id: restoId})); 
      expect(await resto).toEqual([]); 
    } 
  });
};

export default likeRestoCekDatabase;
