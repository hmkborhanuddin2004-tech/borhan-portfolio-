/**
 * ============================================================================
 * 🛠️ PORTFOLIO CUSTOMIZATION HOOK (heynesh-exact-dev)
 * ============================================================================
 * Simply modify the fields below with your personal information.
 * When you run `npm run dev`, these values automatically customize the 
 * live Heynesh portfolio interface!
 */

window.CUSTOM_PROFILE = {
  name: "Muhammad Borhan Uddin",
  brand: "BORHAN®",
  title: "Creative Full-Stack & AI Automation Developer",
  tagline: "Engineering, Applied Differently.",
  email: "hmkborhanuddin2004@gmail.com",
  introCallUrl: "mailto:hmkborhanuddin2004@gmail.com?subject=Project%20Inquiry%20-%20Muhammad%20Borhan%20Uddin",
  status: "Available for Q1 / Q2 Projects",
  location: "Dhaka, Bangladesh (Serving Global Clients)",
  socials: {
    linkedin: "https://www.linkedin.com/in/hmkborhanuddin/",
    twitter: "https://x.com/borhan_dev",
    github: "https://github.com/hmkborhanuddin2004",
    telegram: "https://t.me/borhan_dev",
    facebook: "https://www.facebook.com/people/HMk-Borhan-Uddin/100069639075719/"
  },
  // 📲 Instant Lead Dispatch Webhook (Optional: Telegram Bot / WhatsApp Webhook URL)
  // When a client sends a message in "Direct WhatsApp", it automatically POSTs to this webhook!
  relayWebhook: "" 
};

// Set global relay webhook
if (window.CUSTOM_PROFILE && window.CUSTOM_PROFILE.relayWebhook) {
  window.BORHAN_RELAY_WEBHOOK = window.CUSTOM_PROFILE.relayWebhook;
}

document.addEventListener("DOMContentLoaded", () => {
  const p = window.CUSTOM_PROFILE;
  if (!p) return;

  // 1. Update Document Title & Meta
  if (p.name && p.title) {
    document.title = `${p.title} — ${p.name} | ${p.brand}`;
  }

  // 2. Update Brand Name / Logo in Navbar
  const navLogos = document.querySelectorAll('.nav-logo, .brand, a[href="#hero"]');
  navLogos.forEach(el => {
    if (el.textContent && el.textContent.includes('NESH')) {
      el.textContent = p.brand;
    }
  });

  // 3. Update Cal.com Intro Call Links
  if (p.introCallUrl) {
    document.querySelectorAll('a[href*="cal.com"]').forEach(el => {
      el.href = p.introCallUrl;
    });
  }

  // 4. Update Mailto Links
  if (p.email) {
    document.querySelectorAll('a[href^="mailto:"]').forEach(el => {
      el.href = `mailto:${p.email}`;
    });
  }

  // 5. Update Social Links
  if (p.socials) {
    if (p.socials.linkedin) {
      document.querySelectorAll('a[href*="linkedin.com"]').forEach(el => {
        el.href = p.socials.linkedin;
      });
    }
    if (p.socials.twitter) {
      document.querySelectorAll('a[href*="x.com"], a[href*="twitter.com"]').forEach(el => {
        el.href = p.socials.twitter;
      });
    }
    if (p.socials.github) {
      document.querySelectorAll('a[href*="github.com"]').forEach(el => {
        el.href = p.socials.github;
      });
    }
    if (p.socials.telegram) {
      document.querySelectorAll('a[href*="t.me"]').forEach(el => {
        el.href = p.socials.telegram;
      });
    }
    if (p.socials.facebook) {
      document.querySelectorAll('a[href*="facebook.com"]').forEach(el => {
        el.href = p.socials.facebook;
      });
    }
  }

  // 6. Update Hero Text
  const heroHeading = document.querySelector('h1.hero-title, .hero-h1, h1.hero-heading');
  if (heroHeading && p.name) {
    heroHeading.innerHTML = heroHeading.innerHTML.replace(/Nenad/gi, p.name);
  }
});
