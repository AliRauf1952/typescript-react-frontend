import { createContext, useContext, ReactNode, useState } from "react";
import { IRecord } from "../types/record.types";

interface RecordContextProps {
  records: IRecord[];
  addRecord: (record: IRecord) => void;
  updateRecord: (record: IRecord) => void;
  deleteRecord: (id: number) => void;
}

export const RecordContext = createContext<RecordContextProps | null>(null);

export const useRecordContext = () => {
  const context = useContext(RecordContext);
  if (!context) {
    throw new Error("useRecordContext must be used within a RecordProvider");
  }
  return context;
};

interface RecordProviderProps {
  children: ReactNode;
}

export const RecordProvider = ({ children }: RecordProviderProps) => {
  const [records, setRecords] = useState<IRecord[]>([]);

  const addRecord = (record: IRecord) => {
    setRecords((prevRecords) => [...prevRecords, { ...record, id: Date.now() }]);
  };

  const updateRecord = (updatedRecord: IRecord) => {
    setRecords((prevRecords) =>
      prevRecords.map((record) =>
        record.id === updatedRecord.id ? updatedRecord : record
      )
    );
  };

  const deleteRecord = (id: number) => {
    setRecords((prevRecords) => prevRecords.filter((record) => record.id !== id));
  };

  return (
    <RecordContext.Provider value={{ records, addRecord, updateRecord, deleteRecord }}>
      {children}
    </RecordContext.Provider>
  );
};
