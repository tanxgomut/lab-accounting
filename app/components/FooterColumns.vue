<script setup lang="ts">
import type { FooterColumn } from '@nuxt/ui'

const columns: FooterColumn[] = [
    {
        label: 'เมนูเว็บไซต์',
        children: [

            {
                label: 'บริการ',
                to: '/services',
                icon: 'i-heroicons-briefcase' // กระเป๋าเอกสาร
            },
            {
                label: 'เกี่ยวกับเรา',
                to: '/about',
                icon: 'i-heroicons-building-office-2' // ตึกสำนักงาน
            },
            {
                label: 'บทความ',
                to: '/blogs',
                icon: 'i-heroicons-newspaper' // หนังสือพิมพ์/ข่าวสาร
            },
            {
                label: 'ติดต่อเรา',
                to: '/contact',
                icon: 'i-heroicons-phone' // โทรศัพท์
            }
        ]
    },
    {
        label: 'ติดต่อสอบถาม',
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
                label: 'LINE: @LAB-accounting',
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

]

const services = [
    { label: 'จดบริษัทออนไลน์', icon: 'i-lucide-globe' },
    { label: 'จดบริษัทแบบมือ', icon: 'i-lucide-pencil' },
    { label: 'รับทำบัญชี', icon: 'i-lucide-calculator' },
    { label: 'จดเลิกกิจการ', icon: 'i-lucide-x-circle' },
    { label: 'จดภาษีมูลค่าเพิ่ม', icon: 'i-lucide-receipt' },
    { label: 'จดขึ้นทะเบียนนายจ้าง', icon: 'i-lucide-users' },
    { label: 'แก้ไขข้อมูลนิติบุคคล', icon: 'i-lucide-file-pen' },
    { label: 'ย้ายที่อยู่นิติบุคคล', icon: 'i-lucide-map-pin' },
    { label: 'แปรสภาพห้างหุ้นส่วน', icon: 'i-lucide-arrow-right-left' },
    { label: 'ปิดงบการเงินย้อนหลัง', icon: 'i-lucide-history' },
    { label: 'ปิดงบการเงินประจำปี', icon: 'i-lucide-calendar-check' },
    { label: 'ทำสลิปเงินเดือน', icon: 'i-lucide-banknote' },
    { label: 'งานทะเบียนประกันสังคม', icon: 'i-lucide-shield-check' },
]



</script>

<template>
    <UContainer class="mb-6">
        <UFooterColumns :columns="columns">
            <template #left>
                <div>
                    <!-- Brand Section -->
                    <div class="space-y-3 mb-2">
                        <div class="flex items-center gap-3">
                            <NuxtImg src="/logo.png" alt="LAB ACCOUNTING PLUS" class="h-10 w-auto object-contain" />
                            <div>
                                <h3 class="text-lg font-bold text-highlighted">LMB ACCOUNTING PLUS</h3>
                                <p class="text-xs text-muted">by RSR TECH GROUP</p>
                            </div>
                        </div>
                        <p class="text-sm text-muted leading-relaxed max-w-sm">
                            เราคือคู่คิดทางธุรกิจของคุณ ให้บริการด้านบัญชี ภาษี และจดทะเบียนครบวงจร
                            ด้วยความถูกต้อง แม่นยำ และรวดเร็ว เพื่อให้ธุรกิจของคุณเติบโตอย่างมั่นคง
                        </p>
                    </div>

                    <!-- Services Section -->
                    <div>
                        <p class="text-sm font-semibold mb-4">บริการของเรา</p>
                        <div class="grid grid-cols-2 gap-x-6 gap-y-2 text-sm ">
                            <NuxtLink v-for="service in services" :key="service.label" to="/services"
                                class="flex items-center gap-2 ">
                                <UIcon :name="service.icon" class="size-4 shrink-0 text-secondary" />
                                <span class=" font-bold">{{ service.label
                                    }}</span>
                            </NuxtLink>
                        </div>
                    </div>
                </div>
            </template>
        </UFooterColumns>
    </UContainer>
</template>