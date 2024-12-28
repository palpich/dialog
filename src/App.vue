<template>
  <Dialog v-model:open="modals.first">First</Dialog>

  <Dialog v-model:open="modals.second">Second</Dialog>

  <button @click="handleClick('first')">open first</button>
  <button @click="handleClick('second')">open second</button>
  <button @click="handleClick('both')">open first, then second</button>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import Dialog from "./Dialog/Dialog.vue";

const modals = reactive({
  first: false,
  second: false,
});

function handleClick(id: string) {
  if (id === "both") {
    modals.first = true;
    modals.second = true;
  } else {
    modals[id] = !modals[id];
  }
}
</script>
