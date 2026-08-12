import { Helmet } from "react-helmet-async";

const SITE_NAME = "Kolonia Polonia Hair Studio";
const SITE_URL = "https://koloniapolonia.in";

const DEFAULT_IMAGE = `${SITE_URL}/og-image.png`;

const DEFAULT_DESCRIPTION =
  "Experience luxury beauty and grooming at Kolonia Polonia Hair Studio in Alappuzha. Professional haircuts, hair color, bridal makeup, facials, spa, nails, threading and grooming for men & women.";

const DEFAULT_KEYWORDS =
  "Kolonia Polonia, Hair Studio Alappuzha, Salon Alappuzha, Beauty Salon Kerala, Haircut, Hair Styling, Hair Color, Bridal Makeup, Groom Makeup, Hair Spa, Facial, Spa, Pedicure, Manicure, Threading, Grooming, Luxury Salon, Beauty Studio";

export default function SEO({
  title,
  description = DEFAULT_DESCRIPTION,
  keywords = DEFAULT_KEYWORDS,
  path = "/",
  image = DEFAULT_IMAGE,
  type = "website",
  noindex = false,
}) {
  const fullTitle = title
    ? `${title} | ${SITE_NAME}`
    : SITE_NAME;

  const canonical = new URL(path, SITE_URL).toString();

  const schema = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    name: SITE_NAME,
    image: image,
    url: SITE_URL,
    telephone: "+91-9847221919",
    priceRange: "₹₹",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Near Hospital Jn. Municipal Stadium Ward, Vellakkinar, Alappuzha, Kerala – 688001",
      addressLocality: "Alappuzha",
      addressRegion: "Kerala",
      postalCode: "688001",
      addressCountry: "IN",
    },
    openingHours: "Mo-Su 09:00-21:00",
    areaServed: "Alappuzha",
    description,
  };

  return (
    <Helmet>
      {/* Primary */}
      <title>{fullTitle}</title>

      <meta name="description" content={description} />

      <meta name="keywords" content={keywords} />

      <meta
        name="robots"
        content={noindex ? "noindex,nofollow" : "index,follow"}
      />

      <meta name="author" content={SITE_NAME} />

      <meta name="theme-color" content="#0a0a0a" />

      <link rel="canonical" href={canonical} />

      <link rel="icon" href="/icon.png" />

      <link rel="apple-touch-icon" href="/icon.png" />

      {/* Open Graph */}

      <meta property="og:type" content={type} />

      <meta property="og:site_name" content={SITE_NAME} />

      <meta property="og:title" content={fullTitle} />

      <meta property="og:description" content={description} />

      <meta property="og:url" content={canonical} />

      <meta property="og:image" content={image} />

      <meta property="og:image:secure_url" content={image} />

      <meta property="og:image:alt" content={SITE_NAME} />

      <meta property="og:locale" content="en_IN" />

      {/* Twitter */}

      <meta name="twitter:card" content="summary_large_image" />

      <meta name="twitter:title" content={fullTitle} />

      <meta name="twitter:description" content={description} />

      <meta name="twitter:image" content={image} />

      {/* Structured Data */}

      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
}