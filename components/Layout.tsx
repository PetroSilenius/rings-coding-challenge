import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Header from 'components/Header';
import DeckSearch from 'components/DeckSearch';

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
        <DeckSearch />

        {children}
      </Box>
    </Container>
  );
};

export default Layout;
