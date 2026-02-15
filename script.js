/* ============================================
   YASSIN & ZIAD'S TREE FORT - SCRIPT
   Passcode Lock + Photo Viewer + Music
   ============================================ */

// =============================================
// PASSCODE LOCK
// =============================================
const lockScreen = document.getElementById('lockScreen');
const mainSite = document.getElementById('mainSite');
const passcodeInput = document.getElementById('passcodeInput');
const passcodeBtn = document.getElementById('passcodeBtn');
const lockError = document.getElementById('lockError');

const CORRECT_DATES = ['23-8-2024', '23-08-2024'];

function attemptUnlock() {
    const entered = passcodeInput.value.trim();

    if (CORRECT_DATES.includes(entered)) {
        lockScreen.classList.add('unlocked');
        mainSite.classList.add('visible');
        lockError.textContent = '';
        console.log('🔓 Cave unlocked!');

        // Try to auto-play music
        const bgMusic = document.getElementById('bg-music');
        const vinyl = document.getElementById('vinyl');
        if (bgMusic) {
            bgMusic.play().then(() => {
                if (vinyl) vinyl.classList.add('spinning');
                isMusicPlaying = true;
                console.log('🎵 Music auto-started');
            }).catch(() => {
                console.log('🔇 Auto-play blocked — click vinyl to start');
            });
        }
    } else {
        passcodeInput.classList.add('shake');
        lockError.textContent = '❌ Wrong Date! Try again!';
        setTimeout(() => {
            passcodeInput.classList.remove('shake');
        }, 500);
    }
}

passcodeBtn.addEventListener('click', attemptUnlock);
passcodeInput.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') attemptUnlock();
});

// =============================================
// CONFIGURATION
// =============================================
const totalNormalPhotos = 115;
const totalGoofyPhotos = 92;

// =============================================
// STORY DATABASE
// =============================================

const normalStories = {
    1: "المقابلة الاولى بين زياد كارم و بين كاي بينك مان ,يساسين احمد في الباص رايحين العين السخنة",
    2: "المقابلة الاولى بين زياد كارم و بين كاي بينك مان ,يساسين احمد في الباص رايحين العين السخنة",
    3: "المقابلة الاولى بين زياد كارم و بين كاي بينك مان ,يساسين احمد في الباص رايحين العين السخنة",
    4: "لما قلعنا و جاهزين للبحر",
    5: "لما قلعنا و جاهزين للبحر",
    6: "بنجرب كاميرة الايفون 13",
    7: "بنجرب كاميرة اللايفون 13",
    8: "بنجرب كاميرة اللايفون 13",
    9: "بنجرب كامبرة اللايفون 13",
    10: "الصداقة في المصيف",
    11: "الصداقة في المصيف",
    12: "هيدين جيم :اول تجربة للكاميرةالديجيتال",
    13: "تصوير فاجر بلكاميرة الديجيتال",
    14: "تصوير فاجر بلكاميرة الديجيتال",
    15: "تصوير فاجر بلكاميرة الديجيتال",
    16: "Hidden Gem",
    17: "تصوير فاجر بلكاميرة الديجيتال",
    18: "فرق الطول الاستعراضي",
    19: "فرق الطول الاستعراضي",
    20: "فرق الطول الاستعراضي",
    21: "فرق الطول الاستعراضي",
    22: "فرق الطول الاستعراضي",
    23: "الصداقة القوية جداً",
    24: "الصداقة القوية جداً",
    25: "الصداقة القوية جداً",
    26: "الصداقة القوية جداً",
    27: "Hidden Gem",
    28: "بنحب بعض اوي",
    29: "بنحب بعض اوي",
    30: "بنحب بعض اوي",
    31: "كيفية لعب بلياردو على طريقة زياد كارم",
    32: "خروجة في وسط البلد احنا الالتنين بس",
    33: "خروجة في وسط البلد احنا الالتنين بس",
    34: "خروجة في وسط البلد احنا الالتنين بس ابيض واسود",
    35: "زياد و يسين و بيدو لما كننا بناكل سوشي في السطح",
    36: "زياد و يسين و بيدو لما كننا بناكل سوشي في السطح",
    37: "زياد و يسين و بيدو لما كننا بناكل سوشي في السطح",
    38: "زياد و يسين و بيدو لما كننا بناكل سوشي في السطح",
    39: "AURA ON POINT",
    40: "AURA ON POINT",
    41: "AURA ON POINT",
    42: "AURA ON POINT",
    43: "لما زياد كارم كان تعبان وروحنا اكلنا بلبن ",
    44: "لما زياد كمار كان تعبان وياسين جاله البيت عزمه على بيتزا",
    45: "يوم مميز جداً في معرض الكتاب مع علي و شادي",
    46: "صورة في اسانسير زياد كارم التعبان",
    47: "لما كنا في اسانسير وليد في رمضان و كلنا بيتزا من الزعيم مع بقية الشلة",
    48: "لما كنا في اسانسير وليد في رمضان و كلنا بيتزا من الزعيم مع بقية الشلة",
    49: "لما كنا في اسانسير وليد في رمضان و كلنا بيتزا من الزعيم مع بقية الشلة",
    50: "لما كنا في اسانسير وليد في رمضان و كلنا بيتزا من الزعيم مع بقية الشلة",
    51: "لما كنا في اسانسير وليد في رمضان و كلنا بيتزا من الزعيم مع بقية الشلة",
    52: "زياد كارم راح لياسين الكلية ة قدي معاه اليوم",
    53: "حمام كلية ياسين",
    54: "حمام كلية ياسين",
    55: "حمام كلية ياسين",
    56: "يوم جميل في الزمالك مع علي",
    57: "لما روحنا نتفرج على فيلم فينوم الأخير",
    58: "HIDDEN GEM",
    59: "Important Video Call"
};

const goofyStories = {
    1: "ياسين بياكل سندوتش في فاصل البحر",
    2: "تدريجة الشعر السيئة",
    3: "يخربيت الجمال وربنا",
    4: "Chill Guy",
    5: "Chill Guy",
    6: "جيم و عضلات وعنده يخت و جيبات",
    7: "زياد بياكل شيبسي",
    8: "التفكير العميق",
    9: "زياد بيشب شاي",
    10: "زياد عامل نفسه زعلان",
    11: "YVL",
    12: "زياد عامل نفسه سرسجي",
    13: "ياسين بيشرب سجاير في استارحة الكول سنتر",
    14: "تدريجة زياد كارم الجديدة",
    15: "زياد بيفلكس الطقم",
    16: "زياد بيفلكس الطقم",
    17: "ياسين في المستعمرة القناطر الخيرية الساعة 6 الصبح",
    18: "ياسين في المستعمرة القناطر الخيرية الساعة 6 الصبح",
    19: "ياسين في المستعمرة القناطر الخيرية الساعة 6 الصبح",
    20: "ياسين في المستعمرة القناطر الخيرية الساعة 6 الصبح",
    21: "ياسين في المستعمرة القناطر الخيرية الساعة 6 الصبح",
    22: "ياسين في المستعمرة القناطر الخيرية الساعة 6 الصبح",
    23: "ياسين في المستعمرة القناطر الخيرية الساعة 6 الصبح",
    24: "ياسين في القناطر الخيرية مستني النجرسكو من الحرمين",
    25: "ياسين في القناطر الخيرية مستني النجرسكو من الحرمين",
    26: "ياسين في القناطر الخيرية مستني النجرسكو من الحرمين",
    27: "إعادة إحياء فاشلة لصورة ياسين الايقونية",
    28: "إعادة إحياء فاشلة لصورة ياسين الايقونية",
    29: "اورا في شارع كلية زياد",
    30: "اورا في شارع كلية زياد",
    31: "اورا في شارع كلية زياد",
    32: "اورا في شارع كلية زياد",
    33: "اورا في شارع كلية زياد",
    34: "ياسين ظاظا",
    35: "ياسين ظاظا",
    36: "ياسين ظاظا",
    37: "ياسين في القناطر بيدي التحية",
    38: "ياسين في القناطر بيدي التحية",
    39: "ياسين في القناطر بيدي التحية",
    40: "ياسين في القناطر بيدي التحية",
    41: "ياسين في القناطر بيدي التحية",
    42: "ياسين في القناطر بيدي التحية",
    43: "ياسين في القناطر بيدي التحية",
    44: "ياسين في القناطر بيدي التحية",
    45: "الكارف فايب",
    46: "الكارف فايب",
    47: "الكارف فايب",
    48: "الكارف فايب",
    49: "Hidden Gem",
    50: "الكارف فايب",
    51: "ياسين في على عربية جد زياد كارم",
    52: "ياسين على عربية جد زياد كارم",
    53: "ياسين بيشرب هوت تشوكليت بلمرمشلو من بلبن",
    54: "ياسين بيشرب هوت تشوكليت بلمرمشلو من بلبن",
    55: "بيشرب سجارة في بلكونة زياد",
    56: "ياسين و سجارة فايب في السينما هول",
    57: "ياسين و سجارة فايب في السينما هول",
    58: "ياسين و سجارة فايب في السينما هول",
    59: "الكارف في السينما هول",
    60: "الكارف في السينما هول",
    61: "صورة مضحكة",
    62: "صورة مضحكة",
    63: "شيشة في وسط البلد",
    64: "شيشة في وسط البلد",
    65: "شيشة في وسط البلد",
    66: "شيشة في وسط البلد",
    67: "شيشة في وسط البلد",
    68: "شيشة في وسط البلد",
    69: "زياد اورا قدام باب شقته",
    70: "حد ينزل الجيم",
    71: "الصدمة",
    72: "سبونجبوب",
    73: "اصانصير",
    74: "Cooking",
    75: "Call while Cooking",
    76: "عضلات",
    77: "shhhhh",
    78: "عرق العضلات",
    79: "عذراً لا احدث النساء",
    80: "Vamp",
    81: "Hidden Gem",
    82: "قهوة خلال الشغل",
    83: "Hidden Sad Gem",
    84: "ايسكريم",
    85: "بتاع مسكر",
    86: "Hidden Gem",
    87: "النهاردة",
    88: "سايبر ايرا",
    89: "امتى شعري ييكبر",
    90: "Swag Boi",
    91: "The Real Chill Guy",
    92: "سندوتش"
};

// =============================================
// DEFAULT MESSAGES
// =============================================
const defaultMessages = {
    normal: "🔓 Memory Unlocked",
    goofy: "💀 Certified Crash Out Moment"
};

// =============================================
// DOM ELEMENTS
// =============================================
const imageContainer = document.getElementById('imageContainer');
const placeholder = document.getElementById('placeholder');
const memoryImage = document.getElementById('memoryImage');
const storyContainer = document.getElementById('storyContainer');
const storyText = document.getElementById('storyText');

// =============================================
// MUSIC — Spinning Vinyl Toggle
// =============================================
const bgMusic = document.getElementById('bg-music');
const vinyl = document.getElementById('vinyl');

let isMusicPlaying = false;

if (vinyl && bgMusic) {
    vinyl.addEventListener('click', function () {
        if (isMusicPlaying) {
            bgMusic.pause();
            vinyl.classList.remove('spinning');
            isMusicPlaying = false;
            console.log('🔇 Music paused');
        } else {
            bgMusic.play().then(() => {
                vinyl.classList.add('spinning');
                isMusicPlaying = true;
                console.log('🎵 Music playing');
            }).catch(err => {
                console.warn('Music play blocked:', err);
            });
        }
    });
}

// =============================================
// PHOTO STATE
// =============================================
let lastNormalPhoto = null;
let lastGoofyPhoto = null;

// =============================================
// MAIN FUNCTION: Unlock Memory
// =============================================
function unlockMemory(type) {
    const isNormal = type === 'normal';
    const totalPhotos = isNormal ? totalNormalPhotos : totalGoofyPhotos;
    const stories = isNormal ? normalStories : goofyStories;
    const folder = isNormal ? 'normal' : 'goofy';
    const lastPhoto = isNormal ? lastNormalPhoto : lastGoofyPhoto;

    let photoNumber;
    if (totalPhotos > 1) {
        do {
            photoNumber = Math.floor(Math.random() * totalPhotos) + 1;
        } while (photoNumber === lastPhoto);
    } else {
        photoNumber = 1;
    }

    if (isNormal) lastNormalPhoto = photoNumber;
    else lastGoofyPhoto = photoNumber;

    // *** CRUCIAL: photo (N).jpg format with space and parentheses ***
    const imagePath = "assets/" + folder + "/photo (" + photoNumber + ").jpg";

    imageContainer.classList.add('loading');
    storyContainer.classList.remove('visible');

    const img = new Image();
    img.onload = function () {
        placeholder.style.display = 'none';
        memoryImage.classList.remove('hidden', 'fade-in');
        memoryImage.src = imagePath;
        void memoryImage.offsetWidth;
        memoryImage.classList.add('fade-in');
        imageContainer.classList.remove('loading');

        const story = stories[photoNumber] || defaultMessages[type];
        storyText.textContent = story;

        setTimeout(() => {
            storyContainer.classList.add('visible');
        }, 300);

        if (!isNormal) {
            imageContainer.classList.add('shake');
            setTimeout(() => imageContainer.classList.remove('shake'), 500);
        }
    };

    img.onerror = function () {
        // Photo missing — try a different one silently
        imageContainer.classList.remove('loading');
        console.warn('Skipped missing photo: ' + imagePath);
        // Try again with a different number
        unlockMemory(type);
    };

    img.src = imagePath;
}

// =============================================
// KEYBOARD SHORTCUTS
// =============================================
document.addEventListener('keydown', function (e) {
    if (e.key === 'n' || e.key === 'N') unlockMemory('normal');
    if (e.key === 'g' || e.key === 'G') unlockMemory('goofy');
});

// =============================================
// BASMALA — Heart Animation on Click
// =============================================
const basmalaZone = document.getElementById('basmalaZone');
const heartContainer = document.getElementById('heartContainer');
const heartEmojis = ['❤️', '💖', '💕', '💗', '💝', '☕', '🦉', '🌹', '👑'];

if (basmalaZone && heartContainer) {
    basmalaZone.addEventListener('click', function (e) {
        for (let i = 0; i < 8; i++) {
            const heart = document.createElement('span');
            heart.classList.add('floating-heart');
            heart.textContent = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];

            const xOffset = (Math.random() - 0.5) * 200;
            heart.style.left = (e.clientX + xOffset) + 'px';
            heart.style.top = e.clientY + 'px';
            heart.style.fontSize = (1.2 + Math.random() * 1.5) + 'rem';
            heart.style.animationDelay = (Math.random() * 0.4) + 's';

            heartContainer.appendChild(heart);
            setTimeout(() => heart.remove(), 2500);
        }
        console.log('💖 Special thanks for Basmala!');
    });
}

// =============================================
// CONSOLE WELCOME
// =============================================
console.log(`
%c🦇 YASSIN & ZIAD'S TREE FORT 🦇
%c━━━━━━━━━━━━━━━━━━━━━━━━━━
Normal Photos: ${totalNormalPhotos}
Goofy Photos: ${totalGoofyPhotos}
━━━━━━━━━━━━━━━━━━━━━━━━━━
Keyboard Shortcuts:
  [N] - Unlock Memory
  [G] - Crash Out
  Click Vinyl - Toggle Music
`,
    'color: #ff0000; font-size: 20px; font-weight: bold;',
    'color: #888; font-size: 12px;'
);
