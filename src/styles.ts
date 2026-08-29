import { BrowserRouter } from "react-router-dom";
import { createGlobalStyle } from "styled-components"; 

export const cores = {
    laranja: '#E66767',
    rosa1: '#FFF8F2',
    rosa2: '#FFEBD9',
    branco: '#fff',
    dourado: '#FFB930',
    cordefundo: 'border: Mixed solid #E66767'
}



export const GlobalCss = createGlobalStyle `
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;


    body {
        background-color: ${cores.cordefundo};
        color: ${cores.laranja};
    
    }

    .container {
    max-width: 100%;
    width: 100%;
    margin: 0 auto;

    }
}
`