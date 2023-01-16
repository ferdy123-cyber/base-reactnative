import { Instance, SnapshotIn, SnapshotOut, types } from "mobx-state-tree"
import { withSetPropAction } from "./helpers/withSetPropAction"

/**
 * Model description here for TypeScript hints.
 */
export const AuthenticationModel = types
  .model("Authentication")
  .props({
    authToken: types.maybe(types.string),
    profile: types.frozen<any>(),
    fetching: types.optional(types.boolean, false),
    role_name: types.optional(types.string, ""),
  })
  .actions(withSetPropAction)
  .views((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars
  .actions((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars

export interface Authentication extends Instance<typeof AuthenticationModel> {}
export interface AuthenticationSnapshotOut extends SnapshotOut<typeof AuthenticationModel> {}
export interface AuthenticationSnapshotIn extends SnapshotIn<typeof AuthenticationModel> {}
export const createAuthenticationDefaultModel = () => types.optional(AuthenticationModel, {})
