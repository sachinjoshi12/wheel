import React from "react";

import { Table as NeetoUITable } from "neetoui";

import { NOTES_TABLE_COLUMN_DATA } from "./constants";

const Table = ({ setSelectedNoteIds, notes = [] }) => (
  <div className="notes-table-height w-full">
    <NeetoUITable
      rowData={notes}
      columnData={NOTES_TABLE_COLUMN_DATA}
      onRowSelect={selectedRowKeys => setSelectedNoteIds(selectedRowKeys)}
      onRowClick={() => {}}
      allowRowClick={true}
    />
  </div>
);

export default Table;
