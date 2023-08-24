import Link from "next/link";
import { DeleteButton } from "./delete-ticket";

const getTicket = async () => {
  // await new Promise((resolve) => setTimeout(resolve, 3000));
  const res = await fetch(
    "https://pb.khan.my.id/api/collections/tickets/records",
    {
      next: {
        revalidate: 0,
      },
    }
  );
  return res.json();
};

export const TicketList = async () => {
  const tickets = (await getTicket())?.items;
  return (
    <>
      {tickets.map((ticket: any) => (
        <div key={ticket.id} className="card my-5">
          <DeleteButton id={ticket.id} />
          <Link href={`/tickets/${ticket.id}`}>
            <h3>{ticket.title}</h3>
            <p>{ticket.body.slice(0, 200)}...</p>
            <div className={`pill ${ticket.priority}`}>
              {ticket.priority} priority
            </div>
          </Link>
        </div>
      ))}
      {tickets.length === 0 && (
        <p className="text-center">There are no open tickets, yay!</p>
      )}
    </>
  );
};
