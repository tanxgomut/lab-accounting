<script setup lang="ts">

useSeoMeta({
    title: 'บทความและข่าวสาร - LMB Accounting Plus',
    description: 'รวมบทความความรู้ด้านบัญชี ภาษี และกฎหมายธุรกิจ อัปเดตใหม่ล่าสุด',
    ogTitle: 'บทความและข่าวสาร - LMB Accounting Plus',
    ogDescription: 'รวมบทความความรู้ด้านบัญชี ภาษี และกฎหมายธุรกิจ อัปเดตใหม่ล่าสุด',
})

const articles = [
    {
        id: 1,
        title: 'สรุปภาษีที่ต้องรู้สำหรับ SMEs ปี 2568',
        description: 'เจาะลึกการเปลี่ยนแปลงกฎหมายภาษีใหม่ที่กระทบผู้ประกอบการ SMEs พร้อมคำแนะนำในการเตรียมตัว',
        image: 'https://picsum.photos/800/600?random=1',
        date: '12 ม.ค. 2025',
        category: 'ภาษี',
        color: 'warning'
    },
    {
        id: 2,
        title: 'จดทะเบียนบริษัทต้องเตรียมเอกสารอะไรบ้าง?',
        description: 'เช็คลิสต์เอกสารสำคัญที่ต้องใช้ในการจดทะเบียนนิติบุคคล ให้คุณเตรียมพร้อมไม่พลาดทุกขั้นตอน',
        image: 'https://picsum.photos/800/600?random=2',
        date: '10 ม.ค. 2025',
        category: 'จดทะเบียน',
        color: 'success'
    },
    {
        id: 3,
        title: 'เทคนิคการบริหาร Cash Flow ให้ธุรกิจไม่สะดุด',
        description: 'วิธีการจัดการกระแสเงินสดให้หมุนเวียนคล่องตัว ลดความเสี่ยงในการขาดสภาพคล่อง',
        image: 'https://picsum.photos/800/600?random=3',
        date: '5 ม.ค. 2025',
        category: 'บัญชี',
        color: 'secondary'
    },
    {
        id: 4,
        title: 'e-Tax Invoice ใบกำกับภาษีอิเล็กทรอนิกส์ คืออะไร?',
        description: 'ทำความรู้จักระบบ e-Tax Invoice & e-Receipt และประโยชน์ที่ธุรกิจจะได้รับจากการเปลี่ยนมาใช้',
        image: 'https://picsum.photos/800/600?random=4',
        date: '28 ธ.ค. 2024',
        category: 'เทคโนโลยี',
        color: 'primary'
    },
    {
        id: 5,
        title: 'ค่าใช้จ่ายต้องห้ามทางภาษี มีอะไรบ้าง?',
        description: 'รวมรายการค่าใช้จ่ายที่ไม่สามารถนำมาหักภาษีได้ เพื่อให้คุณบันทึกบัญชีได้อย่างถูกต้อง',
        image: 'https://picsum.photos/800/600?random=5',
        date: '15 ธ.ค. 2024',
        category: 'ภาษี',
        color: 'warning'
    },
    {
        id: 6,
        title: 'การวางแผนภาษีบุคคลธรรมดาฉบับมนุษย์เงินเดือน',
        description: 'เทคนิคการลดหย่อนภาษีสำหรับพนักงานประจำ บริหารเงินอย่างไรให้คุ้มค่าที่สุด',
        image: 'https://picsum.photos/800/600?random=6',
        date: '1 ธ.ค. 2024',
        category: 'ภาษีบุคคล',
        color: 'success'
    }
]
</script>

<template>
    <UContainer>
        <UPageHeader>
            <template #headline>
                <div class="flex items-center gap-2 text-secondary font-bold uppercase tracking-wider mb-2">
                    <UIcon name="i-heroicons-newspaper" class="w-5 h-5" />
                    <span>Knowledge Hub</span>
                </div>
            </template>

            <template #title>
                <h1 class="text-3xl sm:text-4xl font-extrabold leading-tight text-gray-900 dark:text-white">
                    บทความและ <span class="text-primary">สาระน่ารู้</span>
                </h1>
            </template>

            <template #description>
                <p class="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
                    อัปเดตความรู้ด้านบัญชี ภาษี และกฎหมายใหม่ๆ เพื่อให้ธุรกิจของคุณก้าวทันทุกการเปลี่ยนแปลง
                </p>
            </template>
        </UPageHeader>

        <UPageBody>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
                <UBlogPost v-for="(article, index) in articles" :key="index" :title="article.title"
                    :description="article.description" :image="article.image" :date="article.date"
                    :badge="{ label: article.category, color: article.color as any }" to="#" />
            </div>
        </UPageBody>
    </UContainer>
</template>