import { describe, it, expect, vi, beforeEach } from "vitest";
import {
  fetchAllDestinations,
  fetchDestinationById,
  addDestination,
  editDestination,
  deleteDestination,
} from "../destinations";

beforeEach(() => {
  // Resetujemo svaki put
  global.fetch = vi.fn();
});

describe("fetchAllDestinations", () => {
  it("should fetch and return destinations", async () => {
    const mockData = [{ id: 1, name: "Paris" }];
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockData,
    });

    const result = await fetchAllDestinations();
    expect(result).toEqual(mockData);
    expect(fetch).toHaveBeenCalledWith("/api/destinations");
  });

  it("should throw error on fetch failure", async () => {
    fetch.mockResolvedValueOnce({ ok: false });

    await expect(fetchAllDestinations()).rejects.toThrow(
      "Failed to fetch destinations"
    );
  });
});

describe("fetchDestinationById", () => {
  it("should fetch a single destination", async () => {
    const mockData = { id: 1, name: "Paris" };
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockData,
    });

    const result = await fetchDestinationById(1);
    expect(result).toEqual(mockData);
    expect(fetch).toHaveBeenCalledWith("/api/destinations/1");
  });
});

describe("addDestination", () => {
  it("should send a POST request with data", async () => {
    fetch.mockResolvedValueOnce({ ok: true });

    const data = { name: "Berlin" };
    await addDestination(data);

    expect(fetch).toHaveBeenCalledWith("/api/destinations", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
  });
});

describe("editDestination", () => {
  it("should send a PUT request with data", async () => {
    fetch.mockResolvedValueOnce({ ok: true });

    const data = { id: 1, name: "Rome" };
    await editDestination(data);

    expect(fetch).toHaveBeenCalledWith("/api/destinations/1", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
  });
});

describe("deleteDestination", () => {
  it("should send a DELETE request", async () => {
    fetch.mockResolvedValueOnce({ ok: true });

    await deleteDestination(5);

    expect(fetch).toHaveBeenCalledWith("/api/destinations/5", {
      method: "DELETE",
    });
  });
});
