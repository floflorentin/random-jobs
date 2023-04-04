<template>
  <ul class="p-0">
    <li v-for="job in orderedJobs" :key="job.id" class="shadow-md p-4 my-4 rounded-md">
      <h2 class="block text-lg font-medium capitalize mb-2">{{ job.title }} in {{ job.location }}</h2>
      <div class="flex items-center">
        <p class="text-green-500 font-semibold">Salary : {{ job.salary }} euros</p>
      </div>
      <div class="flex items-center font-bold mb-2">
        <p>{{ job.company }} - {{ job.companyDesc}}</p>
      </div>
      <div class="description">
        <p>{{ job.description}}</p>
      </div>
    </li>
  </ul>
</template>

<script lang="ts">
import {computed, defineComponent, PropType, ref} from "vue";
import {SortOption} from "../types/SortOption";
import {createJobsArray} from "../utils/RandomGenerator";

export default defineComponent({
  props: {
    sortOption: {
      type: Object as PropType<SortOption>,
      default: null,
    },
  },
  setup(props) {
    const jobs = ref(createJobsArray(10))
    const orderedJobs = computed(() => {
      return [...jobs.value].sort(props.sortOption.comparator);
    });
    return { orderedJobs };
  },

})
</script>