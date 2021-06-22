import LikedButton from "../src/scripts/views/component/liked-btn";

describe('Like button testing', () => {
  beforeEach(async () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
  });

  it('Should show the like button when the resto has not been liked before', async () => {
    await LikedButton.init({
      buttonContainer: document.getElementById('likeButtonContainer'),
      restoData: {
        id: 'rqdv5juczeskfw1e867'
      }
    });
  });
});
