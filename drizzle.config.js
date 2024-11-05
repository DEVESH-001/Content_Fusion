
/**
 * @type {import("drizzle-kit").Config}
 */

export default {
  schema: "./utils/schema.tsx",
  dialect: "postgresql",
  dbCredentials: {
    url: "postgresql://neondb_owner:N2IORcbA5YDn@ep-mute-waterfall-a50l2hus.us-east-2.aws.neon.tech/neondb?sslmode=require",
  },
};