import React, { useMemo, useState, useEffect } from "react";
import { Container, Content, Filters } from "./styles";
import ContentHeader from "../../components/ContentHeader";
import SelectInput from "../../components/SelectInput";
import HistoryFinanceCard from "../../components/HistoryFinanceCard/index.tsx";
import { useParams } from "react-router-dom";
import expenses from "../../repositories/expenses.ts";
import gains from "../../repositories/gains.ts";

interface IData {
  id: string;
  description: string;
  amountFormatted: string;
  frequency: string;
  dataFormatted: string;
  tagColor: string;
}

const List: React.FC = () => {
  const [data, setData] = useState<IData[]>([]);
  const { type } = useParams();

  const title = useMemo(() => {
    return type === "entry-balance"
      ? { title: "Income", lineColor: "#f7931b" }
      : { title: "Outcome", lineColor: "#e44c4e" };
  }, [type]);

  const listData = useMemo(() => {
    return type === "entry-balance" ? gains : expenses;
  }, [type]);

  useEffect(() => {
    const response = listData.map((item) => {
      return {
        id: String(Math.random() * data.length),
        description: item.description,
        amountFormatted: item.amount,
        frequency: item.frequency,
        dataFormatted: item.date,
        tagColor: "#4e41f0",
      };
    });

    setData(response);
  }, []);

  const months = [
    { value: 6, label: "June" },
    { value: 7, label: "July" },
    { value: 8, label: "August" },
    { value: 9, label: "September" },
    { value: 10, label: "October" },
  ];
  const years = [
    { value: 2023, label: 2023 },
    { value: 2024, label: 2024 },
    { value: 2025, label: 2025 },
  ];
  return (
    <Container>
      <ContentHeader title={title.title} lineColor={title.lineColor}>
        <SelectInput options={months} />
        <SelectInput options={years} />
      </ContentHeader>
      <Filters>
        <button type="button" className="tag-filter tag-filter-reccurent">
          Recurrent
        </button>
        <button type="button" className="tag-filter tag-filter-eventual">
          Eventual
        </button>
      </Filters>
      <Content>
        {data.map((item) => (
          <HistoryFinanceCard
            tagColor={item.tagColor}
            title={item.description}
            subtitle={item.dataFormatted}
            amount={`$${item.amountFormatted}`}
            key={item.id}
          />
        ))}
      </Content>
    </Container>
  );
};

export default List;
