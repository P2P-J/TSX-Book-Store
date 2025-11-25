import { render, screen } from "@testing-library/react";
import Title from "./Title";
import { BookStoreThemePrivider } from "../../context/themeContext";

describe("Title 컴포넌트", () => {
  it("렌더를 확인", () => {
    //1.렌더
    render(
      <BookStoreThemePrivider>
        <Title size="large">제목</Title>
      </BookStoreThemePrivider>
    );

    //2. 확인
    expect(screen.getByText("제목")).toBeInTheDocument();
  });

  it("size props 적용", () => {
    const { container } = render(
      <BookStoreThemePrivider>
        <Title size="medium">제목</Title>
      </BookStoreThemePrivider>
    );

    expect(container.firstChild).toHaveStyle("font-size: 1.5rem");
  });

  it("color props 적용", () => {
    const { container } = render(
      <BookStoreThemePrivider>
        <Title size="medium" color="primary">
          제목
        </Title>
      </BookStoreThemePrivider>
    );

    expect(container.firstChild).toHaveStyle("color: brown");
  });
});
