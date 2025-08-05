// src/components/__tests__/CtaButton.test.jsx
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import CtaButton from "./CtaButton";

describe("CtaButton", () => {
  it('renderuje Link ako postoji "to" prop', () => {
    render(
      <MemoryRouter>
        <CtaButton to="/about">O nama</CtaButton>
      </MemoryRouter>
    );

    const link = screen.getByRole("link", { name: /o nama/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/about");
    expect(link).toHaveClass("cta-button", "cta-button--primary");
  });

  it('renderuje <button> ako "to" nije prosleđen', () => {
    render(<CtaButton onClick={() => {}}>Klikni</CtaButton>);

    const button = screen.getByRole("button", { name: /klikni/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute("type", "button");
    expect(button).toHaveClass("cta-button", "cta-button--primary");
  });

  it("poziva onClick kada se klikne na <button>", () => {
    const handleClick = vi.fn();
    render(<CtaButton onClick={handleClick}>Klikni</CtaButton>);

    fireEvent.click(screen.getByText("Klikni"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('dodaje ispravan CSS klasu na osnovu "variant" propa', () => {
    render(<CtaButton variant="secondary">Drugi</CtaButton>);

    const button = screen.getByRole("button", { name: /drugi/i });
    expect(button).toHaveClass("cta-button--secondary");
  });

  it('koristi custom "type" kada se prosledi', () => {
    render(<CtaButton type="submit">Pošalji</CtaButton>);

    const button = screen.getByRole("button", { name: /pošalji/i });
    expect(button).toHaveAttribute("type", "submit");
  });
});
