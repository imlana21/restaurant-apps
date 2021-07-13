import * as TestFactories from '../factories/testFactories';
import saveDataToDB from '../helpers/saveDataToDB';

const unlikeRestoCekIDB = ({database, data}) => {  
  describe('Mengecek Movie =>', () => {
    it('Ada didatabase ketika unlike belum ditekan', async () => {
      await TestFactories.createLikeButton(data.id);

      const isAvailable = await database.getResto(data.id);
   
      expect(isAvailable).toEqual(jasmine.objectContaining({ id: data.id})); 
    });
    
    it('Tidak ada di database ketika unlike ditekan', async () => {
      await TestFactories.createLikeButton(data.id);

      await saveDataToDB({
        database: database,
        data: data
      });

      if(document.querySelector('[aria-label="unlike resto"]')) {
        document.getElementById('likeButton').dispatchEvent(new Event('click'));

        const resto = await database.getResto(data.id);
        
        expect(resto).not.toEqual(jasmine.objectContaining({ id: data.id})); 
      }
    });
  });
}

export default unlikeRestoCekIDB;
