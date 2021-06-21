<!-- eslint-disable vue/no-use-v-if-with-v-for,vue/no-confusing-v-for-v-if -->
<template>
  <ul class="w-full text-2xl text-white">
    <li
      @click="setSelectedAsset(assets)"
      v-if="assets.name"
      class="pl-8 h-16 flex items-center hover:bg-blue-800 cursor-pointer"
      :style="[![0, 1].includes(depth) && { 'padding-left': depth * 20 + 'px' }, {}]"
    >
      <span v-if="assets.children.length === 0" class="w-4 h-4"></span>
      <svg
        v-if="expanded && assets.children.length > 0"
        class="inline-block w-4 h-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
      </svg>
      <svg
        v-if="!expanded && assets.children.length > 0"
        class="inline-block w-4 h-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
      </svg>
      <span class="ml-2">{{ assets.name }}</span>
    </li>
    <Tree v-if="expanded" v-for="asset in assets.children" v-bind:key="asset.id" :assets="asset" :depth="depth + 1" />
  </ul>
</template>
<script>
import measurements from "../mock-data/measurements.json";
export default {
  name: "Tree",
  props: ["assets", "depth"],
  data() {
    return {
      expanded: true,
    };
  },
  methods: {
    setSelectedAsset(asset) {
      this.expanded = !this.expanded;
      const foundItem = measurements.find(item => item.assetId === asset.id);
      /* {
        label: "Data 1",
        data: [2, 10, 5, 9, 0, 6, 20],
        backgroundColor: "transparent",
        borderColor: "rgba(1, 116, 188, 0.50)",
        pointBackgroundColor: "rgba(171, 71, 188, 1)"
      } */
      this.$store.commit("setSelectedAsset", { asset, measurements: (foundItem && foundItem.measurements) || [] });
    },
  },
};
</script>
<style scoped></style>
