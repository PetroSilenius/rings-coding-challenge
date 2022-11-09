import Typography from '@mui/material/Typography';

const Header = () => {
  return (
    <header>
      <Typography component="h1" variant="h3" sx={{ fontWeight: 'bold' }}>
        A nice title for the app
      </Typography>
    </header>
  );
};

export default Header;
