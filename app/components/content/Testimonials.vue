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
        quote: 'บริการจดทะเบียนบริษัทรวดเร็วมากครับ ทีมงานให้คำแนะนำละเอียดทุกขั้นตอน มือใหม่เริ่มธุรกิจแนะนำที่นี่เลยครับ ครบจบในที่เดียว',
        avatar: '/images/review/S__43032598.png'
    },
    {
        name: 'BREW GARD',
        quote: 'ประทับใจบริการทำบัญชีที่นี่มากค่ะ ปิดงบตรงเวลา อธิบายเรื่องภาษีได้เข้าใจง่าย ช่วยวางแผนภาษีทำให้ประหยัดค่าใช้จ่ายได้เยอะเลย',
        avatar: '/images/review/S__43032599.jpg'
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
        name: 'BEIGE DECOR',
        quote: 'ประทับใจความรวดเร็วในการทำงานครับ เวลามีข้อสงสัยเรื่องหัก ณ ที่จ่าย หรือภาษีมูลค่าเพิ่ม ก็ตอบคำถามได้ไวและเคลียร์มาก',
        avatar: '/images/review/S__43089934.jpg'
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
    {
        name: 'ห้างหุ่นส่วนจำกัด เพช เพอฟอมเมินซ์',
        quote: 'บริการดี ราคาเป็นกันเองครับ สิ่งที่ชอบที่สุดคือความใส่ใจ ไม่ใช่แค่ทำบัญชีให้จบๆ ไป แต่ยังช่วยดูจุดบกพร่องและแก้ไขให้เราด้วย',
        avatar: '/images/review/S__43089937.jpg'
    },
    {
        type: 'image',
        avatar: '/images/review/S__43089938.jpg'
    },
    {
        type: 'image',
        avatar: '/images/review/S__43147299.jpg'
    },
    {
        type: 'image',
        avatar: '/images/review/S__43204630.jpg'
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

            <!-- <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div v-for="(item, index) in testimonials" :key="index"
                    class="bg-default rounded-xl p-6 shadow-lg hover:shadow-primary-500/10 transition-all duration-300 hover:-translate-y-1">

                    <template v-if="item.type !== 'image'">
                        <div class="flex items-center gap-4 mb-4">
                            <UAvatar :src="item.avatar" :alt="item.name" size="md" />
                            <div>
                                <h4 class="font-bold  text-base">{{ item.name }}</h4>
                                <p class="text-xs text-primary-400 font-medium">{{ item.position }}</p>
                            </div>
                        </div>

                        <div class="flex gap-1 mb-4">
                            <UIcon v-for="i in 5" :key="i" name="i-heroicons-star-solid"
                                class="w-4 h-4 text-warning-400" />
                        </div>

                        <p class="text-muted text-sm leading-relaxed font-light">
                            "{{ item.quote }}"
                        </p>
                    </template>
<template v-else>
                        <NuxtImg :src="item.avatar" class="w-full h-full object-cover" />
                    </template>
</div>
</div> -->

            <UCarousel v-slot="{ item }" loop :arrows="isMd" :prev="{ variant: 'solid' }" :next="{ variant: 'solid' }"
                :dots="false" :autoplay="{ delay: 2000 }" :items="testimonials"
                :ui="{ item: 'basis-1/1 sm:basis-1/2 md:basis-1/4' }">
                <div class="bg-default rounded-xl p-6 border border-secondary-600 h-[250px]">

                    <template v-if="item.type !== 'image'">
                        <div class="flex items-center gap-4 mb-4">
                            <UAvatar :src="item.avatar" :alt="item.name" size="md" />
                            <div>
                                <h4 class="font-bold  text-base">{{ item.name }}</h4>
                            </div>
                        </div>

                        <div class="flex gap-1 mb-4">
                            <UIcon v-for="i in 5" :key="i" name="i-heroicons-star-solid"
                                class="w-4 h-4 text-warning-400" />
                        </div>

                        <p class="text-muted text-sm leading-relaxed font-light">
                            "{{ item.quote }}"
                        </p>
                    </template>
                    <template v-else>
                        <NuxtImg :src="item.avatar" class="w-full h-full " />
                    </template>
                </div>
            </UCarousel>


        </UContainer>
    </div>

</template>