import { Box, Typography } from '@mui/material';
import ImageGallery from 'src/components/imageGallery';
import imageData from '../data/galleryImages';
import { NewSection, SectionHeading } from '../styles/styledDiv';

const Galleri = () => {
    return (
        <Box>
            <SectionHeading>Galleri</SectionHeading>

            <NewSection>
                <Typography>
                    Her er et lille udvalg af nogle af de utallige opgaver som vi har påtagers os.
                </Typography>

                <NewSection>
                    <ImageGallery images={imageData} />
                </NewSection>
            </NewSection>
        </Box>
    );
};

export default Galleri;
