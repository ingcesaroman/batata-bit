import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const SectionContainer = styled.section`
  padding: ${props => props.theme.spacing.xl} 0;
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

const PlansContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.lg};
  max-width: 930px;
  margin: 0 auto;
  
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    flex-direction: row;
  }
`;

const PlanCard = styled(motion.article)`
  background-color: ${props => props.theme.colors.white};
  border-radius: 8px;
  padding: ${props => props.theme.spacing.lg};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  position: relative;
  flex: 1;
`;

const RecommendedBadge = styled.span`
  position: absolute;
  top: -12px;
  left: 50%;
  transform: translateX(-50%);
  background-color: ${props => props.theme.colors.accent};
  color: ${props => props.theme.colors.white};
  padding: ${props => props.theme.spacing.xs} ${props => props.theme.spacing.md};
  border-radius: 4px;
  font-size: 1.2rem;
  font-weight: ${props => props.theme.typography.fontWeight.bold};
`;

const PlanTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: ${props => props.theme.typography.fontWeight.bold};
  margin-bottom: ${props => props.theme.spacing.md};
  text-align: center;
`;

const Price = styled.p`
  font-size: 5.2rem;
  font-weight: ${props => props.theme.typography.fontWeight.bold};
  text-align: center;
  margin-bottom: ${props => props.theme.spacing.md};
  
  span {
    font-size: 1.8rem;
    vertical-align: super;
  }
`;

const Saving = styled.p`
  font-size: 1.2rem;
  color: ${props => props.theme.colors.gray};
  text-align: center;
  margin-bottom: ${props => props.theme.spacing.lg};
`;

const Button = styled(motion.button)`
  width: 100%;
  background-color: ${props => props.theme.colors.accent};
  color: ${props => props.theme.colors.white};
  border: none;
  padding: ${props => props.theme.spacing.md};
  border-radius: 4px;
  font-size: 1.4rem;
  font-weight: ${props => props.theme.typography.fontWeight.bold};
  cursor: pointer;
  
  &:hover {
    background-color: #F7931A;
  }
`;

const plans = [
  {
    title: 'Pago Anual',
    price: 5,
    saving: '*Plan básico para mantenerte informado',
    recommended: false
  },
  {
    title: 'Pago Anual',
    price: 49,
    saving: '*Ahorras $129 comparado al plan mensual.',
    recommended: true
  },
  {
    title: 'Acceso de por vida',
    price: 99,
    saving: '*Ahorras $999+ comparado al plan anual.',
    recommended: false
  }
];

export const PlansSection = () => {
  return (
    <SectionContainer id="plans">
      <Title>Escoge el plan que mejor se ajuste a ti.</Title>
      <Subtitle>Cualquier plan te da acceso completo a nuestra plataforma.</Subtitle>
      
      <PlansContainer>
        {plans.map((plan, index) => (
          <PlanCard
            key={plan.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            {plan.recommended && <RecommendedBadge>Recomendado</RecommendedBadge>}
            <PlanTitle>{plan.title}</PlanTitle>
            <Price><span>$</span>{plan.price}</Price>
            <Saving>{plan.saving}</Saving>
            <Button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Escoger este
            </Button>
          </PlanCard>
        ))}
      </PlansContainer>
    </SectionContainer>
  );
}; 