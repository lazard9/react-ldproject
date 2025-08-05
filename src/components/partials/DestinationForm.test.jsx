import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import DestinationForm from "./DestinationForm";

describe("DestinationForm", () => {
  it("renders form inputs", () => {
    render(<DestinationForm destinationSubmit={vi.fn()} />);

    expect(screen.getByLabelText(/title/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/description/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/cta text/i)).toBeInTheDocument();
    expect(screen.getByRole("button")).toHaveTextContent(/create destination/i);
  });

  it("submits correct data", () => {
    const mockSubmit = vi.fn();
    render(<DestinationForm destinationSubmit={mockSubmit} />);

    fireEvent.change(screen.getByLabelText(/title/i), {
      target: { value: "My Destination" },
    });
    fireEvent.change(screen.getByLabelText(/description/i), {
      target: { value: "Nice place to visit." },
    });
    fireEvent.change(screen.getByLabelText(/cta text/i), {
      target: { value: "Book Now" },
    });

    fireEvent.click(screen.getByRole("button"));

    expect(mockSubmit).toHaveBeenCalledTimes(1);

    const submittedData = mockSubmit.mock.calls[0][0];
    expect(submittedData.title).toBe("My Destination");
    expect(submittedData.description).toBe("Nice place to visit.");
    expect(submittedData.ctaText).toBe("Book Now");
    expect(submittedData.slug).toBe("my-destination");
    expect(submittedData.imgUrl).toMatch(/destination-00[1-4]\.jpg/);
  });

  it('shows "Update Destination" when editing', () => {
    const initial = {
      id: "123",
      title: "Paris",
      description: "A city",
      ctaText: "Explore",
    };

    render(
      <DestinationForm
        destinationSubmit={vi.fn()}
        initialDestinationData={initial}
      />
    );

    expect(screen.getByRole("button")).toHaveTextContent(/update destination/i);
  });
});
