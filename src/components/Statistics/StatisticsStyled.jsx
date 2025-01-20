import styled from 'styled-components';

export const StatsContainer = styled.div`
  background-color: #ffffff;
  padding: 15px 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const StatItem = styled.p`
  font-size: 16px;
  color: #4f4f4f;
  margin: 8px 0;

  &:first-of-type {
    margin-top: 0;
  }
`;

export const PositiveFeedback = styled(StatItem)`
  font-weight: bold;
  color: #4caf50;
`;
