<script>
import { Line } from "vue-chartjs";

export default {
  extends: Line,
  mounted() {
    this.$store.subscribe(mutation => {
      const { measurements, asset } = mutation.payload;
      if (!measurements) return;
      const labels = Object.keys(measurements).map(dt => new Date(dt).toLocaleString("default", { month: "long" }));
      this.renderChart(
        {
          labels,
          datasets: [
            {
              label: asset.name,
              data: Object.values(JSON.parse(JSON.stringify(Object.entries(measurements)))).map(i => i[1]),
              backgroundColor: "transparent",
              borderColor: "rgba(1, 116, 188, 0.50)",
              pointBackgroundColor: "rgba(171, 71, 188, 1)",
            },
          ],
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
