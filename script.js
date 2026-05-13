// ============================================
// Building Catalog JavaScript
// ============================================

let allBuildings = [];
let filteredBuildings = [];
let currentPage = 1;
let isLoading = false;

// Responsive: Auf Mobil nur 8 pro Ladung, sonst 12
const buildingsPerPage = window.innerWidth < 640 ? 8 : 12;

let currentFilters = {
    search: '',
    condition: '',
    city: ''
};

// ============================================
// DATA LOADING
// ============================================

async function loadBuildingsData() {
    try {
        const response = await fetch('buildings.csv');
        
        if (!response.ok) {
            throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }
        
        const csvText = await response.text();
        const buildings = parseCSV(csvText);

        if (buildings.length === 0) {
            throw new Error('CSV ist leer');
        }

        allBuildings = buildings;
        filteredBuildings = buildings;

        initializeFilters(buildings);
        displayBuildings(buildings.slice(0, buildingsPerPage));
        updateResultCount();
        updateLoadMoreButton(buildings.length);
        initInfiniteScroll();

        console.log('✅ CSV geladen:', allBuildings.length, 'Gebäude');

    } catch (error) {
        console.log('⚠️ CSV nicht verfügbar, nutze eingebettete Daten:', error.message);
        
        const buildings = getEmbeddedBuildingsData();
        allBuildings = buildings;
        filteredBuildings = buildings;

        initializeFilters(buildings);
        displayBuildings(buildings.slice(0, buildingsPerPage));
        updateResultCount();
        updateLoadMoreButton(buildings.length);
        initInfiniteScroll();

        console.log('✅ Embedded Daten geladen:', allBuildings.length, 'Gebäude');
    }
}

// ============================================
// EMBEDDED DATA (Fallback)
// ============================================

function getEmbeddedBuildingsData() {
    return [
        {
            id: 1,
            name: 'Forsthaus Mirow',
            address: 'Schlossstraße 1, Mirow',
            city: 'Mirow',
            year_built: '1895',
            architect: 'Georg Adolph Demmler',
            building_condition: 'Denkmalfachlich gelungene (Um)Nutzung',
            heritage_value: 'Das Gebäude ist ein charakteristisches Beispiel für die Forstverwaltungsarchitektur des späten 19. Jahrhunderts in Mecklenburg-Vorpommern.',
            building_history: 'Das Forsthaus Mirow wurde 1895 im neugotischen Stil errichtet und diente ursprünglich als Wohn- und Verwaltungssitz des Oberförsters. Das Gebäude zeigt typische Merkmale der mecklenburgischen Forstarchitektur mit Fachwerkkonstruktion und Ziegeldach.',
            description: 'Das Forsthaus Mirow ist ein zweigeschossiges Gebäude mit Satteldach und repräsentativer Fassade. Es verfügt über eine Grundfläche von ca. 200 m² und wurde 1895 im neugotischen Stil erbaut. Das Gebäude steht unter Denkmalschutz und wird heute als Wohnhaus genutzt.',
            sources_literature: 'Landesamt für Kultur und Denkmalpflege MV, www.denkmal-mv.de; Forstamt Mirow, www.wald-mv.de',
            images: ['images/placeholder.jpg', 'images/placeholder.jpg', 'images/placeholder.jpg'],
            main_image: 'images/placeholder.jpg'
        },
        {
            id: 2,
            name: 'Oberförsterei Feldberg',
            address: 'Forstweg 5, Feldberg',
            city: 'Feldberg',
            year_built: '1902',
            architect: 'Paul Korff',
            building_condition: 'Erfolgreiche und solide Sicherung',
            heritage_value: 'Das Gebäude repräsentiert die Entwicklung der staatlichen Forstverwaltung im Deutschen Kaiserreich.',
            building_history: 'Die Oberförsterei Feldberg wurde 1902 als Verwaltungssitz für den Feldberger Forst errichtet. Das Gebäude diente der Unterbringung von Forstbeamten und der Verwaltung des umliegenden Waldes.',
            description: 'Die Oberförsterei Feldberg ist ein eingeschossiges Gebäude mit Mansarddach und umlaufender Veranda. Erbaut 1902 im Stil der Heimatschutzarchitektur, verfügt es über eine Nutzfläche von ca. 150 m². Das Gebäude wird heute als Forstamt genutzt.',
            sources_literature: 'Landesforst MV - Forstamt Feldberg, www.wald-mv.de; Denkmalinventar Feldberg',
            images: ['images/placeholder.jpg', 'images/placeholder.jpg'],
            main_image: 'images/placeholder.jpg'
        },
        {
            id: 3,
            name: 'Forsthaus Serrahn',
            address: 'Am See 12, Serrahn',
            city: 'Serrahn',
            year_built: '1887',
            architect: 'Wilhelm Wroost',
            building_condition: 'Denkmalverträgliche Teilnutzung',
            heritage_value: 'Das Forsthaus Serrahn ist ein wichtiges Zeugnis der forstlichen Kolonisation Mecklenburgs im 19. Jahrhundert.',
            building_history: 'Das Forsthaus Serrahn wurde 1887 als Teil der forstlichen Erschließung des Müritzgebietes erbaut. Es diente der Bewirtschaftung der umliegenden Waldflächen und der Unterbringung von Forstpersonal.',
            description: 'Das Forsthaus Serrahn ist ein eingeschossiges Gebäude mit Krüppelwalmdach und Fachwerkkonstruktion. Erbaut 1887, verfügt es über eine Grundfläche von ca. 120 m². Das Gebäude steht unter Denkmalschutz und wird privat genutzt.',
            sources_literature: 'Landesamt für Kultur und Denkmalpflege MV; Forstamt Serrahn',
            images: ['images/placeholder.jpg', 'images/placeholder.jpg', 'images/placeholder.jpg', 'images/placeholder.jpg'],
            main_image: 'images/placeholder.jpg'
        },
        {
            id: 4,
            name: 'Waldarbeiterhaus Basedow',
            address: 'Forststraße 8, Basedow',
            city: 'Basedow',
            year_built: '1910',
            architect: 'Heinrich Schulz',
            building_condition: 'Gefahr für den Bestand',
            heritage_value: 'Das Waldarbeiterhaus Basedow dokumentiert die Lebens- und Arbeitsbedingungen der Forstarbeiter im frühen 20. Jahrhundert.',
            building_history: 'Das Waldarbeiterhaus Basedow wurde 1910 für die Unterbringung von Waldarbeitern und deren Familien errichtet. Es ist Teil eines Ensembles von Forstgebäuden aus der Zeit der intensiven Forstwirtschaft.',
            description: 'Das Waldarbeiterhaus Basedow ist ein zweigeschossiges Mehrfamilienhaus mit Satteldach. Erbaut 1910, verfügt es über 6 Wohnungen mit je ca. 60 m². Das Gebäude ist sanierungsbedürftig und steht unter Denkmalschutz.',
            sources_literature: 'Denkmalpflegeamt Rostock; Forstamt Basedow',
            images: ['images/placeholder.jpg', 'images/placeholder.jpg'],
            main_image: 'images/placeholder.jpg'
        },
        {
            id: 5,
            name: 'Forstmeisterhaus Waren',
            address: 'Seestraße 15, Waren (Müritz)',
            city: 'Waren (Müritz)',
            year_built: '1898',
            architect: 'Fritz Behnke',
            building_condition: 'Denkmalfachlich gelungene (Um)Nutzung',
            heritage_value: 'Das Forstmeisterhaus Waren zeigt die architektonische Entwicklung der Forstverwaltung von der Gründerzeit zum Jugendstil.',
            building_history: 'Das Forstmeisterhaus Waren wurde 1898 als Wohnsitz des Forstmeisters errichtet. Das Gebäude war Teil der großherzoglichen Forstverwaltung Mecklenburg-Strelitz.',
            description: 'Das Forstmeisterhaus Waren ist ein zweigeschossiges Gebäude mit Walmdach und repräsentativer Fassadengestaltung. Erbaut 1898 im Stil der Neorenaissance, verfügt es über eine Nutzfläche von ca. 180 m². Das Gebäude wird heute als Büro genutzt.',
            sources_literature: 'Landesforst MV - Forstamt Waren; Stadtarchiv Waren',
            images: ['images/placeholder.jpg', 'images/placeholder.jpg', 'images/placeholder.jpg'],
            main_image: 'images/placeholder.jpg'
        },
        {
            id: 6,
            name: 'Jägerhaus Rechlin',
            address: 'Am Wald 3, Rechlin',
            city: 'Rechlin',
            year_built: '1905',
            architect: 'Otto Peters',
            building_condition: 'Erfolgreiche und solide Sicherung',
            heritage_value: 'Das Jägerhaus Rechlin ist ein typisches Beispiel für die kleineren Forstgebäude der Region.',
            building_history: 'Das Jägerhaus Rechlin wurde 1905 als Unterkunft für den Revierjäger errichtet. Es diente der Überwachung der Jagd und der forstlichen Aufsicht.',
            description: 'Das Jägerhaus Rechlin ist ein eingeschossiges Gebäude mit Satteldach und seitlichem Anbau. Erbaut 1905, verfügt es über eine Grundfläche von ca. 80 m². Das Gebäude wird heute als Ferienhaus genutzt.',
            sources_literature: 'Forstamt Rechlin; Gemeinde Rechlin',
            images: ['images/placeholder.jpg', 'images/placeholder.jpg'],
            main_image: 'images/placeholder.jpg'
        }
    ];
}

// ============================================
// CSV PARSING
// ============================================

function parseCSV(csvText) {
    const lines = csvText.trim().split('\n');
    if (lines.length < 2) return getEmbeddedBuildingsData();
    
    const headers = lines[0].split(',').map(h => h.trim().replace(/^["']|["']$/g, ''));

    const buildings = [];
    for (let i = 1; i < lines.length; i++) {
        const line = lines[i].trim();
        if (!line) continue;
        
        const values = parseCSVLine(line);
        if (values.length >= headers.length) {
            const building = {};
            headers.forEach((header, index) => {
                let value = values[index] ? values[index].trim() : '';

                if (value.startsWith('"') && value.endsWith('"')) {
                    value = value.slice(1, -1).replace(/""/g, '"');
                }
                if (value.startsWith("'") && value.endsWith("'")) {
                    value = value.slice(1, -1).replace(/''/g, "'");
                }

                if (header === 'images') {
                    building[header] = value ? value.split(';').map(url => url.trim()).filter(url => url) : [];
                } else if (header === 'id') {
                    building[header] = parseInt(value) || i;
                } else {
                    building[header] = value;
                }
            });
            buildings.push(building);
        }
    }
    return buildings.length > 0 ? buildings : getEmbeddedBuildingsData();
}

function parseCSVLine(line) {
    const result = [];
    let current = '';
    let inQuotes = false;
    let quoteChar = null;

    for (let i = 0; i < line.length; i++) {
        const char = line[i];
        const nextChar = line[i + 1];

        if (!inQuotes && (char === '"' || char === "'")) {
            inQuotes = true;
            quoteChar = char;
        } else if (inQuotes && char === quoteChar) {
            if (nextChar === quoteChar) {
                current += char;
                i++;
            } else {
                inQuotes = false;
                quoteChar = null;
            }
        } else if (char === ',' && !inQuotes) {
            result.push(current);
            current = '';
        } else {
            current += char;
        }
    }

    result.push(current);
    return result;
}

// ============================================
// FILTERS
// ============================================

function initializeFilters(buildings) {
    const cities = [...new Set(buildings.map(b => b.city).filter(Boolean))].sort();
    const conditions = [...new Set(buildings.map(b => b.building_condition).filter(Boolean))].sort();

    const cityFilter = document.getElementById('cityFilter');
    const conditionFilter = document.getElementById('conditionFilter');

    if (!cityFilter || !conditionFilter) return;

    cityFilter.innerHTML = '<option value="">Alle Orte</option>';
    cities.forEach(city => {
        const option = document.createElement('option');
        option.value = city;
        option.textContent = city;
        cityFilter.appendChild(option);
    });

    conditionFilter.innerHTML = '<option value="">Alle Bauzustände</option>';
    conditions.forEach(condition => {
        const option = document.createElement('option');
        option.value = condition;
        option.textContent = condition;
        conditionFilter.appendChild(option);
    });
}

function filterBuildings() {
    if (!allBuildings || allBuildings.length === 0) {
        console.error('❌ Keine Gebäude geladen!');
        return;
    }

    const searchTerm = (currentFilters.search || '').trim().toLowerCase();
    const conditionFilter = (currentFilters.condition || '').trim().toLowerCase();
    const cityFilter = (currentFilters.city || '').trim().toLowerCase();

    console.log('🔍 Filtere mit:', { search: searchTerm, condition: conditionFilter, city: cityFilter });

    filteredBuildings = allBuildings.filter(building => {
        const name = (building.name || '').toLowerCase();
        const city = (building.city || '').toLowerCase();
        const description = (building.description || '').toLowerCase();
        const condition = (building.building_condition || '').toLowerCase();

        const matchesSearch = !searchTerm ||
            name.includes(searchTerm) ||
            city.includes(searchTerm) ||
            description.includes(searchTerm);

        const matchesCondition = !conditionFilter || condition === conditionFilter;
        const matchesCity = !cityFilter || city === cityFilter;

        return matchesSearch && matchesCondition && matchesCity;
    });

    currentPage = 1;
    displayBuildings(filteredBuildings.slice(0, buildingsPerPage));
    updateResultCount();
    updateLoadMoreButton(filteredBuildings.length);

    console.log('✅ Gefilterte Ergebnisse:', filteredBuildings.length);
}

// ============================================
// DISPLAY & LAZY LOADING
// ============================================

function displayBuildings(buildingsToShow, append = false) {
    const grid = document.getElementById('buildingsGrid');
    if (!grid) return;

    if (!append) {
        grid.innerHTML = '';
    }

    if (!buildingsToShow || buildingsToShow.length === 0) {
        if (!append) {
            grid.innerHTML = `
                <div class="col-span-full text-center py-12">
                    <div class="text-gray-400 mb-4">
                        <svg class="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                        </svg>
                    </div>
                    <h3 class="text-lg font-medium text-gray-900 mb-2">Keine Gebäude gefunden</h3>
                    <p class="text-gray-500">Versuchen Sie andere Suchkriterien.</p>
                </div>
            `;
        }
        return;
    }

    const fragment = document.createDocumentFragment();
    
    buildingsToShow.forEach(building => {
        const card = createBuildingCard(building);
        fragment.appendChild(card);
    });

    grid.appendChild(fragment);
}

function createBuildingCard(building) {
    const card = document.createElement('div');
    card.className = 'building-card bg-white rounded-lg shadow-sm overflow-hidden cursor-pointer hover:shadow-md transition-shadow';
    card.onclick = () => window.location.href = `detail.html?id=${encodeURIComponent(building.name)}`;

    const conditionColor = getConditionColor(building.building_condition);

    card.innerHTML = `
        <div class="relative aspect-[4/3] bg-stone-100 overflow-hidden">
            <img src="${building.main_image || 'images/placeholder.jpg'}"
                 alt="${building.name}"
                 class="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                 onerror="this.src='images/placeholder.jpg'"
                 loading="lazy">
            <div class="absolute top-4 left-4">
                <span class="condition-badge px-3 py-1.5 bg-white/90 backdrop-blur-sm text-xs font-medium ${conditionColor} rounded-full shadow-sm">
                    ${building.building_condition || 'Unbekannt'}
                </span>
            </div>
        </div>
        <div class="p-6">
            <h3 class="font-semibold text-lg text-gray-900 mb-2 line-clamp-1">${building.name}</h3>
            <div class="flex items-center gap-4 text-sm text-gray-600 mb-3">
                <div class="flex items-center gap-1.5">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                    <span>${building.city || 'Unbekannt'}</span>
                </div>
                <div class="flex items-center gap-1.5">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                    </svg>
                    <span>${building.year_built || 'Unbekannt'}</span>
                </div>
            </div>
            <p class="text-sm text-gray-700 line-clamp-2 leading-relaxed">${building.description || 'Keine Beschreibung verfügbar'}</p>
        </div>
    `;

    return card;
}

function getConditionColor(condition) {
    const colors = {
        'Denkmalfachlich gelungene (Um)Nutzung': 'text-green-700 bg-green-50',
        'Erfolgreiche und solide Sicherung': 'text-blue-700 bg-blue-50',
        'Denkmalverträgliche Teilnutzung': 'text-yellow-700 bg-yellow-50',
        'Gefahr für den Bestand': 'text-red-700 bg-red-50'
    };
    return colors[condition] || 'text-gray-700 bg-gray-50';
}

function updateResultCount() {
    const countElement = document.getElementById('resultCount');
    if (countElement) {
        const total = filteredBuildings ? filteredBuildings.length : 0;
        countElement.textContent = `${total} Gebäude gefunden`;
    }
}

function updateLoadMoreButton(totalBuildings) {
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    if (!loadMoreBtn) return;

    const shown = currentPage * buildingsPerPage;
    const total = totalBuildings || (filteredBuildings ? filteredBuildings.length : 0);
    
    if (total > shown) {
        loadMoreBtn.classList.remove('hidden');
        loadMoreBtn.innerHTML = `Mehr laden (${total - shown} übrig)`;
        loadMoreBtn.disabled = false;
    } else {
        loadMoreBtn.classList.add('hidden');
    }
}

function loadMoreBuildings() {
    if (isLoading) return;
    
    const shown = currentPage * buildingsPerPage;
    const total = filteredBuildings.length;
    
    if (shown >= total) {
        updateLoadMoreButton(total);
        return;
    }

    isLoading = true;
    
    const btn = document.getElementById('loadMoreBtn');
    if (btn) {
        btn.innerHTML = '<span class="inline-block animate-spin mr-2">⟳</span> Lädt...';
        btn.disabled = true;
    }

    setTimeout(() => {
        currentPage++;
        const start = (currentPage - 1) * buildingsPerPage;
        const end = currentPage * buildingsPerPage;
        const newBuildings = filteredBuildings.slice(start, end);
        
        displayBuildings(newBuildings, true);
        
        isLoading = false;
        updateLoadMoreButton(total);
    }, 150);
}

// ============================================
// INFINITE SCROLL (Intersection Observer)
// ============================================

function initInfiniteScroll() {
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    if (!loadMoreBtn) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('hidden')) {
                loadMoreBuildings();
            }
        });
    }, {
        rootMargin: '200px',
        threshold: 0.1
    });

    observer.observe(loadMoreBtn);
}

// ============================================
// DETAIL PAGE
// ============================================

async function loadBuildingDetails(buildingId) {
    if (!buildingId) {
        showError('Keine Gebäude-ID angegeben');
        return;
    }

    try {
        const response = await fetch('buildings.csv');
        let buildings = [];
        
        if (response.ok) {
            const csvText = await response.text();
            buildings = parseCSV(csvText);
        } else {
            buildings = getEmbeddedBuildingsData();
        }

        const building = buildings.find(b => b.name === buildingId || b.id == buildingId);
        
        if (!building) {
            throw new Error(`Gebäude "${buildingId}" nicht gefunden`);
        }

        displayBuildingDetails(building);

    } catch (error) {
        console.log('Fehler beim Laden der Details:', error);
        const buildings = getEmbeddedBuildingsData();
        const building = buildings.find(b => b.name === buildingId || b.id == buildingId);
        
        if (!building) {
            showError('Gebäude nicht gefunden');
            return;
        }

        displayBuildingDetails(building);
    }
}

function displayBuildingDetails(building) {
    const pageTitle = document.getElementById('pageTitle');
    if (pageTitle) {
        pageTitle.textContent = `${building.name} - Gebäudekatalog`;
    }

    const buildingTitle = document.getElementById('buildingTitle');
    if (buildingTitle) {
        buildingTitle.textContent = building.name;
    }

    const locationInfo = document.getElementById('locationInfo');
    if (locationInfo) {
        locationInfo.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin w-4 h-4">
                <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                <circle cx="12" cy="10" r="3"></circle>
            </svg>
            <span>${building.address || building.city || 'Unbekannt'}</span>
        `;
    }

    const statusBadges = document.getElementById('statusBadges');
    if (statusBadges) {
        const conditionColor = getConditionBadgeClass(building.building_condition);
        statusBadges.innerHTML = `
            <div class="inline-flex items-center rounded-md px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 shadow ${conditionColor}">
                ${building.building_condition || 'Unbekannt'}
            </div>
        `;
    }

    const basicData = document.getElementById('basicData');
    if (basicData) {
        basicData.innerHTML = `
            <div class="flex items-start gap-3 py-3 border-b border-[#154734]/10 last:border-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin w-5 h-5 text-[#3e822c] mt-0.5 flex-shrink-0">
                    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <div>
                    <div class="text-xs text-[#2d2a26]/40 uppercase tracking-wider mb-0.5">Standort</div>
                    <div class="text-[#2d2a26] font-medium">${building.address || 'Nicht verfügbar'}</div>
                </div>
            </div>
            <div class="flex items-start gap-3 py-3 border-b border-[#154734]/10 last:border-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-calendar w-5 h-5 text-[#3e822c] mt-0.5 flex-shrink-0">
                    <path d="M8 2v4"></path>
                    <path d="M16 2v4"></path>
                    <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                    <path d="M3 10h18"></path>
                </svg>
                <div>
                    <div class="text-xs text-[#2d2a26]/40 uppercase tracking-wider mb-0.5">Entstehungsjahr</div>
                    <div class="text-[#2d2a26] font-medium">${building.year_built || 'Unbekannt'}</div>
                </div>
            </div>
            <div class="flex items-start gap-3 py-3 border-b border-[#154734]/10 last:border-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user w-5 h-5 text-[#3e822c] mt-0.5 flex-shrink-0">
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                </svg>
                <div>
                    <div class="text-xs text-[#2d2a26]/40 uppercase tracking-wider mb-0.5">Architekt</div>
                    <div class="text-[#2d2a26] font-medium">${building.architect || 'Unbekannt'}</div>
                </div>
            </div>
            <div class="flex items-start gap-3 py-3 border-b border-[#154734]/10 last:border-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shield w-5 h-5 text-[#3e822c] mt-0.5 flex-shrink-0">
                    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                </svg>
                <div>
                    <div class="text-xs text-[#2d2a26]/40 uppercase tracking-wider mb-0.5">Bauzustand</div>
                    <div class="text-[#2d2a26] font-medium">${building.building_condition || 'Unbekannt'}</div>
                </div>
            </div>
            <div class="flex items-start gap-3 py-3 border-b border-[#154734]/10 last:border-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-landmark w-5 h-5 text-[#3e822c] mt-0.5 flex-shrink-0">
                    <line x1="3" x2="21" y1="22" y2="22"></line>
                    <line x1="6" x2="6" y1="18" y2="11"></line>
                    <line x1="10" x2="10" y1="18" y2="11"></line>
                    <line x1="14" x2="14" y1="18" y2="11"></line>
                    <line x1="18" x2="18" y1="18" y2="11"></line>
                    <polygon points="12 2 20 7 4 7"></polygon>
                </svg>
                <div>
                    <div class="text-xs text-[#2d2a26]/40 uppercase tracking-wider mb-0.5">Denkmalwert</div>
                    <div class="text-[#2d2a26] font-medium">${building.heritage_value || 'Keine Angabe'}</div>
                </div>
            </div>
        `;
    }

    const buildingHistory = document.getElementById('buildingHistory');
    if (buildingHistory) {
        buildingHistory.textContent = building.building_history || 'Keine Informationen verfügbar.';
    }

    const buildingDescription = document.getElementById('buildingDescription');
    if (buildingDescription) {
        buildingDescription.textContent = building.description || 'Keine detaillierte Beschreibung verfügbar.';
    }

    const sourcesLiterature = document.getElementById('sourcesLiterature');
    if (sourcesLiterature) {
        sourcesLiterature.textContent = building.sources_literature || `Landesforst MV - Forstamt ${building.city}, www.wald-mv.de`;
    }

    updateImageGallery(building);
}

function getConditionBadgeClass(condition) {
    const classes = {
        'Denkmalfachlich gelungene (Um)Nutzung': 'bg-[#91ae2d]/20 text-[#154734] hover:bg-[#91ae2d]/20 border border-[#154734]/20',
        'Erfolgreiche und solide Sicherung': 'bg-blue-100 text-blue-800 hover:bg-blue-100 border border-blue-200',
        'Denkmalverträgliche Teilnutzung': 'bg-yellow-100 text-yellow-800 hover:bg-yellow-100 border border-yellow-200',
        'Gefahr für den Bestand': 'bg-red-100 text-red-800 hover:bg-red-100 border border-red-200'
    };
    return classes[condition] || 'bg-gray-100 text-gray-800 hover:bg-gray-100 border border-gray-200';
}

function updateImageGallery(building) {
    const mainImageContainer = document.getElementById('mainImage');
    const thumbnailGallery = document.getElementById('thumbnailGallery');

    if (!mainImageContainer) return;

    const mainImage = mainImageContainer.querySelector('img');
    const mainImageSrc = building.main_image || (building.images && building.images[0]) || 'images/placeholder.jpg';
    
    if (mainImage) {
        mainImage.src = mainImageSrc;
        mainImage.alt = building.name;
    }

    if (thumbnailGallery && building.images && building.images.length > 1) {
        thumbnailGallery.innerHTML = building.images.slice(0, 4).map((image, index) => `
            <div class="aspect-square bg-stone-100 rounded-lg overflow-hidden cursor-pointer hover:opacity-80 transition-opacity"
                 onclick="changeMainImage('${image}', ${index})">
                <img src="${image}" alt="Bild ${index + 1}"
                     class="w-full h-full object-cover"
                     onerror="this.src='images/placeholder.jpg'"
                     loading="lazy">
            </div>
        `).join('');
    } else if (thumbnailGallery) {
        thumbnailGallery.innerHTML = '';
    }
}

function changeMainImage(imageSrc, index) {
    const mainImage = document.querySelector('#mainImage img');
    if (mainImage) {
        mainImage.src = imageSrc;
        mainImage.alt = `Bild ${index + 1}`;
    }
}

function openImageModal(imageSrc, index) {
    console.log('Bild angeklickt:', imageSrc);
}

function showError(message) {
    const main = document.querySelector('main');
    if (main) {
        main.innerHTML = `
            <div class="max-w-7xl mx-auto px-6 py-12 text-center">
                <div class="text-red-400 mb-4">
                    <svg class="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                </div>
                <h3 class="text-lg font-medium text-gray-900 mb-2">Fehler</h3>
                <p class="text-gray-500">${message}</p>
                <a href="index.html" class="inline-block mt-4 text-[#3e822c] hover:text-[#154734] font-medium">
                    ← Zurück zur Übersicht
                </a>
            </div>
        `;
    }
}

// ============================================
// EVENT LISTENERS
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    
    // INDEX PAGE
    if (document.getElementById('buildingsGrid')) {
        loadBuildingsData();

        const searchInput = document.getElementById('searchInput');
        if (searchInput) {
            searchInput.addEventListener('input', function(e) {
                currentFilters.search = e.target.value;
                filterBuildings();
            });
        }

        const conditionFilter = document.getElementById('conditionFilter');
        if (conditionFilter) {
            conditionFilter.addEventListener('change', function(e) {
                currentFilters.condition = e.target.value;
                filterBuildings();
            });
        }

        const cityFilter = document.getElementById('cityFilter');
        if (cityFilter) {
            cityFilter.addEventListener('change', function(e) {
                currentFilters.city = e.target.value;
                filterBuildings();
            });
        }

        const loadMoreBtn = document.getElementById('loadMoreBtn');
        if (loadMoreBtn) {
            loadMoreBtn.addEventListener('click', loadMoreBuildings);
        }
    }

    // DETAIL PAGE
    const urlParams = new URLSearchParams(window.location.search);
    const buildingId = urlParams.get('id');
    
    if (buildingId && document.getElementById('buildingTitle')) {
        loadBuildingDetails(buildingId);
    }
});