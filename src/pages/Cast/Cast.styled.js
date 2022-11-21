import styled from 'styled-components';

export const CastWrapper = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${p => p.theme.space[4]}px;
`;
