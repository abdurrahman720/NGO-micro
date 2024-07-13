"use client";
import React, { useState } from "react";
import DonateButton from "../../DonateButton";

type Props = {};

type AmountButtonProps = {
  value: number;
  setAmount: any;
  amount: number;
};

const AmountButton = ({ value, setAmount, amount }: AmountButtonProps) => {
  const checked = value === amount;

  return (
    <button
      className={`border-green-400 border-2 px-8 py-4 rounded bg-green-200 ${
        checked ? "border" : "border-none"
      }`}
      onClick={() => setAmount(value)}
    >
      {`${value}Tk`}
    </button>
  );
};

const DonateInput = (props: Props) => {
  const [amount, setAmount] = useState<number>(500);
  return (
    <div className="flex flex-col gap-5 items-center justify-center">
      <div className="flex justify-centre items-center gap-5   overflow-scroll">
        <AmountButton value={100} setAmount={setAmount} amount={amount} />
        <AmountButton value={500} setAmount={setAmount} amount={amount} />
        <AmountButton value={1000} setAmount={setAmount} amount={amount} />
        <AmountButton value={2000} setAmount={setAmount} amount={amount} />
      </div>

      <form action="" className="flex flex-col gap-3  mx-auto ">
        <input
          type="nuber"
          value={amount}
          onChange={(e: any) => setAmount(e.target.value)}
          className="min-w-[300px] w-[400px] border-b-2 border-black appearance-none focus:outline-none focus:shadow-outline"
        />
        <div className="w-40 mx-auto">
          <DonateButton type="submit">Donate Now</DonateButton>
        </div>
      </form>
    </div>
  );
};

export default DonateInput;
