import React from "react";
import toast from "react-hot-toast";
import { MdOutlineDelete } from "react-icons/md";

export interface ExpensesDeletedId {
  id: string;
}

export default function ExpensesDeletedButton({
  id,
  onDeleted,
}: {
  id: string;
  onDeleted: () => void;
}) {
  const handleDeleted = async (id: string) => {
    try {
      const res = await fetch(`/api/expense/${id}`, { method: "DELETE" });
      const result = await res.json();

      if (res.ok && result.success) {
        toast.success("Deleted successfully");
        onDeleted(); // trigger parent refetch
      }
    } catch (error) {
      console.error("Delete failed:", error);
    }
  };

  return (
    <MdOutlineDelete
      onClick={() => handleDeleted(id)}
      size={25}
      className="cursor-pointer text-red-600 hover:text-red-800"
    />
  );
}
