<template lang="pug">
div My Component Text
</template>

<script setup lang="ts">
import { onMounted } from "vue";

onMounted(() => {
  console.log("Mounted");
});
</script>
