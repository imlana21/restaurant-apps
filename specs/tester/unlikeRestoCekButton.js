import * as TestFactories from '../factories/testFactories';

const unlikeRestoCekButton = (dataId) => {
  describe('Ketika restorant sudah disukai =>', () => {
    it('Unlike button tampil', async () => {
      await TestFactories.createLikeButton(dataId);
      
      expect(document.querySelector('[aria-label="unlike resto"]')).toBeTruthy();
    });
  
    it('Like button tidak tampil', async () => {
      await TestFactories.createLikeButton(dataId);
      
      // Cek Button Like
      expect(document.querySelector('[aria-label="like resto"]')).toBeFalsy();
    });
  });
}

export default unlikeRestoCekButton;
