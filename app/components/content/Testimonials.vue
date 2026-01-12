<script setup lang="ts">

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
]
</script>

<template>
    <div class="py-20 ">
        <UContainer>
            <div class="text-center mb-16">
                <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">เสียงจากลูกค้าของเรา</h2>
                <div class="w-20 h-1 bg-primary-500 mx-auto rounded-full"></div>
            </div>

            <UCarousel v-slot="{ item }" loop :arrows="false" :prev="{ variant: 'solid' }" :next="{ variant: 'solid' }"
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

            </UCarousel>


        </UContainer>
    </div>

</template>