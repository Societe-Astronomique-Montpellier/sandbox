<script setup lang="ts">
const prismic = usePrismic();

definePageMeta({
  layout: "page",
});

const { data: home } = useAsyncData('home', async () => await prismic.client.getAllByType('article', { lang: 'fr-fr'}))
</script>

<template>
  <div v-if="home">
    <prismic-link
      :field=""
    ></prismic-link>
  </div>
</template>

<style scoped>

</style>