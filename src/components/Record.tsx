import { IRecord } from "../types/record.types";

interface RecordProps {
  record: IRecord;
}

export const Record = ({ record }: RecordProps) => {
  const { title, artist, year, price } = record;
  return (
    <article>
      <h2>{title}</h2>
      <p>Artist: {artist}</p>
      <p>Year of release: {year}</p>
      <p>Price: {price}</p>
    </article>
  );
};
