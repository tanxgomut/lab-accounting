<script setup lang="ts">

useSeoMeta({
    title: 'บริการของเรา - LMB Accounting Plus',
    description: 'บริการจดทะเบียนบริษัท รับทำบัญชี ยื่นภาษี ปิดงบการเงิน ตรวจสอบบัญชี ครบวงจร',
    ogTitle: 'บริการของเรา - LMB Accounting Plus',
    ogDescription: 'บริการจดทะเบียนบริษัท รับทำบัญชี ยื่นภาษี ปิดงบการเงิน ตรวจสอบบัญชี ครบวงจร',
})

const links = ref([
    {
        label: 'ขอใบเสนอราคา',
        to: 'https://line.me/ti/p/~lee_lmbaudit',
        target: '_blank',
        icon: 'i-heroicons-chat-bubble-left-right',
        size: 'xl' as const,
        color: 'gray' as any,
        variant: 'solid' as const,
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
])

const features = ref([
    {
        title: 'จดทะเบียนธุรกิจ',
        description: 'บริการจดทะเบียนจัดตั้งนิติบุคคล เปลี่ยนแปลงข้อมูล และจดเลิกกิจการ ครบวงจร',
        icon: 'i-heroicons-document-text',
    },
    {
        title: 'รับทำบัญชีและภาษี',
        description: 'ปิดงบการเงินรายเดือน/รายปี ยื่นภาษี และวางแผนภาษีอย่างถูกต้อง',
        icon: 'i-heroicons-calculator',
        color: 'primary'
    },
    {
        title: 'งาน HR และประกันสังคม',
        description: 'จดขึ้นทะเบียนนายจ้าง งานทะเบียนประกันสังคม ทำสลิปเงินเดือน',
        icon: 'i-heroicons-scale'
    }
])

const registrationServices = [
    {
        title: 'จดบริษัทออนไลน์',
        description: 'สะดวกรวดเร็ว ผ่านระบบ e-Registration',
        icon: 'i-heroicons-computer-desktop'
    },
    {
        title: 'จดบริษัทแบบมือ',
        description: 'ดำเนินการยื่นเอกสารกับกรมพัฒนาธุรกิจการค้า',
        icon: 'i-heroicons-document-text'
    },
    {
        title: 'จดเลิกกิจการ',
        description: 'ดำเนินการเลิกและชำระบัญชีครบวงจร',
        icon: 'i-heroicons-x-circle'
    },
    {
        title: 'จดภาษีมูลค่าเพิ่ม',
        description: 'จดทะเบียน VAT ถูกต้องตามกฎหมาย',
        icon: 'i-heroicons-receipt-percent'
    },
    {
        title: 'แก้ไขข้อมูลนิติบุคคล',
        description: 'เปลี่ยนแปลงกรรมการ อำนาจ หรือชื่อบริษัท',
        icon: 'i-heroicons-pencil-square'
    },
    {
        title: 'ย้ายที่อยู่นิติบุคคล',
        description: 'แจ้งย้ายสำนักงาน ย้ายข้ามเขต/จังหวัด',
        icon: 'i-heroicons-map-pin'
    },
    {
        title: 'แปรสภาพห้างหุ้นส่วน',
        description: 'เปลี่ยนห้างหุ้นส่วนเป็นบริษัทจำกัด',
        icon: 'i-heroicons-arrow-path'
    }
]

const accountingServices = [
    {
        title: 'รับทำบัญชี',
        description: 'บันทึกบัญชีรายเดือนตามมาตรฐาน',
        icon: 'i-heroicons-book-open'
    },
    {
        title: 'ปิดงบการเงินประจำปี',
        description: 'จัดทำงบการเงินส่งสรรพากรและพาณิชย์',
        icon: 'i-heroicons-chart-pie'
    },
    {
        title: 'ปิดงบการเงินย้อนหลัง',
        description: 'เคลียร์งบค้างปี จัดการปัญหางบเก่า',
        icon: 'i-heroicons-clock'
    }
]

const hrServices = [
    {
        title: 'จดขึ้นทะเบียนนายจ้าง',
        description: 'ขึ้นทะเบียนกองทุนประกันสังคม',
        icon: 'i-heroicons-building-library'
    },
    {
        title: 'งานทะเบียนประกันสังคม',
        description: 'แจ้งเข้า-ออกลูกจ้าง ส่งเงินสมทบ',
        icon: 'i-heroicons-identification'
    },
    {
        title: 'ทำสลิปเงินเดือน',
        description: 'จัดทำ Payroll และสลิปคาร์บอน/E-slip',
        icon: 'i-heroicons-banknotes'
    }
]

const workflowSteps = [
    {
        title: '1. ปรึกษาเบื้องต้นฟรี',
        description: 'ติดต่อเราเพื่อให้ข้อมูลธุรกิจเบื้องต้น ทีมงานจะวิเคราะห์และแนะนำบริการที่เหมาะสม',
        icon: 'i-heroicons-chat-bubble-left-right'
    },
    {
        title: '2. รับใบเสนอราคา',
        description: 'เราจัดทำใบเสนอราคาที่ชัดเจน โปร่งใส ไม่มีค่าใช้จ่ายแอบแฝง ให้คุณพิจารณา',
        icon: 'i-heroicons-document-text'
    },
    {
        title: '3. เริ่มงานทันที',
        description: 'เมื่อตกลงจ้างงาน เราจะส่งรายการเอกสารที่ต้องเตรียมและเริ่มดำเนินงานทันที',
        icon: 'i-heroicons-rocket-launch'
    },
    {
        title: '4. ส่งมอบงาน',
        description: 'ส่งมอบงานถูกต้อง ครบถ้วน ตรงเวลา พร้อมอธิบายรายละเอียดให้คุณเข้าใจ',
        icon: 'i-heroicons-check-badge'
    }
]

const items = [
    '/images/content/03.jpg',
    '/images/content/06.jpg',
    '/images/content/07.jpg',
    '/images/place/02.jpg',
    '/images/place/03.jpg',
    '/images/place/04.jpg',
    '/images/place/05.jpg',
    '/images/place/06.jpg',
]

// สถิติ
const stats = [
    { value: '20+', label: 'ปี ประสบการณ์', icon: 'i-heroicons-calendar', color: 'secondary' },
    { value: '500+', label: 'ลูกค้าที่ไว้วางใจ', icon: 'i-heroicons-users', color: 'secondary' },
    { value: '1,000+', label: 'ล้าน บริษัทจดทะเบียน', icon: 'i-heroicons-building-office', color: 'secondary' },
    { value: '100%', label: 'ความพึงพอใจ', icon: 'i-heroicons-heart', color: 'secondary' },
]
</script>

<template>

    <section class="relative overflow-hidden">
        <div class="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            <div
                class="absolute top-0 right-0 w-[600px] h-[600px] bg-success-500/30 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-screen opacity-50 animate-pulse">
            </div>
            <div
                class="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary-500/30 rounded-full blur-[100px] mix-blend-multiply dark:mix-blend-screen opacity-50 animate-pulse delay-1000">
            </div>
            <div
                class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/40 dark:bg-gray-900/40 blur-[80px] rounded-full">
            </div>
        </div>
        <UPageSection title="บริการหลักของเรา"
            description="LMB Accounting Plus ให้บริการครอบคลุมทุกด้าน เพื่อให้คุณโฟกัสกับการเติบโตของธุรกิจได้อย่างเต็มที่"
            :links="links" :features="features" orientation="horizontal">

            <template #title>
                <h1 class="text-6xl text-primary">บริการหลักของเรา
                </h1>
            </template>
            <NuxtImg src="/images/content/05.jpg" alt="บริการหลักของเรา"
                class="w-full h-auto object-contain rounded-xl" />
        </UPageSection>
    </section>

    <ContentStats />


    <div class="py-12 bg-gray-50 dark:bg-gray-900/50 relative overflow-hidden">

        <UContainer class="relative z-10">
            <UPageHeader>
                <template #title>
                    <div class="flex items-center gap-3 mb-4">
                        <div class="p-2 rounded-lg bg-success-100 dark:bg-success-900/30">
                            <UIcon name="i-heroicons-document-text" class="w-8 h-8 text-success" />
                        </div>
                        <h1 class="text-2xl sm:text-3xl font-extrabold leading-tight text-gray-900 dark:text-white">
                            จดทะเบียนธุรกิจ <span
                                class="text-success text-xl block sm:inline font-normal mt-1 sm:mt-0">Business
                                Registration</span>
                        </h1>
                    </div>
                </template>
            </UPageHeader>

            <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                <div v-for="(service, index) in registrationServices" :key="index"
                    class="group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 p-6  hover:shadow-2xl hover:shadow-success-500/10 transition-all duration-300 hover:-translate-y-1 border border-gray-100 dark:border-gray-700">
                    <div class="relative z-10">
                        <div class=" p-2 rounded-xl w-fit group-hover:scale-110 transition-transform duration-300">
                            <UIcon :name="service.icon" class="w-6 h-6 text-success" />
                        </div>
                        <h3
                            class="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-success transition-colors">
                            {{ service.title }}
                        </h3>
                        <p class="text-gray-600 dark:text-gray-300 leading-relaxed text-sm">
                            {{ service.description }}
                        </p>
                    </div>
                </div>
            </div>
        </UContainer>
    </div>

    <div class="py-12 relative overflow-hidden ">
        <!-- Decorative Background Icon -->


        <UContainer class="relative z-10">
            <UPageHeader>
                <template #title>
                    <div class="flex items-center gap-3 mb-4">
                        <div class="p-2 rounded-lg bg-primary-100 dark:bg-primary-900/30">
                            <UIcon name="i-heroicons-calculator" class="w-8 h-8 text-primary" />
                        </div>
                        <h1 class="text-2xl sm:text-3xl font-extrabold leading-tight text-gray-900 dark:text-white">
                            รับทำบัญชีและภาษี <span
                                class="text-primary text-xl block sm:inline font-normal mt-1 sm:mt-0">Accounting &
                                Tax</span>
                        </h1>
                    </div>
                </template>
            </UPageHeader>

            <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                <div v-for="(service, index) in accountingServices" :key="index"
                    class="group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 p-6  hover:shadow-2xl hover:shadow-primary-500/10 transition-all duration-300 hover:-translate-y-1 border border-gray-100 dark:border-gray-700">
                    <div class="relative z-10">
                        <div class=" p-2 rounded-xl w-fit group-hover:scale-110 transition-transform duration-300">
                            <UIcon :name="service.icon" class="w-6 h-6 text-primary" />
                        </div>
                        <h3
                            class="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary transition-colors">
                            {{ service.title }}
                        </h3>
                        <p class="text-gray-600 dark:text-gray-300 leading-relaxed text-sm">
                            {{ service.description }}
                        </p>
                    </div>
                </div>
            </div>
        </UContainer>
    </div>

    <div class="py-12 bg-gray-50 dark:bg-gray-900/50 relative overflow-hidden">
        <!-- Decorative Background Icon -->

        <UContainer class="relative z-10">
            <UPageHeader>
                <template #title>
                    <div class="flex items-center gap-3 mb-4">
                        <div class="p-2 rounded-lg bg-secondary-100 dark:bg-secondary-900/30">
                            <UIcon name="i-heroicons-user-group" class="w-8 h-8 text-secondary" />
                        </div>
                        <h1 class="text-2xl sm:text-3xl font-extrabold leading-tight text-gray-900 dark:text-white">
                            งาน HR และประกันสังคม <span
                                class="text-secondary text-xl block sm:inline font-normal mt-1 sm:mt-0">HR & SSO</span>
                        </h1>
                    </div>
                </template>
            </UPageHeader>

            <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                <div v-for="(service, index) in hrServices" :key="index"
                    class="group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 p-6  hover:shadow-2xl hover:shadow-secondary-500/10 transition-all duration-300 hover:-translate-y-1 border border-gray-100 dark:border-gray-700">
                    <div class="relative z-10">
                        <div class="p-2 rounded-xl w-fit group-hover:scale-110 transition-transform duration-300">
                            <UIcon :name="service.icon" class="w-6 h-6 text-secondary" />
                        </div>
                        <h3
                            class="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-secondary transition-colors">
                            {{ service.title }}
                        </h3>
                        <p class="text-gray-600 dark:text-gray-300 leading-relaxed text-sm">
                            {{ service.description }}
                        </p>
                    </div>
                </div>
            </div>
        </UContainer>
    </div>

    <div class="py-12 relative overflow-hidden">
        <UContainer>
            <div class="text-center mb-12">
                <h2 class="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                    ภาพบรรยากาศ <span class="text-primary">การทำงาน</span>
                </h2>
                <div class="w-20 h-1 bg-primary-500 mx-auto rounded-full"></div>
            </div>

            <UCarousel v-slot="{ item }" :items="items" loop dots :arrows="false" auto-scroll
                :ui="{ item: 'basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 snap-start' }"
                class="rounded-xl overflow-hidden">
                <div class="p-2">
                    <img :src="item"
                        class="w-full h-64 object-cover rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
                        draggable="false">
                </div>
            </UCarousel>
        </UContainer>
    </div>

    <section class="py-16 lg:py-24 bg-gray-50 dark:bg-gray-950">
        <UContainer>
            <div class="text-center mb-16">
                <h2 class="text-3xl font-bold  mb-4">
                    ขั้นตอนการทำงาน <span class="text-primary">ที่เรียบง่าย</span>
                </h2>
                <p class="text-lg text-muted max-w-2xl mx-auto">
                    เริ่มต้นใช้งานบริการของเราได้ง่ายๆ เพียง 4 ขั้นตอน ไม่ยุ่งยาก
                </p>
            </div>

            <div class="relative">
                <div class="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-gray-800"></div>

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
                    <div v-for="(step, index) in workflowSteps" :key="index" class="relative group pt-4 lg:pt-0">
                        <div class="flex flex-col items-center text-center relative z-10">
                            <div
                                class="w-24 h-24 rounded-full bg-gray-800 border-4 border-gray-900 group-hover:border-primary-900/50 flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 shadow-sm">
                                <UIcon :name="step.icon"
                                    class="w-10 h-10 text-secondary group-hover:text-primary transition-colors duration-300" />
                            </div>

                            <h3 class="text-xl font-bold text-secondary mb-3 transition-colors">
                                {{ step.title }}
                            </h3>
                            <p class="text-muted leading-relaxed text-sm px-2">
                                {{ step.description }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="mt-16 text-center">
                <UButton to="/contact" size="xl" color="primary" trailing
                    class="px-8 font-semibold rounded-full shadow-lg shadow-primary-500/30 hover:shadow-primary-500/40 hover:-translate-y-1 transition-all">
                    ติดต่อเราเลย
                </UButton>
            </div>
        </UContainer>
    </section>
</template>