let currentLang = localStorage.getItem("lang") || "en";

const translations = {
  ar: {
    nav_home: "الرئيسية",
    nav_about: "من نحن",
    nav_objectives: "الاهداف",
    nav_reset: "مشروع RESET",  // 👈 جديد
    nav_more: "المزيد",
    nav_conference: "المؤتمر",
    nav_contact: "تواصل معنا",
    hero_title: "مرحبًا بكم في الوحدة التنفيذية للمشاريع الممولة خارجيًا",
    hero_text: "نعمل من أجل مستقبل طاقة مستدام ومزدهر لليمن",
    about_title: "من نحن",
    about_text1: "تعد الوحدة التنفيذية للمشاريع الممولة خارجيًا (PIU) وحدة متخصصة تعمل تحت مظلة وزارة الكهرباء والطاقة، وتهدف إلى إدارة وتنسيق جميع المشاريع الممولة خارجيًا في قطاع الطاقة عبر مختلف محافظات اليمن. تأسست الوحدة لتعزيز البنية التحتية للطاقة الوطنية، رفع مستوى القدرات المؤسسية، وضمان تنفيذ المشاريع وفق أفضل المعايير الدولية. تلعب الوحدة دورًا محوريًا في التخطيط الاستراتيجي، الإشراف الفني، وإدارة العمليات التشغيلية للمشاريع، مع التركيز على توسيع الوصول إلى الطاقة، تحديث البنية التحتية الحيوية، ودعم حلول الطاقة المستدامة. كما تعمل الوحدة على تعزيز الشفافية، ضمان الحوكمة الرشيدة، ومتابعة الالتزام بالمعايير العالمية في جميع مراحل تنفيذ المشاريع.",
    about_text2: "وتستند أعمال الوحدة إلى فرق فنية متخصصة وإطار عمل متكامل يربط بين السياسات الوطنية وأفضل الممارسات الدولية، مع التركيز على الابتكار في الحلول التقنية، بناء القدرات المحلية، وتعزيز التعاون بين الجهات الحكومية، الشركاء الدوليين، والقطاع الخاص . تتمثل رؤية الوحدة في تقديم حلول طاقة موثوقة ومستدامة وبتكاليف مناسبة لجميع شرائح المجتمع، والمساهمة في تحقيق نمو اقتصادي مستدام، وتحسين جودة الحياة في المناطق الحضرية والريفية على حد سواء. كما تسعى الوحدة إلى دعم التحول نحو الطاقة المتجددة، وتعزيز مرونة أنظمة الطاقة، وضمان استفادة المجتمع ككل من التطورات في قطاع الطاقة.",
    goals_title: "الإنجازات",
    achv1: "+4.7M مستفيد",
    achv2: "20% نمو",
    achv3: "153.8M$ مشروع",
    achievements_text: "على مر السنوات، أدارت الوحدة التنفيذية (PIU) بنجاح مجموعة متنوعة من المبادرات المتعلقة بالطاقة المصممة لتلبية احتياجات اليمن المتزايدة من الطاقة وتحديات البنية التحتية. ومن خلال نهج قائم على النتائج، ساهمت PIU في توسيع نطاق الكهرباء في المناطق المحرومة، وتحديث شبكات النقل والتوزيع، وإدخال حلول مبتكرة للطاقة المتجددة. كما ساهم عملها في تعزيز الإصلاحات المؤسسية، وتبسيط الأطر التشغيلية، وتعزيز قدرات تنفيذ المشاريع، مما يضمن أن جميع المبادرات تلبي المعايير الدولية للجودة والشفافية والمساءلة. وتُظهر هذه الإنجازات دور PIU كقوة دافعة وراء تحول قطاع الطاقة في اليمن، بما يمكّن من الوصول الشامل إلى الطاقة مع تعزيز المرونة على المدى الطويل.",
    goal1_title: "توسيع الوصول للكهرباء",
    goal2_title: "تعزيز موثوقية البنية التحتية",
    goal3_title: "الترويج للطاقة المتجددة",
    goal4_title: "تطوير المبادرات الريفية",
    goal5_title: "بناء القدرات المؤسسية",
    projects_title: "المشاريع",
    project_summary: "هناك مشروع حالي يقام وهو عبارة عن مؤتمر يتحدث عن مواضيع الطاقة وعرض مشاريع.",
    project_details: "هذا المؤتمر يسلط الضوء على الابتكارات في مجال الطاقة، ويجمع خبراء محليين ودوليين لمناقشة التحديات والحلول المستقبلية.",
    project_mobile: "هناك مؤتمر حالي يتحدث عن مشاريع الطاقة ويجمع الخبراء لمناقشة الحلول المستقبلية.",
    project_btn: "المزيد من التفاصيل",
    obj_title: "الأهداف",
    obj_intro: "تعمل الوحدة التنفيذية (PIU) تحت إشراف وزارة الكهرباء والطاقة على تعزيز قطاع الطاقة في اليمن من خلال تطوير البنية التحتية، وتوسيع نطاق الطاقة المتجددة، وتحسين فرص الوصول عبر التخطيط الاستراتيجي، والابتكار، والحوكمة الشفافة.",
    obj1_title: "تحسين تسليم المشاريع",
    obj1_text: "تركز PIU على الاستخدام الأمثل للموارد الممولة خارجيًا...",
    obj2_title: "ضمان الامتثال",
    obj2_text: "تضمن PIU توافق عملياتها مع المعايير الدولية ومتطلبات المانحين...",
    obj3_title: "تعزيز القدرات المؤسسية",
    obj3_text: "تلتزم PIU ببناء أنظمة وعمليات قوية تعزز الحوكمة...",
    obj4_title: "توسيع الوصول إلى الطاقة",
    obj4_text: "تهدف PIU إلى تقديم حلول طاقة تحولية للمجتمعات المحرومة...",
    dept_title: "الأقسام",
    dept1_title: "الإدارة المالية والإدارية",
    dept1_text: "تشرف على إعداد الميزانيات...",
    dept2_title: "الأقسام الفنية والهندسية والرقابية",
    dept2_text: "تدير تصاميم المشاريع...",
    dept3_title: "قسم المشتريات",
    dept3_text: "يدير المناقصات...",
    dept4_title: "قسم الاستدامة البيئية والاجتماعية",
    dept4_text: "يشرف على الامتثال البيئي...",
    nav_co2: "CO2",
    co2_title: "التزامنا بخفض انبعاثات الكربون",
    co2_text: "تلتزم الوحدة التنفيذية للمشاريع الممولة خارجيًا بدعم تحول اليمن نحو مستقبل طاقي منخفض الانبعاثات ومرن أمام التغير المناخي. من خلال دمج حلول الطاقة المتجددة، بما في ذلك تقنيات الطاقة الشمسية وطاقة الرياح، وتشجيع ممارسات كفاءة الطاقة، تسهم الوحدة في تقليل الاعتماد على الوقود الأحفوري وخفض الانبعاثات الغازية الضارة. تقوم الوحدة بتنفيذ استراتيجيات ومشاريع مبتكرة تتماشى مع أهداف الاستدامة الوطنية، لضمان أن تصبح التقنيات النظيفة محورًا رئيسيًا في قطاع الطاقة في اليمن. ومن خلال التخطيط الاستباقي، الحلول التقنية المبتكرة، وتعزيز القدرات المحلية، تسعى الوحدة إلى موازنة الطلب على الطاقة مع حماية البيئة، وتمهيد الطريق نحو مستقبل مستدام وواعٍ بيئيًا.",
    facility_title: "مرافقنا التي تم تقييمها بعناية",
    facility_text1: "تتمتع الوحدة التنفيذية للمشاريع الممولة خارجيًا بأعلى معايير الكفاءة والجودة، حيث خضعت عملياتها وأنظمتها لتقييم شامل بواسطه البنك الدولي و المانحين و UNOPS يغطي إدارة الموارد المالية، إجراءات الشراء والمناقصات، وأطر متابعة المشاريع، لضمان توافق الممارسات مع المعايير الدولية وتعزيز إدارة المشاريع الممولة دوليًا.",
    facility_text2: "بعد هذا التقييم، قامت الوحدة بتنفيذ دراسات واستراتيجيات متقدمة لدعم توسع الطاقة المتجددة في اليمن، بما يشمل تحليل فرص الطاقة الشمسية للمشاريع الصغيرة، ودراسة الإمكانات الخاصة بقطاع الطاقة، وتقييم السوق للطاقة الشمسية خارج الشبكة الكهربائية. تهدف هذه الجهود إلى تعزيز التخطيط الاستراتيجي، بناء القدرات المحلية، وتقديم حلول طاقة فعّالة ومستدامة تلبي احتياجات المجتمعات المختلفة في جميع أنحاء اليمن.",
    more_title: "المزيد عنا",
    more_text: "لمعرفة المزيد عن الوحدة التنفيذية (PIU)، يمكنك الاطلاع على ملفنا التعريفي الذي يوضح مهامنا وإنجازاتنا ورؤيتنا لمستقبل قطاع الطاقة في اليمن.",
    more_btn: "تحميل الملف",
    contact_title: "تواصل معنا",
    contact_intro: "للاستفسارات أو أي تواصل، يمكنكم الاتصال بنا عبر الطرق التالية:",
    contact_email: "info@piu-ye.org",
    contact_phone: "00967-776702125",
    contact_location: "كابوتا, المنصوره, عدن, اليمن",
    footer_text: "جميع الحقوق محفوظة © 2025 PIU",
    nav_news: "اخبار الوحدة",
    category5: "ورشة عمل",
    news_title: "📰 أخبار الوحدة",
    news_subtitle: "آخر المستجدات والإنجازات في قطاع الطاقة",
    news5_date: "📅 30 - 31 أغسطس 2026",
    news5_title: "الورشة التحضيرية لتقييم الشبكات الكهربائية المصغرة في المناطق الريفية المرشحة لمشروع RESET",
    news5_desc: "أقيمت، برعاية وزير الكهرباء والطاقة المهندس عدنان الكاف وبدعم من البنك الدولي، ورشة العمل المصغرة الخاصة بتقييم ودراسة الشبكات الكهربائية المصغرة في المناطق الريفية المستهدفة، ضمن أنشطة المكوّن الثاني من مشروع تعافي قطاع الكهرباء من اجل انتقال عادل في اليمن (RESET)، وبمشاركة الجهات والكوادر الفنية ذات العلاقة.",
    news5_period: "<strong>🗓️ الفترة:</strong> 30 - 31 أغسطس 2026",
    news5_location: "<strong>📍 المكان:</strong> فندق بانوراما - عدن",
    news5_patron: "<strong>👤 الراعي:</strong> معالي وزير الكهرباء والطاقة المهندس عدنان الكاف",
    news5_donor: "<strong>🤝 الداعم:</strong> البنك الدولي",
    news_btn: "جميع الأخبار",
    readmore: "قراءة المزيد →",
    // ===== RESET Section (Arabic) =====
    reset_title: " مشروع تعافي قطاع الكهرباء من اجل انتقال عادل في اليمن (RESET)",
    reset_subtitle: "تعرف على مكونات المشروع وإنجازاته من خلال العرض التقديمي",
  },
  en: {
    nav_home: "Home",
    nav_about: "About Us",
    nav_objectives: "Objectives",
    nav_reset: "RESET Project",  // 👈 جديد
    nav_more: "More",
    nav_conference: "Conference",
    nav_contact: "Contact",
    hero_title: "Welcome to the Project Implementation Unit",
    hero_text: "Working for a sustainable and prosperous energy future for Yemen",
    about_title: "About Us",
    about_text1: "The Project Implementation Unit (PIU) is a specialized entity operating under the Ministry of Electricity and Energy, responsible for managing and coordinating all internationally funded energy projects across Yemen. The unit was established to strengthen national energy infrastructure, enhance institutional capacity, and ensure project implementation according to international standards. The PIU plays a central role in strategic planning, technical supervision, and operational management of projects, focusing on expanding energy access, modernizing critical infrastructure, and promoting sustainable energy solutions. It also ensures transparency, good governance, and adherence to global standards at every stage of project execution.",
    about_text2: "The unit's operations rely on highly skilled technical teams and a structured framework that links national policies with global best practices. Emphasis is placed on innovative technical solutions, building local expertise, and fostering collaboration among government institutions, international partners, and the private sector. The PIU envisions delivering reliable, sustainable, and affordable energy solutions for all segments of society, contributing to sustainable economic growth and improved quality of life in both urban and rural communities. It is committed to supporting the transition to renewable energy, enhancing the resilience of energy systems, and ensuring that communities fully benefit from advancements in the energy sector.",
    goals_title: "Achievements",
    achv1: "+4.7M Beneficiaries",
    achv2: "20% Growth",
    achv3: "153.8M$ Projects",
    achievements_text: "Over the years, the PIU has successfully managed and overseen a diverse portfolio of energy-related initiatives designed to address Yemen's growing power demands and infrastructure challenges. Through a results-driven approach, the PIU has contributed to expanding electrification in underserved areas, upgrading transmission and distribution networks, and introducing innovative renewable energy solutions. Its work has also advanced institutional reforms, streamlined operational frameworks, and strengthened project delivery capacities, ensuring that all initiatives meet international standards of quality, transparency, and accountability. These achievements demonstrate the PIU's role as a driving force behind the transformation of Yemen's energy sector, enabling inclusive access to energy while fostering long-term resilience.",
    goal1_title: "Expand Electricity Access",
    goal2_title: "Strengthen Infrastructure Reliability",
    goal3_title: "Promote Renewable Energy Solutions",
    goal4_title: "Enhance Rural Development Initiatives",
    goal5_title: "Foster Institutional Growth",
    projects_title: "Projects",
    project_summary: "There is a current project: a conference discussing energy topics and showcasing projects.",
    project_details: "This conference highlights innovations in the energy sector, bringing together local and international experts to discuss challenges and future solutions.",
    project_mobile: "A current conference discusses energy projects and gathers experts to explore future solutions.",
    project_btn: "More Details",
    obj_title: "Objectives",
    obj_intro: "The PIU works under the Ministry of Electricity and Energy to strengthen Yemen's energy sector by advancing infrastructure, scaling renewable energy, and improving access through strategic planning, innovation, and transparent governance.",
    obj1_title: "Optimize Project Delivery",
    obj1_text: "The PIU focuses on maximizing the efficient use of resources...",
    obj2_title: "Ensure Compliance",
    obj2_text: "The PIU ensures its operations align with international standards...",
    obj3_title: "Strengthen Institutional Capacity",
    obj3_text: "The PIU is dedicated to building robust systems and processes...",
    obj4_title: "Expand Access to Energy",
    obj4_text: "The PIU aims to deliver transformative energy solutions...",
    dept_title: "Departments",
    dept1_title: "Administrative and Finance Departments",
    dept1_text: "Oversees budgeting, financial reporting...",
    dept2_title: "Technical Engineering and Monitoring Departments",
    dept2_text: "Manages project designs, supervision...",
    dept3_title: "Procurement Department",
    dept3_text: "Handles tenders, vendor selection...",
    dept4_title: "Environmental and Social Sustainability Department",
    dept4_text: "Oversees environmental compliance...",
    nav_co2: "CO2",
    co2_title: "Our Commitment to Reducing Carbon Emissions",
    co2_text: "The Project Implementation Unit is fully committed to supporting Yemen's transition toward a low-carbon, climate-resilient energy future. By integrating renewable energy solutions, including solar and wind technologies, and promoting energy-efficient practices, the Unit contributes to reducing reliance on fossil fuels and lowering harmful greenhouse gas emissions. The Unit develops and implements innovative strategies and projects aligned with national sustainability goals, ensuring that clean energy technologies become central to Yemen's energy sector. Through forward-looking planning, innovative technical solutions, and capacity building, the Unit aims to balance energy demands with environmental protection, paving the way for a more sustainable and climate-conscious future.",
    facility_title: "Our Well Evaluated Facility",
    facility_text1: "The Project Implementation Unit operates with efficiently managed facilities, where all processes have undergone a comprehensive evaluation by World Bank, Donor Agencies, and UNOPS covering financial management, procurement procedures, and project monitoring frameworks. This ensures that our practices align with international standards and strengthens the management of donor-funded projects.",
    facility_text2: "Following this evaluation, the Unit has implemented advanced studies and strategic initiatives to support the expansion of renewable energy in Yemen. These include assessing small-scale solar projects, analyzing opportunities within the power sector, and evaluating the off-grid solar market. These efforts aim to enhance strategic planning, develop local technical expertise, and deliver effective, sustainable energy solutions that meet the diverse needs of communities across Yemen.",
    more_title: "More About Us",
    more_text: "To learn more about the PIU, you can check our profile document which highlights our mission, achievements, and vision for Yemen's energy future.",
    more_btn: "Download File",
    contact_title: "Contact Us",
    contact_intro: "For inquiries or communication, you can reach us through the following:",
    contact_email: "info@piu-ye.org",
    contact_phone: "00967-776702125",
    contact_location: "Kabuta Area, Al-Mansoura, Aden, Yemen",
    footer_text: "All rights reserved © 2025 PIU",
    nav_news: "PIU News",
    category5: "Workshop",
    news_title: "📰 PIU News",
    news_subtitle: "Latest updates and achievements in the energy sector",
    news5_date: "📅 30 - 31 August 2026",
    news5_title: "Preparatory Workshop for Assessing Mini-Grid Electricity Networks in Targeted Rural Areas for the RESET Project",
    news5_desc: "Under the patronage of the Minister of Electricity and Energy, Eng. Adnan Al-Kaf, and with support from the World Bank, a mini-workshop was held to assess and study mini-grid electricity networks in targeted rural areas, as part of Component 2 of the Yemen Emergency Electricity Restoration Project (RESET), with the participation of relevant technical authorities and staff.",
    news5_period: "<strong>🗓️ Period:</strong> 30 - 31 August 2026",
    news5_location: "<strong>📍 Venue:</strong> Panorama Hotel - Aden",
    news5_patron: "<strong>👤 Patron:</strong> H.E. Minister of Electricity and Energy, Eng. Adnan Al-Kaf",
    news5_donor: "<strong>🤝 Supported by:</strong> The World Bank",
    news_btn: "All News",
    readmore: "Read More →",
    // ===== RESET Section (English) =====
    reset_title: " Yemen's Recovery of the Electricity Sector for an Equal Transition Project (RESET)",
    reset_subtitle: "Learn about the project components and achievements through the presentation",
  }
};

// ============================================================
//  13 SLIDES GALLERY - RESET PROJECT (ARABIC SLIDES FOR BOTH)
// ============================================================

let currentSlideIndex = 0;
let totalSlides = 13;

// 🔥 استخدام الشرائح العربية لكلتا اللغتين
const slidesImages = {
  ar: [
    'images/slides/slide1_ar.png',
    'images/slides/slide3_ar.png',
    'images/slides/slide4_ar.png',
    'images/slides/slide5_ar.png',
    'images/slides/slide6_ar.png',
    'images/slides/slide7_ar.png',
    'images/slides/slide8_ar.png',
    'images/slides/slide9_ar.png',
    'images/slides/slide10_ar.png',
    'images/slides/slide11_ar.png',
    'images/slides/slide12_ar.png',
    'images/slides/slide13_ar.png'
  ],
  en: [
    // 🔥 استخدام الشرائح العربية أيضاً للإنجليزية
    'images/slides/slide1_ar.png',
    'images/slides/slide3_ar.png',
    'images/slides/slide4_ar.png',
    'images/slides/slide5_ar.png',
    'images/slides/slide6_ar.png',
    'images/slides/slide7_ar.png',
    'images/slides/slide8_ar.png',
    'images/slides/slide9_ar.png',
    'images/slides/slide10_ar.png',
    'images/slides/slide11_ar.png',
    'images/slides/slide12_ar.png',
    'images/slides/slide13_ar.png'
  ]
};

// ===== تحديث صورة RESET حسب اللغة =====
function updateResetImage() {
  const img = document.getElementById('resetHeaderImage');
  if (!img) return;
  
  const lang = currentLang || 'ar';
  // 🔥 استخدام نفس الصورة لكلتا اللغتين
  img.src = 'images/slide1_ar.png';
  if (lang === 'ar') {
    img.alt = 'مشروع RESET';
  } else {
    img.alt = 'RESET Project';
  }
}

// ===== تهيئة معرض الشرائح =====
function initSlides() {
  const lang = currentLang || 'ar';
  const images = slidesImages[lang] || slidesImages.ar;
  const container = document.getElementById('slidesContainer');
  const dotsContainer = document.getElementById('slideDots');
  
  if (!container) {
    console.warn('Slides container not found');
    return;
  }
  
  // 🔥 تعيين اتجاه الحاوية إلى LTR لمنع تأثير RTL
  container.style.direction = 'ltr';
  container.style.transform = 'translateX(0)';
  container.style.marginLeft = '0';
  
  // مسح المحتوى السابق
  container.innerHTML = '';
  if (dotsContainer) dotsContainer.innerHTML = '';
  
  totalSlides = images.length;
  
  // إضافة الصور
  images.forEach((src, index) => {
    // إنشاء شريحة
    const slide = document.createElement('div');
    slide.className = 'slide-item';
    slide.style.minWidth = '100%';
    slide.style.flexShrink = '0';
    slide.innerHTML = `<img src="${src}" alt="Slide ${index + 1}" loading="lazy" onerror="this.parentElement.innerHTML='<p style=\\'color:#666;padding:20px;text-align:center;\\'>صورة ${index+1} غير متوفرة</p>'">`;
    container.appendChild(slide);
    
    // إنشاء نقطة
    if (dotsContainer) {
      const dot = document.createElement('span');
      dot.className = 'dot' + (index === 0 ? ' active' : '');
      dot.onclick = () => goToSlide(index);
      dotsContainer.appendChild(dot);
    }
  });
  
  // إعادة تعيين الموضع
  currentSlideIndex = 0;
  container.style.transform = 'translateX(0)';
  updateSlideCounter();
  
  console.log('Slides initialized: ' + totalSlides + ' slides (Arabic slides for both languages)');
}

// ===== التبديل إلى شريحة معينة =====
function goToSlide(index) {
  const container = document.getElementById('slidesContainer');
  const dots = document.querySelectorAll('.slide-dots .dot');
  
  if (!container || totalSlides === 0) return;
  
  if (index < 0) index = totalSlides - 1;
  if (index >= totalSlides) index = 0;
  
  currentSlideIndex = index;
  
  // 🔥 استخدام transform مع تجاهل اتجاه الصفحة
  container.style.direction = 'ltr';
  container.style.transform = 'translateX(-' + (index * 100) + '%)';
  container.style.marginLeft = '0';
  
  dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === index);
  });
  
  updateSlideCounter();
}

// ===== التبديل إلى الأمام أو الخلف =====
function changeSlide(direction) {
  goToSlide(currentSlideIndex + direction);
}

// ===== تحديث العداد =====
function updateSlideCounter() {
  const counter = document.getElementById('slideCounter');
  if (counter) {
    counter.textContent = (currentSlideIndex + 1) + ' / ' + totalSlides;
  }
}

// ===== دعم لوحة المفاتيح =====
document.addEventListener('keydown', function(e) {
  const slidesViewer = document.getElementById('slidesViewer');
  if (!slidesViewer) return;
  
  if (e.key === 'ArrowLeft') {
    changeSlide(-1);
    e.preventDefault();
  } else if (e.key === 'ArrowRight') {
    changeSlide(1);
    e.preventDefault();
  }
});

// ===== تحديث الشرائح عند تغيير اللغة =====
function updateSlidesLanguage() {
  setTimeout(function() {
    initSlides();
    console.log('Slides updated for language: ' + currentLang + ' (using Arabic slides)');
  }, 500);
}

// ===== تحديث الشرائح عند تغيير اللغة =====
function updateSlidesLanguage() {
  setTimeout(initSlides, 300);
}

// ============================================================
//  APPLY LANGUAGE FUNCTION
// ============================================================

function applyLang(lang) {
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  localStorage.setItem("lang", lang);

  const t = translations[lang];

  // ===== دالة مساعدة لتحديث العناصر بأمان =====
  function setText(id, text) {
    const el = document.getElementById(id);
    if (el) el.textContent = text;
  }

  function setHTML(id, html) {
    const el = document.getElementById(id);
    if (el) el.innerHTML = html;
  }

  function setQuerySelectorText(selector, text) {
    const el = document.querySelector(selector);
    if (el) el.textContent = text;
  }

  function setSpanText(id, text) {
    const el = document.getElementById(id);
    if (el) {
      const span = el.querySelector("span");
      if (span) span.textContent = text;
    }
  }

  // ===== روابط القائمة (كمبيوتر) =====
  setSpanText("nav-home", t.nav_home);
  setSpanText("nav-about", t.nav_about);
  setSpanText("nav-objectives", t.nav_objectives);
  setSpanText("nav-reset", t.nav_reset);  // 👈 مهم
  setSpanText("nav-news", t.nav_news);
  setText("nav-more", t.nav_more);
  setText("nav-conference", t.nav_conference);
  setSpanText("nav-contact", t.nav_contact);

  // ===== روابط القائمة (جوال) =====
  setText("nav-home-mobile", t.nav_home);
  setText("nav-about-mobile", t.nav_about);
  setText("nav-objectives-mobile", t.nav_objectives);
  setText("nav-reset-mobile", t.nav_reset);  // 👈 مهم
  setText("nav-news-mobile", t.nav_news);
  setText("nav-more-mobile", t.nav_more);
  setText("nav-conference-mobile", t.nav_conference);
  setText("nav-contact-mobile", t.nav_contact);

  // ===== الصفحة الرئيسية =====
  setText("hero-title", t.hero_title);
  setText("hero-text", t.hero_text);

  // ===== من نحن =====
  setText("about-title", t.about_title);
  setText("about-text1", t.about_text1);
  setText("about-text2", t.about_text2);

  // ===== الإنجازات =====
  setText("achievements-title", t.goals_title);
  setText("achv1", t.achv1);
  setText("achv2", t.achv2);
  setText("achv3", t.achv3);
  setText("achievements-text", t.achievements_text);

  // ===== الكروت =====
  setText("achievement1-title", t.goal1_title);
  setText("achievement2-title", t.goal2_title);
  setText("achievement3-title", t.goal3_title);
  setText("achievement4-title", t.goal4_title);
  setText("achievement5-title", t.goal5_title);

  // ===== الأهداف =====
  setText("obj-title", t.obj_title);
  setText("obj-intro", t.obj_intro);
  setText("obj1-title", t.obj1_title);
  setText("obj1-text", t.obj1_text);
  setText("obj2-title", t.obj2_title);
  setText("obj2-text", t.obj2_text);
  setText("obj3-title", t.obj3_title);
  setText("obj3-text", t.obj3_text);
  setText("obj4-title", t.obj4_title);
  setText("obj4-text", t.obj4_text);

  // ===== الأقسام =====
  setText("dept-title", t.dept_title);
  setText("dept1-title", t.dept1_title);
  setText("dept1-text", t.dept1_text);
  setText("dept2-title", t.dept2_title);
  setText("dept2-text", t.dept2_text);
  setText("dept3-title", t.dept3_title);
  setText("dept3-text", t.dept3_text);
  setText("dept4-title", t.dept4_title);
  setText("dept4-text", t.dept4_text);

  // ===== Facility =====
  setText("facility-title", t.facility_title);
  setText("facility-text1", t.facility_text1);
  setText("facility-text2", t.facility_text2);

  // ===== More =====
  setText("more-title", t.more_title);
  setText("more-text", t.more_text);
  setQuerySelectorText(".download-btn", t.more_btn);

  // ===== Footer =====
  setText("footer-text", t.footer_text);

  // ===== Contact =====
  setText("contact-title", t.contact_title);
  setText("contact-intro", t.contact_intro);
  setText("contact-email", t.contact_email);
  setText("contact-phone", t.contact_phone);
  setText("contact-location", t.contact_location);

  // ===== CO2 =====
  setText("co2-title", t.co2_title);
  setText("co2-text", t.co2_text);

  // ===== قسم الأخبار =====
  setText("news-title", t.news_title);
  setText("news-subtitle", t.news_subtitle);
  setText("category5", t.category5);
  setText("news5-date", t.news5_date);
  setText("news5-title", t.news5_title);
  setText("news5-desc", t.news5_desc);
  setHTML("news5-period", t.news5_period);
  setHTML("news5-location", t.news5_location);
  setHTML("news5-patron", t.news5_patron);
  setHTML("news5-donor", t.news5_donor);
  setText("readmore5", t.readmore);
  setText("news-btn-text", t.news_btn);

  
  // ===== RESET Section =====
  setText("reset-title", t.reset_title);
  setText("reset-subtitle", t.reset_subtitle);
  
  // ===== تحديث صورة RESET =====
  if (typeof updateResetImage === 'function') {
    updateResetImage();
  }
  
  // ===== تحديث معرض الشرائح =====
  if (typeof updateSlidesLanguage === 'function') {
    setTimeout(updateSlidesLanguage, 400);
  }
}

// ============================================================
//  TOGGLE FUNCTIONS
// ============================================================

function toggleLanguage() {
  currentLang = currentLang === "ar" ? "en" : "ar";
  applyLang(currentLang);
}

function toggleMenu() {
  const menu = document.getElementById("mobileMenu");
  if (menu) {
    menu.style.display = menu.style.display === "flex" ? "none" : "flex";
  }
}

// ============================================================
//  DOM CONTENT LOADED
// ============================================================

window.addEventListener("DOMContentLoaded", function() {
  // تطبيق اللغة
  applyLang(currentLang);
  
  // تحديث صورة RESET
  if (typeof updateResetImage === 'function') {
    updateResetImage();
  }
  
  // تهيئة معرض الشرائح
  if (typeof initSlides === 'function') {
    setTimeout(initSlides, 500);
  }
});

// ============================================================
//  REVEAL ANIMATIONS
// ============================================================

// كشف العناصر مع أول ظهور وإضافة كلاس visible
window.addEventListener("DOMContentLoaded", () => {
  const revealEls = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  revealEls.forEach(el => observer.observe(el));
});

// ============================================================
//  COUNTER ANIMATION FOR ACHIEVEMENTS
// ============================================================

function animateCounters() {
  const counters = document.querySelectorAll(".achievement .count");
  const speed = 100;

  counters.forEach(counter => {
    const parent = counter.closest(".achievement");
    if (!parent) return;
    
    const target = parseFloat(parent.getAttribute("data-target"));
    const suffix = parent.getAttribute("data-suffix") || "";
    const fixed = parseInt(parent.getAttribute("data-fixed")) || 0;

    let count = 0;
    const step = target / speed;

    const updateCount = () => {
      count += step;
      if (count < target) {
        counter.innerText = count.toFixed(fixed) + suffix;
        requestAnimationFrame(updateCount);
      } else {
        counter.innerText = target.toFixed(fixed) + suffix;
      }
    };

    updateCount();
  });
}

// تشغيل عند ظهور القسم
window.addEventListener("DOMContentLoaded", () => {
  const achievementsSection = document.querySelector("#achievements");
  let started = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !started) {
        animateCounters();
        started = true;
      }
    });
  }, { threshold: 0.4 });

  if (achievementsSection) observer.observe(achievementsSection);
});

// ============================================================
//  FADE IN REVEAL (مكرر للتأكد)
// ============================================================

window.addEventListener("DOMContentLoaded", () => {
  const revealEls = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  revealEls.forEach(el => observer.observe(el));
});

// ============================================================
//  OPEN PDF FUNCTION
// ============================================================

function openPDF() {
  if (currentLang === "ar") {
    window.open("PIU_Profile/PIU_Profile_ar.pdf", "_blank");
  } else {
    window.open("PIU_Profile/PIU_Profile_en.pdf", "_blank");
  }
}

// ============================================================
//  PREVENT BACK
// ============================================================

history.pushState(null, null, window.location.href);
window.onpopstate = function () {
  history.go(1);
};

// ============================================================
//  SCROLL TO SECTION
// ============================================================

function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}

// ============================================================
//  SCROLL TO TOP ON LOAD
// ============================================================

window.addEventListener("load", () => {
  setTimeout(() => window.scrollTo(0, 0), 50);
});
