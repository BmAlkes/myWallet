import React, { useMemo, useState, useEffect } from "react";
import { Container, Content, Filters } from "./styles";
import ContentHeader from "../../components/ContentHeader";
import SelectInput from "../../components/SelectInput";
import HistoryFinanceCard from "../../components/HistoryFinanceCard/index.tsx";
import { useParams } from "react-router-dom";
import expenses from "../../repositories/expenses.ts";
import gains from "../../repositories/gains.ts";
import formatCurrency from "../../utils/formatCurrency.ts";
import formatDate from "../../utils/formatDate.ts";
import { v4 as uuidv4 } from "uuid";
import listOfMonths from "../../utils/months.ts";

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
  const [monthSelected, setMonthSelected] = useState<string>(
    String(new Date().getMonth() + 1)
  );
  const [yearSelected, setYearSelected] = useState<string>(
    String(new Date().getFullYear())
  );
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
    const filteredDate = listData.filter((item) => {
      const date = new Date(item.date);
      const month = String(date.getMonth() + 1);
      const year = String(date.getFullYear());

      return month === monthSelected && year === yearSelected;
    });

    const formattedDate = filteredDate.map((item) => {
      return {
        id: uuidv4(),
        description: item.description,
        amountFormatted: formatCurrency(Number(item.amount)),
        frequency: item.frequency,
        dataFormatted: formatDate(item.date),
        tagColor: item.frequency === "recorrente" ? "#4e41f0" : "#e44c4e",
      };
    });
    setData(formattedDate);
  }, [listData, monthSelected, yearSelected, data.length]);

  const year = useMemo(() => {
    const uniqueYears: number[] = [];

    listData.forEach((item) => {
      const date = new Date(item.date);
      const year = date.getFullYear();
      if (!uniqueYears.includes(year)) {
        uniqueYears.push(year);
      }
    });
    return uniqueYears.map((year) => {
      return { value: year, label: year };
    });
  }, [listData]);

  const month = useMemo(() => {
    return listOfMonths.map((month, index) => {
      return { value: index + 1, label: month };
    });
  }, [listData]);

  return (
    <Container>
      <ContentHeader title={title.title} lineColor={title.lineColor}>
        <SelectInput
          options={month}
          defaultValue={monthSelected}
          onChange={(e) => setMonthSelected(e.target.value)}
        />
        <SelectInput
          options={year}
          defaultValue={yearSelected}
          onChange={(e) => setYearSelected(e.target.value)}
        />
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
            amount={`${item.amountFormatted}`}
            key={item.id}
          />
        ))}
      </Content>
    </Container>
  );
};

export default List;
