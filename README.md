# Moment 5 - REST-webbtjänster Del 2

Denna webbplats konsumerar webbtjänsten skapad i del 1, som tillhandahåller data om olika kurser. Webbsidan använder Fetch API för att göra anrop till webbtjänsten.

För att hämta data görs ett anrop där URL:en till webbtjänsten skickas med. Responsen som kommer i JSON-format görs om till ett JavaScript-objekt och därefter används forEach-metoden för att skriva ut varje värde i HTML-element (tabell-element) som sedan läggs in i tabellen med ".innerHTML". Funktionen för detta anropas när sidan laddas.

För att lägga till en kurs anropas en funktion när användaren klickar på "Lägg till-knappen". I denna funktion lagras värdena som skrivits in i formuläret i variabler och därefter lagras de som en JSON-array i en ytterligare variabel. Därefter görs ett Fetch-anrop, där metoden POST används. I "body" läggs variabel med JSON-arrayen till som värde. Om anropet lyckades eller om något fel uppstod skrivs detta ut i konsolen. Därefter laddas sidan om.

För att ta bort kurser anropas en funktion när när "Radera"-knappen klickas. I funktionen görs ett Fetch-anrop där objektets id som lagrades i knappens id-attribut hämtas från den specifika knapp som klickades på och läggs därefter till i slutet av URL:en till webbtjänsten. Metoden DELETE används i anropet. Om anropet lyckades eller om något fel uppstod skrivs detta ut i konsolen. Därefter laddas sidan om.

Något jag skulle vilja få att funka men inte har lyckats med är att när en kurs lägs till eller tas bort så ska tabellen uppdateras automatiskt utan att sidan laddas om.

## Länk till publicerad webbplats:

http://studenter.miun.se/~emno1501/dt173g/mom5/del2/index.html