<script setup lang="ts">
const stats = [
    { label: 'ประสบการณ์', value: '20+', icon: 'i-heroicons-calendar-days', suffix: 'ปี', color: 'secondary' },
    { label: 'ประเภทธุรกิจที่ดูแลบัญชี-ภาษี', value: '20', icon: 'i-heroicons-building-office', color: 'secondary' },
    { label: 'เศสงานทะเบียนที่สำเร็จ', value: '600', icon: 'i-heroicons-clipboard-document-check', suffix: '', color: 'secondary' },
    { label: 'ความพึงพอใจ', value: '100%', icon: 'i-heroicons-face-smile', color: 'secondary' }
]
</script>

<template>

    <UContainer class="relative z-10 py-20  overflow-hidden">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div v-for="(stat, index) in stats" :key="index" class="text-center group">
                <div
                    :class="`mb-4 inline-flex p-3 rounded-2xl bg-${stat.color}-100 text-${stat.color}   transition-colors duration-300 transform group-hover:scale-110 shadow-sm`">
                    <UIcon :name="stat.icon" class="w-8 h-8" />
                </div>
                <div :class="`text-3xl md:text-4xl font-bold mb-2 ${'text-' + stat.color}`">{{ stat.value }}
                    <span v-if="stat.suffix" class="text-lg font-normal text-gray-500 dark:text-gray-400">{{
                        stat.suffix }} </span>
                </div>
                <div class="text-gray-500 dark:text-gray-400 text-sm font-medium">{{ stat.label }}</div>
            </div>
        </div>
    </UContainer>

</template>
