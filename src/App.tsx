import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import {  GlobalCss } from './styles';


import Rotas from './routes';
import { Store } from './store';
import Cart from './components/Cart';

function App() {
  return(
    <Provider store={Store}>

    <BrowserRouter>
    <GlobalCss />
        <Rotas />
        <Cart />
    </BrowserRouter>
    </Provider>

  )
}

export default App;
