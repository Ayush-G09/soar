import React, { useState } from "react";
import Label from "../Label";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

type Props = {
  title: string;
  type: "text" | "password" | "date";
  value: string;
  onChange: (e: string) => void;
  disabled: boolean;
  error: string;
};

function InputField({ title, type, value, onChange, disabled, error }: Props) {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const formatDate = (date: Date) => {
    const options: Intl.DateTimeFormatOptions = {
      day: "2-digit",
      month: "long",
      year: "numeric",
    };
    return date.toLocaleDateString("en-GB", options);
  };

  const handleDateChange = (date: Date | null) => {
    if (date) {
      onChange(formatDate(date));
    } else {
      onChange("");
    }
  };

  return (
    <div style={{width: "100%",
      maxWidth: "418px"}}>
    <div
      style={{
        width: "100%",
        height: "80px",
        display: "flex",
        flexDirection: "column",
        boxSizing: "border-box",
        justifyContent: "space-between",
        position: "relative",
      }}
    >
      <Label size="16px" weight={400} color="#232323">
        {title}
      </Label>

      {type === "date" ? (
        <DatePicker
          selected={value ? new Date(value) : null}
          onChange={handleDateChange}
          dateFormat="dd MMMM yyyy"
          disabled={disabled}
          customInput={
            <input
              style={{
                width: "98%",
                height: "50px",
                padding: "0px 15px",
                backgroundColor: "white",
                border: "1px solid #DFEAF2",
                outline: "none",
                borderRadius: "15px",
                fontWeight: 400,
                fontSize: "15px",
                color: "#718EBF",
                boxSizing: "border-box",
              }}
              value={value}
            />
          }
        />
      ) : (
        <input
          disabled={disabled}
          onChange={(e) => onChange(e.target.value)}
          value={value}
          type={
            type === "password" ? (showPassword ? "text" : "password") : type
          }
          style={{
            width: "98%",
            height: "50px",
            padding: "0px 15px",
            paddingRight: type === "password" ? "50px" : "0px",
            backgroundColor: "white",
            border: "1px solid #DFEAF2",
            outline: "none",
            borderRadius: "15px",
            fontWeight: 400,
            fontSize: "15px",
            color: "#718EBF",
            boxSizing: "border-box",
          }}
        />
      )}

      {type === "password" && (
        <div
          onClick={() => setShowPassword(!showPassword)}
          style={{
            width: "50px",
            height: "50px",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            bottom: 0,
            right: 10,
            borderRadius: "15px",
          }}
        >
          <FontAwesomeIcon
            icon={showPassword ? faEyeSlash : faEye}
            color="#718EBF"
          />
        </div>
      )}
    </div>
    {error && <Label sx={{marginTop: '0.2rem'}} color="red" size="0.8rem" weight={500}>{error}</Label>}
    </div>
  );
}

export default InputField;
