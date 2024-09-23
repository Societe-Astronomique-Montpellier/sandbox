<script setup lang="ts">
definePageMeta({
  layout: "home",
});
const prismic = usePrismic();
const card = defineAsyncComponent(() => import('@/components/card.vue'))

const { data: home } = useAsyncData('home', async () => await prismic.client.getAllByType('article', { lang: 'fr-fr'}))
</script>

<template>
  <div v-if="home">
    <section class="text-gray-400 bg-gray-900 body-font">
      <div class="container px-5 py-16 mx-auto">
        <div class="flex flex-col">
          <div class="h-1 bg-gray-800 rounded overflow-hidden">
            <div class="w-24 h-full bg-indigo-500"></div>
          </div>
          <div class="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
            <h3
                class="sm:w-2/5 text-white font-medium title-font text-2xl mb-2 sm:mb-0"
            >
              Accès aux pages
            </h3>
          </div>
        </div>
        <div class="flex flex-wrap md:flex-row sm:-m-4 -mx-4 -mb-10 -mt-4">
          <div
              v-for="(item, index) in home"
              :key="index"
              class="p-4 md:w-1/3 w-full sm:mb-0 mb-6"
          >
            <card :item="item" :key="index" />
          </div>
        </div>

      </div>
    </section>
  </div>
</template>

<style scoped>

</style>