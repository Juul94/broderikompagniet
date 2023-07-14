import { styled } from '@mui/system';
import Typography from '@mui/material/Typography';

/********** CONTAINERS **********/

// Parent Containers

export const ContainerRelative = styled('div')({
    position: 'relative',
    marginTop: '20px',
});

export const ContainerBG = styled('div')(({ theme }) => ({
    zIndex: '1',
    width: '100%',
    backgroundColor: theme.palette.background.default,
}));

export const ContainerHalf = styled('div')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    '& > *': {
        flex: '1 1 50%',
    },
    [theme.breakpoints.down('md')]: {
        display: 'block',
    },
}));

// Child Containers

export const InnerContainer = styled('div')(({ theme }) => ({
    padding: '50px 0 100px 0',
    backgroundColor: theme.palette.background.default,
}));

export const InnerContainerMaxWidth = styled('div')({
    zIndex: '1',
    width: '100%',
    margin: '0 auto',
    maxWidth: '1080px',
});

export const InnerContainerNoPadding = styled('div')({
    zIndex: '1',
    width: '100%',
});

// Content Containers

export const Content = styled('div')(({ theme }) => ({
    maxWidth: '1080px',
    margin: '0 auto',
    padding: '24px',
    [theme.breakpoints.down('sm')]: {
        padding: '16px',
    },
    '.MuiFormControl-root': {
        marginBottom: '16px',
    },
}));

export const NewSection = styled('div')({
    marginTop: '16px',
});

/********** FORMS **********/

export const FormContainer = styled('div')(({ theme }) => ({
    maxWidth: '50%',
    [theme.breakpoints.down('md')]: {
        maxWidth: '100%',
    },
}));

export const FileUploadLabel = styled('div')({
    color: '#333333',
    fontWeight: 'bold',
    marginBottom: '0.75rem',
});

/********** FOOTER **********/

export const FooterContent = styled('div')({
    display: 'flex',
    flexDirection: 'row',
    gap: '25px',
    justifyContent: 'space-between',
});

/********** TYPOGRAPHY **********/

export const SectionHeading = styled(Typography)(({ theme }) => ({
    fontSize: '1.5rem',
    color: theme.palette.primary.main,
    marginBottom: '16px',
    fontWeight: 500,
}));

export const TypographySpace = styled(Typography)({
    marginBottom: '16px',
});

export const TypographySpaceHalf = styled(Typography)({
    marginBottom: '8px',
});

/********** IMAGES **********/

export const LogoImage = styled('img')({
    width: '40px',
});

export const FullImage = styled('img')({
    width: '200px',
});
