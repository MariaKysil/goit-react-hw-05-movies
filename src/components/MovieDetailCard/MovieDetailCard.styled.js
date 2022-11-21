import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-top: ${p => p.theme.space[5]}px;
  margin-bottom: ${p => p.theme.space[5]}px;
  display: flex;
  align-items: center;
`;

export const TextWrapper = styled.div`
  margin-left: ${p => p.theme.space[4]}px;
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.space[4]}px;

  & span {
    font-weight: ${p => p.theme.fontWeights.bold};
  }
`;
