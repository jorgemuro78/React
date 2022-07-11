import styled, { css } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const colors = {
  border: "#0075ff",
  error: "#bb2929",
  exito: "#42b883",
};

const Formulario = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Label = styled.label`
display: block;
font-weight: 700;
padding: 10px;
min-height: 40px
cursor: pointer;
color: black;

${(props) =>
  props.valido === "false" &&
  css`
    color: ${colors.error};
  `}
`;

const GrupoInput = styled.div`
  position: relative;
  z-index: 90;
`;

const Input = styled.input`
  width: 100%;
  background: #fff;
  border-radius: 3px;
  height: 45px;
  padding: 0 40px 0 10px;
  border: 3px solid transparent;

  &:focus {
    border: 3px solid ${colors.border};
    outline: none;
    box-shadow: 3px 0px 30px rgba(163, 163, 163, 0.4);
  }

  ${(props) =>
    props.valido === "true" &&
    css`
      border: 3px solid transparent;
    `}
  ${(props) =>
    props.valido === "false" &&
    css`
      border: 3px solid ${colors.error} !important;
    `}
`;

const LegendError = styled.p`
  font-size: 12px;
  margin-bottom: 0;
  color: ${colors.error};
  display: none;

  ${(props) =>
    props.valido === "true" &&
    css`
      display: none;
    `}
  ${(props) =>
    props.valido === "false" &&
    css`
      display: block;
    `}
`;

const IconValidation = styled(FontAwesomeIcon)`
  position: absolute;
  right: 10px;
  bottom: 14px;
  z-index: 100;
  font-size: 16px;
  opacity: 0;

  ${(props) =>
    props.valido === "false" &&
    css`
      opacity: 1;
      color: ${colors.error};
    `}

  ${(props) =>
    props.valido === "true" &&
    css`
      opacity: 1;
      color: ${colors.exito};
    `}
`;

const ContainerTerms = styled.div`
  grid-column: span 2;

  input {
    margin-right: 10px;
  }

  @media (max-width: 768px) {
    grid-column: span 1;
  }
`;

const ContainerButtonCenter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-column: span 2;

  @media (max-width: 768px) {
    grid-column: span 1;
  }
`;

const Button = styled.button`
  height: 45px;
  line-height: 45px;
  width: 30%;
  background: #000;
  color: #fff;
  font-weight: bod;
  border: none;
  border-radius: 3px;
  cursor: poiner;
  transition: 0.1s ease all;

  &:hover {
    box-shadow: 3px 0px 30px rgba(163, 163, 163, 1);
  }
`;

const SuccesMessage = styled.p`
  font-size: 14px;
  color: ${colors.exito};
`;

const ErrorMessage = styled.div`
  height: 45px;
  line-height: 45px;
  background: #f66060;
  padding: 0px 15px;
  border-radius: 3px;
  grid-column: span 2;
  p {
    margin: 0;
  }
  b {
    margin-left: 10px;
  }

  @media (max-width: 768px) {
    grid-column: span 1;
    font-size: 10px;
  }
  @media (max-width: 406px) {
    grid-column: span 1;
    font-size: 7px;
  }
`;

export {
  Formulario,
  Label,
  GrupoInput,
  Input,
  LegendError,
  IconValidation,
  ContainerTerms,
  ContainerButtonCenter,
  Button,
  SuccesMessage,
  ErrorMessage,
};
