import { Instance, SnapshotIn, SnapshotOut, types } from "mobx-state-tree"
import Config from "../config"
import { api } from "../services/api"
import { withSetPropAction } from "./helpers/withSetPropAction"

/**
 * Model description here for TypeScript hints.
 */
export const SampleModel = types
  .model("Sample")
  .props({
    listData: types.array(types.frozen<any>()),
    fetching: types.optional(types.boolean, false),
  })
  .actions(withSetPropAction)
  .views((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars
  .actions((store) => ({
    async getPosts() {
      store.setProp("fetching", true)
      const response = await api.get()
      if (response.kind !== Config.RESP_OK) {
        store.setProp("fetching", false)
        return
      }
      store.setProp("listData", response.data)
      store.setProp("fetching", false)
    },
  })) // eslint-disable-line @typescript-eslint/no-unused-vars

export interface Sample extends Instance<typeof SampleModel> {}
export interface SampleSnapshotOut extends SnapshotOut<typeof SampleModel> {}
export interface SampleSnapshotIn extends SnapshotIn<typeof SampleModel> {}
export const createSampleDefaultModel = () => types.optional(SampleModel, {})
