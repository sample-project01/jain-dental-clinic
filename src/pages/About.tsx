import { motion } from "framer-motion";
const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" as const },
};

const fadeInLeft = {
  initial: { opacity: 0, x: -30 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: "easeOut" as const },
};

const fadeInRight = {
  initial: { opacity: 0, x: 30 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: "easeOut" as const, delay: 0.15 },
};

const values = [
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
      </svg>
    ),
    title: "Compassion",
    desc: "We treat every patient with genuine care, empathy, and the respect they deserve.",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
      </svg>
    ),
    title: "Excellence",
    desc: "We maintain the highest standards in medical practice, technology, and patient outcomes.",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
      </svg>
    ),
    title: "Teamwork",
    desc: "Our multidisciplinary team collaborates to deliver comprehensive and holistic care.",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
      </svg>
    ),
    title: "Innovation",
    desc: "We embrace cutting-edge technology and modern treatment methodologies for better results.",
  },
];

const doctors = [
  {
    name: "Dr. Sandeep Jain",
    image:"/images/main-2.jpg",
    role: "Dentist",
    qualification: "BDS(Dentist)",
    experience: "13+ years",
    speciality: "Dentist",
  },
  {
    name: "Dr. Shankar Sharma",
    // image:"/images/main-2.jpg",
    role: "Senior Orthopedic Surgeon",
    qualification: "MBBS, MS (Orthopedics), Fellowship",
    experience: "15+ years",
    speciality: "Orthopedics & Sports Medicine",
  },
  {
    name: "Dr. Priya Sharma",
    // image:"/images/main-2.jpg",
    role: "Dermatology Specialist",
    qualification: "MBBS, MD (Dermatology)",
    experience: "12+ years",
    speciality: "Dermatology & Cosmetology",
  },
];

export default function About() {
  return (
    <div className="overflow-hidden">
      {/* Page Header */}
      <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 py-20">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -right-40 -top-40 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-32 -left-32 h-64 w-64 rounded-full bg-accent-400/20 blur-3xl" />
          <div className="absolute inset-0 opacity-[0.04]" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: '36px 36px',
          }} />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <motion.div {...fadeIn}>
            <p className="mb-3 text-sm font-semibold tracking-wider text-primary-200 uppercase">Who We Are</p>
            <h1 className="mb-4 text-4xl font-bold text-white sm:text-5xl">
              About MedCare Clinic
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-primary-100">
              A trusted name in healthcare, committed to delivering
              compassionate and comprehensive medical services since 2005.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section - Two Column */}
      <section className="bg-white py-20">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-14 px-4 sm:px-6 lg:flex-row lg:px-8">
          {/* Left - Text */}
          <motion.div className="flex-1" {...fadeInLeft}>
            <p className="mb-2 text-sm font-semibold tracking-wider text-primary-600 uppercase">Our Story</p>
            <h2 className="mb-6 text-3xl font-bold text-slate-900 sm:text-4xl">
              Building a Healthier Community Since 2005
            </h2>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                MedCare Clinic was founded by Dr. Sarah Mitchell with a simple yet powerful
                vision — to provide accessible, high-quality healthcare that puts patients
                first. What began as a small practice has grown into a comprehensive
                multi-speciality clinic serving thousands of families.
              </p>
              <p>
                Over the past 18 years, we have expanded our team, upgraded our facilities,
                and embraced the latest medical technologies — all while maintaining the
                personalized, caring approach that has been our hallmark since day one.
              </p>
              <p>
                Today, MedCare is home to 15+ specialist doctors across 20+ medical
                disciplines, united by a shared commitment to clinical excellence and
                patient well-being.
              </p>
            </div>

            {/* Mission & Vision cards */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-primary-100 bg-primary-50/50 p-6">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-primary-100 text-primary-600">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                  </svg>
                </div>
                <h3 className="mb-2 text-lg font-bold text-slate-800">Our Mission</h3>
                <p className="text-sm text-slate-600">
                  To deliver compassionate, evidence-based healthcare that improves lives
                  and strengthens our community.
                </p>
              </div>
              <div className="rounded-2xl border border-accent-100 bg-accent-50/50 p-6">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-accent-100 text-accent-600">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  </svg>
                </div>
                <h3 className="mb-2 text-lg font-bold text-slate-800">Our Vision</h3>
                <p className="text-sm text-slate-600">
                  To be the most trusted healthcare provider, known for clinical innovation
                  and exceptional patient experiences.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right - Image */}
          <motion.div className="flex-1" {...fadeInRight}>
            <div className="relative">
              <div className="absolute -bottom-4 -right-4 h-full w-full rounded-3xl bg-gradient-to-br from-primary-100 to-accent-100" />
              <div className="relative overflow-hidden rounded-3xl shadow-xl">
                <img
                  src="/images/clinic-interior.jpg"
                  alt="MedCare Clinic Interior"
                  className="h-full w-full object-cover lg:h-[560px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="rounded-2xl bg-white/90 p-5 backdrop-blur-sm">
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-100">
                        <svg className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-bold text-slate-800">State-of-the-Art Facility</p>
                        <p className="text-sm text-slate-500">1,000 sq.ft. of modern clinical space</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-gradient-to-b from-slate-50 to-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div className="mb-14 text-center" {...fadeIn}>
            <p className="mb-2 text-sm font-semibold tracking-wider text-primary-600 uppercase">Our Values</p>
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              What <span className="text-primary-600">Drives</span> Us
            </h2>
          </motion.div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                className="rounded-2xl border border-slate-100 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-50 text-primary-600">
                  {v.icon}
                </div>
                <h3 className="mb-2 text-lg font-bold text-slate-800">{v.title}</h3>
                <p className="text-sm leading-relaxed text-slate-500">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Doctor Profiles */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div className="mb-14 text-center" {...fadeIn}>
            <p className="mb-2 text-sm font-semibold tracking-wider text-primary-600 uppercase">Our Team</p>
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              Meet Our <span className="text-primary-600">Doctor</span>
            </h2>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3  ">
            {doctors.map((doc, i) => (
              <motion.div
                key={doc.name}
                className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                {/* Doctor image area */}
                <div className="relative h-56 bg-gradient-to-br from-primary-100 to-primary-200">
                  <img
                    src={doc.image}
                    alt={doc.name}
                    className="h-full w-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
                </div>
                {/* Info */}
                <div className="relative px-6 pb-6 -mt-4">
                  <div className="mb-4 rounded-xl bg-white p-4 shadow-md">
                    <h3 className="text-lg font-bold text-slate-800">{doc.name}</h3>
                    <p className="text-sm font-medium text-primary-600">{doc.role}</p>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 rounded-xl bg-slate-50 p-3">
                      <svg className="h-5 w-5 shrink-0 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342" />
                      </svg>
                      <div>
                        <p className="text-xs text-slate-500">Qualification</p>
                        <p className="text-sm font-medium text-slate-700">{doc.qualification}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 rounded-xl bg-slate-50 p-3">
                      <svg className="h-5 w-5 shrink-0 text-accent-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                      </svg>
                      <div>
                        <p className="text-xs text-slate-500">Experience</p>
                        <p className="text-sm font-medium text-slate-700">{doc.experience}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 rounded-xl bg-slate-50 p-3">
                      <svg className="h-5 w-5 shrink-0 text-rose-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                      </svg>
                      <div>
                        <p className="text-xs text-slate-500">Speciality</p>
                        <p className="text-sm font-medium text-slate-700">{doc.speciality}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
