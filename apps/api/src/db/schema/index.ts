import { accountsRelations } from './account-relations'
import { accounts } from './accounts'
import { sessionsRelations } from './session-relations'
import { sessions } from './sessions'
import { usersRelations } from './user-relations'
import { users } from './users'
import { verifications } from './verifications'

export const schema = {
  accounts,
  sessions,
  users,
  verifications,

  accountsRelations,
  sessionsRelations,
  usersRelations,
}
