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
    // url: 'https://lmbaccount-law.com',
    url: 'https://lab-accounting.vercel.app',
    name: 'LMB Accounting Plus - สำนักงานบัญชีครบวงจร',
    description: 'บริษัท นิติบุคคล ผู้ให้บริการบริหารจัดการการเงิน รับทำบัญชี จดทะเบียนบริษัท ยื่นภาษี ปิดงบการเงิน โดยทีมผู้เชี่ยวชาญ',
    defaultLocale: 'th',
  },

  sitemap: {
    urls: [
      { loc: '/', changefreq: 'weekly', priority: 1.0 },
      { loc: '/about', changefreq: 'monthly', priority: 0.8 },
      { loc: '/services', changefreq: 'weekly', priority: 0.9 },
      { loc: '/blogs', changefreq: 'weekly', priority: 0.8 },
      { loc: '/contact', changefreq: 'monthly', priority: 0.7 },
    ],
    exclude: ['/manage/**'],
  },

  robots: {
    allow: ['/'],
    disallow: ['/api/', '/_nuxt/', '/manage/'],
    // sitemap: 'https://lmbaccount-law.com/sitemap.xml',
    sitemap: 'https://lab-accounting.vercel.app/sitemap.xml',
  },

  schemaOrg: {
    identity: {
      type: 'LocalBusiness',
      name: 'LMB Accounting Plus',
      description: 'บริษัท นิติบุคคล ผู้ให้บริการบริหารจัดการการเงิน รับทำบัญชี จดทะเบียนบริษัท ยื่นภาษี',
      // url: 'https://lmbaccount-law.com',
      // logo: 'https://lmbaccount-law.com/logo.png',
      url: 'https://lab-accounting.vercel.app',
      logo: 'https://lab-accounting.vercel.app/logo.png',
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
      // siteUrl: 'https://lmbaccount-law.com',
      siteUrl: 'https://lab-accounting.vercel.app',
    }
  },
})