import { Provider } from 'react-redux';

import { Layout } from './containers/Layout';

import { store } from './store';

export const App: React.FC = () => (
  <Provider store={store}>
    <Layout />
  </Provider>
);
