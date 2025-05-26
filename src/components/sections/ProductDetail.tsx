import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { FaClock, FaEye, FaDollarSign, FaCheckCircle } from 'react-icons/fa';

const SectionContainer = styled.section`
  padding: ${props => props.theme.spacing.xl} 0;
`;

const Logo = styled.div`
  width: 40px;
  height: 40px;
  margin: 0 auto ${props => props.theme.spacing.lg};
  background-color: ${props => props.theme.colors.accent};
  border-radius: 50%;
`;

const Title = styled.h2`
  font-size: 2.4rem;
  font-weight: ${props => props.theme.typography.fontWeight.bold};
  text-align: center;
  margin-bottom: ${props => props.theme.spacing.sm};
`;

const Subtitle = styled.p`
  font-size: 1.4rem;
  text-align: center;
  margin-bottom: ${props => props.theme.spacing.xl};
  color: ${props => props.theme.colors.gray};
`;

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${props => props.theme.spacing.lg};
  
  @media (min-width: ${props => props.theme.breakpoints.mobile}) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const Card = styled(motion.article)`
  padding: ${props => props.theme.spacing.lg};
  background-color: ${props => props.theme.colors.white};
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const IconWrapper = styled.div`
  width: 40px;
  height: 40px;
  margin-bottom: ${props => props.theme.spacing.md};
  color: ${props => props.theme.colors.accent};
`;

const CardTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: ${props => props.theme.typography.fontWeight.bold};
  margin-bottom: ${props => props.theme.spacing.sm};
`;

const CardBody = styled.p`
  font-size: 1.4rem;
  color: ${props => props.theme.colors.gray};
  line-height: 1.5;
`;

const productFeatures = [
  {
    icon: <FaClock />,
    title: 'Tiempo real',
    description: 'Nuestro API toma información minuto a minuto sobre las tasas que más determinan el comportamiento.'
  },
  {
    icon: <FaEye />,
    title: 'No hay tasas escondidas',
    description: 'Ni en la compra o al momento de exit, Batabit siempre te muestra el costo real de lo que estás adquiriendo.'
  },
  {
    icon: <FaDollarSign />,
    title: 'Compara monedas',
    description: 'No más rumores, con Babtabit sabrás el valor real de cada moneda en el mercado actual.'
  },
  {
    icon: <FaCheckCircle />,
    title: 'Información confiable',
    description: 'Nuestras fuentes están 100% verificadas y continuamos auditando su contenido mientras se actualizan.'
  }
];

export const ProductDetail = () => {
  return (
    <SectionContainer>
      <Logo />
      <Title>Creamos un producto sin comparación.</Title>
      <Subtitle>Confiable y diseñado para su uso diario.</Subtitle>
      
      <CardsContainer>
        {productFeatures.map((feature, index) => (
          <Card
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <IconWrapper>{feature.icon}</IconWrapper>
            <CardTitle>{feature.title}</CardTitle>
            <CardBody>{feature.description}</CardBody>
          </Card>
        ))}
      </CardsContainer>
    </SectionContainer>
  );
}; 