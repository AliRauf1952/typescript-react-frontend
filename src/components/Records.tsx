import { Record } from "./Record";
import { useRecordContext } from "../hooks/useRecordContext";

export const Records = () => {
  const { records } = useRecordContext();

  return (
    <section>
      {records.map((record) => (
        <Record key={record.id} record={record} />
      ))}
    </section>
  );
};
