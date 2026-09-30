import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import {  GlobalCss } from './styles';


import Rotas from './routes';
import { Store } from './store';

function App() {
  return(
    <Provider store={Store}>

    <BrowserRouter>
    <GlobalCss />
        <Rotas />
    </BrowserRouter>
    </Provider>

  )
}

export default App;
