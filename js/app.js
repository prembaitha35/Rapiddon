/* ==========================================================================
   Rapiddon Landing Page Logic - Interactive Simulators & Waitlist Forms
   ========================================================================== */

// Translation Database (English, Hindi, Marathi)
const TRANSLATIONS = {
    en: {
        nav_how: "How It Works",
        nav_price: "Price Range",
        nav_features: "Features",
        nav_app: "The App",
        nav_faq: "FAQs",
        nav_workers: "For Workers",
        nav_join: "Join Waitlist",
        badge_soon: "App Launching Soon",
        hero_title1: "Workers Compete.",
        hero_title2: "Customers Choose.",
        hero_desc: "The ultimate home services marketplace powered by a <strong>Reverse Bidding Model</strong>. Describe your job, receive custom bids from verified local professionals, compare prices and ratings, and choose the best fit.",
        cta_customer: "Join as Customer",
        cta_worker: "Register as Worker",
        stat_price: "Transparent Price",
        stat_cats: "Core Categories",
        stat_eta: "Average ETA",
        hiw_title: "The Reverse Bidding Revolution",
        hiw_sub: "Tired of fixed pricing and auto-assigned workers? Here's how Rapiddon works.",
        sim_step1: "1. Create Request",
        sim_step2: "2. Broadcast Job",
        sim_step3: "3. Receive Bids",
        sim_step4: "4. Compare & Choose",
        price_title: "Smart Price Control",
        cats_title: "Service Categories",
        cats_sub: "Launching with five foundational services, scaling up quickly.",
        feat_cust_title: "For Customers",
        feat_cust_btn: "Register as Customer",
        feat_work_title: "For Service Partners",
        feat_work_btn: "Register as Partner",
        cs_title: "Our Mobile App is Coming Soon",
        cs_desc: "We are putting the final touches on our iOS and Android applications. Enter your details below to get early beta access, launch notifications, and a **₹100 credit voucher** towards your first booking.",
        cs_notify: "Notify Me",
        faq_title: "Frequently Asked Questions",
        faq_sub: "Everything you need to know about the Rapiddon marketplace.",
        footer_pitch: "Workers Compete. Customers Choose. The next generation home services bidding marketplace."
    },
    hi: {
        nav_how: "यह कैसे काम करता है",
        nav_price: "कीमत की सीमा",
        nav_features: "विशेषताएं",
        nav_app: "ऐप",
        nav_faq: "अक्सर पूछे जाने वाले प्रश्न",
        nav_workers: "कामगारों के लिए",
        nav_join: "वेटलिस्ट में शामिल हों",
        badge_soon: "ऐप जल्द ही लॉन्च हो रहा है",
        hero_title1: "कामगार प्रतिस्पर्धा करेंगे।",
        hero_title2: "ग्राहक चुनेंगे।",
        hero_desc: "रिवर्स बिडिंग मॉडल द्वारा संचालित सर्वश्रेष्ठ घरेलू सेवा मार्केटप्लेस। अपने काम का विवरण दें, सत्यापित स्थानीय पेशेवरों से कस्टम बोलियाँ प्राप्त करें, कीमतों और रेटिंग की तुलना करें, और सबसे उपयुक्त कामगार चुनें।",
        cta_customer: "ग्राहक के रूप में जुड़ें",
        cta_worker: "कामगार के रूप में पंजीकरण करें",
        stat_price: "पारदर्शी कीमत",
        stat_cats: "मुख्य श्रेणियां",
        stat_eta: "औसत आगमन समय",
        hiw_title: "रिवर्स बिडिंग क्रांति",
        hiw_sub: "निश्चित कीमतों और स्वचालित रूप से असाइन किए गए कामगारों से थक गए हैं? जानिए कैसे काम करता है रैपिडॉन।",
        sim_step1: "1. अनुरोध बनाएं",
        sim_step2: "2. काम प्रसारित करें",
        sim_step3: "3. बोलियाँ प्राप्त करें",
        sim_step4: "4. तुलना करें और चुनें",
        price_title: "स्मार्ट मूल्य नियंत्रण",
        cats_title: "सेवा श्रेणियाँ",
        cats_sub: "पांच बुनियादी सेवाओं के साथ शुरुआत कर रहे हैं, जल्द ही और सेवाएं जोड़ी जाएंगी।",
        feat_cust_title: "ग्राहकों के लिए",
        feat_cust_btn: "ग्राहक के रूप में पंजीकरण करें",
        feat_work_title: "सेवा भागीदारों के लिए",
        feat_work_btn: "भागीदार के रूप में पंजीकरण करें",
        cs_title: "हमारा मोबाइल ऐप जल्द ही आ रहा है",
        cs_desc: "हम अपने iOS और Android ऐप्स को अंतिम रूप दे रहे हैं। शुरुआती बीटा एक्सेस, लॉन्च नोटिफिकेशन और अपनी पहली बुकिंग पर ₹100 का क्रेडिट वाउचर पाने के लिए नीचे अपना विवरण दर्ज करें।",
        cs_notify: "मुझे सूचित करें",
        faq_title: "अक्सर पूछे जाने वाले प्रश्न",
        faq_sub: "रैपिडॉन मार्केटप्लेस के बारे में वह सब कुछ जो आपको जानना आवश्यक है।",
        footer_pitch: "कामगार प्रतिस्पर्धा करेंगे। ग्राहक चुनेंगे। अगली पीढ़ी का घरेलू सेवा बोली मार्केटप्लेस।"
    },
    mr: {
        nav_how: "हे कसे काम करते",
        nav_price: "किंमतीची श्रेणी",
        nav_features: "वैशिष्ट्ये",
        nav_app: "अ‍ॅप",
        nav_faq: "सतत विचारले जाणारे प्रश्न",
        nav_workers: "कामगारांसाठी",
        nav_join: "वेटलिस्टमध्ये सामील व्हा",
        badge_soon: "अ‍ॅप लवकरच येत आहे",
        hero_title1: "कामगार स्पर्धा करतील.",
        hero_title2: "ग्राहक निवडतील.",
        hero_desc: "रिव्हर्स बिडिंग मॉडेलवर आधारित सर्वोत्तम गृह सेवा मार्केटप्लेस. तुमच्या कामाचे वर्णन करा, पडताळणी केलेल्या स्थानिक व्यावसायिकांकडून कस्टम बोली मिळवा, किंमती आणि रेटिंगची तुलना करा आणि योग्य कामगाराची निवड करा.",
        cta_customer: "ग्राहक म्हणून सामील व्हा",
        cta_worker: "कामगार म्हणून नोंदणी करा",
        stat_price: "पारदर्शक किंमत",
        stat_cats: "मुख्य श्रेणी",
        stat_eta: "सरासरी पोहोचण्याची वेळ",
        hiw_title: "रिव्हर्स बिडिंग क्रांती",
        hiw_sub: "ठराविक किंमती आणि स्वयंचलितपणे नेमलेल्या कामगारांना कंटाळलात? पहा रॅपिडॉन कसे कार्य करते.",
        sim_step1: "1. मागणी तयार करा",
        sim_step2: "2. काम प्रसारित करा",
        sim_step3: "3. बोली प्राप्त करा",
        sim_step4: "4. तुलना करा आणि निवडा",
        price_title: "स्मार्ट किंमत नियंत्रण",
        cats_title: "सेवा श्रेणी",
        cats_sub: "पाच पायाभूत सेवांसह सुरुवात करत आहोत, लवकरच अधिक सेवा जोडल्या जातील.",
        feat_cust_title: "ग्राहकांसाठी",
        feat_cust_btn: "ग्राहक म्हणून नोंदणी करा",
        feat_work_title: "सेवा भागीदारांसाठी",
        feat_work_btn: "भागीदार म्हणून नोंदणी करा",
        cs_title: "आमचे मोबाईल अ‍ॅप लवकरच येत आहे",
        cs_desc: "आम्ही आमच्या iOS आणि Android अ‍ॅप्सचे काम अंतिम टप्प्यात आणत आहोत. पहिल्या बुकिंगवर ₹१०० चे क्रेडिट व्हाउचर, बीटा प्रवेश आणि लॉन्चच्या सूचना मिळवण्यासाठी खाली तुमची माहिती प्रविष्ट करा.",
        cs_notify: "मला सूचित करा",
        faq_title: "सतत विचारले जाणारे प्रश्न",
        faq_sub: "रॅपिडॉन मार्केटपेसबद्दल तुम्हाला माहित असणे आवश्यक असलेले सर्व काही.",
        footer_pitch: "कामगार स्पर्धा करतील. ग्राहक निवडतील. पुढील पिढीचा गृह सेवा बोली मार्केटप्लेस."
    }
};

// Global Translation State
let currentLang = 'en';

function applyTranslations(lang) {
    currentLang = lang;
    localStorage.setItem('rapiddon_lang', lang);
    
    // Update header switch button text and flag
    const btn = document.getElementById('currentLangBtn');
    if (btn) {
        let flag = '🇬🇧';
        let code = 'EN';
        if (lang === 'hi') { flag = '🇮🇳'; code = 'HI'; }
        else if (lang === 'mr') { flag = '🇮🇳'; code = 'MR'; }
        btn.textContent = `${flag} ${code}`;
    }
    
    // Process all translation targets
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (TRANSLATIONS[lang] && TRANSLATIONS[lang][key]) {
            const val = TRANSLATIONS[lang][key];
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = val;
            } else {
                if (val.includes('<') && val.includes('>')) {
                    el.innerHTML = val;
                } else {
                    el.textContent = val;
                }
            }
        }
    });
}

function setLanguage(lang) {
    applyTranslations(lang);
    
    // Hide language picker overlay with nice fade animation
    const langOverlay = document.getElementById('langPickerOverlay');
    if (langOverlay) {
        langOverlay.classList.add('fade-out');
        setTimeout(() => {
            langOverlay.classList.remove('visible');
            langOverlay.classList.remove('fade-out');
            document.body.style.overflow = ''; // Restore page scrolling
        }, 500);
    }
}

function cycleLang() {
    let nextLang = 'en';
    if (currentLang === 'en') nextLang = 'hi';
    else if (currentLang === 'hi') nextLang = 'mr';
    else if (currentLang === 'mr') nextLang = 'en';
    applyTranslations(nextLang);
}

// Price Rules Matrix (matching allowed range guidelines)
const PRICE_DATABASE = {
    plumber: { avg: 350, min: 250, max: 450, icon: '🔧' },
    electrician: { avg: 400, min: 300, max: 500, icon: '⚡' },
    carpenter: { avg: 380, min: 280, max: 480, icon: '🔨' },
    painter: { avg: 300, min: 200, max: 400, icon: '🎨' },
    handyman: { avg: 250, min: 180, max: 320, icon: '🛠️' }
};

// Global Registration States
let currentRole = 'customer';
let otpTimer = null;
let otpTimeLeft = 30;
let lastSubmittedData = {};

document.addEventListener('DOMContentLoaded', () => {
    // Apply previously saved language if any, default to English
    const savedLang = localStorage.getItem('rapiddon_lang') || 'en';
    applyTranslations(savedLang);

    // 1. Navbar Scroll Effect
    const header = document.getElementById('mainHeader');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // 2. Mobile Nav Toggle
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        const icon = navToggle.querySelector('i');
        if (navMenu.classList.contains('active')) {
            icon.className = 'fa-solid fa-xmark';
        } else {
            icon.className = 'fa-solid fa-bars';
        }
    });

    // Close menu when link is clicked
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            navToggle.querySelector('i').className = 'fa-solid fa-bars';
        });
    });

    // 3. FAQ Accordion Toggle
    document.querySelectorAll('.faq-question').forEach(button => {
        button.addEventListener('click', () => {
            const item = button.parentElement;
            const isActive = item.classList.contains('active');
            
            // Close all items
            document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));
            
            // Open current if not active before
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });

    // 4. Initialize Interactive Range Calculator
    updatePriceRangeCalculator();

    // 5. Initialize Admin Panel Data
    updateAdminDatabaseTable();

    // 6. Handle OTP boxes input shifting
    const otpBoxes = document.querySelectorAll('.otp-box');
    otpBoxes.forEach((box, index) => {
        box.addEventListener('input', (e) => {
            if (box.value && index < otpBoxes.length - 1) {
                otpBoxes[index + 1].focus();
            }
        });
        box.addEventListener('keydown', (e) => {
            if (e.key === 'Backspace' && !box.value && index > 0) {
                otpBoxes[index - 1].focus();
            }
        });
    });
});

/* ==========================================================================
   Interactive USP Reverse Bidding Simulator
   ========================================================================== */
function runSimStep(stepNumber) {
    // Update Control Buttons
    const buttons = document.querySelectorAll('.sim-btn');
    buttons.forEach((btn, idx) => {
        if (idx === stepNumber - 1) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    // Update Content Cards
    const steps = document.querySelectorAll('.sim-step-content');
    steps.forEach((step, idx) => {
        if (idx === stepNumber - 1) {
            step.classList.add('active');
        } else {
            step.classList.remove('active');
        }
    });

    // Specific triggers for animations on steps
    if (stepNumber === 3) {
        const bidItems = document.querySelectorAll('.sim-bid-item');
        bidItems.forEach(item => {
            item.style.animation = 'none';
            // Trigger reflow
            void item.offsetWidth;
            item.style.animation = null;
        });
    }

    if (stepNumber === 4) {
        const successBanner = document.querySelector('.success-banner');
        successBanner.style.opacity = '0';
        successBanner.style.transform = 'scale(0.8)';
        setTimeout(() => {
            successBanner.style.transition = 'all 0.3s ease';
            successBanner.style.opacity = '1';
            successBanner.style.transform = 'scale(1)';
        }, 1500);
    }
}

/* ==========================================================================
   Price Control Engine & Calculator
   ========================================================================== */
function updatePriceRangeCalculator() {
    const categoryKey = document.getElementById('serviceCategory').value;
    const details = PRICE_DATABASE[categoryKey];

    if (!details) return;

    // Update Text Fields
    document.getElementById('avgPrice').textContent = `₹${details.avg}/hr`;
    document.getElementById('minPrice').textContent = `₹${details.min}/hr`;
    document.getElementById('maxPrice').textContent = `₹${details.max}/hr`;

    // Configure Bid Slider
    const slider = document.getElementById('bidSlider');
    slider.min = Math.floor(details.min * 0.7);
    slider.max = Math.ceil(details.max * 1.3);
    slider.value = details.avg;

    // Update slider UI highlights
    updateActiveRangeBar(details.min, details.max, slider.min, slider.max);
    
    // Check default state
    checkBidValidity();
}

function updateActiveRangeBar(minAllowed, maxAllowed, minSlider, maxSlider) {
    const rangeBar = document.getElementById('rangeBar');
    const totalSliderSpan = maxSlider - minSlider;
    
    const leftPercentage = ((minAllowed - minSlider) / totalSliderSpan) * 100;
    const rightPercentage = 100 - (((maxAllowed - minSlider) / totalSliderSpan) * 100);
    
    rangeBar.style.left = `${leftPercentage}%`;
    rangeBar.style.right = `${rightPercentage}%`;
}

function checkBidValidity() {
    const slider = document.getElementById('bidSlider');
    const val = parseInt(slider.value);
    document.getElementById('bidValue').textContent = `₹${val}/hr`;

    const categoryKey = document.getElementById('serviceCategory').value;
    const details = PRICE_DATABASE[categoryKey];

    const messageBox = document.getElementById('bidMessage');
    const custPay = document.getElementById('custPay');
    const commFee = document.getElementById('commFee');
    const workEarn = document.getElementById('workEarn');

    // Run Commission math
    custPay.textContent = `₹${val}`;
    const commission = Math.round(val * 0.10); // 10%
    commFee.textContent = `-₹${commission}`;
    workEarn.textContent = `₹${val - commission}`;

    if (val >= details.min && val <= details.max) {
        // Valid bid
        messageBox.className = 'bid-status-message success';
        messageBox.innerHTML = `<i class="fa-solid fa-circle-check"></i> Bid is valid! Market range is ₹${details.min} - ₹${details.max}/hr.`;
    } else if (val < details.min) {
        // Underpaying warning
        messageBox.className = 'bid-status-message error';
        messageBox.innerHTML = `<i class="fa-solid fa-triangle-exclamation"></i> Bid is too low! Minimum allowed rate is ₹${details.min}/hr to protect worker pay.`;
    } else {
        // Overpaying warning
        messageBox.className = 'bid-status-message error';
        messageBox.innerHTML = `<i class="fa-solid fa-circle-xmark"></i> Price exceeds cap! Maximum allowed rate is ₹${details.max}/hr to prevent overcharging.`;
    }
}

/* ==========================================================================
   Coming Soon Mobile Phone Simulator Carousel
   ========================================================================== */
function switchPhoneScreen(screenId) {
    // Update active nav dot
    const dots = document.querySelectorAll('.phone-nav-dot');
    dots.forEach((dot, idx) => {
        if (idx === screenId - 1) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });

    // Update Screen Contents
    const contents = document.querySelectorAll('.phone-screen-content');
    contents.forEach((screen, idx) => {
        if (idx === screenId - 1) {
            screen.classList.add('active');
        } else {
            screen.classList.remove('active');
        }
    });
}

// Coming Soon Notify Form Submission
function handleWaitlistSubmit(event) {
    event.preventDefault();
    const emailInput = document.getElementById('waitlistEmail');
    const email = emailInput.value.trim();

    if (!email) return;

    const feedback = document.getElementById('waitlistFormFeedback');
    
    // Save mock registrant
    saveMockRegistration({
        type: 'General Waitlist',
        name: 'Email Subscriber',
        phone: 'N/A',
        details: email,
        timestamp: new Date().toISOString()
    });

    feedback.className = 'form-feedback-message success';
    feedback.innerHTML = `<i class="fa-solid fa-circle-check"></i> You have joined the queue! Launch codes sent to <strong>${email}</strong>.`;
    
    emailInput.value = '';
    
    // Reset feedback notice after 4 seconds
    setTimeout(() => {
        feedback.innerHTML = '';
    }, 4000);
}

/* ==========================================================================
   Modal Overlay & Registration Forms Manager
   ========================================================================== */
function openModal(defaultTab = 'customer') {
    const modal = document.getElementById('registrationModal');
    modal.classList.add('active');
    
    // Open chosen tab
    switchModalTab(defaultTab);
}

function closeModal() {
    const modal = document.getElementById('registrationModal');
    modal.classList.remove('active');
    
    // Reset all views
    resetModalViews();
}

function resetModalViews() {
    document.getElementById('customerForm').classList.add('active');
    document.getElementById('workerForm').classList.remove('active');
    document.getElementById('successScreen').classList.remove('active');
    
    // Clear forms
    document.getElementById('customerForm').reset();
    document.getElementById('workerForm').reset();
}

function switchModalTab(tabRole) {
    currentRole = tabRole;
    
    const customerForm = document.getElementById('customerForm');
    const workerForm = document.getElementById('workerForm');
    const successScreen = document.getElementById('successScreen');
    
    const tabCustomer = document.getElementById('tabCustomer');
    const tabWorker = document.getElementById('tabWorker');

    // Reset screen toggles
    successScreen.classList.remove('active');

    if (tabRole === 'customer') {
        tabCustomer.classList.add('active');
        tabWorker.classList.remove('active');
        customerForm.classList.add('active');
        workerForm.classList.remove('active');
    } else {
        tabCustomer.classList.remove('active');
        tabWorker.classList.add('active');
        customerForm.classList.remove('active');
        workerForm.classList.add('active');
    }
}

// Handle Form Submissions & Verification Steps
function handleRegistration(event, role) {
    event.preventDefault();

    if (role === 'customer') {
        const name = document.getElementById('custName').value.trim();
        const phone = document.getElementById('custPhone').value.trim();
        const email = document.getElementById('custEmail').value.trim();
        const location = document.getElementById('custLocation').value;
        const address = document.getElementById('custAddress').value.trim();

        lastSubmittedData = {
            type: 'Customer',
            name: name,
            phone: phone,
            email: email,
            location: location,
            address: address,
            details: `${email} (${location})`,
            timestamp: new Date().toISOString()
        };
    } else {
        const name = document.getElementById('workName').value.trim();
        const phone = document.getElementById('workPhone').value.trim();
        const category = document.getElementById('workCategory').value;
        const aadhaar = document.getElementById('workAadhaar').value.trim();
        const pan = document.getElementById('workPan').value.trim();
        const address = document.getElementById('workAddress').value.trim();

        // Validation checks
        if (aadhaar.length !== 12 || isNaN(aadhaar)) {
            alert('Aadhaar number must be exactly 12 digits');
            return;
        }

        if (pan.length !== 10) {
            alert('PAN number must be exactly 10 alphanumeric characters');
            return;
        }

        lastSubmittedData = {
            type: `Worker (${category})`,
            name: name,
            phone: phone,
            email: 'N/A',
            location: `Pune / Ahilyanagar (${category})`,
            address: address,
            details: `Aadhaar: ${aadhaar} | PAN: ${pan}`,
            timestamp: new Date().toISOString()
        };
    }

    // Directly save mock registration without OTP
    saveMockRegistration(lastSubmittedData);

    // Hide registration forms
    document.getElementById('customerForm').classList.remove('active');
    document.getElementById('workerForm').classList.remove('active');

    // Switch view to success screen
    const successScreen = document.getElementById('successScreen');
    successScreen.classList.add('active');

    // Customize success text
    const successMsg = document.getElementById('successMessage');
    const couponBox = document.getElementById('couponBox');
    
    if (role === 'customer') {
        successMsg.innerHTML = `Welcome to the waitlist, <strong>${lastSubmittedData.name}</strong>! We will notify you once our bidding marketplace expands to your neighborhood.`;
        couponBox.style.display = 'block';
    } else {
        successMsg.innerHTML = `Thanks for submitting credentials, <strong>${lastSubmittedData.name}</strong>! Our verification team will review your details. We will notify you as soon as registrations open.`;
        couponBox.style.display = 'none';
    }
}

function saveMockRegistration(record) {
    // Read current database
    let database = [];
    try {
        const stored = localStorage.getItem('rapiddon_waitlist');
        if (stored) database = JSON.parse(stored);
    } catch (e) {
        console.error('Error reading localStorage waitlist database:', e);
    }

    // Add new record
    database.unshift(record);

    // Save back
    try {
        localStorage.setItem('rapiddon_waitlist', JSON.stringify(database));
    } catch (e) {
        console.error('Error writing localStorage waitlist database:', e);
    }
}


// 7. Page Preloader Fade-out & Language Selection Trigger
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    if (preloader) {
        setTimeout(() => {
            preloader.classList.add('fade-out');
            
            // Show the language picker overlay with animation
            const langOverlay = document.getElementById('langPickerOverlay');
            if (langOverlay) {
                langOverlay.classList.add('visible');
                // Prevent body scroll behind language picker
                document.body.style.overflow = 'hidden';
            }
        }, 1500); // 1.5s delay to appreciate premium logo scale animation
    }
});

