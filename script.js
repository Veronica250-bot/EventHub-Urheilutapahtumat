// Tapahtumadata: Jalkapallo, jääkiekko ja lentopallo Uudellamaalla vuonna 2025
const events = [
    // Jalkapallo
    { 
        id: "1", 
        sport: "Jalkapallo", 
        name: "Jalkapallo: HJK vs Inter", 
        date: "15.5.2025", 
        time: "18:00", 
        location: "Helsinki", 
        venue: "Telia 5G Areena", 
        ticketPrice: "25€", 
        description: "Kauden avausottelu HJK:n kotikentällä. Luvassa tiukka kamppailu!", 
        url: "https://www.hjk.fi",
        youtubeUrl: "https://www.youtube.com/embed/bpKDKPmiOns?si=r9Zy-8CYci9xf56Y" // HJK:n virallinen video
    },
    { 
        id: "2", 
        sport: "Jalkapallo", 
        name: "Jalkapallo: PK-35 vs Gnistan", 
        date: "22.5.2025", 
        time: "17:30", 
        location: "Vantaa", 
        venue: "Myyrmäen stadion", 
        ticketPrice: "20€", 
        description: "Kiihkeä derby Vantaalla. Tule kannustamaan!", 
        url: "https://www.pk-35.fi",
        youtubeUrl: "https://www.youtube.com/embed/0iSRbfbLAss?si=FnalzJfo6gcHp1ci" // Esimerkki PK-35:n videosta
    },
    { 
        id: "3", 
        sport: "Jalkapallo", 
        name: "Jalkapallo: HJK vs KuPS", 
        date: "10.6.2025", 
        time: "18:00", 
        location: "Helsinki", 
        venue: "Telia 5G Areena", 
        ticketPrice: "25€", 
        description: "Kesäkauden huippuottelu HJK:n kotikentällä.", 
        url: "https://www.hjk.fi",
        youtubeUrl: "https://www.youtube.com/embed/bpKDKPmiOns?si=r9Zy-8CYci9xf56Y" // HJK:n virallinen video
    },
    { 
        id: "4", 
        sport: "Jalkapallo", 
        name: "Jalkapallo: HJK vs SJK", 
        date: "15.7.2025", 
        time: "18:00", 
        location: "Helsinki", 
        venue: "Telia 5G Areena", 
        ticketPrice: "25€", 
        description: "Kesän huippuottelu HJK:n kotikentällä.", 
        url: "https://www.hjk.fi",
        youtubeUrl: "https://www.youtube.com/embed/bpKDKPmiOns?si=r9Zy-8CYci9xf56Y" // HJK:n virallinen video
    },
    { 
        id: "5", 
        sport: "Jalkapallo", 
        name: "Jalkapallo: Gnistan vs FC Lahti", 
        date: "5.10.2025", 
        time: "17:00", 
        location: "Vantaa", 
        venue: "Myyrmäen stadion", 
        ticketPrice: "20€", 
        description: "Kauden loppuhuipennus Vantaalla.", 
        url: "https://www.gnistan.fi",
        youtubeUrl: "https://www.youtube.com/embed/m-JFodBLUu4?si=kZiPKnwNpdMw1FEC" // Esimerkki Gnistanin videosta 
    },
    { 
        id: "6", 
        sport: "Jalkapallo", 
        name: "Jalkapallo: Gnistan vs VPS", 
        date: "20.11.2025", 
        time: "17:00", 
        location: "Vantaa", 
        venue: "Myyrmäen stadion", 
        ticketPrice: "20€", 
        description: "Syyskauden päätös Vantaalla.", 
        url: "https://www.gnistan.fi",
        youtubeUrl: "https://www.youtube.com/embed/m-JFodBLUu4?si=kZiPKnwNpdMw1FEC" // Esimerkki Gnistanin videosta 
    },
    { 
        id: "7", 
        sport: "Jalkapallo", 
        name: "Jalkapallo: HJK vs Ilves", 
        date: "25.6.2025", 
        time: "18:00", 
        location: "Helsinki", 
        venue: "Telia 5G Areena", 
        ticketPrice: "25€", 
        description: "Kesäkauden jännittävä ottelu HJK:n kotikentällä.", 
        url: "https://www.hjk.fi",
        youtubeUrl: "https://www.youtube.com/embed/bpKDKPmiOns?si=r9Zy-8CYci9xf56Y" // HJK:n virallinen video
    },
    { 
        id: "8", 
        sport: "Jalkapallo", 
        name: "Jalkapallo: FC Honka vs AC Oulu", 
        date: "18.8.2025", 
        time: "17:30", 
        location: "Espoo", 
        venue: "Tapiolan urheilupuisto", 
        ticketPrice: "20€", 
        description: "Espoon paikallisottelu, jossa Honka haastaa AC Oulun.", 
        url: "https://www.fchonka.fi",
        youtubeUrl: "https://www.youtube.com/embed/c6ONZoC2YXE?si=ui4aaEU4C6LbK631" // Esimerkki FC Honka -videosta
    },
    { 
        id: "9", 
        sport: "Jalkapallo", 
        name: "Jalkapallo: PK-35 vs FC Haka", 
        date: "12.9.2025", 
        time: "17:00", 
        location: "Vantaa", 
        venue: "Myyrmäen stadion", 
        ticketPrice: "20€", 
        description: "Syyskauden ottelu Vantaalla. Tule kannustamaan PK-35:ttä!", 
        url: "https://www.pk-35.fi",
        youtubeUrl: "https://www.youtube.com/embed/0iSRbfbLAss?si=FnalzJfo6gcHp1ci" // Esimerkki PK-35:n videosta (korvaa oikealla)
    },

    // Jääkiekko
    { 
        id: "10", 
        sport: "Jääkiekko", 
        name: "Jääkiekko: HIFK vs Kärpät", 
        date: "20.5.2025", 
        time: "18:30", 
        location: "Helsinki", 
        venue: "Helsingin jäähalli", 
        ticketPrice: "35€", 
        description: "Kiihkeä paikallisottelu jäähallissa. Älä missaa tätä klassikkoa!", 
        url: "https://www.hifk.fi",
        youtubeUrl: "https://www.youtube.com/embed/0q7TvaX9QYE" // HIFK:n virallinen video
    },
    { 
        id: "11", 
        sport: "Jääkiekko", 
        name: "Jääkiekko: Jokerit vs Tappara", 
        date: "15.9.2025", 
        time: "18:30", 
        location: "Helsinki", 
        venue: "Helsingin jäähalli", 
        ticketPrice: "30€", 
        description: "Syyskauden avaus. Tule nauttimaan kiekkoviihteestä!", 
        url: "https://www.jokerit.fi",
        youtubeUrl: "https://www.youtube.com/embed/EXlNaInJYBk?si=GOK1fF8x0fLV4Uph" // Esimerkki Jokereiden videosta
    },
    { 
        id: "12", 
        sport: "Jääkiekko", 
        name: "Jääkiekko: HIFK vs Ilves", 
        date: "20.11.2025", 
        time: "18:30", 
        location: "Helsinki", 
        venue: "Helsingin jäähalli", 
        ticketPrice: "35€", 
        description: "Talven klassikko. Luvassa jännittävä ottelu!", 
        url: "https://www.hifk.fi",
        youtubeUrl: "https://www.youtube.com/embed/0q7TvaX9QYE" // HIFK:n virallinen video
    },
    { 
        id: "13", 
        sport: "Jääkiekko", 
        name: "Jääkiekko: Jokerit vs Lukko", 
        date: "25.12.2025", 
        time: "17:00", 
        location: "Helsinki", 
        venue: "Helsingin jäähalli", 
        ticketPrice: "30€", 
        description: "Joulun peli. Tule nauttimaan kiekkoviihteestä!", 
        url: "https://www.jokerit.fi",
        youtubeUrl: "https://www.youtube.com/embed/EXlNaInJYBk?si=GOK1fF8x0fLV4Uph" // Esimerkki Jokereiden videosta 
    },
    { 
        id: "14", 
        sport: "Jääkiekko", 
        name: "Jääkiekko: Kärpät vs TPS", 
        date: "10.10.2025", 
        time: "18:30", 
        location: "Helsinki", 
        venue: "Helsingin jäähalli", 
        ticketPrice: "30€", 
        description: "Vieraspeli Helsingissä. Tule kannustamaan!", 
        url: "https://www.karpat.fi",
        youtubeUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" // Esimerkki Kärppien videosta (korvaa oikealla)
    },
    { 
        id: "15", 
        sport: "Jääkiekko", 
        name: "Jääkiekko: HIFK vs Pelicans", 
        date: "5.6.2025", 
        time: "18:30", 
        location: "Helsinki", 
        venue: "Helsingin jäähalli", 
        ticketPrice: "35€", 
        description: "Kesäkauden ottelu. Luvassa viihdyttävä ilta!", 
        url: "https://www.hifk.fi",
        youtubeUrl: "https://www.youtube.com/embed/0q7TvaX9QYE" // HIFK:n virallinen video
    },
    { 
        id: "16", 
        sport: "Jääkiekko", 
        name: "Jääkiekko: Jokerit vs SaiPa", 
        date: "18.10.2025", 
        time: "18:30", 
        location: "Helsinki", 
        venue: "Helsingin jäähalli", 
        ticketPrice: "30€", 
        description: "Syyskauden ottelu. Tule kannustamaan Jokereita!", 
        url: "https://www.jokerit.fi",
        youtubeUrl: "https://www.youtube.com/embed/EXlNaInJYBk?si=GOK1fF8x0fLV4Uph" // Esimerkki Jokereiden videosta (korvaa oikealla)
    },

    // Lentopallo
    { 
        id: "17", 
        sport: "Lentopallo", 
        name: "Lentopallo: Vuosaaren Viikingit vs Korson Veto", 
        date: "18.5.2025", 
        time: "17:00", 
        location: "Helsinki", 
        venue: "Kallahden palloiluhalli", 
        ticketPrice: "15€", 
        description: "Paikallinen lentopalloderby Kallahden palloiluhallissa.", 
        url: "https://www.lentopallo.fi",
        youtubeUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" // Esimerkki lentopallon videosta (korvaa oikealla)
    },
    { 
        id: "18", 
        sport: "Lentopallo", 
        name: "Lentopallo: Helsinki Volley vs Vantaan Lentis", 
        date: "12.6.2025", 
        time: "16:30", 
        location: "Helsinki", 
        venue: "Myllypuron halli", 
        ticketPrice: "10€", 
        description: "Kesäkauden lentopalloturnaus Myllypuron hallissa.", 
        url: "https://www.lentopallo.fi",
        youtubeUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" // Esimerkki lentopallon videosta (korvaa oikealla)
    },
    { 
        id: "19", 
        sport: "Lentopallo", 
        name: "Lentopallo: Beach Club Tournament", 
        date: "25.9.2025", 
        time: "12:00", 
        location: "Helsinki", 
        venue: "Biitsi, Pasila", 
        ticketPrice: "5€", 
        description: "Rantalentopalloturnaus Biitsillä, Pasilassa. Kesäinen tunnelma!", 
        url: "https://www.biitsi.fi",
        youtubeUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" // Esimerkki lentopallon videosta (korvaa oikealla)
    },
    { 
        id: "20", 
        sport: "Lentopallo", 
        name: "Lentopallo: Korson Veto vs Rekolan Raikas", 
        date: "15.12.2025", 
        time: "16:00", 
        location: "Vantaa", 
        venue: "Kaivokselan koulu", 
        ticketPrice: "10€", 
        description: "Joulukuun lentopalloturnaus Kaivokselan koululla.", 
        url: "https://www.lentopallo.fi",
        youtubeUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" // Esimerkki lentopallon videosta (korvaa oikealla)
    },
    { 
        id: "21", 
        sport: "Lentopallo", 
        name: "Lentopallo: PKS Höntsäpelit Turnaus", 
        date: "5.11.2025", 
        time: "14:00", 
        location: "Vantaa", 
        venue: "Länsi-Vantaa", 
        ticketPrice: "5€", 
        description: "Harrastelijoiden lentopalloturnaus Länsi-Vantaalla.", 
        url: "https://www.lentopallo.fi",
        youtubeUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" // Esimerkki lentopallon videosta (korvaa oikealla)
    },
    { 
        id: "22", 
        sport: "Lentopallo", 
        name: "Lentopallo: Helsinki Volley vs Espoo Lentopallo", 
        date: "20.10.2025", 
        time: "17:00", 
        location: "Helsinki", 
        venue: "Myllypuron halli", 
        ticketPrice: "10€", 
        description: "Syyskauden ottelu. Tule kannustamaan Helsinki Volleyta!", 
        url: "https://www.lentopallo.fi",
        youtubeUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" // Esimerkki lentopallon videosta (korvaa oikealla)
    },
    { 
        id: "23", 
        sport: "Lentopallo", 
        name: "Lentopallo: Vantaan Lentis vs Korson Veto", 
        date: "15.7.2025", 
        time: "16:30", 
        location: "Vantaa", 
        venue: "Myyrmäen urheilutalo", 
        ticketPrice: "10€", 
        description: "Kesäkauden ottelu Vantaalla. Luvassa jännittävä peli!", 
        url: "https://www.lentopallo.fi",
        youtubeUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" // Esimerkki lentopallon videosta (korvaa oikealla)
    }
];

// Etusivun tapahtumalista ja suodatus
let currentSport = "all";

function getCurrentSport() {
    return currentSport;
}

// Näytä tapahtumat etusivulla
if (document.getElementById("eventList")) {
    function displayEvents(sportFilter, monthFilter) {
        const eventList = document.getElementById("eventList");
        eventList.innerHTML = "";
        let filteredEvents = events;

        currentSport = sportFilter;

        // Suodata urheilulajin mukaan
        if (sportFilter === "favorites") {
            const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
            filteredEvents = filteredEvents.filter(event => favorites.includes(event.id));
        } else if (sportFilter !== "all") {
            filteredEvents = filteredEvents.filter(event => event.sport.toLowerCase() === sportFilter.toLowerCase());
        }

        // Suodata kuukauden mukaan
        if (monthFilter !== "all") {
            filteredEvents = filteredEvents.filter(event => event.date.includes(monthFilter));
        }

        // Suodata hakutermin mukaan
        const searchFilter = document.getElementById("searchFilter").value.toLowerCase();
        if (searchFilter) {
            filteredEvents = filteredEvents.filter(event => 
                event.name.toLowerCase().includes(searchFilter) ||
                event.location.toLowerCase().includes(searchFilter) ||
                event.venue.toLowerCase().includes(searchFilter) ||
                event.date.toLowerCase().includes(searchFilter)
            );
        }

        // Lajittelu
        const sortFilter = document.getElementById("sortFilter").value;
        if (sortFilter === "date-asc") {
            filteredEvents.sort((a, b) => new Date(a.date.split(".").reverse().join("-")) - new Date(b.date.split(".").reverse().join("-")));
        } else if (sortFilter === "date-desc") {
            filteredEvents.sort((a, b) => new Date(b.date.split(".").reverse().join("-")) - new Date(a.date.split(".").reverse().join("-")));
        } else if (sortFilter === "price-asc") {
            filteredEvents.sort((a, b) => parseFloat(a.ticketPrice) - parseFloat(b.ticketPrice));
        } else if (sortFilter === "price-desc") {
            filteredEvents.sort((a, b) => parseFloat(b.ticketPrice) - parseFloat(a.ticketPrice));
        }

        // Näytä tapahtumakortit
        if (filteredEvents.length === 0) {
            eventList.innerHTML = "<p>Ei tapahtumia valituilla suodattimilla.</p>";
        } else {
            filteredEvents.forEach(event => {
                const eventCard = `
                    <div class="event-item">
                        <a href="event.html?id=${event.id}&sport=${sportFilter}&month=${monthFilter}" class="text-decoration-none text-dark">
                            <h3>${event.name}</h3>
                            <p><strong>Päivämäärä:</strong> ${event.date}${event.time ? ` klo ${event.time}` : ""}</p>
                            <p><strong>Paikka:</strong> ${event.venue}, ${event.location} 
                                <a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(event.venue + ', ' + event.location)}" target="_blank" class="btn btn-sm btn-outline-primary">Näytä kartalla</a>
                            </p>
                            <p><strong>Lipun hinta:</strong> ${event.ticketPrice}</p>
                            <p><strong>Kuvaus:</strong> ${event.description}</p>
                        </a>
                        <button class="btn btn-sm btn-outline-success favorite-btn" onclick="toggleFavorite('${event.id}')">
                            ${isFavorite(event.id) ? "Poista suosikeista" : "Lisää suosikkeihin"}
                        </button>
                    </div>
                `;
                eventList.innerHTML += eventCard;
            });
        }

        // Päivitä URL-parametrit
        const newUrl = `${window.location.pathname}?sport=${sportFilter}&month=${monthFilter}`;
        window.history.pushState({}, '', newUrl);
    }

    // Lue URL-parametrit sivun latautuessa
    const urlParams = new URLSearchParams(window.location.search);
    const initialSport = urlParams.get("sport") || "all";
    const initialMonth = urlParams.get("month") || "all";
    currentSport = initialSport;

    // Aseta suodatusvalikot
    const monthFilter = document.getElementById("monthFilter");
    monthFilter.value = initialMonth;

    // Näytä tapahtumat
    displayEvents(initialSport, initialMonth);
}

// Suodatustoiminto
function filterEvents(sport, month) {
    displayEvents(sport, month);
}

// Tapahtuman lisätietosivu ja YouTube-videon upotus
if (document.getElementById("eventDetails")) {
    const urlParams = new URLSearchParams(window.location.search);
    const eventId = urlParams.get("id");
    const sportFilter = urlParams.get("sport") || "all";
    const monthFilter = urlParams.get("month") || "all";
    const event = events.find(e => e.id === eventId);

    if (event) {
        document.getElementById("eventDetails").innerHTML = `
            <div class="card-body">
                <h2>${event.name}</h2>
                <p><strong>Päivämäärä:</strong> ${event.date}${event.time ? ` klo ${event.time}` : ""}</p>
                <p><strong>Paikka:</strong> ${event.venue}, ${event.location}</p>
                <p><strong>Lipun hinta:</strong> ${event.ticketPrice}</p>
                <p><strong>Kuvaus:</strong> ${event.description}</p>
                <a href="${event.url}" target="_blank" class="btn btn-primary">Lisätietoja</a>
            </div>
        `;
        document.getElementById("backLink").href = `index.html?sport=${sportFilter}&month=${monthFilter}`;

        // Upota YouTube-video
        const youtubeVideo = document.getElementById("youtubeVideo");
        if (event.youtubeUrl) {
            youtubeVideo.innerHTML = `
                <h3>Joukkueen tai liigan video</h3>
                <iframe width="100%" height="315" src="${event.youtubeUrl}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            `;
        } else {
            youtubeVideo.innerHTML = "<p>Ei videota saatavilla.</p>";
        }
    } else {
        document.getElementById("eventDetails").innerHTML = `
            <div class="card-body">
                <p>Tapahtumaa ei löydy. <a href="index.html">Palaa etusivulle</a>.</p>
            </div>
        `;
    }
}

// Suosikit-toiminto
function toggleFavorite(eventId) {
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    if (favorites.includes(eventId)) {
        favorites = favorites.filter(id => id !== eventId);
    } else {
        favorites.push(eventId);
    }
    localStorage.setItem("favorites", JSON.stringify(favorites));
    displayEvents(currentSport, document.getElementById("monthFilter").value); // Päivitä näkymä
}

function isFavorite(eventId) {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    return favorites.includes(eventId);
}

// Takaisin ylös -painike
window.onscroll = function() {
    const button = document.getElementById("scrollToTop");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
};

document.getElementById("scrollToTop").onclick = function() {
    window.scrollTo({ top: 0, behavior: "smooth" });
};
