import { Box } from '@mui/material';
import { useResponsiveQueries } from '@utilities/mediaQueries';
import ImageGallery from 'src/components/imageGallery';
import imageData from 'src/data/badgesOgMaerker';
import { NewSection, SectionHeading, TypographySpaceHalf } from 'src/styles/styledDiv';

const BadgesOgMaerker = () => {
    const { isTablet } = useResponsiveQueries();

    return (
        <Box>
            <SectionHeading>Bagdes og mærker</SectionHeading>

            <Box
                sx={{
                    ...(!isTablet && {
                        display: 'flex',
                        flexDirection: 'row',
                        gap: 3,
                    }),
                }}>
                <NewSection
                    sx={{
                        ...(!isTablet && {
                            mr: 2,
                        }),
                    }}>
                    <TypographySpaceHalf
                        sx={{
                            fontWeight: 'bold',
                        }}>
                        Badges & Mc Mærker
                    </TypographySpaceHalf>

                    <TypographySpaceHalf>
                        Ingen min. antal, send os gerne en e-mail for pristilbud.
                    </TypographySpaceHalf>
                </NewSection>

                <NewSection>
                    <ImageGallery images={imageData} />
                </NewSection>
            </Box>
        </Box>
    );
};

export default BadgesOgMaerker;
