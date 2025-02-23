import { pgTable, text, timestamp, uuid, varchar } from "drizzle-orm/pg-core";

export const organizersTableSchema = pgTable("organizers", {
  id: uuid().notNull().primaryKey().defaultRandom(),
  name: varchar().notNull(),
  createdAt: timestamp().notNull().defaultNow(),
  updatedAt: timestamp().notNull().defaultNow(),
  deletedAt: timestamp(),
});

export const eventsTableSchema = pgTable("events", {
  id: uuid().primaryKey().defaultRandom(),
  organizerId: uuid()
    .notNull()
    .references(() => organizersTableSchema.id),
  name: varchar().notNull(),
  location: text().notNull(),
  description: text().notNull(),
  createdAt: timestamp().notNull().defaultNow(),
  updatedAt: timestamp().notNull().defaultNow(),
  deletedAt: timestamp(),
  publishedAt: timestamp(),
});
