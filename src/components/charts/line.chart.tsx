import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { CHART_COLORS } from "../../constants";

interface CustomLineChartProps {
  data: any;
  xAxisKey: string;
  dataKeys: string[];
}

export const CustomLineChart: React.FC<CustomLineChartProps> = (props) => {
  return (
    <ResponsiveContainer width="100%" height={320}>
      <LineChart
        data={props.data}
        margin={{ top: 10, right: 10, left: 10, bottom: 10 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey={props.xAxisKey} />
        <YAxis />
        <Tooltip />
        <Legend />
        {props.dataKeys.map((k, i) => (
          <Line type="monotone" dataKey={k} stroke={CHART_COLORS[i]} />
        ))}
      </LineChart>
    </ResponsiveContainer>
  );
};
