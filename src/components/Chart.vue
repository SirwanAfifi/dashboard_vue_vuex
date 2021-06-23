<script>
import { Line } from "vue-chartjs";

export default {
  extends: Line,
  props: ["labels", "data", "name"],
  mounted() {
    this.renderChart(
        {
          labels: this.labels,
          datasets: [
            {
              label: this.name,
              data: this.data,
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
  },
};
</script>
