import styled from 'styled-components';

export const MoviesWrapper = styled.ul`
  margin-top: ${p => p.theme.space[5]}px;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${p => p.theme.space[4]}px;
`;
