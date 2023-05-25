import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import Form from "../../components/form/form";
import { store } from "../store";
// import axios from "axios";
import Footer from "../../components/footer/footer";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

// jest.mock("axios");

test("footer address", () => {
  render(<Footer />);
  const text = screen.getByText(/192148, Россия, г. Санкт-Петербург, ул. Ольги Берггольц, д.36, стр. 2, офис 1/i);
  const link = screen.getByRole("link");
  expect(text).toBeInTheDocument();
  expect(link).toBeInTheDocument();
});

test("Form test", () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <Form />
      </Provider>
    </BrowserRouter>
  );
  screen.debug();
  const form = screen.queryAllByPlaceholderText("Имя");
  //   userEvent.type(form, "123");
  //   expect(screen.queryAllByPlaceholderText("Имя")).toContainHTML("123");
});
