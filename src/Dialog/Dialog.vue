<template>
  <dialog :id="id" ref="dialog" @close="handleClose">
    <slot></slot>
  </dialog>
</template>

<script setup lang="ts">
import { useTemplateRef, watchEffect, useId } from "vue";
import { useModal } from "./useModal";

const open = defineModel<boolean>("open");
const modalCtx = useModal();
const id = useId();
const dialogEl = useTemplateRef<HTMLDialogElement>("dialog");

watchEffect(() => {
  if (open.value) {
    modalCtx.open(dialogEl.value?.id);
  }
});

watchEffect(() => {
  if (modalCtx.modalQueue.value[0] === dialogEl.value?.id) {
    dialogEl.value?.showModal();
  } else if (!dialogEl.value?.open) {
    dialogEl.value?.close();
  }
});

function handleClose() {
  if (modalCtx.modalQueue.value[0] === dialogEl.value?.id) {
    modalCtx.close();
    open.value = false;
  }
}
</script>
