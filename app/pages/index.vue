<script setup lang="ts">

useSeoMeta({
    title: 'LMB Accounting Plus - สำนักงานบัญชีครบวงจร',
    description: 'รับทำบัญชี จดทะเบียนบริษัท ยื่นภาษี ตรวจสอบบัญชี ครบวงจร โดยทีมงานมืออาชีพ',
    ogTitle: 'LMB Accounting Plus - สำนักงานบัญชีครบวงจร',
    ogDescription: 'รับทำบัญชี จดทะเบียนบริษัท ยื่นภาษี ตรวจสอบบัญชี ครบวงจร โดยทีมงานมืออาชีพ',
})

// Why Choose Us
const features = [
    {
        name: 'มืออาชีพตัวจริง',
        description: 'ดูแลโดยทีมผู้สอบบัญชีรับอนุญาต (CPA) และมีใบอนุญาตผู้ทำบัญชี (CPD)',
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


// Latest Articles Mockup (Replace with actual data fetching later)
const latestArticles = [
    {
        title: 'เตรียมตัวยื่นภาษีปี 2568 มีอะไรใหม่บ้าง?',
        description: 'สรุปการเปลี่ยนแปลงกฎหมายภาษีล่าสุดที่ผู้ประกอบการต้องรู้',
        date: '10 ม.ค. 2025',
        image: 'https://picsum.photos/id/24/800/600',
        badge: { label: 'ภาษี', color: 'primary' }
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
    '/images/content/03.jpg',
    '/images/content/04.jpg',
    '/images/content/06.jpg',
    '/images/content/07.jpg',
    '/images/place/07.jpg',
    '/images/place/08.jpg',
    '/images/place/09.jpg',
]
</script>

<template>
    <div>
        <ContentHero />

        <ContentStats />

        <ContentServices />

        <ContentTypeBusinesses />

        <div class="py-24 bg-gray-50 dark:bg-gray-950">
            <UContainer>
                <div class="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
                    <div>
                        <h2 class="text-4xl md:text-3xl font-bold  mb-6">
                            ทำไมต้องเลือก <span class="text-[#384c95]">LMB Accounting <span
                                    class="text-warning-600">Plus</span></span> ?
                        </h2>
                        <p class="text-lg text-muted mb-8">
                            เราไม่ได้เป็นแค่ผู้ทำบัญชี แต่เป็นพาร์ทเนอร์ที่ช่วยให้คำแนะนำและแก้ไขปัญหาทางธุรกิจของคุณ
                            ด้วยความเชี่ยวชาญและความใส่ใจในทุกรายละเอียด
                        </p>
                        <ul class="space-y-6">
                            <li v-for="feature in features" :key="feature.name" class="flex gap-4">
                                <div
                                    class="shrink-0 w-12 h-12 rounded-xl bg-primary-900  flex items-center justify-center">
                                    <UIcon :name="feature.icon" class="w-6 h-6 text-primary-50" />
                                </div>
                                <div>
                                    <h3 class="font-semibold  mb-1">{{ feature.name }}</h3>
                                    <p class="text-sm text-muted">{{ feature.description }}</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="mt-12 lg:mt-0 relative">
                        <UCarousel class="rounded-2xl" v-slot="{ item, index }" :items="items" dots loop
                            :autoplay="{ delay: 2000 }" :ui="{
                                dot: 'w-6 h-1'
                            }">
                            <NuxtImg :src="item" :alt="`ภาพบรรยากาศสำนักงาน LMB Accounting Plus - ${index + 1}`"
                                class="relative rounded-2xl shadow-2xl w-full object-cover h-[400px] md:h-[600px] transition-all duration-500" />
                        </UCarousel>
                    </div>
                </div>
            </UContainer>
        </div>

        <ContentTestimonials />

        <UContainer class="mt-16">
            <UPageCTA title="พร้อมก้าวสู่ความสำเร็จทางธุรกิจหรือยัง?"
                description="ให้เราดูแลเรื่องบัญชีและภาษี เพื่อให้คุณมีเวลาบริหารธุรกิจได้เต็มที่ ปรึกษาเราได้เลยวันนี้"
                :links="[
                    { label: 'แอดไลน์ปรึกษาฟรี', icon: 'i-simple-icons-line', color: 'success', size: 'xl', to: 'https://line.me/ti/p/~lee_lmbaudit', target: '_blank' },
                    { label: 'โทรหาเรา 096-353-5572', icon: 'i-heroicons-phone', color: 'neutral', variant: 'soft', size: 'xl', to: 'tel:0963535572' }
                ]" variant="soft"
                :ui="{ root: 'bg-primary-50 dark:bg-gray-950', title: ' text-primary-900 dark:text-white  ', description: 'dark:text-white' }" />
        </UContainer>

    </div>
</template>
