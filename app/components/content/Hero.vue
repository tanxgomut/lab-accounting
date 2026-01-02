<script setup lang="ts">
const links = ref([
    {
        label: 'ปรึกษาฟรี / ขอใบเสนอราคา',
        to: 'https://line.me/ti/p/yourid',
        target: '_blank',
        icon: 'i-heroicons-chat-bubble-left-right',
        size: 'xl',
        color: 'gray',
        variant: 'solid',
        class: `
            relative overflow-hidden border-0 ring-0 text-white font-extrabold rounded-full tracking-wider
            shadow-lg shadow-orange-500/50 
            before:absolute before:inset-[-500%] before:content-[''] 
            before:animate-[spin_3s_linear_infinite] 
            before:bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,#ffffff_10%,#fbbf24_20%,#f59e0b_25%,transparent_50%)]
            before:z-[-2]
            after:absolute after:inset-[2px] after:bg-orange-500 after:content-[''] 
            after:rounded-full after:z-[-1]
            hover:scale-105 transition-all duration-300
        `
    },
    {
        label: 'ดูบริการทั้งหมด',
        to: '/services',
        color: 'neutral',
        variant: 'ghost',
        size: 'lg',
        trailingIcon: 'i-heroicons-arrow-right',
        class: 'text-white hover:text-secondary transition-colors'
    }
])
</script>

<template>
    <div class="relative bg-cover bg-center bg-no-repeat min-h-[600px] flex items-center"
        style="background-image: url('https://picsum.photos/id/180/1920/1080');">

        <div class="absolute inset-0 bg-slate-900/80"></div>

        <div class="relative z-10 w-full">
            <UPageHero
                description="สำนักงานบัญชีครบวงจร ดูแลโดยมืออาชีพ รับจดทะเบียนบริษัท ทำบัญชี ยื่นภาษี ตรวจสอบบัญชี และที่ปรึกษากฎหมายธุรกิจ เพื่อให้ธุรกิจของคุณเติบโตอย่างมั่นคง"
                reverse :links="links as any" :ui="{
                    description: 'text-lg sm:text-xl/8 text-white',
                }">
                <template #headline>
                    <div class="flex justify-center items-center gap-2">
                        <UIcon name="i-heroicons-shield-check" class="w-5 h-5 text-success" />
                        <p class="text-success font-bold tracking-wide text-sm sm:text-base uppercase">
                            มืออาชีพที่คุณวางใจ
                        </p>
                    </div>
                </template>
                <template #title>
                    <h1 class="text-5xl font-extrabold text-gray-900 sm:text-6xl mb-4">
                        <span class="text-primary-600">LMB ACCOUNTING</span>
                        <span class="text-warning-500"> PLUS</span>
                    </h1>
                </template>
            </UPageHero>
        </div>
    </div>


</template>