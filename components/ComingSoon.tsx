
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Camera,
  Sparkles,
} from "lucide-react";

const photos = {
  hero: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=1800&q=85",
  necklace: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1200&q=85",
  model: "https://images.unsplash.com/photo-1633934542430-0905ccb5f050?q=80&w=2225&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
  ring: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1200&q=85",
};

const reveal = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: "easeOut" as const },
  },
};

export default function ComingSoon() {
  return (
    <main className="overflow-hidden bg-[#031C16] text-[#F5F0E6]">

      {/* Navigation */}
      <nav className="relative z-30 flex items-center justify-between border-b border-white/10 px-3 py-5 md:px-14 lg:px-20">
       <div className="px-3 py-1">
  <Image
    src="/img/_my touch hd .png"
    alt="My Touch Gold"
    width={600}
    height={350}
    quality={100}
    unoptimized
    className="h-24 w-auto object-contain"
    priority
  />
</div>
{/* 
        <a
          href="https://www.instagram.com/mytouchgold/"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 text-[10px] tracking-[0.25em] text-[#D8BD82] transition hover:text-white"
        >
          FOLLOW US <ArrowUpRight size={14} />
        </a> */}
      </nav>

      {/* Hero */}
      <section className="relative grid min-h-195 items-center lg:min-h-212.5 lg:grid-cols-[0.95fr_1.05fr]">

        {/* Background glow */}
        <div className="pointer-events-none absolute -left-40 top-20 h-125 w-125 rounded-full bg-emerald-500/10 blur-[130px]" />

        {/* Hero text */}
        <div className="relative z-10 flex flex-col justify-center px-7 py-20 md:px-16 lg:px-20 lg:py-28">

          <motion.div
            initial="hidden"
            animate="visible"
            variants={reveal}
            className="mb-8 flex items-center gap-3 text-[10px] tracking-[0.4em] text-[#D8BD82]"
          >
            <span className="h-px w-10 bg-[#D8BD82]" />
            MY TOUCH GOLD & DIAMONDS
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 45 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-serif text-[76px] leading-[0.9] tracking-[-0.055em] sm:text-8xl xl:text-[118px]"
          >
            COMING
            <br />
            <span className="italic text-[#D8BD82]">
              SOON.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 1 }}
            className="mt-9 max-w-md text-sm leading-8 text-white/60 md:text-base"
          >
            A world of timeless elegance is taking shape.
            Discover exquisite gold, beautiful diamonds
            and jewellery designed to become part of
            your most treasured moments.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="mt-10 flex flex-wrap items-center gap-5"
          >
            <a
              href="https://www.instagram.com/mytouchgold/"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-3 bg-[#D8BD82] px-7 py-4 text-[10px] font-semibold tracking-[0.2em] text-[#071C15] transition hover:bg-white"
            >
              <Camera size={16} />
              FOLLOW OUR JOURNEY
              <ArrowUpRight
                size={15}
                className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
            className="mt-20 flex items-center gap-4 text-[9px] tracking-[0.3em] text-white/40"
          >
            <span className="h-px w-12 bg-[#D8BD82]/50" />
            KODUVALLY · KERALA
          </motion.div>
        </div>

        {/* Hero image */}
        <div className="relative min-h-135 overflow-hidden lg:h-full lg:min-h-212.5">
          <motion.div
            initial={{ scale: 1.15, opacity: 0.5 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.8, ease: "easeOut" }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${photos.hero})` }}
          />

          <div className="absolute inset-0 bg-linear-to-t from-[#031C16] via-transparent to-[#031C16]/20 lg:bg-linear-to-r lg:from-[#031C16]/20 lg:via-transparent lg:to-transparent" />

          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-12 left-8 border border-[#D8BD82]/40 bg-[#031C16]/70 px-5 py-4 backdrop-blur-md md:bottom-16 md:left-12"
          >
            <p className="font-serif text-2xl italic text-[#D8BD82]">
              A touch of brilliance.
            </p>
            <p className="mt-2 text-[9px] tracking-[0.25em] text-white/60">
              SOMETHING SPECIAL IS COMING
            </p>
          </motion.div>

          <div className="absolute right-8 top-10 text-[#D8BD82]/70">
            <Sparkles size={30} strokeWidth={0.8} />
          </div>
        </div>
      </section>

      {/* Craftsmanship section */}
      <section className="relative grid items-center gap-0 border-t border-white/10 md:grid-cols-2">

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={reveal}
          className="relative order-2 min-h-120 overflow-hidden md:order-1 md:min-h-162.5"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${photos.necklace})` }}
          />
          <div className="absolute inset-0 bg-linear-to-t from-[#031C16]/60 to-transparent" />

          <span className="absolute bottom-8 left-8 text-[10px] tracking-[0.35em] text-white/80">
            THE BEAUTY IS IN THE DETAILS
          </span>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={reveal}
          className="order-1 px-8 py-24 md:order-2 md:px-16 lg:px-24"
        >
          <span className="text-[10px] tracking-[0.4em] text-[#D8BD82]">
            01 — CRAFTED WITH CARE
          </span>

          <h2 className="mt-8 font-serif text-5xl leading-[1.05] sm:text-6xl">
            Crafted to last.
            <br />
            <span className="italic text-[#D8BD82]">
              Made to treasure.
            </span>
          </h2>

          <p className="mt-7 max-w-sm text-sm leading-8 text-white/55">
            Every detail tells a story. Every creation
            reflects beauty, craftsmanship and the
            moments that matter most.
          </p>

          <div className="mt-10 h-px w-20 bg-[#D8BD82]" />
        </motion.div>
      </section>

      {/* Lifestyle campaign */}
      <section className="relative grid min-h-162.5 overflow-hidden lg:grid-cols-2">

        <div className="relative min-h-137.5 overflow-hidden">
          <motion.div
            initial={{ scale: 1.1 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${photos.model})` }}
          />
          <div className="absolute inset-0 bg-linear-to-t from-[#031C16]/60 via-transparent to-transparent" />

          <div className="absolute bottom-10 left-8 md:left-12">
            <p className="font-serif text-4xl italic text-white">
              Wear your story.
            </p>
          </div>
        </div>

        <div className="relative flex flex-col justify-center overflow-hidden bg-[#06271D] px-8 py-24 md:px-16 lg:px-20">
          <div className="pointer-events-none absolute -right-20 top-0 h-80 w-80 rounded-full bg-emerald-400/10 blur-[100px]" />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={reveal}
            className="relative z-10"
          >
            <span className="text-[10px] tracking-[0.4em] text-[#D8BD82]">
              02 — MORE THAN JEWELLERY
            </span>

            <h2 className="mt-8 font-serif text-6xl leading-[1.05] sm:text-7xl">
              More than
              <br />
              <span className="italic text-[#D8BD82]">
                jewellery.
              </span>
            </h2>

            <p className="mt-8 max-w-sm text-sm leading-8 text-white/55">
              For the celebrations, the milestones and
              the memories you will carry forever.
              Discover a new way to experience jewellery.
            </p>

            <div className="mt-12 flex items-center gap-3 text-[10px] tracking-[0.3em] text-[#D8BD82]">
              <Sparkles size={16} />
              SOMETHING TIMELESS IS COMING
            </div>
          </motion.div>
        </div>
      </section>

      {/* Product feature */}
      <section className="relative grid items-center gap-0 border-t border-white/10 md:grid-cols-2">

        <div className="relative order-2 min-h-120 overflow-hidden md:order-2 md:min-h-162.5">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${photos.ring})` }}
          />
          <div className="absolute inset-0 bg-linear-to-t from-[#031C16]/40 to-transparent" />
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={reveal}
          className="order-1 px-8 py-24 md:order-1 md:px-16 lg:px-24"
        >
          <span className="text-[10px] tracking-[0.4em] text-[#D8BD82]">
            03 — A NEW EXPERIENCE
          </span>

          <h2 className="mt-8 font-serif text-5xl leading-[1.1] sm:text-6xl">
            Your next
            <br />
            <span className="italic text-[#D8BD82]">
              favourite piece.
            </span>
          </h2>

          <p className="mt-7 max-w-sm text-sm leading-8 text-white/55">
            A carefully curated world of gold and
            diamonds is on its way. Get ready to find
            something that feels uniquely yours.
          </p>

          <a
            href="https://www.instagram.com/mytouchgold/"
            target="_blank"
            rel="noreferrer"
            className="mt-10 inline-flex items-center gap-3 border-b border-[#D8BD82] pb-3 text-[10px] tracking-[0.25em] text-[#D8BD82] transition hover:text-white"
          >
            DISCOVER US ON INSTAGRAM
            <ArrowUpRight size={15} />
          </a>
        </motion.div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden border-t border-white/10 px-6 py-32 text-center md:py-40">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-125 w-125 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-400/10 blur-[120px]" />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={reveal}
          className="relative z-10"
        >
          <Sparkles
            size={27}
            strokeWidth={0.8}
            className="mx-auto text-[#D8BD82]"
          />

          <p className="mt-7 text-[10px] tracking-[0.5em] text-[#D8BD82]">
            THE WAIT WILL BE WORTH IT
          </p>

          <h2 className="mt-8 font-serif text-6xl tracking-tight sm:text-8xl md:text-9xl">
            COMING <span className="italic text-[#D8BD82]">SOON.</span>
          </h2>

          <p className="mx-auto mt-7 max-w-md text-sm leading-7 text-white/50">
            A new destination for gold and diamonds.
            Coming soon to Koduvally.
          </p>

          <a
            href="https://www.instagram.com/mytouchgold/"
            target="_blank"
            rel="noreferrer"
            className="mt-10 inline-flex items-center gap-3 bg-[#D8BD82] px-8 py-4 text-[10px] font-semibold tracking-[0.2em] text-[#071C15] transition hover:bg-white"
          >
            FOLLOW FOR UPDATES
            <ArrowUpRight size={15} />
          </a>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 px-6 py-10 md:px-14 lg:px-20">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">

          <div className="flex items-center gap-3">
             <Image
    src="/img/_my touch hd .png"
    alt="My Touch Gold"
    width={600}
    height={350}
    quality={100}
    unoptimized
    className="h-24 w-auto object-contain"
    priority
  />
            {/* <span className="h-5 w-px bg-[#D8BD82]/50" />
            <span className="text-[10px] tracking-[0.2em] text-[#D8BD82]">
              GOLD & DIAMONDS
            </span> */}
          </div>

          <a
            href="mailto:mytouchgold@gmail.com"
            className="text-xs text-white/50 transition hover:text-[#D8BD82]"
          >
            mytouchgold@gmail.com
          </a>

          <a
            href="https://www.instagram.com/mytouchgold/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-xs text-white/50 transition hover:text-[#D8BD82]"
          >
            <Camera size={15} />
            @mytouchgold
          </a>
        </div>

        <p className="mt-9 text-center text-[9px] tracking-[0.2em] text-white/25">
          © 2026 MY TOUCH GOLD & DIAMONDS. ALL RIGHTS RESERVED.
        </p>
      </footer>
    </main>
  );
}
