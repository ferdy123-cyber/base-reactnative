import { Instance, SnapshotOut, types } from "mobx-state-tree"
import { AuthenticationModel } from "./Authentication"
import { SampleModel } from "./Sample"

/**
 * A RootStore model.
 */
export const RootStoreModel = types.model("RootStore").props({
  authenticationStore: types.optional(AuthenticationModel, {}),
  sampleStore: types.optional(SampleModel, {}),
})

/**
 * The RootStore instance.
 */
export interface RootStore extends Instance<typeof RootStoreModel> {}
/**
 * The data of a RootStore.
 */
export interface RootStoreSnapshot extends SnapshotOut<typeof RootStoreModel> {}
