import React from "react";
import { Container } from "./styles";
import ContentHeader from "../../components/ContentHeader";
import SelectInput from "../../components/SelectInput";

const DashBoard: React.FC = () => {
  const options = [{ value: "bmalkes", label: "Bmalkes" }];
  const frutas = [
    { value: "banana", label: "Banana" },
    { value: "uva", label: "Uva" },
  ];
  return (
    <Container>
      <ContentHeader title="Dashboard" lineColor=" #ff931b">
        <SelectInput options={options} />
        <SelectInput options={frutas} />
      </ContentHeader>
    </Container>
  );
};

export default DashBoard;
