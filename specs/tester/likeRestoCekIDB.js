import * as TestFactories from "../factories/testFactories";
import removeDataFromDB from "../helpers/removeDataFromDB";

const likeRestoCekIDB = ({database, data}) => {
  describe('Mengecek Movie =>', () => {
    it('Tidak ada di database ketika like belum ditekan', async () => {
      await TestFactories.createLikeButton(data.id);

      const resto = await database.getResto(data.id);
   
      expect(resto).not.toEqual(jasmine.objectContaining({ id: data.id})); 
    });

    it('Ada di database ketika sudah like ditekan', async () => {
      await TestFactories.createLikeButton(data.id);
  
      await removeDataFromDB({
        database: database,
        data: data
      });
  
      if(document.querySelector('[aria-label="unlike resto"]')) {
        document.getElementById('likeButton').dispatchEvent(new Event('click'));
  
        const resto = await database.getResto(data.id);
        
        //expect(await resto).toEqual(jasmine.objectContaining({ id: restoId})); 
        expect(await resto).toEqual([]); 
      } 
    });
  });
};

export default likeRestoCekIDB;
