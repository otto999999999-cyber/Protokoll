# Ablauf-Assistent – intern bereitstellen (Netzlaufwerk)

Der Ablauf-Assistent (`chatbot.html`) ist eine **einzelne, komplett eigenständige HTML-Datei**
(keine externen Abhängigkeiten, kein Server, kein Internet nötig, ca. 62 KB).
Er läuft per **Doppelklick** im Standardbrowser – auch vom Netzlaufwerk.

---

## Teil A – ZUERST: öffentliche Version abschalten (wichtig)

Aktuell ist der Assistent **öffentlich** erreichbar (GitHub Pages) und der Quelltext ist
**öffentlich lesbar** (GitHub-Repo). Beides sollte vom Netz genommen werden:

1. **Repo privat schalten** (empfohlen, nimmt Seite **und** Quelltext aus dem öffentlichen Zugriff):
   - github.com/otto999999999-cyber/Protokoll → **Settings** → **General**
   - ganz unten **„Danger Zone"** → **„Change repository visibility"** → **„Make private"**
   - Damit wird i.d.R. auch die öffentliche GitHub-Pages-Seite deaktiviert.
2. Optional zusätzlich: **Settings → Pages → Source = „None"** (schaltet nur die Seite ab;
   bei öffentlichem Repo bliebe der Quelltext sonst lesbar → deshalb Repo privat bevorzugen).
3. Wird das Repo gar nicht mehr gebraucht: **Settings → „Delete this repository"**.

> Hinweis: Auch die Git-Historie enthält alle bisherigen Inhalte. „Privat" nimmt alles
> aus dem öffentlichen Zugriff.

---

## Teil B – intern vom Netzlaufwerk bereitstellen

1. `chatbot.html` auf ein Laufwerk kopieren, auf das die Verwaltung Zugriff hat, z.B.:
   `V:\4_Wohnraumverwaltung\Verwaltung 2.0\Ablauf-Assistent\`
   (optional umbenennen in `Ablauf-Assistent.html`).
2. **Öffnen per Doppelklick** – startet im Standardbrowser. Kein Server, kein Internet nötig.
3. Komfort für die Mitarbeitenden:
   - **Desktop-Verknüpfung**: Rechtsklick auf die Datei → *Senden an* → *Desktop (Verknüpfung erstellen)*.
   - Als **Browser-Lesezeichen** oder **Startseite** hinterlegen.
   - In **Edge**: über *… → Apps → Diese Website als App installieren* als eigenes Fenster.
4. **Aktualisieren** = einfach die Datei auf dem Laufwerk austauschen. Alle greifen
   automatisch auf die neue Version zu.

---

## Hinweise

- **Chatverlauf/Feedback** wird lokal pro Gerät im Browser gespeichert (localStorage).
  Bei Dateien vom Netzlaufwerk (file://) klappt das in Chrome/Edge meist, ist aber nicht
  garantiert – der Assistent funktioniert auch ohne. Nicht kritisch.
- **Sobald intern/privat** müssen keine Namen/Kontakte/Pfade mehr anonymisiert werden.
  Auf Wunsch können die echten Ansprechpartner (Kanzleien, Zuständigkeiten, DOKUWEB-Hinweise,
  interne Adressen) wieder eingebaut werden – dann ausschließlich in die interne Datei.
- **Sensible Dokumente** (z.B. Zugangsschreiben mit Login/Passwort) gehören nicht in den
  Assistenten, sondern bleiben im geschützten Ablageordner.
