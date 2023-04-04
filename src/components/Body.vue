<template>
  <div class="container mx-auto px-5 max-w-screen-lg w-4/5 content-center">
    <SortOptions :sortOptions="sortOptions" @sort="onSort" />
    <JobList :sortOption="selectedSortOption" />
  </div>
</template>

<script lang="ts">
import {  defineComponent, ref } from 'vue';
import JobList from './JobList.vue';
import SortOptions from './SortOptions.vue';
import { sortOptions, SortOption } from '../types/SortOption';

export default defineComponent({
  components: { JobList, SortOptions },
  setup() {
    const selectedSortOption = ref<SortOption>(sortOptions[0]);

    const onSort = (option: SortOption) => {
      selectedSortOption.value = option;
    };

    return { sortOptions, selectedSortOption, onSort };
  },
});
</script>
