<template>
  <div class="sort-options mt-6 relative h-8">
    <div class="absolute top-0 right-0">
      <label for="sort-options" class="block mb-2 text-sm font-medium text-gray-900"></label>
      <select v-model="selectedOption" id="sort-options" @change="handleChange" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5">
        <option v-for="option in sortOptions" :value="option">{{ option.label }}</option>
      </select>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from 'vue';
import { SortOption } from '../types/SortOption';

export default defineComponent({
  props: {
    sortOptions: {
      type: Array as PropType<SortOption[]>,
      required: true,
    },
  },
  emits: ['sort'],
  setup(props, { emit }) {
    const selectedOption = ref(props.sortOptions[0]);

    const handleChange = () => {
      emit('sort', selectedOption.value);
    };

    return { selectedOption, handleChange };
  },
});
</script>