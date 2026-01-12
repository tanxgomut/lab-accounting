<script setup lang="ts">
import CookieConsent from '~/components/CookieConsent.vue';

const runtimeConfig = useRuntimeConfig()
const siteUrl = runtimeConfig.public.siteUrl
const route = useRoute()

useHead({
    titleTemplate: (titleChunk) => {
        return titleChunk ? `${titleChunk} - LMB ACCOUNTING PLUS` : 'LMB ACCOUNTING PLUS - บริการบัญชีและภาษี';
    },
    htmlAttrs: {
        lang: 'th'
    },
    link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
        { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/android-chrome-192x192.png' },
        { rel: 'icon', type: 'image/png', sizes: '512x512', href: '/android-chrome-512x512.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'manifest', href: '/site.webmanifest' },
        { rel: 'canonical', href: `${siteUrl}${route.path}` }
    ]
})

useSeoMeta({
    title: 'บริการบัญชีและภาษี',
    description: 'บริษัท นิติบุคคล ผู้ให้บริการบริหารจัดการการเงิน รับทำบัญชี จดทะเบียนบริษัท ยื่นภาษี ปิดงบการเงิน โดยทีมผู้เชี่ยวชาญ',
    ogTitle: 'LMB Accounting Plus - สำนักงานบัญชีครบวงจร',
    ogDescription: 'บริษัท นิติบุคคล ผู้ให้บริการบริหารจัดการการเงิน รับทำบัญชี จดทะเบียนบริษัท ยื่นภาษี ปิดงบการเงิน โดยทีมผู้เชี่ยวชาญ',
    ogImage: `${siteUrl}/og-image.png`,
    ogImageWidth: 1200,
    ogImageHeight: 630,
    ogType: 'website',
    ogUrl: `${siteUrl}${route.path}`,
    ogSiteName: 'LMB Accounting Plus',
    ogLocale: 'th_TH',
    twitterCard: 'summary_large_image',
    twitterImage: `${siteUrl}/og-image.png`,
    twitterTitle: 'LMB Accounting Plus - สำนักงานบัญชีครบวงจร',
    twitterDescription: 'บริษัท นิติบุคคล ผู้ให้บริการบริหารจัดการการเงิน รับทำบัญชี จดทะเบียนบริษัท ยื่นภาษี ปิดงบการเงิน',
    charset: 'utf-8',
    viewport: 'width=device-width, initial-scale=1',
})

const toaster = { position: 'top-right' as const }

</script>

<template>
    <UApp :toaster="toaster">
        <NuxtLoadingIndicator />
        <NuxtLayout>
            <NuxtPage />
        </NuxtLayout>
        <CookieConsent />
        <ScrollToTop />
    </UApp>
</template>
