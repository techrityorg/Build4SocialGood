import React from "react";

const FormatMoney = ({ money }) => {
  const format = (value) => {
    return new Intl.NumberFormat("ng-NG", {
      maximumFractionDigits: 0,
    }).format(value);
  };

  const fractionToMoney = (value) => {
    return value / 100;
  };

  return <>₦{format(fractionToMoney(money))}</>;
};

export function InputMoney(value) {
  let number = value?.toString();
  let num = number?.replace(/,/gi, "");
  return num?.split(/(?=(?:\d{3})+$)/).join(",");
}

export function FormatCard(value) {
  // let number = value?.toString();
  let num = value?.replace(/,/gi, "");
  return value?.split(/(?=(?:\d{4})+$)/).join(" ");
}

export function FormatExpiry(value) {
  // let number = value?.toString();
  let num = value?.replace(/,/gi, "");
  return value?.split(/(?=(?:\d{2})+$)/).join(" / ");
}

export function parseMoney(value) {
  let numberWithComma = value.toString().replace(/[^0-9\.\,]+/g, "");
  return numberWithComma.toString().replace(/,/g, "");
}

export function inlineFormatMoney(money) {
  const format = (value) => {
    return new Intl.NumberFormat("ng-NG", {
      maximumFractionDigits: 0,
    }).format(value);
  };

  const fractionToMoney = (value) => {
    return value / 100;
  };

  return format(fractionToMoney(money));
}
export default FormatMoney;
