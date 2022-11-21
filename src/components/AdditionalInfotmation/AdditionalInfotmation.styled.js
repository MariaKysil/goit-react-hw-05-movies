import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  color: ${p => p.theme.colors.text};
  font-size: ${p => p.theme.fontSizes.l};

  &.active {
    color: ${p => p.theme.colors.accent};
    text-decoration: underline;
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: ${p => p.theme.colors.secondary};
  }
`;

export const AddInfoWrapper = styled.ul`
  margin-top: ${p => p.theme.space[5]}px;
`;
