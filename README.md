# Inlämningsuppgift 1

- Starta med `npm start`. 
- Använder port 3012 på localhost.
- Frontend: https://github.com/FakeShemp/API-Inlamningsuppgift-1-frontend

# Frågor & svar

> Hur används HTTP-protokollet när du surfar in på en websida? Beskriv vilken metod, path, URI, response code och body som skickas in och svarar. Om du har svårt att bestämma dig för en url, ta ex. http://www.smp.se/kultur-noje/
- Metoden är troligtvis `GET` för att hämta informationen
- *Path*:en blir `kultur-noje`. Det är den delen av sidan vi vill in på.
- URI:n är `http://www.smp.se/kultur-noje/`, som beskriver hur och vart vi vill surfa
- *Response code*, här `200`, visar att allt gick okej
- *Body*:n som skickas in är troligtvis tom vid en `GET`. Den som skickas tillbaka vid `200` är HTML-datan som gör upp sidan och kan renderas ut.
---
> Beskriv HTTP-protokollets vanligaste metoder och vad de gör.
- `GET` hämtar ett objekt från servern
- `POST` lägger till ett objekt på servern
- `DELETE` tar bort ett objekt
- `PUT` byter ut ett objekt
- `PATCH` ändrar någon egenskap på ett objekt
---
> "http://localhost:3000/users?username=something" är en URI, beskriv vilka delar den består av och vad de kallas.
- `http` är schemat som datan använder, här Hypertext Transfer Protocol
- `localhost` är *host*:en, vart datan ska. T.ex. en IP-adress
- `3000` är porten, vilken port datan ska skickas till på nätverkets slutpunkt
- `users` är sökvägen som vi ska till
- `?username=something` är en parameterfråga där vi kan skicka in extra informationsparametrar
---
> På vilka tre sätt kan man skicka in parametrar i en HTTP-request? Ge exempel med curl.

#### Query strings
`curl http://examp.le/user?id=secret`

#### Fragment identifier
`curl http://examp.le/user#secret`
(Kan hämtas via `location.hash`)

#### Header parameter
`curl --header "HeaderID: secret" http://examp.le/user`

# Feedback
Kursen har över lag varit väldigt bra tycker jag. Jag inser att jag kanske har lite mer erfarenhet inom programmering än andra i klassen, men takten har varit bra tycker jag ändå. Det har inte varit för slött för mig, men jag tycker andra verkar hinna med också.

Jag gillar slides:en, de är lätta att förstå även om man missat en lektion. Det är lagom med föreläsningar också. Jag tror många behöver mer ren tid med att sitta och koda.

Något jag tror behöver tas upp dock är hur man "debuggar" Javascript. Jag märker hur det kan vara svårt för många att förstå hur man läser felkoder. Oftast är de deskriptiva, men det blir lätt att fokusera på *att* det är ett fel istället på hur man löser det.
