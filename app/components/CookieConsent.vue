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
            <div v-if="isBannerOpen" class="fixed bottom-0 inset-x-0 z-40">
                <div class="bg-default/75 backdrop-blur border-t border-gray-200 dark:border-gray-800 p-4 shadow-lg">
                    <div class="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">

                        <div class="flex items-center gap-4">
                            <UIcon name="i-lucide-cookie" class="w-6 h-6 text-primary-500 hidden md:block" />
                            <div>
                                <p class="text-xs md:text-sm ">
                                    เว็บไซต์นี้ใช้คุกกี้เพื่อประสบการณ์ที่ดีที่สุด
                                    <button @click="isModalOpen = true" class="underline hover:text-primary-500 ml-1">
                                        อ่านนโยบายความเป็นส่วนตัว
                                    </button>
                                </p>
                            </div>
                        </div>

                        <div class="flex gap-3">
                            <UButton variant="ghost" size="xs" @click="declineCookies">ปฏิเสธ</UButton>
                            <UButton variant="solid" size="xs" @click="acceptCookies">ยอมรับทั้งหมด</UButton>
                        </div>

                    </div>
                </div>
            </div>
        </Transition>

        <!-- <PrivacyPolicyModal v-model="isModalOpen" @confirm="onModalConfirm" /> -->
    </div>
</template>