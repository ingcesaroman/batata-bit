import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const SectionContainer = styled.section`
  margin-bottom: ${props => props.theme.spacing.xl};
`;

const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, #201E1C 0%, #282623 100%);
  z-index: -1;
`;

const Title = styled.h2`
  font-size: 2.4rem;
  font-weight: ${props => props.theme.typography.fontWeight.bold};
  text-align: center;
  margin-bottom: ${props => props.theme.spacing.md};
  color: ${props => props.theme.colors.white};
`;

const Description = styled.p`
  font-size: 1.4rem;
  text-align: center;
  margin-bottom: ${props => props.theme.spacing.xl};
  color: ${props => props.theme.colors.white};
`;

const TablesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.lg};
  
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    flex-direction: row;
  }
`;

const Table = styled(motion.div)`
  background-color: ${props => props.theme.colors.white};
  border-radius: 8px;
  padding: ${props => props.theme.spacing.lg};
  flex: 1;
`;

const TableTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: ${props => props.theme.typography.fontWeight.bold};
  margin-bottom: ${props => props.theme.spacing.md};
  color: ${props => props.theme.colors.primary};
`;

const TableContent = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableRow = styled.tr`
  &:not(:last-child) {
    border-bottom: 1px solid ${props => props.theme.colors.lightGray};
  }
`;

const TableCell = styled.td`
  padding: ${props => props.theme.spacing.md};
  font-size: 1.4rem;
  
  &:last-child {
    text-align: right;
  }
`;

const UpdateInfo = styled.p`
  font-size: 1.2rem;
  color: ${props => props.theme.colors.gray};
  margin-top: ${props => props.theme.spacing.md};
`;

export const ExchangeSection = () => {
  return (
    <SectionContainer>
      <Background />
      <Title>Visibilizamos todas las tasas de cambio.</Title>
      <Description>
        Traemos información en tiempo real de las casas de cambio y las monedas más importantes del mundo.
      </Description>
      
      <TablesContainer>
        <Table
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <TableTitle>Monedas</TableTitle>
          <TableContent>
            <tbody>
              <TableRow>
                <TableCell>Bitcoin</TableCell>
                <TableCell>$ 1.96 <span>↓</span></TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Ethereum</TableCell>
                <TableCell>$ 0.07 <span>↑</span></TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Ripple</TableCell>
                <TableCell>$ 2.17 <span>↓</span></TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Stellar</TableCell>
                <TableCell>$ 4.96 <span>↓</span></TableCell>
              </TableRow>
            </tbody>
          </TableContent>
          <UpdateInfo><b>Actualizado:</b> 6 Abril 22:31</UpdateInfo>
        </Table>

        <Table
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <TableTitle>Comisiones</TableTitle>
          <TableContent>
            <tbody>
              <TableRow>
                <TableCell>Bitso</TableCell>
                <TableCell>$ 12.96</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Binance</TableCell>
                <TableCell>$ 13.07</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Bitmex</TableCell>
                <TableCell>$ 13.15</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Coinbase</TableCell>
                <TableCell>$ 14.96</TableCell>
              </TableRow>
            </tbody>
          </TableContent>
          <UpdateInfo><b>Actualizado:</b> 6 Abril 22:31</UpdateInfo>
        </Table>
      </TablesContainer>
    </SectionContainer>
  );
}; 