import { FormEvent } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { useRouter } from 'next/router';

const DeckSearch = () => {
  const router = useRouter();

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const deckId = e.currentTarget.deckId.value;
    router.push(`/${deckId}`);
  };

  return (
    <Box sx={{ mt: 4, mb: 8 }}>
      <Typography>Search for a decklist here</Typography>
      <form onSubmit={onSubmit}>
        <TextField placeholder="Type in the deck ID" name="deckId" sx={{ mt: 2, width: 300 }} />
      </form>
    </Box>
  );
};

export default DeckSearch;
