// pages/_app.js
import { Provider } from 'react-redux';
import store from '../store'; // Adjust path if store.js is in a different location
import 'bootstrap/dist/css/bootstrap.css'


function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Colocation />
    </Provider>
  );
}

export default MyApp;
