import { render, screen } from "@testing-library/react";
import App from "../../components/app/app";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { store } from "../store";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";

window.scrollTo = jest.fn();

describe("Routs test", () => {
  test("personal-data test", () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/personal-data"]}>
          <App />
        </MemoryRouter>
      </Provider>
    );
    expect(screen.getByTestId("personal")).toBeInTheDocument();
  });

  test("Not found test", () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/ascwe"]}>
          <App />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByTestId("not-page")).toBeInTheDocument();
  });

  //   test("personal-data link test", () => {
  //     render(
  //       <Provider store={store}>
  //         <MemoryRouter>
  //           <App />
  //         </MemoryRouter>
  //       </Provider>
  //     );
  //     const link = screen.getByTestId("personal-link");
  //     userEvent.click(link);
  //     expect(screen.getByTestId("personal")).toBeInTheDocument();
  //   });
});
