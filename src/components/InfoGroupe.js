import React from "react";
import "./InfoGroupe.css";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";

const MembreActuel = ({ membre }) =>   (
  <TableRow>
    <TableCell component="th" scope="row">
      {membre.name}
    </TableCell>
    <TableCell component="th" scope="row">
      {membre.birthDate}
    </TableCell>
  </TableRow>
);

export default InfoGroupe;
