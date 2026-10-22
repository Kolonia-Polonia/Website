/* ==========================================================================
   KOLONIA POLONIA HAIR STUDIO
   Salon packages, services, prices, branches and website offer.

   Menu prices are in INR.
   "starting" and "plus" prices are estimates until confirmed by the salon.
   ========================================================================== */

/* WEBSITE ENQUIRY OFFER -------------------------------------------------- */

export const OFFER = {
  percent: 10,
  title: 'Website Enquiry Offer',
  line: 'Get a flat 10% OFF on services enquired through our website.',
  applicableNote:
    'Applicable at Main Branch and Malikamukku Branch.',
};

/* BRANCH CONFIGURATION --------------------------------------------------- */

export const BOOKING_BRANCHES = [
  {
    id: 'main',
    name: 'Main Branch',
    place: 'Vellakkinar, Alappuzha',
    address:
      'Near Hospital Jn. Municipal Stadium Ward, Vellakkinar, Alappuzha, Kerala – 688001',
    phone: '98472 21919',
    whatsapp: '919847221919',
  },
  {
    id: 'malikamukku',
    name: 'Malikamukku Branch',
    place: 'Malikamukku, Alappuzha',
    address:
      'Arattuvazhi, Malikamukku Road, Vellappally, Kanjiramchira, Alappuzha, Kerala – 688007',
    phone: '94462 49919',
    whatsapp: '919446249919',
  },
];

/* WORKING HOURS ---------------------------------------------------------- */

export const WORKING_HOURS = {
  open: 9,
  close: 21,
  intervalMinutes: 30,
  label: '09:00 AM – 09:00 PM (All Days Open)',
};

/* SERVICE PRICE TYPES ----------------------------------------------------
   fixed    = Fixed listed price
   starting = Starting price; final price may vary
   plus     = Listed price onwards; final price may vary
------------------------------------------------------------------------- */

const fixed = (id, name, price) => ({
  id,
  name,
  price,
  priceType: 'fixed',
});

const starting = (id, name, price) => ({
  id,
  name,
  price,
  priceType: 'starting',
});

const plus = (id, name, price) => ({
  id,
  name,
  price,
  priceType: 'plus',
});

/* COMPLETE SALON SERVICE MENU ------------------------------------------- */

export const SERVICE_GROUPS = [
  {
    id: 'premium-facials',
    label: 'Premium Facials',
    services: [
      fixed('groom-hydra-facial', 'Groom Hydra Facial', 5000),
      fixed('hydra-facial', 'Hydra Facial', 3000),
      fixed('bb-glow', 'BB Glow', 5000),
      fixed('korean-toktok-facial', 'Korean Toktok Facial', 4000),
    ],
  },

  {
    id: 'shahnaz-facials',
    label: 'Shahnaz Facials',
    services: [
      fixed('shahnaz-diamond', 'Shahnaz Diamond Facial', 3000),
      fixed('shahnaz-gold', 'Shahnaz Gold Facial', 2500),
      fixed('shahnaz-pearl', 'Shahnaz Pearl Facial', 2000),
    ],
  },

  {
    id: 'aroma-magic-facials',
    label: 'Aroma Magic Facials',
    services: [
      fixed('aroma-vitamin-c', 'Aroma Magic Vitamin C Facial', 3000),
      fixed('aroma-diamond', 'Aroma Magic Diamond Facial', 2500),
      fixed('aroma-gold', 'Aroma Magic Gold Facial', 2100),
      fixed('aroma-pearl', 'Aroma Magic Pearl Facial', 1750),
      fixed('aroma-fruit', 'Aroma Magic Fruit Facial', 1200),
    ],
  },

  {
    id: 'vedic-line-facials',
    label: 'Vedic Line Facials',
    services: [
      fixed('vedic-diamond', 'Vedic Line Diamond Facial', 2600),
      fixed('vedic-gold', 'Vedic Line Gold Facial', 2100),
      fixed('vedic-pearl', 'Vedic Line Pearl Facial', 1850),
      fixed('vedic-silver', 'Vedic Line Silver Facial', 1500),
      fixed('vedic-fruit', 'Vedic Line Fruit Facial', 1300),
      fixed('vedic-papaya', 'Vedic Line Papaya Facial', 1200),
    ],
  },

  {
    id: 'natures-facials',
    label: "Nature's Facials",
    services: [
      fixed('nature-diamond', "Nature's Diamond Facial", 2000),
      fixed('nature-gold', "Nature's Gold Facial", 1750),
      fixed('nature-whitening', "Nature's Whitening Facial", 1500),
      fixed('nature-fruit', "Nature's Fruit Facial", 800),
      fixed('nature-papaya', "Nature's Papaya Facial", 600),
    ],
  },

  {
    id: 'skin-care',
    label: 'Skin Care & Clean-Up',
    services: [
      fixed('bleach', 'Bleach', 200),
      fixed('dtan', 'D-Tan', 200),
      fixed('clean-up', 'Clean Up', 300),
      fixed('dtan-cleanup', 'D-Tan Clean-Up', 500),
    ],
  },

  {
    id: 'hand-foot-care',
    label: 'Manicure, Pedicure & Threading',
    services: [
      fixed('pedicure', 'Pedicure', 800),
      fixed('manicure', 'Manicure', 350),
      fixed('groom-pedicure', 'Groom Pedicure', 1000),
      fixed('groom-manicure', 'Groom Manicure', 550),
      fixed('threading', 'Threading', 50),
    ],
  },

  {
    id: 'premium-hair-colours',
    label: 'Premium Hair Colours',
    services: [
      plus(
        'apple-ammonia-free',
        'Apple Ammonia-Free Hair Colour',
        700
      ),
      plus('matrix-so-colours', 'Matrix So Colours', 1200),
      plus(
        'bigen-colour',
        'Bigen Ammonia-Free / Ammonia Hair Colour',
        1200
      ),
      plus(
        'majireal-colour',
        'Majireal Ammonia-Free Hair Colour',
        1500
      ),
      plus(
        'loreal-inoa',
        "L'Oréal Inoa Ammonia-Free Hair Colour",
        1200
      ),
      plus(
        'matrix-wonder-colour',
        'Matrix Wonder Hair Colour',
        1200
      ),
    ],
  },

  {
    id: 'regular-hair-colours',
    label: 'Regular Hair Colours',
    services: [
      plus('garnier-colour', 'Garnier Hair Colour', 800),
      starting('black-henna', 'Black Henna', 500),
      starting('banjaras-colour', 'Banjaras Hair Colour', 500),
      starting('henna', 'Henna', 400),
      {
        ...fixed('highlight-colours', 'Highlight Colours', 350),
        description: 'One foil includes 4 lines.',
      },
    ],
  },

  {
    id: 'hair-treatments',
    label: 'Hair Treatments & Styling',
    services: [
      starting('hair-straightening', 'Hair Straightening', 6000),
      starting('hair-smoothening', 'Hair Smoothening', 6000),
      starting('hair-volume', 'Hair Volume Treatment', 3000),
      starting('keratin-treatment', 'Keratin Treatment', 8000),
      starting('hair-botox', 'Hair Botox Treatment', 8000),
      starting('permanent-blowdry', 'Permanent Blowdry', 6000),
      starting('permanent-curling', 'Permanent Curling', 8000),
      starting('protein-treatment', 'Protein Treatment', 8000),
    ],
  },

  {
    id: 'hair-spa',
    label: 'Hair Spa & Scalp Care',
    services: [
      fixed('normal-hair-spa', 'Normal Hair Spa', 1000),
      fixed('dandruff-spa', 'Dandruff Spa', 1500),
      fixed('keratin-spa', 'Keratin Spa', 2000),
      fixed('dandruff-treatment', 'Dandruff Treatment', 500),
      fixed('hot-oil-treatment', 'Hot Oil Treatment', 500),
      fixed('relaxing-massage', 'Relaxing Massage', 500),
    ],
  },

  {
    id: 'makeup-styling',
    label: 'Makeup & Styling',
    services: [
      fixed('light-makeup', 'Light Makeup', 2500),
      fixed('hair-setting', 'Hair Setting', 600),
      fixed('saree-draping', 'Saree Draping', 600),
      fixed('face-makeup', 'Face Makeup', 1500),
      fixed('wedding-makeup', 'Wedding Makeup', 10000),
      fixed(
        'reception-prewedding-makeup',
        'Reception / Pre-Wedding Makeup',
        6000
      ),
    ],
  },

  {
    id: 'ladies-haircuts',
    label: "Ladies' Haircuts",
    services: [
      fixed('layer-cut', 'Layer Cut', 600),
      fixed('butterfly-layer-cut', 'Butterfly Layer Cut', 700),
      fixed('wolf-cut', 'Wolf Cut', 700),
      fixed('mermaid-layer-cut', 'Mermaid Layer Cut', 700),
      fixed('feather-cut', 'Feather Cut', 700),
      fixed('u-shape-cut', 'U Shape Cut', 350),
      fixed('deep-u-cut', 'Deep U Cut', 400),
      fixed('blunt-hair-cut', 'Blunt Hair Cut', 350),
    ],
  },

  {
    id: 'kids-haircuts',
    label: 'Kids Haircuts',
    services: [
      starting('kids-haircut', 'Kids Haircut (Girl / Boy)', 200),
    ],
  },
];

/* FLATTEN SERVICES FOR THE BOOKING FORM ---------------------------------- */

export const SERVICES = SERVICE_GROUPS.flatMap((group) =>
  group.services.map((service) => ({
    ...service,
    categoryId: group.id,
    category: group.label,
    type: 'service',
    featured: false,
  }))
);

/* SPECIAL PACKAGE --------------------------------------------------------
   The menu shows the Bridal Package at ₹19,500, reduced from ₹22,400.
   The website offer is calculated from the listed ₹19,500 package price.
------------------------------------------------------------------------- */

export const PACKAGES = [
  {
    id: 'bridal-package',
    category: 'Bridal',
    name: 'Bridal Package',
    tagline:
      'A bridal beauty package for wedding and reception / pre-wedding occasions.',
    price: 19500,
    originalPrice: 22400,
    priceType: 'fixed',
    featured: true,
    type: 'package',

    includes: [
      'Facial — ₹3,000',
      'Spa — ₹1,500',
      'Pedicure — ₹1,000',
      'Manicure — ₹550',
      'Eyebrow service — ₹50',
      'Wedding makeup — ₹10,000',
      'Reception / pre-wedding makeup — ₹6,000',
    ],
  },
];

/* FEATURED PACKAGES FOR THE SPECIAL PACKAGES SECTION --------------------- */

export const SPECIAL_PACKAGES = PACKAGES.filter(
  (item) => item.featured
);

export const FEATURED_PACKAGES = SPECIAL_PACKAGES;

/* OPTIONS AVAILABLE FOR THE BOOKING FORM -------------------------------- */

export const BOOKING_OPTIONS = [
  ...PACKAGES,
  ...SERVICES,
];

export const CUSTOM_SERVICE_ID = 'custom';

/* HELPER FUNCTIONS ------------------------------------------------------- */

/**
 * Format prices in Indian Rupees.
 * Example: 19500 => ₹19,500
 */
export const formatINR = (amount) =>
  `₹${Number(amount).toLocaleString('en-IN')}`;

/**
 * Calculate the 10% website-enquiry discount.
 */
export const getDiscountAmount = (price) =>
  Math.round((Number(price) * OFFER.percent) / 100);

/**
 * Calculate the estimated final price after the website offer.
 */
export const getDiscountedPrice = (price) =>
  Number(price) - getDiscountAmount(price);

/**
 * Get a service's displayed price wording.
 */
export const getPriceLabel = (item) => {
  if (!item) return '';

  const price = formatINR(item.price);

  if (item.priceType === 'starting') {
    return `Starting at ${price}`;
  }

  if (item.priceType === 'plus') {
    return `${price} onwards`;
  }

  return price;
};

/**
 * Look up a special package by ID.
 */
export const getPackageById = (id) =>
  PACKAGES.find((item) => item.id === id);

/**
 * Look up a service by ID.
 */
export const getServiceById = (id) =>
  SERVICES.find((item) => item.id === id);

/**
 * Look up any option available for booking.
 */
export const getBookingOptionById = (id) =>
  BOOKING_OPTIONS.find((item) => item.id === id);

/**
 * Look up a salon branch by ID.
 */
export const getBranchById = (id) =>
  BOOKING_BRANCHES.find((branch) => branch.id === id);