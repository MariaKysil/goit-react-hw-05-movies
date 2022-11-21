import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Navigation = styled.nav`
  font-family: ${p => p.theme.fonts.heading};

  & > :first-child {
    margin-right: ${p => p.theme.space[5]}px;
  }
`;

export const StyledLink = styled(NavLink)`
  color: ${p => p.theme.colors.text};
  font-size: ${p => p.theme.fontSizes.l};

  &.active {
    color: ${p => p.theme.colors.accent};
    text-decoration: underline;
  }

  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: ${p => p.theme.colors.secondary};
  }
`;
