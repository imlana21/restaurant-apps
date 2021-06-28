import FavoriteRestoDb from "../src/scripts/data/favorite-idb";
import buttonPresenter from "./helpers/likePresenter";

const restoId = 'rqdv5juczeskfw1e867';

describe('UNLIKE BUTTON TESTING', () => {
  beforeEach( async () => {
    await buttonPresenter(restoId);
  });

  it('Menampilkan unlike button ketika restoran telah disukai', async () => {
    expect(document.querySelector('[aria-label="unlike resto"]')).toBeTruthy();
  });

  it('Mengecek movie di database ketika unlike ditekan', async () => {
    const resto = await FavoriteRestoDb.getResto(restoId);

    expect(resto).not.toEqual({ id: restoId});
  })
});