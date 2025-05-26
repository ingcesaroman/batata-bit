import styled from '@emotion/styled';
import { ExchangeSection } from './sections/ExchangeSection';
import { ProductDetail } from './sections/ProductDetail';
import { BitcoinSection } from './sections/BitcoinSection';
import { PlansSection } from './sections/PlansSection';

const MainContainer = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${props => props.theme.spacing.xl};
`;

export const MainContent = () => {
  return (
    <MainContainer>
      <ExchangeSection />
      <ProductDetail />
      <BitcoinSection />
      <PlansSection />
    </MainContainer>
  );
}; 