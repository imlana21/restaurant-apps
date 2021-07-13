import removeDataFromDB from "./helpers/removeDataFromDB";
import { likeButtonContainer } from "./factories/containerFactories";
import likeRestoCekButton from "./tester/likeRestoCekButton";
import FavoriteRestoDb from "../src/scripts/data/favorite-idb";
import { dataResto } from "./models/dataResto";
import likeRestoCekIDB from "./tester/likeRestoCekIDB";

describe('(LIKE BUTTON TESTING)', () => {
  beforeEach( async () => {
    likeButtonContainer();
    await removeDataFromDB({
      database: FavoriteRestoDb,
      data: dataResto
    });
  });

  afterEach( async () => {
    await removeDataFromDB({
      database: FavoriteRestoDb,
      data: dataResto
    });

    console.log(document.getElementById('likeButton').attributes);
  })

  likeRestoCekButton(dataResto);

  likeRestoCekIDB({
    database: FavoriteRestoDb,
    data: dataResto
  });
});

