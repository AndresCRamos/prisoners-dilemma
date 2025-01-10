import { Table } from "@mantine/core";
import React from "react";
import { rows } from "./data";

const GeneralResultsTable: React.FC = () => {
  return (
    <Table.ScrollContainer minWidth={320}>
      <Table>
        <Table.Tbody>
          {rows.map((row, rowIndex) => (
            <Table.Tr tabIndex={rowIndex}>
              {row.map((cell, cellIndex) => (
                <Table.Td tabIndex={cellIndex}>{cell}</Table.Td>
              ))}
            </Table.Tr>
          ))}
        </Table.Tbody>
      </Table>
    </Table.ScrollContainer>
  );
};

export default GeneralResultsTable;
