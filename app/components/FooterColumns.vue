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
            // {
            //     label: 'บทความ',
            //     to: '/blogs',
            //     icon: 'i-heroicons-newspaper' // หนังสือพิมพ์/ข่าวสาร
            // },
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
                label: 'คุณ ลี',
                icon: 'i-lucide-user',
            },
            {
                label: 'โทร: 096-353-5572',
                icon: 'i-lucide-phone',
                to: 'tel:0963535572',
                target: '_self'
            },
            {
                label: 'โทร: 084-387-7167',
                icon: 'i-lucide-phone',
                to: 'tel:0843877167',
                target: '_self'
            },
            {
                label: 'โทร: 02-1650-369',
                icon: 'i-lucide-phone',
                to: 'tel:021650369',
                target: '_self'
            },
            {
                label: 'LINE: lee_lmbaudit',
                icon: 'i-simple-icons-line',
                to: 'https://line.me/ti/p/~lee_lmbaudit',
                target: '_blank'
            },
            {
                label: 'Email: mayulee.mc@gmail.com',
                icon: 'i-lucide-mail',
                to: 'mailto:mayulee.mc@gmail.com',
                target: '_self'
            },
            {
                label: 'รับทำบัญชีครบวงจร จดทะเบียน วางแผนภาษี ให้คำปรึกษาฟรี',
                icon: 'i-simple-icons-facebook',
                to: 'https://www.facebook.com/LMB.ACC',
                target: '_blank'
            },
            {
                label: '215/4 หมู่ที่ 7 ต.พิมลราช อ.บางบัวทอง จ.นนทบุรี 11110',
                icon: 'i-lucide-map-pin',
                to: 'https://www.google.com/maps/place/%E0%B8%96.+%E0%B8%9A%E0%B9%89%E0%B8%B2%E0%B8%99%E0%B8%81%E0%B8%A5%E0%B9%89%E0%B8%A7%E0%B8%A2-%E0%B9%84%E0%B8%97%E0%B8%A3%E0%B8%99%E0%B9%89%E0%B8%AD%E0%B8%A2+%E0%B8%99%E0%B8%99%E0%B8%97%E0%B8%9A%E0%B8%B8%E0%B8%A3%E0%B8%B5+%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B9%80%E0%B8%97%E0%B8%A8%E0%B9%84%E0%B8%97%E0%B8%A2/@13.9431569,100.3536078,17z/data=!4m15!1m8!3m7!1s0x30e28fa5a538247d:0x35893f1dfb8e7327!2z4LiWLiDguJrguYnguLLguJnguIHguKXguYnguKfguKIt4LmE4LiX4Lij4LiZ4LmJ4Lit4LiiIOC4meC4meC4l-C4muC4uOC4o-C4tSDguJvguKPguLDguYDguJfguKjguYTguJfguKI!3b1!8m2!3d13.9431517!4d100.3584787!16s%2Fg%2F122brz57!3m5!1s0x30e28fa5a538247d:0x35893f1dfb8e7327!8m2!3d13.9431517!4d100.3584787!16s%2Fg%2F122brz57?entry=ttu&g_ep=EgoyMDI2MDEwNy4wIKXMDSoKLDEwMDc5MjA3M0gBUAM%3D',
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
        <UFooterColumns :columns="columns"
            :ui="{ linkLabel: 'text-wrap break-words', linkLabelExternalIcon: 'hidden' }">
            <template #right>
                <div>
                    <!-- Brand Section -->
                    <div class="space-y-3 mb-2">
                        <div class="flex items-center gap-3">
                            <NuxtImg src="/logo.png" alt="LAB ACCOUNTING PLUS" class="h-10 w-auto object-contain" />
                            <div>
                                <h3 class="text-lg text-[#384c95] font-bold ">LMB ACCOUNTING <span
                                        class="text-warning-600">PLUS</span></h3>
                                <a href="http://rsrtechgroup.com/" target="_blank" rel="noopener noreferrer">
                                    <p class="text-xs text-muted hover:text-primary">by RSR TECH GROUP</p>
                                </a>

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