import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { IRecord } from "../types/record.types";

export const RecordForm = () => {
  const [formData, setFormData] = useState<IRecord>({
    id: 0,
    title: "",
    artist: "",
    year: 0,
    price: 0,
  });
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      const recordToEdit = {
        id: Number(id),
        title: "Edited Record",
        artist: "Edited Artist",
        year: 2022,
        price: 20,
      };
      setFormData(recordToEdit);
    }
  }, [id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (id) {
      console.log("Editing record", formData);
    } else {
      console.log("Adding new record", formData);
    }
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{id ? "Edit Record" : "Add New Record"}</h2>
      <label>
        Title:
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />
      </label>
      <label>
        Artist:
        <input
          type="text"
          name="artist"
          value={formData.artist}
          onChange={handleChange}
        />
      </label>
      <label>
        Year:
        <input
          type="number"
          name="year"
          value={formData.year}
          onChange={handleChange}
        />
      </label>
      <label>
        Price:
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
        />
      </label>
      <button type="submit">{id ? "Save Changes" : "Add Record"}</button>
    </form>
  );
};
