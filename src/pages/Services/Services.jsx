import { NavLink } from 'react-router-dom';
import { Scissors, Smile, Flower2, Hand, Eye, Wand2, Check, Calendar, Users, ShieldCheck, Package, HeartHandshake, BadgeCheck } from 'lucide-react';
import SEO from '../../components/SEO/SEO';
import Reveal, { RevealStagger, RevealStaggerItem } from '../../components/Reveal/Reveal';
import { IMG } from '../../assets/images/images';
import './Services.css';
import { motion } from 'framer-motion';


const CATEGORIES = [
  { icon: Scissors, label: 'Hair Services' },
  { icon: Smile, label: 'Beauty & Skin' },
  { icon: Flower2, label: 'Spa & Relaxation' },
  { icon: Hand, label: 'Nails & Pedicure' },
  { icon: Eye, label: 'Threading & Waxing' },
  { icon: Wand2, label: 'Makeup & Bridal' },
];

const HAIR_LIST = [
  'Trendy Haircuts',
  'Hair Coloring',
  'Hair Treatments',
  'Hair Smoothing & Rebonding',
  'Keratin & Botox Therapy',
  'Beard Grooming',
];

const HAIR_CARDS = [
  { label: 'Haircut & Styling', image: IMG.haircutMenClose },
  { label: 'Hair Color & Highlights', image: IMG.hairColorWoman },
  { label: 'Hair Spa & Treatments', image: IMG.hairSpa },
  { label: 'Beard Grooming', image: IMG.beardGrooming },
];

const BEAUTY_LIST = ['Facial & Cleansing', 'Skin Brightening', 'De-Tan & Polishing', 'Acne & Anti-Aging Treatments', 'Under Eye & Hydration Care'];
const SPA_LIST = ['Head Spa', 'Body Massage', 'Aroma Therapy', 'Body Polishing', 'Steam & Sauna (Coming Soon)'];
const NAILS_LIST = ['Manicure', 'Pedicure', 'Nail Art', 'Gel Polish', 'Nail Extensions'];
const BRIDAL_LIST = ['Bridal Makeup', 'Party Makeup', 'Engagement Makeup', 'Saree Draping', 'Hair Do & Styling'];

const WHY = [
  { icon: Users, label: 'Expert & Certified Stylists' },
  { icon: ShieldCheck, label: 'Hygienic & Safe Environment' },
  { icon: Package, label: 'Premium Products & Top Brands' },
  { icon: HeartHandshake, label: 'Personalized Care For Every Client' },
  { icon: BadgeCheck, label: 'Satisfaction Guaranteed' },
];

export default function Services() {
  return (
    <>
      <SEO
        title="Hair, Beauty & Spa Services in Alappuzha | Kolonia Polonia Hair Studio"
        description="Discover premium salon services at Kolonia Polonia Hair Studio in Alappuzha. From precision haircuts, hair styling and hair colouring to bridal makeup, facials, spa therapies, manicure, pedicure, threading, waxing, beard grooming and complete beauty care for men and women."
        keywords="hair salon services Alappuzha, beauty salon Alappuzha, spa services Alappuzha, haircut Alappuzha, hair styling, hair colouring, hair spa, keratin treatment, smoothening, bridal makeup Alappuzha, groom makeup, facial, manicure, pedicure, nail art, threading, waxing, beard grooming, luxury salon Kerala, unisex salon Alappuzha"
        path="/services"
      />

      {/* HERO */}
      <section className="page-hero">
        <div className="page-hero__media">
          <img
            src={IMG.heroServices}
            alt="Interior of Kolonia Polonia Hair Studio"
          />
          <div className="page-hero__overlay" />
        </div>

        <div className="container page-hero__wrapper">
          <div className="page-hero__content">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span className="eyebrow eyebrow--light">Services</span>


              <h1>Beauty. Crafted For You.</h1>

              <p>
                From expert haircuts to luxurious spa therapies, we offer complete beauty solutions
                for men &amp; women under one roof.
              </p>

              {/* <span className="page-hero__sign">
                Biju Polonia
              </span> */}
            </motion.div>
          </div>
        </div>
      </section>

      {/* <section className="page-hero">
        <div className="page-hero__media">
          <img src={IMG.heroServices} alt="Kolonia Polonia salon service area" />
          <div className="page-hero__overlay" />
        </div>
        <div className="container page-hero__content">
          <span className="eyebrow eyebrow--light">Services</span>
          <h1>Beauty. Crafted For You.</h1>
          <p>
            From expert haircuts to luxurious spa therapies, we offer complete beauty solutions
            for men &amp; women under one roof.
          </p>
        </div>
      </section> */}

      {/* CATEGORY NAV */}
      <div className="services-catnav">
        <div className="container services-catnav__inner">
          {CATEGORIES.map((cat) => (
            <span key={cat.label} className="services-catnav__item">
              <cat.icon size={20} strokeWidth={1.6} />
              {cat.label}
            </span>
          ))}
        </div>
      </div>

      {/* HAIR SERVICES */}
      <section className="section services-hair">
        <div className="container services-hair__grid">
          <Reveal direction="left" className="services-hair__intro">
            <span className="eyebrow">Hair Services</span>
            <h2>Style That Defines You</h2>
            <p>
              Our experienced stylists create trendy, personalized looks that suit your
              personality and lifestyle.
            </p>
            <ul className="services-checklist">
              {HAIR_LIST.map((item) => (
                <li key={item}>
                  <Check size={15} strokeWidth={2.4} /> {item}
                </li>
              ))}
            </ul>
            <NavLink to="/contact" className="btn btn-primary">
              <Calendar size={15} /> Book Hair Appointment
            </NavLink>
          </Reveal>

          <RevealStagger className="services-hair__cards" staggerDelay={0.08}>
            {HAIR_CARDS.map((card) => (
              <RevealStaggerItem key={card.label} className="services-img-card">
                <img src={card.image} alt={card.label} loading="lazy" />
                <span>{card.label}</span>
              </RevealStaggerItem>
            ))}
          </RevealStagger>

          <Reveal direction="up" delay={0.2} className="services-quote-card">
            <Scissors size={26} strokeWidth={1.4} />
            <p>Great Hair Doesn&rsquo;t Happen By Chance. It Happens By Appointment.</p>
            <NavLink to="/contact" className="btn btn-outline-light">
              Book Now <Calendar size={14} />
            </NavLink>
          </Reveal>
        </div>
      </section>

      {/* BEAUTY & SPA */}
      <section className="section-sm services-split services-split--gray">
        <div className="container services-split__row">
          <Reveal direction="left" className="services-split__text">
            <span className="eyebrow">Beauty &amp; Skin</span>
            <h2>Glow Inside. Radiate Outside.</h2>
            <ul className="services-checklist services-checklist--two-col">
              {BEAUTY_LIST.map((item) => (
                <li key={item}>
                  <Check size={15} strokeWidth={2.4} /> {item}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal direction="right" delay={0.1} className="services-split__img">
            <img src={IMG.facial} alt="Client receiving a rejuvenating facial" loading="lazy" />
          </Reveal>
        </div>

        <div className="container services-split__row services-split__row--reverse">
          <Reveal direction="right" className="services-split__text">
            <span className="eyebrow">Spa &amp; Relaxation</span>
            <h2>Relax. Refresh. Rejuvenate.</h2>
            <ul className="services-checklist services-checklist--two-col">
              {SPA_LIST.map((item) => (
                <li key={item}>
                  <Check size={15} strokeWidth={2.4} /> {item}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal direction="left" delay={0.1} className="services-split__img">
            <img src={IMG.massage} alt="Client enjoying a relaxing body massage" loading="lazy" />
          </Reveal>
        </div>
      </section>

      {/* NAILS & BRIDAL */}
      <section className="section-sm services-split">
        <div className="container services-split__row">
          <Reveal direction="left" className="services-split__text">
            <span className="eyebrow">Nails &amp; More</span>
            <h2>Details That Complete You.</h2>
            <ul className="services-checklist services-checklist--two-col">
              {NAILS_LIST.map((item) => (
                <li key={item}>
                  <Check size={15} strokeWidth={2.4} /> {item}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal direction="right" delay={0.1} className="services-split__img">
            <img src={IMG.nailArt} alt="Nail art in progress" loading="lazy" />
          </Reveal>
        </div>

        <div className="container services-split__row services-split__row--reverse">
          <Reveal direction="right" className="services-split__text">
            <span className="eyebrow">Makeup &amp; Bridal</span>
            <h2>For Every Occasion. For Every You.</h2>
            <ul className="services-checklist services-checklist--two-col">
              {BRIDAL_LIST.map((item) => (
                <li key={item}>
                  <Check size={15} strokeWidth={2.4} /> {item}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal direction="left" delay={0.1} className="services-split__img">
            <img src={IMG.bridalMakeup} alt="Bridal makeup and jewellery styling" loading="lazy" />
          </Reveal>
        </div>
      </section>

      {/* WHY US STRIP */}
      <section className="services-why">
        <div className="container services-why__inner">
          <Reveal className="services-why__head">
            <h3>Why Choose Kolonia Polonia?</h3>
          </Reveal>
          <RevealStagger className="services-why__list" staggerDelay={0.08}>
            {WHY.map((item) => (
              <RevealStaggerItem key={item.label} className="services-why__item">
                <item.icon size={22} strokeWidth={1.5} />
                <span>{item.label}</span>
              </RevealStaggerItem>
            ))}
          </RevealStagger>
        </div>
      </section>

      {/* CTA */}
      <section className="services-cta">
        <div className="container services-cta__inner">
          <Reveal direction="left" className="services-cta__text">
            <h3>Ready to Experience the Best?</h3>
            <p>Book your appointment today and let our experts bring out the best in you.</p>
          </Reveal>
          <Reveal direction="right">
            <NavLink to="/contact" className="btn btn-outline-dark">
              <Calendar size={15} /> Book Appointment
            </NavLink>
          </Reveal>
        </div>
      </section>
    </>
  );
}
