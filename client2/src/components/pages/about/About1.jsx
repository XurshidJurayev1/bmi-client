import { Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const About1 = () => {

  const data = [
    {
      img: 'https://preview.colorlib.com/theme/webuni/img/categories/1.jpg',
      title: 'it development',
      text: 'Lorem ipsim dolor sit amet, consecletur',
      count: '120',
    },
    {
      img: 'https://preview.colorlib.com/theme/webuni/img/categories/2.jpg',
      title: 'web design',
      text: 'Lorem ipsim dolor sit amet, consecletur',
      count: '55',
    },
    {
      img: 'https://preview.colorlib.com/theme/webuni/img/categories/3.jpg',
      title: 'illistration & drawing',
      text: 'Lorem ipsim dolor sit amet, consecletur',
      count: '70',
    },
    {
      img: 'https://preview.colorlib.com/theme/webuni/img/categories/4.jpg',
      title: 'social media',
      text: 'Lorem ipsim dolor sit amet, consecletur',
      count: '100',
    },
    {
      img: 'https://preview.colorlib.com/theme/webuni/img/categories/5.jpg',
      title: 'photoshop',
      text: 'Lorem ipsim dolor sit amet, consecletur',
      count: '20',
    },
    {
      img: 'https://preview.colorlib.com/theme/webuni/img/categories/6.jpg',
      title: 'cryptocurrencies',
      text: 'Lorem ipsim dolor sit amet, consecletur',
      count: '25',
    },
  ];


  return (
    <Container maxWidth="lg" sx={{
      mt: '90px', mb: '60px',
    }}>
      <Typography variant="h3" sx={{ textAlign: 'center', mb: '20px' }}>
        Our Course Categories
      </Typography>
      <Typography variant="body1" sx={{ textAlign: 'center', mb: 7 }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris scelerisque, at
        rutrum nulla dictum. Ut ac ligula sapien. Suspendisse cursus faucibus finibus.
      </Typography>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {data.map((item, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <Card sx={{ maxWidth: 345 }}>
              <Link to="/courses">
                <CardMedia
                  component="img"
                  height="140"
                  image={item.img}
                  alt={item.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div"
                              sx={{ textTransform: 'capitalize' }}>{item.title}</Typography>
                  <Typography variant="body2" color="text.secondary">{item.text}</Typography>
                </CardContent>
                <CardActions>
                  <Button variant="text">{item.count} - courses</Button>
                </CardActions>
              </Link>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default About1;