import { useRouter } from 'next/router';
import Image from 'next/image';

import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

const CardModal = ({ cards }: { cards: Card[] }) => {
  const router = useRouter();
  const { deckId, cardId } = router.query;
  console.log(deckId, cardId);

  const card = cards.find((card) => card.code === cardId);

  const onClose = () => {
    router.push(`/${deckId}`, undefined, { shallow: true });
  };

  return (
    <Modal
      open={Boolean(cardId)}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description">
      <Box
        sx={{
          position: 'absolute',
          top: '30%',
          left: '5vw',
          width: '80vw',
          transform: 'translate(5vw, -30%)',
          bgcolor: 'background.paper',
          border: '2px solid #000',
          boxShadow: 24,
          p: 4,
        }}>
        <Box>
          <Typography component="h2" variant="h4" sx={{ mb: 2 }}>
            {card?.name}
          </Typography>

          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={3} lg={4}>
              <Typography variant="h6" component="h3">
                {'Hero card'}
              </Typography>
              <Image
                src={`https://ringsdb.com/bundles/cards/${card?.code}.png`}
                priority
                width={200}
                height={250}
                alt={card?.name ?? ''}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={9} lg={8}>
              <Typography variant="h6" component="h3">
                {'Hero info'}
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Modal>
  );
};

export default CardModal;
