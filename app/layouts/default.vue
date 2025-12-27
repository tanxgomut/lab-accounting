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
    '#blogs': 'Blogs',
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
        color: 'neutral'
    },
    {
        label: 'Facebook',
        icon: 'i-simple-icons-facebook',
        color: 'neutral'
    },
    {
        label: 'Instagram',
        icon: 'i-simple-icons-instagram',
        color: 'neutral'
    },
    {
        label: 'Youtube',
        icon: 'i-simple-icons-youtube',
        color: 'neutral'
    },
    {
        label: 'Tiktok',
        icon: 'i-simple-icons-tiktok',
        color: 'neutral'
    },
])

const items = computed<NavigationMenuItem[]>(() => [
    {

        label: 'โปรโมชั่น',
        to: '/#promotion',
        icon: 'i-lucide-tag',
        active: route.hash === '#promotion'
    },
    {
        label: 'บริการ',
        to: '/#services',
        icon: 'i-lucide-layers',
        active: route.hash === '#services'
    },
    {
        label: 'ผลงาน',
        to: '/#portfolio',
        icon: 'i-lucide-proportions',
        active: route.hash === '#portfolio'
    },
    {
        label: 'Blogs',
        to: '/#blogs',
        icon: 'i-lucide-file-text',
        active: route.path.startsWith('/blogs') || route.hash === '#blogs',
        // children: blogs?.value?.map((blog) => ({
        //     icon: 'i-lucide-file-text',
        //     description: blog.title,
        //     to: `${blog.to}`,
        // }))
    },
    {
        label: 'ติดต่อเรา',
        icon: 'i-lucide-phone',
        to: '/#contact',
        active: route.hash === '#contact'
    }])

const itemss = computed<NavigationMenuItem[]>(() => [
    {

        label: 'โปรโมชั่น',
        to: '/#promotion',
        icon: 'i-lucide-tag',
        active: route.hash === '#promotion'
    },
    {
        label: 'บริการ',
        to: '/#services',
        icon: 'i-lucide-layers',
        active: route.hash === '#services'
    },
    {
        label: 'ผลงาน',
        to: '/#portfolio',
        icon: 'i-lucide-proportions',
        active: route.hash === '#portfolio'
    },
    {
        label: 'Blogs',
        to: '/#blogs',
        icon: 'i-lucide-file-text',
        active: route.path.startsWith('/blogs') || route.hash === '#blogs',
    },
    {
        label: 'ติดต่อเรา',
        icon: 'i-lucide-phone',
        to: '/#contact',
        active: route.hash === '#contact'
    }])


const columns: FooterColumn[] = [
    {
        label: 'Contact',
        children: [
            {
                label: 'คุณ ไมเคิล',
                icon: 'i-lucide-user',
            },
            {
                label: 'โทร: 081-234-5678',
                icon: 'i-lucide-phone',
                target: '_self'
            },
            {
                label: 'LINE: @car-auto',
                icon: 'i-simple-icons-line',
                target: '_blank'
            },
            {
                label: 'Facebook Fanpage',
                icon: 'i-simple-icons-facebook',
                target: '_blank'
            },
            {
                label: 'แผนที่ร้าน (Google Maps)',
                icon: 'i-lucide-map-pin',
                target: '_blank'
            },

        ]
    },
    {
        label: 'Services',
        children: [
            {
                label: 'ชุดแต่งรอบคัน (Body Kits)',
                to: '/#services',
                target: '_self'
            },
            {
                label: 'ล้อแม็ก & ยาง (Wheels & Tires)',
                to: '/#services',
                target: '_self'
            },
            {
                label: 'ระบบช่วงล่าง (Suspension)',
                to: '/#services',
                target: '_self'
            },
            {
                label: 'เซอร์วิสทั่วไป (Maintenance)',
                to: '/#services',
                target: '_self'
            }
        ]
    }
]

</script>
<template>

    <!-- <UBanner icon="i-lucide-sparkles" title="🔥 โปรแรง! แพ็คเกจแต่งรถครบเซ็ต ล้อแม็ก+ยาง+ช่วงล่าง ราคาพิเศษ ฟรีค่าแรง!"
        :actions="[{ label: 'นัดหมายเลย', to: '/#contact', variant: 'outline', size: 'xs' }]" close
        close-icon="i-lucide-x" /> -->


    <UHeader title="Car-Auto" :toggle="false">

        <template #left>
            <NuxtLink to="/">
                <Logo />
            </NuxtLink>
        </template>

        <UNavigationMenu :items="items" />

        <template #right>
            <UTooltip v-for="link in socialLinks" :key="link.label" :text="link.label">
                <UButton color="neutral" variant="ghost" target="_blank" :icon="link.icon" :aria-label="link.label"
                    :size="'xs'" />
            </UTooltip>
            <UColorModeButton />
        </template>

    </UHeader>

    <UMain>
        <slot />
    </UMain>

    <USeparator icon="i-token-branded-cwar" class="mt-16" />

    <UFooter id="contact" class="scroll-mt-24" :ui="{ top: 'pt-6 pb-0 lg:pt-8 lg:pb-2', }">
        <template #top>
            <UContainer class="mb-6">
                <UFooterColumns :columns="columns">
                    <template #right>
                        map
                    </template>
                </UFooterColumns>
            </UContainer>
            <USeparator />
        </template>

        <template #left>
            <p class="text-muted text-xs md:text-sm">
                Copyright © {{ new Date().getFullYear() }} CAR-AUTO. All rights reserved.
            </p>
        </template>


        <template #right>
            <UTooltip v-for="link in socialLinks" :key="link.label" :text="link.label">
                <UButton color="neutral" variant="ghost" target="_blank" :icon="link.icon" :aria-label="link.label"
                    size="xs" />
            </UTooltip>
        </template>

    </UFooter>

</template>