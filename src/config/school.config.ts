export type SchoolType = 'government' | 'private';

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
    tagline: "Membina Generasi Rabbani, Berilmu, Beriman & Beramal",
    motto: "Berilmu, Beriman, Beramal Soleh",
    schoolType: "private", // SRIRS is an integrated Islamic primary school
    establishedYear: 2014,
    registrationNumber: "JAIS/PDS/01-084",
    affiliation: "Jabatan Agama Islam Selangor (JAIS) & Kementerian Pendidikan Malaysia (KPM)",
    headteacher: {
      name: "Ustaz Ahmad Solihin bin Rahman",
      title: "Guru Besar & Pengetua Akademik",
      messagePreview: "Ahlan wa sahlan ke laman rasmi SRIRS. Kami beriltizam melahirkan murid cemerlang duniawi dan ukhrawi melalui integrasi kurikulum KSSR dan Pendidikan Islam Tahfiz.",
    },
  },
  branding: {
    // Elegant Islamic Deep Green & Gold Palette
    primary: "#065f46",        // Deep emerald green
    primaryHover: "#047857",   // Rich forest green
    primaryLight: "#ecfdf5",   // Mint light
    secondary: "#d97706",      // Warm Islamic gold / amber
    secondaryHover: "#b45309",  // Deep amber
    accent: "#0284c7",         // Sky blue
    surface: "#f8fafc",        // Off-white slate
    dark: "#0f172a",           // Midnight slate
    muted: "#64748b",          // Neutral muted text
  },
  features: {
    showTuitionFees: true,           // Private Islamic school fees schedule
    showZoningCatchment: false,      // Open enrollment across zones
    showGovernmentAssistance: false,
    showBusRoutes: true,             // Van sekolah & transit routes
    showCanteenMenu: true,           // Halalan toyyiban daily menu
    showOnlineAdmissions: true,      // Online pendaftaran murid baru
    showParentPortalButton: true,    // Portal Ibu Bapa & Waris (Laravel)
    portalUrl: "https://portal.srirs.edu.my",
  },
  contact: {
    phone: "+60 3-8921 4567",
    emergencyPhone: "+60 19-345 6789",
    email: "pentadbiran@srirs.edu.my",
    officeHours: "Isnin – Jumaat: 7:30 PG – 4:30 PTG",
    address: {
      street: "Lot 1420, Jalan Haji Abdul Rahman",
      city: "Bandar Baru Bangi",
      stateZip: "43650 Selangor",
      country: "Malaysia",
    },
    socials: {
      facebook: "https://facebook.com/sri.riyadhussolihin",
      instagram: "https://instagram.com/sri.riyadhussolihin",
    },
  },
  keyStats: [
    { label: "Murid & Huffaz Cilik", value: "520+" },
    { label: "Nisbah Guru : Murid", value: "1:15" },
    { label: "Kadar Khatam Al-Quran", value: "98%" },
    { label: "Penarafan Sekolah (JAIS)", value: "Gred A" },
  ],
  terms: {
    currentTerm: "Sesi Akademik 2026/2027 — Penggal 1",
    termDates: [
      { term: "Penggal 1", dates: "Mac 2026 – Mei 2026" },
      { term: "Penggal 2", dates: "Jun 2026 – Ogos 2026" },
      { term: "Penggal 3", dates: "Sept 2026 – Dis 2026" },
    ],
  },
};
