import React from 'react';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import { ContainerRelative, InnerContainer, FooterContent } from '../../styles/styledDiv';
import { useResponsiveQueries } from '@utilities/mediaQueries';
import NextLink from 'next/link';

const Footer: React.FC = () => {
    const { isMobile } = useResponsiveQueries();

    return (
        <ContainerRelative>
            <InnerContainer
                sx={{
                    ...(isMobile && {
                        p: 2,
                    }),
                }}>
                <Box
                    sx={{
                        maxWidth: '1080px',
                        margin: '0 auto',
                        ...(!isMobile && {
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            padding: 3,
                        }),
                    }}>
                    <Box
                        sx={{
                            ...(isMobile && {
                                mt: 1,
                                mb: 3,
                            }),
                        }}>
                        <Typography
                            variant='h6'
                            color='textPrimary'
                            sx={{
                                fontSize: '0.875rem',
                            }}>
                            Åbningstider
                        </Typography>

                        <Box
                            sx={{
                                width: '250px',
                            }}>
                            <FooterContent>
                                <Typography variant='body2' color='textSecondary'>
                                    Mandag - Torsdag
                                </Typography>
                                <Typography variant='body2' color='textSecondary'>
                                    08:00 - 16:00
                                </Typography>
                            </FooterContent>

                            <FooterContent>
                                <Typography variant='body2' color='textSecondary'>
                                    Fredag
                                </Typography>
                                <Typography variant='body2' color='textSecondary'>
                                    08:00 - 15:00
                                </Typography>
                            </FooterContent>
                        </Box>
                    </Box>

                    <Box
                        sx={{
                            ...(isMobile && {
                                mb: 3,
                            }),
                        }}>
                        <Typography
                            variant='h6'
                            color='textPrimary'
                            sx={{
                                fontSize: '0.875rem',
                            }}>
                            Broderikompagniet
                        </Typography>

                        <Typography variant='body2' color='textSecondary'>
                            Hejrevang 21 F
                        </Typography>

                        <Typography variant='body2' color='textSecondary'>
                            3450 Allerød
                        </Typography>

                        <Typography variant='body2' color='textSecondary'>
                            +45 4871 1299
                        </Typography>
                    </Box>

                    <Box
                        sx={{
                            ...(isMobile && {
                                mb: 2,
                            }),
                        }}>
                        <Typography
                            variant='h6'
                            color='textPrimary'
                            sx={{
                                fontSize: '0.875rem',
                            }}>
                            Kontakt
                        </Typography>

                        <Typography variant='body2' color='textSecondary'>
                            salg@broderikompagniet.dk
                        </Typography>

                        <NextLink href='/kontakt' passHref>
                            <Typography
                                variant='body2'
                                color='textSecondary'
                                sx={{
                                    '&:hover': {
                                        cursor: 'pointer',
                                        color: 'primary.main',
                                    },
                                }}>
                                Kontakt os her
                            </Typography>
                        </NextLink>
                    </Box>
                </Box>
            </InnerContainer>
        </ContainerRelative>
    );
};

export default Footer;
