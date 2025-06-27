import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from 'chart.js';

export function registerChartJSComponents() {
  ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);
}
