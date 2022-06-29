import React from 'react'
import Card from '@mui/material/Card';
import { Link } from 'react-router-dom'
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Container, Grid } from '@mui/material';
import orgEventos from '../../assets/orgEventos.png';

const Cursos = () => {
  return (
    <>
    <Container>
    <h1>Nuestros Cursos</h1>
        <Grid container>
        <Grid md={4}>
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="Organizacion de eventos"
        height="140"
        image={orgEventos}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Organización de Eventos
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Te gustaría aprender a organizar, producir y coordinar EVENTOS como profesional? Éntonces esta es tu OPORTUNIDAD ¡inscribite!
        </Typography>
      </CardContent>
      <CardActions>
        <Link to='organizacioneventos' >
            <Button size="small">Inscribite</Button>
        </Link>
      </CardActions>
    </Card>
            </Grid>
            <Grid md={4}>
                <h1>Hola</h1>
            </Grid>
            <Grid md={4}>
                <h1>Hola</h1>
            </Grid>
            <Grid md={4}>
                <h1>Hola</h1>
            </Grid>
            <Grid md={4}>
                <h1>Hola</h1>
            </Grid>
        </Grid>
           
        
    </Container>
    </>
    
  )
}

export default Cursos