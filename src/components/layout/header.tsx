import React, { useEffect } from 'react';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import NextLink from 'next/link';
import routes from 'src/utils/routes';
import logo from 'src/img/logo.jpg';
import { ContainerBG, InnerContainerNoPadding, LogoImage } from '../../styles/styledDiv';
import { useResponsiveQueries } from '@utilities/mediaQueries';
import CustomMenuItems from './menuItems';

export const Header: React.FC = () => {
    const { isTablet, isMobile } = useResponsiveQueries();

    const pathName = typeof window !== 'undefined' && window.location.pathname;

    const [menuAnchorEl, setMenuAnchorEl] = React.useState<null | HTMLElement>(null);
    const [currentRoute, setCurrentRoute] = React.useState<string | false>('');

    const handleMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
        setMenuAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setMenuAnchorEl(null);
    };

    const isActive = (route: string) => {
        if (`/${route}` === currentRoute) {
            return true;
        }
    };

    useEffect(() => {
        setCurrentRoute(pathName);
    }, [pathName]);

    return (
        <ContainerBG>
            <InnerContainerNoPadding>
                <Toolbar
                    style={{
                        padding: isMobile ? '16px' : '24px',
                        justifyContent: 'space-between',
                    }}>
                    <>
                        <NextLink href='/' passHref>
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    gap: '10px',
                                    '&:hover': {
                                        cursor: 'pointer',
                                    },
                                }}>
                                <LogoImage src={logo.src} alt='Logo' />
                                <Typography
                                    variant='h6'
                                    sx={{
                                        ...(isMobile && {
                                            fontSize: '16px',
                                        }),
                                    }}>
                                    Broderi Kompagniet
                                </Typography>
                            </Box>
                        </NextLink>
                    </>

                    {isTablet && (
                        <>
                            <IconButton
                                edge='start'
                                color='inherit'
                                aria-label='menu'
                                onClick={handleMenuOpen}>
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                anchorEl={menuAnchorEl}
                                open={Boolean(menuAnchorEl)}
                                onClose={handleMenuClose}
                                sx={{
                                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                                    '& .MuiPaper-root': {
                                        width: '100%',
                                    },
                                }}>
                                {routes.map(({ name, route }, index) => (
                                    <MenuItem
                                        key={`${route}-${index}`}
                                        onClick={handleMenuClose}
                                        sx={{
                                            a: {
                                                // color: isActive(route)
                                                //     ? 'primary.main'
                                                //     : 'text.primary',
                                                textDecoration: 'none',
                                            },
                                        }}
                                        disableRipple>
                                        <NextLink href={`/${route}`} passHref>
                                            {name}
                                        </NextLink>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </>
                    )}

                    {!isTablet && (
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                            }}>
                            <CustomMenuItems menuItems={routes} />
                        </Box>
                    )}
                </Toolbar>
            </InnerContainerNoPadding>
        </ContainerBG>
    );
};

export default Header;
