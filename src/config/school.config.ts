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
    affiliation: string; // e.g. "Ministry of Education / State Board" or "Cambridge Primary / IB World School"
    headteacher: {
      name: string;
      title: string; // "Principal" or "Headmistress"
      messagePreview: string;
    };
  };
  branding: {
    // Hex colors injected into CSS root variables
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
    showTuitionFees: boolean;         // true for private, false for government
    showZoningCatchment: boolean;     // true for government, false for private
    showGovernmentAssistance: boolean;// e.g. free school meals, textbook subsidies
    showBusRoutes: boolean;           // school transport / zoning
    showCanteenMenu: boolean;         // weekly lunch schedule
    showOnlineAdmissions: boolean;    // admissions inquiry form
    showParentPortalButton: boolean;  // button linking to future Laravel portal
    portalUrl: string;                // e.g. "https://portal.school.edu"
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
 * ACTIVE CONFIGURATION:
 * Toggle between government or private settings simply by modifying this file.
 */
export const schoolConfig: SchoolConfig = {
  identity: {
    name: "St. Jude's Community Primary School",
    shortName: "St. Jude's Primary",
    tagline: "Inspiring curious minds, fostering kind hearts.",
    motto: "Learning Together, Growing Forever",
    schoolType: "government", // Change to "private" to see dynamic conditional sections!
    establishedYear: 1984,
    registrationNumber: "EDU-PRI-84021",
    affiliation: "Department of Education & Early Childhood Development",
    headteacher: {
      name: "Mrs. Eleanor Vance",
      title: "Headteacher & Lead Educator",
      messagePreview: "Welcome to our vibrant primary community where every child is recognized, cherished, and empowered to reach their boundless potential.",
    },
  },
  branding: {
    // Emerald green & warm gold palette (friendly, academic, highly accessible)
    primary: "#065f46",        // emerald-800
    primaryHover: "#047857",   // emerald-700
    primaryLight: "#d1fae5",   // emerald-100
    secondary: "#d97706",      // amber-600
    secondaryHover: "#b45309",  // amber-700
    accent: "#0284c7",         // sky-600
    surface: "#f8fafc",        // slate-50
    dark: "#0f172a",           // slate-900
    muted: "#64748b",          // slate-500
  },
  features: {
    showTuitionFees: false,          // Government school: No tuition fees
    showZoningCatchment: true,       // Government school: Catchment zone applies
    showGovernmentAssistance: true,  // Free school breakfast & uniform grants
    showBusRoutes: true,
    showCanteenMenu: true,
    showOnlineAdmissions: true,
    showParentPortalButton: true,
    portalUrl: "https://portal.stjudes-school.edu", // Future Laravel portal URL
  },
  contact: {
    phone: "+1 (555) 234-5678",
    emergencyPhone: "+1 (555) 234-9999",
    email: "office@stjudes-primary.edu",
    officeHours: "Monday – Friday: 8:00 AM – 4:00 PM",
    address: {
      street: "42 Meadowbrook Avenue",
      city: "Greenfield",
      stateZip: "GF 48201",
      country: "United States",
    },
    socials: {
      facebook: "https://facebook.com",
      instagram: "https://instagram.com",
    },
  },
  keyStats: [
    { label: "Happy Students", value: "480+" },
    { label: "Student-Teacher Ratio", value: "14:1" },
    { label: "Classrooms & Specialist Labs", value: "24" },
    { label: "National Reading Award", value: "Top 5%" },
  ],
  terms: {
    currentTerm: "Term 3 — Spring 2026",
    termDates: [
      { term: "Term 1 (Autumn)", dates: "Sept 2 – Nov 28" },
      { term: "Term 2 (Winter)", dates: "Jan 6 – Mar 27" },
      { term: "Term 3 (Spring)", dates: "Apr 14 – Jun 26" },
    ],
  },
};
