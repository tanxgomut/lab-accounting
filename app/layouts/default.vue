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
        color: "success"
    },
    {
        label: 'Instagram',
        icon: 'i-simple-icons-instagram',
        color: 'error'
    },
    {
        label: 'Facebook',
        icon: 'i-simple-icons-facebook',
        color: 'primary'
    },

    {
        label: 'Youtube',
        icon: 'i-simple-icons-youtube',
        color: 'error'
    },
    {
        label: 'Tiktok',
        icon: 'i-simple-icons-tiktok',
        color: 'neutral'
    },
])

const items = computed<NavigationMenuItem[]>(() => [
    {
        label: 'บริการ',
        to: '/services',
        icon: 'i-heroicons-briefcase', // รูปกระเป๋าเอกสาร สื่อถึงการทำงาน/ธุรกิจ
        active: route.path === '/services'
    },
    {
        label: 'เกี่ยวกับเรา',
        to: '/about',
        icon: 'i-heroicons-building-office-2', // รูปตึกสำนักงาน สื่อถึงองค์กร/ความมั่นคง
        active: route.path === '/about'
    },
    {
        label: 'ติดต่อเรา',
        to: '/contact',
        icon: 'i-heroicons-device-phone-mobile', // รูปโทรศัพท์ สื่อถึงการติดต่อได้ทันที
        active: route.path === '/contact'
    },
    {
        label: 'บทความ',
        to: '/blogs',
        icon: 'i-heroicons-newspaper', // รูปหนังสือพิมพ์ สื่อถึงข่าวสาร/ความรู้บัญชี
        active: route.path === '/blogs'
    },
    // {
    //     label: 'Blogs',
    //     to: '/blogs',
    //     icon: 'i-lucide-file-text',
    //     active: route.path.startsWith('/blogs') || route.hash === '#blogs',
    //     children: blogs?.value?.map((blog) => ({
    //         icon: 'i-lucide-file-text',
    //         description: blog.title,
    //         to: `${blog.to}`,
    //     }))
    // },

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
            <NuxtLink to="/contact" class="flex items-center gap-2.5 px-5 py-2.5 rounded-full font-bold text-xs md:text-sm
                       bg-linear-to-r from-orange-500 via-yellow-500 to-amber-500
                       text-white shadow-[0_4px_20px_rgba(251,191,36,0.5)]
                       hover:shadow-[0_6px_30px_rgba(251,191,36,0.7)] 
                       hover:scale-110 hover:-translate-y-0.5
                       transition-all duration-300 ease-out
                       ">
                <!-- <span class="relative flex size-2.5">
                    <span
                        class="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                    <span class="relative inline-flex rounded-full size-2.5 bg-white"></span>
                </span> -->
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

    <USeparator label="lmb-accounting-plus" class="mt-16" />

    <UFooter id="contact" class="scroll-mt-24" :ui="{ top: 'pt-4 pb-0 lg:pt-8 lg:pb-2', }">
        <template #top>
            <FooterColumns />
            <USeparator />
        </template>


        <div class="flex flex-col md:flex-row items-center justify-between ">
            <p class="text-muted text-xs md:text-sm">
                Copyright © {{ new Date().getFullYear() }} LMB-Accounting-Plus. สงวนลิขสิทธิ์.
            </p>
            <!-- <div>
                <UTooltip v-for="link in socialLinks" :key="link.label" :text="link.label">
                    <UButton color="neutral" variant="ghost" target="_blank" :icon="link.icon"
                        :aria-label="link.label" />
                </UTooltip>
            </div> -->
        </div>



        <template #right>
            <UTooltip v-for="link in socialLinks" :key="link.label" :text="link.label">
                <UButton color="neutral" variant="ghost" target="_blank" :icon="link.icon" :aria-label="link.label" />
            </UTooltip>
        </template>

    </UFooter>

</template>