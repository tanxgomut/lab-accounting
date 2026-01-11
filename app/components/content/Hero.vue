<script setup lang="ts">
const links = ref([
    {
        label: 'ปรึกษาฟรี / ขอใบเสนอราคา',
        to: 'https://line.me/ti/p/~lee_lmbaudit',
        target: '_blank',
        icon: 'i-heroicons-chat-bubble-left-right',
        size: 'xl' as any,
        color: 'gray' as any,
        variant: 'solid' as any,
        class: `
            relative overflow-hidden border-0 ring-0 text-white font-extrabold rounded-full tracking-wider
            shadow-lg shadow-primary/50 
            before:absolute before:inset-[-500%] before:content-[''] 
            before:animate-[spin_3s_linear_infinite] 
            before:bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,#ffffff_10%,#34d399_20%,#10b981_25%,transparent_50%)]
            before:z-[-2]
            after:absolute after:inset-[2px] after:bg-primary after:content-[''] 
            after:rounded-full after:z-[-1]
            hover:scale-105 transition-all duration-300
        `
    },
    {
        label: 'ดูบริการทั้งหมด',
        to: '/services',
        color: 'neutral' as any,
        variant: 'ghost' as any,
        size: 'lg' as any,
        trailingIcon: 'i-heroicons-arrow-right',
    }
])

const items = [
    '/images/content/02.jpg',
]
</script>

<template>
    <section class="relative overflow-hidden">
        <div class="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            <div
                class="absolute -top-[20%] -right-[10%] w-[700px] h-[700px] bg-primary-400/30 rounded-full blur-[130px] mix-blend-multiply dark:mix-blend-screen opacity-70 animate-pulse">
            </div>
            <div
                class="absolute -bottom-[20%] -left-[10%] w-[600px] h-[600px] bg-secondary-400/30 rounded-full blur-[130px] mix-blend-multiply dark:mix-blend-screen opacity-70 animate-pulse delay-1000">
            </div>
            <div
                class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/60 dark:bg-gray-900/60 blur-[100px] rounded-full">
            </div>
        </div>
        <UPageHero
            description="สำนักบัญชีครบวงจร ให้บริการด้านบัญชี ภาษี และจดทะเบียนธุรกิจ และวางระบบบัญชี วางแผนภาษี ตรวจสอบบัญชี ที่ปรึกษากฏหมายธุรกิจ ด้วยทีมงานมืออาชีพประสบการณ์กว่า 20 ปี ❝ ทำงานด้วยใจ ใส่ใจทุกรายละเอียด เพราะตัวเลขที่ดี คือพื้นฐานของธุรกิจที่มั่นคง ❞ "
            orientation="horizontal" :links="links">
            <template #headline>
                <div class="flex justify-center items-center gap-2">
                    <UIcon name="i-heroicons-shield-check" class="w-5 h-5 text-secondary" />
                    <p class="text-secondary font-bold tracking-wide text-sm sm:text-base uppercase">
                        มืออาชีพที่คุณวางใจ
                    </p>
                </div>
            </template>
            <template #description>
                <p class="text-muted">สำนักบัญชีครบวงจร ให้บริการด้านบัญชี ภาษี และจดทะเบียนธุรกิจ และวางระบบบัญชี
                    วางแผนภาษี ตรวจสอบบัญชี ที่ปรึกษากฏหมายธุรกิจ ด้วยทีมงานมืออาชีพประสบการณ์กว่า 20 ปี ❝
                    <strong>ทำงานด้วยใจ ใส่ใจทุกรายละเอียด เพราะตัวเลขที่ดี คือพื้นฐานของธุรกิจที่มั่นคง ❞</strong>
                </p>
            </template>
            <template #title>
                <h1 class="text-5xl">
                    <span class="text-[#384c95]">LMB</span>
                    <span class="text-[#384c95]"> ACCOUNTING</span>
                    <span class="text-warning-600"> PLUS</span>
                </h1>
            </template>
            <NuxtImg src="/images/content/02.jpg" alt="สำนักบัญชีครบวงจร ให้บริการด้านบัญชี ภาษี และจดทะเบียนธุรกิจ และวางระบบบัญชี
                    วางแผนภาษี ตรวจสอบบัญชี ที่ปรึกษากฏหมายธุรกิจ ด้วยทีมงานมืออาชีพประสบการณ์กว่า 20 ปี
                    ทำงานด้วยใจ ใส่ใจทุกรายละเอียด เพราะตัวเลขที่ดี คือพื้นฐานของธุรกิจที่มั่นคง"
                class="w-full h-auto object-contain rounded-xl   " />
            <!-- <UCarousel v-slot="{ item }" loop :arrows="false" dots :autoplay="{ delay: 2000 }" :items="items">
                <NuxtImg :src="item" class="w-full h-[300px] md:h-[380px] object-cover rounded-xl shadow-md   " />
            </UCarousel> -->
        </UPageHero>
    </section>

</template>