<template>
  <div class="h-screen overflow-hidden w-screen font-light">
    <header class="w-full h-20 bg-blue-500 shadow-lg flex items-center">
      <h1 class="pl-4 text-2xl text-white">Spectral Front-End Assignment</h1>
    </header>
    <div class="flex h-full w-full">
      <section class="h-full w-72 bg-gray-800">
        <Tree :assets="assets" :depth="0" />
      </section>
      <main class="flex-1 overflow-x-auto">
        <LineChart />
      </main>
    </div>
  </div>
</template>

<script>
import LineChart from "./Chart.vue";
import Tree from "./Tree.vue";
import assets from "../mock-data/assets.json";
import { buildTree } from "../utils/buildTree";
export default {
  components: {
    LineChart,
    Tree,
  },
  data() {
    const tree = buildTree(assets);
    return {
      assets: {
        name: "",
        children: tree,
      },
    };
  },
};
</script>
