import Config from './config';

const ApiEndpoint = {
  list: {
    url: `${Config.base_url}/list`,
    method: 'GET',
  },
  detail: {
    url: (id) => `${Config.base_url}/detail/${id}`,
    method: 'GET',
  },
  search: {
    url: (query) => `${Config.base_url}/search?q=${query}`,
    method: 'GET',
  },
  addNewReview: {
    url: `${Config.base_url}/review`,
    method: 'POST',
  },
  imageGet: {
    url: {
      lowRes: (id) => `${Config.base_image_url}/small/${id}`,
      mediumRes: (id) => `${Config.base_image_url}/medium/${id}`,
      largeRes: (id) => `${Config.base_image_url}/large/${id}`,
    },
    method: 'POST',
  },
};

export default ApiEndpoint;
