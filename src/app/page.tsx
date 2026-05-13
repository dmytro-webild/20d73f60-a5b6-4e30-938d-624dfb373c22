"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactText from '@/components/sections/contact/ContactText';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import FeatureBento from '@/components/sections/feature/FeatureBento';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import HeroCarouselLogo from '@/components/sections/hero/heroCarouselLogo/HeroCarouselLogo';
import MetricCardSeven from '@/components/sections/metrics/MetricCardSeven';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import SplitAbout from '@/components/sections/about/SplitAbout';
import TestimonialCardTwelve from '@/components/sections/testimonial/TestimonialCardTwelve';
import { Music, Star, Wine } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="expand-hover"
        defaultTextAnimation="entrance-slide"
        borderRadius="rounded"
        contentWidth="small"
        sizing="medium"
        background="noiseDiagonalGradient"
        cardStyle="gradient-radial"
        primaryButtonStyle="gradient"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="normal"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingInline
      navItems={[
        { name: "Home", id: "hero" },
        { name: "About", id: "about" },
        { name: "Testimonials", id: "testimonials" },
        { name: "Contact", id: "contact" },
      ]}
      brandName="Joanie's Bar"
      button={{ text: "Get In Touch", href: "#contact" }}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroCarouselLogo
      logoText="Joanie's Bar"
      description="Old Town Murrieta's favorite local watering hole. Cold beer, good company, and that authentic dive bar feel."
      buttons={[{ text: "Visit Us", href: "#contact" }]}
      slides={[
        { imageSrc: "http://img.b2bpic.net/free-photo/antique-wood-with-worn-surface-metal-hinge_23-2148394809.jpg", imageAlt: "Joanie's bar interior" },
        { imageSrc: "http://img.b2bpic.net/free-photo/street-cafe-old-town-rhodes-journey-through-popular-places-dodecanese-archipelago-greece_166373-3792.jpg", imageAlt: "Joanie's bar interior" },
        { imageSrc: "http://img.b2bpic.net/free-photo/blurred-city-lights_23-2148139051.jpg", imageAlt: "Joanie's bar interior" },
        { imageSrc: "http://img.b2bpic.net/free-photo/vertical-shot-mandola-wooden-table-with-wooden-wall_181624-21686.jpg", imageAlt: "Joanie's bar interior" },
        { imageSrc: "http://img.b2bpic.net/free-photo/cozy-lively-home-interior-design_23-2151118891.jpg", imageAlt: "Joanie's bar interior" },
        { imageSrc: "http://img.b2bpic.net/free-photo/full-shot-teenagers-sitting-together_23-2149241598.jpg", imageAlt: "Joanie's bar interior" },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <SplitAbout
      textboxLayout="split"
      useInvertedBackground={false}
      title="A Local Institution"
      description="Joanie's isn't just a bar; it's a home away from home. Serving the Murrieta community with genuine hospitality and a classic, no-frills vibe that keeps our regulars coming back for years."
      bulletPoints={[
        { title: "Great Atmosphere", description: "Classic dive bar vibes with a friendly, welcoming crowd." },
        { title: "Top-Notch Service", description: "Our bartenders make everyone feel like a regular." },
        { title: "Pool & Tunes", description: "Featuring pool tables and a legendary jukebox." },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/bartender-working-club_23-2150497630.jpg"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureBento
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          title: "Pool Tables",          description: "Classic fun with friends.",          bentoComponent: "reveal-icon",          icon: Star,
        },
        {
          title: "Cold Beer",          description: "Always served with a smile.",          bentoComponent: "reveal-icon",          icon: Wine,
        },
        {
          title: "Legendary Vibes",          description: "A place where locals gather.",          bentoComponent: "reveal-icon",          icon: Music,
        },
      ]}
      title="What We Offer"
      description="Your go-to spot for an authentic night out."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardSeven
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      metrics={[
        { id: "1", value: "205+", title: "Reviews", items: ["Local favorites", "Highly recommended"] },
        { id: "2", value: "100%", title: "Local Vibes", items: ["Friendly staff", "Community feel"] },
        { id: "3", value: "4.4", title: "Rating", items: ["Consistently fun", "Top rated dive"] },
      ]}
      title="By The Numbers"
      description="Why our regulars love us."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTwelve
      useInvertedBackground={false}
      testimonials={[
        { id: "1", name: "Casey Price", imageSrc: "http://img.b2bpic.net/free-photo/leisure-time-with-friends-pub_329181-18324.jpg" },
        { id: "2", name: "Julia Michelle", imageSrc: "http://img.b2bpic.net/free-photo/cheerful-man-drinking-beer-with-friend-bar_23-2147897139.jpg" },
        { id: "3", name: "Elizabeth Poindexter", imageSrc: "http://img.b2bpic.net/free-photo/senior-man-pointing-his-empty-glass-restaurant_23-2149316805.jpg" },
        { id: "4", name: "Tiffany Huertas", imageSrc: "http://img.b2bpic.net/free-photo/person-enjoying-their-time-dj-party_23-2149658378.jpg" },
        { id: "5", name: "Jess Flores", imageSrc: "http://img.b2bpic.net/free-photo/couple-relaxing-pub-eating-pizza-they-are-laughing-eating-pizza_482257-18663.jpg" },
      ]}
      cardTitle="What Our Regulars Say"
      cardTag="Testimonials"
      cardAnimation="slide-up"
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqDouble
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        { id: "q1", title: "Is the bar cash only?", content: "Yes, we are a cash-only establishment with an ATM on-site." },
        { id: "q2", title: "Do you serve food?", content: "We don't have a kitchen, but you can often find local BBQ pop-ups outside on weekends." },
        { id: "q3", title: "Are you pet friendly?", content: "Please check with our staff during your visit!" },
      ]}
      title="Frequently Asked Questions"
      description="Everything you need to know about Joanie's."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={false}
      background={{ variant: "canvas-reveal" }}
      text="Come pull up a stool at Joanie's. Whether you're a local or just passing through, there's always a cold drink waiting for you in Murrieta."
      buttons={[{ text: "Get Directions", href: "#" }]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoReveal
      logoText="Joanie's Bar"
      leftLink={{ text: "Privacy Policy", href: "#" }}
      rightLink={{ text: "Terms of Service", href: "#" }}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
