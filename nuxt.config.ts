// https://nuxt.com/docs/api/configuration/nuxt-config

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxt/ui',
    '@nuxt/image',
    '@nuxt/icon',
    '@nuxt/fonts',
    '@nuxtjs/seo',
    '@nuxtjs/color-mode'
  ],
  css: ['~/assets/css/main.css'],

  // SEO Configuration
  site: {
    url: 'https://lmb-accounting.com',
    name: 'LMB Accounting Plus - สำนักงานบัญชีครบวงจร',
    description: 'บริษัท นิติบุคคล ผู้ให้บริการบริหารจัดการการเงิน รับทำบัญชี จดทะเบียนบริษัท ยื่นภาษี ปิดงบการเงิน โดยทีมผู้เชี่ยวชาญ',
    defaultLocale: 'th',
  },

  // Sitemap Configuration
  sitemap: {
    sources: ['/api/__sitemap__/urls'],
    exclude: ['/manage/**', '/api/**'],
  },

  // Robots Configuration
  robots: {
    groups: [
      {
        userAgent: '*',
        allow: ['/'],
        disallow: ['/api/', '/_nuxt/', '/manage/', '/preview'],
      },
      {
        userAgent: 'GPTBot',
        allow: ['/'],
      },
      {
        userAgent: 'ChatGPT-User',
        allow: ['/'],
      },
      {
        userAgent: 'Google-Extended',
        allow: ['/'],
      },
      {
        userAgent: 'Anthropic-AI',
        allow: ['/'],
      },
    ],
    sitemap: 'https://lmb-accounting.com/sitemap.xml',
  },

  // OG Image Configuration
  ogImage: {
    enabled: true,
    defaults: {
      width: 1200,
      height: 630,
    },
  },

  // Schema.org Configuration
  schemaOrg: {
    identity: {
      type: 'LocalBusiness',
      name: 'LMB Accounting Plus',
      description: 'สำนักงานบัญชีครบวงจร บริการรับทำบัญชี จดทะเบียนบริษัท ยื่นภาษี ปิดงบการเงิน',
      url: 'https://lmb-accounting.com',
      logo: 'https://lmb-accounting.com/logo.png',
      telephone: '+66-81-234-5678',
      email: 'contact@lmb-accounting.com',
      address: {
        streetAddress: '123 ถนนสุขุมวิท',
        addressLocality: 'กรุงเทพมหานคร',
        addressRegion: 'กรุงเทพมหานคร',
        postalCode: '10110',
        addressCountry: 'TH',
      },
      geo: {
        latitude: 13.7563,
        longitude: 100.5018,
      },
      openingHoursSpecification: [
        {
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '09:00',
          closes: '18:00',
        },
        {
          dayOfWeek: ['Saturday'],
          opens: '09:00',
          closes: '12:00',
        },
      ],
      sameAs: [
        'https://www.facebook.com/LMBAccountingPlus',
        'https://line.me/ti/p/@LMB-accounting',
      ],
      priceRange: '฿฿',
    },
  },

  // Link Checker (disable in production)
  linkChecker: {
    enabled: false,
  },

  // Vite Build Configuration
  vite: {
    build: {
      cssMinify: 'lightningcss',
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: true,
        },
      },
    },
  },

  // Runtime Config
  runtimeConfig: {
    public: {
      siteUrl: 'https://lmb-accounting.com',
    }
  },
})