import React from "react";
import {
  Container,
  Legend,
  LegendeContainer,
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
      <LegendeContainer>
        {data.map((indicator) => {
          return (
            <Legend backgroundColor={indicator.color} key={indicator.name}>
              <div>{indicator.percent}%</div>
              <span>{indicator.name}</span>
            </Legend>
          );
        })}
      </LegendeContainer>
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
