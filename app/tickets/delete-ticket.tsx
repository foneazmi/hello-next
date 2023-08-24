"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export const DeleteButton = ({ id }: any) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const deleteTicket = async () => {
    setIsLoading(true);
    const res = await fetch(
      `https://pb.khan.my.id/api/collections/tickets/records/${id}`,
      {
        method: "DELETE",
      }
    );
    if (res.status === 204) {
      router.refresh();
      router.push("/tickets");
    }
    setIsLoading(false);
  };

  return (
    <button
      className="bg-red-500 text-white absolute top-0 right-0"
      disabled={isLoading}
      onClick={() => deleteTicket()}
    >
      {isLoading && <span>...</span>}
      {!isLoading && <span>X</span>}
    </button>
  );
};
