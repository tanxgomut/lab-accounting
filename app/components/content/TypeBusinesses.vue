<script setup lang="ts">
const businesses = [
    { label: 'ซื้อมาขายไป', icon: 'i-noto-shopping-cart' },
    { label: 'ธุรกิจบริการ', icon: 'i-noto-briefcase' },
    { label: 'หมู่บ้านจัดสรร/นิติบุคคล', icon: 'i-noto-house-with-garden' },
    { label: 'ขนส่งเอกชน', icon: 'i-noto-delivery-truck' },
    { label: 'รับเหมาก่อสร้าง', icon: 'i-noto-construction-worker' },
    { label: 'ขายของออนไลน์', icon: 'i-noto-shopping-bags' },
    { label: 'สำนักงานกฎหมาย', icon: 'i-noto-balance-scale' },
    { label: 'ดารา/ศิลปิน/อินฟลูเอนเซอร์', icon: 'i-noto-man-artist' },
    { label: 'ผลิตสื่อสิ่งพิมพ์/หนังสือ', icon: 'i-noto-newspaper' },
    { label: 'พัฒนาเทคโนโลยี/แอปฯ', icon: 'i-noto-laptop' },
    { label: 'ธุรกิจการผลิต', icon: 'i-noto-factory' },
    { label: 'ธุรกิจแฟรนไชส์', icon: 'i-noto-office-building' },
]
</script>

<template>
    <UContainer class="py-20">
        <div class="text-center mb-10">
            <span class="text-secondary font-medium tracking-wider uppercase text-sm mb-2 block">Our Clients</span>
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">ประเภทธุรกิจลูกค้าของเรา</h2>
        </div>

        <!-- Radial Layout -->
        <div class="relative max-w-4xl mx-auto">
            <!-- Center Logo -->
            <div
                class="flex justify-center mb-8 md:mb-0 md:absolute md:top-1/2 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 z-10">
                <div
                    class="w-40 h-40 md:w-48 md:h-48 bg-white dark:bg-gray-800 rounded-full shadow-xl flex items-center justify-center border-4 border-primary/20">
                    <NuxtImg src="/logo.png" alt="LMB Accounting Plus"
                        class="w-28 h-28 md:w-36 md:h-36 object-contain" />
                </div>
            </div>

            <!-- Business Types Grid (Mobile) -->
            <div class="grid grid-cols-2 sm:grid-cols-3 gap-4 md:hidden">
                <div v-for="(business, index) in businesses" :key="index"
                    class="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-center group">
                    <div
                        class="w-12 h-12 mx-auto mb-3 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                        <UIcon :name="business.icon"
                            class="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                    </div>
                    <p class="text-sm  text-gray-700 dark:text-gray-300">{{ business.label }}</p>
                </div>
            </div>

            <!-- Business Types Radial (Desktop) -->
            <div class="hidden md:block relative h-[700px]">
                <!-- Connecting Lines from Center -->
                <template v-for="(_, index) in businesses" :key="'line-' + index">
                    <div class="absolute left-1/2 top-1/2 origin-top-left" :style="{
                        width: `${Math.sqrt(Math.pow(320 * Math.cos((index * 30 - 90) * Math.PI / 180), 2) + Math.pow(280 * Math.sin((index * 30 - 90) * Math.PI / 180), 2))}px`,
                        height: '2px',
                        transform: `rotate(${Math.atan2(280 * Math.sin((index * 30 - 90) * Math.PI / 180), 320 * Math.cos((index * 30 - 90) * Math.PI / 180)) * 180 / Math.PI}deg)`,
                        background: 'repeating-linear-gradient(90deg, #93c5fd 0, #93c5fd 8px, transparent 8px, transparent 14px)'
                    }">
                    </div>
                </template>

                <!-- Business Items positioned in circle -->
                <div v-for="(business, index) in businesses" :key="index"
                    class="absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 hover:scale-110"
                    :style="{
                        left: `calc(50% + ${320 * Math.cos((index * 30 - 90) * Math.PI / 180)}px)`,
                        top: `calc(50% + ${280 * Math.sin((index * 30 - 90) * Math.PI / 180)}px)`
                    }">
                    <!-- Card -->
                    <div
                        class="relative z-10 bg-white dark:bg-gray-800 rounded-xl p-3 shadow-lg hover:shadow-xl text-center w-32 group cursor-pointer">
                        <div
                            class="w-10 h-10 mx-auto mb-2 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center group-hover:bg-primary transition-all duration-300">
                            <UIcon :name="business.icon"
                                class="w-5 h-5 text-primary group-hover:text-white transition-colors" />
                        </div>
                        <p class="text-md font-medium text-gray-700 dark:text-gray-300 leading-tight">{{ business.label
                        }}</p>
                    </div>
                </div>
            </div>
        </div>
    </UContainer>
</template>