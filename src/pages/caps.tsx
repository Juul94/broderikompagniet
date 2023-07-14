import { Box } from '@mui/material';
import { useResponsiveQueries } from '@utilities/mediaQueries';
import ImageGallery from 'src/components/imageGallery';
import imageData from 'src/data/capImages';
import { SectionHeading, TypographySpace } from 'src/styles/styledDiv';

const Caps = () => {
    const { isTablet } = useResponsiveQueries();

    return (
        <Box>
            <SectionHeading>Caps</SectionHeading>

            <Box
                sx={{
                    ...(!isTablet && {
                        display: 'flex',
                        flexDirection: 'row',
                    }),
                }}>
                <Box
                    sx={{
                        ...(!isTablet && {
                            mr: 2,
                        }),
                    }}>
                    <TypographySpace variant='h6'>Design din egen cap!</TypographySpace>

                    <TypographySpace>
                        Vi har gode kontakter til produktion i Østen til meget fordelagtige priser!
                    </TypographySpace>

                    <TypographySpace>
                        Min. er 300 stk. med en leveringstid på ca. 18-20 arbejdsdage.
                    </TypographySpace>

                    <TypographySpace>
                        Kom gerne med jeres eget design. Kontakt os gerne for mere information.
                    </TypographySpace>
                </Box>

                <ImageGallery images={imageData} />
            </Box>
        </Box>
    );
};

export default Caps;
