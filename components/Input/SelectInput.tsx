import { FormControl, FormLabel, Select } from "@chakra-ui/react";
import React, { useState } from "react";
import { MdArrowDropDown } from "react-icons/md";

type Props = {
  options: string[];
  islabel?: boolean;
  label?: string;
  value?: string;
  name: string;

  onChange: (t: any) => void;
};

const SelectInput = ({
  name,
  options,
  islabel = false,
  label,
  value,
  onChange,
}: Props) => {
  return (
    <FormControl className="flex flex-col gap-1">
      {islabel && (
        <FormLabel fontSize={14} className="!m-0 text-sm !font-semibold">
          {label}
        </FormLabel>
      )}
      <Select
        name={name}
        fontSize={14}
        onChange={onChange}
        icon={<MdArrowDropDown />}
        className="p-1 flex justify-center items-center px-3 outline-none border rounded-md border-[##D9D9D9
        ] cursor-pointer hover:border-[#747474] hover:bg-blue-50 focus-within:border-[#D9D9D9] transition-all focus-within:bg-[#f1f1f1]"
      >
        {options.map((option, i) => (
          <option key={i} value={option}>
            {option}
          </option>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectInput;
