const STORAGE_KEY = "necom-email-signature-lab-v8";
const INTRO_STORAGE_KEY = "necom-email-signature-lab-intro-v1";
const MINIMAL_COLOR = "#d8dada";

const BRAND_PRESETS = [
  {
    id: "necom",
    name: "NECom",
    shortName: "NECom",
    websiteLabel: "www.necom.lv",
    websiteUrl: "https://www.necom.lv",
    accentColor: "#B59A71",
    textColor: "#111111",
    linkColor: "#B59A71",
    cardBg: "#111111",
    cardLogoVariant: "minimal",
    logoVariants: {
      black: "https://rimirigamarathon.com/wp-content/uploads/2026/02/necom.png",
      minimal: "https://rimirigamarathon.com/wp-content/uploads/2026/02/necom-1.png",
    },
    infoText: {
      en: {
        short: "Events that move, inspire, elevate Riga and Latvia.",
        full: "NECom is an event production, marketing and sponsorship agency creating experiences that are moving Riga and Latvia - literally and figuratively!",
      },
      lv: {
        short: "Notikumi, kas (ie)kustina Rīgu!",
        full: "Nords Event Communications (NECom) rada pieredzes, kas kustina, iedvesmo un ceļ Rīgu un Latviju.",
      },
    },
  },
  {
    id: "rrm",
    name: "Rimi Riga Marathon",
    shortName: "RRM",
    websiteLabel: "rimirigamarathon.com",
    websiteUrl: "https://rimirigamarathon.com/",
    accentColor: "#cc2128",
    textColor: "#111111",
    linkColor: "#cc2128",
    cardBg: "#cc2128",
    cardLogoVariant: "minimal",
    logoVariants: {
      black: "https://rimirigamarathon.com/wp-content/uploads/2025/02/RRM-logo-black.png",
      minimal: "https://rimirigamarathon.com/wp-content/uploads/2026/05/rrm-logo-2.png",
    },
    infoText: {
      en: {
        short: "Rimi Riga Marathon moves Riga and the Baltics.",
        full: "Rimi Riga Marathon is the biggest and most international running event in the Baltics, bringing runners and supporters together in Riga.",
      },
      lv: {
        short: "Rimi Rīgas maratons kustina Rīgu un Baltiju.",
        full: "Rimi Rīgas maratons ir lielākais un starptautiskākais skriešanas notikums Baltijā, kas Rīgā pulcē skrējējus un līdzjutējus.",
      },
    },
  },
  {
    id: "pink-noise",
    name: "Pink Noise Riga",
    shortName: "PNR",
    websiteLabel: "pinknoiseriga.com",
    websiteUrl: "https://pinknoiseriga.com/",
    accentColor: "#fa4100",
    textColor: "#111111",
    linkColor: "#fa4100",
    cardBg: "#fa4100",
    cardLogoVariant: "minimal",
    logoVariants: {
      black: "https://rimirigamarathon.com/wp-content/uploads/2026/05/pnr-black.png",
      minimal: "https://rimirigamarathon.com/wp-content/uploads/2026/05/pnr-light.png",
      orange: "https://rimirigamarathon.com/wp-content/uploads/2026/05/pnr-orange.png",
    },
    infoText: {
      en: {
        short: "Pink Noise Riga helps Riga shine bright in Europe’s music scene.",
        full: "Pink Noise Riga music festival offers a cocktail of world-class jazz, pop-rock, fusion, and contemporary improvised music. Festival’s main idea is to help Riga stand out & shine bright in Europe’s music scene.",
      },
      lv: {
        short: "Pink Noise Riga ar glanci pieskandina Rīgu.",
        full: "Pink Noise Riga jeb galvaspilsētas mūzikas festivāls, kas piedāvā pasaules klases džeza, poproka, fusion un laikmetīgās improvizētās mūzikas kokteili. Festivāla galvenā ideja ir ar glanci pieskandināt Rīgu, palīdzot Latvijas galvaspilsētai uzmirdzēt Eiropā!",
      },
    },
  },
  {
    id: "rwch",
    name: "Riga Wine & Champagne",
    shortName: "RWCH",
    websiteLabel: "rigawinechampagne.lv",
    websiteUrl: "https://rigawinechampagne.lv/",
    accentColor: "#e40521",
    textColor: "#111111",
    linkColor: "#e40521",
    cardBg: "#e40521",
    cardLogoVariant: "minimal",
    logoVariants: {
      black: "https://rimirigamarathon.com/wp-content/uploads/2026/05/rwch-logo.png",
      minimal: "https://rimirigamarathon.com/wp-content/uploads/2026/05/rwch-logo-1.png",
    },
    infoText: {
      en: {
        short: "The most luxurious champagne, wine, and gastronomy celebration in the Baltics.",
        full: 'The most luxurious champagne, wine, and gastronomy celebration in the Baltics, which includes the popular "Bubble Parade" in the spring, "Top 100 Wines + Chefs" in the autumn, as well as tastings, dinners, and unique masterclasses led by acclaimed winemakers and sommeliers!',
      },
      lv: {
        short: "Baltijas greznākie šampanieša, vīna un gardēdības svētki.",
        full: "Baltijas greznākie šampanieša, vīna un gardēdības svētki, kas ietver gan populāro “Burbuļu parādi” pavasarī, gan “Top 100 Wines + Chefs” rudenī, gan degustācijas, vakariņas un unikālas meistarklases atzītu vīndaru un vīnziņu vadībā!",
      },
    },
  },
  {
    id: "rwf",
    name: "Riga Whisky & Friends",
    shortName: "RWF",
    websiteLabel: "rigawhiskyfriends.com",
    websiteUrl: "https://rigawhiskyfriends.com/",
    accentColor: "#023047",
    textColor: "#111111",
    linkColor: "#023047",
    cardBg: "#023047",
    cardLogoVariant: "minimal",
    logoVariants: {
      black: "https://rimirigamarathon.com/wp-content/uploads/2026/05/rwf-logo.png",
      minimal: "https://rimirigamarathon.com/wp-content/uploads/2026/05/rwf-logo-1.png",
    },
    infoText: {
      en: {
        short: "The annual whisky culture festival returns on 12 September.",
        full: "The annual and gourmet beloved whisky culture festival “Riga Whisky & Friends” will return on 12 September, culminating for the third year in the historic Rīgas cirks.",
      },
      lv: {
        short: "Ikgadējais viskija kultūras festivāls atgriezīsies 12. septembrī.",
        full: "Ikgadējais viskija kultūras festivāls “Riga Whisky & Friends”, atgriezīsies 12. septembrī – trešo gadu pēc kārtas ar kulmināciju vēsturiskajā Rīgas cirkā.",
      },
    },
  },
  {
    id: "bwda",
    name: "Baltic Wine & Drinks Awards",
    shortName: "BWDA",
    websiteLabel: "balticwinelists.com",
    websiteUrl: "https://www.balticwinelists.com/baltic-wine-drinks-awards/winners",
    accentColor: "#fad0c5",
    textColor: "#111111",
    linkColor: "#231F20",
    cardBg: "#231F20",
    cardLogoVariant: "minimal",
    logoVariants: {
      black: "https://rimirigamarathon.com/wp-content/uploads/2026/05/bwda-dark.png",
      minimal: "https://rimirigamarathon.com/wp-content/uploads/2026/05/bwda-light.png",
      darkStars: "https://rimirigamarathon.com/wp-content/uploads/2026/05/bwda-dark-stars.png",
      lightStars: "https://rimirigamarathon.com/wp-content/uploads/2026/05/bwda-light-stars.png",
    },
    infoText: {
      en: {
        short: "Highlighting the best wine lists across Latvia, Lithuania, and Estonia.",
        full: "Baltic Wine & Drinks Awards highlight the best and most wine-lover-friendly wine restaurants and bars–in other words, the best wine lists in Latvia, Lithuania, and Estonia.",
      },
      lv: {
        short: "Izceļ labākās vīna kartes Latvijā, Lietuvā, Igaunijā.",
        full: "Baltic Wine & Drinks Awards sadarbībā ar Liebherr izceļ labākos un vīnmīļiem draudzīgākos vīna restorānus un bārus jeb labākās vīna kartes Latvijā, Lietuvā, Igaunijā.",
      },
    },
  },
  {
    id: "custom",
    name: "Custom",
    shortName: "Custom",
    websiteLabel: "your-site.com",
    websiteUrl: "https://example.com",
    accentColor: "#B59A71",
    textColor: "#111111",
    linkColor: "#B59A71",
    cardBg: "#f1f1f1",
    cardLogoVariant: "custom",
    logoVariants: {
      custom: "https://rimirigamarathon.com/wp-content/uploads/2026/02/necom.png",
    },
    infoText: {
      en: {
        short: "Custom signature info text.",
        full: "Custom signature info text.",
      },
      lv: {
        short: "Pielāgots paraksta informatīvais teksts.",
        full: "Pielāgots paraksta informatīvais teksts.",
      },
    },
  },
];

const BRAND_COLORS = [
  { label: "NECom", value: "#B59A71" },
  { label: "RRM", value: "#cc2128" },
  { label: "PNR", value: "#fa4100" },
  { label: "PNR blue", value: "#73b6ff" },
  { label: "RWCH", value: "#e40521" },
  { label: "RWCH light", value: "#f5f5f5" },
  { label: "RWF", value: "#023047" },
  { label: "RWF orange", value: "#ff792c" },
  { label: "BWDA", value: "#fad0c5" },
  { label: "BWDA dark", value: "#231F20" },
  { label: "Minimal", value: MINIMAL_COLOR },
];

const TEXT_COLORS = [
  { label: "Black", value: "#111111" },
  { label: "Dark grey", value: "#222222" },
  { label: "Gmail grey", value: "#5f6368" },
  { label: "BWDA dark", value: "#231F20" },
  { label: "RWF navy", value: "#023047" },
  { label: "Minimal", value: MINIMAL_COLOR },
];

const LINK_COLORS = [
  { label: "NECom", value: "#B59A71" },
  { label: "RRM", value: "#cc2128" },
  { label: "PNR", value: "#fa4100" },
  { label: "PNR blue", value: "#73b6ff" },
  { label: "RWCH", value: "#e40521" },
  { label: "RWF", value: "#023047" },
  { label: "RWF orange", value: "#ff792c" },
  { label: "BWDA dark", value: "#231F20" },
  { label: "Minimal", value: MINIMAL_COLOR },
];

const EMAIL_EXAMPLES = {
  en: [
    {
      email: "aigars@necom.lv",
      subject: "Breakfast with Bordeaux?",
      text: `Friends,
this morning the coffee tasted like Monday, and Monday tasted like badly chilled prosecco.

So I suggest we start the day culturally. Not necessarily with Bordeaux, although dismissing the idea this early would be premature. We could also begin with a noble commitment not to send emails with attachments named “final_final_v12”.

A small step for mankind. A giant leap for inbox civilization.

Cheers,`,
    },
    {
      email: "aigars@necom.lv",
      subject: "A meeting with potential",
      text: `Colleagues,
today’s meeting was like a young Chablis — promising at first, a little sharp in the middle, but by the end you realize there is potential.

Next time, let’s bring fewer slides, more thoughts and, in an ideal world, something edible. Strategy does not happen on an empty stomach. Irritation does.

Life is beautiful,`,
    },
    {
      email: "aigars@necom.lv",
      subject: "On lunch and civilization",
      text: `Friends,
a reminder that lunch is not a sign of weakness. It is a form of civilization.

A person who has not eaten between 12:00 and 15:00 cannot make strategic decisions. They can only move calendar invites around and look at colleagues with a sadness worthy of Burgundy.

Go eat. The world can wait.
`,
    },
    {
      email: "aigars@necom.lv",
      subject: "It is not a crisis if there is cheese",
      text: `Good afternoon,
the situation is, of course, complicated. As always.

But before we call it a crisis, please check three things: is there cheese, is there bread, and is there something that can be opened. If the answer is “yes” to at least two of these, we are still in Europe.

Let’s continue with dignity, calm and a small dose of theatrical confidence.

Cheers,`,
    },
    {
      email: "maveriks@necom.lv",
      subject: "vau?",
      text: "Vau. I honestly didn’t know what to write here. He’s never told me anything memorable enough to stay in my head.",
    },
    {
      email: "tako@necom.lv",
      subject: "vau?",
      text: "VAU. I honestly didn’t know what to write here either. He’s never told me anything memorable enough to stay in my head, either. But his bark is uppercase because he’s a more powerful barker than maveriks@necom.lv.",
    },
    {
      email: "valda@necom.lv",
      subject: "che palle!",
      text: "va fanculo!! si si si si (haha sisi mentioned)",
    },
  ],
  lv: [
    {
      email: "aigars@necom.lv",
      subject: "Brokastis ar bordo?",
      text: `Draugi,
šorīt kafija garšoja pēc pirmdienas, bet pirmdiena — pēc slikti atdzesēta proseko.

Tāpēc ierosinu dienu sākt kulturāli. Ne obligāti ar bordo, lai gan ideju noraidīt būtu pāragri. Var arī ar apņemšanos šodien nesūtīt e-pastus, kuru pielikumi saucas “final_final_v12”.

Mazs solis cilvēcei. Liels solis inbox civilizācijai.

Priekā,`,
    },
    {
      email: "aigars@necom.lv",
      subject: "Sapulce, kurai bija potenciāls",
      text: `Kolēģi,
šodienas sapulce bija kā jauns šablī — sākumā cerīga, vidū mazliet skāba, beigās tomēr saproti, ka potenciāls ir.

Nākamreiz paņemam mazāk slaidu, vairāk domu un, ideālā pasaulē, arī kaut ko ēdamu. Tukšā dūšā stratēģija nerodas. Rodas tikai aizkaitinājums.

Dzīve ir skaista,`,
    },
    {
      email: "aigars@necom.lv",
      subject: "Par pusdienām un civilizāciju",
      text: `Draugi,
atgādinu, ka pusdienas nav vājuma pazīme. Tā ir civilizācijas forma.

Cilvēks, kurš starp 12:00 un 15:00 nav ēdis, nevar pieņemt stratēģiskus lēmumus. Viņš var tikai pārvietot kalendāra ielūgumus un skatīties uz kolēģiem ar burgundieša cienīgu skumju pilnu skatienu.

Ejiet ēst. Pasaule pagaidīs.
`,
    },
    {
      email: "aigars@necom.lv",
      subject: "Krīze nav krīze, ja ir siers",
      text: `Labdien,
situācija, protams, ir sarežģīta. Kā vienmēr.

Bet pirms saucam to par krīzi, lūdzu, pārbaudām trīs lietas: vai ir siers, vai ir maize, vai ir kaut kas atkorķējams. Ja atbilde ir “jā” vismaz uz diviem jautājumiem, mēs vēl esam Eiropā.

Turpinām ar cieņu, mieru un nelielu devu teatrālas pašpārliecības.

Priekā,`,
    },
    {
      email: "maveriks@necom.lv",
      subject: "vau?",
      text: "vau. īsti nezināju, ko te rakstīt. Viņš man nekad nav neko tādu stāstījis, lai būtu palicis atmiņā.",
    },
    {
      email: "tako@necom.lv",
      subject: "vau?",
      text: "VAU. īsti nezināju, ko te rakstīt. Viņš arī man nekad nav neko tādu stāstījis, lai būtu palicis atmiņā. Bet viņam bija uppercase rējiens, jo jaudīgāks rējējs nekā maveriks@necom.lv.",
    },
    {
      email: "valda@necom.lv",
      subject: "che palle!",
      text: "va fanculo!! si si si si (haha sisi mentioned)",
    },
  ],
};

const TRANSLATIONS = {
  en: {
    reset: "Reset",
    tabContent: "Content",
    tabStyle: "Style",
    tabMedia: "Media",
    tabLayout: "Layout",
    personTitle: "Person",
    detailsTitle: "Details",
    designTitle: "Design",
    colorsTitle: "Colors",
    logoTitle: "Logo",
    bannerTitle: "Banner",
    rowsTitle: "Rows",
    nameLabel: "Name",
    titleLabel: "Job title",
    phoneLabel: "Phone",
    emailLabel: "Email",
    showEmailLabel: "Show email address",
    address1Label: "Address line 1",
    address2Label: "Address line 2",
    websiteLabelLabel: "Website label",
    websiteUrlLabel: "Website URL",
    infoTextLabel: "Info text",
    infoVariantLabel: "Info length",
    logoVariantLabel: "Logo version",
    logoUrlLabel: "Logo URL",
    logoSizeLabel: "Logo size",
    signatureStyleLabel: "Signature design",
    signatureWidthLabel: "Signature width",
    accentColorLabel: "Accent color",
    textColorLabel: "Text color",
    linkColorLabel: "Website link color",
    contactLayoutLabel: "Contact layout",
    contactLayoutStacked: "Stacked rows · mobile safe",
    contactLayoutInline: "One line · compact",
    bannerUrlLabel: "Banner image URL",
    bannerLinkLabel: "Banner link URL",
    bannerPositionLabel: "Banner position",
    bannerSpacerLabel: "Banner spacer",
    enabledLabel: "Enabled",
    presetFull: "Full",
    presetCompact: "Compact",
    presetMinimal: "Minimal",
    rowLogo: "Logo",
    rowContact: "Contact",
    rowAddress: "Address",
    rowWebsite: "Website",
    rowInfo: "Info text",
    copyRendered: "Copy for Gmail",
    copyHtml: "Copy HTML",
    desktopView: "Desktop",
    mobileView: "Mobile",
    shuffleEmail: "New preview email",
    shuffleButton: "New email",
    customColorTitle: "Custom color",
    hexLabel: "Hex",
    applyColor: "Apply color",
    copiedRendered: "Signature copied for Gmail.",
    copiedHtml: "Signature HTML copied.",
    copiedFallback: "Copied as plain HTML. Your browser blocked rich clipboard access.",
    copyFailed: "Copy failed. Select the preview and copy manually.",
    styleLeftBorder: "Left border",
    styleTopBorder: "Top border",
    bannerTop: "Top",
    bannerAfterHeader: "After header",
    bannerAfterContact: "After contact",
    bannerBottom: "Bottom",
    infoShort: "Short",
    infoFull: "Full",
    logoBlack: "Black",
    logoMinimal: "Minimal",
    logoOrange: "Orange",
    logoDarkStars: "Dark stars",
    logoLightStars: "Light stars",
    logoCustom: "Custom",
    openIntro: "Open guide",
    closeIntro: "Close guide",
    skipIntro: "Skip guide",
    introBack: "Back",
    introNext: "Next",
    introDone: "Start building",
  },
  lv: {
    reset: "Atiestatīt",
    tabContent: "Saturs",
    tabStyle: "Stils",
    tabMedia: "Attēli",
    tabLayout: "Rindas",
    personTitle: "Persona",
    detailsTitle: "Detaļas",
    designTitle: "Dizains",
    colorsTitle: "Krāsas",
    logoTitle: "Logo",
    bannerTitle: "Baneris",
    rowsTitle: "Rindas",
    nameLabel: "Vārds",
    titleLabel: "Amats",
    phoneLabel: "Telefons",
    emailLabel: "E-pasts",
    showEmailLabel: "Rādīt e-pasta adresi",
    address1Label: "Adrese 1",
    address2Label: "Adrese 2",
    websiteLabelLabel: "Mājaslapas teksts",
    websiteUrlLabel: "Mājaslapas saite",
    infoTextLabel: "Info teksts",
    infoVariantLabel: "Info garums",
    logoVariantLabel: "Logo versija",
    logoUrlLabel: "Logo URL",
    logoSizeLabel: "Logo izmērs",
    signatureStyleLabel: "Paraksta dizains",
    signatureWidthLabel: "Paraksta platums",
    accentColorLabel: "Akcenta krāsa",
    textColorLabel: "Teksta krāsa",
    linkColorLabel: "Mājaslapas saites krāsa",
    contactLayoutLabel: "Kontaktu izkārtojums",
    contactLayoutStacked: "Rindās · droši telefonā",
    contactLayoutInline: "Vienā rindā · kompakti",
    bannerUrlLabel: "Banera attēla URL",
    bannerLinkLabel: "Banera saite",
    bannerPositionLabel: "Banera pozīcija",
    bannerSpacerLabel: "Banera atstarpe",
    enabledLabel: "Ieslēgts",
    presetFull: "Pilns",
    presetCompact: "Īss",
    presetMinimal: "Minimāls",
    rowLogo: "Logo",
    rowContact: "Kontakti",
    rowAddress: "Adrese",
    rowWebsite: "Mājaslapa",
    rowInfo: "Info teksts",
    copyRendered: "Kopēt Gmail",
    copyHtml: "Kopēt HTML",
    desktopView: "Dators",
    mobileView: "Mobilais",
    shuffleEmail: "Jauns piemēra e-pasts",
    shuffleButton: "Jauns epasts",
    customColorTitle: "Pielāgota krāsa",
    hexLabel: "Hex",
    applyColor: "Lietot krāsu",
    copiedRendered: "Paraksts nokopēts Gmail lietošanai.",
    copiedHtml: "Paraksta HTML nokopēts.",
    copiedFallback: "Nokopēts kā HTML teksts. Pārlūks bloķēja rich clipboard piekļuvi.",
    copyFailed: "Kopēšana neizdevās. Iezīmē priekšskatījumu un kopē manuāli.",
    styleLeftBorder: "Kreisā līnija",
    styleTopBorder: "Augšējā līnija",
    bannerTop: "Augšā",
    bannerAfterHeader: "Pēc galvenes",
    bannerAfterContact: "Pēc kontaktiem",
    bannerBottom: "Apakšā",
    infoShort: "Īss",
    infoFull: "Pilns",
    logoBlack: "Melns",
    logoMinimal: "Minimāls",
    logoOrange: "Oranžs",
    logoDarkStars: "Tumšas zvaigznes",
    logoLightStars: "Gaišas zvaigznes",
    logoCustom: "Pielāgots",
    openIntro: "Atvērt pamācību",
    closeIntro: "Aizvērt pamācību",
    skipIntro: "Izlaist pamācību",
    introBack: "Atpakaļ",
    introNext: "Tālāk",
    introDone: "Sākt veidot",
  },
};


const INTRO_STEPS = {
  en: [
    {
      title: "Pick the right brand.",
      body: "Start by choosing NECom or an event preset. The logo, website, accent color and default info text update together.",
      bullets: ["Use + for a custom signature.", "Minimal logos are the safest default."],
    },
    {
      title: "Add the person details.",
      body: "Fill in the name, role, phone, email and website text. The signature updates live while you type.",
      bullets: ["Turn the email address on only when needed.", "Click text in the preview for small direct edits."],
    },
    {
      title: "Tune style and layout.",
      body: "Use the Style, Media and Layout tabs to control color, logo size, signature width, rows, banner and contact layout.",
      bullets: ["Stacked contact rows are best for mobile Gmail.", "One-line contact rows are compact for shorter threads."],
    },
    {
      title: "Preview like a real inbox.",
      body: "The right side shows a Gmail-like message. Switch between Desktop and Mobile, then hit New email for a different test message.",
      bullets: ["Check wrapping before copying.", "Preview with the longest name or email if unsure."],
    },
    {
      title: "Copy into Gmail.",
      body: "When it looks right, use Copy for Gmail and paste it into Gmail signature settings. Copy HTML is there for debugging or technical use.",
      bullets: ["Use Copy for Gmail for normal team use.", "Send yourself a test email after adding it."],
    },
  ],
  lv: [
    {
      title: "Izvēlies zīmolu.",
      body: "Sāc ar NECom vai pasākuma izvēli. Logo, mājaslapa, akcenta krāsa un info teksts nomainās kopā.",
      bullets: ["+ ir pielāgotam parakstam.", "Minimālie logo ir drošākā noklusējuma izvēle."],
    },
    {
      title: "Ievadi personas datus.",
      body: "Aizpildi vārdu, amatu, telefonu, e-pastu un mājaslapas tekstu. Paraksts atjaunojas uzreiz rakstīšanas laikā.",
      bullets: ["E-pasta adresi ieslēdz tikai tad, ja tā vajadzīga.", "Nelielas teksta izmaiņas vari veikt arī priekšskatījumā."],
    },
    {
      title: "Pielāgo stilu un rindas.",
      body: "Style, Media un Layout sadaļās vari mainīt krāsas, logo izmēru, platumu, rindas, baneri un kontaktu izkārtojumu.",
      bullets: ["Kontakti rindās vislabāk strādā mobilajā Gmail.", "Viena rinda ir kompakta īsākām sarakstēm."],
    },
    {
      title: "Pārbaudi kā inboxā.",
      body: "Labajā pusē ir Gmail līdzīgs priekšskatījums. Pārslēdz Desktop/Mobile un spied Jauns epasts citam testa tekstam.",
      bullets: ["Pārbaudi teksta laušanos pirms kopēšanas.", "Testē ar garāko vārdu vai e-pastu, ja šaubies."],
    },
    {
      title: "Kopē uz Gmail.",
      body: "Kad viss izskatās pareizi, spied Kopēt Gmail un ielīmē Gmail paraksta iestatījumos. Kopēt HTML ir tehniskai pārbaudei.",
      bullets: ["Ikdienā lieto Kopēt Gmail.", "Pēc pievienošanas nosūti sev testa e-pastu."],
    },
  ],
};

const DEFAULT_STATE = {
  language: "en",
  previewViewport: "desktop",
  brandId: "necom",
  name: "Dāvis Rūķītis",
  title: "Digital Operations Manager",
  phone: "+371 260 78809",
  email: "davis@necom.lv",
  showEmail: false,
  address1: "Brīvības iela 40-34, Rīga",
  address2: "LV-1050, Latvia",
  websiteLabel: "www.necom.lv",
  websiteUrl: "https://www.necom.lv",
  infoVariant: "full",
  infoText: BRAND_PRESETS[0].infoText.en.full,
  logoVariant: "minimal",
  logoUrl: BRAND_PRESETS[0].logoVariants.minimal,
  logoSize: 72,
  signatureStyle: "leftBorder",
  contactLayout: "stacked",
  accentColor: BRAND_PRESETS[0].accentColor,
  textColor: "#111111",
  linkColor: BRAND_PRESETS[0].linkColor,
  signatureWidth: 560,
  bannerUrl: "",
  bannerLink: "",
  bannerPosition: "bottom",
  bannerSpacer: 12,
  rows: {
    logo: true,
    contact: true,
    address: true,
    website: true,
    info: true,
    banner: false,
  },
  activeEmailIndex: 0,
};

const SELECT_DEFS = {
  signatureStyle: [
    { value: "leftBorder", labelKey: "styleLeftBorder" },
    { value: "topBorder", labelKey: "styleTopBorder" },
  ],
  contactLayout: [
    { value: "stacked", labelKey: "contactLayoutStacked" },
    { value: "inline", labelKey: "contactLayoutInline" },
  ],
  bannerPosition: [
    { value: "top", labelKey: "bannerTop" },
    { value: "afterHeader", labelKey: "bannerAfterHeader" },
    { value: "afterContact", labelKey: "bannerAfterContact" },
    { value: "bottom", labelKey: "bannerBottom" },
  ],
  infoVariant: [
    { value: "short", labelKey: "infoShort" },
    { value: "full", labelKey: "infoFull" },
  ],
};

const elements = {};
let state = loadState();
let activeCustomColorTarget = "accent";
let introStepIndex = 0;

document.addEventListener("DOMContentLoaded", () => {
  bindElements();
  renderPresetButtons();
  renderPalettes();
  bindEvents();
  applyStateToControls();
  renderAll();
  initIntro();
});

function bindElements() {
  const ids = [
    "presetGrid",
    "resetButton",
    "nameInput",
    "titleInput",
    "phoneInput",
    "emailInput",
    "showEmailInput",
    "address1Input",
    "address2Input",
    "websiteLabelInput",
    "websiteUrlInput",
    "infoVariantButton",
    "infoVariantMenu",
    "infoTextInput",
    "logoVariantButton",
    "logoVariantMenu",
    "logoUrlInput",
    "logoSizeValue",
    "logoSizeInput",
    "signatureStyleButton",
    "signatureStyleMenu",
    "contactLayoutButton",
    "contactLayoutMenu",
    "accentPalette",
    "accentColorValue",
    "textPalette",
    "textColorValue",
    "linkPalette",
    "linkColorValue",
    "signatureWidthValue",
    "signatureWidthInput",
    "bannerUrlInput",
    "bannerLinkInput",
    "bannerPositionButton",
    "bannerPositionMenu",
    "bannerSpacerValue",
    "bannerSpacerInput",
    "rowLogoInput",
    "rowContactInput",
    "rowAddressInput",
    "rowWebsiteInput",
    "rowInfoInput",
    "rowBannerInput",
    "copyRenderedButton",
    "copyHtmlButton",
    "copyStatus",
    "emailSubject",
    "shuffleEmailButton",
    "previewAvatar",
    "previewSenderName",
    "previewFrom",
    "previewEmailBody",
    "signaturePreview",
    "emailViewport",
    "colorPopover",
    "customColorPreview",
    "customHexInput",
    "customRedInput",
    "customGreenInput",
    "customBlueInput",
    "applyCustomColorButton",
    "closeColorPopover",
    "introOpenButton",
    "introOverlay",
    "introCloseButton",
    "introKicker",
    "introTitle",
    "introBody",
    "introChecklist",
    "introDots",
    "introSkipButton",
    "introBackButton",
    "introNextButton",
  ];

  ids.forEach((id) => {
    elements[id] = document.getElementById(id);
  });
}

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "null");
    if (!saved || typeof saved !== "object") {
      return structuredClone(DEFAULT_STATE);
    }

    const merged = {
      ...structuredClone(DEFAULT_STATE),
      ...saved,
      rows: { ...DEFAULT_STATE.rows, ...(saved.rows || {}) },
    };

    if (!BRAND_PRESETS.some((brand) => brand.id === merged.brandId)) {
      merged.brandId = "necom";
    }

    if (merged.signatureStyle === "classic") {
      merged.signatureStyle = "leftBorder";
    }

    if (merged.signatureStyle === "modern") {
      merged.signatureStyle = "topBorder";
    }

    if (!["stacked", "inline"].includes(merged.contactLayout)) {
      merged.contactLayout = "stacked";
    }

    if (!merged.linkColor) {
      const mergedBrand = BRAND_PRESETS.find((brand) => brand.id === merged.brandId) || BRAND_PRESETS[0];
      merged.linkColor = mergedBrand.linkColor || merged.accentColor;
    }

    if (merged.logoVariant === "white") {
      merged.logoVariant = "minimal";
    }

    return merged;
  } catch {
    return structuredClone(DEFAULT_STATE);
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function t(key) {
  return TRANSLATIONS[state.language][key] || TRANSLATIONS.en[key] || key;
}

function currentBrand() {
  return BRAND_PRESETS.find((brand) => brand.id === state.brandId) || BRAND_PRESETS[0];
}

function getBrandLogo(brand) {
  return brand.logoVariants[brand.cardLogoVariant] || Object.values(brand.logoVariants)[0];
}

function renderPresetButtons() {
  elements.presetGrid.innerHTML = "";

  BRAND_PRESETS.forEach((brand) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `preset-card ${brand.id === "custom" ? "preset-card--custom" : ""}`;
    button.dataset.brandId = brand.id;
    button.style.setProperty("--preset-bg", brand.cardBg);
    button.style.setProperty("--preset-accent", brand.accentColor);
    button.setAttribute("aria-label", brand.name);

    if (brand.id === "custom") {
      button.textContent = "+";
    } else {
      const img = document.createElement("img");
      img.src = getBrandLogo(brand);
      img.alt = brand.name;
      button.appendChild(img);
    }

    elements.presetGrid.appendChild(button);
  });
}

function renderPalettes() {
  renderPalette("accent", elements.accentPalette, BRAND_COLORS);
  renderPalette("text", elements.textPalette, TEXT_COLORS);
  renderPalette("link", elements.linkPalette, LINK_COLORS);
}

function renderPalette(target, container, colors) {
  container.innerHTML = "";

  colors.forEach((item) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `color-swatch ${isLightColor(item.value) ? "is-light" : ""}`;
    button.style.setProperty("--swatch", item.value);
    button.dataset.colorTarget = target;
    button.dataset.colorValue = item.value;
    button.title = `${item.label} ${item.value}`;
    button.setAttribute("aria-label", `${item.label} ${item.value}`);
    container.appendChild(button);
  });

  const custom = document.createElement("button");
  custom.type = "button";
  custom.className = "color-swatch color-swatch--custom";
  custom.dataset.colorTarget = target;
  custom.dataset.customColor = "true";
  custom.textContent = "+";
  custom.setAttribute("aria-label", "Custom color");
  container.appendChild(custom);
}

function bindEvents() {
  document.querySelectorAll("[data-language]").forEach((button) => {
    button.addEventListener("click", () => {
      const nextLanguage = button.dataset.language;
      if (state.language === nextLanguage) return;
      state.language = nextLanguage;
      state.activeEmailIndex = 0;
      state.infoText = getCurrentBrandInfoText(state.infoVariant);
      saveAndRender();
      renderIntroStep();
    });
  });

  document.querySelectorAll(".editor-tab").forEach((button) => {
    button.addEventListener("click", () => activateTab(button.dataset.tabTarget));
  });

  elements.presetGrid.addEventListener("click", (event) => {
    const button = event.target.closest("[data-brand-id]");
    if (!button) return;
    applyBrand(button.dataset.brandId);
  });

  elements.resetButton.addEventListener("click", () => {
    state = structuredClone(DEFAULT_STATE);
    saveAndRender();
  });

  bindInput(elements.nameInput, "name");
  bindInput(elements.titleInput, "title");
  bindInput(elements.phoneInput, "phone");
  bindInput(elements.emailInput, "email");
  bindInput(elements.address1Input, "address1");
  bindInput(elements.address2Input, "address2");
  bindInput(elements.websiteLabelInput, "websiteLabel");
  bindInput(elements.websiteUrlInput, "websiteUrl");
  bindInput(elements.infoTextInput, "infoText");
  bindInput(elements.logoUrlInput, "logoUrl");
  bindInput(elements.bannerUrlInput, "bannerUrl");
  bindInput(elements.bannerLinkInput, "bannerLink");

  elements.showEmailInput.addEventListener("change", () => {
    state.showEmail = elements.showEmailInput.checked;
    saveAndRender();
  });

  elements.rowLogoInput.addEventListener("change", () => updateRow("logo", elements.rowLogoInput.checked));
  elements.rowContactInput.addEventListener("change", () => updateRow("contact", elements.rowContactInput.checked));
  elements.rowAddressInput.addEventListener("change", () => updateRow("address", elements.rowAddressInput.checked));
  elements.rowWebsiteInput.addEventListener("change", () => updateRow("website", elements.rowWebsiteInput.checked));
  elements.rowInfoInput.addEventListener("change", () => updateRow("info", elements.rowInfoInput.checked));
  elements.rowBannerInput.addEventListener("change", () => updateRow("banner", elements.rowBannerInput.checked));

  elements.logoSizeInput.addEventListener("input", () => {
    state.logoSize = Number(elements.logoSizeInput.value);
    saveAndRender();
  });

  elements.signatureWidthInput.addEventListener("input", () => {
    state.signatureWidth = Number(elements.signatureWidthInput.value);
    saveAndRender();
  });

  elements.bannerSpacerInput.addEventListener("input", () => {
    state.bannerSpacer = Number(elements.bannerSpacerInput.value);
    saveAndRender();
  });

  document.querySelectorAll("[data-row-preset]").forEach((button) => {
    button.addEventListener("click", () => applyRowPreset(button.dataset.rowPreset));
  });

  document.querySelectorAll("[data-preview-viewport]").forEach((button) => {
    button.addEventListener("click", () => {
      state.previewViewport = button.dataset.previewViewport;
      saveAndRender();
    });
  });

  elements.shuffleEmailButton.addEventListener("click", shuffleEmail);
  elements.copyRenderedButton.addEventListener("click", copyRenderedSignature);
  elements.copyHtmlButton.addEventListener("click", copyHtmlSignature);

  document.addEventListener("click", (event) => {
    if (!event.target.closest(".custom-select")) {
      closeAllSelects();
    }
  });

  elements.accentPalette.addEventListener("click", handlePaletteClick);
  elements.textPalette.addEventListener("click", handlePaletteClick);
  elements.linkPalette.addEventListener("click", handlePaletteClick);

  elements.closeColorPopover.addEventListener("click", hideColorPopover);
  elements.applyCustomColorButton.addEventListener("click", applyCustomColor);
  elements.customHexInput.addEventListener("input", handleHexInput);
  [elements.customRedInput, elements.customGreenInput, elements.customBlueInput].forEach((input) => {
    input.addEventListener("input", handleRgbInput);
  });

  elements.signaturePreview.addEventListener("blur", handleInlineEdit, true);

  elements.introOpenButton?.addEventListener("click", () => showIntro(0));
  elements.introCloseButton?.addEventListener("click", completeIntro);
  elements.introSkipButton?.addEventListener("click", completeIntro);
  elements.introBackButton?.addEventListener("click", previousIntroStep);
  elements.introNextButton?.addEventListener("click", nextIntroStep);
  elements.introOverlay?.addEventListener("click", (event) => {
    if (event.target.matches("[data-intro-close]")) {
      completeIntro();
    }
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && elements.introOverlay && !elements.introOverlay.hidden) {
      completeIntro();
    }
  });
}

function initIntro() {
  renderIntroStep();

  if (!localStorage.getItem(INTRO_STORAGE_KEY)) {
    window.setTimeout(() => showIntro(0), 450);
  }
}

function showIntro(step = 0) {
  if (!elements.introOverlay) return;
  introStepIndex = clamp(step, 0, currentIntroSteps().length - 1);
  elements.introOverlay.hidden = false;
  document.body.classList.add("has-intro-open");
  renderIntroStep();
  elements.introNextButton?.focus();
}

function completeIntro() {
  if (!elements.introOverlay) return;
  elements.introOverlay.hidden = true;
  document.body.classList.remove("has-intro-open");
  localStorage.setItem(INTRO_STORAGE_KEY, "seen");
}

function nextIntroStep() {
  const steps = currentIntroSteps();

  if (introStepIndex >= steps.length - 1) {
    completeIntro();
    return;
  }

  introStepIndex += 1;
  renderIntroStep();
}

function previousIntroStep() {
  introStepIndex = clamp(introStepIndex - 1, 0, currentIntroSteps().length - 1);
  renderIntroStep();
}

function renderIntroStep() {
  if (!elements.introTitle || !elements.introBody) return;

  const steps = currentIntroSteps();
  const step = steps[introStepIndex] || steps[0];
  const current = introStepIndex + 1;

  elements.introKicker.textContent = `${current} / ${steps.length}`;
  elements.introTitle.textContent = step.title;
  elements.introBody.textContent = step.body;
  elements.introChecklist.innerHTML = step.bullets
    .map((item) => `<li>${escapeHtml(item)}</li>`)
    .join("");
  elements.introDots.innerHTML = steps
    .map((_, index) => `<span class="intro-dot ${index === introStepIndex ? "is-active" : ""}"></span>`)
    .join("");

  elements.introBackButton.disabled = introStepIndex === 0;
  elements.introNextButton.textContent = introStepIndex === steps.length - 1 ? t("introDone") : t("introNext");
}

function currentIntroSteps() {
  return INTRO_STEPS[state.language] || INTRO_STEPS.en;
}


function bindInput(input, key) {
  input.addEventListener("input", () => {
    state[key] = input.value;
    saveAndRender();
  });
}

function activateTab(tab) {
  document.querySelectorAll(".editor-tab").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.tabTarget === tab);
  });
  document.querySelectorAll(".editor-tab-panel").forEach((panel) => {
    panel.classList.toggle("is-active", panel.dataset.tabPanel === tab);
  });
}

function updateRow(row, value) {
  state.rows[row] = value;
  saveAndRender();
}

function applyBrand(brandId) {
  const brand = BRAND_PRESETS.find((item) => item.id === brandId);
  if (!brand) return;

  state.brandId = brand.id;
  state.websiteLabel = brand.websiteLabel;
  state.websiteUrl = brand.websiteUrl;
  state.accentColor = brand.accentColor;
  state.textColor = brand.textColor;
  state.linkColor = brand.linkColor || brand.accentColor;
  state.logoVariant = brand.cardLogoVariant;
  state.logoUrl = brand.logoVariants[brand.cardLogoVariant] || Object.values(brand.logoVariants)[0];
  state.infoText = getBrandInfoText(brand, state.language, state.infoVariant);

  saveAndRender();
}

function applyRowPreset(preset) {
  if (preset === "full") {
    state.rows = {
      logo: true,
      contact: true,
      address: true,
      website: true,
      info: true,
      banner: Boolean(state.bannerUrl),
    };
    state.infoVariant = "full";
    state.infoText = getCurrentBrandInfoText("full");
  }

  if (preset === "compact") {
    state.rows = {
      logo: true,
      contact: true,
      address: false,
      website: true,
      info: true,
      banner: false,
    };
    state.infoVariant = "short";
    state.infoText = getCurrentBrandInfoText("short");
  }

  if (preset === "minimal") {
    state.rows = {
      logo: true,
      contact: true,
      address: false,
      website: true,
      info: false,
      banner: false,
    };
    state.infoVariant = "short";
  }

  saveAndRender();
}

function saveAndRender() {
  saveState();
  applyStateToControls();
  renderAll();
}

function applyStateToControls() {
  document.documentElement.lang = state.language;

  document.querySelectorAll("[data-language]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.language === state.language);
  });

  document.querySelectorAll("[data-brand-id]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.brandId === state.brandId);
  });

  elements.nameInput.value = state.name;
  elements.titleInput.value = state.title;
  elements.phoneInput.value = state.phone;
  elements.emailInput.value = state.email;
  elements.showEmailInput.checked = state.showEmail;
  elements.address1Input.value = state.address1;
  elements.address2Input.value = state.address2;
  elements.websiteLabelInput.value = state.websiteLabel;
  elements.websiteUrlInput.value = state.websiteUrl;
  elements.infoTextInput.value = state.infoText;
  elements.logoUrlInput.value = state.logoUrl;
  elements.logoSizeInput.value = state.logoSize;
  elements.signatureWidthInput.value = state.signatureWidth;
  elements.bannerUrlInput.value = state.bannerUrl;
  elements.bannerLinkInput.value = state.bannerLink;
  elements.bannerSpacerInput.value = state.bannerSpacer;
  elements.rowLogoInput.checked = state.rows.logo;
  elements.rowContactInput.checked = state.rows.contact;
  elements.rowAddressInput.checked = state.rows.address;
  elements.rowWebsiteInput.checked = state.rows.website;
  elements.rowInfoInput.checked = state.rows.info;
  elements.rowBannerInput.checked = state.rows.banner;
  elements.logoSizeValue.textContent = `${state.logoSize}px`;
  elements.signatureWidthValue.textContent = `${state.signatureWidth}px`;
  elements.bannerSpacerValue.textContent = `${state.bannerSpacer}px`;
  elements.accentColorValue.textContent = normalizeHex(state.accentColor);
  elements.textColorValue.textContent = normalizeHex(state.textColor);
  elements.linkColorValue.textContent = normalizeHex(state.linkColor);

  document.querySelectorAll("[data-preview-viewport]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.previewViewport === state.previewViewport);
  });

  elements.emailViewport.classList.toggle("is-mobile", state.previewViewport === "mobile");

  translateStaticText();
  renderSelects();
  updatePaletteActiveStates();
}

function translateStaticText() {
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    node.textContent = t(node.dataset.i18n);
  });

  document.querySelectorAll("[data-i18n-aria]").forEach((node) => {
    node.setAttribute("aria-label", t(node.dataset.i18nAria));
  });
}

function renderSelects() {
  renderSelect("signatureStyle", SELECT_DEFS.signatureStyle, state.signatureStyle, (value) => {
    state.signatureStyle = value;
    saveAndRender();
  });

  renderSelect("contactLayout", SELECT_DEFS.contactLayout, state.contactLayout, (value) => {
    state.contactLayout = value;
    saveAndRender();
  });

  renderSelect("bannerPosition", SELECT_DEFS.bannerPosition, state.bannerPosition, (value) => {
    state.bannerPosition = value;
    saveAndRender();
  });

  renderSelect("infoVariant", SELECT_DEFS.infoVariant, state.infoVariant, (value) => {
    state.infoVariant = value;
    state.infoText = getCurrentBrandInfoText(value);
    saveAndRender();
  });

  const logoOptions = Object.keys(currentBrand().logoVariants).map((key) => ({
    value: key,
    labelKey: `logo${capitalize(key)}`,
  }));

  renderSelect("logoVariant", logoOptions, state.logoVariant, (value) => {
    const brand = currentBrand();
    state.logoVariant = value;
    state.logoUrl = brand.logoVariants[value] || state.logoUrl;
    saveAndRender();
  });
}

function renderSelect(name, options, value, onSelect) {
  const button = elements[`${name}Button`];
  const menu = elements[`${name}Menu`];
  if (!button || !menu) return;

  const selected = options.find((option) => option.value === value) || options[0];
  button.textContent = t(selected.labelKey) || selected.value;
  button.onclick = (event) => {
    event.stopPropagation();
    const parent = button.closest(".custom-select");
    const isOpen = parent.classList.contains("is-open");
    closeAllSelects();
    parent.classList.toggle("is-open", !isOpen);
    button.setAttribute("aria-expanded", String(!isOpen));
  };

  menu.innerHTML = "";
  options.forEach((option) => {
    const item = document.createElement("button");
    item.type = "button";
    item.className = `select-option ${option.value === value ? "is-active" : ""}`;
    item.dataset.value = option.value;
    item.role = "option";
    item.textContent = t(option.labelKey) || option.value;
    item.setAttribute("aria-selected", String(option.value === value));
    item.addEventListener("click", () => {
      closeAllSelects();
      onSelect(option.value);
    });
    menu.appendChild(item);
  });
}

function closeAllSelects() {
  document.querySelectorAll(".custom-select").forEach((select) => {
    select.classList.remove("is-open");
    const button = select.querySelector(".select-button");
    if (button) button.setAttribute("aria-expanded", "false");
  });
}

function updatePaletteActiveStates() {
  document.querySelectorAll("[data-color-target='accent']").forEach((button) => {
    button.classList.toggle("is-active", normalizeHex(button.dataset.colorValue) === normalizeHex(state.accentColor));
  });

  document.querySelectorAll("[data-color-target='text']").forEach((button) => {
    button.classList.toggle("is-active", normalizeHex(button.dataset.colorValue) === normalizeHex(state.textColor));
  });

  document.querySelectorAll("[data-color-target='link']").forEach((button) => {
    button.classList.toggle("is-active", normalizeHex(button.dataset.colorValue) === normalizeHex(state.linkColor));
  });
}

function handlePaletteClick(event) {
  const button = event.target.closest("[data-color-target]");
  if (!button) return;

  const target = button.dataset.colorTarget;
  if (button.dataset.customColor) {
    showColorPopover(target);
    return;
  }

  if (target === "accent") {
    state.accentColor = button.dataset.colorValue;
  }

  if (target === "text") {
    state.textColor = button.dataset.colorValue;
  }

  if (target === "link") {
    state.linkColor = button.dataset.colorValue;
  }

  saveAndRender();
}

function showColorPopover(target) {
  activeCustomColorTarget = target;
  const current = target === "accent" ? state.accentColor : target === "link" ? state.linkColor : state.textColor;
  setColorPopoverValue(current);
  elements.colorPopover.hidden = false;
}

function hideColorPopover() {
  elements.colorPopover.hidden = true;
}

function setColorPopoverValue(hex) {
  const normalized = normalizeHex(hex);
  const rgb = hexToRgb(normalized);

  elements.customColorPreview.style.background = normalized;
  elements.customHexInput.value = normalized;
  elements.customRedInput.value = rgb.r;
  elements.customGreenInput.value = rgb.g;
  elements.customBlueInput.value = rgb.b;
}

function handleHexInput() {
  const value = elements.customHexInput.value.trim();
  if (!/^#[0-9a-fA-F]{6}$/.test(value)) return;
  setColorPopoverValue(value);
}

function handleRgbInput() {
  const rgb = {
    r: Number(elements.customRedInput.value),
    g: Number(elements.customGreenInput.value),
    b: Number(elements.customBlueInput.value),
  };
  const hex = rgbToHex(rgb.r, rgb.g, rgb.b);
  elements.customColorPreview.style.background = hex;
  elements.customHexInput.value = hex;
}

function applyCustomColor() {
  const hex = normalizeHex(elements.customHexInput.value);
  if (activeCustomColorTarget === "accent") {
    state.accentColor = hex;
  } else if (activeCustomColorTarget === "link") {
    state.linkColor = hex;
  } else {
    state.textColor = hex;
  }
  hideColorPopover();
  saveAndRender();
}

function renderAll() {
  renderPreviewEmail();
  renderSignature();
}

function renderPreviewEmail() {
  const emails = EMAIL_EXAMPLES[state.language];
  const email = emails[state.activeEmailIndex % emails.length];
  const localPart = email.email.split("@")[0] || "necom";
  const senderName = `${capitalize(localPart)} NECom`;

  elements.emailSubject.textContent = email.subject;
  elements.previewAvatar.textContent = localPart.charAt(0).toUpperCase();
  elements.previewSenderName.textContent = senderName;
  elements.previewFrom.textContent = `<${email.email}>`;
  elements.previewEmailBody.textContent = email.text;
}

function shuffleEmail() {
  const emails = EMAIL_EXAMPLES[state.language];
  if (emails.length < 2) return;
  let nextIndex = state.activeEmailIndex;
  while (nextIndex === state.activeEmailIndex) {
    nextIndex = Math.floor(Math.random() * emails.length);
  }
  state.activeEmailIndex = nextIndex;
  saveAndRender();
}

function renderSignature() {
  elements.signaturePreview.innerHTML = buildSignatureHtml({ editable: true });
}

function buildSignatureHtml(options = {}) {
  const editable = Boolean(options.editable);
  const accent = sanitizeColor(state.accentColor, DEFAULT_STATE.accentColor);
  const text = sanitizeColor(state.textColor, DEFAULT_STATE.textColor);
  const link = sanitizeColor(state.linkColor, DEFAULT_STATE.linkColor);
  const width = clamp(Number(state.signatureWidth), 300, 620);
  const logoSize = clamp(Number(state.logoSize), 40, 160);
  const logoCellWidth = logoSize + 20;
  const borderRadius = "0";
  const borderStyle =
    state.signatureStyle === "topBorder"
      ? `border:1px solid #e8e8e8; border-top:5px solid ${accent};`
      : `border:1px solid #e6e6e6; border-left:6px solid ${accent};`;

  const rows = [];
  maybeAddBanner(rows, "top", width);

  rows.push(`
    <tr>
      <td style="padding:14px 14px 12px 14px; font-family:Arial, Helvetica, sans-serif; color:${text};">
        ${renderHeaderTable({ editable, logoSize, logoCellWidth, text })}
      </td>
    </tr>
  `);

  maybeAddBanner(rows, "afterHeader", width);

  const detailRows = renderDetailRows({ editable, link, text });
  if (detailRows) {
    rows.push(`
      <tr>
        <td style="padding:0 14px 12px 14px; font-family:Arial, Helvetica, sans-serif; color:${text};">
          <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="width:100%; border-collapse:collapse;">
            <tr>
              <td style="border-top:1px solid #efefef; padding-top:10px; font-size:13px; line-height:18px; color:${text};">
                ${detailRows}
              </td>
            </tr>
          </table>
        </td>
      </tr>
    `);
  }

  maybeAddBanner(rows, "afterContact", width);

  if (state.rows.info && state.infoText.trim()) {
    rows.push(`
      <tr>
        <td style="padding:0 14px 14px 14px; font-family:Arial, Helvetica, sans-serif; color:${text};">
          <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="width:100%; border-collapse:collapse;">
            <tr>
              <td style="border-top:1px solid #efefef; padding-top:10px; font-size:12px; line-height:16px; color:#444444;">
                <div${editableAttr(editable, "infoText")} style="font-size:12px; line-height:16px; color:#444444;">${escapeHtml(state.infoText).replace(/\n/g, "<br>")}</div>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    `);
  }

  maybeAddBanner(rows, "bottom", width);

  return `
    <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;">
      <tr>
        <td style="padding:0;">
          <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="border-collapse:collapse; width:100%; max-width:${width}px; ${borderStyle} border-radius:${borderRadius};">
            ${rows.join("")}
          </table>
        </td>
      </tr>
    </table>
  `.trim();
}

function renderHeaderTable({ editable, logoSize, logoCellWidth, text }) {
  const logoHtml =
    state.rows.logo && state.logoUrl.trim()
      ? `
        <td width="${logoCellWidth}" valign="middle" align="right" style="padding:0 0 0 12px; width:${logoCellWidth}px; min-width:${logoCellWidth}px; text-align:right; vertical-align:middle; white-space:nowrap;">
          <img src="${escapeAttribute(state.logoUrl.trim())}" alt="${escapeAttribute(currentBrand().name)}" width="${logoSize}" style="display:block; width:${logoSize}px; max-width:${logoSize}px; height:auto; margin:0 0 0 auto; border:0; outline:none; text-decoration:none;" />
        </td>
      `
      : "";

  return `
    <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="width:100%; border-collapse:collapse; table-layout:fixed;">
      <tr>
        <td valign="middle" style="padding:0; vertical-align:middle; font-size:16px; line-height:20px; color:${text};">
          <div${editableAttr(editable, "name")} style="font-weight:700; color:${text};">${escapeHtml(state.name)}</div>
          <div${editableAttr(editable, "title")} style="margin-top:2px; font-size:12px; line-height:16px; color:#222222;">${escapeHtml(state.title)}</div>
        </td>
        ${logoHtml}
      </tr>
    </table>
  `;
}

function renderDetailRows({ editable, link, text }) {
  const blocks = [];

  if (state.rows.address) {
    if (state.address1.trim()) {
      blocks.push(`<div${editableAttr(editable, "address1")} style="color:${text};">${escapeHtml(state.address1)}</div>`);
    }
    if (state.address2.trim()) {
      blocks.push(`<div${editableAttr(editable, "address2")} style="color:${text};">${escapeHtml(state.address2)}</div>`);
    }
  }

  const contactHtml =
    state.contactLayout === "inline"
      ? renderInlineContact({ link, text })
      : renderStackedContact({ link, text });

  if (contactHtml) {
    blocks.push(contactHtml);
  }

  return blocks.join("");
}

function renderStackedContact({ link, text }) {
  const rows = [];

  if (state.rows.contact && state.phone.trim()) {
    rows.push(`
      <tr>
        <td width="18" valign="top" style="width:18px; padding:0 8px 2px 0; color:#5f6368; font-weight:700;">T</td>
        <td valign="top" style="padding:0 0 2px 0;">
          <a href="tel:${escapeAttribute(phoneHref(state.phone))}" style="color:${text}; text-decoration:none; white-space:nowrap;">${escapeHtml(state.phone)}</a>
        </td>
      </tr>
    `);
  }

  if (state.rows.contact && state.showEmail && state.email.trim()) {
    rows.push(`
      <tr>
        <td width="18" valign="top" style="width:18px; padding:0 8px 2px 0; color:#5f6368; font-weight:700;">E</td>
        <td valign="top" style="padding:0 0 2px 0;">
          <a href="mailto:${escapeAttribute(state.email.trim())}" style="color:${text}; text-decoration:none; word-break:break-word;">${escapeHtml(state.email.trim())}</a>
        </td>
      </tr>
    `);
  }

  if (state.rows.website && state.websiteUrl.trim() && state.websiteLabel.trim()) {
    rows.push(`
      <tr>
        <td width="18" valign="top" style="width:18px; padding:0 8px 0 0; color:#5f6368; font-weight:700;">W</td>
        <td valign="top" style="padding:0;">
          <a href="${escapeAttribute(normalizeUrl(state.websiteUrl))}" style="color:${link}; text-decoration:underline; word-break:break-word;">${escapeHtml(state.websiteLabel)}</a>
        </td>
      </tr>
    `);
  }

  if (!rows.length) return "";

  return `
    <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse; margin-top:4px;">
      ${rows.join("")}
    </table>
  `;
}

function renderInlineContact({ link, text }) {
  const items = [];

  if (state.rows.contact && state.phone.trim()) {
    items.push(`
      <span style="display:inline-block; white-space:nowrap;">
        <span style="color:#5f6368; font-weight:700;">T</span>&nbsp;
        <a href="tel:${escapeAttribute(phoneHref(state.phone))}" style="color:${text}; text-decoration:none;">${escapeHtml(state.phone)}</a>
      </span>
    `);
  }

  if (state.rows.contact && state.showEmail && state.email.trim()) {
    items.push(`
      <span style="display:inline-block;">
        <span style="color:#5f6368; font-weight:700;">E</span>&nbsp;
        <a href="mailto:${escapeAttribute(state.email.trim())}" style="color:${text}; text-decoration:none; word-break:break-word;">${escapeHtml(state.email.trim())}</a>
      </span>
    `);
  }

  if (state.rows.website && state.websiteUrl.trim() && state.websiteLabel.trim()) {
    items.push(`
      <span style="display:inline-block;">
        <span style="color:#5f6368; font-weight:700;">W</span>&nbsp;
        <a href="${escapeAttribute(normalizeUrl(state.websiteUrl))}" style="color:${link}; text-decoration:underline; word-break:break-word;">${escapeHtml(state.websiteLabel)}</a>
      </span>
    `);
  }

  if (!items.length) return "";

  return `
    <div style="margin-top:4px; color:${text};">
      ${items.join(`<span style="color:#c0c0c0;">&nbsp;&nbsp;|&nbsp;&nbsp;</span>`)}
    </div>
  `;
}

function maybeAddBanner(rows, position, width) {
  if (!state.rows.banner || state.bannerPosition !== position || !state.bannerUrl.trim()) return;

  const spacer = clamp(Number(state.bannerSpacer), 0, 32);
  const image = `<img src="${escapeAttribute(state.bannerUrl.trim())}" alt="Banner" width="${width}" style="display:block; width:100%; max-width:${width}px; height:auto; border:0; outline:none; text-decoration:none;" />`;
  const linked = state.bannerLink.trim()
    ? `<a href="${escapeAttribute(normalizeUrl(state.bannerLink))}" style="display:block; border:0; text-decoration:none;">${image}</a>`
    : image;

  rows.push(`
    <tr>
      <td style="padding:${position === "top" ? "0" : `${spacer}px 0 0 0`}; font-family:Arial, Helvetica, sans-serif;">
        ${linked}
      </td>
    </tr>
  `);
}

function handleInlineEdit(event) {
  const target = event.target.closest("[data-edit-field]");
  if (!target) return;

  const field = target.dataset.editField;
  const value = target.innerText.trim();

  if (Object.prototype.hasOwnProperty.call(state, field)) {
    state[field] = value;
    saveAndRender();
  }
}

async function copyRenderedSignature() {
  const html = buildSignatureHtml({ editable: false });

  try {
    if (navigator.clipboard && window.ClipboardItem) {
      const item = new ClipboardItem({
        "text/html": new Blob([html], { type: "text/html" }),
        "text/plain": new Blob([signaturePlainText()], { type: "text/plain" }),
      });
      await navigator.clipboard.write([item]);
      setCopyStatus(t("copiedRendered"));
      return;
    }

    await navigator.clipboard.writeText(html);
    setCopyStatus(t("copiedFallback"));
  } catch {
    const copied = legacyCopyHtml(html);
    setCopyStatus(copied ? t("copiedRendered") : t("copyFailed"));
  }
}

async function copyHtmlSignature() {
  try {
    await navigator.clipboard.writeText(buildSignatureHtml({ editable: false }));
    setCopyStatus(t("copiedHtml"));
  } catch {
    setCopyStatus(t("copyFailed"));
  }
}

function legacyCopyHtml(html) {
  const container = document.createElement("div");
  container.style.position = "fixed";
  container.style.left = "-9999px";
  container.innerHTML = html;
  document.body.appendChild(container);

  const selection = window.getSelection();
  const range = document.createRange();
  range.selectNodeContents(container);
  selection.removeAllRanges();
  selection.addRange(range);

  let success = false;
  try {
    success = document.execCommand("copy");
  } finally {
    selection.removeAllRanges();
    container.remove();
  }

  return success;
}

function setCopyStatus(message) {
  elements.copyStatus.textContent = message;
  window.clearTimeout(setCopyStatus.timeoutId);
  setCopyStatus.timeoutId = window.setTimeout(() => {
    elements.copyStatus.textContent = "";
  }, 2600);
}

function signaturePlainText() {
  const parts = [state.name, state.title];

  if (state.rows.address) {
    parts.push(state.address1, state.address2);
  }

  if (state.rows.contact) {
    parts.push(state.phone);
    if (state.showEmail) parts.push(state.email);
  }

  if (state.rows.website) {
    parts.push(state.websiteLabel);
  }

  if (state.rows.info) {
    parts.push(state.infoText);
  }

  return parts.filter(Boolean).join("\n");
}

function getCurrentBrandInfoText(variant) {
  return getBrandInfoText(currentBrand(), state.language, variant);
}

function getBrandInfoText(brand, language, variant) {
  return (
    brand.infoText?.[language]?.[variant] ||
    brand.infoText?.[language]?.full ||
    brand.infoText?.en?.[variant] ||
    brand.infoText?.en?.full ||
    ""
  );
}

function editableAttr(editable, field) {
  if (!editable) return "";
  return ` contenteditable="true" data-edit-field="${field}" spellcheck="false"`;
}

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function escapeAttribute(value) {
  return escapeHtml(value).replace(/"/g, "&quot;");
}

function sanitizeColor(value, fallback) {
  return /^#[0-9a-fA-F]{6}$/.test(value) ? value : fallback;
}

function normalizeHex(value) {
  const trimmed = String(value || "").trim();
  if (/^#[0-9a-fA-F]{6}$/.test(trimmed)) {
    return trimmed.toUpperCase();
  }
  return "#000000";
}

function isLightColor(hex) {
  const rgb = hexToRgb(hex);
  return (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000 > 205;
}

function hexToRgb(hex) {
  const normalized = normalizeHex(hex).replace("#", "");
  return {
    r: parseInt(normalized.slice(0, 2), 16),
    g: parseInt(normalized.slice(2, 4), 16),
    b: parseInt(normalized.slice(4, 6), 16),
  };
}

function rgbToHex(r, g, b) {
  return `#${[r, g, b]
    .map((value) => clamp(Number(value), 0, 255).toString(16).padStart(2, "0"))
    .join("")}`.toUpperCase();
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function phoneHref(phone) {
  return phone.replace(/[^\d+]/g, "");
}

function normalizeUrl(url) {
  const trimmed = String(url || "").trim();
  if (!trimmed) return "";
  if (/^https?:\/\//i.test(trimmed) || /^mailto:/i.test(trimmed) || /^tel:/i.test(trimmed)) {
    return trimmed;
  }
  return `https://${trimmed}`;
}

function capitalize(value) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}
