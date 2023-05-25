import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Footer from "../../components/footer/footer";

test("footer address", () => {
  render(<Footer />);
  const text = screen.getByText(/192148, Россия, г. Санкт-Петербург, ул. Ольги Берггольц, д.36, стр. 2, офис 1/i);
  const link = screen.getByRole("link");
  expect(text).toBeInTheDocument();
  expect(link).toBeInTheDocument();
});
