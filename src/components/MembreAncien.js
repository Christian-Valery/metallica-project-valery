import React from "react";
import "./MembreActuel.css";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";

const MembreAncien = ({ membre }) =>   (
      <p>{membre.name}</p>

);

export default MembreAncien;
