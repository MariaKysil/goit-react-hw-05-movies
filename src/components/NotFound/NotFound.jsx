import { Box } from 'Box';
import mistake from '../../images/404.webp';

export const NotFound = () => {
  return (
    <Box as="main" textAlign="center">
      <h1>404 page not found</h1>
      <img src={mistake} alt="something went wrong" width="700" />
    </Box>
  );
};
