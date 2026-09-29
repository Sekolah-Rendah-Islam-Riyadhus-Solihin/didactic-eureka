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
    logo: "",
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
};
