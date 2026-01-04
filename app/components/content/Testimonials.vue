<script setup lang="ts">
const testimonials = [
    {
        name: 'คุณธนพล',
        position: 'CEO, Tech Startup',
        quote: 'บริการจดทะเบียนบริษัทรวดเร็วมากครับ ทีมงานให้คำแนะนำละเอียดทุกขั้นตอน มือใหม่เริ่มธุรกิจแนะนำที่นี่เลยครับ ครบจบในที่เดียว',
        avatar: 'https://i.pravatar.cc/150?u=12'
    },
    {
        name: 'คุณวิภาดา',
        position: 'เจ้าของธุรกิจร้านอาหาร',
        quote: 'ประทับใจบริการทำบัญชีที่นี่มากค่ะ ปิดงบตรงเวลา อธิบายเรื่องภาษีได้เข้าใจง่าย ช่วยวางแผนภาษีทำให้ประหยัดค่าใช้จ่ายได้เยอะเลย',
        avatar: 'https://i.pravatar.cc/150?u=5'
    },
    {
        name: 'คุณธีรศักดิ์',
        position: 'MD, Import-Export',
        quote: 'ดูแลเรื่องประกันสังคมและเงินเดือนพนักงานได้ดีมากครับ ลดภาระงาน HR ของบริษัทไปได้เยอะ ไม่ต้องกังวลเรื่องเอกสารเลย',
        avatar: 'https://i.pravatar.cc/150?u=8'
    },
    {
        name: 'คุณสิริมา',
        position: 'ร้านค้าออนไลน์',
        quote: 'เปลี่ยนมาใช้บริการที่นี่แล้วสบายใจเรื่องบัญชีร้านค้าออนไลน์มากค่ะ ทีมงานมีความรู้เรื่องภาษีออนไลน์โดยเฉพาะ แนะนำดีมากค่ะ',
        avatar: 'https://i.pravatar.cc/150?u=9'
    }
]
</script>

<template>
    <div class="py-20 ">
        <UContainer>
            <div class="text-center mb-16">
                <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">เสียงจากลูกค้าของเรา</h2>
                <div class="w-20 h-1 bg-primary-500 mx-auto rounded-full"></div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div v-for="(item, index) in testimonials" :key="index"
                    class="bg-default rounded-xl p-6 shadow-lg hover:shadow-primary-500/10 transition-all duration-300 hover:-translate-y-1">

                    <div class="flex items-center gap-4 mb-4">
                        <UAvatar :src="item.avatar" :alt="item.name" size="md" />
                        <div>
                            <h4 class="font-bold  text-base">{{ item.name }}</h4>
                            <p class="text-xs text-primary-400 font-medium">{{ item.position }}</p>
                        </div>
                    </div>

                    <div class="flex gap-1 mb-4">
                        <UIcon v-for="i in 5" :key="i" name="i-heroicons-star-solid" class="w-4 h-4 text-warning-400" />
                    </div>

                    <p class="text-muted text-sm leading-relaxed font-light">
                        "{{ item.quote }}"
                    </p>
                </div>
            </div>
        </UContainer>
    </div>

</template>