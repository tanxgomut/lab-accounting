<script setup lang="ts">
const cookieConsent = useCookie('consent-accepted', {
    maxAge: 60 * 60 * 24 * 365,
    default: () => false
})

const isBannerOpen = ref(false)
const isModalOpen = ref(false)

onMounted(() => {
    setTimeout(() => {
        if (!cookieConsent.value) isBannerOpen.value = true
    }, 1000)
})

const acceptCookies = () => {
    cookieConsent.value = true
    isBannerOpen.value = false
}

const declineCookies = () => {
    cookieConsent.value = false
    isBannerOpen.value = false
}

const onModalConfirm = () => {
    acceptCookies()
}
</script>

<template>
    <div>
        <Transition enter-active-class="transition duration-500 ease-out"
            enter-from-class="transform translate-y-full opacity-0" enter-to-class="transform translate-y-0 opacity-100"
            leave-active-class="transition duration-300 ease-in" leave-from-class="transform translate-y-0 opacity-100"
            leave-to-class="transform translate-y-full opacity-0">
            <div v-if="isBannerOpen"
                class="fixed bottom-4 left-4 right-4 md:left-auto md:right-8 md:bottom-8 z-50 md:max-w-md">
                <div
                    class="bg-default backdrop-blur-xl border border-gray-200 dark:border-gray-800 p-6 rounded-3xl shadow relative overflow-hidden">

                    <div class="flex flex-col gap-4 relative z-10">
                        <div class="flex items-start gap-4">
                            <div class="p-2 rounded-2xl shrink-0">
                                <UIcon name="i-heroicons-shield-check"
                                    class="w-5 h-5 text-primary-600 dark:text-primary-400" />
                            </div>
                            <div>
                                <h3 class="font-bold text-gray-900 dark:text-white mb-1">
                                    เราให้ความสำคัญกับความเป็นส่วนตัว</h3>
                                <p class="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                                    เว็บไซต์นี้ใช้คุกกี้เพื่อเพิ่มประสบการณ์การใช้งานของคุณ
                                    <button @click="isModalOpen = true"
                                        class="text-primary-600 dark:text-primary-400 hover:underline font-medium ml-1">
                                        อ่านนโยบาย
                                    </button>
                                </p>
                            </div>
                        </div>

                        <div class="flex gap-3 justify-end mt-2">
                            <UButton variant="ghost" color="neutral" size="sm" @click="declineCookies"
                                class="rounded-xl">
                                ปฏิเสธ</UButton>
                            <UButton color="primary" variant="solid" size="sm" @click="acceptCookies"
                                class="px-6 rounded-xl">ยอมรับทั้งหมด</UButton>
                        </div>
                    </div>
                </div>
            </div>
        </Transition>

        <PrivacyPolicyModal v-model="isModalOpen" @confirm="onModalConfirm" />
    </div>
</template>