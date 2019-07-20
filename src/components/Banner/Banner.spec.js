import React from "react"
import renderer from "react-test-renderer"

import Banner from ".";

describe("banner", () => {
  beforeAll(() => {
    console.error = jest.fn()
  });

  afterAll(() => {
    jest.restoreAllMocks()
  });

  it("renders correctly", () => {
    const tree = renderer
      .create(<Banner />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})