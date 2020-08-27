import { app } from 'hyperapp';
import HomeView from './views/Home';

export default function App(store) {
  app({
    init: store,
    view: HomeView,
    node: document.getElementById('root'),
  });
}
