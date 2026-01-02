<script setup lang="ts">
const runtimeConfig = useRuntimeConfig()
const siteUrl = runtimeConfig.public.siteUrl

useSeoMeta({
    title: 'เกี่ยวกับเรา - LMB Accounting Plus',
    description: 'รู้จัก LMB Accounting Plus สำนักงานบัญชีครบวงจร ดูแลโดยทีมผู้สอบบัญชีรับอนุญาต (CPA) และนักบัญชีมืออาชีพ',
    ogTitle: 'เกี่ยวกับเรา - LMB Accounting Plus',
    ogDescription: 'รู้จัก LMB Accounting Plus สำนักงานบัญชีครบวงจร ดูแลโดยทีมผู้สอบบัญชีรับอนุญาต (CPA)',
    ogImage: `${siteUrl}/og-image.png`,
    ogImageWidth: 1200,
    ogImageHeight: 630,
    ogType: 'website',
    ogUrl: `${siteUrl}/about`,
    twitterCard: 'summary_large_image',
})



// ค่านิยมองค์กร
const values = [
    {
        icon: 'i-heroicons-shield-check',
        title: 'ความน่าเชื่อถือ',
        description: 'เราดำเนินงานด้วยความโปร่งใส ซื่อสัตย์ และยึดมั่นในจรรยาบรรณวิชาชีพ',
        color: 'primary'
    },
    {
        icon: 'i-heroicons-clock',
        title: 'ตรงเวลา',
        description: 'ส่งมอบงานตามกำหนด ไม่พลาดเดดไลน์ภาษีและงบการเงิน',
        color: 'success'
    },
    {
        icon: 'i-heroicons-light-bulb',
        title: 'มืออาชีพ',
        description: 'ทีมงานมีใบประกอบวิชาชีพและประสบการณ์ในการให้บริการ',
        color: 'warning'
    },
    {
        icon: 'i-heroicons-chat-bubble-left-right',
        title: 'ดูแลใกล้ชิด',
        description: 'พร้อมให้คำปรึกษาและตอบคำถามตลอด ไม่ทิ้งลูกค้า',
        color: 'secondary'
    },
]

// ทีมงาน
const team = [
    {
        name: 'คุณไมเคิล',
        role: 'ผู้ก่อตั้ง / นักบัญชี',
        description: 'ประสบการณ์ 10+ ปี ในการให้บริการด้านบัญชีและภาษี',
        avatar: 'i-heroicons-user-circle'
    },
    {
        name: 'ทีมบัญชี',
        role: 'นักบัญชีมืออาชีพ',
        description: 'ผู้เชี่ยวชาญด้านการทำบัญชีและปิดงบการเงิน',
        avatar: 'i-heroicons-user-group'
    },
    {
        name: 'ทีมจดทะเบียน',
        role: 'ผู้เชี่ยวชาญงานทะเบียน',
        description: 'เชี่ยวชาญการจดทะเบียนบริษัทและแก้ไขข้อมูลนิติบุคคล',
        avatar: 'i-heroicons-clipboard-document-list'
    },
]

// Timeline
const milestones = [
    { year: '2014', title: 'ก่อตั้งสำนักงาน', description: 'เริ่มต้นให้บริการรับทำบัญชี' },
    { year: '2017', title: 'ขยายบริการ', description: 'เพิ่มบริการจดทะเบียนบริษัท' },
    { year: '2020', title: 'เติบโตอย่างมั่นคง', description: 'ลูกค้าเกิน 300 ราย' },
    { year: '2024', title: 'LMB Accounting Plus', description: 'พัฒนาสู่บริการครบวงจร' },
]

const links = ref([
    {
        label: 'ติดต่อเรา',
        color: 'warning' as const,
        icon: 'i-heroicons-phone'
    },
    {
        label: 'ดูบริการ',
        color: 'neutral' as const,
        variant: 'soft' as const,
        trailingIcon: 'i-lucide-arrow-right'
    }
])
</script>
<template>
    <UContainer>
        <UPageHeader>
            <template #headline>
                <div class="flex items-center gap-2 text-secondary-500 font-bold uppercase tracking-wider mb-2">
                    <UIcon name="i-heroicons-user-group" class="w-5 h-5" />
                    <span>เกี่ยวกับเรา</span>
                </div>
            </template>

            <template #title>
                <h1 class="text-3xl sm:text-4xl font-extrabold  leading-tight">
                    รากฐานบัญชีที่ <span class="text-primary-600">มั่นคง</span> <br />
                    คือจุดเริ่มต้นของธุรกิจที่ <span class="text-warning-500">ยั่งยืน</span>
                </h1>
            </template>

            <template #description>
                <p class="mt-4 text-lg text-gray-600 max-w-2xl">
                    ที่ <strong class="text-success-500">LMB ACCOUNTING PLUS</strong> เราไม่ได้ทำหน้าที่แค่บันทึกตัวเลข
                    แต่เราคือที่ปรึกษาที่พร้อมดูแลคุณตั้งแต่ก้าวแรกของการจดทะเบียน ไปจนถึงการวางแผนภาษีและปิดงบการเงิน
                    เพื่อให้คุณมีเวลาโฟกัสกับการบริหารธุรกิจได้อย่างเต็มที่
                </p>
            </template>
        </UPageHeader>

        <!-- Stats Section -->


        <!-- Vision Section -->
        <UPageSection title="วิสัยทัศน์ของเรา" headline="Vision" icon="i-heroicons-light-bulb" orientation="horizontal">
            <NuxtImg src="https://picsum.photos/id/48/800/600" alt="Vision"
                class="object-cover w-full h-[350px] rounded-2xl shadow-lg" />
            <template #description>
                <div class="space-y-4 text-muted">
                    <p class="text-lg">
                        มุ่งสู่การเป็น <strong class="text-secondary">ผู้นำด้านบริการบัญชีดิจิทัล</strong> ที่ทันสมัย
                    </p>
                    <p>
                        สนับสนุนผู้ประกอบการไทยให้มีระบบการเงินที่เข้มแข็ง โปร่งใส และสามารถแข่งขันได้ในระดับสากล
                    </p>
                    <p>
                        ด้วยเทคโนโลยี Cloud Accounting และระบบดิจิทัล เราพร้อมพาธุรกิจของคุณก้าวสู่อนาคต
                    </p>
                </div>
            </template>
        </UPageSection>

        <!-- Mission Section -->
        <UPageSection title="พันธกิจของเรา" headline="Mission" icon="i-heroicons-heart" orientation="horizontal">
            <NuxtImg src="https://picsum.photos/id/20/800/600" alt="Mission"
                class="object-cover w-full h-[350px] rounded-2xl shadow-lg" />
            <template #description>
                <div class="space-y-4 text-muted">
                    <p class="text-lg">
                        เราก่อตั้งขึ้นด้วยความตั้งใจที่จะเป็น <strong class="text-warning">"คู่คิดทางธุรกิจ"</strong>
                        ของผู้ประกอบการ SME ทุกราย
                    </p>
                    <p>
                        เราเข้าใจดีว่าการทำบัญชีและเรื่องภาษีอาจเป็นเรื่องที่ซับซ้อนสำหรับผู้ประกอบการ
                        เราจึงมุ่งมั่นที่จะทำให้เรื่องเหล่านี้เป็นเรื่องง่ายสำหรับคุณ
                    </p>
                    <p>
                        ด้วยทีมงานมืออาชีพที่มีประสบการณ์ เราพร้อมดูแลงานบัญชี ภาษี
                        และจดทะเบียนธุรกิจให้คุณอย่างครบวงจร
                    </p>
                </div>
            </template>
        </UPageSection>

        <!-- Values Section -->
        <section class="py-12 lg:py-16">
            <div class="text-center mb-12">
                <h2 class="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                    ค่านิยม <span class="text-warning">ที่เรายึดมั่น</span>
                </h2>
                <p class="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                    หลักการที่เราใช้ในการให้บริการลูกค้าทุกราย
                </p>
            </div>
            <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div v-for="value in values" :key="value.title"
                    class="p-6 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                    <div
                        :class="`w-14 h-14 bg-${value.color}-100 dark:bg-${value.color}-900/30 rounded-xl flex items-center justify-center mb-4`">
                        <UIcon :name="value.icon" :class="`w-7 h-7 text-${value.color}`" />
                    </div>
                    <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">{{ value.title }}</h3>
                    <p class="text-sm text-gray-600 dark:text-gray-400">{{ value.description }}</p>
                </div>
            </div>
        </section>

        <!-- Timeline Section -->
        <section class="py-12 lg:py-16">
            <div class="text-center mb-12">
                <h2 class="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                    เส้นทาง <span class="text-success">ของเรา</span>
                </h2>
            </div>
            <div class="relative">
                <div
                    class="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-primary-200 dark:bg-primary-800">
                </div>
                <div class="space-y-12">
                    <div v-for="(milestone, index) in milestones" :key="milestone.year" class="relative">
                        <div :class="['flex items-center gap-8', index % 2 === 0 ? 'flex-row' : 'flex-row-reverse']">
                            <div class="w-1/2" :class="index % 2 === 0 ? 'text-right' : 'text-left'">
                                <p class="text-2xl font-bold text-primary-600 dark:text-primary-400">{{ milestone.year
                                }}
                                </p>
                                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">{{ milestone.title }}
                                </h3>
                                <p class="text-sm text-gray-600 dark:text-gray-400">{{ milestone.description }}</p>
                            </div>
                            <div
                                class="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-600 rounded-full border-4 border-white dark:border-gray-900">
                            </div>
                            <div class="w-1/2"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Team Section -->
        <section class="py-12 lg:py-16">
            <div class="text-center mb-12">
                <h2 class="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                    ทีมงาน <span class="text-secondary">ของเรา</span>
                </h2>
                <p class="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                    ผู้เชี่ยวชาญที่พร้อมดูแลธุรกิจของคุณ
                </p>
            </div>
            <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                <div v-for="member in team" :key="member.name"
                    class="text-center p-8 bg-gray-50 dark:bg-gray-800 rounded-2xl hover:shadow-lg transition-shadow">
                    <div
                        class="w-20 h-20 mx-auto mb-4 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center">
                        <UIcon :name="member.avatar" class="w-10 h-10 text-primary-600 dark:text-primary-400" />
                    </div>
                    <h3 class="text-lg font-semibold text-gray-900 dark:text-white">{{ member.name }}</h3>
                    <p class="text-sm text-primary-600 dark:text-primary-400 mb-2">{{ member.role }}</p>
                    <p class="text-sm text-gray-600 dark:text-gray-400">{{ member.description }}</p>
                </div>
            </div>
        </section>

        <UPageCTA title="พร้อมให้เราดูแลบัญชีธุรกิจคุณ?"
            description="ปรึกษาฟรี! ไม่มีค่าใช้จ่าย รับข้อเสนอพิเศษสำหรับลูกค้าใหม่วันนี้" variant="soft"
            :links="links" />

    </UContainer>
</template>