import { useState } from "react";
import { Record } from "./Record";
import { IRecord } from "../types/record.types";

export const Records = () => {
  const [records, setRecords] = useState<IRecord[]>([
    { id: 1, title: "Record 1", artist: "Artist 1", year: 2020, price: 10 },
    { id: 2, title: "Record 2", artist: "Artist 2", year: 2021, price: 15 },
  ]);

  const deleteRecord = (id: number) => {
    setRecords(records.filter((record) => record.id !== id));
  };

  return (
    <div>
      <h1>All Records</h1>
      {records.map((record) => (
        <Record key={record.id} record={record} deleteRecord={deleteRecord} />
      ))}
    </div>
  );
};
