import { Wrapper, Button } from './FeedbackStyled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <Wrapper>
    {options.map(option => (
      <Button key={option} onClick={() => onLeaveFeedback(option)}>
        {option}
      </Button>
    ))}
  </Wrapper>
);
