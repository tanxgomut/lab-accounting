<script setup lang="ts">
const links = ref([
    {
        label: 'ปรึกษาฟรี / ขอใบเสนอราคา',
        to: 'https://line.me/ti/p/~lee_lmbaudit',
        target: '_blank',
        icon: 'i-heroicons-chat-bubble-left-right',
        size: 'xl',
        color: 'gray',
        variant: 'solid',
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
        color: 'neutral',
        variant: 'ghost',
        size: 'lg',
        trailingIcon: 'i-heroicons-arrow-right',
    }
])

const items = [
    'https://picsum.photos/468/468?random=1',
    'https://picsum.photos/468/468?random=2',
    'https://picsum.photos/468/468?random=3',
    'https://picsum.photos/468/468?random=4',
    'https://picsum.photos/468/468?random=5',
    'https://picsum.photos/468/468?random=6'
]
</script>

<template>
    <section class="relative overflow-hidden">
        <div class="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            <div
                class="absolute -top-[20%] -right-[10%] w-[700px] h-[700px] bg-primary-400/20 rounded-full blur-[130px] mix-blend-multiply dark:mix-blend-screen opacity-70 animate-pulse">
            </div>
            <div
                class="absolute -bottom-[20%] -left-[10%] w-[600px] h-[600px] bg-secondary-400/20 rounded-full blur-[130px] mix-blend-multiply dark:mix-blend-screen opacity-70 animate-pulse delay-1000">
            </div>
            <div
                class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/60 dark:bg-gray-900/60 blur-[100px] rounded-full">
            </div>
        </div>
        <UPageHero
            description="อยากเริ่มธุรกิจใหม่... แต่ปวดหัวเรื่องเอกสาร? วางใจให้ LMB Accounting เป็นเพื่อนคู่คิดธุรกิจคุณ! 🤝 ✅ รับจดทะเบียนบริษัท / หจก. ✅ วางระบบบัญชีและภาษีครบวงจร ✅ ให้คำปรึกษาด้วยภาษาง่ายๆ ไม่ซับซ้อน เริ่มต้นอย่างมั่นใจ ให้มืออาชีพดูแล"
            orientation="horizontal" :links="links as any">
            <template #headline>
                <div class="flex justify-center items-center gap-2">
                    <UIcon name="i-heroicons-shield-check" class="w-5 h-5 text-secondary" />
                    <p class="text-secondary font-bold tracking-wide text-sm sm:text-base uppercase">
                        ปรึกษาฟรี! ทักเลย มืออาชีพพร้อมดูแลคุณ
                    </p>
                </div>
            </template>
            <template #title>
                <h1 class="text-5xl">
                    <span class="text-primary">LMB</span>
                    <span class="text-primary"> ACCOUNTING</span>
                    <span class="text-secondary"> PLUS</span>
                </h1>
            </template>
            <UCarousel v-slot="{ item }" loop :arrows="false" dots :autoplay="{ delay: 2000 }" :items="items">
                <NuxtImg :src="item" class="w-full h-[300px] md:h-[380px] object-cover rounded-xl shadow-md   " />
            </UCarousel>
        </UPageHero>
    </section>
</template>