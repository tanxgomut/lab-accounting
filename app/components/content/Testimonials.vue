<script setup lang="ts">
const isMd = ref(true)

onMounted(() => {
    const checkBreakpoint = () => {
        isMd.value = window.innerWidth >= 768 // md breakpoint
    }
    checkBreakpoint()
    window.addEventListener('resize', checkBreakpoint)
    onUnmounted(() => window.removeEventListener('resize', checkBreakpoint))
})

const testimonials = [
    {
        name: 'CY INFINITY CO.,LTD',
        avatar: '/images/review/S__43032598.png',
        imageReview: '/images/review/S__43229212.jpg'
    },
    {
        name: 'BREW GARD',
        avatar: '/images/review/S__43204631.jpg',
        imageReview: '/images/review/S__43204630.jpg'
    },
    {
        name: 'ห้างหุ่นส่วนจำกัด เพช เพอฟอมเมินซ์',
        avatar: '/images/review/S__43089937.jpg',
        imageReview: '/images/review/S__43089938.jpg'
    },
    {
        name: 'BEIGE DECOR',
        avatar: '/images/review/S__43089934.jpg',
        imageReview: '/images/review/S__43147299.jpg'
    },
    {
        name: 'เหล็กกัปตัน',
        quote: 'ดูแลเรื่องประกันสังคมและเงินเดือนพนักงานได้ดีมากครับ ลดภาระงาน HR ของบริษัทไปได้เยอะ ไม่ต้องกังวลเรื่องเอกสารเลย',
        avatar: '/images/review/S__43032600.jpg'
    },
    {
        name: 'บริษัท วีเอสเค ฟูดโปรดักส์ จำกัด',
        quote: 'เป็นมืออาชีพมากครับ ตรวจสอบบัญชีละเอียดและให้คำปรึกษาเรื่องภาษีโรงงานได้ชัดเจน ทำให้เรากล้าวางแผนขยายการผลิตได้อย่างมั่นใจ',
        avatar: '/images/review/S__43032601.jpg'
    },
    {
        name: 'KANNIKA FLOWER DECOR CO.,LTD',
        quote: 'พี่ๆ ทีมงานน่ารักมากค่ะ คอยติดตามเอกสารให้ตลอด ไม่เคยพลาดส่งภาษีเลย ทำให้เรามีเวลาโฟกัสกับการจัดดอกไม้ให้ลูกค้าได้อย่างเต็มที่',
        avatar: '/images/review/S__43032602.png'
    },
    {
        name: 'PRINTER THAI CO.,LTD',

        quote: 'ใช้บริการมาหลายปีแล้วครับ มั่นใจในความถูกต้องแม่นยำ ปิดงบสวย ไม่เคยมีปัญหากับสรรพากรเลย แนะนำต่อเพื่อนๆ ตลอดครับ',
        avatar: '/images/review/S__43089935.jpg'
    },
    {
        name: 'MO-MIN',
        quote: 'เริ่มต้นธุรกิจใหม่ก็กังวลเรื่องภาษี แต่ได้ทีมงาน LMB ช่วยดูแลตั้งแต่จดทะเบียนยันวางระบบบัญชี ทำให้ทุกอย่างราบรื่นมากครับ',
        avatar: '/images/review/S__43089936.jpg'
    },
]
</script>

<template>
    <div class="py-20 ">
        <UContainer>
            <div class="text-center mb-16">
                <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">เสียงจากลูกค้าของเรา</h2>
                <div class="w-20 h-1 bg-primary-500 mx-auto rounded-full"></div>
            </div>

            <UCarousel v-slot="{ item }" loop :arrows="isMd" :prev="{ variant: 'solid' }" :next="{ variant: 'solid' }"
                :dots="false" :autoplay="{ delay: 2500 }" :items="testimonials"
                :ui="{ item: 'basis-1/1 sm:basis-1/2 md:basis-1/4' }">

                <template v-if="item.imageReview">
                    <div
                        class="relative rounded-2xl overflow-hidden h-[320px]  group  border border-gray-200 dark:border-gray-700">
                        <div class="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent z-10">
                        </div>
                        <div class="absolute z-20 bottom-4 left-4 right-4 flex items-center gap-3">
                            <UAvatar :src="item.avatar" :alt="item.name" size="md" class="ring-2 ring-white/50" />
                            <div class="flex-1 min-w-0">
                                <span class="text-sm font-bold text-white truncate block drop-shadow-md">{{ item.name
                                }}</span>
                                <div class="flex gap-0.5 mt-0.5">
                                    <UIcon v-for="i in 5" :key="i" name="i-heroicons-star-solid"
                                        class="w-3.5 h-3.5 text-warning-400 drop-shadow-sm" />
                                </div>
                            </div>
                        </div>
                        <NuxtImg :src="item.imageReview" :alt="`รีวิวจาก ${item.name}`"
                            class="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500" />
                    </div>
                </template>

                <template v-else>
                    <div
                        class="bg-default rounded-xl p-5 border border-gray-200 dark:border-gray-700 h-[320px] flex flex-col">

                        <div class="flex items-center gap-3 mb-2">
                            <UAvatar :src="item.avatar" :alt="item.name" size="lg" />
                            <p class="font-bold text-sm flex-1">{{ item.name }}</p>
                        </div>

                        <div class="flex gap-0.5 mb-4">
                            <UIcon v-for="i in 5" :key="i" name="i-heroicons-star-solid"
                                class="w-4 h-4 text-warning-400" />
                        </div>

                        <p class="text-muted text-sm leading-relaxed font-light line-clamp-6 flex-1">
                            "{{ item.quote }}"
                        </p>
                    </div>
                </template>
            </UCarousel>
        </UContainer>
    </div>

</template>