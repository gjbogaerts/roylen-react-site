import React from 'react';
import '../App.css';

import { Link } from 'react-router-dom';
const Privacy = () => {
  return (
    <div className="landingDiv">
      <h1>Je privacy is heilig</h1>

      <p>
        Je locatie is alleen maar nodig om vast te leggen welke advertenties
        voor jou het meest van belang zijn. We filteren op afstand. Deze
        gegevens, en alle andere gegevens die we over jou verzamelen, worden
        enkel en alleen gebruikt om de app goed te laten functioneren. Wij
        hebben verder geen enkel financieel belang bij deze gegevens; je kunt de
        app anoniem gebruiken om door de advertenties te bladeren, maar als je
        wat van de andere functies wil proberen, moet je een account aanmaken.
      </p>
      <p>
        We hoeven je naam niet te weten om een account te maken; het enige wat
        je van je nodig hebben, is een email adres. Dat wordt verwijderd als je
        je account verwijdert, en wordt voor geen enkel ander doel gebruikt dan
        je af en toe te kunnen berichten als een andere gebruiker contact met je
        zoekt of als er belangrijke systeem-informatie is. We delen geen
        gegevens met externe partijen.
      </p>
      <p>
        De Roylen app draait op je eigen mobiele telefoon, maar moet verbinding
        maken met het internet om te kunnen functioneren. Je data worden
        opgeslagen in een beveiligde database waar alleen de makers van Roylen
        bij kunnen komen.
      </p>
      <p>
        Wil je meer weten over onze privacy policy, of wil je weten welke
        informatie we van je hebben opgeslagen, dan kun je via de app contact
        met ons opnemen.
      </p>
      <p>
        <Link to="/">Terug naar de homepage</Link>
      </p>
    </div>
  );
};

export default Privacy;
