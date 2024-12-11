import { Container, Table } from "@mantine/core";
import React from "react";

const OutcomeTable: React.FC = () => {
  return (
    <Container size={"sm"}>
      <Table withColumnBorders>
        <Table.Tbody>
          <Table.Tr>
            <Table.Td />
            <Table.Td className="text-center">Your friend cooperates</Table.Td>
            <Table.Td className="text-center">Your friend betrays</Table.Td>
          </Table.Tr>
          <Table.Tr>
            <Table.Td>You cooperate</Table.Td>
            <Table.Td>Both serve 1 year (Best scenario in general)</Table.Td>
            <Table.Td>You serve 5 years, your friend get free</Table.Td>
          </Table.Tr>
          <Table.Tr>
            <Table.Td>You betray</Table.Td>
            <Table.Td>You get free, your friend gets 5 years</Table.Td>
            <Table.Td>Both serve 3 years (Logical scenario)</Table.Td>
          </Table.Tr>
        </Table.Tbody>
      </Table>
    </Container>
  );
};

export default OutcomeTable;
