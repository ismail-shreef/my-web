// ============mode=========
const body = document.querySelector("body"),
    modeSwitch = body.querySelector(".botton-content"),
    modeText = body.querySelector(".mode-text");

modeSwitch.addEventListener("click", () => {
    body.classList.toggle("dark");

    if (body.classList.contains("dark")) {
        modeText.innerText = "Light mode"
    } else {
        modeText.innerText = "Dark mode"
    }
});
// ===============lang=============
const Translations = {
    en: {
        logo: 'ismail website',
        home: 'home',
        about: 'about me',
        pro: 'projects',
        cont: 'contact me',
        me: 'Hi Im Ismail',
        me2: 'im fornt-end dev , im freelancer lower i can do any jop in short time im fornt-end dev , im freelancer lower i can do any jop in short timeim fornt-end dev , im freelancer lower i can do any jop in short timeim fornt-end dev , im freelancer lower i can do any jop in short time',

        email: 'Email Address',
        phone: 'Phone',
        whats: 'Whats App',
        fb: 'Facebook',
        ins: 'Github',
        tik: 'Linkedin',
        footer: 'Copyright @ Ismail Shreef 2025',
    },
    ar: {
        logo: 'إسماعيل website',
        home: 'الصفحة الرئيسة',
        about: 'من أنا',
        pro: 'مشروعاتى',
        cont: 'تواصل معى',
        me: 'مرحبا أنا إسماعيل',
        me2: 'انا مبرمج و مصمم الواجهة النهائية للمواقع الالكترونيه ومحامى ايضا استطيع ان انجز المهام فى وقت قصير',

        email: 'البريد الالكترونى',
        phone: 'رقم الهاتف',
        whats: 'واتس اب',
        fb: 'فيس بوك',
        ins: 'Github',
        tik: 'لينكدان',
        footer: 'جميع الحقوق محفوظه @ إسماعيل شريف 2025'


    }
};
const LangSelector = document.querySelector('select');

LangSelector.addEventListener('change', (Event) => {
    setLang(Event.target.value);
    localStorage.setItem("lang", Event.target.value);
});


document.addEventListener('DOMContentLoaded', () => {
    const language = localStorage.getItem("lang");
    setLang(language);
});
const setLang = (language) => {
    const elements = document.querySelectorAll('[data-itn]');
    elements.forEach((element) => {
        const Translationskey = element.getAttribute('data-itn');
        element.textContent = Translations[language][Translationskey];
    });
    document.dir = language === 'ar' ? "rtl" : 'ltr'
};