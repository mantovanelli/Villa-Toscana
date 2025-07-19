// Dati del menu
const menuData = {
    pizzas: [
        {
            image: "src/assets/pizza-margherita.jpg",
            name: "Pizza Margherita",
            description: "La classica pizza italiana con pomodoro San Marzano, mozzarella di bufala DOP e basilico fresco",
            price: "€12.00"
        },
        {
            image: "src/assets/pizza-napoletana.jpg",
            name: "Pizza Napoletana",
            description: "Autentica pizza napoletana con bordi alti, pomodoro, mozzarella di bufala e basilico",
            price: "€14.00"
        },
        {
            image: "src/assets/pizza-quattro-stagioni.jpg",
            name: "Pizza Quattro Stagioni",
            description: "Prosciutto cotto, funghi porcini, carciofi e olive nere con mozzarella",
            price: "€16.00"
        },
        {
            image: "src/assets/pizza-diavola.jpg",
            name: "Pizza Diavola",
            description: "Salame piccante calabrese, mozzarella, pomodoro e peperoncini freschi",
            price: "€15.00"
        },
        {
            image: "src/assets/pizza-capricciosa.jpg",
            name: "Pizza Capricciosa",
            description: "Prosciutto cotto, funghi, carciofi, olive e mozzarella",
            price: "€15.50"
        },
        {
            image: "src/assets/pizza-quattro-formaggi.jpg",
            name: "Pizza Quattro Formaggi",
            description: "Mozzarella, gorgonzola DOP, parmigiano reggiano e fontina valdostana",
            price: "€14.50"
        },
        {
            image: "src/assets/pizza-marinara.jpg",
            name: "Pizza Marinara",
            description: "La più semplice e tradizionale: pomodoro, aglio, origano e olio extravergine",
            price: "€10.00"
        },
        {
            image: "src/assets/pizza-prosciutto-funghi.jpg",
            name: "Pizza Prosciutto e Funghi",
            description: "Prosciutto cotto di alta qualità e funghi porcini con mozzarella",
            price: "€14.00"
        }
    ],
    
    antipasti: [
        {
            image: "src/assets/insalata-caprese.jpg",
            name: "Insalata Caprese",
            description: "Mozzarella di bufala DOP, pomodori maturi, basilico fresco e olio extravergine toscano",
            price: "€9.00"
        },
        {
            image: "src/assets/insalatona-mista.jpg",
            name: "Insalatona della Casa",
            description: "Mix di insalate fresche, pomodorini, olive, mozzarella e prosciutto crudo",
            price: "€11.00"
        },
        {
            image: "src/assets/caesar-salad.jpg",
            name: "Caesar Salad",
            description: "Lattuga romana, crostini dorati, parmigiano grattugiato e salsa Caesar",
            price: "€10.50"
        }
    ],
    
    dolci: [
        {
            image: "src/assets/tiramisu.jpg",
            name: "Tiramisù",
            description: "Il dolce italiano per eccellenza con savoiardi, mascarpone, caffè e cacao",
            price: "€6.00"
        },
        {
            image: "src/assets/cannoli.jpg",
            name: "Cannoli Siciliani",
            description: "Croccanti cialde ripiene di ricotta dolce e gocce di cioccolato",
            price: "€5.50"
        },
        {
            image: "src/assets/panna-cotta.jpg",
            name: "Panna Cotta ai Frutti di Bosco",
            description: "Dolce cremoso con coulis di frutti di bosco freschi",
            price: "€5.00"
        },
        {
            image: "src/assets/gelato.jpg",
            name: "Gelato Artigianale",
            description: "Tre palline di gelato artigianale (vaniglia, cioccolato, pistacchio)",
            price: "€4.50"
        }
    ]
};

// Dati delle bevande
const drinksData = {
    caffetteria: [
        { name: "Espresso", price: "€1.50" },
        { name: "Cappuccino", price: "€2.00" },
        { name: "Caffè Americano", price: "€2.50" },
        { name: "Macchiato", price: "€1.80" },
        { name: "Caffè Corretto", price: "€2.50" }
    ],
    
    bibite: [
        { name: "Coca Cola", price: "€3.00" },
        { name: "Aranciata San Pellegrino", price: "€3.00" },
        { name: "Limonata San Pellegrino", price: "€3.00" },
        { name: "Acqua Naturale 1L", price: "€2.50" },
        { name: "Acqua Frizzante 1L", price: "€2.50" }
    ],
    
    birre: [
        { name: "Peroni Nastro Azzurro", price: "€4.00" },
        { name: "Moretti alla Spina", price: "€3.50" },
        { name: "Corona Extra", price: "€4.50" },
        { name: "Birra Artigianale IPA", price: "€5.00" }
    ],
    
    vini: [
        { name: "Chianti Classico DOCG (calice)", price: "€5.00" },
        { name: "Prosecco di Valdobbiadene DOCG", price: "€4.50" },
        { name: "Pinot Grigio delle Venezie IGT", price: "€4.00" },
        { name: "Sangiovese di Toscana IGT", price: "€4.50" },
        { name: "Limoncello (bicchierino)", price: "€3.00" }
    ]
};

// Funzione per creare una card del menu
function createMenuCard(item) {
    const card = document.createElement('div');
    card.className = 'menu-card fade-in';
    
    card.innerHTML = `
        <img src="${item.image}" alt="${item.name}" class="menu-card-image" onerror="this.src='https://via.placeholder.com/300x200?text=Immagine+non+disponibile'">
        <div class="menu-card-content">
            <h3 class="menu-card-name">${item.name}</h3>
            <p class="menu-card-description">${item.description}</p>
            <div class="menu-card-price">${item.price}</div>
        </div>
    `;
    
    return card;
}

// Funzione per creare un elemento della lista bevande
function createDrinkItem(item) {
    const drinkItem = document.createElement('div');
    drinkItem.className = 'drink-item';
    
    drinkItem.innerHTML = `
        <span class="drink-name">${item.name}</span>
        <span class="drink-price">${item.price}</span>
    `;
    
    return drinkItem;
}

// Funzione per popolare una sezione del menu
function populateMenuSection(sectionId, items) {
    const container = document.getElementById(sectionId);
    if (!container) return;
    
    // Aggiungi un indicatore di caricamento
    container.innerHTML = '<div class="loading"><div class="spinner"></div></div>';
    
    // Simula un piccolo delay per il caricamento
    setTimeout(() => {
        container.innerHTML = '';
        items.forEach((item, index) => {
            const card = createMenuCard(item);
            // Aggiungi un piccolo delay per l'animazione
            setTimeout(() => {
                container.appendChild(card);
            }, index * 100);
        });
    }, 500);
}

// Funzione per popolare le sezioni bevande
function populateDrinksSection(sectionId, items) {
    const container = document.getElementById(sectionId);
    if (!container) return;
    
    items.forEach(item => {
        const drinkItem = createDrinkItem(item);
        container.appendChild(drinkItem);
    });
}

// Funzione per gestire gli errori delle immagini
function handleImageError(img) {
    img.src = 'https://via.placeholder.com/300x200?text=Immagine+non+disponibile';
    img.alt = 'Immagine non disponibile';
}

// Funzione per aggiungere animazioni al scroll
function addScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, {
        threshold: 0.1
    });
    
    // Osserva tutte le sezioni
    document.querySelectorAll('.section').forEach(section => {
        observer.observe(section);
    });
}

// Funzione per aggiungere effetti hover interattivi
function addInteractiveEffects() {
    // Effetto parallax leggero per l'header
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const header = document.querySelector('.header');
        if (header) {
            header.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });
    
    // Effetto hover per le card del menu
    document.addEventListener('mouseover', (e) => {
        if (e.target.closest('.menu-card')) {
            e.target.closest('.menu-card').style.transform = 'translateY(-8px) scale(1.03)';
        }
    });
    
    document.addEventListener('mouseout', (e) => {
        if (e.target.closest('.menu-card')) {
            e.target.closest('.menu-card').style.transform = 'translateY(0) scale(1)';
        }
    });
}

// Funzione per aggiungere smooth scrolling
function addSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Funzione per ottimizzare le performance
function optimizePerformance() {
    // Lazy loading per le immagini
    const images = document.querySelectorAll('img');
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => {
        if (img.dataset.src) {
            imageObserver.observe(img);
        }
    });
}

// Funzione principale di inizializzazione
function init() {
    console.log('Inizializzazione Villa Toscana...');
    
    // Popola le sezioni del menu
    populateMenuSection('pizzas-grid', menuData.pizzas);
    populateMenuSection('antipasti-grid', menuData.antipasti);
    populateMenuSection('dolci-grid', menuData.dolci);
    
    // Popola le sezioni bevande
    populateDrinksSection('caffetteria-list', drinksData.caffetteria);
    populateDrinksSection('bibite-list', drinksData.bibite);
    populateDrinksSection('birre-list', drinksData.birre);
    populateDrinksSection('vini-list', drinksData.vini);
    
    // Aggiungi animazioni e effetti
    setTimeout(() => {
        addScrollAnimations();
        addInteractiveEffects();
        addSmoothScrolling();
        optimizePerformance();
    }, 1000);
    
    console.log('Villa Toscana caricata con successo!');
}

// Avvia l'applicazione quando il DOM è pronto
document.addEventListener('DOMContentLoaded', init);

// Gestione degli errori globali
window.addEventListener('error', (e) => {
    console.error('Errore nell\'applicazione:', e.error);
});

// Aggiungi supporto per dispositivi touch
document.addEventListener('touchstart', () => {
    document.body.classList.add('touch-device');
});

// Funzione per aggiornare il menu (utile per future estensioni)
function updateMenu(newMenuData) {
    Object.assign(menuData, newMenuData);
    init();
}

// Esporta funzioni per uso futuro
window.VillaToscana = {
    init,
    updateMenu,
    menuData,
    drinksData
};