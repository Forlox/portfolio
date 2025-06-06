import React, { JSX } from 'react';
import { Footer } from './Footer/Footer';
import { Header } from './Header/Header';
import { Main } from './Main/Main';
import { GlobalStyle } from './global'

function App(): JSX.Element {
    return (
        <>
            <GlobalStyle />
            <Header />
            <Main />
            <Footer />
        </>
    );
}

export default App;