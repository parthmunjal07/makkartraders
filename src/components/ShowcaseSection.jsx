import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import One from '../assets/1.webp'
import Two from '../assets/2.jpg'
import Three from '../assets/3.jpg'
import Four from '../assets/4.jpg'
import Five from '../assets/5.png'
import Six from '../assets/6.webp'

export default function ShowcaseSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const leftY = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const rightY = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

  const images = {
    left: [
      One,
      Two,
      Three
    ],
    right: [
      Four,
      Five,
      Six
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-orange-100 py-20">
      <div ref={containerRef} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Desktop Layout */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-8 items-center">
          
          {/* Left Column - 3 Images */}
          <motion.div style={{ y: leftY }} className="space-y-8">
            {images.left.map((src, index) => (
              <motion.div
                key={`left-${index}`}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: false, amount: 0.3 }}
                className="relative overflow-hidden rounded-2xl shadow-2xl group"
              >
                <img
                  src={src}
                  alt={`Orange ${index + 1}`}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-orange-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </motion.div>

          {/* Center Column - Text */}
          <motion.div
            style={{ opacity, scale }}
            className="text-center space-y-6 px-4"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false, amount: 0.5 }}
            >
              <h2 className="text-6xl font-instrument text-orange-900 mb-4">
                Our Major Offerings
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-amber-500 mx-auto mb-6" />
              <p className="text-2xl text-orange-800 leading-relaxed">
                MS pipe and fittings
                <br />
                PVC pipe and fittings
                <br />
                Sanitary Goods
                <br />
                And much more!!
              </p>
              <div className="mt-8">
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - 3 Images */}
          <motion.div style={{ y: rightY }} className="space-y-8">
            {images.right.map((src, index) => (
              <motion.div
                key={`right-${index}`}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: false, amount: 0.3 }}
                className="relative overflow-hidden rounded-2xl shadow-2xl group"
              >
                <img
                  src={src}
                  alt={`Orange ${index + 4}`}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-orange-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden space-y-12">
          
          {/* Center Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
            className="text-center space-y-6 px-4"
          >
            <h2 className="text-4xl sm:text-5xl font-instrument font-bold text-orange-900 mb-4">
              Our Major Offerings
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-amber-500 mx-auto mb-6" />
            <p className="text-xl sm:text-2xl text-orange-800 leading-relaxed">
              MS pipe and fittings
                <br />
                PVC pipe and fittings
                <br />
                Sanitary Goods
                <br />
                And much more!!
            </p>
            
          </motion.div>

          {/* All Images Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[...images.left, ...images.right].map((src, index) => (
              <motion.div
                key={`mobile-${index}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: false, amount: 0.2 }}
                className="relative overflow-hidden rounded-2xl shadow-xl"
              >
                <img
                  src={src}
                  alt={`Orange ${index + 1}`}
                  className="w-full h-56 sm:h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-orange-900/30 to-transparent" />
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}