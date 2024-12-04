import { createContext } from "react";
import { IRecord } from "../types/record.types";

export const recordContext = createContext<
  | {
      records: IRecord[];
      setRecords: React.Dispatch<React.SetStateAction<IRecord[]>>;
      addNewRecord: (record: IRecord) => void;
      deleteRecord: (id: number) => void;
      updateRecord: (newRecord: IRecord) => void;
    }
  | undefined
>(undefined);
