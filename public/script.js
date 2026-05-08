const words = {
  ru: {
    gateText: 'Выберите язык, чтобы открыть официальный профиль.', navIdentity: 'Личность', navWork: 'Деятельность', navProof: 'Достижения', navContact: 'Контакты', portfolioBtn: 'Портфолио', heroEyebrow: 'Официальный цифровой профиль', heroTitle: 'Идрис Шарипов С. — 16-летний разработчик, который создаёт веб-сайты и Telegram-ботов.', heroText: 'Профиль молодого разработчика из Душанбе: биография, деятельность, сертификаты, олимпиады, портфолио и публичные контакты в одном статусном пространстве.', heroPrimary: 'Открыть профиль', heroSecondary: 'Instagram', stripAge: '16 лет', stripExp: '5 лет в программировании', stripCity: 'Душанбе', miniLabel: 'Публичная карточка', miniName: 'Идрис Шарипов С.', miniDesc: 'Web Developer · Telegram Bot Developer · Душанбе, Таджикистан', identityTitle: 'Личность', identityLead: 'Краткий официальный профиль с главными фактами, которые формируют личный бренд Идриса.', bioLabel: 'Биография', bioTitle: 'Разработчик из Душанбе', bioText: 'Идрис Шарипов Саидахмадович — 16-летний веб-разработчик из Душанбе, Таджикистан. Начал заниматься программированием с 10 лет и развивает направление веб-сайтов, Telegram-ботов и цифровой автоматизации.', factName: 'Имя', factNameValue: 'Идрис Шарипов С.', factBirth: 'Дата рождения', factAge: 'Возраст', factAgeValue: '16 лет', factLocation: 'Локация', factLocationValue: 'Душанбе, Таджикистан', workTitle: 'Деятельность', workLead: 'Направления, в которых Идрис создаёт практичные цифровые решения для людей, проектов и бизнеса.', s1Title: 'Telegram-боты', s1Text: 'Боты для автоматизации, заявок, консультаций, AI-ответов, меню, CRM-логики и быстрых бизнес-процессов.', s2Title: 'Веб-сайты', s2Text: 'Лендинги, портфолио, промо-страницы и презентационные сайты с адаптацией под телефоны и ноутбуки.', s3Title: 'AI-решения', s3Text: 'Интеграция AI в Telegram, помощники, генерация текстов, консультации и интеллектуальные сценарии.', s4Title: 'Автоматизация', s4Text: 'Системы, которые экономят время: сбор заявок, уведомления, обработка данных и удобные панели управления.', proofTitle: 'Достижения', proofLead: 'Сертификаты, международные олимпиады и подтверждения системного развития в IT.', ditoText: '3-е место на международной IT-олимпиаде с участием представителей стран СНГ, ОАЭ и Сингапура.', icoText: '2-е место на международной олимпиаде по программированию среди участников из разных стран и регионов.', moreAwardsTitle: 'Другие олимпиады', moreAwardsText: 'Участие и призовые результаты в республиканских, городских и образовательных олимпиадах по IT и программированию.', portfolioTitle: 'Портфолио проектов', portfolioText: 'В портфолио Идриса размещены примеры работ, включая Telegram-ботов, веб-сайты и демонстрационные цифровые решения. Проекты можно открыть отдельно и оценить напрямую.', portfolioOpen: 'Открыть портфолио', contactTitle: 'Публичные контакты', contactText: 'Для просмотра проектов, связи и заказа веб-сайта или Telegram-бота доступны официальные публичные страницы.', dockHome: 'Главная', dockWork: 'Работы', dockProof: 'Достижения', dockContact: 'Связь'
  },
  en: {
    gateText: 'Choose a language to open the official profile.', navIdentity: 'Identity', navWork: 'Work', navProof: 'Achievements', navContact: 'Contact', portfolioBtn: 'Portfolio', heroEyebrow: 'Official digital profile', heroTitle: 'Idris Sharipov S. — a 16-year-old developer creating websites and Telegram bots.', heroText: 'A public profile of a young developer from Dushanbe: biography, activity, certificates, olympiads, portfolio and contact links in one premium digital space.', heroPrimary: 'Open profile', heroSecondary: 'Instagram', stripAge: '16 years old', stripExp: '5 years in programming', stripCity: 'Dushanbe', miniLabel: 'Public card', miniName: 'Idris Sharipov S.', miniDesc: 'Web Developer · Telegram Bot Developer · Dushanbe, Tajikistan', identityTitle: 'Identity', identityLead: 'A concise official-style profile with the key facts behind Idris’s personal brand.', bioLabel: 'Biography', bioTitle: 'Developer from Dushanbe', bioText: 'Idris Sharipov Saidahmadovich is a 16-year-old web developer from Dushanbe, Tajikistan. He started programming at the age of 10 and develops websites, Telegram bots and digital automation solutions.', factName: 'Name', factNameValue: 'Idris Sharipov S.', factBirth: 'Date of birth', factAge: 'Age', factAgeValue: '16 years old', factLocation: 'Location', factLocationValue: 'Dushanbe, Tajikistan', workTitle: 'Activity', workLead: 'Areas where Idris creates practical digital solutions for people, projects and businesses.', s1Title: 'Telegram bots', s1Text: 'Bots for automation, applications, consultations, AI replies, menus, CRM logic and fast business processes.', s2Title: 'Websites', s2Text: 'Landing pages, portfolios, promo pages and presentation websites adapted for phones and laptops.', s3Title: 'AI solutions', s3Text: 'AI integration inside Telegram, assistants, text generation, consulting flows and intelligent scenarios.', s4Title: 'Automation', s4Text: 'Systems that save time: lead collection, notifications, data processing and convenient control panels.', proofTitle: 'Achievements', proofLead: 'Certificates, international olympiads and proof of consistent development in IT.', ditoText: '3rd place at an international IT olympiad with participants from CIS countries, the UAE and Singapore.', icoText: '2nd place at an international coding olympiad among participants from different countries and regions.', moreAwardsTitle: 'Other olympiads', moreAwardsText: 'Participation and prize results in republican, city and educational IT and programming olympiads.', portfolioTitle: 'Project portfolio', portfolioText: 'Idris’s portfolio includes examples of Telegram bots, websites and demo digital solutions. Projects can be opened separately and reviewed directly.', portfolioOpen: 'Open portfolio', contactTitle: 'Public contacts', contactText: 'Official public pages are available for viewing projects, contact and ordering a website or Telegram bot.', dockHome: 'Home', dockWork: 'Work', dockProof: 'Awards', dockContact: 'Contact'
  },
  tj: {
    gateText: 'Забонро интихоб кунед, то профили расмӣ кушода шавад.', navIdentity: 'Шахсият', navWork: 'Фаъолият', navProof: 'Дастовардҳо', navContact: 'Тамос', portfolioBtn: 'Портфолио', heroEyebrow: 'Профили рақамии расмӣ', heroTitle: 'Идрис Шарипов С. — таҳиягари 16-сола, ки веб-сайтҳо ва Telegram-ботҳо месозад.', heroText: 'Профили ҷавони таҳиягар аз Душанбе: тарҷумаи ҳол, фаъолият, сертификатҳо, олимпиадаҳо, портфолио ва тамосҳо дар як фазои муосир.', heroPrimary: 'Кушодани профил', heroSecondary: 'Instagram', stripAge: '16 сола', stripExp: '5 сол дар барномасозӣ', stripCity: 'Душанбе', miniLabel: 'Корти оммавӣ', miniName: 'Идрис Шарипов С.', miniDesc: 'Web Developer · Telegram Bot Developer · Душанбе, Тоҷикистон', identityTitle: 'Шахсият', identityLead: 'Профили кӯтоҳи расмӣ бо далелҳои асосӣ, ки бренди шахсии Идрисро нишон медиҳанд.', bioLabel: 'Тарҷумаи ҳол', bioTitle: 'Таҳиягар аз Душанбе', bioText: 'Идрис Шарипов Саидаҳмадович — веб-таҳиягари 16-сола аз Душанбе, Тоҷикистон. Аз синни 10-солагӣ барномасозиро оғоз карда, самтҳои веб-сайтҳо, Telegram-ботҳо ва автоматизатсияи рақамиро рушд медиҳад.', factName: 'Ном', factNameValue: 'Идрис Шарипов С.', factBirth: 'Санаи таваллуд', factAge: 'Синну сол', factAgeValue: '16 сола', factLocation: 'Макон', factLocationValue: 'Душанбе, Тоҷикистон', workTitle: 'Фаъолият', workLead: 'Самтҳое, ки дар онҳо Идрис барои одамон, лоиҳаҳо ва бизнесҳо қарорҳои рақамии амалӣ месозад.', s1Title: 'Telegram-ботҳо', s1Text: 'Ботҳо барои автоматизатсия, дархостҳо, машваратҳо, ҷавобҳои AI, менюҳо, CRM ва равандҳои зуд.', s2Title: 'Веб-сайтҳо', s2Text: 'Лендингҳо, портфолиоҳо, саҳифаҳои промо ва сайтҳои муаррифавӣ бо мутобиқшавӣ ба телефон ва ноутбук.', s3Title: 'AI-қарорҳо', s3Text: 'Интегратсияи AI дар Telegram, ёрдамчиён, тавлиди матнҳо, машваратҳо ва сенарияҳои интеллектуалӣ.', s4Title: 'Автоматизатсия', s4Text: 'Системаҳо барои сарфаи вақт: ҷамъоварии дархостҳо, огоҳиномаҳо, коркарди маълумот ва панелҳои идоракунӣ.', proofTitle: 'Дастовардҳо', proofLead: 'Сертификатҳо, олимпиадаҳои байналмилалӣ ва нишонаҳои рушди пайваста дар IT.', ditoText: 'Ҷойи 3 дар олимпиадаи байналмилалии IT бо иштирокчиён аз кишварҳои ИДМ, АМА ва Сингапур.', icoText: 'Ҷойи 2 дар олимпиадаи байналмилалии барномасозӣ миёни иштирокчиён аз кишварҳо ва минтақаҳои гуногун.', moreAwardsTitle: 'Олимпиадаҳои дигар', moreAwardsText: 'Иштирок ва натиҷаҳои ҷоизадор дар олимпиадаҳои ҷумҳуриявӣ, шаҳрӣ ва таълимӣ оид ба IT ва барномасозӣ.', portfolioTitle: 'Портфолиои лоиҳаҳо', portfolioText: 'Дар портфолиои Идрис намунаҳои Telegram-ботҳо, веб-сайтҳо ва қарорҳои рақамӣ ҷойгир шудаанд. Лоиҳаҳоро метавон алоҳида кушода, мустақим санҷид.', portfolioOpen: 'Кушодани портфолио', contactTitle: 'Тамосҳои оммавӣ', contactText: 'Барои дидани лоиҳаҳо, тамос ва фармоиши веб-сайт ё Telegram-бот саҳифаҳои расмии оммавӣ дастрасанд.', dockHome: 'Асосӣ', dockWork: 'Корҳо', dockProof: 'Дастовард', dockContact: 'Тамос'
  }
};

const gate = document.getElementById('languageGate');
const openLang = document.getElementById('openLang');
const progress = document.querySelector('.scrollbar span');
const cursor = document.querySelector('.cursor-glow');

function setLanguage(lang) {
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (words[lang] && words[lang][key]) el.textContent = words[lang][key];
  });
  openLang.textContent = lang.toUpperCase();
  gate.classList.add('hidden');
}

document.querySelectorAll('[data-set-lang]').forEach(btn => {
  btn.addEventListener('click', () => setLanguage(btn.dataset.setLang));
});

openLang.addEventListener('click', () => gate.classList.remove('hidden'));

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.16, rootMargin: '0px 0px -8% 0px' });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

function updateProgress() {
  const max = document.documentElement.scrollHeight - innerHeight;
  const value = max > 0 ? (scrollY / max) * 100 : 0;
  progress.style.width = value + '%';
}

addEventListener('scroll', updateProgress, { passive: true });
updateProgress();

addEventListener('pointermove', e => {
  if (!cursor || innerWidth < 800) return;
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
});

document.querySelectorAll('[data-tilt]').forEach(card => {
  card.addEventListener('pointermove', e => {
    if (innerWidth < 900) return;
    const r = card.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - .5;
    const y = (e.clientY - r.top) / r.height - .5;
    card.style.transform = `perspective(900px) rotateX(${y * -5}deg) rotateY(${x * 5}deg) translateY(-2px)`;
  });
  card.addEventListener('pointerleave', () => card.style.transform = '');
});

document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});
