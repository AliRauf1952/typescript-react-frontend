// RecordProvider.tsx
import { ReactNode, useState } from "react";
import { RecordContext } from "./RecordContext"; 
import { IRecord } from "../types/record.types";
import { records as data } from "../data/records";

interface RecordProviderProps {
  children: ReactNode;
}

export const RecordProvider = ({ children }: RecordProviderProps) => {
  const [records, setRecords] = useState<IRecord[]>(data);

  const addRecord = (record: IRecord) => {
    setRecords((prev) => [...prev, record]);
  };

  const deleteRecord = (id: number) => {
    setRecords((prev) => prev.filter((record) => record.id !== id));
  };

  const updateRecord = (newRecord: IRecord) => {
    setRecords((prev) =>
      prev.map((record) => (record.id === newRecord.id ? newRecord : record))
    );
  };

  const values = {
    records,
    addRecord,
    deleteRecord,
    updateRecord,
  };

  return (
    <RecordContext.Provider value={values}>
      {children}
    </RecordContext.Provider>
  );
};
