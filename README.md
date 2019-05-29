# Inlämningsuppgift 1

- Starta med `npm start`. 
- Använder port 3012 på localhost.
- Frontend: https://github.com/FakeShemp/API-Inlamningsuppgift-1-frontend

# Frågor & svar

> Hur används HTTP-protokollet när du surfar in på en websida? Beskriv vilken metod, path, URI, response code och body som skickas in och svarar. Om du har svårt att bestämma dig för en url, ta ex. http://www.smp.se/kultur-noje/

> Beskriv HTTP-protokollets vanligaste metoder och vad de gör.
- `GET` hämtar ett objekt från servern
- `POST` lägger till ett objekt på servern
- `DELETE` tar bort ett objekt
- `PUT` byter ut ett objekt
- `PATCH` ändrar någon egenskap på ett objekt

> "http://localhost:3000/users?username=something" är en URI, beskriv vilka delar den består av och vad de kallas.
- `http` är schemat som datan använder, här Hypertext Transfer Protocol
- `localhost` är *host*:en, vart datan ska. T.ex. en IP-adress
- `3000` är porten, vilken port datan ska skickas till på nätverkets slutpunkt
- `users` är sökvägen som vi ska till
- `?username=something` är en parameterfråga där vi kan skicka in extra informationsparametrar

> På vilka tre sätt kan man skicka in parametrar i en HTTP-request? Ge exempel med curl.

#### Query strings
`curl https://examp.le/user?id=secret`

#### Fragment identifier
`curl https://examp.le/user#secret`

####

