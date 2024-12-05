import { createContext, useState, useContext } from "react";
import { IRecord } from "../types/record.types";

// Create a context for records
const RecordContext = createContext<any>(null);

export const useRecordContext = () => useContext(RecordContext);

export const RecordProvider = ({ children }: any) => {
  const [records, setRecords] = useState<IRecord[]>([]);

  const addRecord = (record: IRecord) => {
    if (record.id) {
      // Update existing record
      setRecords((prevRecords) =>
        prevRecords.map((r) => (r.id === record.id ? record : r))
      );
    } else {
      // Add new record
      const newRecord = { ...record, id: Date.now() }; 
      setRecords((prevRecords) => [...prevRecords, newRecord]);
    }
  };

  const deleteRecord = (id: number) => {
    setRecords((prevRecords) => prevRecords.filter((record) => record.id !== id));
  };

  return (
    <RecordContext.Provider value={{ records, addRecord, deleteRecord }}>
      {children}
    </RecordContext.Provider>
  );
};
