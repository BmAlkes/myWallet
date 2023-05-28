import React, { useMemo } from "react";
import { Container } from "./styled";
import dollarImg from "../../assets/assets/dollar.svg";
import arrowUp from "../../assets/assets/arrow-up.svg";
import arrowDown from "../../assets/assets/arrow-down.svg";
import CountUp from "react-countup";

interface IWalletBoxProps {
  title: string;
  amount: number;
  icon: "dolar" | "arrowUp" | "arrowDown";
  footerlabel: string;
  color: string;
}

const WalletBox: React.FC<IWalletBoxProps> = ({
  amount,
  color,
  footerlabel,
  icon,
  title,
}) => {
  const iconSelected = useMemo(() => {
    if (icon === "dolar") return dollarImg;
    if (icon === "arrowUp") return arrowUp;
    if (icon === "arrowDown") return arrowDown;
  }, [icon]);
  return (
    <Container color={color}>
      <span>{title}</span>
      <h1>
        <CountUp
          end={amount}
          prefix={"$"}
          separator="."
          decimal="."
          decimals={0}
        />
      </h1>
      <small>{footerlabel}</small>
      <img src={iconSelected} alt="" />
    </Container>
  );
};

export default WalletBox;
