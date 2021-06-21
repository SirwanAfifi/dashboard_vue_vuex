<script>
import { Line } from "vue-chartjs";

export default {
  extends: Line,
  mounted() {
    this.$store.subscribe(mutation => {
      const data = mutation.payload.measurements;
      if (!data) return;
      const labels = Object.keys(data).map(dt => new Date(dt).toLocaleString("default", { month: "long" }));
      const dataset = Object.entries(data).reduce((r, [key, value]) => {
        let month = new Date(key).toLocaleString("default", { month: "long" });
        if (!r[month]) r[month] = [value];
        else r[month].push(value);
        return r;
      }, {});

      this.renderChart(
        {
          labels,
          datasets: Object.entries(JSON.parse(JSON.stringify(dataset))).map(([itemKey, itemValues]) => ({
            label: itemKey,
            data: itemValues,
            backgroundColor: "transparent",
            borderColor: "rgba(1, 116, 188, 0.50)",
            pointBackgroundColor: "rgba(171, 71, 188, 1)",
          })),
        },
        {
          responsive: true,
          maintainAspectRatio: false,
          title: {
            display: true,
            text: "My Data",
          },
        },
      );
    });
  },
};
</script>
