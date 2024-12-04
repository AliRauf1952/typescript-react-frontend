import { ReactNode, useState } from "react";
import { recordContext } from "./recordContext";
import { IRecord } from "../types/record.types";
import { records as data } from "../data/records";

interface RecordProviderProps {
  children: ReactNode;
}

export const RecordProvider = ({ children }: RecordProviderProps) => {
  const [records, setRecords] = useState<IRecord[]>(data);

  // adding
  const addNewRecord = (record: IRecord) => {
    setRecords((prev) => {
      return [...prev, record];
    });
  };

  // deleting
  const deleteRecord = (id: number) => {
    setRecords((prev) => {
      return prev.filter((record) => record.id !== id);
    });
  };

  // updating
  const updateRecord = (newRecord: IRecord) => {
    setRecords((prev) => {
      return prev.map((record) => {
        if (record.id === newRecord.id) {
          return newRecord;
        } else {
          return record;
        }
      });
    });
  };

  const values = {
    records,
    setRecords,
    addNewRecord,
    deleteRecord,
    updateRecord,
  };

  return (
    <recordContext.Provider value={values}>{children}</recordContext.Provider>
  );
};
