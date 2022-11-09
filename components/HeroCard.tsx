import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

const HeroCard = ({ card }: { card: Card }) => {
  const { query } = useRouter();
  const { deckId } = query;

  const traits = card.traits.split('.').filter(Boolean);

  return (
    <Link href={`/${deckId}?cardId=${card.code}`} shallow>
      <Card
        sx={{ height: '100%', display: 'flex', flexDirection: 'column', textDecoration: 'none' }}>
        <CardMedia>
          <Image
            src={`https://ringsdb.com/bundles/cards/${card.code}.png`}
            priority
            width={300}
            height={400}
            alt="Image title"
          />
        </CardMedia>
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h5" component="h2">
            {card.name}
          </Typography>
          <Stack direction="row" spacing={1}>
            {traits.map((trait) => (
              <Chip label={trait} key={trait} />
            ))}
          </Stack>
        </CardContent>
      </Card>
    </Link>
  );
};

export default HeroCard;
