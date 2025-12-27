<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps<{
    error: NuxtError
}>()
</script>

<template>
    <NuxtLayout>
        <UError :clear="{
            label: 'กลับสู่หน้าเว็บไซต์',
            color: 'neutral',
            variant: 'outline',
            size: 'xl',
            icon: 'i-lucide-arrow-left',
            class: 'rounded-full px-6'
        }" :error="{
            statusCode: 404,
            statusMessage: 'ไม่พบข้อมูลหน้าที่ระบุ',
            message: 'ขออภัย หน้านี้อาจถูกลบหรือมีการเปลี่ยนแปลง URL กรุณาตรวจสอบลิงก์อีกครั้ง หรือกลับไปที่หน้าหลัก'
        }" />
    </NuxtLayout>
</template>
