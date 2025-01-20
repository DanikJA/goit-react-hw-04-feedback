import { StyledSection, Title } from './SectionStyled';

export const Section = ({ title, children }) => {
  return (
    <StyledSection>
      <Title>{title}</Title>
      {children}
    </StyledSection>
  );
};
