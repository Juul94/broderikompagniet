import {
    Box,
    Button,
    MenuItem,
    Select,
    SelectChangeEvent,
    TextField,
    Typography,
} from '@mui/material';
import { useResponsiveQueries } from '@utilities/mediaQueries';
import { NewSection, SectionHeading, TypographySpace } from 'src/styles/styledDiv';
import { useFormik, FormikHelpers } from 'formik';
import * as yup from 'yup';
import { useState } from 'react';
import { countryCodes } from 'src/utils/countryCodes';
import getPhoneNumberLabel from 'src/utils/getPhoneLabel';

interface KontaktFormular {
    fuldeNavn: string;
    firma: string;
    adresse: string;
    by: string;
    postnr: string;
    tlf: string;
    fax: string;
    email: string;
    besked: string;
}

const Kontakt = () => {
    const { isTablet } = useResponsiveQueries();

    const [selectedCountryCode, setSelectedCountryCode] = useState('+45');

    const formik = useFormik<KontaktFormular>({
        initialValues: {
            fuldeNavn: '',
            firma: '',
            adresse: '',
            by: '',
            postnr: '',
            tlf: '',
            fax: '',
            email: '',
            besked: '',
        },
        validationSchema: yup.object({
            fuldeNavn: yup.string().required('For/efter-navn er påkrævet'),
            email: yup.string().email('Ugyldig email-adresse').required('Email er påkrævet'),
            besked: yup.string().required('Besked er påkrævet'),
        }),
        onSubmit: async (
            values: KontaktFormular,
            helpers: FormikHelpers<KontaktFormular>,
        ): Promise<void> => {
            // console.log(helpers);
            // console.log(values);
            // helpers.resetForm({
            //     values: formik.initialValues,
            // });
        },
    });

    const handleCountryCodeChange = (event: SelectChangeEvent<string>) => {
        formik.setFieldValue('tlf', '');
        setSelectedCountryCode(event.target.value);
    };

    const formatPhoneNumber = (phoneNumber: string, countryCode: string): string => {
        // Remove all non-digit characters from the phone number
        const digits = phoneNumber.replace(/\D/g, '');

        // Retrieve the example phone number for the selected country code
        const examplePhoneNumber = getPhoneNumberLabel(countryCode);

        let formattedPhoneNumber = '';
        let digitIndex = 0;

        // Iterate over the example phone number and insert digits from the input
        for (let i = 0; i < examplePhoneNumber.length; i++) {
            const char = examplePhoneNumber.charAt(i);

            if (/\d/.test(char)) {
                // If the character is a digit, insert the corresponding digit from the input
                if (digitIndex < digits.length) {
                    formattedPhoneNumber += digits[digitIndex++];
                } else {
                    break; // Stop iterating if there are no more digits to insert
                }
            } else {
                // If the character is not a digit, insert it as is
                if (digits[digitIndex] !== ' ') {
                    formattedPhoneNumber += char;
                } else {
                    digitIndex++; // Skip the space from the input when deleting
                }
            }
        }

        return formattedPhoneNumber;
    };

    return (
        <Box>
            <SectionHeading>Kontakt os</SectionHeading>

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
                            flex: '0 0 50%',
                            mr: 2,
                        }),
                    }}>
                    <form onSubmit={formik.handleSubmit}>
                        <TextField
                            fullWidth
                            id='fuldeNavn'
                            name='fuldeNavn'
                            label='Fornavn og efternavn'
                            value={formik.values.fuldeNavn}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.fuldeNavn && Boolean(formik.errors.fuldeNavn)}
                            helperText={formik.touched.fuldeNavn && formik.errors.fuldeNavn}
                            size='small'
                        />

                        <TextField
                            fullWidth
                            id='firma'
                            name='firma'
                            label='Firma'
                            value={formik.values.firma}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.firma && Boolean(formik.errors.firma)}
                            helperText={formik.touched.firma && formik.errors.firma}
                            size='small'
                        />

                        <TextField
                            fullWidth
                            id='adresse'
                            name='adresse'
                            label='Adresse'
                            value={formik.values.adresse}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.adresse && Boolean(formik.errors.adresse)}
                            helperText={formik.touched.adresse && formik.errors.adresse}
                            size='small'
                        />
                        <TextField
                            fullWidth
                            id='by'
                            name='by'
                            label='By'
                            value={formik.values.by}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.by && Boolean(formik.errors.by)}
                            helperText={formik.touched.by && formik.errors.by}
                            size='small'
                        />

                        <TextField
                            fullWidth
                            id='postnr'
                            name='postnr'
                            label='Post nr.'
                            value={formik.values.postnr}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.postnr && Boolean(formik.errors.postnr)}
                            helperText={formik.touched.postnr && formik.errors.postnr}
                            size='small'
                        />

                        <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1 }}>
                            <Select
                                id='countryCode'
                                name='countryCode'
                                value={selectedCountryCode}
                                onChange={handleCountryCodeChange}
                                size='small'>
                                {countryCodes.map((code) => (
                                    <MenuItem key={code.value} value={code.value}>
                                        {code.label}
                                    </MenuItem>
                                ))}
                            </Select>

                            <TextField
                                fullWidth
                                id='tlf'
                                name='tlf'
                                label='Tlf.'
                                placeholder={getPhoneNumberLabel(selectedCountryCode)}
                                value={formik.values.tlf}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.tlf && Boolean(formik.errors.tlf)}
                                onKeyUp={(event: React.KeyboardEvent<HTMLInputElement>) => {
                                    if (event.key !== 'Backspace' && event.key !== 'Delete') {
                                        formik.setFieldValue(
                                            'tlf',
                                            formatPhoneNumber(
                                                formik.values.tlf,
                                                selectedCountryCode,
                                            ),
                                        );
                                    }
                                }}
                                // helperText={formik.touched.tlf && formik.errors.tlf}
                                helperText={
                                    formik.touched.tlf &&
                                    formik.errors.tlf &&
                                    getPhoneNumberLabel(selectedCountryCode)
                                }
                                size='small'
                            />
                        </Box>

                        <TextField
                            fullWidth
                            id='fax'
                            name='fax'
                            label='Fax'
                            value={formik.values.fax}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.fax && Boolean(formik.errors.fax)}
                            helperText={formik.touched.fax && formik.errors.fax}
                            size='small'
                        />

                        <TextField
                            fullWidth
                            id='email'
                            name='email'
                            label='Email'
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.email && Boolean(formik.errors.email)}
                            helperText={formik.touched.email && formik.errors.email}
                            size='small'
                        />

                        <TextField
                            fullWidth
                            id='besked'
                            name='besked'
                            label='Besked'
                            value={formik.values.besked}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.besked && Boolean(formik.errors.besked)}
                            helperText={formik.touched.besked && formik.errors.besked}
                            size='small'
                            multiline
                            rows={4}
                        />

                        <Button
                            variant='contained'
                            type='submit'
                            disabled={formik.isSubmitting}
                            sx={{ mt: 2, color: '#ffffff' }}>
                            Send
                        </Button>
                    </form>
                </NewSection>

                <NewSection
                    sx={{
                        ...(isTablet
                            ? {
                                  mt: 5,
                              }
                            : {
                                  flex: '0 0 50%',
                              }),
                    }}>
                    <Typography
                        variant='h6'
                        sx={{
                            fontWeight: 'bold',
                            color: 'primary.main',
                        }}>
                        BRODERI KOMPAGNIET A/S
                    </Typography>
                    <Typography>Hejrevang 21 F</Typography>
                    <Typography>3450 Allerød</Typography>

                    <TypographySpace>Tlf: 4871 1299</TypographySpace>

                    <TypographySpace>hn@broderikompagniet.dk</TypographySpace>
                </NewSection>
            </Box>
        </Box>
    );
};

export default Kontakt;
