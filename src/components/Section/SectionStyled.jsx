import styled from 'styled-components';

export const StyledSection = styled.section`
  padding: 20px 30px;
  background-color: #f0f0f0;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin: 20px auto;

  h2 {
    font-size: 24px;
    color: #333333;
    text-align: center;
    margin-bottom: 15px;
    font-weight: bold;
  }
`;

export const Wrapper = styled.div`
  display: block;
  max-width: 600px;
  margin-right: auto;
  margin-left: auto;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h2`
  display: flex;
  justify-content: center;
`;
