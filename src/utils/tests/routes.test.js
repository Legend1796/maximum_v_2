import { render, screen } from "@testing-library/react";
import App from "../../components/app/app";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../store";

describe("test App", () => {
  test("Router test", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    );
    const link = screen.getAllByTestId("personal-link");
  });
});
