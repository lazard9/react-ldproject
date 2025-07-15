/**
 * Fetches a list of all destinations from the API.
 * 
 * @returns {Promise<Destination[]>} A promise that resolves with an array of Destination objects.
 * @throws {Error} If the fetch fails.
 */
export const fetchAllDestinations = async () => {
    try {
        const res = await fetch("/api/destinations");
        if (!res.ok) throw new Error("Failed to fetch destinations");

        const data = await res.json();
        return data;
    } catch (error) {
        console.error("Error fetching destinations", error);
        throw error;
    }
};

/**
 * Fetches a single destination from the API by ID.
 * 
 * @param {string|number} id - The ID of the destination to fetch.
 * @returns {Promise<Destination>} A promise that resolves with the destination object.
 * @throws {Error} If the fetch fails.
 */
export const fetchDestinationById = async (id) => {
    try {
        const res = await fetch(`/api/destinations/${id}`);
        if (!res.ok) throw new Error("Failed to fetch destination");

        const data = await res.json();
        return data;
    } catch (error) {
        console.error("Error fetching destination", error);
        throw error;
    }
};

/**
 * Adds a new destination to the API.
 * 
 * @param {Destination} destinationData - The destination data to add.
 * @throws {Error} If the fetch fails.
 */
export const addDestination = async (destinationData) => {
    try {
        await fetch("/api/destinations", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(destinationData),
        });
    } catch (error) {
        console.error("Error adding destination", error);
        throw error;
    }
};


/**
 * Updates a destination in the API with the provided data.
 * 
 * @param {Object} destinationData - The data of the destination to be updated.
 * @param {string|number} destinationData.id - The ID of the destination to update.
 * @throws {Error} If the fetch fails.
 */
export const editDestination = async (destinationData) => {
    try {
        await fetch(`/api/destinations/${destinationData.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(destinationData),
        });
    } catch (error) {
        console.error("Error editing destination", error);
        throw error;
    }
};


/**
 * Deletes a single destination from the API by ID.
 * 
 * @param {string|number} id - The ID of the destination to delete.
 * @throws {Error} If the fetch fails.
 */
export const deleteDestination = async (id) => {
    try {
        await fetch(`/api/destinations/${id}`, {
            method: "DELETE",
        });
    } catch (error) {
        console.error("Error deleting destination", error);
        throw error;
    }
};
