import FavoriteRestoDb from "../../src/scripts/data/favorite-idb";
import { restoId } from "../models/restoId";
import RestoDataSource from '../../src/scripts/data/resto-datasource';

const saveDataToDB = async () => {
    const dataResto = await  RestoDataSource.detail(restoId);
    await FavoriteRestoDb.putResto(await dataResto);
    document.getElementById('likeButton').setAttribute('aria-label', 'unlike resto');
}

export default saveDataToDB;
