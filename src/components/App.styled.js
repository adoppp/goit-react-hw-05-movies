import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Link = styled(NavLink)`
  padding: 8px 32px;
  border-radius: 4px;
  text-decoration: none;
  color: gray;
  font-weight: 500;
  background-color: #2f2e2e;

  &.active {
    color: white;
    background-color: #3A3535;
  }
`;

  // transition-property: сolor, background-color; 
  // transition-duration: 250ms; 
  // transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);