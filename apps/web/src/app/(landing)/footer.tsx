'use client'

import { Github, Linkedin, Mail, Twitter } from 'lucide-react'
import { motion } from 'motion/react'
import Image from 'next/image'
import Link from 'next/link'

const navLinks = [
  { label: 'Features', href: '#' },
  { label: 'Pricing', href: '#' },
  { label: 'Docs', href: '#' },
  { label: 'About', href: '#' },
]

const socialLinks = [
  { icon: Github, href: '#', label: 'GitHub' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Mail, href: '#', label: 'Email' },
]

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'circOut' }}
      viewport={{ once: true, margin: '-100px' }}
      className="border-t border-muted/30 bg-gradient-to-b from-transparent via-white/5 to-white/10 backdrop-blur-lg mt-24"
    >
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Branding */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1, duration: 0.5, ease: 'easeOut' }}
            viewport={{ once: true, margin: '-100px' }}
            className="md:col-span-1"
          >
            <Image
              src="/logo-dark.svg"
              alt="Orbits"
              width={40}
              height={40}
              className="w-auto"
            />
            <p className="text-sm text-muted-foreground">
              The all-in-one platform for creating and managing projects.
            </p>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.5, ease: 'easeOut' }}
            viewport={{ once: true, margin: '-100px' }}
            className="md:col-span-1"
          >
            <h4 className="text-sm font-semibold text-foreground mb-4">
              Product
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5, ease: 'easeOut' }}
            viewport={{ once: true, margin: '-100px' }}
            className="md:col-span-1"
          >
            <h4 className="text-sm font-semibold text-foreground mb-4">
              Resources
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#"
                  className="text-sm text-muted-foreground hover:text-foreground transition duration-200"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-muted-foreground hover:text-foreground transition duration-200"
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-muted-foreground hover:text-foreground transition duration-200"
                >
                  Community
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-muted-foreground hover:text-foreground transition duration-200"
                >
                  Status
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.25, duration: 0.5, ease: 'easeOut' }}
            viewport={{ once: true, margin: '-100px' }}
            className="md:col-span-1"
          >
            <h4 className="text-sm font-semibold text-foreground mb-4">
              Follow us
            </h4>
            <div className="flex gap-4">
              {socialLinks.map((link) => {
                const Icon = link.icon
                return (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    aria-label={link.label}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 rounded-lg bg-white/5 border border-muted/30 text-muted-foreground hover:text-foreground hover:border-muted/60 transition duration-200"
                  >
                    <Icon size={18} />
                  </motion.a>
                )
              })}
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          viewport={{ once: true, margin: '-100px' }}
          className="border-t border-muted/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-xs text-muted-foreground">
            © 2026 Orbits. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs">
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground transition duration-200"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground transition duration-200"
            >
              Terms of Service
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground transition duration-200"
            >
              Cookie Policy
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  )
}
