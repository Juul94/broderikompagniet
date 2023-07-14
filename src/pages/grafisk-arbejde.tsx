import {
    Box,
    Typography,
    Grid,
    Step,
    StepLabel,
    Stepper,
    StepContent,
    Button,
} from '@mui/material';
import { NewSection, SectionHeading } from 'src/styles/styledDiv';
import { useState } from 'react';
import processSteps from '../data/processSteps';

const GrafiskArbejde = () => {
    const [activeStep, setActiveStep] = useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    return (
        <Box>
            <SectionHeading>Grafisk arbejde</SectionHeading>

            <NewSection>
                <Box
                    sx={{
                        width: '100%',
                    }}>
                    <Stepper activeStep={activeStep} orientation='vertical'>
                        {processSteps.map((step, index) => (
                            <Step
                                key={step.label}
                                sx={{
                                    mb: 2,
                                }}>
                                <StepLabel
                                    sx={{
                                        '& .MuiStepLabel-label': {
                                            fontWeight: 'bold',
                                            fontSize: '18px',
                                        },
                                    }}>
                                    {step.label}
                                </StepLabel>

                                <StepContent
                                    sx={{
                                        borderLeftWidth: '4px',
                                        borderLeftStyle: 'solid',
                                        borderLeftColor: 'primary.main',
                                        pl: 2,
                                    }}>
                                    <Typography
                                        sx={{
                                            mb: 2,
                                        }}>
                                        {step.description}
                                    </Typography>

                                    <Grid container spacing={2} alignItems='center'>
                                        <Grid item xs={12} sm={5}>
                                            <img
                                                src={step.image}
                                                alt={`Step ${index + 1}`}
                                                style={{
                                                    maxWidth: '100%',
                                                    height: 'auto',
                                                }}
                                            />
                                        </Grid>

                                        <Grid item xs={12} sm={7}>
                                            <Box
                                                sx={{
                                                    '.MuiButtonBase-root': {
                                                        p: 0,
                                                    },
                                                }}>
                                                <Button
                                                    variant='contained'
                                                    disabled={activeStep === 0}
                                                    onClick={handleBack}
                                                    sx={{ mr: 1, color: '#ffffff' }}>
                                                    Forrige
                                                </Button>

                                                <Button
                                                    variant='contained'
                                                    disabled={
                                                        activeStep === processSteps.length - 1
                                                    }
                                                    onClick={handleNext}
                                                    sx={{
                                                        color: '#ffffff',
                                                    }}>
                                                    Næste
                                                </Button>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </StepContent>
                            </Step>
                        ))}
                    </Stepper>
                </Box>
            </NewSection>
        </Box>
    );
};

export default GrafiskArbejde;
