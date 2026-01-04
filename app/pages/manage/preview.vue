<script setup lang="ts">
const content = ref('')

onMounted(() => {
    const savedContent = localStorage.getItem('tiptap-preview-content')
    if (savedContent) {
        content.value = savedContent
    }
})

useHead({
    title: 'Preview Content - LMB Accounting'
})

const closePreview = () => {
    localStorage.removeItem('tiptap-preview-content')
    window.close()
}
</script>

<template>
    <div class="min-h-screen  py-12">
        <UContainer class="">
            <div class="mb-8 flex justify-between items-center">
                <h1 class="text-2xl font-bold ">ตัวอย่างเนื้อหา (Preview)</h1>
                <UButton color="neutral" variant="ghost" icon="i-heroicons-x-mark" @click="closePreview">
                    ปิด
                </UButton>
            </div>

            <div class="">
                <div class="ProseMirror prose prose-sm sm:prose-base dark:prose-invert " v-html="content">
                </div>
            </div>
        </UContainer>
    </div>
</template>
