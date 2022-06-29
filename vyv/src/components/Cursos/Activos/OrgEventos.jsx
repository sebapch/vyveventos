import React from "react";
import { Container, Divider, Grid } from "@mui/material";
import "../Cursos.css";
import Logo from "../../../assets/logo.jpeg";
import Evento from "../../../assets/evento.jpg";
import { Link } from 'react-router-dom';

const OrgEventos = () => {
  return (
    <>
      <Container className="curso-container">
        <div>OrgEventos</div>
        <Grid container>
          <Grid md={12} sx={{ display: "flex", justifyContent: "center" }}>
            <img src={Logo} alt="logo" width="300rem" />
          </Grid>
          <Grid md={12}>
            <h1>Gracias por interesarte en mi Workshop</h1>
            <h2>Taller online en vivo</h2>
            <h3>Organización de Eventos</h3>
            <Divider />
            <label>
              Se realizará el Sábado 25 de junio de 2022 a las 10.00 h (Arg.)
            </label>
          </Grid>
          <Grid md={6}>
            <img src={Evento} alt="evento" />
          </Grid>
          <Grid md={6}>
            <p>
              Los espero para disfrutar de un súper taller mientras disfrutamos
              un rico té juntos, no te olvides de tener el tuyo listo. Es ideal
              para comenzar a recibir y para servirlo en casa lo que genera
              otros climas. Te voy a contar todo lo que necesitás saber y te voy
              a mostrar los elementos que tenés que tener y porqué otros los
              podrían reemplazar.
            </p>
          </Grid>
          <Grid md={12}>
            <h1>
              Una vez que terminamos la explicación les muestro en vivo cómo
              servirlo y tomarlo.{" "}
            </h1>
          </Grid>
          <Grid md={6}>
            <h1>
              Una vez que terminamos la explicación les muestro en vivo cómo
              servirlo y tomarlo.{" "}
            </h1>
          </Grid>
          <Grid md={6}>
            <h1>
              Una vez que terminamos la explicación les muestro en vivo cómo
              servirlo y tomarlo.{" "}
            </h1>
          </Grid>
          <Grid md={12}>
            <h1>Costo del Taller = $ 4.000 </h1>
          </Grid>
          <Grid md={12}>
            <h1>Formas de pago: </h1>
            <h3>Transferencia bancaria: </h3>
            <p>
              Banco Galicia / FERNANDA RAMON BADIA CTA: 4000363-8 382-3 CBU:
              00703824-30004000363838 ALIAS: PLATA.CAMISA.PUEBLO CUIL:
              27-26932221-2
            </p>
            <h3>MercadoPago:</h3>
            <a href='https://mpago.la/23GcZaC' >
                PAGAR
            </a>
            
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default OrgEventos;
