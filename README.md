# Frida Ramsing Portfolio

En simpel portfolio-side lavet med almindelig HTML og CSS.

## Sådan åbner du siden

Åbn `index.html` direkte i browseren, eller brug Live Server i VS Code.

Du kan også starte en lokal server fra projektmappen:

```sh
npm run dev
```

Åbn den adresse, terminalen viser (normalt http://localhost:3000).
Stop serveren med Ctrl+C. Serveren er kun til lokal visning; GitHub Pages
bruger stadig HTML-filerne direkte.
Der er ingen npm-pakker at installere. Hvis port 3000 er optaget, bruges den
naeste ledige port op til 3010. Lokale filer caches ikke.

## Sådan virker den på GitHub

Når repoet ligger på GitHub, kan siden vises med GitHub Pages:

1. Gå til repoets `Settings`
2. Vælg `Pages`
3. Vælg branch `main`
4. Vælg folder `/root`
5. Gem

GitHub viser derefter siden fra `index.html`.

## Kontaktformular

Case 1 sender via FormSubmit til `Frida@ramsing.com` med et automatisk svar
om svartid inden for to dage. Efter indsendelse vises `contact-thanks.html`.

Publicer filerne, indsend formularen med din egen testbesked, og klik paa
aktiveringslinket fra FormSubmit i din indbakke. Test derefter en ny indsendelse
og kontrollér baade modtagelse og automatisk svar (ogsaa spam).
reCAPTCHA skal forblive aktiveret: FormSubmits autosvar virker ikke med
deaktiveret reCAPTCHA eller AJAX-indsendelse. Der bruges derfor almindelig POST.
Der er ikke sendt en rigtig besked eller verificeret maillevering fra Codex.

Dokumentation: https://formsubmit.co/

## Filer

- `index.html` indeholder sidens indhold
- `style.css` indeholder sidens design
