import { useState } from 'react';
import { MenuItem, MenuList, Popover, Typography } from '@mui/material';
import NextLink from 'next/link';

interface RouteItem {
    name: string;
    route: string;
}

interface RouteGroup {
    name: string;
    route: RouteItem[];
}

type MenuItemType = RouteItem | RouteGroup;

interface CustomMenuItemsProps {
    menuItems: MenuItemType[];
}

const CustomMenuItems: React.FC<CustomMenuItemsProps> = ({ menuItems }) => {
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

    const handleOpenPopover = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClosePopover = () => {
        setAnchorEl(null);
    };

    const isPopoverOpen = Boolean(anchorEl);

    return (
        <>
            {menuItems.map((menuItem, index) => {
                if ('route' in menuItem && Array.isArray(menuItem.route)) {
                    // Menu item with children
                    const { name, route: children } = menuItem;

                    return (
                        <>
                            <MenuItem
                                key={name}
                                disableRipple
                                onClick={handleOpenPopover}
                                sx={{
                                    py: 0,
                                    px: '7.5px',
                                    textAlign: 'right',
                                    textDecoration: 'none',
                                    '&:hover': {
                                        backgroundColor: 'transparent',
                                        color: 'primary.main',
                                    },
                                }}>
                                <Typography>{name}</Typography>
                            </MenuItem>
                            <Popover
                                open={isPopoverOpen}
                                anchorEl={anchorEl}
                                onClose={handleClosePopover}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}>
                                <MenuList autoFocusItem={isPopoverOpen}>
                                    {children.map((child, childIndex) => (
                                        <MenuItem
                                            key={`${child.route}-${childIndex}`}
                                            disableRipple
                                            onClick={() => {
                                                // Handle child menu item click here
                                            }}>
                                            {child.name}
                                        </MenuItem>
                                    ))}
                                </MenuList>
                            </Popover>
                        </>
                    );
                }

                // Regular menu item
                const { name, route } = menuItem;

                return (
                    <NextLink key={`${route}-${index}`} href={`/${route}`} passHref>
                        <MenuItem
                            disableRipple
                            sx={{
                                py: 0,
                                px: '7.5px',
                                textAlign: 'right',
                                textDecoration: 'none',
                                '&:hover': {
                                    backgroundColor: 'transparent',
                                    color: 'primary.main',
                                },
                            }}>
                            {name}
                        </MenuItem>
                    </NextLink>
                );
            })}
        </>
    );
};

export default CustomMenuItems;
