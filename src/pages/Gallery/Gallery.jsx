import { useMemo, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Play, ChevronLeft, ChevronRight, X, SlidersHorizontal, Calendar } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import SEO from '../../components/SEO/SEO';
import Reveal, { RevealStagger, RevealStaggerItem } from '../../components/Reveal/Reveal';
import { IMG } from '../../assets/images/images';
import { VIDEOS } from '../../assets/videos/videos';
import './Gallery.css';

// const FILTERS = ['All', 'Hair', 'Makeup', 'Bridal', 'Beard', 'Spa', 'Nails'];


const PHOTOS = [
  { id: 1, src: IMG.haircutMenClose, alt: 'Sharp modern men\u2019s haircut' },
  { id: 2, src: IMG.hairColorWoman, alt: 'Long curled balayage hair color' },
  { id: 3, src: IMG.beardGrooming, alt: 'Precision beard grooming' },
  { id: 4, src: IMG.bridalMakeup, alt: 'Traditional bridal makeup and jewellery' },
  { id: 5, src: IMG.hairStylingCurls, alt: 'Elegant updo hairstyle' },
  { id: 6, src: IMG.facial, alt: 'Relaxing facial treatment' },
  { id: 7, src: IMG.nailPolish, alt: 'Gel nail polish application' },
  { id: 8, src: IMG.beardGroomingClose, alt: 'Close up beard styling' },
  { id: 9, src: IMG.groomMakeup, alt: 'Party makeup application' },
  { id: 10, src: IMG.massageSpa, alt: 'Under eye hydration care' },
  { id: 11, src: IMG.hairColorWoman, alt: 'Voluminous curled hairstyle' },
  { id: 12, src: IMG.nailArt, alt: 'Detailed nail art design' },
  { id: 13, src: IMG.massage, alt: 'Head massage relaxation therapy' },
  { id: 14, src: IMG.hairSpa, alt: 'Wavy hair spa result' },
  { id: 15, src: IMG.nailPolish, alt: 'Fresh manicure finish' },
];

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [activeVideo, setActiveVideo] = useState(null); // holds VIDEOS index or null
  const scrollerRef = useRef(null);

  const shuffledPhotos = useMemo(
    () => {
      return [...PHOTOS].sort(() => Math.random() - 0.5);
    }, [],
  );

  const scrollVideos = (dir) => {
    if (!scrollerRef.current) return;
    scrollerRef.current.scrollBy({ left: dir * 320, behavior: 'smooth' });
  };

  const openLightbox = (index) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const showNext = () => setLightboxIndex((i) => (i + 1) % shuffledPhotos.length);
  const showPrev = () => setLightboxIndex((i) => (i - 1 + shuffledPhotos.length) % shuffledPhotos.length);

  const shuffledVideos = useMemo(() => {
    return [...VIDEOS].sort(() => Math.random() - 0.5);
  }, []);
  const openVideo = (index) => setActiveVideo(index);
  const closeVideo = () => setActiveVideo(null);

  return (
    <>
      <SEO
        title="Salon Gallery | Hair, Bridal Makeup & Beauty Transformations in Alappuzha"
        description="Explore the Kolonia Polonia Hair Studio gallery featuring stunning hair transformations, bridal makeovers, hair colouring, grooming, spa treatments, nail art and beauty services. See the quality and craftsmanship behind every look created at our premium salon in Alappuzha, Kerala."
        keywords="Kolonia Polonia gallery, salon gallery Alappuzha, hair transformation Alappuzha, hairstyle gallery Kerala, bridal makeup gallery Alappuzha, hair colouring results, salon makeover, beard grooming gallery, nail art gallery, spa gallery, beauty salon photos, luxury salon Alappuzha, hair styling gallery, before and after salon"
        path="/gallery"
      />

      {/* HERO */}
      <section className="page-hero">
        <div className="page-hero__media">
          <img src={IMG.heroGallery} alt="Interior of Kolonia Polonia Hair Studio" />
          <div className="page-hero__overlay" />
        </div>

        <div className="container page-hero__wrapper">
          <div className="page-hero__content">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span className="eyebrow eyebrow--light">Our Gallery</span>
              <h1>Transformations That Speak For Themselves.</h1>
              <p>
                Real people. Real styles. Real confidence. Explore our work and see the Kolonia
                Polonia difference.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FILTER BAR */}
      {/* <div className="gallery-filterbar">
        <div className="container gallery-filterbar__inner">
          <div className="gallery-filterbar__tabs" role="tablist" aria-label="Filter gallery by category">
            {FILTERS.map((f) => (
              <button
                key={f}
                type="button"
                role="tab"
                aria-selected={activeFilter === f}
                className={`gallery-filterbar__tab ${activeFilter === f ? 'active' : ''}`}
                onClick={() => setActiveFilter(f)}
              >
                {f}
              </button>
            ))}
          </div>
          <button type="button" className="gallery-filterbar__filter">
            <SlidersHorizontal size={15} strokeWidth={2} /> Filter
          </button>
        </div>
      </div> */}

      {/* VIDEO GALLERY */}
      <section className="section-sm gallery-videos">
        <div className="container">
          <Reveal className="gallery-section-head">
            <span className="gallery-section-head__label">
              <Play size={16} strokeWidth={2} /> Video Gallery
            </span>
            <button type="button" className="gallery-section-head__link">View All Videos &rarr;</button>
          </Reveal>

          <div className="gallery-videos__row-wrap">
            {/* <button type="button" className="gallery-videos__arrow gallery-videos__arrow--left" onClick={() => scrollVideos(-1)} aria-label="Scroll videos left">
              <ChevronLeft size={20} />
            </button> */}

            <div className="gallery-videos__row" ref={scrollerRef}>
              {shuffledVideos.map((v, i) => (
                <button
                  type="button"
                  className="video-card"
                  key={v.title}
                  onClick={() => openVideo(i)}
                  aria-label={`Play video`}
                >
                  <div className="video-card__thumb">
                    <video
                      className="video-card__preview"
                      poster={v.thumb}
                      src={v.src}
                      muted
                      loop
                      playsInline
                      preload="metadata"
                    />
                    <span className="video-card__play"><Play size={20} fill="currentColor" /></span>
                    {/* <span className="video-card__duration">{v.duration}</span> */}
                  </div>
                  {/* <h4>{v.title}</h4>
                  <p>{v.tag}</p> */}
                </button>
              ))}
            </div>

            {/* <button type="button" className="gallery-videos__arrow gallery-videos__arrow--right" onClick={() => scrollVideos(1)} aria-label="Scroll videos right">
              <ChevronRight size={20} />
            </button> */}
          </div>
        </div>
      </section>

      {/* PHOTO GALLERY */}
      <section className="section-sm gallery-photos">
        <div className="container">
          <Reveal className="gallery-section-head">
            <span className="gallery-section-head__label">Photo Gallery</span>
            <button type="button" className="gallery-section-head__link">View All Photos &rarr;</button>
          </Reveal>

          <RevealStagger className="gallery-photos__grid" staggerDelay={0.04} amount={0.05}>
            {shuffledPhotos.map((photo, i) => (
              <RevealStaggerItem key={`${photo.id}`} className="gallery-photo">
                <button type="button" onClick={() => openLightbox(i)} aria-label={`View larger image: ${photo.alt}`}>
                  <img src={photo.src} alt={photo.alt} loading="lazy" />
                  <span className="gallery-photo__overlay" />
                </button>
              </RevealStaggerItem>
            ))}
          </RevealStagger>
        </div>
      </section>

      {/* CTA */}
      <section className="gallery-cta">
        <div className="container gallery-cta__inner">
          <Reveal direction="left" className="gallery-cta__text">
            <h3>Love Your Look? Let&rsquo;s Create It Together.</h3>
            <p>Book your appointment today and let our experts bring out the best in you.</p>
          </Reveal>
          <Reveal direction="right">
            <NavLink to="/contact" className="btn btn-white">
              <Calendar size={15} /> Book Appointment
            </NavLink>
          </Reveal>
        </div>
      </section>

      {/* PHOTO LIGHTBOX */}
      <AnimatePresence>
        {lightboxIndex !== null && shuffledPhotos[lightboxIndex] && (
          <motion.div
            className="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={closeLightbox}
            role="dialog"
            aria-modal="true"
            aria-label="Photo preview"
          >
            <button type="button" className="lightbox__close" onClick={closeLightbox} aria-label="Close preview">
              <X size={26} />
            </button>
            <button
              type="button"
              className="lightbox__nav lightbox__nav--left"
              onClick={(e) => { e.stopPropagation(); showPrev(); }}
              aria-label="Previous image"
            >
              <ChevronLeft size={28} />
            </button>

            <motion.img
              key={shuffledPhotos[lightboxIndex].src}
              src={shuffledPhotos[lightboxIndex].src}
              alt={shuffledPhotos[lightboxIndex].alt}
              className="lightbox__img"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
            />

            <button
              type="button"
              className="lightbox__nav lightbox__nav--right"
              onClick={(e) => { e.stopPropagation(); showNext(); }}
              aria-label="Next image"
            >
              <ChevronRight size={28} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* VIDEO PLAYER MODAL */}
      <AnimatePresence>
        {activeVideo !== null && shuffledVideos[activeVideo] && (
          <motion.div
            className="lightbox video-lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={closeVideo}
            role="dialog"
            aria-modal="true"
            aria-label="Video preview"
          >
            <button type="button" className="lightbox__close" onClick={closeVideo} aria-label="Close video">
              <X size={26} />
            </button>

            <motion.video
              key={shuffledVideos[activeVideo].id}
              className="video-lightbox__player"
              src={shuffledVideos[activeVideo].src}
              controls
              autoPlay
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}