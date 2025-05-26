import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const SectionContainer = styled.section`
  background: linear-gradient(207.8deg, #201E1C 16.69%, #F7931A 100%);
  padding: ${props => props.theme.spacing.xl};
  text-align: center;
  color: ${props => props.theme.colors.white};
  margin: ${props => props.theme.spacing.xl} 0;
`;

const Title = styled(motion.h2)`
  font-size: 2.4rem;
  font-weight: ${props => props.theme.typography.fontWeight.bold};
  
  @media (min-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: 3.2rem;
  }
`;

export const BitcoinSection = () => {
  return (
    <SectionContainer>
      <Title
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Conócelo hoy.
      </Title>
    </SectionContainer>
  );
}; 