import { ref } from "vue";

/**
 * 1. Все модальны окна связаны и открыта может быть только 1. Считайте это как табы, когды вы переключаете.
 */
const modalQueue = ref<string[]>([]);

interface UseModalReturn {
  /**
   * Добавляет модалку в очередь на открытие.
   */
  open(el: string): void;

  /**
   * Убирает модалку из очереди.
   */
  close(): void;
  /**
   * Очередь модалок
   */
  modalQueue: typeof modalQueue;
}

export function useModal(): UseModalReturn {
  function open(id: string) {
    modalQueue.value.push(id);
  }

  function close() {
    modalQueue.value.shift();
  }

  return {
    open,
    close,
    modalQueue,
  };
}
