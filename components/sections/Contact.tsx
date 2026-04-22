"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MapPin, Phone, Github, Linkedin, Twitter, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "nithish952001@gmail.com",
    href: "mailto:nithish952001@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (206) 226-8935",
    href: "tel:+12062268935",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Seattle, WA",
    href: null,
  },
];

const socialLinks = [
  { icon: Github, label: "GitHub", href: "https://github.com/nithish-95" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/nithish-suresh-babu/" },
  { icon: Twitter, label: "Twitter", href: "https://x.com/nithish_95" },
];

export function Contact() {
  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider mb-2 block">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Let&apos;s Work Together
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Open to full-time roles, contract work, and collaborative projects.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
              >
                <Card className="border-border hover:border-primary/30 transition-colors duration-300">
                  <CardContent className="p-5">
                    <div className="flex items-center gap-4">
                      <div className="p-2.5 bg-primary/10 rounded-xl shrink-0">
                        <info.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground uppercase tracking-wider mb-0.5">
                          {info.label}
                        </p>
                        {info.href ? (
                          <Link
                            href={info.href}
                            className="font-medium hover:text-primary transition-colors"
                          >
                            {info.value}
                          </Link>
                        ) : (
                          <p className="font-medium">{info.value}</p>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="pt-4"
            >
              <p className="text-sm text-muted-foreground mb-3">Connect with me</p>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <Link
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-card border border-border rounded-xl hover:border-primary/30 hover:text-primary transition-all duration-300"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </Link>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* CTA Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="h-full border-border hover:border-primary/30 transition-colors duration-300 bg-gradient-to-br from-card to-muted/50">
              <CardContent className="p-8 flex flex-col justify-center h-full">
                <h3 className="text-2xl font-bold mb-4">
                  Ready to build something amazing?
                </h3>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  I&apos;m currently available for new opportunities. Whether you need a 
                  senior engineer to lead AI initiatives, architect backend systems, or 
                  deliver full-stack products—I&apos;d love to discuss how I can help.
                </p>
                
                <div className="space-y-3">
                  <Button asChild size="lg" className="w-full">
                    <Link href="mailto:nithish952001@gmail.com">
                      <Mail className="w-4 h-4 mr-2" />
                      Send an Email
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="w-full group">
                    <Link 
                      href="https://www.linkedin.com/in/nithish-suresh-babu/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="w-4 h-4 mr-2" />
                      Connect on LinkedIn
                      <ArrowUpRight className="w-4 h-4 ml-auto transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}