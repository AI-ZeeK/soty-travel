"use client";
import React, { useState } from "react";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";

type Props = {
  placeholder: string;
  name: string;
  value?: string;
  type?: string;
  password?: boolean;
  islabel?: boolean;
  label?: string;
  onChange: (t: any) => void;
};

const Input = ({
  placeholder,
  type = "text",
  password,
  name,
  value,
  islabel = false,
  label,
  onChange,
}: Props) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      {password ? (
        <div className="flex flex-col gap-1">
          {islabel && (
            <label className="text-sm font-semibold" htmlFor="">
              {label}
            </label>
          )}
          <div
            className="p-2 flex gap-1 justify-between border rounded-md border-[#D9D9D9
] hover:border-[#747474] hover:bg-blue-50 focus-within:border-[#D9D9D9] transition-all focus-within:bg-[#f1f1f1]"
          >
            <input
              required
              name={name}
              onChange={onChange}
              placeholder={placeholder}
              type={showPassword ? "text" : "password"}
              className="outline-none bg-transparent w-full"
            />
            <div
              onClick={() => setShowPassword((prev) => !prev)}
              className="w-12 min-w-[2rem] cursor-pointer text-gray-700 h-full flex justify-center items-center "
            >
              {showPassword ? (
                <BsEyeFill fontSize={24} />
              ) : (
                <BsEyeSlashFill fontSize={24} />
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-1">
          {islabel && (
            <label className="text-sm font-semibold" htmlFor="">
              {label}
            </label>
          )}

          <input
            required
            name={name}
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className="p-2 px-3 outline-none border rounded-md border-[##D9D9D9
            ] hover:border-[#747474] hover:bg-blue-50 focus-within:border-[#D9D9D9] transition-all focus-within:bg-[#f1f1f1]"
          />
        </div>
      )}
    </>
  );
};

export default Input;
