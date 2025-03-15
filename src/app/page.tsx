import { auth } from "@/auth";
import SignIn from "@/components/sign-in";
import SignOut from "@/components/sign-out";
import { Button } from "@/components/ui/button";
import { db } from "@/db/connection";
import { eventsTableSchema } from "@/db/schema";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function Home() {
  const events = await db.select().from(eventsTableSchema);
  const session = await auth();
  console.log("session", session);

  if (!session) {
    return <SignIn />;
  }

  return (
    <div className="py-3">
      <h1 className="font-bold text-3xl">Live Scoring</h1>

      <SignOut />

      <div className="py-3">
        <Link href="/events/create">
          <Button>Create</Button>
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
