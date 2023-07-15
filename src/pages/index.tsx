import Typography from '@mui/material/Typography';
import type { NextPage } from 'next';
import { Box } from '@mui/material';
import ImageGallery from 'src/components/imageGallery';
import imageData from '../data/homeImages';
import { ContainerHalf, SectionHeading, TypographySpace } from '../styles/styledDiv';
import { useResponsiveQueries } from '@utilities/mediaQueries';

const HomePage: NextPage = () => {
    const { isTablet } = useResponsiveQueries();

    return (
        <ContainerHalf>
            <Box>
                <SectionHeading variant='h5'>Velkommen til Broderi Kompagniet</SectionHeading>

                <Box
                    sx={{
                        flex: '0 0 65%',
                        pr: 4,
                    }}>
                    <Typography
                        sx={{
                            fontWeight: 'bold',
                            mt: 2,
                            mb: 2,
                        }}>
                        At gøre et godt indtryk er en vigtig del af kunderelationen.
                    </Typography>

                    <TypographySpace>
                        Deres logo som et flot multifarvet broderi er første skridt på vejen.
                    </TypographySpace>

                    <TypographySpace>
                        Vores broderimaskiner klarer så godt som alle typer opgaver direkte på
                        tøjet, eller evt. som et badge m/strygelim bagpå.
                    </TypographySpace>

                    <Typography>
                        Vi broderer både på caps, dåbskjoler, golfbags, trolleys, næsten på alt.
                    </Typography>

                    <TypographySpace>
                        Har De ikke noget grafisk materiale kan vores tegnestue være behjælpelig med
                        at rentegne dette, og levere det som en eps. Jpeg. Ai. eller Pdf fil.
                    </TypographySpace>

                    <TypographySpace>
                        Fra modtagelse af logo materiale går der ca. 3 arbejdsdage så har vi en
                        fysisk prøve klar til godkendelse. Herefter går der ca. 5 arbejdsdage med at
                        brodere selve ordren, med mindre andet aftales.
                    </TypographySpace>

                    <TypographySpace>
                        I 2005 opkøbte vi Fischer Broderi i Nordsjælland, og i 2006 opkøbte vi
                        firmaet &quot;Broderiet&quot; i København, vi har den største produktion på
                        Sjælland, og klarer både små & store opgaver. Og haster det, så klarer vi
                        det også.
                    </TypographySpace>

                    <TypographySpace>
                        Brug gerne et par minutter til at kigge lidt på vores hjemmeside, her finder
                        De svar på det meste, ellers kontakt os endeligt.
                    </TypographySpace>

                    <Typography>Med venling hilsen</Typography>
                    <Typography>Henrik Nielsen</Typography>
                    <Typography>Adm. Direktør</Typography>
                </Box>
            </Box>

            <Box
                sx={{
                    flex: '0 0 35%',
                    ...(isTablet && {
                        mt: 4,
                    }),
                }}>
                <ImageGallery images={imageData} />
            </Box>
        </ContainerHalf>
    );
};

export default HomePage;
