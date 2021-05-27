# Bolus Calculation

In dit project kan je via een liveserver een Bolus Calculatie uitvoeren. Hier kan je je gewicht (voor de gehele dagelijkse intake en basale dosis) en eventuele koolhydraten (in gram) per maaltijd invullen om te berekenen hoeveel units insuline moeten worden ingenomen bij een maaltijd.

## Documentatie

De globale structuur van onze applicatie is opgedeeld in een aantal verschillende lagen. Deze lagen leven bij ons in verschillende Docker Containers (zie begrippen voor extra toelichting over Docker containers).
Als eerste hebben we natuurlijk de database, hierin wordt de informatie voor onze applicatie opgeslagen. Verder hebben we een API die leeft in onze backend, deze zorgt voor de communicatie tussen de back- en front-end.

### C1: Context diagram

Hieronder de globale context van onze applicatie, hierin staan ook de gebruikers van onze applicatie weergegeven:

![image](https://user-images.githubusercontent.com/74911066/119786359-67dddb80-bed0-11eb-8cde-cff3947e3704.png)

### C2: Context diagram

In het onderstaande diagram is de inhoudelijke globale structuur van onze applicatie te zien:

![image](https://user-images.githubusercontent.com/74911066/119786435-79bf7e80-bed0-11eb-808e-19b102191117.png)

### C3 Context diagram

In het onderstaande diagram is de gedetailleerdere structuur van onze applicatie inhoudelijk te zien:

![image](https://user-images.githubusercontent.com/74911066/119786486-87750400-bed0-11eb-95a9-d2fa7cc4d617.png)

## Installatie

Als je nog geen [NodeJS](https://nodejs.org/en/download/) op je computer hebt staan, installeer dit dan eerst.

Daarnaast moet je Typescript installeren:
```properties
npm install -g typescript
```

Om alle packages benodigd voor het project te installeren, kan je npm install gebruiken (in zowel de front- als backend):
```properties
npm install
```

## Gebruik

### Docker
Ik raad sterk aan om onze [Taskfile](https://taskfile.dev) te gebruiken.

Commands:
- `$ task d:up` Start alle docker containers
- `$ task d:up:s` Start alle docker containers in de background
- `$ task d:down` Sluit alle docker containers
- `$ task d:logs` Zie de logs in de backend
- `$ task d:sql` Ga direct in de SQL shell van de database container
- `$ task f:test` Run alle unit tests in de frontend container.

Anders kun je de volgende commando's runnen:
- `$ docker-compose up`

Vervolgens kun je via http://localhost:8181 de webpagina bereiken.

**Voor het starten van de liveserver (in je project folder):**
```properties
node liveserver.js
```
**Voor het starten van een Unit Test met [Jest](https://jestjs.io/):**

Eerst moet de frontend compilen, dit kan door middel van de volgende command uit te voeren (in de frontend folder):
```properties
tsc --watch
```
Daarna kan de unit test worden uitgevoert door het volgende commando uit te voeren:
```properties
npm test
```
**Gebruik van de Backend API:**
Om de API te kunnen starten moet er eerst een ORM config met de databasegegevens worden aangemaakt, dit kan aan de hand van de "ormconfig.example.json" file in de backend.

Als dit is gedaan kan de API worden opgestart door in de backend directory de volgende command uit te voeren:
```properties
npm run dev
```

## Tooling
We hebben voor dit project gebruik gemaakt van de volgende tooling:
- [NodeJS](https://nodejs.org/en/download/)
- [TypeScript](https://www.typescriptlang.org/)
- [Liveserver](https://www.npmjs.com/package/live-server)
- [VS Code](https://code.visualstudio.com/)

## License
[MIT](https://choosealicense.com/licenses/mit/)
