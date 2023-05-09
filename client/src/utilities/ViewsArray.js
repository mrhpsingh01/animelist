import List from "../components/Charts/List";
import Table from "../components/Charts/Table";
import Linechart from "../components/Charts/Linechart";
import Areachart from "../components/Charts/Areachart";
import Barchart from "../components/Charts/Barchart";
import PieChart from "../components/Charts/PieChart";
import DoughnutChart from "../components/Charts/DoughnutChart";
import PolarAreaChart from "../components/Charts/PolarAreaChart";
import RadarChart from "../components/Charts/RadarChart";
import StackedBarChart from "../components/Charts/StackedBarChart";

const viewArray = [
  { name: "list", component: List },
  { name: "table", component: Table },
  { name: "linechart", component: Linechart },
  { name: "areachart", component: Areachart },
  { name: "barchart", component: Barchart },
  { name: "stackedbarchart", component: StackedBarChart },
  { name: "piechart", component: PieChart },
  { name: "doughnutchart", component: DoughnutChart },
  { name: "polarareachart", component: PolarAreaChart },
  { name: "radarchart", component: RadarChart },
];

export default viewArray;
