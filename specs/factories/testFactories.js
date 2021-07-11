import LikedButton from "../../src/scripts/views/component/liked-btn";

const createLikeButton = async (restoData) => {
  await LikedButton.init({
    buttonContainer: document.getElementById('likeButtonContainer'),
    restoData
  });
}

export { createLikeButton };
