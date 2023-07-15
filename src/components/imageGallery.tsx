import React, { useState, useEffect } from 'react';
import { makeStyles, createStyles } from '@mui/styles';
import { Dialog, DialogContent, DialogTitle, IconButton, Box } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { useResponsiveQueries } from '@utilities/mediaQueries';

const useStyles = makeStyles(() =>
    createStyles({
        galleryItem: {
            cursor: 'pointer',
            maxWidth: '100%',
            maxHeight: '100%',
            objectFit: 'contain',
            transition: 'transform 0.2s',
            '&:hover': {
                transform: 'scale(1.05)',
            },
        },
        dialogContent: {
            padding: '16px',
        },
        dialogTitle: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
        },
        '@media (max-width: 600px)': {
            dialogContent: {
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            },
            imageWrapper: {
                marginBottom: '16px',
            },
        },
    }),
);

interface ImageGalleryProps {
    images: { url: string; title: string }[];
    thumbSize?: string;
    largeContent?: boolean;
}

export const ImageGallery: React.FC<ImageGalleryProps> = ({ images, thumbSize, largeContent }) => {
    const { isMobile } = useResponsiveQueries();

    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

    const handleOpenDialog = (index: number) => {
        setSelectedImageIndex(index);
        setOpen(true);
    };

    const handleCloseDialog = () => {
        setOpen(false);
        setSelectedImageIndex(null);
    };

    const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === 'ArrowLeft' && selectedImageIndex !== null && selectedImageIndex > 0) {
            setSelectedImageIndex((prevIndex) => (prevIndex !== null ? prevIndex - 1 : null));
        } else if (
            event.key === 'ArrowRight' &&
            selectedImageIndex !== null &&
            selectedImageIndex < images.length - 1
        ) {
            setSelectedImageIndex((prevIndex) => (prevIndex !== null ? prevIndex + 1 : null));
        }
    };

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedImageIndex]);

    return (
        <Box sx={{ display: 'flex', flexDirection: 'row' }}>
            <Box
                sx={{
                    img: {
                        '&:hover': {
                            cursor: 'pointer',
                        },
                    },
                    '.lazy-load-image-background': {
                        marginRight: '16px',
                    },
                }}>
                {images.map((image: { url: string; title: string }, index: number) => {
                    return (
                        <LazyLoadImage
                            key={`${image.title}-${index}`}
                            style={{
                                maxWidth: isMobile
                                    ? thumbSize
                                        ? '200px'
                                        : '100px'
                                    : thumbSize || '100px',
                            }}
                            src={image.url}
                            alt={image.title}
                            className={classes.galleryItem}
                            onClick={() => handleOpenDialog(index)}
                            effect='blur'
                        />
                    );
                })}
            </Box>

            <Dialog open={open} onClose={handleCloseDialog}>
                <DialogTitle className={classes.dialogTitle}>
                    {selectedImageIndex !== null && images[selectedImageIndex].title}
                    <IconButton aria-label='close' onClick={handleCloseDialog}>
                        <CloseIcon />
                    </IconButton>
                </DialogTitle>

                <DialogContent className={classes.dialogContent}>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            '.MuiButtonBase-root': {
                                '&:hover': {
                                    color: 'primary.main',
                                    backgroundColor: 'transparent',
                                },
                            },
                        }}>
                        <IconButton
                            aria-label='previous'
                            disabled={selectedImageIndex === 0}
                            onClick={() =>
                                setSelectedImageIndex((prevIndex) =>
                                    prevIndex !== null ? prevIndex - 1 : null,
                                )
                            }
                            disableRipple>
                            <ChevronLeftIcon />
                        </IconButton>

                        <LazyLoadImage
                            style={{
                                maxWidth: largeContent
                                    ? isMobile
                                        ? '300px'
                                        : '500px'
                                    : isMobile
                                    ? '200px'
                                    : '400px',
                                maxHeight: largeContent
                                    ? isMobile
                                        ? '300px'
                                        : '500px'
                                    : isMobile
                                    ? '200px'
                                    : '400px',
                                marginRight: '8px',
                            }}
                            src={selectedImageIndex !== null ? images[selectedImageIndex].url : ''}
                            alt={
                                selectedImageIndex !== null ? images[selectedImageIndex].title : ''
                            }
                            effect='blur'
                        />

                        <IconButton
                            aria-label='next'
                            disabled={selectedImageIndex === images.length - 1}
                            onClick={() =>
                                setSelectedImageIndex((prevIndex) =>
                                    prevIndex !== null ? prevIndex + 1 : null,
                                )
                            }
                            disableRipple>
                            <ChevronRightIcon />
                        </IconButton>
                    </Box>
                </DialogContent>
            </Dialog>
        </Box>
    );
};

export default ImageGallery;
