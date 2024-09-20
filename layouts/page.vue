<script setup lang="ts">
// add header + footer

const { t } = useI18n();
const { isMobile } = useDevice();

</script>

<template>
  <div>
    <div class="flex-fill">
      <slot />
    </div>
  </div>
</template>

<style scoped></style>
