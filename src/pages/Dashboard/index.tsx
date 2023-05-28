import React, { useCallback, useMemo, useState } from "react";
import { Container, Content } from "./styles";
import ContentHeader from "../../components/ContentHeader";
import SelectInput from "../../components/SelectInput";
import expenses from "../../repositories/expenses";
import gains from "../../repositories/gains";
import listOfMonths from "../../utils/months";
import WalletBox from "../../components/WalletBox";
import MessageBox from "../../components/MessageBox";
import happy from "../../assets/assets/happy.svg";
import sad from "../../assets/assets/sad.svg";

const DashBoard: React.FC = () => {
  const [monthSelected, setMonthSelected] = useState<number>(
    new Date().getMonth() + 1
  );
  const [yearSelected, setYearSelected] = useState<number>(
    new Date().getFullYear()
  );

  const years = useMemo(() => {
    const uniqueYears: number[] = [];

    [...expenses, ...gains].forEach((item) => {
      const date = new Date(item.date);
      const year = date.getFullYear();

      if (!uniqueYears.includes(year)) {
        uniqueYears.push(year);
      }
    });

    return uniqueYears.map((year) => {
      return {
        value: year,
        label: year,
      };
    });
  }, []);

  const months = useMemo(() => {
    return listOfMonths.map((month, index) => {
      return {
        value: index + 1,
        label: month,
      };
    });
  }, []);

  const totalExpenses = useMemo(() => {
    let total = 0;
    expenses.forEach((item) => {
      const date = new Date(item.date);
      const year = date.getFullYear();
      const month = date.getMonth() + 1;

      if (month === monthSelected && year === yearSelected) {
        try {
          total += Number(item.amount);
        } catch {
          throw new Error("Invalid amount");
        }
      }
    });
    return total;
  }, [monthSelected, yearSelected]);
  const totalGains = useMemo(() => {
    let total = 0;
    gains.forEach((item) => {
      const date = new Date(item.date);
      const year = date.getFullYear();
      const month = date.getMonth() + 1;

      if (month === monthSelected && year === yearSelected) {
        try {
          total += Number(item.amount);
        } catch {
          throw new Error("Invalid amount");
        }
      }
    });
    return total;
  }, [monthSelected, yearSelected]);

  const totalBalance = useMemo(() => {
    return totalGains - totalExpenses;
  }, [totalExpenses, totalGains]);

  const handleMonthSelected = useCallback((month: string) => {
    try {
      const parseMonth = Number(month);
      setMonthSelected(parseMonth);
    } catch {
      throw new Error("invalid month value. Is accept 0 - 24.");
    }
  }, []);

  const handleYearSelected = useCallback((year: string) => {
    try {
      const parseYear = Number(year);
      setYearSelected(parseYear);
    } catch {
      throw new Error("invalid year value. Is accept integer numbers.");
    }
  }, []);

  const message = useMemo(() => {
    if (totalBalance < 0) {
      return {
        title: " That Sad",
        description: "This month you spent more than you should",
        footerText:
          "Check your expenses and try to cut some unnecessary things.",
        icon: sad,
      };
    }
    return {
      description: " Your wallet is positive!!",
      footerText: "Keep it up. Consider investing your balance",
      icon: happy,
      title: "Well Done !",
    };
  }, [totalBalance]);

  return (
    <Container>
      <ContentHeader title="Dashboard" lineColor=" #ff931b">
        <SelectInput
          options={months}
          defaultValue={monthSelected}
          onChange={(e) => handleMonthSelected(e.target.value)}
        />
        <SelectInput
          options={years}
          defaultValue={yearSelected}
          onChange={(e) => handleYearSelected(e.target.value)}
        />
      </ContentHeader>
      <Content>
        <WalletBox
          title="Balance"
          amount={totalBalance}
          footerlabel={"atualizado com base mas entradas e saidas"}
          icon="dolar"
          color="#4e41f0"
          key=""
        />
        <WalletBox
          title="Income"
          amount={totalGains}
          footerlabel={"atualizado com base mas entradas e saidas"}
          icon="arrowUp"
          color="#f7931b"
          key=""
        />
        <WalletBox
          title="Outcome"
          amount={totalExpenses}
          footerlabel={"atualizado com base mas entradas e saidas"}
          icon="arrowDown"
          color="#e44c4e"
          key=""
        />
        <MessageBox
          description={message.title}
          footerText={message.footerText}
          icon={message.icon}
          title={message.title}
        />
      </Content>
    </Container>
  );
};

export default DashBoard;
