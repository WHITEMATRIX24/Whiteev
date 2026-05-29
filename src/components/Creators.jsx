import { useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const FONT_IMPORT = `@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');`

const creators = [
  {
    name: 'Arjun Mehta',
    handle: '@arjun.tech',
    bio: 'Tech reviewer & gadget enthusiast. Building the future one video at a time.',
    category: 'Tech',
    posts: 342,
    followers: '85.2K',
    following: 1204,
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=face',
    accent: '#D4A017',
  },
  {
    name: 'Priya Sharma',
    handle: '@priya.styles',
    bio: 'Fashion & lifestyle curator. Sustainable style for the modern Indian woman.',
    category: 'Fashion',
    posts: 518,
    followers: '1.2M',
    following: 892,
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=face',
    accent: '#D4A017',
  },
  {
    name: 'Vikram Patel',
    handle: '@vikfit',
    bio: 'Certified fitness trainer. Transforming lives through discipline and science.',
    category: 'Fitness',
    posts: 267,
    followers: '320K',
    following: 445,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
    accent: '#D4A017',
  },
  {
    name: 'Ananya Reddy',
    handle: '@ananya.cooks',
    bio: 'Home chef & food storyteller. Bringing Indian flavors to the world.',
    category: 'Food',
    posts: 891,
    followers: '650K',
    following: 567,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face',
    accent: '#D4A017',
  },
  {
    name: 'Rohan Kapoor',
    handle: '@rohan.learns',
    bio: 'EdTech creator making complex topics simple. IIT alumnus on a teaching mission.',
    category: 'Education',
    posts: 154,
    followers: '210K',
    following: 312,
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
    accent: '#D4A017',
  },
  {
    name: 'Kavya Nair',
    handle: '@kavya.vibes',
    bio: 'Actor, dancer & entertainer. Spreading joy through art and expression.',
    category: 'Entertainment',
    posts: 723,
    followers: '2.1M',
    following: 678,
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
    accent: '#D4A017',
  },
]

function CreatorCard({ creator, index }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 100, scale: 0.8, rotateY: -20 }}
      whileInView={{ opacity: 1, y: 0, scale: 1, rotateY: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: 0.8,
        delay: index * 0.15,
        ease: [0.22, 1, 0.36, 1],
        opacity: { duration: 0.5, delay: index * 0.15 },
        scale: { duration: 0.7, delay: index * 0.15 },
        rotateY: { duration: 0.9, delay: index * 0.15 }
      }}
      style={{ perspective: 1200 }}
    >
      <motion.div
        className="group cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{ scale: 1.02, y: -8 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Glowing backdrop */}
        <motion.div
          className="absolute -inset-2 rounded-2xl opacity-0 blur-xl"
          style={{ background: `radial-gradient(circle, ${creator.accent}40 0%, transparent 70%)` }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        />

        {/* Main card */}
        <div
          className="relative overflow-hidden rounded-xl bg-white"
          style={{
            boxShadow: isHovered
              ? `0 25px 50px -12px ${creator.accent}25, 0 0 0 1px ${creator.accent}20`
              : '0 4px 24px -4px rgba(0,0,0,0.08), 0 0 0 1px rgba(0,0,0,0.04)'
          }}
        >
          {/* Image section with overlay */}
          <div className="relative h-[220px] overflow-hidden">
            <motion.img
              src={creator.image}
              alt={creator.name}
              className="w-full h-full object-cover"
              animate={{ scale: isHovered ? 1.1 : 1 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            />

            {/* Gradient overlay */}
            <div
              className="absolute inset-0"
              style={{
                background: `linear-gradient(180deg,
                  transparent 0%,
                  transparent 40%,
                  rgba(255,255,255,0.5) 70%,
                  rgba(255,255,255,1) 100%
                )`
              }}
            />

            {/* Category pill - floating */}
            <motion.div
              className="absolute top-3 left-3 px-3 py-1.5 rounded-full backdrop-blur-md"
              style={{
                background: `${creator.accent}15`,
                border: `1px solid ${creator.accent}30`,
              }}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.08 + 0.3 }}
            >
              <span
                className="text-[10px] font-bold tracking-wide uppercase"
                style={{ color: creator.accent, fontFamily: "'Inter', sans-serif" }}
              >
                {creator.category}
              </span>
            </motion.div>

            {/* Stats floating on image */}
            <motion.div
              className="absolute bottom-0 left-0 right-0 px-4 pb-3"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 + 0.2 }}
            >
              <div className="flex justify-between items-end">
                {[
                  { value: creator.posts, label: 'Posts' },
                  { value: creator.followers, label: 'Followers' },
                  { value: creator.following, label: 'Following' },
                ].map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    className="text-center"
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.span
                      className="block text-base font-black text-[#0a0a0a]"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                      animate={{ scale: isHovered ? 1.05 : 1 }}
                      transition={{ delay: i * 0.03 }}
                    >
                      {stat.value}
                    </motion.span>
                    <span
                      className="text-[9px] tracking-[0.1em] uppercase text-[#888]"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {stat.label}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Content section */}
          <div className="relative px-4 py-4 bg-white">
            {/* Decorative line */}
            <motion.div
              className="absolute top-0 left-4 right-4 h-[1px]"
              style={{ background: `linear-gradient(90deg, transparent, ${creator.accent}30, transparent)` }}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: isHovered ? 1 : 0.3 }}
              transition={{ duration: 0.5 }}
            />

            {/* Name and handle */}
            <div className="mb-2">
              <motion.h3
                className="text-base font-bold text-[#0a0a0a] mb-0.5 truncate"
                style={{ fontFamily: "'Inter', sans-serif" }}
                animate={{ color: isHovered ? creator.accent : '#0a0a0a' }}
                transition={{ duration: 0.3 }}
              >
                {creator.name}
              </motion.h3>
              <p
                className="text-xs text-[#888] truncate"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {creator.handle}
              </p>
            </div>

            {/* Bio */}
            <p
              className="text-xs text-[#666] leading-relaxed line-clamp-2"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {creator.bio}
            </p>
          </div>

          {/* Animated border on hover */}
          <motion.div
            className="absolute inset-0 rounded-xl pointer-events-none"
            style={{ border: `2px solid ${creator.accent}` }}
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function Creators() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start end', 'end start'] })
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '15%'])

  return (
    <>
      <style>{FONT_IMPORT}</style>

      <section
        ref={containerRef}
        className="relative py-20 md:py-28 overflow-hidden"
        style={{ background: 'linear-gradient(180deg, #fefefe 0%, #f8f6f3 50%, #fefefe 100%)' }}
      >
        {/* Background decorations */}
        <motion.div className="absolute inset-0 pointer-events-none" style={{ y: bgY }}>
          <motion.div
            className="absolute -top-20 -right-20 w-[400px] h-[400px] rounded-full"
            style={{ background: 'radial-gradient(circle, rgba(212,160,23,0.06) 0%, transparent 60%)' }}
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 15, repeat: Infinity }}
          />
          <motion.div
            className="absolute -bottom-20 -left-20 w-[300px] h-[300px] rounded-full"
            style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.04) 0%, transparent 60%)' }}
          />
        </motion.div>

        {/* Accent lines */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4A017]/25 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4A017]/25 to-transparent" />

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10">
          {/* Section Header */}
          <motion.div
            className="text-center mb-12 md:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center justify-center gap-3 mb-5">
              <div className="w-8 h-[1px] bg-[#D4A017]" />
              <span
                className="text-[10px] tracking-[0.3em] uppercase text-[#D4A017] font-semibold"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Research Participants
              </span>
              <div className="w-8 h-[1px] bg-[#D4A017]" />
            </div>

            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0a0a0a] tracking-tight mb-3"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Our Creators
            </h2>

            <p
              className="text-base text-[#666] max-w-lg mx-auto"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Meet the voices shaping digital culture across India.
            </p>
          </motion.div>

          {/* Creators Grid - 6 in a row */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {creators.map((creator, index) => (
              <CreatorCard key={creator.handle} creator={creator} index={index} />
            ))}
          </div>

        </div>
      </section>
    </>
  )
}
