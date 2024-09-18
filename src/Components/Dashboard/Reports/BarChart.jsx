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
    week: "Week 1",
    male: 4000,
    female: 2400,
    amt: 2400,
  },
  {
    week: "Week 2",
    male: 3000,
    female: 1398,
    amt: 2210,
  },
  {
    week: "Week 3",
    male: 2000,
    female: 9800,
    amt: 2290,
  },
  {
    week: "Week 4",
    male: 2780,
    female: 3908,
    amt: 2000,
  },
  {
    week: "Week 5",
    male: 1890,
    female: 4800,
    amt: 2181,
  },
  {
    week: "Week 6",
    male: 2390,
    female: 3800,
    amt: 2500,
  },
  {
    week: "Week 7",
    male: 3490,
    female: 4300,
    amt: 2100,
  },
];

export default class BarChart extends PureComponent {
  static demoUrl =
    "https://codesandbox.io/p/sandbox/area-chart-in-responsive-container-y5m29r";

  render() {
    // console.log(this.props)
    let mydata=[];
    if(this.props.records.length >7){
      for(let i =0;i<=7;i++){
        mydata.push(this.props.records[i])
      }
    }else{
      mydata= this.props.records
    }
    // console.log(mydata)
    return (
      <div style={{ width: "100%", height: 300 }}>
        <ResponsiveContainer>
          <AreaChart
            data={mydata}
            margin={{
              top: 10,
              right: 10,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="week" tickFormatter={(tick) => `Week ${tick}`} />
            <YAxis
              // domain={[1, "dataMax + 1000"]}
              // tickCount={10}
              // interval="preserveStartEnd"
              // tickFormatter={(tick) => Math.ceil(tick / 10) * .2}
            />
            <Tooltip labelFormatter={(label) => `Week ${label}`} />
            <Legend />
            <Area
              type="monotone"
              dataKey="male"
              stroke="#4b0082"
              fill="#c71585"
              name="Male"
              dot={{ stroke: "#8884d8", strokeWidth: 2, r: 4 }}
            />
            <Area
              type="monotone"
              dataKey="female"
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
