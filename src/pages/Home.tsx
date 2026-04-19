import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" as const },
};

const serviceHighlights = [
  {
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
      </svg>
    ),
    title: "Trusted Care",
    desc: "Over 18 years of excellence in patient care with internationally trained medical professionals.",
  },
  {
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
      </svg>
    ),
    title: "Modern Facilities",
    desc: "State-of-the-art diagnostic equipment and comfortable treatment rooms for the best experience.",
  },
  {
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
      </svg>
    ),
    title: "Expert Doctors",
    desc: "A team of 15+ specialized doctors dedicated to personalized treatment plans for every patient.",
  },
];

const stats = [
  { value: "18+", label: "Years Experience" },
  { value: "50K+", label: "Patients Served" },
  { value: "15+", label: "Expert Doctors" },
  { value: "20+", label: "Specialities" },
];

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* ===== HERO SECTION ===== */}
      <section className="relative min-h-[600px] bg-gradient-to-br from-primary-400 via-white to-accent-50">
        {/* Background decorative elements */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-primary-200/30 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-accent-200/30 blur-3xl" />
          <div className="absolute left-1/2 top-1/3 h-64 w-64 -translate-x-1/2 rounded-full bg-primary-100/40 blur-3xl" />
          {/* Subtle pattern overlay */}
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #0ea5e9 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }} />
        </div>

        <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-12 px-4 py-20 sm:px-6 md:flex-row md:py-28 lg:px-8 lg:py-32">
          {/* Left Content */}
          <motion.div className="flex-1 text-center md:text-left" {...fadeIn}>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary-100/80 px-4 py-1.5 text-sm font-medium text-primary-700 backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-accent-500" />
              Accepting New Patients
            </div>
            <h1 className="mb-6 text-4xl leading-tight font-bold text-slate-900 sm:text-5xl lg:text-6xl">
              Your Health,{" "}
              <span className="bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent">
                Our Priority
              </span>
            </h1>
            <p className="mb-8 max-w-xl text-lg leading-relaxed text-slate-600 md:text-xl">
              Experience compassionate healthcare backed by modern technology and
              a team of dedicated specialists. Your journey to wellness starts here.
            </p>
            <div className="flex flex-col items-center gap-4 sm:flex-row md:justify-start">
              <Link
                to="/book-appointment"
                className="group inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-primary-500 to-primary-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-primary-200 transition-all duration-300 hover:shadow-xl hover:shadow-primary-300 hover:brightness-105"
              >
                Book Appointment
                <svg className="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-2xl border-2 border-slate-200 bg-white/60 px-8 py-4 text-base font-semibold text-slate-700 backdrop-blur-sm transition-all hover:border-primary-200 hover:bg-white"
              >
                Our Services
              </Link>
            </div>
          </motion.div>

          {/* Right Image Card */}
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          >
            <div className="relative">
              {/* Decorative card behind */}
              <div className="absolute -bottom-4 -right-4 h-full w-full rounded-3xl bg-gradient-to-br from-primary-200 to-accent-200" />
              <div className="relative overflow-hidden rounded-3xl border-4 border-white shadow-2xl">
                <img
                  src="/images/main.jpg"
                  alt="Modern clinic interior"
                  className="h-80 w-full object-cover sm:h-96 lg:h-[440px]"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/20 to-transparent" />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-3 -left-3 rounded-2xl bg-white px-5 py-3 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-100">
                    <svg className="h-6 w-6 text-accent-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-lg font-bold text-slate-800">4.9/5</p>
                    <p className="text-xs text-slate-500">Patient Rating</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== SERVICE HIGHLIGHTS ===== */}
      <section className="relative bg-blue-100 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div className="mb-14 text-center" {...fadeIn}>
            <p className="mb-2 text-sm font-semibold tracking-wider text-primary-600 uppercase">Why Choose Us</p>
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              Healthcare You Can <span className="text-primary-600">Rely On</span>
            </h2>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">
            {serviceHighlights.map((item, i) => (
              <motion.div
                key={item.title}
                className="group rounded-2xl border border-slate-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary-100 hover:shadow-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * i }}
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-50 to-primary-100 text-primary-600 transition-colors group-hover:from-primary-500 group-hover:to-primary-600 group-hover:text-white">
                  {item.icon}
                </div>
                <h3 className="mb-3 text-xl font-bold text-slate-800">{item.title}</h3>
                <p className="leading-relaxed text-slate-500">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== DOCTOR / CLINIC SECTION ===== */}
      <section className="relative bg-gradient-to-b from-slate-50 to-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-12 lg:flex-row">
            {/* Image Card */}
            <motion.div
              className="flex-1"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative">
                <div className="absolute -left-4 -top-4 h-full w-full rounded-3xl bg-primary-500/60" />
                <div className="relative overflow-hidden rounded-3xl shadow-xl">
                  <img
                    src="/images/main-2.jpg"
                    alt="Dr. Sarah Mitchell"
                    className="h-full w-full object-cover lg:h-[480px]"
                  />
                </div>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div className="flex-1" {...fadeIn}>
              <p className="mb-2 text-sm font-semibold tracking-wider text-accent-600 uppercase">Meet Our Lead</p>
              <h2 className="mb-6 text-3xl font-bold text-slate-900 sm:text-4xl">
                Led by Excellence in Medical Care
              </h2>
              <p className="mb-8 text-lg leading-relaxed text-slate-600">
                Our clinic is led by Dr. Sarah Mitchell, a board-certified physician
                with over 18 years of experience. She brings a compassionate approach
                combined with the latest medical advancements to ensure every patient
                receives world-class care.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-xl border border-slate-100 bg-white p-5 shadow-sm">
                  <p className="text-2xl font-bold text-primary-600">MBBS, MD</p>
                  <p className="text-sm text-slate-500">Qualification</p>
                </div>
                <div className="rounded-xl border border-slate-100 bg-white p-5 shadow-sm">
                  <p className="text-2xl font-bold text-primary-600">18+ yrs</p>
                  <p className="text-sm text-slate-500">Experience</p>
                </div>
                <div className="rounded-xl border border-slate-100 bg-white p-5 shadow-sm">
                  <p className="text-2xl font-bold text-primary-600">15+</p>
                  <p className="text-sm text-slate-500">Specialists</p>
                </div>
                <div className="rounded-xl border border-slate-100 bg-white p-5 shadow-sm">
                  <p className="text-2xl font-bold text-primary-600">24/7</p>
                  <p className="text-sm text-slate-500">Emergency Support</p>
                </div>
              </div>
              <Link
                to="/about"
                className="mt-8 inline-flex items-center gap-2 font-semibold text-primary-600 transition-colors hover:text-primary-700"
              >
                Learn More About Us
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== TRUST INDICATORS / STATS ===== */}
      <section className="relative overflow-hidden bg-gradient-to-r from-primary-600 via-primary-700 to-primary-800 py-20">
        {/* Background pattern */}
        <div className="pointer-events-none absolute inset-0 opacity-10" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '32px 32px',
        }} />
        <div className="pointer-events-none absolute -right-48 -top-48 h-96 w-96 rounded-full bg-accent-400/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div className="mb-14 text-center" {...fadeIn}>
            <p className="mb-2 text-sm font-semibold tracking-wider text-primary-200 uppercase">Our Impact</p>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Numbers That Speak for Themselves
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="rounded-2xl bg-white/10 p-8 text-center backdrop-blur-sm transition-all hover:bg-white/15"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * i }}
              >
                <p className="mb-2 text-4xl font-extrabold text-white lg:text-5xl">{stat.value}</p>
                <p className="text-sm font-medium text-primary-200">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="bg-gradient-to-b from-white to-primary-50/40 py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <motion.div {...fadeIn}>
            <h2 className="mb-4 text-3xl font-bold text-slate-900 sm:text-4xl">
              Ready to Take the Next Step?
            </h2>
            <p className="mb-8 text-lg text-slate-600">
              Schedule your appointment today and experience the MedCare difference.
              We're here to help you live healthier.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                to="/book-appointment"
                className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-primary-500 to-primary-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-primary-200 transition-all hover:shadow-xl hover:brightness-105"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                </svg>
                Book Appointment
              </Link>
              <a
                href="https://wa.me/919876543210?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl border-2 border-emerald-200 bg-emerald-50 px-8 py-4 text-base font-semibold text-emerald-700 transition-all hover:border-emerald-300 hover:bg-emerald-100"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
