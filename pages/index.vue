<template>
       
<WorkSamples />
          

</template>
<script setup lang="ts">
const { message, politeness, set, polite, assertive } = useRouteAnnouncer({
    politeness: 'assertive'
  })
</script>