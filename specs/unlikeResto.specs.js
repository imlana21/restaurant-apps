import FavoriteRestoDb from "../src/scripts/data/favorite-idb";
import { likeButtonContainer } from "./factories/containerFactories";
import saveDataToDB from "./helpers/saveDataToDB";
import { dataResto } from "./models/dataResto";
import unlikeRestoCekButton from "./tester/unlikeRestoCekButton";
import unlikeRestoCekIDB from "./tester/unlikeRestoCekIDB";

describe('(UNLIKE BUTTON TESTING)', () => {
  beforeEach( async () => {
    likeButtonContainer();
    await saveDataToDB({
      database: FavoriteRestoDb,
      data: dataResto
    })
  });

  afterEach( async () => {
    await saveDataToDB({
      database: FavoriteRestoDb,
      data: dataResto
    })
    console.log(document.getElementById('likeButton').attributes);
  });

  unlikeRestoCekButton(dataResto);
  unlikeRestoCekIDB({
    database: FavoriteRestoDb,
    data: dataResto
  })
});

