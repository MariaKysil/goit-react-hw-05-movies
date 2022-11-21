import { useLocation } from 'react-router-dom';
import { Box } from 'Box';
import { StyledLink, Navigation } from './AppBar.styled';

export const AppBar = () => {
  const location = useLocation();

  return (
    <Box
      as="header"
      pt={5}
      pb={5}
      pl={4}
      mb={5}
      boxShadow="boxShadow"
      borderRadius="normal"
    >
      <Navigation>
        <StyledLink to="/" state={{ from: location }}>
          Home
        </StyledLink>
        <StyledLink to="movies" state={{ from: location }}>
          Movies
        </StyledLink>
      </Navigation>
    </Box>
  );
};
