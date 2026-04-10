<script setup lang="ts">

</script>

<template>
    <UContainer class="py-20">
        <div class="text-center mb-10">
            <span class="text-secondary font-medium tracking-wider uppercase text-sm mb-2 block">Certifications</span>
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">ใบรับรองและความเชี่ยวชาญ</h2>
        </div>
        <UPageCTA
            title="PEAK Specialist ผู้เชี่ยวชาญโปรแกรม PEAK PEAK Advisor Level Advance"
            description="ได้รับการรับรองในระดับ PEAK Advisor Level Advance สามารถให้คำปรึกษา ติดตั้ง และใช้งานระบบบัญชี PEAK เพื่อช่วยให้ธุรกิจบริหารการเงินได้อย่างมีประสิทธิภาพ"
            orientation="horizontal"
            reverse
            class="rounded-none"
            variant="naked"
        >
            <NuxtImg
            src="/images/content/cert-2.jpg"
            alt="FLOWACCOUNT A Complete Guide to Mastering Flow Account"
            class="w-full rounded-lg"
            width="600" height="400"
            loading="lazy"
            format="webp"
            />
        </UPageCTA>
        <UPageCTA
            title="FLOWACCOUNT A Complete Guide to  Mastering Flow Account"
            description="ผ่านการอบรมและได้รับใบรับรองการใช้งานระบบ FlowAccount อย่างถูกต้อง สามารถให้คำแนะนำและจัดการระบบบัญชีออนไลน์ให้ธุรกิจของคุณได้อย่างมีประสิทธิภาพ"
            orientation="horizontal"
            class="rounded-none"
            variant="naked"
            reverse
        >
            <NuxtImg
            src="/images/content/cert-1.jpg"
            alt="PEAK Specialist ผู้เชี่ยวชาญโปรแกรม PEAK Advisor Level Advance"
            class="w-full rounded-lg"
            width="600" height="400"
            loading="lazy"
            format="webp"
            />
        </UPageCTA>
    </UContainer>
</template>
