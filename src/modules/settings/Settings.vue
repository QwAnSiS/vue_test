<template>
  <div class="q-pa-md">

    <q-input label="Заголовок карточек"
             v-model="title"
    ></q-input>

    <q-input label="Содержимое карточек"
             v-model="content"
    ></q-input>

    <q-input label="Кол-во карточек"
             v-model.number="count"
             type="number"
    ></q-input>

    <q-checkbox v-model="dd"
                label="drag`n`drop"
                left-label
                class="q-mt-md"
    ></q-checkbox>

    <br/>

    <q-btn label="Скачать настройки"
           class="q-mt-md"
           color="primary"
           @click="download"
    ></q-btn>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Settings",
  computed: {
    dd: {
      get() {
        return this.$store.getters.dd;
      },
      set(value) {
        this.$store.commit("setDd", value);
      },
    },
    title: {
      get() {
        return this.$store.getters.title;
      },
      set(value) {
        this.$store.commit("setTitle", value);
      },
    },
    content: {
      get() {
        return this.$store.getters.content;
      },
      set(value) {
        this.$store.commit("setContent", value);
      },
    },
    count: {
      get() {
        return this.$store.getters.count;
      },
      set(value) {
        this.$store.commit("setCount", value);
      },
    },
  },
  methods: {
    download() {
      const conf = Object.assign(
        {dragAndDrop: this.dd},
        this.$store.state.cards,
      )
      const text = JSON.stringify(conf);

      const element = document.createElement("a");
      element.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(text));
      element.setAttribute("download", "settings.json");

      element.style.display = "none";
      document.body.appendChild(element);

      element.click();

      document.body.removeChild(element);

    },
  },
});
</script>
