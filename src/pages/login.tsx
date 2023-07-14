import { Box, Button, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

interface LoginPageProps {
    onLogin: () => void;
}

interface LoginFormValues {
    username: string;
    password: string;
}

const LoginPage: React.FC<LoginPageProps> = ({ onLogin }) => {
    const [loginError, setLoginError] = useState('');

    const handleLogin = (values: LoginFormValues) => {
        if (values.username === 'admin' && values.password === 'broderi') {
            onLogin();
        } else {
            setLoginError('Invalid username or password');
        }
    };

    const initialValues = {
        username: '',
        password: '',
    };

    const validationSchema = Yup.object({
        username: Yup.string().required('Username is required'),
        password: Yup.string().required('Password is required'),
    });

    return (
        <Box
            sx={{
                width: '300px',
                margin: '50px auto',
            }}>
            <Typography variant='h5' gutterBottom>
                Login
            </Typography>

            <Box
                sx={{
                    mt: 4,
                    '.MuiInputBase-root': {
                        width: '100%',
                    },
                    '.MuiFormControl-root': {
                        display: 'block',
                    },
                    '.MuiInputBase-input': {
                        py: '8.5px',
                        px: '14px',
                    },
                }}>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleLogin}>
                    {({ errors, touched }) => (
                        <Form>
                            <Field
                                name='username'
                                as={TextField}
                                label='Username'
                                error={touched.username && !!errors.username}
                                helperText={touched.username && errors.username}
                                sx={{
                                    display: 'block',
                                    mb: 2,
                                }}
                                size='small'
                            />

                            <Field
                                name='password'
                                as={TextField}
                                label='Password'
                                type='password'
                                error={touched.password && !!errors.password}
                                helperText={touched.password && errors.password}
                                sx={{
                                    display: 'block',
                                    mb: 2,
                                }}
                                size='small'
                            />

                            {loginError && (
                                <Typography
                                    variant='body2'
                                    color='error'
                                    sx={{ marginBottom: '16px' }}>
                                    {loginError}
                                </Typography>
                            )}

                            <Button
                                variant='contained'
                                type='submit'
                                sx={{ marginBottom: '16px', color: '#ffffff' }}>
                                Sign in
                            </Button>
                        </Form>
                    )}
                </Formik>
            </Box>
        </Box>
    );
};

export default LoginPage;
