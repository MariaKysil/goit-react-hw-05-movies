import { AppBar } from 'components/AppBar/AppBar';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';
import { Box } from 'Box';

export const Layout = () => {
  return (
    <Box width={1200} mr={9} ml={9} mt={4} mb={5} pl={4} pr={4} fonts="body">
      <Suspense fallback={<Loader />}>
        <AppBar />
      </Suspense>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Box>
  );
};
