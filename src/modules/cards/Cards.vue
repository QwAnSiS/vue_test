<template>
  <draggable v-model="items"
             group="people"
             @start="drag=true"
             @end="drag=false"
             item-key="id"
             :disabled="!dd"
  >
    <template #item="{element}">
      <q-card style="width: 250px; margin: 25px"
              :style="{background: element.color}"
      >
        <q-card-section>
          <div class="text-h6">{{ element.title }}</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          {{ element.content }}
        </q-card-section>


      </q-card>
    </template>
  </draggable>
</template>

<script>
import { defineComponent } from "vue";
import draggable from "vuedraggable";

export default defineComponent({
  name: "Cards",
  components: {
    draggable,
  },
  data() {
    return {
      drag: false,
      items: [],
    };
  },
  computed: {
    cards() {
      return this.$store.state.cards;
    },
    dd: {
      get() {
        return this.$store.getters.dd;
      },
    },
  },
  created() {
    const items = [];
    for (let i = 1; i <= this.cards.count; i++) {
      items.push({
        id: i,
        title: this.cards.title,
        content: this.cards.content,
        color: this.getRandomColor(),
      });
    }
    this.items = items;
  },
  methods: {
    getRandomColor() {
      return "#" + Math.floor(Math.random() * 16777215).toString(16);

    },
  },
});
</script>

<style>
.drop-zone {
  width: 50%;
  margin: 50px auto;
  background-color: #ecf0f1;
  padding: 10px;
  min-height: 10px;
}

.drag-el {
  background-color: #3498db;
  color: white;
  padding: 50px;
  margin-bottom: 10px;

}
</style>
