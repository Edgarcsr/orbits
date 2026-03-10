import { relations } from 'drizzle-orm'
import { accounts } from './accounts'
import { users } from './users'

export const accountsRelations = relations(accounts, ({ one }) => ({
  users: one(users, {
    fields: [accounts.userId],
    references: [users.id],
  }),
}))
