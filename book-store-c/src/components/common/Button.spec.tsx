import { render, screen } from "@testing-library/react";
import Button from "./Button";
import { BookStoreThemePrivider } from "../../context/themeContext";

describe("Button 컴포넌트", () => {
  it("렌더를 확인", () => {
    //1.렌더
    render(
      <BookStoreThemePrivider>
        <Button size="large" scheme="primary">
          버튼
        </Button>
      </BookStoreThemePrivider>
    );

    expect(screen.getByText("버튼")).toBeInTheDocument();
  });
});

it("size props 적용", () => {
  const { container } = render(
    <BookStoreThemePrivider>
      <Button size="medium" scheme="primary">
        버튼
      </Button>
    </BookStoreThemePrivider>
  );

  expect(screen.getByRole("button")).toHaveStyle("font-size: 1rem");
});
