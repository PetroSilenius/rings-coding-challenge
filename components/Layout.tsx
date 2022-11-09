import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Header from 'components/Header';

const Layout = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          my: 4,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'left',
        }}>
        <Header />
        {children}
      </Box>
    </Container>
  );
};

export default Layout;
