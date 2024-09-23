<script setup lang="ts">
import { asImageSrc, isFilled } from "@prismicio/helpers";
import type { ComputedRef } from "vue";
import type { ImageField } from "@prismicio/client";
import type {
  EmptyImageFieldImage,
  FilledImageFieldImage,
} from "@prismicio/types";

definePageMeta({
  layout: "page",
});

const prismic = usePrismic();
const route = useRoute();
const { locale } = useI18n();

const {  uid } = route.params as { uid: string; };
const { data: article, error } = useAsyncData(
  uid,
  async () => await prismic.client.getByUID("article", uid, { lang: locale.value })
);

const richTextSerializer = useRichTextSerializer();

const formatedDate = useState("formatedDate", () => useFormatIntoFrenchDate(article.value?.last_publication_date, "short"));
// const imageBanner = computed<
//     ImageField | FilledImageFieldImage | EmptyImageFieldImage | undefined
// >(() => useBannerImage(article.value?.data.image_banner, isMobile));
//
// const metaTitle: ComputedRef<string> = computed<string>(() => {
//   return isFilled.keyText(article.value?.data.meta_title)
//       ? `${article.value?.data.meta_title}`
//       : `${article.value?.data.title}`;
// });
// const metaDescription: ComputedRef<string> = computed<string>(
//     () => `${article.value?.data.meta_description}`,
// );
// const metaImage = computed(() => asImageSrc(article.value?.data.meta_image));
//
// useSeoMeta({
//   title: metaTitle,
//   description: metaDescription,
//   ogTitle: (): string => unref(metaTitle),
//   ogDescription: (): string => unref(metaDescription),
//   ogImage: (): any => unref(metaImage),
// });
</script>

<template>
  <pre>{{ article }}</pre>
  <div v-if="article" class="max-w-screen-lg w-full mx-auto relative mb-2">
    <h1 class="text-gray-900 font-bold text-4xl my-8 text-center">
      {{ article?.data.title }}
    </h1>
<!--    <HeaderPage :image="imageBanner" />-->
    <div class="max-w-3xl mx-auto">
      <div
          class="mt-3 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal"
      >
        <div class="bg-white relative top-0 -mt-32 p-5 sm:p-10 leading-normal">
          <h2
              v-if="isFilled.keyText(article.data.subtitle)"
              class="text-gray-900 font-semibold text-2xl mb-2"
          >
            {{ article?.data.subtitle }}
          </h2>
          <Icon v-show="false" name="material-symbols:arrow-right-alt" />
          <div class="my-4 grid gap-4 px-1">
            <div data-content>

                <prismic-rich-text
                  :field="article.data.content"
                  :serializer="richTextSerializer"
                ></prismic-rich-text>

              <p class="text-gray-700 text-xs mt-5">
                <span
                    id="span_author"
                    class="font-medium hover:text-gray-900 transition duration-500 ease-in-out"
                >
                  Auteur: {{ article?.data.author }}
                </span>
                le
                <span
                    id="span_date"
                    class="font-medium hover:text-gray-900 transition duration-500 ease-in-out"
                >
                  {{ formatedDate }}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
