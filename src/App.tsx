import { ThemeProvider } from '@emotion/react';
import styled from '@emotion/styled';
import { Header } from './components/Header';
import { MainContent } from './components/MainContent';
import { Footer } from './components/Footer';
import { theme } from './theme';

const AppContainer = styled.div`
  font-family: 'DM Sans', sans-serif;
  background-color: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.text};
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppContainer>
        <Header />
        <MainContent />
        <Footer />
      </AppContainer>
    </ThemeProvider>
  );
}

export default App; 