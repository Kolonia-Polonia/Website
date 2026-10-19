import { useMemo, useState } from 'react';
import SEO from '../../components/SEO/SEO';
import Reveal, { RevealStagger, RevealStaggerItem } from '../../components/Reveal/Reveal';
import { IMG } from '../../assets/images/images';
import {
  OFFER,
  BOOKING_BRANCHES,
  WORKING_HOURS,
  SERVICE_GROUPS,
  PACKAGES,
  SPECIAL_PACKAGES,
  CUSTOM_SERVICE_ID,
  formatINR,
  getDiscountAmount,
  getDiscountedPrice,
  getPriceLabel,
  getBookingOptionById,
  getBranchById,
} from '../../data/packages';
import './Contact.css';
import { motion } from 'framer-motion';

/* All branches shown in the "Our Branches" section.
   `offer: true` marks the branches where the website offer applies. */
const BRANCHES = [
  { tag: 'Main Branch', name: 'Alappuzha', address: 'Near Hospital Jn. Municipal Stadium Ward, Vellakkinar, Alappuzha, Kerala – 688001', phone: '98472 21919', image: IMG.branchInterior1, offer: true },
  { tag: 'Malikamukku Branch', name: 'Arattuvazhy', address: 'ARATTUVAZHI, MALIKAMUKK ROAD, Vellappally, Kanjiramchira, Alappuzha, Kerala 688007', phone: '98472 21919', image: IMG.branchInterior3, offer: true },
  { tag: 'Branch 3', name: 'Thondankulangara', address: 'G85Q+2XH, Thondankulangara, Thathampally, Alappuzha, Kerala – 688013', phone: '98472 21919', image: IMG.branchInterior2, offer: false },
];

const INITIAL_FORM = {
  name: '',
  phone: '',
  email: '',
  branch: '',
  service: '',
  customService: '',
  date: '',
  time: '',
  message: '',
};

/* ---------- date / time helpers ---------- */

const toDateInput = (d) =>
  `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;

const formatSlotLabel = (totalMinutes) => {
  const h24 = Math.floor(totalMinutes / 60);
  const m = totalMinutes % 60;
  const suffix = h24 >= 12 ? 'PM' : 'AM';
  const h12 = h24 % 12 === 0 ? 12 : h24 % 12;
  return `${String(h12).padStart(2, '0')}:${String(m).padStart(2, '0')} ${suffix}`;
};

const buildSlots = () => {
  const slots = [];
  const { open, close, intervalMinutes } = WORKING_HOURS;
  for (let m = open * 60; m < close * 60; m += intervalMinutes) {
    slots.push({ minutes: m, value: formatSlotLabel(m), label: formatSlotLabel(m) });
  }
  return slots;
};

const SLOTS = buildSlots();

const formatLongDate = (isoDate) =>
  new Date(`${isoDate}T00:00:00`).toLocaleDateString('en-IN', {
    weekday: 'short',
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });

/* ---------- pricing helpers ---------- */

/* "starting" and "plus" prices are estimates until the salon confirms them */
const isEstimate = (item) => item && (item.priceType === 'starting' || item.priceType === 'plus');

/* Price wording after the website offer, keeping "Starting at" / "onwards" */
const getPayableLabel = (item) => getPriceLabel({ ...item, price: getDiscountedPrice(item.price) });

/* "Facial — ₹3,000"  ->  ['Facial', '₹3,000'] */
const splitInclude = (line) => {
  const [label, amount] = line.split(' — ');
  return [label, amount || ''];
};

/* A branch can only receive enquiries once a real WhatsApp number is set */
const isWhatsappReady = (branch) => /^\d{10,15}$/.test(branch?.whatsapp || '');

export default function Contact() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const now = new Date();
  const todayStr = toDateInput(now);
  const nowMinutes = now.getHours() * 60 + now.getMinutes();
  const maxDate = useMemo(() => {
    const d = new Date();
    d.setDate(d.getDate() + 90);
    return toDateInput(d);
  }, []);

  const isCustom = form.service === CUSTOM_SERVICE_ID;
  const selectedItem = isCustom ? null : getBookingOptionById(form.service);
  const selectedBranch = getBranchById(form.branch);

  const isSlotPast = (slot) => form.date === todayStr && slot.minutes <= nowMinutes;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    setErrors((err) => ({ ...err, [name]: '' }));
  };

  const handleBranch = (id) => {
    setForm((f) => ({ ...f, branch: id }));
    setErrors((err) => ({ ...err, branch: '' }));
  };

  const scrollToForm = () => {
    const el = document.getElementById('enquiry');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const choosePackage = (id) => {
    setForm((f) => ({ ...f, service: id }));
    setErrors((err) => ({ ...err, service: '' }));
    scrollToForm();
  };

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = 'Please enter your name.';

    if (!form.phone.trim()) {
      next.phone = 'Please enter your phone number.';
    } else if (form.phone.replace(/\D/g, '').length < 10) {
      next.phone = 'Please enter a valid phone number.';
    }

    if (form.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = 'Please enter a valid email address.';
    }

    if (!form.branch) {
      next.branch = 'Please choose a parlour.';
    } else if (!isWhatsappReady(selectedBranch)) {
      next.branch = `Online enquiries for ${selectedBranch.name} are not available yet. Please call ${selectedBranch.phone}.`;
    }

    if (!form.service) next.service = 'Please choose a package or service.';
    if (isCustom && !form.customService.trim()) next.customService = 'Please describe the service you need.';

    if (!form.date) {
      next.date = 'Please choose a date.';
    } else if (form.date < todayStr) {
      next.date = 'Please choose today or a later date.';
    }

    if (!form.time) {
      next.time = 'Please choose an expected time.';
    } else {
      const slot = SLOTS.find((s) => s.value === form.time);
      if (slot && isSlotPast(slot)) next.time = 'That time has passed. Please choose a later time.';
    }

    return next;
  };

  const buildMessage = () => {
    const branch = selectedBranch;

    let serviceName;
    let pricingBlock;

    if (isCustom) {
      serviceName = `Other: ${form.customService.trim()}`;
      pricingBlock = `Pricing
Website offer of ${OFFER.percent}% off applies. Final amount to be confirmed by the studio.`;
    } else {
      serviceName =
        selectedItem.type === 'package'
          ? `${selectedItem.name} (Special Package)`
          : `${selectedItem.name} (${selectedItem.category})`;

      const lines = [
        'Pricing',
        selectedItem.originalPrice ? `Regular Menu Price: ${formatINR(selectedItem.originalPrice)}` : null,
        `${selectedItem.type === 'package' ? 'Package Price' : 'Listed Price'}: ${getPriceLabel(selectedItem)}`,
        `Website Offer (${OFFER.percent}% off): - ${formatINR(getDiscountAmount(selectedItem.price))}`,
        `Estimated Payable: ${getPayableLabel(selectedItem)}`,
        isEstimate(selectedItem) ? 'Final price to be confirmed by the studio.' : null,
      ].filter(Boolean);

      pricingBlock = lines.join('\n');
    }

    return `KOLONIA POLONIA HAIR STUDIO

NEW ENQUIRY - ${branch.name.toUpperCase()}

----------------------------------------

Parlour
${branch.name}, ${branch.place}

Name
${form.name.trim()}

Phone
${form.phone.trim()}

Email
${form.email.trim() || 'Not Provided'}

Package / Service
${serviceName}

Preferred Date
${formatLongDate(form.date)}

Expected Time
${form.time}

${pricingBlock}

Message
${form.message.trim() || 'No Message'}

----------------------------------------

Website Offer Applied
Flat ${OFFER.percent}% off for enquiries made through the website.

Submitted From
Website Booking Form
https://koloniapolonia.in`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validation = validate();
    setErrors(validation);
    if (Object.keys(validation).length > 0) return;

    const url = `https://wa.me/${selectedBranch.whatsapp}?text=${encodeURIComponent(buildMessage())}`;
    window.open(url, '_blank');

    setSubmitted(true);
    setForm(INITIAL_FORM);
    setTimeout(() => setSubmitted(false), 8000);
  };

  return (
    <>
      <SEO
        title="Contact Kolonia Polonia Hair Studio | Book Your Salon Appointment in Alappuzha"
        description="Book a salon appointment at Kolonia Polonia Hair Studio in Alappuzha, Kerala. Choose your service or bridal package, pick your branch, date and time, and enquire on WhatsApp with a flat 10% website offer."
        keywords="Kolonia Polonia Hair Studio contact, contact salon Alappuzha, salon phone number Alappuzha, book salon appointment Alappuzha, beauty salon contact Kerala, hair salon Alappuzha, WhatsApp salon booking, bridal package Alappuzha, bridal makeup package Alappuzha, salon offer Alappuzha, facial hair spa Alappuzha, luxury salon Kerala, unisex salon Alappuzha"
        path="/contact"
      />

      {/* HERO */}
      <section className="page-hero">
        <div className="page-hero__media">
          <img src={IMG.heroContact} alt="Interior of Kolonia Polonia Hair Studio" />
          <div className="page-hero__overlay" />
        </div>

        <div className="container page-hero__wrapper">
          <div className="page-hero__content">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span className="eyebrow eyebrow--light">Contact Us</span>
              <h1>We Would Love To Hear From You.</h1>
              <p>
                Have a question, need an appointment, or want to know more about our services?
                We&rsquo;re here for you!
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SPECIAL PACKAGES */}
      <section className="section-sm pkg-section" id="packages">
        <div className="container">
          <Reveal className="pkg-head">
            <span className="eyebrow">Special Packages</span>
            <h2>Special Packages, With An Extra {OFFER.percent}% Off</h2>
            <p>
              Choose a package, send your enquiry on WhatsApp, and the {OFFER.percent}% website offer
              is applied on top of the package price.
            </p>
          </Reveal>

          <Reveal className="pkg-offer">
            <span className="pkg-offer__value">{OFFER.percent}% OFF</span>
            <span className="pkg-offer__text">
              <strong>{OFFER.title}</strong>
              {OFFER.line} {OFFER.applicableNote}
            </span>
          </Reveal>

          <RevealStagger className="pkg-list" staggerDelay={0.08}>
            {SPECIAL_PACKAGES.map((pkg) => {
              const isSelected = form.service === pkg.id;
              return (
                <RevealStaggerItem
                  key={pkg.id}
                  className={`pkg-card${pkg.featured ? ' is-featured' : ''}${isSelected ? ' is-selected' : ''}`}
                >
                  <div className="pkg-card__main">
                    <span className="pkg-card__cat">{pkg.category}</span>
                    <h3>{pkg.name}</h3>
                    <p className="pkg-card__tagline">{pkg.tagline}</p>

                    <div className="pkg-price">
                      {pkg.originalPrice && (
                        <div className="pkg-price__row pkg-price__row--old">
                          <span>Regular menu price</span>
                          <span>{formatINR(pkg.originalPrice)}</span>
                        </div>
                      )}
                      <div className="pkg-price__row">
                        <span>Package price</span>
                        <span>{formatINR(pkg.price)}</span>
                      </div>
                      <div className="pkg-price__row pkg-price__row--offer">
                        <span>Website offer ({OFFER.percent}% off)</span>
                        <span>&minus; {formatINR(getDiscountAmount(pkg.price))}</span>
                      </div>
                      <div className="pkg-price__final">
                        <span>Your estimated price</span>
                        <strong>{formatINR(getDiscountedPrice(pkg.price))}</strong>
                      </div>
                    </div>

                    <button type="button" className="btn btn-primary pkg-card__btn" onClick={() => choosePackage(pkg.id)}>
                      {isSelected ? 'Selected – Continue To Enquiry' : 'Select This Package'}
                    </button>
                  </div>

                  <div className="pkg-card__side">
                    <span className="pkg-card__side-title">Package Includes</span>
                    <ul className="pkg-card__includes">
                      {pkg.includes.map((line) => {
                        const [label, amount] = splitInclude(line);
                        return (
                          <li key={line}>
                            <span>{label}</span>
                            {amount && <span>{amount}</span>}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </RevealStaggerItem>
              );
            })}
          </RevealStagger>
        </div>
      </section>

      {/* FORM + INFO */}
      <section className="section-sm contact-main" id="enquiry">
        <div className="container contact-main__grid">
          <Reveal direction="left" className="contact-form-card">
            <span className="contact-card-label">Book Your Appointment</span>
            <p className="contact-form-card__sub">
              Choose your parlour, service, date and time. Your enquiry opens in WhatsApp,
              addressed to the branch you select.
            </p>

            <div className="contact-offer">
              <strong>{OFFER.percent}% website offer included</strong>
              <span>{OFFER.line} {OFFER.applicableNote}</span>
            </div>

            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              {/* 01 PARLOUR */}
              <fieldset className="contact-form__group">
                <legend><span>01</span> Choose Parlour</legend>
                <div className="branch-choice" role="radiogroup" aria-label="Choose parlour">
                  {BOOKING_BRANCHES.map((b) => (
                    <label key={b.id} className={`branch-choice__item${form.branch === b.id ? ' is-active' : ''}`}>
                      <input
                        type="radio"
                        name="branch"
                        value={b.id}
                        checked={form.branch === b.id}
                        onChange={() => handleBranch(b.id)}
                      />
                      <span className="branch-choice__body">
                        <span className="branch-choice__name">{b.name}</span>
                        <span className="branch-choice__place">{b.place}</span>
                        <span className="branch-choice__addr">{b.address}</span>
                        <span className="branch-choice__offer">{OFFER.percent}% website offer</span>
                      </span>
                    </label>
                  ))}
                </div>
                {errors.branch && <span className="contact-form__error">{errors.branch}</span>}
              </fieldset>

              {/* 02 PACKAGE / SERVICE */}
              <fieldset className="contact-form__group">
                <legend><span>02</span> Package Or Service</legend>
                <div className="contact-form__field">
                  <label htmlFor="service" className="contact-form__label">Select Package Or Service</label>
                  <div className="contact-form__select">
                    <select id="service" name="service" value={form.service} onChange={handleChange} aria-invalid={!!errors.service}>
                      <option value="">Choose a package or service</option>

                      <optgroup label="Special Packages">
                        {PACKAGES.map((p) => (
                          <option key={p.id} value={p.id}>
                            {p.name} - {getPriceLabel(p)}
                          </option>
                        ))}
                      </optgroup>

                      {SERVICE_GROUPS.map((group) => (
                        <optgroup key={group.id} label={group.label}>
                          {group.services.map((s) => (
                            <option key={s.id} value={s.id}>
                              {s.name} - {getPriceLabel(s)}
                            </option>
                          ))}
                        </optgroup>
                      ))}

                      <option value={CUSTOM_SERVICE_ID}>Other service (describe below)</option>
                    </select>
                  </div>
                  {errors.service && <span className="contact-form__error">{errors.service}</span>}
                </div>

                {isCustom && (
                  <div className="contact-form__field">
                    <label htmlFor="customService" className="contact-form__label">Service Required</label>
                    <input
                      id="customService"
                      name="customService"
                      type="text"
                      placeholder="Tell us which service you need"
                      value={form.customService}
                      onChange={handleChange}
                      aria-invalid={!!errors.customService}
                    />
                    {errors.customService && <span className="contact-form__error">{errors.customService}</span>}
                  </div>
                )}

                {selectedItem && (
                  <div className="booking-summary">
                    <div className="booking-summary__title">{selectedItem.name}</div>
                    {selectedItem.originalPrice && (
                      <div className="booking-summary__row booking-summary__row--old">
                        <span>Regular menu price</span>
                        <span>{formatINR(selectedItem.originalPrice)}</span>
                      </div>
                    )}
                    <div className="booking-summary__row">
                      <span>{selectedItem.type === 'package' ? 'Package price' : 'Listed price'}</span>
                      <span>{getPriceLabel(selectedItem)}</span>
                    </div>
                    <div className="booking-summary__row booking-summary__row--offer">
                      <span>Website offer ({OFFER.percent}% off)</span>
                      <span>&minus; {formatINR(getDiscountAmount(selectedItem.price))}</span>
                    </div>
                    <div className="booking-summary__row booking-summary__row--total">
                      <span>Estimated payable</span>
                      <span>{getPayableLabel(selectedItem)}</span>
                    </div>
                  </div>
                )}

                {selectedItem && isEstimate(selectedItem) && (
                  <p className="booking-summary__note">
                    This service is priced as an estimate. The final price is confirmed by the studio.
                  </p>
                )}

                {selectedItem?.description && (
                  <p className="booking-summary__note">{selectedItem.description}</p>
                )}

                {isCustom && (
                  <p className="booking-summary__note">
                    The {OFFER.percent}% website offer applies to this service. The final amount is confirmed by the studio.
                  </p>
                )}
              </fieldset>

              {/* 03 DATE AND TIME */}
              <fieldset className="contact-form__group">
                <legend><span>03</span> Date And Expected Time</legend>
                <div className="contact-form__row">
                  <div className="contact-form__field">
                    <label htmlFor="date" className="contact-form__label">Preferred Date</label>
                    <input
                      id="date"
                      name="date"
                      type="date"
                      min={todayStr}
                      max={maxDate}
                      value={form.date}
                      onChange={handleChange}
                      aria-invalid={!!errors.date}
                    />
                    {errors.date && <span className="contact-form__error">{errors.date}</span>}
                  </div>

                  <div className="contact-form__field">
                    <label htmlFor="time" className="contact-form__label">Expected Time</label>
                    <div className="contact-form__select">
                      <select id="time" name="time" value={form.time} onChange={handleChange} aria-invalid={!!errors.time}>
                        <option value="">Choose a time</option>
                        {SLOTS.map((slot) => (
                          <option key={slot.value} value={slot.value} disabled={isSlotPast(slot)}>
                            {slot.label}
                          </option>
                        ))}
                      </select>
                    </div>
                    {errors.time && <span className="contact-form__error">{errors.time}</span>}
                  </div>
                </div>
                <p className="contact-form__hint">Open daily, {WORKING_HOURS.label}. Your time is confirmed by the studio on WhatsApp.</p>
              </fieldset>

              {/* 04 DETAILS */}
              <fieldset className="contact-form__group">
                <legend><span>04</span> Your Details</legend>
                <div className="contact-form__row">
                  <div className="contact-form__field">
                    <label htmlFor="name" className="contact-form__label">Your Name</label>
                    <input id="name" name="name" type="text" placeholder="Full name" value={form.name} onChange={handleChange} aria-invalid={!!errors.name} />
                    {errors.name && <span className="contact-form__error">{errors.name}</span>}
                  </div>
                  <div className="contact-form__field">
                    <label htmlFor="phone" className="contact-form__label">Phone Number</label>
                    <input id="phone" name="phone" type="tel" placeholder="10-digit mobile number" value={form.phone} onChange={handleChange} aria-invalid={!!errors.phone} />
                    {errors.phone && <span className="contact-form__error">{errors.phone}</span>}
                  </div>
                </div>

                <div className="contact-form__field">
                  <label htmlFor="email" className="contact-form__label">Email Address <em>(optional)</em></label>
                  <input id="email" name="email" type="email" placeholder="name@example.com" value={form.email} onChange={handleChange} aria-invalid={!!errors.email} />
                  {errors.email && <span className="contact-form__error">{errors.email}</span>}
                </div>

                <div className="contact-form__field">
                  <label htmlFor="message" className="contact-form__label">Message <em>(optional)</em></label>
                  <textarea id="message" name="message" rows={4} placeholder="Anything we should know before your visit" value={form.message} onChange={handleChange} />
                </div>
              </fieldset>

              <button type="submit" className="btn btn-primary contact-form__submit">
                {selectedBranch ? `Send Enquiry To ${selectedBranch.name}` : 'Send Enquiry On WhatsApp'}
              </button>

              {submitted && (
                <p className="contact-form__success">
                  Your enquiry is ready in WhatsApp. Please press send there to complete it. The {OFFER.percent}% website offer is noted on your enquiry.
                </p>
              )}
            </form>
          </Reveal>

          <div className="contact-side">
            <Reveal direction="right" className="contact-info-card">
              <span className="contact-card-label">Get In Touch</span>

              <ul className="contact-info-list">
                <li>
                  <strong>Address</strong>
                  <p>Near Hospital Jn. Municipal Stadium Ward, Vellakkinar, Alappuzha, Kerala &ndash; 688001</p>
                </li>
                <li>
                  <strong>Phone</strong>
                  <p>98472 21919</p>
                </li>
                <li>
                  <strong>Email</strong>
                  <p>reachbijupolonia@gmail.com</p>
                </li>
                <li>
                  <strong>Working Hours</strong>
                  <p>{WORKING_HOURS.label}</p>
                </li>
              </ul>
            </Reveal>

            <Reveal direction="right" delay={0.1} className="contact-whatsapp-card">
              <div>
                <span className="contact-whatsapp-card__rule" />
                <h3>Your Style. Our Passion. Let&rsquo;s Connect.</h3>
              </div>
              <p>Quick Booking on WhatsApp</p>
              <div className="contact-whatsapp-card__links">
                {BOOKING_BRANCHES.filter(isWhatsappReady).map((b) => (
                  <a
                    key={b.id}
                    href={`https://wa.me/${b.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-whatsapp-card__link"
                  >
                    <span>
                      <strong>{b.name}</strong>
                      <small>{b.place}</small>
                    </span>
                    <span className="contact-whatsapp-card__go">Chat Now</span>
                  </a>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* MAP */}
      <section className="contact-map">
        <div className="contact-map__card">
          <span className="contact-map__rule" />
          <h3>Find Us Here</h3>
          <p>We are conveniently located in the heart of Alappuzha.</p>
          <a
            href="https://maps.app.goo.gl/6RjtFFGxjoUxqbWs6"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-light contact-map__directions"
          >
            Directions
          </a>
        </div>
        <div className="contact-map__frame" role="img" aria-label="Map showing the Alappuzha, Kerala location">
          <iframe
            title="Kolonia Polonia Hair Studio location map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3935.2000089513995!2d76.33471717450328!3d9.49132598158185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0884f38731b891%3A0x419c7a60321298c9!2sPolonia%20Parlour!5e0!3m2!1sen!2sin!4v1785569025737!5m2!1sen!2sin"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      {/* BRANCHES */}
      <section className="section-sm contact-branches">
        <div className="container">
          <Reveal className="contact-branches__head">
            <span className="eyebrow">Our Branches</span>
            <h2>Visit Us At Any Of Our Locations</h2>
          </Reveal>

          <RevealStagger className="contact-branches__list" staggerDelay={0.1}>
            {BRANCHES.map((branch) => (
              <RevealStaggerItem key={branch.name} className="branch-card">
                <div className="branch-card__img">
                  <img src={branch.image} alt={`${branch.name} salon branch interior`} loading="lazy" />
                  <span className="branch-card__tag">{branch.tag}</span>
                </div>
                <div className="branch-card__body">
                  <h3>{branch.name}</h3>
                  {branch.offer && (
                    <span className="contact-branches__offer">{OFFER.percent}% website offer available</span>
                  )}
                  <p>{branch.address}</p>
                  <p className="contact-branches__phone">
                    <span>Phone</span> {branch.phone}
                  </p>
                </div>
              </RevealStaggerItem>
            ))}
          </RevealStagger>
        </div>
      </section>

      {/* CTA */}
      <section className="contact-cta">
        <div className="container contact-cta__inner">
          <Reveal direction="left" className="contact-cta__text">
            <h3>Ready to Experience the Kolonia Polonia Difference?</h3>
            <p>Book your appointment today and enjoy {OFFER.percent}% off on enquiries made through our website.</p>
          </Reveal>
          <Reveal direction="right">
            <button type="button" className="btn btn-white" onClick={scrollToForm}>
              Book Appointment
            </button>
          </Reveal>
        </div>
      </section>
    </>
  );
}