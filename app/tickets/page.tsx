import { Suspense } from "react";
import Link from "next/link";
import { TicketList } from "./ticket-list";
import Loading from "../loading";

export default function Page() {
  return (
    <main>
      <nav>
        <div className="flex flex-col flex-1">
          <h2>Tickets</h2>
          <p>
            <small>Currently open tickets.</small>
          </p>
        </div>
        <div>
          <Link href="/tickets/create">Create</Link>
        </div>
      </nav>
      <Suspense fallback={<Loading />}>
        <TicketList />
      </Suspense>
    </main>
  );
}
