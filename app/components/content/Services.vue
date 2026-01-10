<script setup lang="ts">
const serviceGroups = [
    {
        name: 'งานจดทะเบียน',
        description: 'Registration',
        color: 'success',
        icon: 'i-heroicons-building-office',
        items: [
            { title: '1. จดบริษัทออนไลน์', description: 'สะดวกรวดเร็ว ผ่านระบบ e-Registration', icon: 'i-heroicons-computer-desktop' },
            { title: '2. จดบริษัทแบบมือ', description: 'ดำเนินการยื่นเอกสารกับกรมพัฒนาธุรกิจการค้า', icon: 'i-heroicons-document-text' },
            { title: '3. จดเลิกกิจการ', description: 'ดำเนินการเลิกและชำระบัญชีครบวงจร', icon: 'i-heroicons-x-circle' },
            { title: '4. จดภาษีมูลค่าเพิ่ม', description: 'จดทะเบียน VAT ถูกต้องตามกฎหมาย', icon: 'i-heroicons-receipt-percent' },
            { title: '5. แก้ไขข้อมูลนิติบุคคล', description: 'เปลี่ยนแปลงกรรมการ อำนาจ หรือชื่อบริษัท', icon: 'i-heroicons-pencil-square' },
            { title: '6. ย้ายที่อยู่นิติบุคคล', description: 'แจ้งย้ายสำนักงาน ย้ายข้ามเขต/จังหวัด', icon: 'i-heroicons-map-pin' },
            { title: '7. แปรสภาพห้างหุ้นส่วน', description: 'เปลี่ยนห้างหุ้นส่วนเป็นบริษัทจำกัด', icon: 'i-heroicons-arrow-path' }
        ]
    },
    {
        name: 'งานบัญชีและปิดงบ',
        description: 'Accounting',
        color: 'warning',
        icon: 'i-heroicons-calculator',
        items: [
            { title: '8. รับทำบัญชี', description: 'บันทึกบัญชีรายเดือนตามมาตรฐาน', icon: 'i-heroicons-book-open' },
            { title: '9. ปิดงบการเงินประจำปี', description: 'จัดทำงบการเงินส่งสรรพากรและพาณิชย์', icon: 'i-heroicons-chart-pie' },
            { title: '10. ปิดงบการเงินย้อนหลัง', description: 'เคลียร์งบค้างปี จัดการปัญหางบเก่า', icon: 'i-heroicons-clock' }
        ]
    },
    {
        name: 'งาน HR และประกันสังคม',
        description: 'HR & SSO',
        color: 'primary',
        icon: 'i-heroicons-user-group',
        items: [
            { title: '11. จดขึ้นทะเบียนนายจ้าง', description: 'ขึ้นทะเบียนกองทุนประกันสังคม', icon: 'i-heroicons-building-library' },
            { title: '12. งานทะเบียนประกันสังคม', description: 'แจ้งเข้า-ออกลูกจ้าง ส่งเงินสมทบ', icon: 'i-heroicons-identification' },
            { title: '13. ทำสลิปเงินเดือน', description: 'จัดทำ Payroll และสลิปคาร์บอน/E-slip', icon: 'i-heroicons-banknotes' }
        ]
    }
]

const workflowSteps = [
    {
        title: '1. ติดต่อเรา',
        description: 'แจ้งความต้องการหรือปัญหาที่ต้องการแก้ไข',
        icon: 'i-heroicons-chat-bubble-left-right'
    },
    {
        title: '2. เสนอราคา',
        description: 'ประเมินค่าบริการและแจ้งรายละเอียด',
        icon: 'i-heroicons-document-text'
    },
    {
        title: '3. ดำเนินการ',
        description: 'เริ่มงานทันที ติดตามสถานะได้ตลอด',
        icon: 'i-heroicons-rocket-launch'
    },
    {
        title: '4. ส่งมอบงาน',
        description: 'ส่งมอบเอกสารและสรุปผลการดำเนินงาน',
        icon: 'i-heroicons-check-badge'
    }
]
</script>

<template>

    <div class="py-20 bg-default  relative overflow-hidden">

        <div class="absolute inset-0 z-0 opacity-[0.03] dark:opacity-[0.1]"
            style="background-image: radial-gradient(#6b7280 1px, transparent 1px); background-size: 32px 32px;">
        </div>

        <UContainer class="relative z-10">
            <div class="text-center mb-20 max-w-3xl mx-auto">
                <div
                    class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-50 dark:bg-primary-900/20 border border-primary-100 dark:border-primary-800 text-primary-600 dark:text-primary-400 text-sm font-medium mb-6">
                    <span class="relative flex h-2 w-2">
                        <span
                            class="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                        <span class="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
                    </span>
                    Professional Services
                </div>

                <h2 class="text-4xl md:text-5xl font-bold  mb-6 tracking-tight">
                    บริการบัญชี <span class="relative whitespace-nowrap text-primary-600">
                        <svg aria-hidden="true" viewBox="0 0 418 42"
                            class="absolute top-2/3 left-0 h-[0.58em] w-full fill-primary-200/50 dark:fill-primary-800/50"
                            preserveAspectRatio="none">
                            <path
                                d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C46.169 14.6 21.418 21.12 11.326 27.889c-9.412 5.236-8.257 8.986 6.31 9.834 14.567.997 45.422-5.454 86.81-22.31C164.57 2.054 227.604-1.298 274.63 2.096c47.027 3.394 100.222 17.615 119.524 29.742 19.303 12.126 18.067 15.018-12.784 10.428-30.852-4.59-86.744-14.868-129.563-14.502-42.819.366-86.726 15.706-92.68 15.939-5.953.232-23.774-6.388-34.503-12.871C113.885 24.35 152.067 12.986 203.371.916Z">
                            </path>
                        </svg>
                        <span class="relative">ครบวงจร</span>
                    </span>
                </h2>
                <p class="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                    เราผสานความเชี่ยวชาญทางบัญชีเข้ากับเทคโนโลยี เพื่อให้ธุรกิจของคุณเติบโตได้อย่างมั่นคง ถูกต้อง
                    และตรวจสอบได้
                </p>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 auto-rows-[minmax(180px,auto)]">

                <div v-if="serviceGroups[0]"
                    class="lg:col-span-7 bg-white dark:bg-gray-900 rounded-4xl p-8 lg:p-10  shadow-xl shadow-gray-200/50 dark:shadow-none hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-500 group overflow-hidden relative">
                    <!-- <div
                        class="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-linear-to-br from-emerald-50 to-emerald-100 dark:from-emerald-900/20 dark:to-transparent rounded-full opacity-50 blur-3xl">
                    </div> -->

                    <div class="relative z-10">
                        <div class="flex items-center gap-5 mb-8">
                            <div
                                class="w-14 h-14 rounded-2xl bg-emerald-50 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shadow-sm group-hover:scale-110 transition-transform duration-500">
                                <UIcon name="i-heroicons-building-office" class="w-8 h-8" />
                            </div>
                            <div>
                                <h3 class="text-2xl font-bold text-gray-900 dark:text-white">งานจดทะเบียน</h3>
                                <div
                                    class="flex items-center gap-2 text-sm font-medium text-emerald-600 dark:text-emerald-400 mt-1">
                                    <span>Registration Service</span>
                                    <span class="w-1 h-1 rounded-full bg-emerald-600"></span>
                                    <span>Fast & Easy</span>
                                </div>
                            </div>
                        </div>

                        <div class="grid sm:grid-cols-2 gap-x-8 gap-y-6">
                            <div v-for="(item, i) in serviceGroups[0]?.items" :key="i"
                                class="flex items-start gap-3 group/item p-2 -ml-2 rounded-xl hover:bg-emerald-50/50 dark:hover:bg-emerald-900/10 transition-colors">
                                <div
                                    class="mt-1 p-1 rounded bg-emerald-100/50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 group-hover/item:bg-emerald-500 group-hover/item:text-white transition-all">
                                    <UIcon :name="item.icon" class="w-4 h-4" />
                                </div>
                                <div>
                                    <h4
                                        class="font-bold text-gray-900 dark:text-white text-sm group-hover/item:text-emerald-700 dark:group-hover/item:text-emerald-300 transition-colors">
                                        {{ item.title }}</h4>
                                    <p class="text-xs text-gray-500 mt-0.5">{{ item.description }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Accounting Section (Tall Block) - Spans 5 cols -->
                <div v-if="serviceGroups[1]"
                    class="lg:col-span-5 bg-white dark:bg-gray-900 rounded-4xl p-8 lg:p-10 relative overflow-hidden group shadow-xl shadow-gray-200/50 dark:shadow-none hover:shadow-2xl hover:shadow-secondary-500/10 transition-all duration-500 ">
                    <!-- <div
                        class="absolute bottom-0 left-0 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3 group-hover:bg-orange-500/10 transition-colors duration-500">
                    </div> -->

                    <div class="relative z-10 h-full flex flex-col justify-between">
                        <div class="flex items-center justify-between mb-8">
                            <div class="flex items-center gap-4">
                                <div
                                    class="w-14 h-14 rounded-2xl bg-secondary-50 dark:bg-secondary-900/30 flex items-center justify-center text-secondary-600 dark:text-secondary-400 group-hover:scale-110 transition-transform duration-500">
                                    <UIcon name="i-heroicons-calculator" class="w-8 h-8" />
                                </div>
                                <div>
                                    <h3 class="text-2xl font-bold text-gray-900 dark:text-white">บัญชีและภาษี</h3>
                                    <p class="text-secondary-600 dark:text-secondary-400 text-sm font-medium">Accounting
                                        & Tax
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div class="space-y-4">
                            <div v-for="(item, i) in serviceGroups[1]?.items" :key="i"
                                class="flex items-start gap-4 p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50 hover:bg-secondary-50 dark:hover:bg-secondary-900/20 transition-colors group/item cursor-default border border-gray-100 dark:border-gray-800 hover:border-secondary-100 dark:hover:border-secondary-900/30">
                                <div
                                    class="mt-1 p-1.5 rounded-lg bg-white dark:bg-gray-800 text-gray-400 group-hover/item:text-secondary-500 shadow-sm transition-colors">
                                    <UIcon :name="item.icon" class="w-5 h-5" />
                                </div>
                                <div>
                                    <h4
                                        class="font-bold text-gray-900 dark:text-white group-hover/item:text-secondary-600 dark:group-hover/item:text-secondary-400 transition-colors">
                                        {{ item.title }}</h4>
                                    <p class="text-sm text-gray-500 mt-1">{{ item.description }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div v-if="serviceGroups[2]"
                    class="lg:col-span-12 bg-white dark:bg-gray-900 rounded-4xl p-8 lg:p-10  shadow-xl shadow-gray-200/50 dark:shadow-none hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 group overflow-hidden relative">
                    <!-- <div class="absolute -left-10 bottom-0 w-40 h-40 bg-blue-400/10 rounded-full blur-3xl"></div>
                    <div class="absolute right-0 top-0 w-64 h-64 bg-cyan-400/10 rounded-full blur-3xl"></div> -->

                    <div class="relative z-10 grid lg:grid-cols-[300px_1fr] gap-10 items-center">
                        <div class="text-center lg:text-left">
                            <div
                                class="inline-flex p-3 rounded-2xl bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 mb-4 group-hover:scale-110 transition-transform duration-500">
                                <UIcon name="i-heroicons-user-group" class="w-8 h-8" />
                            </div>
                            <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">HR & ประกันสังคม</h3>
                            <p class="text-gray-500 dark:text-gray-400 text-sm mb-6">
                                ดูแลสวัสดิการพนักงานและงานประกันสังคมครบวงจร ถูกต้อง รวดเร็ว</p>
                            <UButton color="primary" variant="soft" to="/services" class="hidden lg:inline-flex">
                                ดูรายละเอียด
                                <UIcon name="i-heroicons-arrow-right" class="ml-1" />
                            </UButton>
                        </div>

                        <div class="grid sm:grid-cols-3 gap-6">
                            <div v-for="(item, i) in serviceGroups[2]?.items" :key="i"
                                class="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-gray-100 dark:border-gray-700 group/hr text-center lg:text-left">
                                <div
                                    class="w-12 h-12 mx-auto lg:mx-0 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-500 flex items-center justify-center mb-4 group-hover/hr:bg-blue-500 group-hover/hr:text-white transition-colors">
                                    <UIcon :name="item.icon" class="w-6 h-6" />
                                </div>
                                <h4 class="font-bold text-gray-900 dark:text-white mb-1">{{ item.title }}</h4>
                                <p class="text-xs text-gray-500">{{ item.description }}</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </UContainer>
    </div>

    <!-- Process Workflow Section -->
    <div class="py-24 relative overflow-hidden ">
        <UContainer class="relative z-10">
            <div class="max-w-5xl mx-auto">
                <div class="text-center mb-16">
                    <span class="text-secondary-500 font-medium tracking-wider uppercase text-sm mb-2 block">Work
                        Process</span>
                    <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">ขั้นตอนการทำงาน</h2>
                    <p class="text-gray-500 dark:text-gray-400">สะดวกรวดเร็ว โปร่งใส ตรวจสอบได้ทุกขั้นตอน</p>
                </div>

                <div class="relative">
                    <!-- Connecting Line (Desktop) -->
                    <div class="hidden md:block absolute top-8 left-0 w-full h-0.5 bg-gray-100 dark:bg-gray-800 -z-10">
                    </div>

                    <div class="grid md:grid-cols-4 gap-8">
                        <div v-for="(step, index) in workflowSteps" :key="index"
                            class="text-center group relative  pt-4 md:pt-0">
                            <!-- Step Number/Icon -->
                            <div
                                class="w-16 h-16 mx-auto bg-white dark:bg-gray-950 rounded-2xl flex items-center justify-center mb-6 border-2 border-secondary-100 dark:border-success-500 group-hover:border-primary-500 group-hover:scale-110 transition-all duration-300 relative z-10 shadow-sm">
                                <UIcon :name="step.icon"
                                    class="w-8 h-8 text-secondary-400 dark:text-success-500 group-hover:text-primary-500 transition-colors" />
                                <div
                                    class="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-gray-100 dark:bg-gray-800 text-xs font-bold flex items-center justify-center text-gray-500 dark:text-gray-400 group-hover:bg-primary-500 group-hover:text-white transition-colors border border-white dark:border-gray-950">
                                    {{ index + 1 }}
                                </div>
                            </div>

                            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">{{ step.title.split('.')[1]
                                }}</h3>
                            <p class="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{{ step.description }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </UContainer>
    </div>

</template>