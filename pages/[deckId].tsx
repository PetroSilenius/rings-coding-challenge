import { GetServerSideProps } from 'next';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import HeroCard from 'components/HeroCard';
import CardModal from 'components/CardModal';

export default function DeckPage({ deck, cards }: { deck: Deck; cards: Card[] }) {
  return (
    <>
      <Typography component="h2" variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
        Here are your heroes
      </Typography>
      <Grid container spacing={2}>
        {cards.map((card) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={card.code}>
            <HeroCard card={card} />
          </Grid>
        ))}
      </Grid>
      <CardModal cards={cards} />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const deckResponse = await fetch(`${process.env.APIURL}/decklist/${params?.deckId}.json`);
  const deck: Deck = await deckResponse.json();

  const heroes = Object.keys(deck.heroes);

  const cards = await Promise.all(
    heroes.map(async (heroId) => {
      const cardResponse = await fetch(`${process.env.APIURL}/card/${heroId}.json`);
      const card: Card = await cardResponse.json();
      return card;
    })
  );

  return {
    props: {
      deck,
      cards,
    },
  };
};
