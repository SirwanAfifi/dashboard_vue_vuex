import LineChart from "../components/Chart.vue"
import measurements from "../mock-data/measurements.json";

export default {
  title: 'Example/Chart',
  component: LineChart,
  argTypes: {
    data: [],
    labels: [],
    name: ""
  },
};

const getAsset = (assetId) => measurements.find(item => item.assetId === assetId);
const getAssetData = (assetId) => {
  const foundItem = getAsset(assetId);
  return {
    name: assetId,
    data: Object.values(JSON.parse(JSON.stringify(Object.entries(foundItem.measurements)))).map(i => i[1]),
    labels: Object.keys(foundItem.measurements).map(dt => new Date(dt).toLocaleString("default", { month: "long" })), 
  }
};

const Template = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { LineChart },
    template: '<LineChart v-bind="$props" />',
  });

export const Asset0 = Template.bind({});
const assets0 = getAssetData(0);
Asset0.args = {
    data: assets0.data,
    labels: assets0.labels,
    name: assets0.name
};

export const Asset2 = Template.bind({});
const assets2 = getAssetData(2);
Asset2.args = {
    data: assets2.data,
    labels: assets2.labels,
    name: assets2.name
};

export const Asset4 = Template.bind({});
const assets4 = getAssetData(4);
Asset4.args = {
    data: assets4.data,
    labels: assets4.labels,
    name: assets4.name
};