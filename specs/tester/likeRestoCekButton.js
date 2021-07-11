import * as TestFactories from "../factories/testFactories";
import { restoId } from "../models/restoId";

const likeRestoCekButton = () => {
  describe('Ketika restorant belum disukai =>', () => {
    it('Like button tampil', async () => {
      await TestFactories.createLikeButton(restoId);
  
      expect(document.querySelector('[aria-label="like resto"]')).toBeTruthy();
    });
  
    it('Unlike button tidak tampil', async () => {
      await TestFactories.createLikeButton(restoId);
  
      expect(document.querySelector('[aria-label="unlike resto"]')).toBeFalsy();
    });
  });
};

export default likeRestoCekButton