// src/components/__tests__/CtaButton.test.jsx
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import DestinationCard from "./DestinationCard";

describe("DestinationCard", () => {
  const destination = {
    title: "Lisabon",
    slug: "lisabon",
    imgUrl: "/images/lisabon.jpg",
    description: "Prelep grad sa istorijom, arhitekturom i sjajnom hranom.",
    ctaText: "Saznaj više",
  };

  it("renderuje sve osnovne informacije", () => {
    render(
      <MemoryRouter>
        <DestinationCard destination={destination} />
      </MemoryRouter>
    );

    expect(
      screen.getByRole("heading", { name: /lisabon/i })
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /saznaj više/i })).toHaveAttribute(
      "href",
      "/destinations/lisabon"
    );
    expect(screen.getByAltText(/default alt/i)).toBeInTheDocument(); // jer je default alt
    expect(screen.getByText(/prelep grad/i)).toBeInTheDocument();
  });

  it("skraćuje description ako je duži od 120 karaktera", () => {
    const longDescription = "a".repeat(130); // 130 karaktera
    render(
      <MemoryRouter>
        <DestinationCard
          destination={{ ...destination, description: longDescription }}
        />
      </MemoryRouter>
    );

    expect(screen.getByText(/a{120}.../i)).toBeInTheDocument();
  });

  it("koristi podrazumevani ctaText ako nije prosleđen", () => {
    render(
      <MemoryRouter>
        <DestinationCard destination={{ ...destination, ctaText: undefined }} />
      </MemoryRouter>
    );

    expect(
      screen.getByRole("link", { name: /default cta/i })
    ).toBeInTheDocument();
  });

  it("koristi podrazumevani alt tekst ako nije prosleđen", () => {
    render(
      <MemoryRouter>
        <DestinationCard destination={{ ...destination, imgAlt: undefined }} />
      </MemoryRouter>
    );

    expect(screen.getByAltText("Default Alt")).toBeInTheDocument();
  });
});
