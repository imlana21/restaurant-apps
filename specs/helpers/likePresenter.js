import LikedButton from "../../src/scripts/views/component/liked-btn";

const buttonPresenter = async (restoId) => {
  document.body.innerHTML = '<div id="likeButtonContainer"></div>';

  await LikedButton.init({
    buttonContainer: document.getElementById('likeButtonContainer'),
    restoData: {
      id: restoId
    }
  });
}

export default buttonPresenter;
