import Config from '../globals/config';

const CacheHelper = {
  async cachingAppShell(req) {
    const cache = await this._openCache();
    cache.addAll(req);
  },

  async deleteOldCache() {
    const cacheNames = await caches.keys();

    cacheNames.filter((cacheName) => cacheName !== Config.cache_name)
      .map((filteredCacheName) => caches.delete(filteredCacheName));
  },

  async revalidateCache(req) {
    const response = await caches.match(req);

    if (response) {
      this._fetchreq(req);
      return response;
    }

    return this._fetchreq(req);
  },

  async _openCache() {
    return caches.open(Config.cache_name);
  },

  async _fetchreq(req) {
    const response = await fetch(req);

    if (!response || response.status !== 200) {
      return response;
    }

    await this._addCache(req);
    return response;
  },

  async _addCache(req) {
    const cache = await this._openCache();
    cache.add(req);
  },
};

export default CacheHelper;
