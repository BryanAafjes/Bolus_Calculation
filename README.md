# Bolus Calculation

In dit project kan je via een liveserver een Bolus Calculatie uitvoeren. Hier kan je je gewicht (voor de gehele dagelijkse intake en basale dosis) en eventuele koolhydraten (in gram) per maaltijd invullen om te berekenen hoeveel units insuline moeten worden ingenomen bij een maaltijd.

## Installatie

Als je nog geen [NodeJS](https://nodejs.org/en/download/) op je computer hebt staan, installeer dit dan eerst.

Daarnaast moet je Typescript installeren:
```properties
npm install -g typescript
```

Om alle packages benodigd voor het project te installeren, kan je npm install gebruiken (in je project folder):
```properties
npm install
```


## Gebruik

**Voor het starten van de liveserver (in je project folder):**
```properties
node liveserver.js
```
**Voor het starten van een Unit Test met [Jest](https://jestjs.io/):**

Om een test te kunnen starten moet je eerst in het bestand "boluscalculation.ts" lijn 35 uncommenten door de "//" weg te halen.

Vervolgens moet je dit eerst compilen, dit kan als volgt (in je project folder):
```properties
tsc --watch
```
Daarna kan de unit test worden uitgevoert door het volgende commando uit te voeren:

```properties
npm test
```
## Tooling
We hebben voor dit project gebruik gemaakt van de volgende tooling:
- [NodeJS](https://nodejs.org/en/download/)
- [TypeScript](https://www.typescriptlang.org/)
- [Liveserver](https://www.npmjs.com/package/live-server)
- [VS Code](https://code.visualstudio.com/)

## License
[MIT](https://choosealicense.com/licenses/mit/)
