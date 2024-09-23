<script setup lang="ts">
const prismic = usePrismic();

const { data: home } = useAsyncData('home', async () => await prismic.client.getAllByType('article', { lang: 'fr-fr'}))
</script>

<template>
  <div v-if="home">
    <ul>
      <li>
        <prismic-link
            v-for="(item, index) in home"
            :field="item"
        >
          {{ prismic.asText(item.data.title) }}
        </prismic-link>
      </li>
    </ul>

  </div>
</template>

<style scoped>

</style>