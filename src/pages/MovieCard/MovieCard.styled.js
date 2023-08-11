import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const GoBack = styled(NavLink)`
color: black;
`;

export const InfoLink = styled(NavLink)`
  padding: 8px 32px;
  border-radius: 4px;
  text-decoration: none;
  color: white;
  font-weight: 500;
  background-color: #2f2e2e;

  &.active {
    color: white;
    background-color: #3A3535;
  }
`;