<script setup lang="ts">
import CookieConsent from '~/components/CookieConsent.vue';

const runtimeConfig = useRuntimeConfig()
const siteUrl = runtimeConfig.public.siteUrl
const route = useRoute()

useHead({
    titleTemplate: (titleChunk) => {
        return titleChunk ? `${titleChunk} - LAB ACCOUNTING PLUS` : 'LAB ACCOUNTING PLUS - บริการบัญชีและภาษี';
    },
    htmlAttrs: {
        lang: 'th'
    },
    link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' },
        { rel: 'canonical', href: `${siteUrl}${route.path}` }
    ]
})

useSeoMeta({
    title: 'บริการบัญชีและภาษี',
    ogTitle: 'LAB ACCOUNTING PLUS - บริการบัญชีและภาษี',
    description: 'บริการบัญชีและภาษี',
    ogDescription: 'บริการบัญชีและภาษี',
    ogImage: `${siteUrl}/og-image.png`,
    twitterCard: 'summary_large_image',
    twitterImage: `${siteUrl}/og-image.png`,
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
    </UApp>
</template>
