import {
    Box,
    Button,
    Divider,
    FormControl,
    FormControlLabel,
    FormHelperText,
    FormLabel,
    Input,
    InputLabel,
    MenuItem,
    Radio,
    RadioGroup,
    Select,
    SelectChangeEvent,
    TextField,
    Typography,
} from '@mui/material';
import * as yup from 'yup';
import { useFormik, FormikHelpers } from 'formik';
import { FormContainer, SectionHeading } from 'src/styles/styledDiv';
import materiale from '../data/orderFormular';
import { useEffect, useRef, useState } from 'react';
import ConditionValue from 'src/components/displayConditionValue';

interface OrdreFormular {
    forespoergsel: '';
    navn: string;
    email: string;
    firma: string;
    motiv: string;
    antalFarver: number | null;
    enheder: number | null;
    farverne: string;
    breddeElHoejde: number | null;
    materiale: string;
    materialeValue: string;
    placering: string;
    andet: string;
    bemaerkninger: string;
    files: FileList | null;
}

const OrdreFormular = () => {
    const { bloedt, fleeceOl, haardt, placering } = materiale;

    const [resetKey, setResetKey] = useState(0);
    const fileUploadRef = useRef<HTMLInputElement>(null);

    const handleFileReset = () => {
        formik.setFieldValue('files', null);
        setResetKey((prevKey) => prevKey + 1);
    };

    const formik = useFormik<OrdreFormular>({
        initialValues: {
            forespoergsel: '',
            navn: '',
            email: '',
            firma: '',
            motiv: '',
            antalFarver: null,
            enheder: null,
            farverne: '',
            breddeElHoejde: null,
            materiale: '',
            materialeValue: '',
            placering: '',
            andet: '',
            bemaerkninger: '',
            files: null,
        },
        validationSchema: yup.object({
            forespoergsel: yup.string().required('Forespørgel er påkrævet'),
            navn: yup.string().required('Navn er påkrævet'),
            email: yup.string().email('Ugyldig email-adresse').required('Email er påkrævet'),
            firma: yup.string().required('Firma er påkrævet'),
            motiv: yup.string().required('Motiv er påkrævet'),
            antalFarver: yup
                .number()
                .required('Antal farver er påkrævet')
                .typeError('Antal farver skal være et tal'),
            enheder: yup
                .number()
                .required('Antal enheder er påkrævet')
                .typeError('Antal enheder skal være et tal'),
            farverne: yup.string().required('Farverne er påkrævet'),
            breddeElHoejde: yup
                .number()
                .required('Bredde el. højde er påkrævet')
                .typeError('Bredde el. højde skal være et tal i cm'),
            materiale: yup.string().required('Materiale er påkrævet'),
            materialeValue: yup.string().required('Materiale er påkrævet'),
            placering: yup.string().required('Placering er påkrævet'),
            files: yup
                .mixed()
                .test('fileType', 'Only JPEG, PNG, or PDF files are allowed', (value) => {
                    if (!value) {
                        return true; // No files selected, so it's valid
                    }
                    const fileTypes = ['image/jpeg', 'image/png', 'application/pdf'];
                    for (let i = 0; i < value.length; i++) {
                        if (!fileTypes.includes(value[i].type)) {
                            return false; // Invalid file type
                        }
                    }
                    return true;
                }),
        }),
        onSubmit: async (
            values: OrdreFormular,
            helpers: FormikHelpers<OrdreFormular>,
        ): Promise<void> => {
            // console.log(helpers);
            // console.log(values);

            // const files = values.files;

            handleFileReset();

            helpers.resetForm({
                values: formik.initialValues,
            });
        },
    });

    const handleMaterialeValue = (event: SelectChangeEvent<string>) => {
        formik.setFieldValue('materialeValue', event.target.value as string);
    };

    useEffect(() => {
        formik.setFieldValue('materialeValue', '');

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [formik.values.materiale]);

    return (
        <Box>
            <SectionHeading>Ordre formular</SectionHeading>

            <FormContainer>
                <form onSubmit={formik.handleSubmit}>
                    <FormControl
                        sx={{
                            '.Mui-focused': {
                                color: 'text.primary !important',
                            },
                        }}
                        error={formik.touched.forespoergsel && !formik.values.forespoergsel}>
                        <FormLabel
                            id='forespoergselLabel'
                            sx={{
                                color: 'text.primary',
                                fontWeight: 500,
                            }}>
                            Forespørgsel
                        </FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby='forespoergselLabel'
                            name='forespoergsel'
                            value={formik.values.forespoergsel}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}>
                            <FormControlLabel
                                value='forespoergsel'
                                control={<Radio />}
                                label='Forespørgsel'
                            />
                            <FormControlLabel value='ordre' control={<Radio />} label='Ordre' />
                        </RadioGroup>

                        {formik.touched.forespoergsel && formik.errors.forespoergsel && (
                            <FormHelperText
                                sx={{
                                    color: 'error.main',
                                }}>
                                {formik.errors.forespoergsel}
                            </FormHelperText>
                        )}
                    </FormControl>

                    <Divider sx={{ mb: 3 }} />

                    <TextField
                        fullWidth
                        id='navn'
                        name='navn'
                        label='Navn'
                        value={formik.values.navn}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.navn && Boolean(formik.errors.navn)}
                        helperText={formik.touched.navn && formik.errors.navn}
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
                        id='firma'
                        name='firma'
                        label='Firma navn'
                        value={formik.values.firma}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.firma && Boolean(formik.errors.firma)}
                        helperText={formik.touched.firma && formik.errors.firma}
                        size='small'
                    />

                    <TextField
                        fullWidth
                        id='motiv'
                        name='motiv'
                        label='Motiv navn'
                        value={formik.values.motiv}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.motiv && Boolean(formik.errors.motiv)}
                        helperText={formik.touched.motiv && formik.errors.motiv}
                        size='small'
                    />

                    <Divider sx={{ mt: 1.5, mb: 3 }} />

                    <TextField
                        fullWidth
                        id='antalFarver'
                        name='antalFarver'
                        label='Antal farver'
                        value={formik.values.antalFarver ?? ''}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.antalFarver && Boolean(formik.errors.antalFarver)}
                        helperText={formik.touched.antalFarver && formik.errors.antalFarver}
                        size='small'
                    />

                    <TextField
                        fullWidth
                        id='enheder'
                        name='enheder'
                        label='Antal enheder'
                        value={formik.values.enheder ?? ''}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.enheder && Boolean(formik.errors.enheder)}
                        helperText={formik.touched.enheder && formik.errors.enheder}
                        size='small'
                    />

                    <TextField
                        fullWidth
                        id='farverne'
                        name='farverne'
                        label='Farverne er'
                        value={formik.values.farverne}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.farverne && Boolean(formik.errors.farverne)}
                        helperText={formik.touched.farverne && formik.errors.farverne}
                        size='small'
                    />

                    <Typography
                        sx={{
                            mb: 3,
                        }}>
                        <b>Størrelse:</b> Udfyld kun bredde eller højde, motiv eller tilpasset.
                    </Typography>

                    <TextField
                        fullWidth
                        id='breddeElHoejde'
                        name='breddeElHoejde'
                        label='Bredde el. højde (I cm)'
                        value={formik.values.breddeElHoejde ?? ''}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={
                            formik.touched.breddeElHoejde && Boolean(formik.errors.breddeElHoejde)
                        }
                        helperText={formik.touched.breddeElHoejde && formik.errors.breddeElHoejde}
                        size='small'
                    />

                    <Divider sx={{ mt: 1.5, mb: 3 }} />

                    <FormControl
                        sx={{
                            '.Mui-focused': {
                                color: 'text.primary !important',
                            },
                        }}
                        error={formik.touched.materiale && !formik.values.materiale}>
                        <FormLabel
                            id='materialeLabel'
                            sx={{
                                color: 'text.primary',
                                fontWeight: 500,
                            }}>
                            Stof/Materiale
                        </FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby='materialeLabel'
                            name='materiale'
                            value={formik.values.materiale}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}>
                            <FormControlLabel value='haardt' control={<Radio />} label='Hårdt' />
                            <FormControlLabel value='bloedt' control={<Radio />} label='Blødt' />
                            <FormControlLabel
                                value='fleeceOl'
                                control={<Radio />}
                                label='Fleece eller lign.'
                            />
                        </RadioGroup>

                        {formik.touched.materiale && formik.errors.materiale && (
                            <FormHelperText>{formik.errors.materiale}</FormHelperText>
                        )}
                    </FormControl>

                    <ConditionValue
                        conditionFirst={formik.values.materiale}
                        conditionSecond='bloedt'
                        label={{
                            name: 'Blødt',
                            id: 'bloedt-label',
                            errorText: 'Vælg venligst et blødt materiale',
                        }}
                        select={{
                            labelId: 'bloedt-label',
                            id: 'bloedt',
                            name: 'bloedt',
                            value: formik.values.materialeValue,
                        }}
                        action={{
                            onChange: handleMaterialeValue,
                            onBlur: formik.handleBlur,
                            onTouch: formik.touched.materialeValue || false,
                            onError: formik.errors.materialeValue,
                        }}
                        menuItems={bloedt}
                    />

                    <ConditionValue
                        conditionFirst={formik.values.materiale}
                        conditionSecond='haardt'
                        label={{
                            name: 'Hårdt',
                            id: 'haardt-label',
                            errorText: 'Vælg venligst et hårdt materiale',
                        }}
                        select={{
                            labelId: 'haardt-label',
                            id: 'haardt',
                            name: 'haardt',
                            value: formik.values.materialeValue,
                        }}
                        action={{
                            onChange: handleMaterialeValue,
                            onBlur: formik.handleBlur,
                            onTouch: formik.touched.materialeValue || false,
                            onError: formik.errors.materialeValue,
                        }}
                        menuItems={haardt}
                    />

                    <ConditionValue
                        conditionFirst={formik.values.materiale}
                        conditionSecond='fleeceOl'
                        label={{
                            name: 'Fleece eller lign.',
                            id: 'fleeceOl-label',
                            errorText: 'Vælg venligst et materiale',
                        }}
                        select={{
                            labelId: 'fleeceOl-label',
                            id: 'fleeceOl',
                            name: 'fleeceOl',
                            value: formik.values.materialeValue,
                        }}
                        action={{
                            onChange: handleMaterialeValue,
                            onBlur: formik.handleBlur,
                            onTouch: formik.touched.materialeValue || false,
                            onError: formik.errors.materialeValue,
                        }}
                        menuItems={fleeceOl}
                    />

                    <FormControl
                        fullWidth
                        sx={{
                            '.MuiFormLabel-filled, .MuiInputLabel-shrink': {
                                backgroundColor: '#ffffff',
                                px: '5px',
                            },
                        }}>
                        <InputLabel
                            id='placering-label'
                            size='small'
                            sx={{
                                ...(formik.touched.placering &&
                                    formik.errors.placering && {
                                        color: 'error.main',
                                    }),
                            }}>
                            Placering
                        </InputLabel>
                        <Select
                            labelId='placering-label'
                            id='placering'
                            name='placering'
                            value={formik.values.placering}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.placering && Boolean(formik.errors.placering)}
                            size='small'>
                            <MenuItem value=''>Vælg</MenuItem>
                            {placering.map((option) => (
                                <MenuItem key={option} value={option}>
                                    {option}
                                </MenuItem>
                            ))}
                        </Select>

                        {formik.touched.placering && formik.errors.placering && (
                            <Typography
                                variant='caption'
                                color='error'
                                sx={{
                                    ml: 2,
                                    mt: 0.5,
                                }}>
                                {formik.errors.placering}
                            </Typography>
                        )}
                    </FormControl>

                    <TextField
                        fullWidth
                        id='andet'
                        name='andet'
                        label='Andet'
                        value={formik.values.andet}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.andet && Boolean(formik.errors.andet)}
                        helperText={formik.touched.andet && formik.errors.andet}
                        size='small'
                    />

                    <Divider sx={{ mt: 1.5, mb: 3 }} />

                    <TextField
                        fullWidth
                        id='bemaerkninger'
                        name='bemaerkninger'
                        label='Bemærkninger'
                        value={formik.values.bemaerkninger}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.bemaerkninger && Boolean(formik.errors.bemaerkninger)}
                        helperText={formik.touched.bemaerkninger && formik.errors.bemaerkninger}
                        size='small'
                        multiline
                        rows={4}
                    />

                    <InputLabel
                        htmlFor='file-upload'
                        sx={{ color: 'text.primary', fontWeight: 500, mb: 0.75 }}>
                        File Upload
                    </InputLabel>
                    <Input
                        key={resetKey}
                        id='file-upload'
                        type='file'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.files && Boolean(formik.errors.files)}
                        inputProps={{ multiple: true }}
                        ref={fileUploadRef}
                    />
                    <FormHelperText>{formik.touched.files && formik.errors.files}</FormHelperText>

                    <Button
                        variant='contained'
                        type='submit'
                        disabled={formik.isSubmitting}
                        sx={{ mt: 2, color: '#ffffff' }}>
                        Send
                    </Button>
                </form>
            </FormContainer>
        </Box>
    );
};

export default OrdreFormular;
