import React from 'react';
import '../App.css';
import screenshot from '../images/IMG_1455.PNG';
import screenshot1 from '../images/IMG_1456.PNG';
import screenshot2 from '../images/IMG_1457.PNG';
import screenshot3 from '../images/IMG_1458.PNG';
import screenshot4 from '../images/IMG_1459.PNG';
const Home = () => {
  return (
    <div className="landingDiv">
      <h1>Welkom bij Roylen</h1>

      <p>
        Gemaakt uit liefde voor de planeet en zijn inwoners, in het bijzonder
        voor alle jonge ouders die zich vertwijfeld afvragen of hun kind elke
        drie maanden nieuwe kleren en nieuw speelgoed nodig blijft hebben. Voor
        altijd gratis in het basisgebruik, met volledige garantie op privacy van
        jou, als eindgebruiker.
      </p>
      <p>
        Niet bedoeld om zoveel mogelijk clicks te genereren of je zo lang
        mogelijk in deze app te houden, maar om je leven net een klein beetje
        eenvoudiger te maken, je wat geld te besparen, en in de tussentijd ook
        nog iets goeds te doen voor de planeet.
      </p>
      <p className="downloadlinks">
        <span className="link1">
          <a href="https://google.nl">Link naar Google Play Store</a>
        </span>
        <span className="link2">
          <a href="https://apple.nl">Link naar Apple App Store</a>
        </span>
      </p>

      <h2>Hoe werkt het?</h2>
      <p>
        Bij Roylen maak je een account aan, en dan kun je de kleren, het
        speelgoed, je kinderzitjes... alles waar je kind(-eren) uit zijn
        gegroeid, ruilen tegen materiaal waar je kinderen nu behoefte aan
        hebben. Van rompertje tot speelpak, van duplo tot lego, van puzzels met
        30 stukken tot puzzels met 1000 stukjes - je ruilt je materiaal met
        andere jonge ouders. Met gesloten beurzen.
      </p>

      <p>
        En heb je niet meteen zelf wensen, dan kun je je spullen ook aanbieden
        voor 'nix'. Nix zijn de interne munteenheid van Roylen. Als je je
        inschrijft, krijg je 100 nix, zomaar, gratis en voor niks. Als je een
        product te ruilen aanbiedt, kun je er een waarde op plakken. Zo kun je
        meer nix verzamelen; en die kun je dan weer gebruiken om producten van
        anderen over te nemen. Zo kan de ruilwaarde van de dingen worden
        uitgedrukt in nix.
      </p>

      <img src={screenshot} alt="Screenshot" width={200} />
      <img src={screenshot1} alt="Screenshot" width={200} />
      <img src={screenshot2} alt="Screenshot" width={200} />
      <img src={screenshot3} alt="Screenshot" width={200} />
      <img src={screenshot4} alt="Screenshot" width={200} />
    </div>
  );
};

export default Home;
