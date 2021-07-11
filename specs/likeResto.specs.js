import removeDataFromDB from "./helpers/removeDataFromDB";
import { likeButtonContainer } from "./factories/containerFactories";
import likeRestoCekButton from "./tester/likeRestoCekButton";
import likeRestoCekDatabase from "./tester/likeRestoCekDatabase";
import FavoriteRestoDb from "../src/scripts/data/favorite-idb";

describe('(LIKE BUTTON TESTING)', () => {
  beforeEach( async () => {
    likeButtonContainer();
    await removeDataFromDB();
  });

  afterEach( async () => {
    await removeDataFromDB();
    console.log(document.getElementById('likeButton').attributes);
  })

  likeRestoCekButton();
  likeRestoCekDatabase(FavoriteRestoDb);
});

