import { relations } from 'drizzle-orm'
import { accounts } from './accounts'
import { sessions } from './sessions'
import { users } from './users'

export const usersRelations = relations(users, ({ many }) => ({
  sessions: many(sessions),
  accounts: many(accounts),
}))
