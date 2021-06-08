import { openDB } from 'idb';
import Config from '../globals/config';

const dbPromise = openDB(Config.idb_name, Config.idb_version, {
  upgrade(db) {
    db.createObjectStoreI(Config.object_store_name, { keyPath: 'id' });
  },
});

const FavoriteResto = {
  async getResto(id) {
    return (await dbPromise).get(Config.object_store_name, id);
  },

  async getAllResto() {
    return (await dbPromise).get(Config.object_store_name);
  },

  async putResto(resto) {
    return (await dbPromise).put(Config.object_store_name, resto);
  },

  async deleteResto(id) {
    return (await dbPromise).delete(Config.object_store_name, id);
  },
};

export default FavoriteResto;
