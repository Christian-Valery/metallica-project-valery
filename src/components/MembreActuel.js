import React from "react";
import "./MembreActuel.css";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";

let mbre = "";
const MembreActuel = ({ membre }) =>   (
<li><a href={membre.urlAllmusic}>{membre.name}</a></li>
);

export default MembreActuel;
