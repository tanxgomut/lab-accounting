<script setup lang="ts">
const content = ref('')

onMounted(() => {
    const savedContent = localStorage.getItem('tiptap-preview-content')
    if (savedContent) {
        content.value = savedContent
    }
})

useHead({
    title: 'Preview Content - LAB Accounting'
})
</script>

<template>
    <div class="min-h-screen bg-white dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
        <div class="max-w-4xl mx-auto">
            <div class="mb-8 flex justify-between items-center">
                <h1 class="text-2xl font-bold text-gray-900 dark:text-white">ตัวอย่างเนื้อหา (Preview)</h1>
                <UButton color="neutral" variant="ghost" icon="i-heroicons-x-mark">
                    ปิด
                </UButton>
            </div>

            <div
                class="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 sm:p-10 shadow-sm">
                <div class="ProseMirror prose prose-sm sm:prose-base dark:prose-invert max-w-none" v-html="content">
                </div>
            </div>
        </div>
    </div>
</template>
