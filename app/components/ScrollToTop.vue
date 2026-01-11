<script setup lang="ts">
const y = ref(0)

const updateScroll = () => {
    y.value = window.scrollY
}

onMounted(() => {
    updateScroll()
    window.addEventListener('scroll', updateScroll)
})

onUnmounted(() => {
    window.removeEventListener('scroll', updateScroll)
})

const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}
</script>

<template>
    <!-- <div class="fixed bottom-8 right-8 z-999 transition-all duration-300 transform"
        :class="[y > 300 ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0']">
        <UButton icon="i-heroicons-arrow-up" size="xl" color="primary" variant="solid"
            class="rounded-full shadow-lg hover:shadow-primary-500/50 hover:scale-110 transition-all duration-300"
            @click="scrollToTop" />
    </div> -->
</template>
