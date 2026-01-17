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
    url: 'https://lmbaccount-law.com',
    name: 'LMB Accounting Plus - สำนักงานบัญชีครบวงจร',
    description: 'บริษัท นิติบุคคล ผู้ให้บริการบริหารจัดการการเงิน รับทำบัญชี จดทะเบียนบริษัท ยื่นภาษี ปิดงบการเงิน โดยทีมผู้เชี่ยวชาญ',
    defaultLocale: 'th',
  },

  // Image Optimization
  image: {
    quality: 80,
    format: ['webp', 'avif', 'jpg'],
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
    },
  },

  // Icon Configuration - use local icons for performance
  icon: {
    serverBundle: 'auto',
    clientBundle: {
      scan: true,
    },
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
    sitemap: 'https://lmbaccount-law.com/sitemap.xml',
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
      url: 'https://lmbaccount-law.com',
      logo: 'https://lmbaccount-law.com/logo.png',
      telephone: '+66-96-353-5572',
      email: 'mayulee.mc@gmail.com',
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
        'https://www.facebook.com/LMB.ACC',
        'https://line.me/ti/p/~lee_lmbaudit',
      ],
      priceRange: '฿฿',
    },
  },

  // Route Rules for caching and headers
  routeRules: {
    '/llms.txt': {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8'
      }
    },
    // Static assets caching
    '/_nuxt/**': {
      headers: {
        'Cache-Control': 'public, max-age=31536000, immutable'
      }
    },
    '/images/**': {
      headers: {
        'Cache-Control': 'public, max-age=86400, stale-while-revalidate=604800'
      }
    },
    '/**': {
      headers: {
        'Cache-Control': 'public, max-age=3600, stale-while-revalidate=86400'
      }
    }
  },

  // Link Checker (disable in production)
  linkChecker: {
    enabled: false,
  },

  // Experimental features for performance
  experimental: {
    viewTransition: true,
    payloadExtraction: true,
  },

  // Nitro Configuration for performance
  nitro: {
    compressPublicAssets: true,
    minify: true,
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
      rollupOptions: {
        output: {
          manualChunks: {
            'vue-vendor': ['vue', 'vue-router'],
          }
        }
      }
    },
  },

  // Runtime Config
  runtimeConfig: {
    public: {
      siteUrl: 'https://lmbaccount-law.com',
    }
  },
})