import { MenuItem, Menu, Typography, Button } from '@mui/material';
import NextLink from 'next/link';
import { useState } from 'react';

interface MenuItem {
    name: string;
    route?: string | undefined;
    children?: MenuItem[];
}

interface CustomMenuItemsProps {
    menuItems: MenuItem[];
    currentRoute: string | boolean;
    isTablet?: boolean;
    handleMenuClose?: any;
}

const CustomMenuItems: React.FC<CustomMenuItemsProps> = ({
    menuItems,
    currentRoute,
    isTablet,
    handleMenuClose,
}) => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const IsActive = (route: string | undefined, currentRoute: string | boolean) => {
        if (`/${route}` === currentRoute) {
            return 'primary.main';
        }
        return 'inherit';
    };

    const IsActiveParent = (
        route: string | undefined,
        currentRoute: string | boolean,
        open: boolean,
        children?: MenuItem[],
    ) => {
        if (`/${route}` === currentRoute || open) {
            return 'primary.main';
        } else if (children && children.some((child) => `/${child.route}` === currentRoute)) {
            return 'primary.main';
        } else {
            return 'text.primary';
        }
    };

    const renderMenuItemTablet = (menuItem: MenuItem) => {
        const { name, route, children } = menuItem;

        if (children && children.length > 0) {
            return (
                <>
                    <MenuItem
                        disableRipple
                        sx={{
                            py: 0,
                            px: '7.5px',
                            textAlign: 'right',
                            textDecoration: 'none',
                            color: IsActive(route, currentRoute),
                            '&:hover': {
                                backgroundColor: 'transparent',
                                color: 'primary.main',
                            },
                        }}>
                        <Typography>{name}</Typography>
                    </MenuItem>

                    {children.map((child, index: number) => (
                        <NextLink key={`${child.name}-${index}`} href={`/${child.route}`} passHref>
                            <MenuItem
                                disableRipple
                                onClick={handleMenuClose}
                                sx={{
                                    px: 3,
                                }}>
                                <Typography
                                    sx={{
                                        color: IsActive(child.route, currentRoute),
                                    }}>
                                    {child.name}
                                </Typography>
                            </MenuItem>
                        </NextLink>
                    ))}
                </>
            );
        } else {
            return (
                <>
                    <NextLink key={name} href={`/${route}`} passHref>
                        <MenuItem
                            disableRipple
                            onClick={handleMenuClose}
                            sx={{
                                py: 0,
                                px: '7.5px',
                                textAlign: 'right',
                                textDecoration: 'none',
                                color: IsActive(route, currentRoute),
                                '&:hover': {
                                    backgroundColor: 'transparent',
                                    color: 'primary.main',
                                },
                            }}>
                            <Typography>{name}</Typography>
                        </MenuItem>
                    </NextLink>
                </>
            );
        }
    };

    const renderMenuItemDesktop = (menuItem: MenuItem) => {
        const { name, route, children } = menuItem;

        if (children && children.length > 0) {
            return (
                <>
                    <Button
                        id='basic-button'
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup='true'
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                        disableRipple
                        sx={{
                            textTransform: 'capitalize',
                            color: IsActiveParent(route, currentRoute, open, children),
                            transition: 'none',
                            '&:hover': {
                                backgroundColor: 'transparent',
                                color: 'primary.main',
                                transition: 'none',
                            },
                        }}>
                        <Typography>{name}</Typography>
                    </Button>

                    <Menu
                        id='basic-menu'
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}>
                        {children.map((child, index: number) => (
                            <NextLink
                                key={`${child.name}-${index}`}
                                href={`/${child.route}`}
                                passHref>
                                <MenuItem disableRipple onClick={handleClose}>
                                    <Typography
                                        sx={{
                                            color: IsActive(child.route, currentRoute),
                                        }}>
                                        {child.name}
                                    </Typography>
                                </MenuItem>
                            </NextLink>
                        ))}
                    </Menu>
                </>
            );
        } else {
            return (
                <NextLink key={name} href={`/${route}`} passHref>
                    <MenuItem
                        disableRipple
                        sx={{
                            py: 0,
                            px: '7.5px',
                            textAlign: 'right',
                            textDecoration: 'none',
                            color: IsActive(route, currentRoute),
                            '&:hover': {
                                backgroundColor: 'transparent',
                                color: 'primary.main',
                            },
                        }}>
                        <Typography>{name}</Typography>
                    </MenuItem>
                </NextLink>
            );
        }
    };

    return <>{menuItems.map(isTablet ? renderMenuItemTablet : renderMenuItemDesktop)}</>;
};

export default CustomMenuItems;
