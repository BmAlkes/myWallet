import React from "react";
import { Container, Content } from "./styles";
import ContentHeader from "../../components/ContentHeader";
import SelectInput from "../../components/SelectInput";
import HistoryFinanceCard from "../../components/HistoryFinanceCard/index.tsx";

const List: React.FC = () => {
  const options = [{ value: "bmalkes", label: "Bmalkes" }];
  const frutas = [
    { value: "banana", label: "Banana" },
    { value: "uva", label: "Uva" },
  ];
  return (
    <Container>
      <ContentHeader title="Outcome" lineColor="#E44c4e">
        <SelectInput options={options} />
        <SelectInput options={frutas} />
      </ContentHeader>
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
