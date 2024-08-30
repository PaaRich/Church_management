import React, { PureComponent } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  ReferenceDot,
} from "recharts";

const data = [
  {
    name: "Week 1",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Week 2",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Week 3",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Week 4",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Week 5",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Week 6",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Week 7",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export default class BarChart extends PureComponent {
  static demoUrl =
    "https://codesandbox.io/p/sandbox/area-chart-in-responsive-container-y5m29r";

  render() {
    return (
      <div style={{ width: "100%", height: 300 }}>
        <ResponsiveContainer>
          <AreaChart
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Area
              type="monotone"
              dataKey="uv"
              stroke="#4b0082"
              fill="#c71585"
              name="Male"
              dot={{ stroke: "#8884d8", strokeWidth: 2, r: 4 }}
            />
            <Area
              type="monotone"
              dataKey="pv"
              stroke="#66023c"
              fill="#4b0082"
              name="Female"
              dot={{ stroke: "#82ca9d", strokeWidth: 2, r: 4 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
