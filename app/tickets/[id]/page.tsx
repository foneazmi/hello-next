import { notFound } from "next/navigation";

export const dynamicParams = false;

export async function generateStaticParams() {
  const res = await fetch(
    `https://pb.khan.my.id/api/collections/tickets/records`
  );
  const tickets = (await res.json())?.items || [];
  return tickets.map((ticket: any) => ({ id: ticket.id }));
}

const getTicket = async (id: string) => {
  // await new Promise(resolve => setTimeout(resolve, 3000))
  const res = await fetch(
    `https://pb.khan.my.id/api/collections/tickets/records/${id}`,
    {
      next: {
        revalidate: 60,
      },
    }
  );
  if (!res.ok) {
    notFound();
  }
  console.log();
  return res.json();
};

const TicketDetail = async ({ params }: any) => {
  const { id } = params;
  const ticket = await getTicket(id);
  return (
    <main>
      <nav>
        <h2>Ticket Details</h2>
      </nav>
      <div className="card">
        <h3>{ticket.title}</h3>
        <small>Created by {ticket.user_email}</small>
        <p>{ticket.body}</p>
        <div className={`pill ${ticket.priority}`}>
          {ticket.priority} priority
        </div>
      </div>
    </main>
  );
};

export default TicketDetail;
