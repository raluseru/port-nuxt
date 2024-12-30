<script setup lang="ts">
import { getSvgSprite } from '../composables/svgService'

defineProps({
    iconId: String,
    viewBox: String,
})

// Type svgContent as an object with a `url` property
const svgContent = ref<{ url: string } | null>(null)

onMounted(async () => {
    svgContent.value = await getSvgSprite()
})
</script>

<template>
    <svg v-if="svgContent">
        <use :href="`${svgContent.url}#${iconId}`" :viewBox="viewBox" />
    </svg>
</template>

<style lang="scss">
svg {
    width: 100%;
    height: auto;
}
</style>
