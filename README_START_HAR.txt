CREOVUM DIGITAL STUDIO — HEMSIDA v2.8 RC
======================================

DETTA AR EN RELEASE CANDIDATE, INTE EN PUBLICERAD UPPDATERING.
Filerna i denna mapp har inte laddats upp till GitHub Pages.

FORHANDSGRANSKA LOKALT
1. Packa upp ZIP-filen.
2. Oppna index.html i Firefox/Chrome pa Mainframe.
3. Prova Home, Projects, NITE, Mercode, ArrBridge, About, Contact och Privacy.
4. For exakt lokal HTTP-testning: oppna terminalen i mappen och kor
       python3 -m http.server 8000
   Oppna sedan http://localhost:8000 . Stoppa med Ctrl+C.
5. Manrope laddas fran Google Fonts nar du ar online. Reservtypsnitt anvands offline.

WEBBPLATSEN
- 9 HTML-filer inklusive 404.
- Responsiva projektkort och separat sida for varje projekt.
- Riktig Creovum v1.2-branding med SVG; ArrBridge AB-symbolen ar transparent WebP.
- Third-party-appnamn Autobrr, Sonarr och Radarr visas endast i text.
- Direkta app-policy-lankar: https://creovum.dev/nite/privacy-policy/
  och https://creovum.dev/mercode/privacy-policy/
- E-post: hello@creovum.dev for allman kontakt; support@creovum.dev for appar.
- Ingen egen statistik, inloggning eller kontaktform.

NYTT I v2.8 RC
- Reparerar en saknad ArrBridge-logotypfil i v2.7.
- Tar bort dolt sidledsoverskott pa smalare skarmar och korrigerar storleken
  pa Creovum-loggan i sidfoten.
- Forbattrar engelsk projekttext, sarskilt ArrBridges matchning av svenska
  releasenamn mot Sonarr/TVDB.
- Lagger in sitemap.xml och robots.txt.
- Sidspecifika canonical, Open Graph och Twitter-forhandsbilder, 1200 x 630.
- Webbikon / Apple touch icon.
- Korrigerad website-privacy-text och tva direktlankar till apparna.
- QA_REPORT.txt beskriver Chromium-testet pa flera skarmbredder.

INFÖR PUBLICERING — VIKTIGT
Du har REDAN creovum.dev och fungerande e-post/DNS.
Konfigurera inte om DNS eller skapa ett nytt repo i onodan.

Nar du publicerar, anvand din befintliga GitHub Pages-sajt och behall dess
CNAME, DNS-konfiguration och eventuella andra publicerade filer.
Kopiera/merga FILERNA INUTI denna mapp till webbplatsens rot (index.html i root).
Ta INTE bort mapparna:
   /nite/privacy-policy/
   /mercode/privacy-policy/
De finns redan pa creovum.dev. Denna release inkluderar inte deras innehall.

Efter publicering: kontrollera alla .html-sidor via HTTPS, 404-sidan, robots.txt,
sitemap.xml och att forhandsbilderna laddar pa publika absoluta URL:er.
Sajtens forhandsgranskningsbilder kan cachelagras av sociala plattformar.

ATT KONTROLLERA I APPLANDET
- Mercodes publicerade integritetspolicy beskriver Report this code som en
  nuvarande e-postfunktion. Sakerstall att det stammer med faktisk appversion.
- Bada app-policyerna visar fortfarande creovum@s-eriksson.se som privacy-kontakt.
  Det kan behallas om den adressen anvands, men ar annorlunda an webbplatsens
  support@creovum.dev.

Projektillustrationerna for NITE/Mercode ar koncept, inte appskarmbilder.
NITE och Mercodes tillganglighet/status kan behova uppdateras vid framtida releaser.

Inga fontfiler medfoljer. Inga andringar har gjorts pa Hyrule eller live-sajten.
