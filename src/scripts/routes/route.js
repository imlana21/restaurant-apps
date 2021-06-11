import Home from '../views/pages/home';
import FavoriteResto from '../views/pages/favorite';
import DetailResto from '../views/pages/detail_page';

const routes = {
  '/': Home,
  '/home': Home,
  '/favorite': FavoriteResto,
  '/detail/id': DetailResto,
};

export default routes;
