import React, { useState } from "react";
import Label from "../Label";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styled from "styled-components";

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
    <Container>
      <FieldWrapper>
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
              <StyledInput
                type="date"
                disabled={disabled}
                value={value}
                onChange={(e) => onChange(e.target.value)}
              />
            }
          />
        ) : (
          <StyledInput
            type={
              type === "password" ? (showPassword ? "text" : "password") : type
            }
            disabled={disabled}
            value={value}
            onChange={(e) => onChange(e.target.value)}
          />
        )}

        {type === "password" && (
          <PasswordToggle onClick={() => setShowPassword(!showPassword)}>
            <FontAwesomeIcon
              icon={showPassword ? faEyeSlash : faEye}
              color="#718EBF"
            />
          </PasswordToggle>
        )}
      </FieldWrapper>

      {error && (
        <ErrorMessage color="red" size="0.8rem" weight={500}>
          {error}
        </ErrorMessage>
      )}
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  max-width: 418px;
`;

const FieldWrapper = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  justify-content: space-between;
  position: relative;
`;

const StyledInput = styled.input<{
  type: "text" | "password" | "date";
  disabled: boolean;
}>`
  width: 98%;
  height: 50px;
  padding: 0px 15px;
  background-color: white;
  border: 1px solid #dfeaf2;
  outline: none;
  border-radius: 15px;
  font-weight: 400;
  font-size: 15px;
  color: #718ebf;
  box-sizing: border-box;
  padding-right: ${({ type }) => (type === "password" ? "50px" : "0px")};
`;

const PasswordToggle = styled.div`
  width: 50px;
  height: 50px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 0;
  right: 10px;
  border-radius: 15px;
`;

const ErrorMessage = styled(Label)`
  margin-top: 0.2rem;
  color: red;
  font-size: 0.8rem;
`;

export default InputField;
