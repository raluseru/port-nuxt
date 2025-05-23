<template>
       
<WorkSamples />

</template>
<script setup lang="ts">
import FollowCusor from '~/components/FollowCusor.vue';

const { message, politeness, set, polite, assertive } = useRouteAnnouncer({
    politeness: 'assertive'
  })
</script>