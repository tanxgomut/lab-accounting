<script setup lang="ts">

useSeoMeta({
    title: 'บทความและข่าวสาร - LMB Accounting Plus',
    description: 'รวมบทความความรู้ด้านบัญชี ภาษี และกฎหมายธุรกิจ อัปเดตใหม่ล่าสุด',
    ogTitle: 'บทความและข่าวสาร - LMB Accounting Plus',
    ogDescription: 'รวมบทความความรู้ด้านบัญชี ภาษี และกฎหมายธุรกิจ อัปเดตใหม่ล่าสุด',
})

const { data: articles } = await useFetch('/api/blogs')

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
                    :badge="{ label: article.category, color: article.color as any }"
                    :to="`/blog/${article.id}/${article.slug}`" />
            </div>
        </UPageBody>
    </UContainer>
</template>