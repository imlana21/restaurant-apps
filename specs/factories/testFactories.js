import FavoriteRestoDb from "../../src/scripts/data/favorite-idb";
import LikedButton from "../../src/scripts/views/component/liked-btn";

const createLikeButton = async (restoData) => {
  await LikedButton.init({
    buttonContainer: document.getElementById('likeButtonContainer'),
    favoritRestoIDB: FavoriteRestoDb,
    restoData
  });
}

export { createLikeButton };
