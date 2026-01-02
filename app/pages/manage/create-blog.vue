<script setup lang="ts">
import TiptapEditor from '~/components/TiptapEditor.vue';

const content = ref('')

</script>

<template>
    <UContainer>
        <TiptapEditor v-model="content" />
    </UContainer>
</template>