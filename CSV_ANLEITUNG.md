# Gebäudekatalog - Datenverwaltung

## Übersicht

Die Gebäudedaten werden über eine CSV-Datei (`buildings.csv`) eingepflegt. Diese enthält alle Informationen zu den historischen Forstgebäuden in Mecklenburg-Vorpommern.

**Die Website funktioniert sowohl lokal als auch auf einem Server!**

- **Lokal**: Die Daten sind direkt in JavaScript eingebettet (kein Server nötig)
- **Server**: Die Daten werden aus der `buildings.csv` Datei geladen

## Lokale Verwendung

1. Öffnen Sie einfach `index.html` in Ihrem Browser
2. Die Daten werden automatisch aus dem eingebetteten JavaScript geladen
3. Kein Server oder spezielle Software nötig!

## Server-Verwendung

1. Stellen Sie die Dateien auf einen Webserver
2. Bearbeiten Sie die `buildings.csv` Datei direkt
3. Die Website lädt die Daten automatisch aus der CSV-Datei

## CSV-Struktur

## CSV-Struktur

Die CSV-Datei muss folgende Spalten in dieser Reihenfolge enthalten:

```
name,address,city,year_built,architect,building_condition,heritage_value,building_history,description,sources_literature,images,main_image
```

### Spaltenbeschreibung

- **name**: Der Name des Gebäudes (z.B. "Forsthaus Mirow")
- **address**: Vollständige Adresse (z.B. "Schlossstraße 1, Mirow")
- **city**: Stadt/Ort (z.B. "Mirow")
- **year_built**: Baujahr (z.B. "1895")
- **architect**: Architekt/Planer (optional, z.B. "Georg Adolph Demmler")
- **building_condition**: Aktueller Bauzustand (eine der folgenden Optionen):
  - "Denkmalfachlich gelungene (Um)Nutzung"
  - "Erfolgreiche und solide Sicherung"
  - "Denkmalverträgliche Teilnutzung"
  - "Gefahr für den Bestand"
- **heritage_value**: Denkmalwert/Beschreibung des historischen Wertes
- **building_history**: Baugeschichte des Gebäudes
- **description**: Detaillierte Beschreibung des Gebäudes
- **sources_literature**: Quellen und Literaturangaben
- **images**: Bild-URLs, getrennt durch Semikolon (z.B. "url1.jpg;url2.jpg;url3.jpg")
- **main_image**: URL des Hauptbildes (wird als Titelbild verwendet)

## Beispiel

```csv
name,address,city,year_built,architect,building_condition,heritage_value,building_history,description,sources_literature,images,main_image
Forsthaus Mirow,Schlossstraße 1, Mirow,1895,Georg Adolph Demmler,Denkmalfachlich gelungene (Um)Nutzung,Das Gebäude ist ein charakteristisches Beispiel für die Forstverwaltungsarchitektur des späten 19. Jahrhunderts in Mecklenburg-Vorpommern.,Das Forsthaus Mirow wurde 1895 im neugotischen Stil errichtet...,Das Forsthaus Mirow ist ein zweigeschossiges Gebäude...,Landesforst MV - Forstamt Mirow, www.wald-mv.de,https://example.com/forsthaus-mirow-1.jpg;https://example.com/forsthaus-mirow-2.jpg,https://example.com/forsthaus-mirow-main.jpg
```

## Bilder

- Bilder werden als URLs in der `images` und `main_image` Spalte gespeichert
- Mehrere Bilder können durch Semikolon getrennt werden
- Das `main_image` wird als Hauptbild auf der Übersichtsseite und als Titelbild auf der Detailseite verwendet
- Die zusätzlichen Bilder in `images` werden als Thumbnail-Galerie angezeigt

## Verwendung

### Lokal (empfohlen für Entwicklung)
1. Öffnen Sie `index.html` direkt in Ihrem Browser
2. Die Daten werden automatisch aus dem eingebetteten Code geladen
3. Bearbeiten Sie die Daten direkt in der `script.js` Datei in der `getEmbeddedBuildingsData()` Funktion

### Auf dem Server
1. Bearbeiten Sie die `buildings.csv` Datei mit Excel, LibreOffice oder einem Texteditor
2. Fügen Sie neue Gebäude als neue Zeilen hinzu
3. Speichern Sie die Datei als CSV (UTF-8 kodierung empfohlen)
4. Laden Sie die Seite neu - die Daten werden automatisch geladen

## Hinweise

- Alle Felder außer `architect` sind Pflichtfelder
- Bei fehlenden Bildern wird automatisch ein Placeholder verwendet
- Die CSV-Datei muss im gleichen Verzeichnis wie `index.html` liegen (für Server-Betrieb)
- Änderungen an der CSV werden beim Neuladen der Seite wirksam
- Für lokale Entwicklung sind keine Änderungen an der CSV nötig - die Daten sind bereits eingebettet