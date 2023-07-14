import { Box, Typography } from '@mui/material';
import { NewSection, SectionHeading } from 'src/styles/styledDiv';
import ImageGallery from 'src/components/imageGallery';
import imageData from 'src/data/skrifttyperImages';

const Skrifttyper = () => {
    return (
        <Box>
            <SectionHeading>Skrifttyper</SectionHeading>

            <NewSection>
                <Typography>Standard tekst til broderi.</Typography>

                <ImageGallery images={imageData} thumbSize='400px' largeContent />
            </NewSection>
        </Box>
    );
};

export default Skrifttyper;
