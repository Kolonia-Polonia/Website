import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useMemo, useRef, useState } from 'react';
import {
  ArrowRight,
  Calendar,
  Users,
  Heart,
  MapPin,
  Award,
  ShieldCheck,
  Sparkles,
  Gem,
  ThumbsUp,
  Phone,
  Star,
  Quote,
  ChevronLeft,
  ChevronRight,
  Scissors,
} from 'lucide-react';
import SEO from '../../components/SEO/SEO';
import Reveal, { RevealStagger, RevealStaggerItem } from '../../components/Reveal/Reveal';
import { IMG } from '../../assets/images/images';
import './Home.css';

const STATS = [
  { icon: Award, value: '15+', label: 'Years of Excellence' },
  { icon: Heart, value: '1 Lakh+', label: 'Happy Clients' },
  { icon: MapPin, value: '3', label: 'Branches' },
  { icon: Users, value: '30+', label: 'Expert Stylists' },
];

const SERVICES = [
  { title: 'Haircut & Styling', tag: 'Trendy cuts & styling for every personality', image: IMG.haircutMenClose },
  { title: 'Hair Color & Treatment', tag: 'Vibrant color, highlights & hair care solutions', image: IMG.hairColorWoman },
  { title: 'Bridal Makeover', tag: 'Stunning bridal looks for your big day', image: IMG.bridalMakeup },
  { title: 'Skin & Face Care', tag: 'Rejuvenate, refresh & glow naturally', image: IMG.facialClose },
  { title: 'Hair Spa', tag: 'Nourish your hair, refresh your scalp', image: IMG.hairSpa },
  { title: 'Nails & Pedicure', tag: 'Perfect nails, flawless finishes', image: IMG.nailArt },
  { title: 'Threading & Waxing', tag: 'Precision grooming with care', image: IMG.threading },
  { title: 'Makeup & Party Look', tag: 'Glam looks for parties & special occasions', image: IMG.groomMakeup },
  { title: 'Beard Grooming', tag: 'Sharp beard styles that define you', image: IMG.beardGroomingClose },
  { title: 'Men\u2019s Grooming', tag: 'Complete grooming for the modern man', image: IMG.haircutMenClose },
];


const BRANDS = [
  { name: 'Brillare', src: IMG.brillare },
  { name: 'L\u2019Or\u00e9al', src: IMG.loreal },
  { name: 'Matrix', src: IMG.matrix },
  { name: 'K\u00e9rastase', src: IMG.kerastase },
  { name: 'Redken', src: IMG.redken },
  { name: 'Wella Professionals', src: IMG.wella },
  { name: 'Olaplex', src: IMG.olaplex },
  { name: 'Schwarzkopf Professional', src: IMG.schwarzkopf },
];

const BRANCHES = [
  { tag: 'Main Branch', name: 'Alappuzha', address: 'Near Hospital Jn. Municipal Stadium Ward, Vellakkinar, Alappuzha, Kerala \u2013 688001', phone: '98472 21919', image: IMG.branchInterior1 },
  { tag: 'Branch 2', name: 'Arattuvazhy', address: 'ARATTUVAZHI, MALIKAMUKK ROAD, Vellappally, Kanjiramchira, Alappuzha, Kerala 688007', phone: '98472 21919', image: IMG.branchInterior3 },
  { tag: 'Branch 3', name: 'Thondankulangara', address: 'G85Q+2XH, Thondankulangara, Thathampally, Alappuzha, Kerala \u2013 688013', phone: '98472 21919', image: IMG.branchInterior2 },
];

const WHY_US = [
  { icon: ThumbsUp, label: 'Experienced & Certified Stylists' },
  { icon: Gem, label: 'High Quality Products' },
  { icon: ShieldCheck, label: 'Hygienic & Safe Environment' },
  { icon: Sparkles, label: 'Trendy & Advanced Techniques' },
  { icon: Heart, label: 'Customer Satisfaction First' },
];

const SHOWCASE_VIDEOS = [
  {
    label: 'The Studio Floor',
    caption: 'Where every chair has a story and every mirror has seen a transformation.',
    poster: IMG.branchInterior1,
    src: "https://res.cloudinary.com/gukslepc/video/upload/v1788438712/POLONIA_KANJIRAMCHIRA_2.mp4",
  },
  {
    label: 'The Finishing Touch',
    caption: 'Precision, patience, and a little bit of magic in every last detail.',
    poster: IMG.branchInterior3,
    src: "https://res.cloudinary.com/gukslepc/video/upload/v1788438717/POLONIA_KANJIRAMCHIRA.mp4",
  },
];


const TESTIMONIALS = [
  {
    name: 'Anjali Menon',
    role: 'Regular Client \u00b7 Alappuzha',
    rating: 5,
    quote: 'I\u2019ve been coming to Kolonia Polonia for three years now and I\u2019ve never once left disappointed. Biju sir genuinely listens before he touches a single strand \u2014 it never feels like a rushed salon visit.',
  },
  {
    name: 'Fathima Rasheed',
    role: 'Bride, 2024',
    rating: 5,
    quote: 'My bridal look was beyond anything I imagined. The team started the consultation weeks in advance, did a trial, and on the day itself everything was calm, unhurried and absolutely flawless.',
  },
  {
    name: 'Arun Prakash',
    role: 'Client Since 2019',
    rating: 5,
    quote: 'Best grooming experience in Alappuzha, hands down. The beard sculpting alone is worth the visit \u2014 precise, sharp, and they actually take the shape of your face into account.',
  },
  {
    name: 'Devika Suresh',
    role: 'Skin & Spa Client',
    rating: 5,
    quote: 'The hair spa left my hair feeling healthier than it has in years, and the facial was so relaxing I almost fell asleep on the chair. Hygiene standards here are genuinely five-star.',
  },
  {
    name: 'Nikhil Varma',
    role: 'Grooming Client',
    rating: 5,
    quote: 'Walked in for a simple haircut, walked out feeling like a different person. Clean space, premium products, and stylists who clearly love what they do.',
  },
  {
    name: 'Meera Krishnan',
    role: 'Hair Colour Client',
    rating: 5,
    quote: 'I was terrified of balayage going wrong on my hair type, but they talked me through every step and the result was better than the reference photo I brought in.',
  },
  {
    name: 'Thomas Abraham',
    role: 'Groom, 2023',
    rating: 5,
    quote: 'Got my wedding grooming package done here and the team turned up on time, kept everyone calm on a chaotic morning, and made sure I actually looked like myself in the photos.',
  },
  {
    name: 'Sruthi Nair',
    role: 'Keratin Treatment Client',
    rating: 5,
    quote: 'My hair used to frizz up within an hour of stepping outside. Three months after the keratin treatment here and it still behaves. Worth every rupee.',
  },
  {
    name: 'Rahul Pillai',
    role: 'Corporate Client',
    rating: 5,
    quote: 'I book a slot before every big client meeting. Quick, sharp, no small talk pressure if you\u2019re not in the mood \u2014 they just read the room and get it done well.',
  },
  {
    name: 'Lakshmi Warrier',
    role: 'Mother of Two',
    rating: 5,
    quote: 'Brought both my kids in for haircuts and they were so patient with a fidgety five-year-old. That alone earned a loyal customer for life.',
  },
  {
    name: 'Vishnu Menon',
    role: 'Pedicure & Grooming Client',
    rating: 5,
    quote: 'Didn\u2019t expect a men\u2019s pedicure to feel this thorough. Genuinely relaxing, and the staff never made it feel like an unusual request.',
  },
  {
    name: 'Reshma Thomas',
    role: 'Client Since 2020',
    rating: 5,
    quote: 'Consistency is what keeps me coming back. Every single visit, regardless of which stylist I get, the quality has never once dipped.',
  },
];

const AUTO_ADVANCE_MS = 6000;

function initialsOf(name) {
  return name
    .split(' ')
    .map((part) => part[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();
}

function chunkArray(arr, size) {
  const out = [];
  for (let i = 0; i < arr.length; i += size) {
    out.push(arr.slice(i, i + size));
  }
  return out;
}

export default function Home() {
  // Responsive page size: 4-up desktop, 2-up tablet, 1-up mobile.
  const [pageSize, setPageSize] = useState(4);

  useEffect(() => {
    const mqTablet = window.matchMedia('(max-width: 1080px)');
    const mqMobile = window.matchMedia('(max-width: 640px)');

    const update = () => {
      if (mqMobile.matches) setPageSize(1);
      else if (mqTablet.matches) setPageSize(2);
      else setPageSize(4);
    };

    update();
    mqTablet.addEventListener('change', update);
    mqMobile.addEventListener('change', update);
    return () => {
      mqTablet.removeEventListener('change', update);
      mqMobile.removeEventListener('change', update);
    };
  }, []);

  const pages = useMemo(() => chunkArray(TESTIMONIALS, pageSize), [pageSize]);

  const [activePage, setActivePage] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef(null);

  // Reset to the first page whenever the page size (breakpoint) changes.
  useEffect(() => setActivePage(0), [pageSize]);

  useEffect(() => {
    if (paused || pages.length <= 1) return undefined;
    const id = setInterval(() => {
      setActivePage((p) => (p + 1) % pages.length);
    }, AUTO_ADVANCE_MS);
    return () => clearInterval(id);
  }, [paused, pages.length]);

  const goTo = (index) => {
    setActivePage(((index % pages.length) + pages.length) % pages.length);
  };
  const next = () => goTo(activePage + 1);
  const prev = () => goTo(activePage - 1);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(delta) > 40) {
      if (delta < 0) next();
      else prev();
    }
    touchStartX.current = null;
  };

  return (
    <>
      <SEO
        title="Premium Hair & Beauty Salon in Alappuzha, Kerala"
        description="Experience luxury beauty and grooming at Kolonia Polonia Hair Studio in Alappuzha, Kerala. We offer professional haircuts, hair styling, hair colouring, bridal makeup, spa therapies, facials, manicure, pedicure, threading, grooming and complete beauty care for men and women across our multiple branches."
        keywords="Kolonia Polonia Hair Studio, salon in Alappuzha, best salon in Alappuzha, beauty salon Kerala, hair salon Alappuzha, hair cutting, hair styling, hair colouring, bridal makeup, groom makeup, spa in Alappuzha, facial, manicure, pedicure, threading, hair spa, luxury salon Kerala, unisex salon Alappuzha, beauty parlour Alappuzha"
        path="/"
      />

      {/* HERO */}
      <section className="home-hero">
        <div className="home-hero__media">
          <img
            src={IMG.heroHome}
            alt="Kolonia Polonia Luxury Salon Interior"
          />
          <div className="home-hero__overlay" />
        </div>

        <div className="container home-hero__wrapper">
          <div className="home-hero__content">
            <motion.span
              className="home-hero__kicker"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              Style That Defines You
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
            >
              Look Beautiful.
              <br />
              Feel Powerful.
              <br />
              <span className="home-hero__script">Everyday.</span>
            </motion.h1>

            <motion.p
              className="home-hero__desc"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Kolonia Polonia Hair Studio is where expertise meets elegance.
              Men &amp; Women — all beauty, grooming and wellness services
              under one roof.
            </motion.p>

            <motion.div
              className="home-hero__actions"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.55 }}
            >
              <NavLink to="/services" className="btn btn-white">
                Explore Services <ArrowRight size={15} />
              </NavLink>

              <NavLink to="/contact" className="btn btn-outline-light">
                <Calendar size={15} />
                Book Appointment
              </NavLink>
            </motion.div>
          </div>
        </div>

        <motion.div
          className="home-hero__badge"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.7 }}
        >
          <span className="home-hero__badge-eyebrow">
            Expert Care By
          </span>

          <span className="home-hero__badge-name">
            Biju Polonia
          </span>

          <p>
            Highly sought-after hairstylist known for style,
            perfection and trust.
          </p>
        </motion.div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="section home-about">
        <div className="container home-about__grid">
          <Reveal direction="left">
            <span className="eyebrow">Welcome To</span>
            <h2>Kolonia Polonia Hair Studio</h2>
            <p className="home-about__lead">
              A premium salon experience in Alappuzha where beauty, luxury, and care come together.
            </p>
            <p>
              From everyday grooming to bridal makeovers, we bring out the best in you with
              creativity, passion, and the finest techniques.
            </p>

            <RevealStagger className="home-about__stats">
              {STATS.map((stat) => (
                <RevealStaggerItem key={stat.label} className="home-about__stat">
                  <stat.icon size={20} strokeWidth={1.6} />
                  <div>
                    <strong>{stat.value}</strong>
                    <span>{stat.label}</span>
                  </div>
                </RevealStaggerItem>
              ))}
            </RevealStagger>

            <NavLink to="/about" className="btn btn-outline-dark home-about__btn">
              Know More About Us <ArrowRight size={15} />
            </NavLink>
          </Reveal>

          <Reveal direction="right" delay={0.15} className="home-about__images">
            <img src={IMG.beardGrooming} alt="Client receiving a precision beard trim" className="home-about__img home-about__img--1" />
            <img src={IMG.hairColorWoman} alt="Stylist applying rich hair color" className="home-about__img home-about__img--2" />
            <img src={IMG.facial} alt="Client enjoying a relaxing facial" className="home-about__img home-about__img--3" />
            <div className="home-about__quote">
              <Sparkles size={18} strokeWidth={1.6} />
              Beauty Confidence Care
            </div>
          </Reveal>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="section-sm home-services">
        <div className="container">
          <Reveal className="home-services__head">
            <span className="eyebrow">Our Services</span>
            <h2>All Your Beauty Needs, Under One Roof</h2>
          </Reveal>

          <RevealStagger className="home-services__grid" staggerDelay={0.07}>
            {SERVICES.map((service) => (
              <RevealStaggerItem key={service.title} className="service-card">
                <NavLink to="/services" className="service-card__link">
                  <div className="service-card__img">
                    <img src={service.image} alt={service.title} loading="lazy" />
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.tag}</p>
                </NavLink>
              </RevealStaggerItem>
            ))}
          </RevealStagger>

          <Reveal className="home-services__more">
            <NavLink to="/services" className="btn btn-outline-dark">
              View All Services <ArrowRight size={15} />
            </NavLink>
          </Reveal>
        </div>
      </section>

      {/* BRANDS MARQUEE */}
      <section className="home-marquee">
        <Reveal className="home-marquee__head">
          <span className="eyebrow">Products We Trust</span>
          <h2>Professional Brands Behind Every Result</h2>
        </Reveal>

        <div className="home-marquee__track" role="list" aria-label="Professional brands used in-studio">
          <ul className="home-marquee__row" aria-hidden="true">
            {BRANDS.map((brand) => (
              <li key={`a-${brand.name}`} className="home-marquee__item">
                <img
                  src={brand.src}
                  alt={brand.name}
                  className="home-marquee__logo"
                  loading="lazy"
                  draggable={false}
                />
                <Gem size={20} strokeWidth={1.6} className="home-marquee__dot" />
              </li>
            ))}
          </ul>
          <ul className="home-marquee__row" aria-hidden="true">
            {BRANDS.map((brand) => (
              <li key={`b-${brand.name}`} className="home-marquee__item">
                <img
                  src={brand.src}
                  alt={brand.name}
                  className="home-marquee__logo"
                  loading="lazy"
                  draggable={false}
                />
                <Gem size={20} strokeWidth={1.6} className="home-marquee__dot" />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* STUDIO SHOWCASE — two videos meeting at a single diagonal, scissor-cut seam */}
      <section className="home-showcase">
        <Reveal className="home-showcase__head">
          <span className="eyebrow">Take A Look Inside</span>
          <h2>The Studio, In Motion</h2>
        </Reveal>

        <Reveal direction="up" delay={0.1} className="home-showcase__stage">
          {SHOWCASE_VIDEOS.map((video, i) => (
            <div className={`showcase-pane showcase-pane--${i}`} key={video.label}>
              <video
                className="showcase-pane__video"
                src={video.src}
                poster={video.poster}
                autoPlay
                muted
                loop
                playsInline
                controls
              />
              <div className="showcase-pane__scrim" />
              <div className="showcase-pane__caption">
                <span className="showcase-pane__label">{video.label}</span>
                <p>{video.caption}</p>
              </div>
            </div>
          ))}

          <div className="showcase-seam" aria-hidden="true">
            <Scissors size={20} strokeWidth={1.6} />
          </div>
        </Reveal>
      </section>

      {/* WHY CHOOSE US */}
      <section className="section-sm home-why">
        <div className="container home-why__inner">
          <Reveal direction="left" className="home-why__head">
            <span className="eyebrow">Why Choose Us</span>
            <h2>Because You Deserve the Best</h2>
            <p>
              We don&rsquo;t just enhance beauty, we enhance confidence. Step in, relax and leave the
              best version of yourself.
            </p>
          </Reveal>

          <RevealStagger className="home-why__list" staggerDelay={0.08}>
            {WHY_US.map((item) => (
              <RevealStaggerItem key={item.label} className="home-why__item">
                <item.icon size={20} strokeWidth={1.6} />
                <span>{item.label}</span>
              </RevealStaggerItem>
            ))}
          </RevealStagger>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section-sm home-testimonials">
        <div className="container">
          <Reveal className="home-testimonials__head">
            <span className="eyebrow">Client Stories</span>
            <h2>Loved By Alappuzha, One Visit At A Time</h2>
          </Reveal>
        </div>

        <Reveal
          direction="up"
          delay={0.1}
          className="home-testimonials__viewport"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <button
            type="button"
            className="home-testimonials__arrow home-testimonials__arrow--prev"
            onClick={prev}
            aria-label="Previous testimonials"
          >
            <ChevronLeft size={20} />
          </button>

          <div className="home-testimonials__track-wrap">
            <div
              className="home-testimonials__track"
              style={{
                width: `${pages.length * 100}%`,
                transform: `translateX(-${(100 / pages.length) * activePage}%)`,
              }}
            >
              {pages.map((group, pageIndex) => (
                <div
                  className="home-testimonials__page"
                  key={pageIndex}
                  style={{ width: `${100 / pages.length}%` }}
                  aria-hidden={pageIndex !== activePage}
                >
                  {group.map((t) => (
                    <article className="testimonial-card" key={t.name}>
                      <Quote className="testimonial-card__mark" size={28} strokeWidth={1} />

                      <div
                        className="testimonial-card__stars"
                        aria-label={`${t.rating} out of 5 stars`}
                      >
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            size={13}
                            strokeWidth={1.5}
                            fill={i < t.rating ? 'currentColor' : 'none'}
                          />
                        ))}
                      </div>

                      <p className="testimonial-card__quote">&ldquo;{t.quote}&rdquo;</p>

                      <div className="testimonial-card__person">
                        <span className="testimonial-card__avatar">{initialsOf(t.name)}</span>
                        <div>
                          <strong>{t.name}</strong>
                          <span>{t.role}</span>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <button
            type="button"
            className="home-testimonials__arrow home-testimonials__arrow--next"
            onClick={next}
            aria-label="Next testimonials"
          >
            <ChevronRight size={20} />
          </button>
        </Reveal>

        {/* <div className="home-testimonials__dots">
          {pages.map((_, i) => (
            <button
              key={i}
              type="button"
              className={i === activePage ? 'active' : ''}
              aria-label={`Show testimonials page ${i + 1}`}
              aria-current={i === activePage}
              onClick={() => goTo(i)}
            />
          ))}
        </div> */}
      </section>

      {/* BRANCHES */}
      <section className="home-branches">
        <div className="container home-branches__inner">
          <Reveal direction="left" className="home-branches__head">
            <span className="eyebrow">Our Branches</span>
            <h2>Visit Our Branches</h2>
            <NavLink to="/contact" className="btn btn-outline-light">
              View Locations <ArrowRight size={15} />
            </NavLink>
          </Reveal>

          <RevealStagger className="home-branches__list" staggerDelay={0.1}>
            {BRANCHES.map((branch) => (
              <RevealStaggerItem key={branch.name} className="branch-card branch-card--dark">
                <div className="branch-card__img">
                  <img src={branch.image} alt={`${branch.name} salon branch interior`} loading="lazy" />
                  <span className="branch-card__tag">{branch.tag}</span>
                </div>
                <div className="branch-card__body">
                  <h3>
                    <MapPin size={16} strokeWidth={2} /> {branch.name}
                  </h3>
                  <p>{branch.address}</p>
                </div>
              </RevealStaggerItem>
            ))}
          </RevealStagger>
        </div>
      </section>



      {/* CTA */}
      <section className="home-cta">
        <div className="container home-cta__inner">
          <Reveal direction="left" className="home-cta__text">
            <Phone size={22} strokeWidth={1.6} />
            <div>
              <h3>Ready for a New You?</h3>
              <p>Book your appointment today and experience the Kolonia Polonia difference.</p>
            </div>
          </Reveal>
          <Reveal direction="right">
            <NavLink to="/contact" className="btn btn-primary">
              <Calendar size={15} /> Book Appointment
            </NavLink>
          </Reveal>
        </div>
      </section>
    </>
  );
}