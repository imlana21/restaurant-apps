import ApiEndpoint from '../globals/api-endpoint';

class RestoDataSource {
  static async listData() {
    const response = await fetch(ApiEndpoint.list.url);
    const json = await response.json();

    return json.restaurants;
  }

  static async detail(id) {
    const response = await fetch(ApiEndpoint.detail.url(id));
    const json = await response.json();

    return json.restaurant;
  }
}

export default RestoDataSource;
