import React from "react";
import "./chart.scss";
import {
  AreaChart,
  Area,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Chart = () => {
  const data = [
    { name: "January", Total: 1200 },
    { name: "February", Total: 1210 },
    { name: "March", Total: 810 },
    { name: "April", Total: 998 },
    { name: "May", Total: 2100 },
    { name: "June", Total: 1580 },
  ];

  return (
    <div className="chart">
      <div className="title">Last 6 Months Revenue</div>
      <ResponsiveContainer width="100%" aspect={2 / 1}>
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" className="chartGrid" />
          <XAxis dataKey="name" stroke="gray" />

          <Tooltip />
          <Area
            type="monotone"
            dataKey="name"
            stackId="1"
            stroke="#8884d8"
            fill="#8e22bf75"
          />
          <Area
            type="monotone"
            dataKey="Total"
            stackId="1"
            stroke="#82ca9d"
            fill="#8e22bf75"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
