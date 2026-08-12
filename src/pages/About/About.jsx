import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Calendar,
  Scissors,
  Users,
  Trophy,
  Star,
  Heart,
  ShieldCheck,
  Sparkles,
  CalendarCheck,
  Award,
  Target,
  Compass,
  Gem,
  ThumbsUp,
  Lightbulb,
  HandHeart,
  Milestone,
  Rocket,
  Building2,
  PartyPopper,
} from 'lucide-react';
import SEO from '../../components/SEO/SEO';
import Reveal, { RevealStagger, RevealStaggerItem } from '../../components/Reveal/Reveal';
import { IMG } from '../../assets/images/images';
import './About.css';

const STATS = [
  { icon: Scissors, value: '15+', label: 'Years of Experience' },
  { icon: Users, value: '1 Lakh+', label: 'Happy Clients' },
  { icon: Trophy, value: '30+', label: 'Expert Stylists' },
  { icon: Star, value: '', label: 'Premium Products & Top Brands' },
];

const VALUES = [
  { icon: Heart, label: 'Personalized Care' },
  { icon: ShieldCheck, label: 'Hygienic & Safe Environment' },
  { icon: Sparkles, label: 'Trend-Driven Makeovers' },
  { icon: Star, label: 'Customer Satisfaction First' },
];

const MISSION_VISION = [
  {
    icon: Target,
    label: 'Our Mission',
    text: 'To enhance natural beauty and confidence through personalized, expert care delivered in a warm, hygienic and welcoming environment \u2014 for every client, every visit.',
  },
  {
    icon: Compass,
    label: 'Our Vision',
    text: 'To become Kerala\u2019s most trusted name in premium hair, beauty and wellness, known as much for our integrity and hygiene as for our craft.',
  },
];

const CORE_VALUES = [
  { icon: Gem, title: 'Excellence in Craft', desc: 'Every cut, color and style is treated as a signature piece of work, not a routine service.' },
  { icon: ShieldCheck, title: 'Hygiene & Safety', desc: 'Sterilized tools, premium products and safe practices at every single station.' },
  { icon: Lightbulb, title: 'Creativity & Trend', desc: 'Our stylists train continuously to bring the latest techniques home to Alappuzha.' },
  { icon: HandHeart, title: 'Client-First Care', desc: 'We listen first. Every service is personalized to your face, hair and lifestyle.' },
  { icon: ThumbsUp, title: 'Integrity & Trust', desc: 'Honest recommendations over upselling \u2014 we only suggest what actually suits you.' },
  { icon: Sparkles, title: 'Continuous Learning', desc: 'Regular workshops and certifications keep our team ahead of the curve.' },
];

const JOURNEY = [
  { year: '2009', icon: Milestone, title: 'The First Chair', desc: 'Biju Polonia begins his journey as an independent stylist, building a name on skill and trust.' },
  { year: '2015', icon: Building2, title: 'Kolonia Polonia Opens', desc: 'Our main Alappuzha studio opens its doors, bringing a premium salon experience to the city.' },
  { year: '2019', icon: Rocket, title: 'Growing Family', desc: 'The Alappuzha North branch opens to serve a growing community of loyal clients.' },
  { year: '2022', icon: PartyPopper, title: 'Third Home', desc: 'Cherthala becomes our third branch, extending the Kolonia Polonia experience further.' },
  { year: 'Today', icon: Trophy, title: '1 Lakh+ Happy Clients', desc: 'Three branches, twenty-plus expert stylists, and a legacy still being written.' },
];

const CTA_ICONS = [
  { icon: CalendarCheck, label: 'Easy Booking' },
  { icon: Users, label: 'Expert Stylists' },
  { icon: Award, label: 'Premium Experience' },
];

export default function About() {
  return (
    <>
      <SEO
        title="About Kolonia Polonia Hair Studio | Luxury Salon in Alappuzha"
        description="Discover the story of Kolonia Polonia Hair Studio, founded by renowned hairstylist Biju Polonia. With years of expertise in hair styling, beauty, grooming, bridal makeovers and wellness, we are committed to delivering premium salon experiences for men and women across our Alappuzha branches."
        keywords="About Kolonia Polonia Hair Studio, Biju Polonia, best hairstylist Alappuzha, salon founder Kerala, luxury salon Alappuzha, professional hairstylist Kerala, beauty salon Alappuzha, hair studio Kerala, bridal makeup expert Alappuzha, premium salon Kerala, unisex salon Alappuzha"
        path="/about"
      />

      {/* HERO */}
      <section className="page-hero">
        <div className="page-hero__media">
          <img
            src={IMG.heroAbout}
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
              <span className="eyebrow eyebrow--light">
                About Us
              </span>

              <h1>
                Passion. Precision. Perfection.
              </h1>

              <p>
                Kolonia Polonia Hair Studio is more than just a salon.
                It's an experience crafted with passion, driven by
                expertise and delivered with love.
              </p>

              {/* <span className="page-hero__sign">
                Biju Polonia
              </span> */}
            </motion.div>
          </div>
        </div>
      </section>

      {/* FOUNDER */}
      <section className="section about-founder">
        <div className="container about-founder__grid">
          <Reveal direction="left" className="about-founder__media">
            <img src={IMG.founderPortrait} alt="Biju Polonia, founder and chief stylist" />
            <div className="about-founder__badge">
              <span>Expert Care By</span>
              <strong>Biju Polonia</strong>
              <em>Biju Polonia</em>
            </div>
          </Reveal>

          <Reveal direction="right" delay={0.15}>
            <span className="eyebrow">Founder &amp; Chief Stylist</span>
            <h2>The Vision Behind Kolonia Polonia</h2>
            <p>
              Founded and led by Biju Polonia, a highly sought-after hairstylist with years of
              expertise in the beauty and grooming industry. His dedication, creativity and
              commitment to perfection have made Kolonia Polonia a trusted name in Alappuzha.
            </p>
            <p>
              From classic cuts to trendy transformations, from everyday grooming to bridal
              elegance &mdash; every service is personalized to bring out the best in you.
            </p>

            <RevealStagger className="about-founder__stats" staggerDelay={0.08}>
              {STATS.map((stat) => (
                <RevealStaggerItem key={stat.label} className="about-founder__stat">
                  <span className="about-founder__stat-icon">
                    <stat.icon size={20} strokeWidth={1.5} />
                  </span>
                  {stat.value && <strong>{stat.value}</strong>}
                  <span>{stat.label}</span>
                </RevealStaggerItem>
              ))}
            </RevealStagger>
          </Reveal>
        </div>
      </section>

      {/* STORY */}
      <section className="section-sm about-story">
        <div className="container about-story__grid">
          <Reveal direction="left">
            <span className="eyebrow">Our Story</span>
            <h2>Where Beauty Meets Trust &amp; Transformation</h2>
            <p>
              What started as a small dream has grown into a brand synonymous with quality,
              hygiene and style. We believe every client deserves personalized care in a safe and
              luxurious environment.
            </p>
            <p>
              Our mission is to enhance your natural beauty, boost your confidence and make every
              visit a memorable experience.
            </p>
          </Reveal>

          <Reveal direction="right" delay={0.15} className="about-story__media">
            <img src={IMG.founderWorking} alt="Stylist working on a client's hair" />
            <ul className="about-story__values">
              {VALUES.map((v) => (
                <li key={v.label}>
                  <v.icon size={17} strokeWidth={1.7} />
                  {v.label}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="section-sm about-mission">
        <div className="container">
          <Reveal className="about-mission__head">
            <span className="eyebrow">What Drives Us</span>
            <h2>Mission &amp; Vision</h2>
          </Reveal>

          <RevealStagger className="about-mission__grid" staggerDelay={0.12}>
            {MISSION_VISION.map((item) => (
              <RevealStaggerItem key={item.label} className="about-mission__card">
                <span className="about-mission__icon">
                  <item.icon size={24} strokeWidth={1.5} />
                </span>
                <h3>{item.label}</h3>
                <p>{item.text}</p>
              </RevealStaggerItem>
            ))}
          </RevealStagger>
        </div>
      </section>

      {/* JOURNEY */}
      <section className="section about-journey">
        <div className="container">
          <Reveal className="about-journey__head">
            <span className="eyebrow eyebrow--light">Our Journey</span>
            <h2>From One Chair To Three Branches</h2>
          </Reveal>

          <ul className="about-journey__timeline">
            {JOURNEY.map((step, i) => (
              <Reveal
                as="li"
                key={step.year}
                direction={i % 2 === 0 ? 'left' : 'right'}
                delay={i * 0.05}
                className="about-journey__step"
              >
                <span className="about-journey__icon">
                  <step.icon size={18} strokeWidth={1.6} />
                </span>
                <div className="about-journey__body">
                  <span className="about-journey__year">{step.year}</span>
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="section-sm about-values">
        <div className="container">
          <Reveal className="about-values__head">
            <span className="eyebrow">What We Stand For</span>
            <h2>Our Core Values</h2>
            <p>The principles that guide every service, every stylist, every visit.</p>
          </Reveal>

          <RevealStagger className="about-values__grid" staggerDelay={0.08}>
            {CORE_VALUES.map((item) => (
              <RevealStaggerItem key={item.title} className="about-values__card">
                <span className="about-values__icon">
                  <item.icon size={22} strokeWidth={1.5} />
                </span>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </RevealStaggerItem>
            ))}
          </RevealStagger>
        </div>
      </section>


      {/* CTA */}
      <section className="about-cta">
        <div className="container about-cta__inner">
          <Reveal direction="left" className="about-cta__text">
            <h3>Your Best Self Starts Here.</h3>
            <p>Book your appointment today and let our experts take care of the rest.</p>
          </Reveal>

          <Reveal direction="up" className="about-cta__icons">
            {CTA_ICONS.map((item) => (
              <span key={item.label}>
                <item.icon size={18} strokeWidth={1.6} />
                {item.label}
              </span>
            ))}
          </Reveal>

          <Reveal direction="right">
            <NavLink to="/contact" className="btn btn-white">
              <Calendar size={15} /> Book Appointment
            </NavLink>
          </Reveal>
        </div>
      </section>
    </>
  );
}