import { Container, Table } from "@mantine/core";
import React from "react";

const AxelrodOutcomeTable: React.FC = () => {
  return (
    <Container size={"sm"}>
      <Table withColumnBorders>
        <Table.Caption>
          Payoff table of axelrod version of the prisoner's dilemma
        </Table.Caption>
        <Table.Tbody>
          <Table.Tr>
            <Table.Td />
            <Table.Td className="text-center">Agent A cooperates</Table.Td>
            <Table.Td className="text-center">Agent A betrays</Table.Td>
          </Table.Tr>
          <Table.Tr>
            <Table.Td>Agent B cooperates</Table.Td>
            <Table.Td>Both A and B get 3 points each</Table.Td>
            <Table.Td>A gets 5 points, B gets nothing</Table.Td>
          </Table.Tr>
          <Table.Tr>
            <Table.Td>Agent B betrays</Table.Td>
            <Table.Td>A gets nothing, B gets 5 points</Table.Td>
            <Table.Td>Both A and B get 1 point each</Table.Td>
          </Table.Tr>
        </Table.Tbody>
      </Table>
    </Container>
  );
};

export default AxelrodOutcomeTable;
