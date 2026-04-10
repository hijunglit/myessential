import { bigint, pgEnum, pgTable, text, timestamp } from "drizzle-orm/pg-core";
import { TASK_TYPES } from "./constants";

export const taskTypes = pgEnum(
  "task",
  TASK_TYPES.map((type) => type) as [string, ...string[]],
);

export const items = pgTable("boards", {
  item_id: bigint({ mode: "number" }).primaryKey().generatedAlwaysAsIdentity(),
  contents: text().notNull(),
  type: taskTypes().notNull(),
  created_at: timestamp().notNull().defaultNow(),
  updated_at: timestamp().notNull().defaultNow(),
});
