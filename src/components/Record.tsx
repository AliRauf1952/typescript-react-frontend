import { IRecord } from "../types/record.types";
import { useNavigate } from "react-router-dom";

interface RecordProps {
  record: IRecord;
  deleteRecord: (id: number) => void;
}

export const Record = ({ record, deleteRecord }: RecordProps) => {
  const { id, title, artist, year, price } = record;
  const navigate = useNavigate();

  const handleEdit = () => {
    navigate(`/edit-record/${id}`);
  };

  return (
    <article>
      <h2>{title}</h2>
      <p>Artist: {artist}</p>
      <p>Year of release: {year}</p>
      <p>Price: {price}</p>
      <div className="record-buttons">
        <button onClick={() => deleteRecord(id)}>Delete</button>
        <button onClick={handleEdit}>Edit</button>
      </div>
    </article>
  );
};
