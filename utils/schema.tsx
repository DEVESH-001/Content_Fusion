//this is a schema file for the ai_output table which is used to store the form data and the ai response

import { pgTable, boolean, serial, text, varchar } from "drizzle-orm/pg-core";

export const AIOutput = pgTable("ai_output", {
  id: serial("id").primaryKey(),
  formData: varchar("form_data"),
  aiResponse: text("ai_response"),
  templateSlug: varchar("templateSlug").notNull(),
  createdBy: varchar("createdBy"),
  createdAt: varchar("createdAt"),
});

export const UserSubscription = pgTable("user_subscription", {
  id: serial("id").primaryKey(),
  email: varchar("email"),
  userName: varchar("userName"),
  active: boolean("active"),
  paymentId: varchar("paymentId"),
  joinDate: varchar("joinDate"),
});


