import { useMediaQuery } from '@mui/material';

export const useResponsiveQueries = () => {
  const isMobile = useMediaQuery('(max-width: 600px)');
  const isTablet = useMediaQuery('(max-width: 1024px)');

  return { isMobile, isTablet };
};
