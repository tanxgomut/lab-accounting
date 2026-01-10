<script setup lang="ts">
import copy from 'copy-to-clipboard'

const route = useRoute()
const id = route.params.id
const path = route.params.path

const { data: article } = await useFetch(`/api/blogs/${id}`)

const copyLink = () => {
    copy(`https://lmb-accounting.com/blog/${id}/${path}`)
}
</script>

<template>
    <UContainer>
        <UBreadcrumb class="mt-10" :items="[
            { label: 'บทความ', to: '/blogs', icon: 'i-lucide-book-open' },
            { label: path as string, to: `/blog/${path}`, icon: 'i-lucide-box', },
        ]" />
        <UPageHeader :title="article?.title" :description="article?.description">
            <template #headline>
                <UBadge :color="article?.color as any" variant="subtle">
                    {{ article?.category }}
                </UBadge><span class="ml-2"> - {{ article?.date }}</span>
            </template>
        </UPageHeader>

        <UPage>

            <!-- <NuxtImg v-if="article?.image" :src="article?.image" alt="article?.title"  class="w-full h-64 md:h-96 mt-8 rounded-lg" /> -->

            <UPageBody>
                <div v-html="article?.content"></div>
                <USeparator label="LMB Accounting Plus" />
                <div class="flex justify-end  gap-2">
                    <UButton icon="i-simple-icons-facebook" color="primary" variant="soft" size="lg"
                        :to="`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`https://lmb-accounting.com/blog/${id}/${path}`)}`"
                        target="_blank" />
                    <UButton icon="i-simple-icons-line" color="success" variant="soft" size="lg"
                        :to="`https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(`https://lmb-accounting.com/blog/${id}/${path}`)}`"
                        target="_blank" />
                    <UButton icon="i-simple-icons-x" color="neutral" variant="soft" size="lg"
                        :to="`https://twitter.com/intent/tweet?url=${encodeURIComponent(`https://lmb-accounting.com/blog/${id}/${path}`)}&text=${encodeURIComponent(article?.title || '')}`"
                        target="_blank" />
                    <UButton icon="i-heroicons-link" color="secondary" variant="soft" size="lg" @click="copyLink" />
                </div>



                <div class="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
                    <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                        <UIcon name="i-heroicons-bookmark" class="w-6 h-6 text-primary-500" />
                        บทความที่เกี่ยวข้อง
                    </h3>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <NuxtLink v-if="article?.prevArticle"
                            :to="`/blog/${article.prevArticle.id}/${article.prevArticle.slug}`"
                            class="group flex flex-col gap-4 p-4 sm:p-6 rounded-xl bg-gray-50 dark:bg-gray-800/50 hover:bg-gray-100 dark:hover:bg-gray-900/20 transition-all duration-300">
                            <UIcon name="i-heroicons-arrow-left" class="w-6 h-6 text-success  transition-colors" />
                            <div class="flex-1 min-w-0">
                                <p class="text-md font-semibold ">{{ article?.prevArticle.title }}</p>
                                <p class="text-sm text-muted   transition-colors">
                                    {{ article?.prevArticle.description }}
                                </p>
                            </div>
                        </NuxtLink>
                        <NuxtLink v-if="article?.nextArticle"
                            :to="`/blog/${article.nextArticle.id}/${article.nextArticle.slug}`"
                            class="group flex flex-col items-end gap-4 p-4 sm:p-6 rounded-xl bg-gray-50 dark:bg-gray-800/50  hover:bg-gray-100 dark:hover:bg-gray-900/20 transition-all duration-300">
                            <UIcon name="i-heroicons-arrow-right" class="w-6 h-6 text-success  transition-colors" />
                            <div class="flex-1 min-w-0 text-right">
                                <p class="text-md font-semibold ">{{ article?.nextArticle.title }}</p>
                                <p class=" text-sm text-muted  transition-colors ">
                                    {{ article?.nextArticle.description }}
                                </p>
                            </div>
                        </NuxtLink>
                    </div>
                </div>
            </UPageBody>
            <UPageCTA title="ต้องการคำปรึกษาเพิ่มเติม?"
                description="ทีมงาน LMB Accounting Plus พร้อมให้คำปรึกษาด้านบัญชีและภาษีฟรี! ติดต่อเราได้ทันที"
                variant="soft" :links="[
                    { label: 'แอดไลน์ปรึกษาฟรี', icon: 'i-simple-icons-line', color: 'success', size: 'xl', to: 'https://line.me/ti/p/~lee_lmbaudit', target: '_blank' },
                    { label: 'โทรหาเรา', icon: 'i-heroicons-phone', color: 'neutral', variant: 'outline', size: 'xl', to: 'tel:0963535572' }
                ]" />
            <template #right>
                <UPageAside>
                    <!-- Social Share -->
                    <div class="mb-8">
                        <h4 class="text-sm font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                            <UIcon name="i-heroicons-share" class="w-4 h-4" />
                            แชร์บทความนี้
                        </h4>
                        <div class="flex gap-2">
                            <UButton icon="i-simple-icons-facebook" color="primary" variant="soft" size="lg"
                                :to="`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`https://lmb-accounting.com/blog/${id}/${path}`)}`"
                                target="_blank" />
                            <UButton icon="i-simple-icons-line" color="success" variant="soft" size="lg"
                                :to="`https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(`https://lmb-accounting.com/blog/${id}/${path}`)}`"
                                target="_blank" />
                            <UButton icon="i-simple-icons-x" color="neutral" variant="soft" size="lg"
                                :to="`https://twitter.com/intent/tweet?url=${encodeURIComponent(`https://lmb-accounting.com/blog/${id}/${path}`)}&text=${encodeURIComponent(article?.title || '')}`"
                                target="_blank" />
                            <UButton icon="i-heroicons-link" color="secondary" variant="soft" size="lg"
                                @click="copyLink" />
                        </div>
                    </div>

                    <!-- Contact CTA -->
                    <div class="p-2 rounded-xl">
                        <UIcon name="i-heroicons-chat-bubble-left-right" class="w-5 h-5" />
                        <h4 class="font-bold">ต้องการคำปรึกษา?</h4>
                        <p class="text-sm text-muted mb-4">
                            ทีมงานพร้อมให้คำปรึกษาด้านบัญชีและภาษีฟรี! ไม่มีค่าใช้จ่าย
                        </p>
                        <div class="flex flex-col gap-2">
                            <UButton icon="i-simple-icons-line" color="success" variant="solid" block
                                to="https://line.me/ti/p/~lee_lmbaudit" target="_blank">
                                แอดไลน์ปรึกษาฟรี
                            </UButton>
                            <UButton icon="i-heroicons-phone" color="neutral" variant="outline" block
                                to="tel:0963535572">
                                โทร 096-353-5572
                            </UButton>
                        </div>
                    </div>
                </UPageAside>
            </template>
        </UPage>
    </UContainer>
</template>