import styled from '@emotion/styled';
import { FaLinkedin, FaFacebook, FaTwitter } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background-color: ${props => props.theme.colors.primary};
  padding: ${props => props.theme.spacing.xl};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${props => props.theme.spacing.lg};
  
  @media (min-width: ${props => props.theme.breakpoints.mobile}) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const SocialLinks = styled.ul`
  display: flex;
  gap: ${props => props.theme.spacing.md};
  list-style: none;
  padding: 0;
  margin: 0;
`;

const SocialLink = styled.a`
  color: ${props => props.theme.colors.white};
  font-size: 1.4rem;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.xs};
  
  &:hover {
    color: ${props => props.theme.colors.accent};
  }
`;

const Logo = styled.img`
  width: 150px;
`;

export const Footer = () => {
  return (
    <FooterContainer>
      <SocialLinks>
        <li>
          <SocialLink href="#">
            <FaLinkedin /> Linkedin
          </SocialLink>
        </li>
        <li>
          <SocialLink href="#">
            <FaFacebook /> Facebook
          </SocialLink>
        </li>
        <li>
          <SocialLink href="#">
            <FaTwitter /> Twitter
          </SocialLink>
        </li>
      </SocialLinks>
      <Logo src="/assets/img/logo-footer.svg" alt="Logo Batabit 2021" />
    </FooterContainer>
  );
}; 