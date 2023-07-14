import { Box, Typography } from '@mui/material';
import { TypographySpace, NewSection, SectionHeading } from '../styles/styledDiv';
import TabbedSections from 'src/components/tabSections';

const Services = () => {
    const sections = ['Info', 'Priser', 'Levering', 'Materiale'];

    return (
        <Box>
            <SectionHeading>Services</SectionHeading>

            <TabbedSections sections={sections}>
                <NewSection>
                    <Typography variant='h6'>Info</Typography>

                    <TypographySpace>
                        Mange firmaer tilbyder et stort varesortiment med utallige produkter, det
                        gør vi ikke!
                    </TypographySpace>

                    <TypographySpace>
                        Typisk så kommer kunden selv med den vare der skal broderes på.
                    </TypographySpace>

                    <TypographySpace>
                        Skulle der være behov for arbejdstøj, skjorter, caps eller lignende, så
                        henviser vi gerne til en af vores samarbejdspartnere, og her hjælper vi
                        gerne med at etablere kontakt.
                    </TypographySpace>

                    <TypographySpace>
                        Vi koncentrer os om det vi er gode til, broderi direkte på en vare, samt
                        badges, og grafisk arbejde.
                    </TypographySpace>

                    <TypographySpace
                        sx={{
                            textDecoration: 'underline',
                        }}>
                        Vi trykker IKKE.
                    </TypographySpace>
                </NewSection>

                <NewSection>
                    <Typography variant='h6'>Priser</Typography>

                    <TypographySpace>
                        Prisen pr. broderi varierer i forhold til antal, størrelse samt antal sting,
                        samt antal farver (vi klarer op til 15 forskellige farver i samme broderi).
                    </TypographySpace>

                    <TypographySpace>
                        Det programkort vi laver første gang De bestiller, er et engangsbeløb.
                    </TypographySpace>

                    <TypographySpace>
                        Kontakt os for et konkret pristilbud på netop Deres ordre. Vi modtager gerne
                        Deres materiale via e-mail eller fax.
                    </TypographySpace>

                    <TypographySpace
                        sx={{
                            fontWeight: 'bold',
                        }}>
                        Broderi holder hele tøjets livstid, og ser samtidigt elegant ud.
                    </TypographySpace>

                    <TypographySpace>
                        Det tråd vi bruger er selvfølgelig Øko-Tex godkendt.
                    </TypographySpace>
                </NewSection>

                <NewSection>
                    <Typography variant='h6'>Levering</Typography>

                    <TypographySpace>Levering sker ab lager/ufranko fra Allerød.</TypographySpace>

                    <TypographySpace>
                        Vi leverer hurtigt. Det betyder at vi normalt kan levere indenfor 4 til 6
                        arbejdsdage fra godkendelse af broderiprøve. I enkelte tilfælde i løbet af
                        et par dage, hvis det virkelig haster.
                    </TypographySpace>

                    <TypographySpace>
                        Vi lægger meget vægt på at overholde vores kunders deadline ved levering.
                    </TypographySpace>

                    <TypographySpace>
                        Vi sender varer med DPD/Pakketrans, og de leverer fra dag til dag.
                    </TypographySpace>

                    <TypographySpace>
                        Vore betalingsbetingelser for firmaer og institutioner er 8 dage netto.
                    </TypographySpace>

                    <TypographySpace>
                        Alle priser er ekskl. moms som p.t. udgør 25 % samt fragt.
                    </TypographySpace>
                </NewSection>

                <NewSection>
                    <Typography variant='h6'>Materiale at brodere på</Typography>

                    <TypographySpace>Levering sker ab lager/ufranko fra Allerød.</TypographySpace>

                    <TypographySpace
                        sx={{
                            fontWeight: 'bold',
                        }}>
                        Næsten alle materialer kan der broderes på, lige fra dåbskjoler - håndklæder
                        - tasker - fleece trøjer m.m.
                    </TypographySpace>

                    <TypographySpace>
                        Små bogstaver er ikke altid egnet til et flot broderi. Vi anbefaler minimum
                        størrelse på små bogstaver er 4-5 mm i højden, herved får man det bedste
                        resultat.
                    </TypographySpace>

                    <TypographySpace>
                        Store logoer på ca. 30 x 30 cm egner sig ikke så godt til tynde t-shirts,
                        her er et tryk en bedre løsning.
                    </TypographySpace>

                    <TypographySpace>
                        Størrelsen på et broderi kan betyde meget for et godt udseende, her er et
                        par anbefalinger:
                    </TypographySpace>

                    <TypographySpace>
                        Et brystlogo gør sig flot ved max. at være ca. 12-13 cm i bredde og max. 5-6
                        cm i højde.
                    </TypographySpace>

                    <TypographySpace>
                        På fronten af caps ca. 12-13 cm i bredde og ca. 5-6 cm i højde, i nakken ca.
                        6-7 cm i bredde.
                    </TypographySpace>
                </NewSection>
            </TabbedSections>
        </Box>
    );
};

export default Services;
