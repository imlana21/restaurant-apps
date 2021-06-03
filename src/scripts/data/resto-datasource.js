import ApiEndpoint from '../globals/api-endpoint';

class RestoDataSource {
  static async listData() {
    const response = await fetch(ApiEndpoint.list.url);
    const json = await response.json();

    return json.restaurants;
  }
}

export default RestoDataSource;
