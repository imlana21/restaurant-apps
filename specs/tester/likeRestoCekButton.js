import * as TestFactories from '../factories/testFactories';

const likeRestoCekButton = (data) => {
  describe('Ketika restorant belum disukai =>', () => {
    it('Like button tampil', async () => {
      await TestFactories.createLikeButton(data);
      
      expect(document.querySelector('[aria-label="like resto"]')).toBeTruthy();
    });
    
    it('Unlike button tidak tampil', async () => {
      await TestFactories.createLikeButton(data);
      
      expect(document.querySelector('[aria-label="unlike resto"]')).toBeFalsy();
    });
  });
};

export default likeRestoCekButton;
