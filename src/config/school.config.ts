export type SchoolType = "government" | "private";
export type LogoMode = "auto" | "image" | "monogram" | "crest" | "none";

export interface SchoolConfig {
  identity: {
    name: string;
    shortName: string;
    tagline: string;
    motto: string;
    schoolType: SchoolType;
    establishedYear: number;
    registrationNumber?: string;
    affiliation: string;
    /**
     * Optional path or URL to the school logo image (e.g. "/images/logo.png" or "/logo.svg")
     */
    logo?: string;
    /**
     * Logo display and fallback behavior:
     * - 'auto': Displays `logo` image if provided, otherwise uses the minimalist fallback
     * - 'image': Enforces displaying the image (if present)
     * - 'monogram': Displays clean initial letter monogram badge (e.g. "S")
     * - 'crest': Displays minimalist academic crest/shield icon placeholder
     * - 'none': Hides the logo and placeholder completely (text-only branding)
     */
    logoMode?: LogoMode;
    headteacher: {
      name: string;
      title: string;
      messagePreview: string;
    };
  };
  branding: {
    primary: string;
    primaryHover: string;
    primaryLight: string;
    secondary: string;
    secondaryHover: string;
    accent: string;
    surface: string;
    dark: string;
    muted: string;
  };
  features: {
    showTuitionFees: boolean;
    showZoningCatchment: boolean;
    showGovernmentAssistance: boolean;
    showBusRoutes: boolean;
    showCanteenMenu: boolean;
    showOnlineAdmissions: boolean;
    showParentPortalButton: boolean;
    portalUrl: string;
  };
  contact: {
    phone: string;
    emergencyPhone: string;
    email: string;
    officeHours: string;
    address: {
      street: string;
      city: string;
      stateZip: string;
      country: string;
    };
    socials: {
      facebook?: string;
      instagram?: string;
      youtube?: string;
    };
  };
  keyStats: {
    label: string;
    value: string;
  }[];
  terms: {
    currentTerm: string;
    termDates: { term: string; dates: string }[];
  };
  stakeholders?: {
    governance: {
      title: string;
      badge: string;
      description: string;
      icon: string;
      members: Array<{ name: string; role: string; organization?: string }>;
      responsibilities: string[];
    };
    pta: {
      title: string;
      badge: string;
      description: string;
      icon: string;
      members: Array<{ name: string; role: string; organization?: string }>;
      responsibilities: string[];
    };
    leadership: {
      title: string;
      badge: string;
      description: string;
      icon: string;
      members: Array<{ name: string; role: string; organization?: string }>;
      responsibilities: string[];
    };
    regulatory: {
      title: string;
      description: string;
      bodies: Array<{ name: string; role: string; regNumber?: string }>;
    };
  };
  developer?: {
    author: string;
    company: string;
    registrationNumber: string;
    github?: string;
    tipping?: {
      bayarcashUrl?: string;
      paypalUrl?: string;
    };
    showFooterCredit: boolean;
  };
}

/**
 * ACTIVE CONFIGURATION: SRIRS V3
 * Sekolah Rendah Islam Riyadhus Solihin
 */
export const schoolConfig: SchoolConfig = {
  identity: {
    name: "Sekolah Rendah Islam Riyadhus Solihin",
    shortName: "SRIRS",
    tagline: "Membina Iman, Membela Islam",
    motto: "Berilmu, Beriman, Beramal Soleh",
    schoolType: "private", // SRIRS is an integrated Islamic primary school
    establishedYear: 1986,
    registrationNumber: "JJAA001",
    affiliation:
      "Kementerian Pendidikan Malaysia (KPM) & Jabatan Pendidikan Agama Islam Negeri Johor (SRAS/BP/001)",
    // Set custom logo image path (e.g. "/images/logo.png"). If left empty, fallback is used according to logoMode.
    logo: "/images/logo-srirs-primary-fc.png",
    // Options: 'auto' (image if present, else fallback), 'monogram' (initial letter), 'crest' (minimalist shield icon), 'none' (no logo)
    logoMode: "auto",
    headteacher: {
      name: "Hajah Zainon binti Abd Samad",
      title: "Guru Besar (Mudirah)",
      messagePreview:
        "Ahlan wa sahlan ke laman rasmi SRIRS. Kami beriltizam melahirkan murid cemerlang duniawi dan ukhrawi melalui integrasi kurikulum KSSR dan Pendidikan Islam Tahfiz.",
    },
  },
  branding: {
    // Elegant Islamic Deep Green & Gold Palette
    primary: "#065f46", // Deep emerald green
    primaryHover: "#047857", // Rich forest green
    primaryLight: "#ecfdf5", // Mint light
    secondary: "#d97706", // Warm Islamic gold / amber
    secondaryHover: "#b45309", // Deep amber
    accent: "#0284c7", // Sky blue
    surface: "#f8fafc", // Off-white slate
    dark: "#0f172a", // Midnight slate
    muted: "#64748b", // Neutral muted text
  },
  features: {
    showTuitionFees: true, // Private Islamic school fees schedule
    showZoningCatchment: false, // Open enrollment across zones
    showGovernmentAssistance: false,
    showBusRoutes: true, // Van sekolah & transit routes
    showCanteenMenu: true, // Halalan toyyiban daily menu
    showOnlineAdmissions: true, // Online pendaftaran murid baru
    showParentPortalButton: false, // Portal Ibu Bapa & Waris (Laravel)
    portalUrl: "https://portal.srirs.edu.my",
  },
  contact: {
    phone: "+60 7-4131 496",
    emergencyPhone: "+60 13-774 7854",
    email: "pejabat@srirs.edu.my",
    officeHours: [
      {
        days: "Isnin – Khamis",
        hours: "7:30 PG – 4:00 PTG",
        breakTime: {
          label: "Rehat & Solat Zohor",
          time: "1:00 PTG – 2:00 PTG",
        },
      },
      {
        days: "Jumaat",
        hours: "7:30 PG – 12:30 PTG, 2:30 PTG – 4:00 PTG",
        breakTime: {
          label: "Solat Jumaat & Rehat",
          time: "12:30 PTG – 2:30 PTG",
        },
      },
      {
        days: "Sabtu, Ahad & Cuti Umum",
        isClosed: true,
        notes: "Tutup (Kecuali program rasmi sekolah)",
      },
    ],
    address: {
      street:
        "Lot 1592, Lorong Ustaz Syed Nordin, Pt Lintang Barat, Kg Sg Kajang",
      city: "Batu Pahat",
      stateZip: "83000 Johor",
      country: "Malaysia",
    },
    socials: {
      facebook: "https://facebook.com/mysrirs",
      instagram: "https://instagram.com/mysrirs",
    },
  },
  keyStats: [
    { label: "Murid & Huffaz Cilik", value: "520+" },
    { label: "Nisbah Guru : Murid", value: "1:15" },
    { label: "Kadar Khatam Al-Quran", value: "98%" },
    { label: "Penarafan Sekolah (JAINJ)", value: "Gred A" },
  ],
  terms: {
    currentTerm: "Sesi Akademik 2026 — Penggal 2",
    termDates: [
      { term: "Penggal 1", dates: "12 Jan 2026 – 07 Jun 2026" },
      { term: "Penggal 2", dates: "08 Jun 2026 – 31 Dis 2026" },
    ],
  },
  stakeholders: {
    governance: {
      title: "Lembaga Pengelola Sekolah (LPS)",
      badge: "Tadbir Urus & Pemegang Amanah",
      description:
        "Badan tertinggi pengurusan strategik dan pemegang amanah yang bertanggungjawab menetapkan hala tuju institusi, pematuhan syariah, dan pengurusan aset wakaf.",
      icon: "🏛️",
      members: [
        {
          name: "Dato' Hj. Ismail bin Mohd Nor",
          role: "Pengerusi Lembaga Pengelola",
          organization: "Wakil Pemegang Amanah",
        },
        {
          name: "Ustaz Dr. Khairul Anwar bin Basri",
          role: "Timbalan Pengerusi & Penasihat Syariah",
          organization: "Pakar Pendidikan Islam",
        },
        {
          name: "Haji Razak bin Sulaiman",
          role: "Setiausaha Kehormat",
          organization: "Pengurusan Korporat",
        },
        {
          name: "Puan Noraini binti Yusof",
          role: "Bendahari Kehormat",
          organization: "Juruaudit Bertauliah",
        },
      ],
      responsibilities: [
        "Menetapkan dasar strategik pendidikan dan pembangunan sekolah",
        "Menguruskan dana wakaf, infaq, dan pelaburan prasarana fizikal",
        "Memastikan pematuhan undang-undang pendidikan dan piawaian audit",
        "Melantik dan menyelia pengurusan pentadbiran sekolah",
      ],
    },
    pta: {
      title: "Persatuan Ibu Bapa & Guru (PIBG)",
      badge: "Sinergi Komuniti & Waris",
      description:
        "Platform rasmi memperkukuh kerjasama erat antara ibu bapa, penjaga, dan guru demi kebajikan murid, sokongan program tahfiz, serta aktiviti ko-kurikulum.",
      icon: "🤝",
      members: [
        {
          name: "En. Muhammad Ridzuan bin Azman",
          role: "Yang Dipertua (YDP) PIBG",
          organization: "Wakil Ibu Bapa",
        },
        {
          name: "Ustazah Mardhiah binti Ramli",
          role: "Naib Yang Dipertua (NYDP)",
          organization: "Wakil Guru",
        },
        {
          name: "Cikgu Mohd Fikri bin Samsudin",
          role: "Setiausaha PIBG",
          organization: "Kakitangan Akademik",
        },
        {
          name: "Puan Salmah binti Kassim",
          role: "Bendahari PIBG",
          organization: "Wakil Ibu Bapa",
        },
      ],
      responsibilities: [
        "Menyalurkan sumbangan dana kebajikan bagi murid asnaf & yatim",
        "Menganjurkan program Sarana Ibu Bapa, Hari Terbuka, dan Gotong-Royong",
        "Menyokong kelengkapan prasarana bilik darjah dan sukan",
        "Menjadi jambatan komunikasi antara waris dan pihak sekolah",
      ],
    },
    leadership: {
      title: "Barisan Pentadbir & Pengurusan Sekolah",
      badge: "Kepimpinan Operasi & Instruksional",
      description:
        "Pasukan eksekutif yang memacu pengurusan harian, kecemerlangan kurikulum KSSR, pelaksanaan program tahfiz huffaz cilik, dan sahsiah murid.",
      icon: "🎓",
      members: [
        {
          name: "Hajah Zainon binti Abd Samad",
          role: "Guru Besar (Mudirah)",
          organization: "Ketua Eksekutif Pentadbiran",
        },
        {
          name: "Ustaz Ahmad bin Zainudin",
          role: "Guru Penolong Kanan (GPK) Pentadbiran & Kurikulum",
          organization: "Pengurusan Akademik",
        },
        {
          name: "Ustaz Mohd Nazri bin Hashim",
          role: "Guru Penolong Kanan Hal Ehwal Murid (HEM)",
          organization: "Disiplin & Kebajikan Murid",
        },
        {
          name: "Puan Norhidayah binti Mansor",
          role: "Guru Penolong Kanan Kokurikulum",
          organization: "Sukan, Unit Beruniform & Kelab",
        },
      ],
      responsibilities: [
        "Memacu kecemerlangan akademik kurikulum KSSR dan silibus agama",
        "Menjaga kebajikan, keselamatan, dan pembentukan adab islami murid",
        "Memantau kualiti pengajaran guru dan pemerkasaan bilik darjah digital",
        "Menyelaras pelaporan perkembangan murid secara berkala kepada waris",
      ],
    },
    regulatory: {
      title: "Badan Kawal Selia & Agensi Bersekutu",
      description:
        "SRIRS beroperasi dengan pematuhan penuh terhadap piawaian pendidikan kebangsaan dan kurikulum agama negeri Johor.",
      bodies: [
        {
          name: "Kementerian Pendidikan Malaysia (KPM)",
          role: "Pematuhan Kurikulum Standard Sekolah Rendah (KSSR)",
          regNumber: "No. Perakuan KPM: JJAA001",
        },
        {
          name: "Jabatan Agama Islam Negeri Johor (JAINJ)",
          role: "Kawal Selia Sekolah Rendah Agama Islam Swasta",
          regNumber: "No. Siri Pendaftaran: SRAS/BP/001",
        },
        {
          name: "Pejabat Pendidikan Daerah (PPD) Batu Pahat",
          role: "Penyelarasan Peperiksaan Awam & Takwim Persekolahan",
          regNumber: "Zon Pentadbiran Daerah",
        },
      ],
    },
  },
  developer: {
    author: "Sahaini bin Ahmad Safian",
    company: "Eco Idea Niaga",
    registrationNumber: "JR0031446-U",
    github: "https://github.com/unclesaha",
    tipping: {
      bayarcashUrl: "https://ecoideaniaga.bcl.my/form/buymeacupofcoffee",
      paypalUrl: "https://paypal.me/inisahaini",
    },
    showFooterCredit: true,
  },
};
