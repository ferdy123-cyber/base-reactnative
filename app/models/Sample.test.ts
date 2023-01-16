import { SampleModel } from "./Sample"

test("can be created", () => {
  const instance = SampleModel.create({})

  expect(instance).toBeTruthy()
})
