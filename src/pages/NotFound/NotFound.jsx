import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Scissors, Home, Calendar, ArrowRight } from 'lucide-react';
import SEO from '../../components/SEO/SEO';
import { IMG } from '../../assets/images/images';
import './NotFound.css';

const QUICK_LINKS = [
  { label: 'Services', to: '/services' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'About Us', to: '/about' },
];

export default function NotFound() {
  return (
    <>
      <SEO
        title="404 - Page Not Found"
        description="The page you are looking for could not be found. Return to Kolonia Polonia Hair Studio to explore our premium hair, beauty, spa and grooming services in Alappuzha, Kerala."
        keywords="404, page not found, Kolonia Polonia Hair Studio"
        path="/404"
        noindex
      />

      <section className="notfound">
        <div className="notfound__media">
          <img src={IMG.heroContact} alt="" aria-hidden="true" />
          <div className="notfound__overlay" />
        </div>

        <div className="container notfound__content">
          <motion.span
            className="notfound__icon"
            initial={{ opacity: 0, scale: 0.7, rotate: -20 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <Scissors size={30} strokeWidth={1.4} />
          </motion.span>

          <motion.h1
            className="notfound__code"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            4<span className="notfound__code-script">0</span>4
          </motion.h1>

          <motion.p
            className="notfound__eyebrow"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            This Style Doesn&rsquo;t Exist
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            Looks Like This Page
            <br />
            Got A New <span className="notfound__script">Look.</span>
          </motion.h2>

          <motion.p
            className="notfound__desc"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            The page you&rsquo;re looking for may have been moved, renamed, or never existed.
            Let&rsquo;s get you back to looking &amp; feeling your best.
          </motion.p>

          <motion.div
            className="notfound__actions"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <NavLink to="/" className="btn btn-white">
              <Home size={15} /> Back To Home
            </NavLink>
            <NavLink to="/contact" className="btn btn-outline-light">
              <Calendar size={15} /> Book Appointment
            </NavLink>
          </motion.div>

          <motion.div
            className="notfound__links"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
          >
            <span>Or explore</span>
            {QUICK_LINKS.map((link, i) => (
              <span key={link.to} className="notfound__links-item">
                <NavLink to={link.to}>
                  {link.label} <ArrowRight size={12} />
                </NavLink>
                {i < QUICK_LINKS.length - 1 && <span className="notfound__links-dot">&middot;</span>}
              </span>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}