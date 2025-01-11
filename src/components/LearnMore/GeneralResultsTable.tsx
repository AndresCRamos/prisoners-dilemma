import { Accordion, Table } from "@mantine/core";
import React from "react";
import { rows } from "./data";

const GeneralResultsTable: React.FC = () => {
  return (
    <Accordion>
      <Accordion.Item value="See results">
        <Accordion.Control>See results</Accordion.Control>
        <Accordion.Panel>
          <Table.ScrollContainer minWidth={320}>
            <Table
              withColumnBorders
              striped
              layout="fixed"
              className="w-full border-collapse "
            >
              <Table.Tbody>
                {rows.map((row, rowIndex) => (
                  <Table.Tr
                    tabIndex={rowIndex}
                    className="first:font-bold first:bg-[--mantine-primary-color-filled]"
                  >
                    {row.map((cell, cellIndex) => (
                      <Table.Td
                        tabIndex={cellIndex}
                        className="text-center first:w-[22ch] w-[12ch] first:font-bold first:bg-[--mantine-primary-color-filled]"
                      >
                        {cell}
                      </Table.Td>
                    ))}
                  </Table.Tr>
                ))}
              </Table.Tbody>
            </Table>
          </Table.ScrollContainer>
        </Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  );
};

export default GeneralResultsTable;
