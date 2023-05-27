import React from "react";
import { Container, Content, Filters } from "./styles";
import ContentHeader from "../../components/ContentHeader";
import SelectInput from "../../components/SelectInput";
import HistoryFinanceCard from "../../components/HistoryFinanceCard/index.tsx";

const List: React.FC = () => {
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
      <ContentHeader title="Outcome" lineColor="#E44c4e">
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
        <HistoryFinanceCard
          tagColor="#e44c4e"
          title="Conta de luz"
          subtitle="26/05/2023"
          amount="$ 35,00"
          key=""
        />
      </Content>
    </Container>
  );
};

export default List;
