export const languages = {
  ms: {
    name: 'Bahasa Melayu',
    code: 'ms',
    flag: '🇲🇾',
    shortLabel: 'BM',
  },
  en: {
    name: 'English',
    code: 'en',
    flag: '🇬🇧',
    shortLabel: 'EN',
  },
} as const;

export type SupportedLanguage = keyof typeof languages;
export const defaultLang: SupportedLanguage = 'ms';

export const ui = {
  ms: {
    // Navigation
    'nav.home': 'Utama',
    'nav.about': 'Tentang Kami',
    'nav.academics': 'Akademik',
    'nav.admissions': 'Kemasukan',
    'nav.news': 'Berita & Takwim',
    'nav.contact': 'Hubungi',
    'nav.portal': 'Portal Ibu Bapa',
    'nav.apply': 'Daftar Sekarang',

    // Top Bar
    'topbar.portal': 'Portal Ibu Bapa →',
    'topbar.term': 'Sesi Persekolahan',

    // Footer
    'footer.aboutTitle': 'Tentang Sekolah',
    'footer.quickLinks': 'Pautan Pantas',
    'footer.hours': 'Waktu Operasi Pejabat',
    'footer.contact': 'Hubungi Kami',
    'footer.rights': 'Hak cipta terpelihara.',
    'footer.closed': 'Tutup',
    'footer.break': 'Rehat',
    'footer.emergency': 'Kecemasan 24/7',

    // Emergency Notice Banner
    'emergency.default': 'Pengumuman Penting: Sila semak hebahan terkini sekolah.',
    'emergency.viewDetails': 'Lihat Butiran →',

    // General CTAs & Labels
    'cta.apply': 'Daftar Segera',
    'cta.learnMore': 'Ketahui Lebih Lanjut',
    'cta.contact': 'Hubungi Pejabat',
    'badge.schoolType': 'Sekolah Rendah Islam Integrasi',
    'badge.tagline': 'Membentuk Generasi Huffaz & Berakhlak Mulia',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About Us',
    'nav.academics': 'Academics',
    'nav.admissions': 'Admissions',
    'nav.news': 'News & Calendar',
    'nav.contact': 'Contact',
    'nav.portal': 'Parent Portal',
    'nav.apply': 'Apply Now',

    // Top Bar
    'topbar.portal': 'Parent Portal →',
    'topbar.term': 'School Session',

    // Footer
    'footer.aboutTitle': 'About School',
    'footer.quickLinks': 'Quick Links',
    'footer.hours': 'Office Hours',
    'footer.contact': 'Contact Us',
    'footer.rights': 'All rights reserved.',
    'footer.closed': 'Closed',
    'footer.break': 'Break',
    'footer.emergency': '24/7 Emergency',

    // Emergency Notice Banner
    'emergency.default': 'Important Notice: Please check the latest school circulars.',
    'emergency.viewDetails': 'View Details →',

    // General CTAs & Labels
    'cta.apply': 'Apply Now',
    'cta.learnMore': 'Learn More',
    'cta.contact': 'Contact Office',
    'badge.schoolType': 'Integrated Islamic Primary School',
    'badge.tagline': 'Nurturing Huffaz Generations with Noble Character',
  },
} as const;

export type UIKey = keyof typeof ui[typeof defaultLang];
