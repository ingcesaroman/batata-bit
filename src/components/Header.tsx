import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const HeaderContainer = styled.header`
  background: linear-gradient(207.8deg, #201E1C 16.69%, #F7931A 100%);
  padding: ${props => props.theme.spacing.xl};
  text-align: center;
  color: ${props => props.theme.colors.white};
`;

const Logo = styled.img`
  width: 150px;
  margin-bottom: ${props => props.theme.spacing.lg};
`;

const Title = styled(motion.h1)`
  font-size: 2.4rem;
  font-weight: ${props => props.theme.typography.fontWeight.bold};
  margin-bottom: ${props => props.theme.spacing.md};
  
  @media (min-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: 3.2rem;
  }
`;

const Description = styled.p`
  font-size: 1.4rem;
  margin-bottom: ${props => props.theme.spacing.lg};
  
  @media (min-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: 1.8rem;
  }
`;

const Button = styled(motion.a)`
  display: inline-block;
  background-color: ${props => props.theme.colors.accent};
  color: ${props => props.theme.colors.white};
  padding: ${props => props.theme.spacing.md} ${props => props.theme.spacing.lg};
  border-radius: 4px;
  text-decoration: none;
  font-weight: ${props => props.theme.typography.fontWeight.bold};
  font-size: 1.4rem;
  
  &:hover {
    background-color: #F7931A;
  }
`;

export const Header = () => {
  return (
    <HeaderContainer>
      <Logo src="/assets/img/logo.svg" alt="Batabit logo" />
      <Title
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        La próxima revolución en el intercambio de criptomonedas.
      </Title>
      <Description>
        Batabit te ayuda a navegar entre los diferentes precios y tendencias.
      </Description>
      <Button
        href="#plans"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Conoce Nuestros Planes
      </Button>
    </HeaderContainer>
  );
}; 