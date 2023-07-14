import { Box, Typography } from '@mui/material';
import { NewSection, SectionHeading, TypographySpace } from 'src/styles/styledDiv';

const Materiale = () => {
    return (
        <Box>
            <SectionHeading>Materiale</SectionHeading>

            <NewSection>
                <Typography
                    sx={{
                        fontWeight: 'bold',
                        mb: 2,
                    }}>
                    Næsten alle materialer kan der broderes på, lige fra dåbskjoler, håndklæder,
                    tasker, golfbags m.m.
                </Typography>

                <TypographySpace>
                    Større logo på ca. 30x30 cm egner sig ikke så godt til tynde t-shirts, her ville
                    et tryk være bedre.
                </TypographySpace>

                <TypographySpace>
                    Små bogstaver er ikke altid velegnet til broderi, derfor anbefaler vi en min.
                    højde på 4-5 mm. Herved får man det bedste resultat, streger skal helst være
                    min. 1,2 mm i bredde.
                </TypographySpace>

                <TypographySpace>
                    Størrelsen på et broderi kan betyde meget for et godt udseende, her er et par
                    anbefalinger:
                </TypographySpace>

                <TypographySpace>
                    Et brystlogo gør sig flot ved max. at være ca. 12-13 cm i bredde og max. 5-6 cm
                    i højden.
                </TypographySpace>

                <TypographySpace>
                    Caps, her skal det være ca. 12-13 cm i bredde og max. 5-6 cm i højden. I nakken
                    på en cap ca. 6-7 cm i bredde og ca. 2-3 cm i højde.
                </TypographySpace>

                <TypographySpace>
                    Et ryglogo på ca. 27-30 cm i bredde og tilsvarende højde skal helst ikke på for
                    tyndt et materiale.
                </TypographySpace>

                <TypographySpace>
                    T-shirts, her skal de ikke være for tynde, en god vægt ville være min.
                    200gr./Heavy.
                </TypographySpace>
            </NewSection>
        </Box>
    );
};

export default Materiale;
