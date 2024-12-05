import { Routes, Route } from "react-router-dom";
import { Records } from "../components/Records";
import { RecordForm } from "../components/RecordForm";
import { NotFound } from "../components/NotFound";

export const Router = () => {
  return (
    <Routes>
      <Route index element={<Records />} />
      <Route path="/add-record" element={<RecordForm />} />
      <Route path="/edit-record/:id" element={<RecordForm />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
