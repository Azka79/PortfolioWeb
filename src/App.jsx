import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Header from './pages/header.jsx';
import Home from './pages/home.jsx';
import About from './pages/about.jsx';
import Resume from './pages/resume.jsx';
import Portfolio from './pages/portfolio.jsx';
import Contact from './pages/contact.jsx';

// Global styles dipindahkan ke App.jsx agar berlaku untuk semua halaman
const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;700&display=swap');

  body {
    background-color: #070707;
    color: #FFFFFF;
    font-family: 'Poppins', sans-serif;
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
  }

  /* Menambahkan smooth scrolling untuk seluruh halaman */
  html {
    scroll-behavior: smooth;
  }
`;

const AppContainer = styled.div`
  /* Wadah utama untuk seluruh aplikasi */
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <Header />
        <main>
          <Home />
          <About />
          <Resume />
          <Portfolio />
          <Contact />
        </main>
      </AppContainer>
    </>
  );
}

export default App;

