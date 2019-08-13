import React from "react"
import renderer from "react-test-renderer"
import {IntlProvider} from "react-intl";

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
      .create(
        <IntlProvider locale="es">
          <Banner name="Andres Jorquera" email="jorquera.ad@gmail.com" />
          </IntlProvider>
      ).toJSON()
    expect(tree).toMatchSnapshot()
  })
})