<script setup lang="ts">
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'
import type { NavigationMenuItem } from '@nuxt/ui'
import type { FooterColumn } from '@nuxt/ui'

import Logo from '~/components/Logo.vue'

const route = useRoute()

const breakpoints = useBreakpoints(breakpointsTailwind)
const isMobile = breakpoints.smaller('sm')

const sectionTitles: Record<string, string> = {
    '#services': 'บริการ',
    '#promotion': 'โปรโมชั่น',
    '#portfolio': 'ผลงาน',
    // '#blogs': 'Blogs',
    '#contact': 'ติดต่อเรา'
}

const pageTitle = computed(() => {
    if (route.hash && sectionTitles[route.hash]) {
        return sectionTitles[route.hash]
    }
    return null
})

useHead({
    title: pageTitle
})

const socialLinks = ref([
    {
        label: 'แอดไลน์คุยกับเรา',
        icon: 'i-simple-icons-line',
        to: 'https://line.me/ti/p/~lee_lmbaudit',
        color: "success"
    },
    {
        label: 'Facebook',
        icon: 'i-simple-icons-facebook',
        to: 'https://www.facebook.com/LMB.ACC',
        color: 'primary'
    },
])

const items = computed<NavigationMenuItem[]>(() => [
    {
        label: 'บริการ',
        to: '/services',
        icon: 'i-heroicons-briefcase',
        active: route.path === '/services'
    },
    {
        label: 'เกี่ยวกับเรา',
        to: '/about',
        icon: 'i-heroicons-building-office-2',
        active: route.path === '/about'
    },
    {
        label: 'ติดต่อเรา',
        to: '/contact',
        icon: 'i-heroicons-device-phone-mobile',
        active: route.path === '/contact'
    },
])


</script>
<template>
    <UHeader title="LMB-Accounting-Plus" mode="slideover">

        <template #left>
            <NuxtLink to="/">
                <Logo />
            </NuxtLink>
        </template>

        <UNavigationMenu :items="items" />

        <template #right>
            <NuxtLink to="https://line.me/ti/p/~lee_lmbaudit" target="_blank" class="flex items-center gap-2.5 px-5 py-2.5 rounded-full font-bold text-xs md:text-sm
                       bg-linear-to-r from-primary-500 via-primary-500 to-primary-500
                       text-white 
                       hover:scale-110 hover:-translate-y-0.5
                       transition-all duration-300 ease-out
                       ">
                <span>ปรึกษาฟรี!</span>
                <UIcon name="i-heroicons-sparkles" class="size-4" />
            </NuxtLink>
            <UColorModeButton class="hidden lg:block" />
        </template>

        <template #body>
            <div class="flex justify-end">

                <UColorModeButton class="" />

            </div>
            <UNavigationMenu :items="items" orientation="vertical" class="-mx-2.5" />

        </template>

    </UHeader>

    <UMain>
        <slot />

    </UMain>

    <USeparator color="secondary" :avatar="{ src: '/logo.png' }" class="mt-16" />

    <UFooter id="contact" class="scroll-mt-24" :ui="{ top: 'pt-4 pb-0 lg:pt-8 lg:pb-2', }">
        <template #top>
            <FooterColumns />
            <USeparator />
        </template>


        <div class="flex flex-col md:flex-row items-center justify-between ">
            <p class="text-muted text-xs md:text-sm">
                Copyright © {{ new Date().getFullYear() }} LMB-Accounting-Plus. สงวนลิขสิทธิ์.
            </p>
        </div>

        <template #right>
            <UTooltip v-for="link in socialLinks" :key="link.label" :text="link.label">
                <UButton color="neutral" variant="ghost" :to="link.to" target="_blank" :icon="link.icon"
                    :aria-label="link.label" />
            </UTooltip>
        </template>

    </UFooter>

</template>