import { db } from "@/db/connection";
import { eventsTableSchema } from "@/db/schema";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function Home() {
  const events = await db.select().from(eventsTableSchema);

  return (
    <div className="py-3">
      <h1 className="font-bold text-3xl">Live Scoring</h1>

      <div className="py-3">
        <Link
          href="/events/create"
          className="font-bold bg-white text-black px-3 py-2 rounded-xl"
        >
          Create
        </Link>
      </div>

      {events.length > 0 ? (
        <div className="py-3">
          <ul>
            {events.map((event) => {
              return <li key={event.id}>{event.name}</li>;
            })}
          </ul>
        </div>
      ) : (
        <div className="py-3">Events not found :(</div>
      )}
    </div>
  );
}
