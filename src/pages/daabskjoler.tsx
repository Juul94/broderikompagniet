import { Box } from '@mui/material';
import { NewSection, SectionHeading, TypographySpaceHalf } from 'src/styles/styledDiv';

const Daabskjoler = () => {
    return (
        <Box>
            <SectionHeading>Dåbskjoler</SectionHeading>

            <NewSection>
                <TypographySpaceHalf>
                    Vi kan også brodere barnets navn i en dåbskjole, vælg mellem 5 forskellige
                    skrift.
                </TypographySpaceHalf>

                <TypographySpaceHalf>
                    At have sit barns navn i dåbskjolen er en gammel dansk skik.
                </TypographySpaceHalf>

                <TypographySpaceHalf>
                    Er der ingen navne i dåbskjolen? Så vær den første til at starte en ny
                    familietradition.
                </TypographySpaceHalf>
            </NewSection>
        </Box>
    );
};

export default Daabskjoler;
