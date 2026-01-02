<script setup lang="ts">

useSeoMeta({
    title: 'LMB Accounting Plus - สำนักงานบัญชีครบวงจร',
    description: 'รับทำบัญชี จดทะเบียนบริษัท ยื่นภาษี ตรวจสอบบัญชี ครบวงจร โดยทีมงานมืออาชีพ',
    ogTitle: 'LMB Accounting Plus - สำนักงานบัญชีครบวงจร',
    ogDescription: 'รับทำบัญชี จดทะเบียนบริษัท ยื่นภาษี ตรวจสอบบัญชี ครบวงจร โดยทีมงานมืออาชีพ',
    ogImage: '/og-image.jpg',
    ogUrl: 'https://lmbaccount-law.com',
    twitterCard: 'summary_large_image',
})

// Why Choose Us
const features = [
    {
        name: 'มืออาชีพตัวจริง',
        description: 'ดูแลโดยทีมผู้สอบบัญชีรับอนุญาต (CPA) และนักบัญชีที่มีประสบการณ์สูง',
        icon: 'i-heroicons-academic-cap'
    },
    {
        name: 'เทคโนโลยีทันสมัย',
        description: 'ใช้ Cloud Accounting ให้คุณดูงบการเงินได้ Real-time ทุกที่ทุกเวลา',
        icon: 'i-heroicons-computer-desktop'
    },
    {
        name: 'บริการครบวงจร',
        description: 'One-stop Service ตั้งแต่เริ่มจดทะเบียน จนถึงปิดงบและตรวจสอบบัญชี',
        icon: 'i-heroicons-squares-2x2'
    },
    {
        name: 'ราคาโปร่งใส',
        description: 'ค่าบริการสมเหตุสมผล ชัดเจน ไม่มีค่าใช้จ่ายแอบแฝง สบายใจได้',
        icon: 'i-heroicons-banknotes'
    }
]

// Testimonials
const testimonials = [
    {
        quote: 'บริการดีมากครับ ให้คำปรึกษาละเอียด จัดการเรื่องภาษีได้ดีเยี่ยม ทำให้ผมมีเวลาบริหารงานขายได้เต็มที่',
        author: {
            name: 'คุณธนินทร์',
            job: 'CEO, Tech Startup',
            src: 'https://picsum.photos/id/1005/100/100'
        }
    },
    {
        quote: 'ทีมงาน LMB ดูแลเอาใจใส่ดีมาก ตามงานตลอด ไม่เคยพลาดส่งงบเลย แนะนำเพื่อนให้ใช้บริการต่อแน่นอนค่ะ',
        author: {
            name: 'คุณสุดารัตน์',
            job: 'MD, Import-Export Company',
            src: 'https://picsum.photos/id/338/100/100'
        }
    },
    {
        quote: 'ประทับใจความรวดเร็วและความเป็นมืออาชีพ ช่วยแก้ปัญหาเรื่องโครงสร้างภาษีให้บริษัทเราได้อย่างถูกต้อง',
        author: {
            name: 'คุณวิชัย',
            job: 'Director, Construction Firm',
            src: 'https://picsum.photos/id/64/100/100'
        }
    }
]

// Stats Data
const stats = [
    { label: 'ประสบการณ์', value: '10+', icon: 'i-heroicons-calendar-days', suffix: 'ปี' },
    { label: 'ลูกค้าที่ไว้วางใจ', value: '500+', icon: 'i-heroicons-users' },
    { label: 'ทุนจดทะเบียนรวม', value: '1,000+', icon: 'i-heroicons-banknotes', suffix: 'ล้านบาท' },
    { label: 'ความพึงพอใจ', value: '100%', icon: 'i-heroicons-face-smile' }
]

// Latest Articles Mockup (Replace with actual data fetching later)
const latestArticles = [
    {
        title: 'เตรียมตัวยื่นภาษีปี 2568 มีอะไรใหม่บ้าง?',
        description: 'สรุปการเปลี่ยนแปลงกฎหมายภาษีล่าสุดที่ผู้ประกอบการต้องรู้',
        date: '10 ม.ค. 2025',
        image: 'https://picsum.photos/id/24/800/600',
        badge: { label: 'ภาษี', color: 'warning' }
    },
    {
        title: 'จดทะเบียนบริษัท vs หจก. เลือกแบบไหนดี?',
        description: 'เปรียบเทียบข้อดี-ข้อเสีย เพื่อให้คุณเลือกโครงสร้างธุรกิจที่ใช่',
        date: '5 ม.ค. 2025',
        image: 'https://picsum.photos/id/3/800/600',
        badge: { label: 'บทความทั่วไป', color: 'success' }
    },
    {
        title: '5 เทคนิคจัดการกระแสเงินสดให้คล่องตัว',
        description: 'เคล็ดลับการบริหารเงินหมุนเวียนให้ธุรกิจดำเนินไปอย่างราบรื่น',
        date: '28 ธ.ค. 2024',
        image: 'https://picsum.photos/id/60/800/600',
        badge: { label: 'บัญชี', color: 'secondary' }
    }
]

const items = [
    'https://picsum.photos/640/640?random=1',
    'https://picsum.photos/640/640?random=2',
    'https://picsum.photos/640/640?random=3',
    'https://picsum.photos/640/640?random=4',
    'https://picsum.photos/640/640?random=5',
    'https://picsum.photos/640/640?random=6'
]
</script>

<template>
    <div>
        <!-- 1. Hero Section -->
        <ContentHero />

        <div class="py-20 relative overflow-hidden">
            <UContainer class="relative z-10">
                <div class="grid grid-cols-2 lg:grid-cols-4 gap-8">
                    <div v-for="(stat, index) in stats" :key="index" class="text-center group">
                        <div
                            class="mb-4 inline-flex p-3 rounded-2xl bg-secondary-50 text-secondary-600 group-hover:bg-secondary-600 group-hover:text-white transition-colors duration-300 transform group-hover:scale-110 shadow-sm">
                            <UIcon :name="stat.icon" class="w-8 h-8" />
                        </div>
                        <div class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">{{ stat.value }}
                            <span v-if="stat.suffix" class="text-lg font-normal text-gray-500 dark:text-gray-400">{{
                                stat.suffix
                                }}</span>
                        </div>
                        <div class="text-gray-500 dark:text-gray-400 text-sm font-medium">{{ stat.label }}</div>
                    </div>
                </div>
            </UContainer>
        </div>

        <UContainer class="my-20">
            <UPageLogos title="ได้รับความไว้วางใจจาก" marquee :items="[
                'i-simple-icons-github',
                'i-simple-icons-discord',
                'i-simple-icons-x',
                'i-simple-icons-instagram',
                'i-simple-icons-linkedin',
                'i-simple-icons-facebook'
            ]" />
        </UContainer>


        <ContentServices />

        <!-- 3. Why Choose Us -->
        <div class="py-24 bg-gray-950">
            <UContainer>
                <div class="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
                    <div>
                        <h2 class="text-3xl font-bold text-white mb-6">
                            ทำไมต้องเลือก <span class="text-warning">LMB Accounting Plus</span> ?
                        </h2>
                        <p class="text-lg text-gray-400 mb-8">
                            เราไม่ได้เป็นแค่ผู้ทำบัญชี แต่เป็นพาร์ทเนอร์ที่ช่วยให้คำแนะนำและแก้ไขปัญหาทางธุรกิจของคุณ
                            ด้วยความเชี่ยวชาญและความใส่ใจในทุกรายละเอียด
                        </p>
                        <ul class="space-y-6">
                            <li v-for="feature in features" :key="feature.name" class="flex gap-4">
                                <div
                                    class="shrink-0 w-12 h-12 rounded-xl bg-gray-900 border border-gray-800 flex items-center justify-center">
                                    <UIcon :name="feature.icon" class="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h3 class="font-semibold text-white mb-1">{{ feature.name }}</h3>
                                    <p class="text-sm text-gray-500">{{ feature.description }}</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="mt-12 lg:mt-0 relative">
                        <div
                            class="absolute inset-0 bg-linear-to-tr  from-success-500/90 to-warning-500/90 rounded-2xl transform rotate-1">
                        </div>
                        <UCarousel v-slot="{ item }" :items="items" dots loop :autoplay="{ delay: 2000 }" :ui="{
                            dot: 'w-6 h-1'
                        }">
                            <NuxtImg :src="item" alt="Team working"
                                class="relative rounded-2xl shadow-2xl w-full object-cover h-[400px] md:h-[600px] transition-all duration-500" />
                        </UCarousel>
                    </div>
                </div>
            </UContainer>
        </div>

        <!-- 4. Testimonials & Clients -->
        <ContentTestimonials />

        <!-- 5. Latest Articles -->
        <div class="py-16 ">
            <UContainer>
                <UPageHeader title="บทความล่าสุด" description="อัปเดตความรู้ด้านภาษีและกฎหมายธุรกิจ" :links="[{
                    label: 'ดูบทความทั้งหมด',
                    trailingIcon: 'i-heroicons-arrow-right',
                    to: '/blogs',
                    variant: 'ghost',
                    color: 'neutral'
                }]" class="mb-10" />

                <div class="grid md:grid-cols-3 gap-8">
                    <UBlogPost v-for="(post, index) in latestArticles" :key="index" :title="post.title"
                        :description="post.description" :date="post.date" :image="post.image" :badge="post.badge as any"
                        orientation="vertical" :to="'#'"
                        :ui="{ image: 'group-hover:scale-105 transition-transform duration-500' }" />
                </div>
            </UContainer>
        </div>


        <UContainer class="mt-16">
            <UPageCTA title="พร้อมก้าวสู่ความสำเร็จทางธุรกิจหรือยัง?"
                description="ให้เราดูแลเรื่องบัญชีและภาษี เพื่อให้คุณมีเวลาบริหารธุรกิจได้เต็มที่ ปรึกษาเราได้เลยวันนี้"
                :links="[
                    { label: 'แอดไลน์ปรึกษาฟรี', icon: 'i-simple-icons-line', color: 'success', size: 'xl', to: 'https://line.me/ti/p/@LAB-accounting', target: '_blank' },
                    { label: 'โทรหาเรา', icon: 'i-heroicons-phone', color: 'neutral', variant: 'soft', size: 'xl', to: 'tel:0812345678' }
                ]" variant="solid" />
        </UContainer>

    </div>
</template>
