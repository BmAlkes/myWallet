import React from "react";
import {
  Container,
  Legend,
  LegendContainer,
  SideLeft,
  SideRight,
} from "./styled";
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";
interface IPieProps {
  data: {
    name: string;
    value: number;
    percent: number;
    color: string;
  }[];
}

const PieChartDash: React.FC<IPieProps> = ({ data }) => (
  <Container>
    <SideLeft>
      <h2> Ratio</h2>
      <LegendContainer>
        {data.map((indicator) => {
          return (
            <Legend color={indicator.color} key={indicator.name}>
              <div>{indicator.percent}%</div>
              <span>{indicator.name}</span>
            </Legend>
          );
        })}
      </LegendContainer>
    </SideLeft>
    <SideRight>
      <ResponsiveContainer>
        <PieChart>
          <Pie data={data} labelLine={false} dataKey="percent">
            {data.map((indicator) => (
              <Cell key={indicator.name} fill={indicator.color} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </SideRight>
  </Container>
);

export default PieChartDash;
