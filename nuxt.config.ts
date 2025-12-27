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

  // seo
  site: {
    url: 'https://lmbaccount-law.com',
    name: 'LMB Accounting Plus - สำนักงานบัญชีครบวงจร',
    description: 'บริษัท นิติบุคคล ผู้ให้บริการบริหารจัดการการเงิน รับทำบัญชี จดทะเบียนบริษัท ยื่นภาษี ปิดงบการเงิน โดยทีมผู้เชี่ยวชาญ',
    defaultLocale: 'th',
  },

  sitemap: {
    sources: ['/api/__sitemap__/urls'],
  },

  robots: {
    allow: ['/'],
    disallow: ['/api/', '/_nuxt/'],
    sitemap: 'https://lmbaccount-law.com/sitemap.xml',
  },

  schemaOrg: {
    identity: {
      type: 'LocalBusiness',
      name: 'LMB Accounting Plus',
      description: 'บริษัท นิติบุคคล ผู้ให้บริการบริหารจัดการการเงิน รับทำบัญชี จดทะเบียนบริษัท ยื่นภาษี',
      url: 'https://lmbaccount-law.com',
      logo: 'https://lmbaccount-law.com/logo.png',
      telephone: '+66-XX-XXX-XXXX',
      address: {
        streetAddress: 'ที่อยู่สำนักงาน',
        addressLocality: 'กรุงเทพมหานคร',
        addressRegion: 'กรุงเทพมหานคร',
        postalCode: '10000',
        addressCountry: 'TH',
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
        'https://www.facebook.com/lmbaccounting',
        'https://line.me/ti/p/@lmbaccounting',
      ],
    },
  },

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

  runtimeConfig: {
    public: {
      siteUrl: 'https://lmbaccount-law.com',
    }
  },
})