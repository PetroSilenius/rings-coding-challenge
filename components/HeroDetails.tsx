import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

interface InformationField {
  name: string;
  property_name: keyof Card;
}

const HeroDetails = ({ card }: { card: Card }) => {
  const heroInformationFields: InformationField[] = [
    {
      name: 'Type',
      property_name: 'type_name',
    },
    {
      name: 'Traits',
      property_name: 'traits',
    },

    {
      name: 'Attack',
      property_name: 'attack',
    },
    {
      name: 'Health',
      property_name: 'health',
    },
    {
      name: 'Defense',
      property_name: 'defense',
    },
    {
      name: 'Willpower',
      property_name: 'willpower',
    },
  ];

  return (
    <Grid container spacing={2}>
      {heroInformationFields.map((field) => (
        <>
          <Grid item xs={12} sm={4} key={field.name}>
            <Typography>{field.name}</Typography>
          </Grid>
          <Grid item xs={12} sm={8}>
            <Typography>{card[field.property_name]}</Typography>
          </Grid>
        </>
      ))}
    </Grid>
  );
};

export default HeroDetails;
