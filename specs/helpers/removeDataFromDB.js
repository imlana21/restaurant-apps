import FavoriteRestoDb from "../../src/scripts/data/favorite-idb"
import { restoId } from "../models/restoId";

const removeDataFromDB = async () => {
  await FavoriteRestoDb.deleteResto(restoId);
}

export default removeDataFromDB;
