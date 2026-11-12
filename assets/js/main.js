(function () {
  const storageKey = "bdv-lang";
  const supported = ["nl", "en", "fr"];

  const t = {
    nl: {
      navAbout: "De zaak",
      navKitchen: "De keuken",
      navVisit: "Bezoek",
      navContact: "Contact",
      callShort: "Bellen",
      reserve: "Reserveer telefonisch",
      hoursCta: "Openingstijden",
      heroEyebrow: "Oostduinkerke · Koksijde",
      heroLead:
        "Van een uitgebreid ontbijt tot lunch, pannenkoeken of een avond aan tafel. Een brasserie aan zee, op een kleine wandeling van het strand.",
      aboutTitle: "Een brasserie aan zee",
      about1:
        "Sinds 2022 is Da Vinci een brasserie en tearoom in Oostduinkerke, aan de Leopold II-laan. Gasten komen er voor een warme sfeer en persoonlijke bediening: ’s ochtends voor ontbijt en koffie, overdag voor lunch, en tot in de vroege avond voor een maaltijd of iets te drinken.",
      about2:
        "In een toegankelijke, ongecompliceerde sfeer vindt u een uitgebreide kaart met klassieke brasseriegerechten en een ruime keuze aan dranken. Bij mooi weer zit u buiten op het terras; binnen is er airconditioning.",
      factYear: "Sinds 2022",
      factYearSub: "brasserie en tearoom",
      factWalk: "5 minuten",
      factWalkSub: "wandelen van het strand",
      factTerrace: "Zonneterras",
      factTerraceSub: "zitplaatsen buiten",
      factAir: "Airconditioning",
      factAirSub: "comfortabel bij elk weer",
      photoCaption: "De zaak, gezien vanaf de Leopold II-laan. Foto van de officiële toerismefiche — ter bevestiging.",
      kitchenTitle: "De keuken",
      kitchenLead:
        "De kaart volgt wat u van een kustbrasserie mag verwachten, de hele dag door. Een volledige actuele menukaart met prijzen volgt nog; hieronder wat publiek bekend is.",
      cardBreakfast: "Ontbijt & brunch",
      cardBreakfastText:
        "Uitgebreide ontbijtformules met vers brood en pistolets, hartig en zoet beleg, warme eieren, yoghurt, koffiekoekjes, koffie en thee. Vaak met een glas cava erbij.",
      cardLunch: "Lunch & avond",
      cardLunchText:
        "Burgers en brasserieklassiekers, dagschotels, pannenkoeken en wafels, en desserts zoals dame blanche. Er zijn ook vegetarische opties.",
      cardDrinks: "Dranken",
      cardDrinksText:
        "Koffie, bier, wijn en cocktails. Op de drankenkaart staan onder meer gin, rum en whisky. U bent ook welkom voor alleen iets te drinken.",
      stockNote: "Sfeerfoto (stock), niet in de zaak genomen.",
      quotesTitle: "Wat gasten zeggen",
      q1: "“What a breakfast!”",
      q1src: "Google-review, april 2023",
      q2: "“Supervriendelijk, alles top! Wij komen zeker terug. Aanrader!”",
      q2src: "Gastreview via Spontaan",
      q3: "“Volledig luxe ontbijt in een mooie setting in Oostduinkerke Bad, een aanrader.”",
      q3src: "Gastreview via Spontaan",
      bandText: "Op een wandeling van het strand van Oostduinkerke",
      visitTitle: "Kom langs",
      hoursTitle: "Openingstijden",
      mon: "Maandag",
      tue: "Dinsdag",
      wed: "Woensdag",
      thu: "Donderdag",
      fri: "Vrijdag",
      sat: "Zaterdag",
      sun: "Zondag",
      closed: "Gesloten",
      hoursNote:
        "Deze uren komen uit recente online vermeldingen (onder meer Google-bronnen) en vragen nog een bevestiging. Bel gerust even na, vooral op feestdagen of in het laagseizoen.",
      weekendNote: "In drukke weekends is reserveren aangeraden.",
      addressLabel: "Adres",
      phoneLabel: "Telefoon",
      emailLabel: "E-mail",
      socialLabel: "Facebook",
      mapsReviews: "Beoordelingen op Google Maps",
      openMaps: "Open in Google Maps",
      interactiveMap: "Interactieve Google-kaart",
      mapTitle: "Kaart: Brasserie Da Vinci, Leopold II-laan 213, Oostduinkerke",
      footerLegal: "Brasserie Da Vinci · Leopold II-laan 213, 8670 Oostduinkerke (Koksijde)",
      credits:
        "Sfeerfoto’s (stock, niet ter plaatse): strandcabines bij zonsondergang en duinen aan de Belgische kust, en croissant — Pexels. Interieurfoto: officiële fiche van Westtoer / De Kust, gebruikt als placeholder ter bevestiging."
    },
    en: {
      navAbout: "About",
      navKitchen: "The kitchen",
      navVisit: "Visit",
      navContact: "Contact",
      callShort: "Call",
      reserve: "Book by phone",
      hoursCta: "Opening hours",
      heroEyebrow: "Oostduinkerke · Koksijde",
      heroLead:
        "From a generous breakfast to lunch, pancakes or an early evening meal. A seaside brasserie, a short walk from the beach.",
      aboutTitle: "A brasserie by the sea",
      about1:
        "Since 2022, Da Vinci has been a brasserie and tearoom in Oostduinkerke, on Leopold II-laan. Guests come for a warm atmosphere and personal service: breakfast and coffee in the morning, lunch during the day, and a meal or a drink into the early evening.",
      about2:
        "In an uncomplicated, welcoming setting you will find classic brasserie dishes and a wide choice of drinks. In fine weather you can sit on the outdoor terrace; indoors there is air conditioning.",
      factYear: "Since 2022",
      factYearSub: "brasserie and tearoom",
      factWalk: "5 minutes",
      factWalkSub: "walk from the beach",
      factTerrace: "Sunny terrace",
      factTerraceSub: "outdoor seating",
      factAir: "Air conditioning",
      factAirSub: "comfortable in any weather",
      photoCaption: "Inside the restaurant, looking towards Leopold II-laan. Photo from the official tourism listing — pending confirmation.",
      kitchenTitle: "The kitchen",
      kitchenLead:
        "The menu is what you would expect from a coastal brasserie, all day long. A full current menu with prices is still to be confirmed; this is what is publicly known.",
      cardBreakfast: "Breakfast & brunch",
      cardBreakfastText:
        "Generous breakfast formulas with fresh bread and pistolets, savoury and sweet toppings, hot eggs, yoghurt, pastries, coffee and tea. Often served with a glass of cava.",
      cardLunch: "Lunch & evening",
      cardLunchText:
        "Burgers and brasserie classics, daily specials, pancakes and waffles, and desserts such as dame blanche. Vegetarian options are also served.",
      cardDrinks: "Drinks",
      cardDrinksText:
        "Coffee, beer, wine and cocktails. The drinks list also includes gin, rum and whisky. You are welcome just for a drink.",
      stockNote: "Atmosphere photo (stock), not taken at the restaurant.",
      quotesTitle: "What guests say",
      q1: "“What a breakfast!”",
      q1src: "Google review, April 2023",
      q2: "“Supervriendelijk, alles top! Wij komen zeker terug. Aanrader!”",
      q2src: "Guest review via Spontaan",
      q3: "“A full luxury breakfast in a lovely setting in Oostduinkerke Bad — recommended.”",
      q3src: "Guest review via Spontaan",
      bandText: "A short walk from the beach at Oostduinkerke",
      visitTitle: "Visit us",
      hoursTitle: "Opening hours",
      mon: "Monday",
      tue: "Tuesday",
      wed: "Wednesday",
      thu: "Thursday",
      fri: "Friday",
      sat: "Saturday",
      sun: "Sunday",
      closed: "Closed",
      hoursNote:
        "These hours are taken from recent online listings (including Google-sourced directories) and still need confirmation. Please call ahead, especially on public holidays or out of season.",
      weekendNote: "Booking is recommended on busy weekends.",
      addressLabel: "Address",
      phoneLabel: "Phone",
      emailLabel: "Email",
      socialLabel: "Facebook",
      mapsReviews: "Reviews on Google Maps",
      openMaps: "Open in Google Maps",
      interactiveMap: "Interactive Google Map",
      mapTitle: "Map: Brasserie Da Vinci, Leopold II-laan 213, Oostduinkerke",
      footerLegal: "Brasserie Da Vinci · Leopold II-laan 213, 8670 Oostduinkerke (Koksijde)",
      credits:
        "Atmosphere photos (stock, not taken on site): beach cabins at sunset and dunes on the Belgian coast, and a croissant — Pexels. Interior photo: official Westtoer / De Kust listing, used as a placeholder pending confirmation."
    },
    fr: {
      navAbout: "La maison",
      navKitchen: "La cuisine",
      navVisit: "Venir",
      navContact: "Contact",
      callShort: "Appeler",
      reserve: "Réserver par téléphone",
      hoursCta: "Horaires",
      heroEyebrow: "Oostduinkerke · Koksijde",
      heroLead:
        "D’un petit-déjeuner copieux au déjeuner, aux crêpes ou à un dîner en début de soirée. Une brasserie au bord de la mer, à quelques minutes à pied de la plage.",
      aboutTitle: "Une brasserie face à la mer",
      about1:
        "Depuis 2022, Da Vinci est une brasserie et un salon de thé à Oostduinkerke, sur la Leopold II-laan. Les clients y viennent pour une ambiance chaleureuse et un service personnel : le matin pour le petit-déjeuner et le café, le jour pour le déjeuner, et en début de soirée pour un repas ou un verre.",
      about2:
        "Dans une atmosphère simple et accueillante, vous trouverez une carte de classiques de brasserie et un large choix de boissons. Par beau temps, installez-vous en terrasse ; à l’intérieur, la salle est climatisée.",
      factYear: "Depuis 2022",
      factYearSub: "brasserie et salon de thé",
      factWalk: "5 minutes",
      factWalkSub: "à pied de la plage",
      factTerrace: "Terrasse ensoleillée",
      factTerraceSub: "places assises à l’extérieur",
      factAir: "Climatisation",
      factAirSub: "confortable par tous les temps",
      photoCaption: "La salle, vue vers la Leopold II-laan. Photo de la fiche touristique officielle — à confirmer.",
      kitchenTitle: "La cuisine",
      kitchenLead:
        "La carte correspond à ce que l’on attend d’une brasserie côtière, toute la journée. Le menu complet et les prix actuels restent à confirmer ; voici ce qui est publiquement connu.",
      cardBreakfast: "Petit-déjeuner & brunch",
      cardBreakfastText:
        "Formules de petit-déjeuner généreuses avec du pain frais et des pistolets, garnitures salées et sucrées, œufs chauds, yaourt, viennoiseries, café et thé. Souvent accompagnées d’un verre de cava.",
      cardLunch: "Déjeuner & soir",
      cardLunchText:
        "Burgers et classiques de brasserie, plats du jour, crêpes et gaufres, et desserts comme la dame blanche. Des options végétariennes sont également proposées.",
      cardDrinks: "Boissons",
      cardDrinksText:
        "Café, bières, vins et cocktails. La carte des boissons comprend notamment du gin, du rhum et du whisky. Vous êtes aussi le bienvenu pour un verre seulement.",
      stockNote: "Photo d’ambiance (banque d’images), non prise dans l’établissement.",
      quotesTitle: "Ce qu’en disent les clients",
      q1: "“What a breakfast!”",
      q1src: "Avis Google, avril 2023",
      q2: "“Supervriendelijk, alles top! Wij komen zeker terug. Aanrader!”",
      q2src: "Avis client via Spontaan",
      q3: "“Un petit-déjeuner de luxe complet dans un joli cadre à Oostduinkerke Bad, à recommander.”",
      q3src: "Avis client via Spontaan",
      bandText: "À quelques minutes à pied de la plage d’Oostduinkerke",
      visitTitle: "Nous rendre visite",
      hoursTitle: "Horaires d’ouverture",
      mon: "Lundi",
      tue: "Mardi",
      wed: "Mercredi",
      thu: "Jeudi",
      fri: "Vendredi",
      sat: "Samedi",
      sun: "Dimanche",
      closed: "Fermé",
      hoursNote:
        "Ces horaires proviennent d’annonces en ligne récentes (notamment de sources Google) et restent à confirmer. N’hésitez pas à téléphoner, surtout les jours fériés ou hors saison.",
      weekendNote: "La réservation est conseillée les week-ends chargés.",
      addressLabel: "Adresse",
      phoneLabel: "Téléphone",
      emailLabel: "E-mail",
      socialLabel: "Facebook",
      mapsReviews: "Avis sur Google Maps",
      openMaps: "Ouvrir dans Google Maps",
      interactiveMap: "Carte Google interactive",
      mapTitle: "Carte : Brasserie Da Vinci, Leopold II-laan 213, Oostduinkerke",
      footerLegal: "Brasserie Da Vinci · Leopold II-laan 213, 8670 Oostduinkerke (Koksijde)",
      credits:
        "Photos d’ambiance (banque d’images, non prises sur place) : cabines de plage au coucher du soleil et dunes de la côte belge, et croissant — Pexels. Photo d’intérieur : fiche officielle Westtoer / De Kust, utilisée comme visuel provisoire à confirmer."
    }
  };

  function apply(lang) {
    if (!supported.includes(lang)) lang = "nl";
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (t[lang][key] != null) el.textContent = t[lang][key];
    });
    document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
      const key = el.getAttribute("data-i18n-aria");
      if (t[lang][key] != null) el.setAttribute("aria-label", t[lang][key]);
    });
    document.querySelectorAll(".lang button").forEach((btn) => {
      btn.setAttribute("aria-pressed", btn.dataset.lang === lang ? "true" : "false");
    });
    const map = document.getElementById("map-frame");
    if (map) {
      const hl = lang === "fr" ? "fr" : lang === "en" ? "en" : "nl";
      const base =
        "https://www.google.com/maps?q=Brasserie+Da+Vinci+Oostduinkerke.,+Leopold+II+Laan+213,+8670+Koksijde,+Belgium&ftid=0x47dcbd2e27e5c8ab:0x97b5489a400d7640&z=16&output=embed";
      map.src = base + "&hl=" + hl;
      if (t[lang].mapTitle) map.title = t[lang].mapTitle;
    }
    try { localStorage.setItem(storageKey, lang); } catch (e) {}
  }

  function initLang() {
    let lang = "nl";
    try {
      const saved = localStorage.getItem(storageKey);
      if (supported.includes(saved)) lang = saved;
    } catch (e) {}
    apply(lang);
  }

  document.querySelectorAll(".lang button").forEach((btn) => {
    btn.addEventListener("click", () => apply(btn.dataset.lang));
  });

  const toggle = document.querySelector(".menu-toggle");
  const mobile = document.querySelector(".mobile-nav");
  if (toggle && mobile) {
    toggle.addEventListener("click", () => {
      const open = mobile.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    mobile.querySelectorAll("a").forEach((a) => {
      a.addEventListener("click", () => {
        mobile.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  initLang();
})();
