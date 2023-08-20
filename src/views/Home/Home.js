// import { Helmet } from 'react-helmet-async';
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography } from '@mui/material';
import HomeLayout from './HomeLayout';
export default function DashboardAppPage() {
  const theme = useTheme();

  return (
    <>
        <title> Dashboard | Minimal UI </title>
      <HomeLayout />
      <Container maxWidth="xl" style={{marginLeft:'15%'}}>
        <Typography variant="h4" sx={{ mb: 5 }}>
          Hi, Welcome back
        </Typography>

      </Container>
    </>
  );
}
