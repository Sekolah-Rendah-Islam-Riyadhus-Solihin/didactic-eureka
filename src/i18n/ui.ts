export const languages = {
  ms: {
    label: "Bahasa Melayu",
    shortLabel: "BM",
    flag: "🇲🇾",
  },
  en: {
    label: "English",
    shortLabel: "EN",
    flag: "🇬🇧",
  },
} as const;

export type SupportedLanguage = keyof typeof languages;
export const defaultLang: SupportedLanguage = "ms";

export const ui = {
  ms: {
    // Navigation
    "nav.home": "Laman Utama",
    "nav.about": "Tentang Kami",
    "nav.academics": "Kurikulum & Akademik",
    "nav.admissions": "Pendaftaran",
    "nav.news": "Berita & Takwim",
    "nav.contact": "Hubungi Kami",
    "nav.apply": "Daftar Kemasukan",
    "nav.enrollmentInfo": "Maklumat Pendaftaran",
    "nav.parentPortal": "Portal Ibu Bapa",

    // Top Utility Bar
    "topbar.emergency": "Kecemasan",
    "topbar.currentTerm": "Sesi Persekolahan",
    "topbar.portalTitle": "Akses portal ibu bapa & guru (Dikuasakan Laravel)",

    // Branding Badges
    "badge.private": "Sekolah Rendah Islam Swasta",
    "badge.government": "Sekolah Rendah Kerajaan",

    // Footer
    "footer.quickLinks": "Pautan Pantas",
    "footer.parentResources": "Sumber Ibu Bapa & Waris",
    "footer.schoolOffice": "Pejabat Sekolah",
    "footer.allRightsReserved": "Hak cipta terpelihara.",
    "footer.canteenMenu": "🥗 Menu Makanan Sihat Kantin",
    "footer.busRoutes": "🚌 Laluan Bas Sekolah & Zon Pejalan Kaki",
    "footer.safeguarding": "🛡️ Polisi Keselamatan & Perlindungan Murid",
    "footer.academicCalendar": "📅 Takwim Persekolahan & Cuti Umum",
    "footer.parentPortalLogin": "🔐 Log Masuk Portal Ibu Bapa →",
    "footer.emergencyPhone": "Kecemasan:",
    "footer.officeHoursTitle": "Waktu Pejabat:",

    // Common Buttons & Labels
    "btn.learnMore": "Ketahui Lebih Lanjut",
    "btn.explorePrograms": "Lihat Program Kami",
    "btn.contactUs": "Hubungi Pihak Sekolah",
    "btn.viewCalendar": "Lihat Takwim",
    "btn.downloadForm": "Muat Turun Borang",

    // Office Hours
    "office.title": "Waktu Pejabat",
    "office.mainLine": "Talian Utama:",
    "office.urgentEmergency": "Kecemasan Segera:",
    "office.closed": "Tutup",
    "office.break": "Rehat:",
    "office.emergencyNote":
      "Talian kecemasan beroperasi 24/7 bagi hal kebajikan & keselamatan murid.",

    // Language Switcher
    "lang.select": "Pilih Bahasa",
    "lang.current": "Bahasa Semasa",
  },
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.about": "About Us",
    "nav.academics": "Academics",
    "nav.admissions": "Admissions",
    "nav.news": "News & Calendar",
    "nav.contact": "Contact",
    "nav.apply": "Apply for Place",
    "nav.enrollmentInfo": "Enrollment Info",
    "nav.parentPortal": "Parent Portal",

    // Top Utility Bar
    "topbar.emergency": "Emergency",
    "topbar.currentTerm": "School Term",
    "topbar.portalTitle":
      "Access parent and teacher portal (Powered by Laravel)",

    // Branding Badges
    "badge.private": "Private Islamic Primary",
    "badge.government": "Government Primary",

    // Footer
    "footer.quickLinks": "Quick Links",
    "footer.parentResources": "Parent Resources",
    "footer.schoolOffice": "School Office",
    "footer.allRightsReserved": "All rights reserved.",
    "footer.canteenMenu": "🥗 Canteen Healthy Meal Menu",
    "footer.busRoutes": "🚌 School Bus & Walk-to-School Zones",
    "footer.safeguarding": "🛡️ Child Safeguarding & Safety Policy",
    "footer.academicCalendar": "📅 Academic Calendar & Holidays",
    "footer.parentPortalLogin": "🔐 Parent Portal Login →",
    "footer.emergencyPhone": "Emergency:",
    "footer.officeHoursTitle": "Office Hours:",

    // Common Buttons & Labels
    "btn.learnMore": "Learn More",
    "btn.explorePrograms": "Explore Programs",
    "btn.contactUs": "Contact School Office",
    "btn.viewCalendar": "View Calendar",
    "btn.downloadForm": "Download Form",

    // Office Hours
    "office.title": "Office Hours",
    "office.mainLine": "Main Line:",
    "office.urgentEmergency": "Urgent Emergency:",
    "office.closed": "Closed",
    "office.break": "Break:",
    "office.emergencyNote":
      "Emergency hotline operates 24/7 for student safety & wellbeing.",

    // Language Switcher
    "lang.select": "Select Language",
    "lang.current": "Current Language",
  },
} as const;

export type UIKey = keyof (typeof ui)[typeof defaultLang];
