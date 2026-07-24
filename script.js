// Gebäudedaten (eingebettet für lokale Nutzung)
const buildingsData = [
    {
        id: 1,
        name: "Forsthaus Neubrück",
        address: "Neubrück, Wokuhl-Dabelow (Mecklenburgische Seenplatte) - Forsthof 1",
        city: "Neubrück",
        year_built: "",
        architect: "",
        building_condition: "",
        heritage_value: "Kurzferfassung, Literaturangabe",
        building_history: "",
        description: "",
        sources_literature: "",
        images: "images/placeholder.jpg",
        main_image: "images/placeholder.jpg"
    },
    {
        id: 2,
        name: "Scheune Neubrück",
        address: "Neubrück, Wokuhl-Dabelow (Mecklenburgische Seenplatte) - Forsthof 1",
        city: "Neubrück",
        year_built: "",
        architect: "",
        building_condition: "",
        heritage_value: "Kurzferfassung",
        building_history: "",
        description: "",
        sources_literature: "",
        images: "images/placeholder.jpg",
        main_image: "images/placeholder.jpg"
    },
    {
        id: 3,
        name: "Stall Neubrück",
        address: "Neubrück, Wokuhl-Dabelow (Mecklenburgische Seenplatte) - Forsthof 1",
        city: "Neubrück",
        year_built: "",
        architect: "",
        building_condition: "",
        heritage_value: "",
        building_history: "",
        description: "",
        sources_literature: "",
        images: "images/placeholder.jpg",
        main_image: "images/placeholder.jpg"
    },
    {
        id: 4,
        name: "Forsthof Neumeiershof",
        address: "Neumeiershof, Wulkenzin (Mecklenburgische Seenplatte) - Forsthof",
        city: "Neumeiershof",
        year_built: "",
        architect: "",
        building_condition: "",
        heritage_value: "Gesamtanlage",
        building_history: "",
        description: "",
        sources_literature: "",
        images: "images/placeholder.jpg",
        main_image: "images/placeholder.jpg"
    },
    {
        id: 5,
        name: "Forsthaus 2",
        address: "Neumeiershof, Wulkenzin (Mecklenburgische Seenplatte) - Neumeiershof 2 - Forsthaus, Wohnhaus",
        city: "Neumeiershof",
        year_built: "",
        architect: "",
        building_condition: "",
        heritage_value: "",
        building_history: "",
        description: "",
        sources_literature: "",
        images: "images/placeholder.jpg",
        main_image: "images/placeholder.jpg"
    },
    {
        id: 6,
        name: "Stallscheune Neumeiershof",
        address: "Neumeiershof, Wulkenzin (Mecklenburgische Seenplatte) - Forsthof",
        city: "Neumeiershof",
        year_built: "",
        architect: "",
        building_condition: "",
        heritage_value: "",
        building_history: "",
        description: "",
        sources_literature: "",
        images: "images/placeholder.jpg",
        main_image: "images/placeholder.jpg"
    },
    {
        id: 7,
        name: "Scheune Neumeiershof",
        address: "Neumeiershof, Wulkenzin (Mecklenburgische Seenplatte) - Forsthof",
        city: "Neumeiershof",
        year_built: "",
        architect: "",
        building_condition: "",
        heritage_value: "",
        building_history: "",
        description: "",
        sources_literature: "",
        images: "images/placeholder.jpg",
        main_image: "images/placeholder.jpg"
    },
    {
        id: 8,
        name: "Forsthaus 1",
        address: "Neumeiershof, Wulkenzin (Mecklenburgische Seenplatte) - Neumeiershof 1 - Wohnhaus",
        city: "Neumeiershof",
        year_built: "",
        architect: "",
        building_condition: "",
        heritage_value: "",
        building_history: "",
        description: "",
        sources_literature: "",
        images: "images/placeholder.jpg",
        main_image: "images/placeholder.jpg"
    },
    {
        id: 9,
        name: "Stallscheun Neumeiershof",
        address: "Neumeiershof, Wulkenzin (Mecklenburgische Seenplatte) - Forsthof",
        city: "Neumeiershof",
        year_built: "",
        architect: "",
        building_condition: "",
        heritage_value: "",
        building_history: "",
        description: "",
        sources_literature: "",
        images: "images/placeholder.jpg",
        main_image: "images/placeholder.jpg"
    },
    {
        id: 10,
        name: "Forsthaus Mirow",
        address: "Mirow (Mecklenburgische Seenplatte) - Rudolf-Breitscheid-Straße 26 - Forsthaus",
        city: "Mirow",
        year_built: "",
        architect: "",
        building_condition: "",
        heritage_value: "",
        building_history: "",
        description: "",
        sources_literature: "",
        images: "images/placeholder.jpg",
        main_image: "images/placeholder.jpg"
    },
    {
        id: 11,
        name: "Forsthaus Carlshof",
        address: "Carlshof, Schorssow (Landkreis Rostock) - Schorssower Weg 6 - Forsthaus",
        city: "Carlshof",
        year_built: "",
        architect: "",
        building_condition: "",
        heritage_value: "",
        building_history: "",
        description: "",
        sources_literature: "",
        images: "images/placeholder.jpg",
        main_image: "images/placeholder.jpg"
    },
    {
        id: 12,
        name: "Wohnhaus Forstarbeitersiedlung",
        address: "Carlshof, Schorssow (Landkreis Rostock) - Schorssower Weg 2-4 - Wohnhaus",
        city: "Carlshof",
        year_built: "",
        architect: "",
        building_condition: "",
        heritage_value: "",
        building_history: "",
        description: "",
        sources_literature: "",
        images: "images/placeholder.jpg",
        main_image: "images/placeholder.jpg"
    },
    {
        id: 13,
        name: "Gärten Eldena",
        address: "Eldena, Greifswald Grünflächen der ehemaligen Königlichen staats- und landwirtschaftlichen Akademie Eldena (heute Gelände des Forstamtes und des Naturkindergartens)",
        city: "Eldena",
        year_built: "",
        architect: "",
        building_condition: "",
        heritage_value: "Historische Pläne Denkmalwertbegründung Bestandsfotos 2022",
        building_history: "",
        description: "",
        sources_literature: "",
        images: "images/placeholder.jpg",
        main_image: "images/placeholder.jpg"
    },
    {
        id: 14,
        name: "Als Forstamt genutzt",
        address: "Eldena, Greifswald (Vorpommern-Greifswald) - Hainstraße 5 - Akademiegebäude",
        city: "Eldena",
        year_built: "",
        architect: "",
        building_condition: "",
        heritage_value: "Denkmalwertbegründung",
        building_history: "",
        description: "",
        sources_literature: "",
        images: "images/placeholder.jpg",
        main_image: "images/placeholder.jpg"
    },
    {
        id: 15,
        name: "Stall Eldena",
        address: "Eldena, Greifswald (Vorpommern-Greifswald) - Hainstraße 5 - Stall",
        city: "Eldena",
        year_built: "",
        architect: "",
        building_condition: "",
        heritage_value: "",
        building_history: "",
        description: "",
        sources_literature: "",
        images: "images/placeholder.jpg",
        main_image: "images/placeholder.jpg"
    },
    {
        id: 16,
        name: "Forsthaus Schuenhagen",
        address: "Schuenhagen, Velgast (Vorpommern-Rügen) - Am Kronenwald 1 - Forsthaus",
        city: "Schuenhagen",
        year_built: "",
        architect: "",
        building_condition: "",
        heritage_value: "",
        building_history: "",
        description: "",
        sources_literature: "",
        images: "images/placeholder.jpg",
        main_image: "images/placeholder.jpg"
    },
    {
        id: 17,
        name: "Forsthof Finkenthal",
        address: "Finkenthal (Landkreis Rostock) - Dorfstraße 69 - Forsthof",
        city: "Finkenthal",
        year_built: "",
        architect: "",
        building_condition: "",
        heritage_value: "",
        building_history: "",
        description: "",
        sources_literature: "",
        images: "images/placeholder.jpg",
        main_image: "images/placeholder.jpg"
    },
    {
        id: 18,
        name: "Forsthaus Finkenthal",
        address: "Finkenthal (Landkreis Rostock) - Forsthaus",
        city: "Finkenthal",
        year_built: "",
        architect: "",
        building_condition: "",
        heritage_value: "",
        building_history: "",
        description: "",
        sources_literature: "",
        images: "images/placeholder.jpg",
        main_image: "images/placeholder.jpg"
    },
    {
        id: 19,
        name: "Scheune Finkenthal",
        address: "Finkenthal (Landkreis Rostock) - Dorfstraße 69 - Forsthof",
        city: "Finkenthal",
        year_built: "",
        architect: "",
        building_condition: "",
        heritage_value: "",
        building_history: "",
        description: "",
        sources_literature: "",
        images: "images/placeholder.jpg",
        main_image: "images/placeholder.jpg"
    },
    {
        id: 20,
        name: "Stall Finkenthal",
        address: "Finkenthal (Landkreis Rostock) - Dorfstraße 69 - Forsthof",
        city: "Finkenthal",
        year_built: "",
        architect: "",
        building_condition: "",
        heritage_value: "",
        building_history: "",
        description: "",
        sources_literature: "",
        images: "images/placeholder.jpg",
        main_image: "images/placeholder.jpg"
    },
    {
        id: 21,
        name: "Jagdpavillon Ivenack",
        address: "Ivenack (Mecklenburgische Seenplatte) - Tiergarten - Pavillon",
        city: "Ivenack",
        year_built: "",
        architect: "",
        building_condition: "",
        heritage_value: "",
        building_history: "",
        description: "",
        sources_literature: "",
        images: "images/placeholder.jpg",
        main_image: "images/placeholder.jpg"
    },
    {
        id: 22,
        name: "Forsthof Sandhof",
        address: "Sandhof, Neu Poserin (Ludwigslust-Parchim) - Waldstraße 35 - Forsthof",
        city: "Sandhof",
        year_built: "",
        architect: "",
        building_condition: "",
        heritage_value: "",
        building_history: "",
        description: "",
        sources_literature: "",
        images: "images/placeholder.jpg",
        main_image: "images/placeholder.jpg"
    },
    {
        id: 23,
        name: "Forsthaus Sandhof",
        address: "Sandhof, Neu Poserin (Ludwigslust-Parchim) - Waldstraße 35 - Forsthaus",
        city: "Sandhof",
        year_built: "",
        architect: "",
        building_condition: "",
        heritage_value: "-",
        building_history: "",
        description: "",
        sources_literature: "",
        images: "images/placeholder.jpg",
        main_image: "images/placeholder.jpg"
    },
    {
        id: 24,
        name: "Stallscheune Sandhof",
        address: "Sandhof, Neu Poserin (Ludwigslust-Parchim) - Waldstraße 35 - Forsthof",
        city: "Sandhof",
        year_built: "",
        architect: "",
        building_condition: "",
        heritage_value: "-",
        building_history: "",
        description: "",
        sources_literature: "",
        images: "images/placeholder.jpg",
        main_image: "images/placeholder.jpg"
    },
    {
        id: 25,
        name: "Stallscheune Sandhof",
        address: "Sandhof, Neu Poserin (Ludwigslust-Parchim) - Waldstraße 35 - Forsthof",
        city: "Sandhof",
        year_built: "",
        architect: "",
        building_condition: "",
        heritage_value: "-",
        building_history: "",
        description: "",
        sources_literature: "",
        images: "images/placeholder.jpg",
        main_image: "images/placeholder.jpg"
    },
    {
        id: 26,
        name: "Forsthof Kleesten",
        address: "Kleesten, Dobbertin (Ludwigslust-Parchim) - Kleesten 4 - Forsthof",
        city: "Kleesten",
        year_built: "",
        architect: "",
        building_condition: "",
        heritage_value: "",
        building_history: "",
        description: "",
        sources_literature: "",
        images: "images/placeholder.jpg",
        main_image: "images/placeholder.jpg"
    },
    {
        id: 27,
        name: "Forsthaus?",
        address: "Kleesten, Dobbertin (Ludwigslust-Parchim) - Kleesten 4 - Domänenpächterhaus",
        city: "Kleesten",
        year_built: "",
        architect: "",
        building_condition: "",
        heritage_value: "",
        building_history: "",
        description: "",
        sources_literature: "",
        images: "images/placeholder.jpg",
        main_image: "images/placeholder.jpg"
    },
    {
        id: 28,
        name: "Scheune Kleesten",
        address: "Kleesten, Dobbertin (Ludwigslust-Parchim) - Kleesten 4 - Scheune",
        city: "Kleesten",
        year_built: "",
        architect: "",
        building_condition: "",
        heritage_value: "",
        building_history: "",
        description: "",
        sources_literature: "",
        images: "images/placeholder.jpg",
        main_image: "images/placeholder.jpg"
    },
    {
        id: 29,
        name: "Forsthaus Lohmen",
        address: "Lohmen (Landkreis Rostock) - Dorfstraße 20 - Forsthaus",
        city: "Lohmen",
        year_built: "",
        architect: "",
        building_condition: "",
        heritage_value: "",
        building_history: "",
        description: "",
        sources_literature: "",
        images: "images/placeholder.jpg",
        main_image: "images/placeholder.jpg"
    },
    {
        id: 30,
        name: "Stall Lohmen",
        address: "Lohmen (Landkreis Rostock) - Dorfstraße 20 - Stall",
        city: "Lohmen",
        year_built: "",
        architect: "",
        building_condition: "",
        heritage_value: "",
        building_history: "",
        description: "",
        sources_literature: "",
        images: "images/placeholder.jpg",
        main_image: "images/placeholder.jpg"
    },
    {
        id: 31,
        name: "Forsthof Bad Doberan",
        address: "Bad Doberan (Landkreis Rostock) - Neue Reihe 46, b, c - Forsthof",
        city: "Bad Doberan",
        year_built: "",
        architect: "",
        building_condition: "",
        heritage_value: "",
        building_history: "",
        description: "",
        sources_literature: "",
        images: "images/placeholder.jpg",
        main_image: "images/placeholder.jpg"
    },
    {
        id: 32,
        name: "Scheune Bad Doberan",
        address: "Bad Doberan (Landkreis Rostock) - Neue Reihe 46, b, c - Forsthof",
        city: "Bad Doberan",
        year_built: "",
        architect: "",
        building_condition: "",
        heritage_value: "",
        building_history: "",
        description: "",
        sources_literature: "",
        images: "images/placeholder.jpg",
        main_image: "images/placeholder.jpg"
    },
    {
        id: 33,
        name: "Stall Bad Doberan",
        address: "Bad Doberan (Landkreis Rostock) - Neue Reihe 46, b, c - Forsthof",
        city: "Bad Doberan",
        year_built: "",
        architect: "",
        building_condition: "",
        heritage_value: "",
        building_history: "",
        description: "",
        sources_literature: "",
        images: "images/placeholder.jpg",
        main_image: "images/placeholder.jpg"
    },
    {
        id: 34,
        name: "Mauer Bad Doberan",
        address: "Bad Doberan (Landkreis Rostock) - Neue Reihe 46, b, c - Forsthof",
        city: "Bad Doberan",
        year_built: "",
        architect: "",
        building_condition: "",
        heritage_value: "Kurzbegründung",
        building_history: "",
        description: "",
        sources_literature: "",
        images: "images/placeholder.jpg",
        main_image: "images/placeholder.jpg"
    },
    {
        id: 35,
        name: "Forsthaus Schlemmin",
        address: "Schlemmin, Bernitt (Landkreis Rostock) - Hauptstraße 10a - Forsthaus",
        city: "Schlemmin",
        year_built: "",
        architect: "",
        building_condition: "",
        heritage_value: "",
        building_history: "",
        description: "",
        sources_literature: "",
        images: "images/placeholder.jpg",
        main_image: "images/placeholder.jpg"
    },
    {
        id: 36,
        name: "Forsthaus Gädebehn",
        address: "Gädebehn, Crivitz (Ludwigslust-Parchim) - Alte Försterei 1 - Forsthaus",
        city: "Gädebehn",
        year_built: "",
        architect: "",
        building_condition: "",
        heritage_value: "Kurzbegründung",
        building_history: "",
        description: "",
        sources_literature: "",
        images: "images/placeholder.jpg",
        main_image: "images/placeholder.jpg"
    },
    {
        id: 37,
        name: "Dorfanlage mit Forstarbeiterhäusern",
        address: "Gädebehn, Crivitz (Ludwigslust-Parchim) - Alte Försterei 1 - Forsthaus",
        city: "Gädebehn",
        year_built: "",
        architect: "",
        building_condition: "",
        heritage_value: "Kein Denkmal",
        building_history: "",
        description: "",
        sources_literature: "",
        images: "images/placeholder.jpg",
        main_image: "images/placeholder.jpg"
    },
    {
        id: 38,
        name: "Forsthof Crivitz",
        address: "Crivitz (Ludwigslust-Parchim) - Rönkenhofer Weg 2 - Forsthof",
        city: "Crivitz",
        year_built: "",
        architect: "",
        building_condition: "",
        heritage_value: "Denkmalwertbegründung",
        building_history: "",
        description: "",
        sources_literature: "",
        images: "images/placeholder.jpg",
        main_image: "images/placeholder.jpg"
    },
    {
        id: 39,
        name: "Forsthaus Crivitz",
        address: "Crivitz (Ludwigslust-Parchim) - Rönkenhofer Weg 2 - Forsthof",
        city: "Crivitz",
        year_built: "",
        architect: "",
        building_condition: "",
        heritage_value: "",
        building_history: "",
        description: "",
        sources_literature: "",
        images: "images/placeholder.jpg",
        main_image: "images/placeholder.jpg"
    },
    {
        id: 40,
        name: "Scheune Crivitz",
        address: "Crivitz (Ludwigslust-Parchim) - Rönkenhofer Weg 2 - Forsthof",
        city: "Crivitz",
        year_built: "",
        architect: "",
        building_condition: "",
        heritage_value: "",
        building_history: "",
        description: "",
        sources_literature: "",
        images: "images/placeholder.jpg",
        main_image: "images/placeholder.jpg"
    },
    {
        id: 41,
        name: "Forsthof Gostorf",
        address: "Gostorf, Stepenitztal (Nordwestmecklenburg) - Forsthof",
        city: "Gostorf",
        year_built: "",
        architect: "",
        building_condition: "",
        heritage_value: "",
        building_history: "",
        description: "",
        sources_literature: "",
        images: "images/placeholder.jpg",
        main_image: "images/placeholder.jpg"
    },
    {
        id: 42,
        name: "Forsthaus Gostorf",
        address: "Gostorf, Stepenitztal (Nordwestmecklenburg) - Forsthof",
        city: "Gostorf",
        year_built: "",
        architect: "",
        building_condition: "",
        heritage_value: "",
        building_history: "",
        description: "",
        sources_literature: "",
        images: "images/placeholder.jpg",
        main_image: "images/placeholder.jpg"
    },
    {
        id: 43,
        name: "Stall Gostorf",
        address: "Gostorf, Stepenitztal (Nordwestmecklenburg) - Forsthof",
        city: "Gostorf",
        year_built: "",
        architect: "",
        building_condition: "",
        heritage_value: "",
        building_history: "",
        description: "",
        sources_literature: "",
        images: "images/placeholder.jpg",
        main_image: "images/placeholder.jpg"
    },
    {
        id: 44,
        name: "Backhaus Gostorf",
        address: "Gostorf, Stepenitztal (Nordwestmecklenburg) - Forsthof",
        city: "Gostorf",
        year_built: "",
        architect: "",
        building_condition: "",
        heritage_value: "",
        building_history: "",
        description: "",
        sources_literature: "",
        images: "images/placeholder.jpg",
        main_image: "images/placeholder.jpg"
    },
    {
        id: 45,
        name: "Scheune Gostorf",
        address: "Gostorf, Stepenitztal (Nordwestmecklenburg) - Forsthof",
        city: "Gostorf",
        year_built: "",
        architect: "",
        building_condition: "",
        heritage_value: "",
        building_history: "",
        description: "",
        sources_literature: "",
        images: "images/placeholder.jpg",
        main_image: "images/placeholder.jpg"
    },
    {
        id: 46,
        name: "Stall Gostorf",
        address: "Gostorf, Stepenitztal (Nordwestmecklenburg) - Forsthof",
        city: "Gostorf",
        year_built: "",
        architect: "",
        building_condition: "",
        heritage_value: "",
        building_history: "",
        description: "",
        sources_literature: "",
        images: "images/placeholder.jpg",
        main_image: "images/placeholder.jpg"
    },
    {
        id: 47,
        name: "Forsthof Radelübbe",
        address: "Radelübbe, Bandenitz (Ludwigslust-Parchim) - Bakendorfer Weg 7 - Forsthaus",
        city: "Radelübbe",
        year_built: "",
        architect: "",
        building_condition: "",
        heritage_value: "1 Foto",
        building_history: "",
        description: "",
        sources_literature: "",
        images: "images/placeholder.jpg",
        main_image: "images/placeholder.jpg"
    },
    {
        id: 48,
        name: "Forsthaus Radelübbe",
        address: "Radelübbe, Bandenitz (Ludwigslust-Parchim) - Bakendorfer Weg 7 - Forsthaus",
        city: "Radelübbe",
        year_built: "",
        architect: "",
        building_condition: "",
        heritage_value: "1 Foto",
        building_history: "",
        description: "",
        sources_literature: "",
        images: "images/placeholder.jpg",
        main_image: "images/placeholder.jpg"
    },
    {
        id: 49,
        name: "Scheune Radelübbe",
        address: "Radelübbe, Bandenitz (Ludwigslust-Parchim) - Bakendorfer Weg 7 - Forsthaus",
        city: "Radelübbe",
        year_built: "",
        architect: "",
        building_condition: "",
        heritage_value: "",
        building_history: "",
        description: "",
        sources_literature: "",
        images: "images/placeholder.jpg",
        main_image: "images/placeholder.jpg"
    },
    {
        id: 50,
        name: "Backhaus Radelübbe",
        address: "Radelübbe, Bandenitz (Ludwigslust-Parchim) - Bakendorfer Weg 7 - Forsthaus",
        city: "Radelübbe",
        year_built: "",
        architect: "",
        building_condition: "",
        heritage_value: "",
        building_history: "",
        description: "",
        sources_literature: "",
        images: "images/placeholder.jpg",
        main_image: "images/placeholder.jpg"
    },
    {
        id: 51,
        name: "Forsthof Dümmer",
        address: "Dümmer (Ludwigslust-Parchim) - Forstweg 12 - Forsthof",
        city: "Dümmer",
        year_built: "",
        architect: "",
        building_condition: "",
        heritage_value: "",
        building_history: "",
        description: "",
        sources_literature: "",
        images: "images/placeholder.jpg",
        main_image: "images/placeholder.jpg"
    },
    {
        id: 52,
        name: "Forsthaus Dümmer",
        address: "Dümmer (Ludwigslust-Parchim) - Forstweg 12 - Forsthof",
        city: "Dümmer",
        year_built: "",
        architect: "",
        building_condition: "",
        heritage_value: "",
        building_history: "",
        description: "",
        sources_literature: "",
        images: "images/placeholder.jpg",
        main_image: "images/placeholder.jpg"
    },
    {
        id: 53,
        name: "Scheune Dümmer",
        address: "Dümmer (Ludwigslust-Parchim) - Forstweg 12 - Forsthof",
        city: "Dümmer",
        year_built: "",
        architect: "",
        building_condition: "",
        heritage_value: "",
        building_history: "",
        description: "",
        sources_literature: "",
        images: "images/placeholder.jpg",
        main_image: "images/placeholder.jpg"
    },
    {
        id: 54,
        name: "Stall Dümmer",
        address: "Dümmer (Ludwigslust-Parchim) - Forstweg 12 - Forsthof",
        city: "Dümmer",
        year_built: "",
        architect: "",
        building_condition: "",
        heritage_value: "Foto",
        building_history: "",
        description: "",
        sources_literature: "",
        images: "images/placeholder.jpg",
        main_image: "images/placeholder.jpg"
    },
    {
        id: 55,
        name: "Backhaus Dümmer",
        address: "Dümmer (Ludwigslust-Parchim) - Forstweg 12 - Forsthof",
        city: "Dümmer",
        year_built: "",
        architect: "",
        building_condition: "",
        heritage_value: "",
        building_history: "",
        description: "",
        sources_literature: "",
        images: "images/placeholder.jpg",
        main_image: "images/placeholder.jpg"
    },
    {
        id: 56,
        name: "Einfriedung Dümmer",
        address: "Dümmer (Ludwigslust-Parchim) - Forstweg 12 - Forsthof",
        city: "Dümmer",
        year_built: "",
        architect: "",
        building_condition: "",
        heritage_value: "-",
        building_history: "",
        description: "",
        sources_literature: "",
        images: "images/placeholder.jpg",
        main_image: "images/placeholder.jpg"
    },
    {
        id: 57,
        name: "Forsthof Friedrichsmoor",
        address: "Friedrichsmoor, Neustadt-Glewe (Ludwigslust-Parchim) - Schloßallee 9 - Forsthaus",
        city: "Friedrichsmoor",
        year_built: "",
        architect: "",
        building_condition: "",
        heritage_value: "",
        building_history: "",
        description: "",
        sources_literature: "",
        images: "images/placeholder.jpg",
        main_image: "images/placeholder.jpg"
    },
    {
        id: 58,
        name: "Forsthaus Friedrichsmoor",
        address: "Friedrichsmoor, Neustadt-Glewe (Ludwigslust-Parchim) - Schloßallee 9 - Forsthaus",
        city: "Friedrichsmoor",
        year_built: "",
        architect: "",
        building_condition: "",
        heritage_value: "Innenaufnahmen",
        building_history: "",
        description: "",
        sources_literature: "",
        images: "images/placeholder.jpg",
        main_image: "images/placeholder.jpg"
    },
    {
        id: 59,
        name: "Scheune Friedrichsmoor",
        address: "Friedrichsmoor, Neustadt-Glewe (Ludwigslust-Parchim) - Schloßallee 9 - Forsthaus",
        city: "Friedrichsmoor",
        year_built: "",
        architect: "",
        building_condition: "",
        heritage_value: "",
        building_history: "",
        description: "",
        sources_literature: "",
        images: "images/placeholder.jpg",
        main_image: "images/placeholder.jpg"
    },
    {
        id: 60,
        name: "Stall Friedrichsmoor",
        address: "Friedrichsmoor, Neustadt-Glewe (Ludwigslust-Parchim) - Schloßallee 9 - Forsthaus",
        city: "Friedrichsmoor",
        year_built: "",
        architect: "",
        building_condition: "",
        heritage_value: "",
        building_history: "",
        description: "",
        sources_literature: "",
        images: "images/placeholder.jpg",
        main_image: "images/placeholder.jpg"
    },
    {
        id: 61,
        name: "Kühlhaus Friedrichsmoor",
        address: "Friedrichsmoor, Neustadt-Glewe (Ludwigslust-Parchim) - Schloßallee 9 - Forsthaus",
        city: "Friedrichsmoor",
        year_built: "",
        architect: "",
        building_condition: "",
        heritage_value: "",
        building_history: "",
        description: "",
        sources_literature: "",
        images: "images/placeholder.jpg",
        main_image: "images/placeholder.jpg"
    },
    {
        id: 62,
        name: "Eiskeller Friedrichsmoor",
        address: "Friedrichsmoor, Neustadt-Glewe (Ludwigslust-Parchim) - Schloßallee 9 - Forsthaus",
        city: "Friedrichsmoor",
        year_built: "",
        architect: "",
        building_condition: "",
        heritage_value: "Foto",
        building_history: "",
        description: "",
        sources_literature: "",
        images: "images/placeholder.jpg",
        main_image: "images/placeholder.jpg"
    },
    {
        id: 63,
        name: "Forsthaus Bahlenhüschen",
        address: "Bahlenhüschen, Tramm (Ludwigslust-Parchim) - Zum Forsthof 2 - Forsthaus",
        city: "Bahlenhüschen",
        year_built: "",
        architect: "",
        building_condition: "",
        heritage_value: "",
        building_history: "",
        description: "",
        sources_literature: "",
        images: "images/placeholder.jpg",
        main_image: "images/placeholder.jpg"
    },
    {
        id: 64,
        name: "Scheune Bahlenhüschen",
        address: "Bahlenhüschen, Tramm (Ludwigslust-Parchim) - Zum Forsthof 2 - Forsthaus",
        city: "Bahlenhüschen",
        year_built: "",
        architect: "",
        building_condition: "",
        heritage_value: "",
        building_history: "",
        description: "",
        sources_literature: "",
        images: "images/placeholder.jpg",
        main_image: "images/placeholder.jpg"
    },
    {
        id: 65,
        name: "Stall Bahlenhüschen",
        address: "Bahlenhüschen, Tramm (Ludwigslust-Parchim) - Zum Forsthof 2 - Forsthaus",
        city: "Bahlenhüschen",
        year_built: "",
        architect: "",
        building_condition: "",
        heritage_value: "",
        building_history: "",
        description: "",
        sources_literature: "",
        images: "images/placeholder.jpg",
        main_image: "images/placeholder.jpg"
    },
    {
        id: 66,
        name: "Stall Bahlenhüschen",
        address: "Bahlenhüschen, Tramm (Ludwigslust-Parchim) - Zum Forsthof 2 - Forsthaus",
        city: "Bahlenhüschen",
        year_built: "",
        architect: "",
        building_condition: "",
        heritage_value: "",
        building_history: "",
        description: "",
        sources_literature: "",
        images: "images/placeholder.jpg",
        main_image: "images/placeholder.jpg"
    },
    {
        id: 67,
        name: "Backhaus Bahlenhüschen",
        address: "Bahlenhüschen, Tramm (Ludwigslust-Parchim) - Zum Forsthof 2 - Forsthaus",
        city: "Bahlenhüschen",
        year_built: "",
        architect: "",
        building_condition: "",
        heritage_value: "",
        building_history: "",
        description: "",
        sources_literature: "",
        images: "images/placeholder.jpg",
        main_image: "images/placeholder.jpg"
    },
    {
        id: 68,
        name: "Fischhaus Bahlenhüschen",
        address: "Voigtsdorf, Parchim (Ludwigslust-Parchim) - Wirtschaftsgebäude",
        city: "Bahlenhüschen",
        year_built: "",
        architect: "",
        building_condition: "",
        heritage_value: "-",
        building_history: "",
        description: "",
        sources_literature: "",
        images: "images/placeholder.jpg",
        main_image: "images/placeholder.jpg"
    },
    {
        id: 69,
        name: "Forsthof Bahlenhüschen",
        address: "Spornitz (Ludwigslust-Parchim) - Friedensstraße 34 - Forsthof",
        city: "Bahlenhüschen",
        year_built: "",
        architect: "",
        building_condition: "",
        heritage_value: "",
        building_history: "",
        description: "",
        sources_literature: "",
        images: "images/placeholder.jpg",
        main_image: "images/placeholder.jpg"
    },
    {
        id: 70,
        name: "Scheune Bahlenhüschen",
        address: "Bahlenhüschen, Tramm (Ludwigslust-Parchim) - Zum Forsthof 2 - Forsthaus",
        city: "Bahlenhüschen",
        year_built: "",
        architect: "",
        building_condition: "",
        heritage_value: "Denkmalwertbegründung",
        building_history: "",
        description: "",
        sources_literature: "",
        images: "images/placeholder.jpg",
        main_image: "images/placeholder.jpg"
    },
    {
        id: 71,
        name: "Forsthof Bahlenhüschen",
        address: "Kremmin (Ludwigslust-Parchim) - Rosenstraße 22 - Forsthof",
        city: "Bahlenhüschen",
        year_built: "",
        architect: "",
        building_condition: "",
        heritage_value: "-",
        building_history: "",
        description: "",
        sources_literature: "",
        images: "images/placeholder.jpg",
        main_image: "images/placeholder.jpg"
    },
    {
        id: 72,
        name: "Scheune Bahlenhüschen",
        address: "Bahlenhüschen, Tramm (Ludwigslust-Parchim) - Zum Forsthof 2 - Forsthaus",
        city: "Bahlenhüschen",
        year_built: "",
        architect: "",
        building_condition: "",
        heritage_value: "(sehr kurz)",
        building_history: "",
        description: "",
        sources_literature: "",
        images: "images/placeholder.jpg",
        main_image: "images/placeholder.jpg"
    },
    {
        id: 73,
        name: "Scheune Bahlenhüschen",
        address: "Bahlenhüschen, Tramm (Ludwigslust-Parchim) - Zum Forsthof 2 - Forsthaus",
        city: "Bahlenhüschen",
        year_built: "",
        architect: "",
        building_condition: "",
        heritage_value: "(sehr kurz)",
        building_history: "",
        description: "",
        sources_literature: "",
        images: "images/placeholder.jpg",
        main_image: "images/placeholder.jpg"
    },
    {
        id: 74,
        name: "Forsthof Forsthaus ist nicht als Denkmal ausgewiesen?",
        address: "Jasnitz, Picher (Ludwigslust-Parchim) - Lange Straße 21 - Forsthof",
        city: "Jasnitz",
        year_built: "",
        architect: "",
        building_condition: "",
        heritage_value: "Restaurierungsdoku ausgewählte Innenräume",
        building_history: "",
        description: "",
        sources_literature: "",
        images: "images/placeholder.jpg",
        main_image: "images/placeholder.jpg"
    },
    {
        id: 75,
        name: "Wirtschaftsgebäude Jasnitz",
        address: "Jasnitz, Picher (Ludwigslust-Parchim) - Lange Straße 21 - Forsthof",
        city: "Jasnitz",
        year_built: "",
        architect: "",
        building_condition: "",
        heritage_value: "-",
        building_history: "",
        description: "",
        sources_literature: "",
        images: "images/placeholder.jpg",
        main_image: "images/placeholder.jpg"
    },
    {
        id: 76,
        name: "Scheune Jasnitz",
        address: "Jasnitz, Picher (Ludwigslust-Parchim) - Lange Straße 21 - Forsthof",
        city: "Jasnitz",
        year_built: "",
        architect: "",
        building_condition: "",
        heritage_value: "-",
        building_history: "",
        description: "",
        sources_literature: "",
        images: "images/placeholder.jpg",
        main_image: "images/placeholder.jpg"
    },
    {
        id: 77,
        name: "Wildfutterscheune Jasnitz",
        address: "Jasnitz, Picher (Ludwigslust-Parchim) - Lange Straße 21 - Forsthof",
        city: "Jasnitz",
        year_built: "",
        architect: "",
        building_condition: "",
        heritage_value: "",
        building_history: "",
        description: "",
        sources_literature: "",
        images: "images/placeholder.jpg",
        main_image: "images/placeholder.jpg"
    },
    {
        id: 78,
        name: "Wildfutterscheune Jasnitz",
        address: "Jasnitz, Picher (Ludwigslust-Parchim) - Lange Straße 21 - Forsthof",
        city: "Jasnitz",
        year_built: "",
        architect: "",
        building_condition: "",
        heritage_value: "",
        building_history: "",
        description: "",
        sources_literature: "",
        images: "images/placeholder.jpg",
        main_image: "images/placeholder.jpg"
    },
    {
        id: 79,
        name: "Forsthof Kraaker Mühle",
        address: "Kraaker Mühle, Rastow (Ludwigslust-Parchim) - Kraaker Mühle 1 - Forsthof",
        city: "Kraaker Mühle",
        year_built: "",
        architect: "",
        building_condition: "",
        heritage_value: "",
        building_history: "",
        description: "",
        sources_literature: "",
        images: "images/placeholder.jpg",
        main_image: "images/placeholder.jpg"
    },
    {
        id: 80,
        name: "Wohnhaus Kraaker Mühle",
        address: "Kraaker Mühle, Rastow (Ludwigslust-Parchim) - Kraaker Mühle 1 - Forsthof",
        city: "Kraaker Mühle",
        year_built: "",
        architect: "",
        building_condition: "",
        heritage_value: "-",
        building_history: "",
        description: "",
        sources_literature: "",
        images: "images/placeholder.jpg",
        main_image: "images/placeholder.jpg"
    },
    {
        id: 81,
        name: "Scheune Kraaker Mühle",
        address: "Kraaker Mühle, Rastow (Ludwigslust-Parchim) - Kraaker Mühle 1 - Forsthof",
        city: "Kraaker Mühle",
        year_built: "",
        architect: "",
        building_condition: "",
        heritage_value: "-",
        building_history: "",
        description: "",
        sources_literature: "",
        images: "images/placeholder.jpg",
        main_image: "images/placeholder.jpg"
    },
    {
        id: 82,
        name: "Forsthof Schildfeld",
        address: "Schildfeld, Vellahn (Ludwigslust-Parchim) - Dorfstraße - Forsthof",
        city: "Schildfeld",
        year_built: "",
        architect: "",
        building_condition: "",
        heritage_value: "-",
        building_history: "",
        description: "",
        sources_literature: "",
        images: "images/placeholder.jpg",
        main_image: "images/placeholder.jpg"
    },
    {
        id: 83,
        name: "Forsthaus Schildfeld",
        address: "Schildfeld, Vellahn (Ludwigslust-Parchim) - Dorfstraße - Forsthof",
        city: "Schildfeld",
        year_built: "",
        architect: "",
        building_condition: "",
        heritage_value: "Literaturhinweis",
        building_history: "",
        description: "",
        sources_literature: "",
        images: "images/placeholder.jpg",
        main_image: "images/placeholder.jpg"
    },
    {
        id: 84,
        name: "Scheune Schildfeld",
        address: "Schildfeld, Vellahn (Ludwigslust-Parchim) - Dorfstraße - Forsthof",
        city: "Schildfeld",
        year_built: "",
        architect: "",
        building_condition: "",
        heritage_value: "",
        building_history: "",
        description: "",
        sources_literature: "",
        images: "images/placeholder.jpg",
        main_image: "images/placeholder.jpg"
    },
    {
        id: 85,
        name: "Stall Schildfeld",
        address: "Schildfeld, Vellahn (Ludwigslust-Parchim) - Dorfstraße - Forsthof",
        city: "Schildfeld",
        year_built: "",
        architect: "",
        building_condition: "",
        heritage_value: "",
        building_history: "",
        description: "",
        sources_literature: "",
        images: "images/placeholder.jpg",
        main_image: "images/placeholder.jpg"
    },
    {
        id: 86,
        name: "Forsthof Klein Laasch",
        address: "Klein Laasch, Neustadt-Glewe (Ludwigslust-Parchim) - Hauptstraße 11 - Forsthaus",
        city: "Klein Laasch",
        year_built: "",
        architect: "",
        building_condition: "",
        heritage_value: "-",
        building_history: "",
        description: "",
        sources_literature: "",
        images: "images/placeholder.jpg",
        main_image: "images/placeholder.jpg"
    },
    {
        id: 87,
        name: "Forsthaus Klein Laasch",
        address: "Klein Laasch, Neustadt-Glewe (Ludwigslust-Parchim) - Hauptstraße 11 - Forsthaus",
        city: "Klein Laasch",
        year_built: "",
        architect: "",
        building_condition: "",
        heritage_value: "-",
        building_history: "",
        description: "",
        sources_literature: "",
        images: "images/placeholder.jpg",
        main_image: "images/placeholder.jpg"
    },
    {
        id: 88,
        name: "Schuppen Klein Laasch",
        address: "Klein Laasch, Neustadt-Glewe (Ludwigslust-Parchim) - Hauptstraße 11 - Forsthaus",
        city: "Klein Laasch",
        year_built: "",
        architect: "",
        building_condition: "",
        heritage_value: "-",
        building_history: "",
        description: "",
        sources_literature: "",
        images: "images/placeholder.jpg",
        main_image: "images/placeholder.jpg"
    },
    {
        id: 89,
        name: "Forstsamendarre Jatznick",
        address: "Jatznick (Vorpommern-Greifswald) - Rothemühler Chaussee 1a - Darre",
        city: "Jatznick",
        year_built: "",
        architect: "",
        building_condition: "",
        heritage_value: "",
        building_history: "",
        description: "",
        sources_literature: "",
        images: "images/placeholder.jpg",
        main_image: "images/placeholder.jpg"
    }
];

// Globale Variablen
let filteredBuildings = [...buildingsData];
let displayedCount = 0;
const ITEMS_PER_PAGE = 12;

// DOM-Elemente
const searchInput = document.getElementById('searchInput');
const conditionFilter = document.getElementById('conditionFilter');
const cityFilter = document.getElementById('cityFilter');
const buildingsGrid = document.getElementById('buildingsGrid');
const loadMoreBtn = document.getElementById('loadMoreBtn');
const resultCount = document.getElementById('resultCount');

// Stadt-Filter befüllen
function populateCityFilter() {
    const cities = [...new Set(buildingsData.map(b => b.city).filter(c => c))].sort();
    cities.forEach(city => {
        const option = document.createElement('option');
        option.value = city;
        option.textContent = city;
        cityFilter.appendChild(option);
    });
}

// Status-Farbe bestimmen
function getStatusColor(condition) {
    const colors = {
        'Denkmalfachlich gelungene (Um)Nutzung': 'bg-emerald-100 text-emerald-800',
        'Erfolgreiche und solide Sicherung': 'bg-blue-100 text-blue-800',
        'Denkmalverträgliche Teilnutzung': 'bg-amber-100 text-amber-800',
        'Gefahr für den Bestand': 'bg-red-100 text-red-800'
    };
    return colors[condition] || 'bg-gray-100 text-gray-800';
}

// Gebäudekarte erstellen
function createBuildingCard(building) {
    const statusColor = getStatusColor(building.building_condition);
    const conditionBadge = building.building_condition 
        ? `<span class="inline-block px-2 py-1 text-xs font-medium rounded-full ${statusColor}">${building.building_condition}</span>` 
        : '';

    return `
        <a href="detail.html?id=${building.id}" class="block bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden border border-gray-100 group">
            <div class="aspect-[4/3] overflow-hidden bg-stone-100">
                <img src="${building.main_image}" alt="${building.name}" 
                     class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                     onerror="this.src='images/placeholder.jpg'">
            </div>
            <div class="p-4">
                <div class="flex flex-wrap gap-2 mb-2">
                    ${conditionBadge}
                </div>
                <h3 class="font-semibold text-stone-900 text-lg mb-1">${building.name}</h3>
                <p class="text-stone-500 text-sm">${building.city}${building.year_built ? ' · ' + building.year_built : ''}</p>
                ${building.heritage_value ? `<p class="text-stone-400 text-xs mt-2 line-clamp-2">${building.heritage_value}</p>` : ''}
            </div>
        </a>
    `;
}

// Gebäude filtern
function filterBuildings() {
    const searchTerm = searchInput.value.toLowerCase();
    const condition = conditionFilter.value;
    const city = cityFilter.value;

    filteredBuildings = buildingsData.filter(building => {
        const matchesSearch = !searchTerm || 
            building.name.toLowerCase().includes(searchTerm) ||
            building.city.toLowerCase().includes(searchTerm) ||
            building.address.toLowerCase().includes(searchTerm);

        const matchesCondition = !condition || building.building_condition === condition;
        const matchesCity = !city || building.city === city;

        return matchesSearch && matchesCondition && matchesCity;
    });

    displayedCount = 0;
    buildingsGrid.innerHTML = '';
    loadMore();

    resultCount.textContent = `${filteredBuildings.length} Gebäude gefunden`;
}

// Mehr Gebäude laden
function loadMore() {
    const toDisplay = filteredBuildings.slice(displayedCount, displayedCount + ITEMS_PER_PAGE);

    toDisplay.forEach(building => {
        buildingsGrid.innerHTML += createBuildingCard(building);
    });

    displayedCount += toDisplay.length;

    if (displayedCount >= filteredBuildings.length) {
        loadMoreBtn.classList.add('hidden');
    } else {
        loadMoreBtn.classList.remove('hidden');
    }
}

// Detailseite laden
function loadBuildingDetails(id) {
    const building = buildingsData.find(b => b.id == id);
    if (!building) return;

    // Titel
    document.getElementById('pageTitle').textContent = building.name + ' - Gebäudekatalog';
    document.getElementById('buildingTitle').textContent = building.name;

    // Status-Badges
    const statusBadges = document.getElementById('statusBadges');
    if (building.building_condition) {
        const color = getStatusColor(building.building_condition);
        statusBadges.innerHTML = `<span class="inline-block px-3 py-1 text-sm font-medium rounded-full ${color}">${building.building_condition}</span>`;
    }

    // Location
    const locationInfo = document.getElementById('locationInfo');
    locationInfo.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
        <span>${building.address}</span>
    `;

    // Grunddaten
    const basicData = document.getElementById('basicData');
    let basicHtml = '';
    if (building.year_built) basicHtml += createDataRow('Baujahr', building.year_built);
    if (building.architect) basicHtml += createDataRow('Architekt', building.architect);
    if (building.city) basicHtml += createDataRow('Ort', building.city);
    if (building.heritage_value) basicHtml += createDataRow('Denkmalwert', building.heritage_value);
    basicData.innerHTML = basicHtml || '<p class="text-stone-400 text-sm">Keine Grunddaten verfügbar</p>';

    // Beschreibungen
    document.getElementById('buildingHistory').textContent = building.building_history || 'Keine Angaben vorhanden.';
    document.getElementById('buildingDescription').textContent = building.description || 'Keine Angaben vorhanden.';
    document.getElementById('sourcesLiterature').textContent = building.sources_literature || 'Keine Angaben vorhanden.';

    // Hauptbild
    const mainImg = document.querySelector('#mainImage img');
    if (mainImg) {
        mainImg.src = building.main_image;
        mainImg.onerror = function() { this.src = 'images/placeholder.jpg'; };
    }

    // Thumbnails
    const thumbnailGallery = document.getElementById('thumbnailGallery');
    if (thumbnailGallery && building.images) {
        const imgs = building.images.split(';').filter(i => i.trim());
        thumbnailGallery.innerHTML = imgs.map((img, idx) => `
            <div class="aspect-square rounded-lg overflow-hidden cursor-pointer border-2 ${idx === 0 ? 'border-[#3e822c]' : 'border-transparent'} hover:border-[#3e822c] transition-colors"
                 onclick="document.querySelector('#mainImage img').src='${img}'">
                <img src="${img}" class="w-full h-full object-cover" onerror="this.src='images/placeholder.jpg'">
            </div>
        `).join('');
    }
}

function createDataRow(label, value) {
    return `
        <div class="flex justify-between py-2 border-b border-stone-100 last:border-0">
            <span class="text-stone-500 text-sm">${label}</span>
            <span class="text-stone-900 text-sm font-medium text-right">${value}</span>
        </div>
    `;
}

// Event-Listener
if (searchInput) searchInput.addEventListener('input', filterBuildings);
if (conditionFilter) conditionFilter.addEventListener('change', filterBuildings);
if (cityFilter) cityFilter.addEventListener('change', filterBuildings);
if (loadMoreBtn) loadMoreBtn.addEventListener('click', loadMore);

// Initialisierung
document.addEventListener('DOMContentLoaded', () => {
    if (cityFilter) populateCityFilter();
    if (buildingsGrid) filterBuildings();
});
