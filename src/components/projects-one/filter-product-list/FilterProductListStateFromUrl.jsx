import { useSearchParams, useNavigate } from "react-router-dom";
import products from "../../../assets/data/products.json";
import Heading from "../../partials/Heading";

import "./FilterProductListStateFromUrl.scss";

/**
 * A component that filters products based on a search query and an optional
 * checkbox value for "Show Candy Only", and displays the filtered results.
 * The search query and checkbox value are saved to the URL as query parameters,
 * and the component will update the URL when the search query or checkbox value
 * changes, and will update the component state when the URL changes.
 * The component will also clear the search fields and URL when the user clicks
 * the "Clear fields & URL" button.
 *
 * @function FilterProductListStateFromUrl
 * @returns {JSX.Element} The component.
 */
const FilterProductListStateFromUrl = () => {
    const [searchParams, setSearchParams] = useSearchParams({
        s: "",
        candy: false,
    });

    const search = searchParams.get("s");
    const isCandy = searchParams.get("candy") === "true";
    const navigate = useNavigate();

    const filteredResults =
        searchParams.has("s") && searchParams.has("candy")
            ? products.filter(
                  (product) =>
                      product.name
                          .toLowerCase()
                          .includes(search.toLowerCase()) &&
                      (!isCandy || product.candy)
              )
            : products;

    const clearFields = () => {
        navigate("/projects-one");
    };

    return (
        <div className="url-state">
            <Heading headingTag={4} headingLevel={4}>
                State from UTL
            </Heading>
            <div className="url-state__input">
                <label htmlFor="query">
                    Products:
                    <input
                        id="query"
                        type="text"
                        placeholder="Search..."
                        value={search || ""}
                        onChange={(e) => {
                            setSearchParams(
                                (prev) => {
                                    if (prev.has("candy")) {
                                        prev.set("s", e.target.value);
                                    } else {
                                        prev = new URLSearchParams({
                                            s: e.target.value,
                                            candy: "false",
                                        });
                                    }
                                    return prev;
                                },
                                { replace: true }
                            );
                        }}
                    />
                </label>
            </div>
            <div className="url-state__checkbox">
                <label htmlFor="candy">
                    Show Candy Only:
                    <input
                        id="candy"
                        type="checkbox"
                        checked={isCandy}
                        onChange={(e) => {
                            setSearchParams(
                                (prev) => {
                                    if (prev.has("s")) {
                                        prev.set("candy", e.target.checked);
                                    } else {
                                        prev = new URLSearchParams({
                                            s: "",
                                            candy: e.target.checked,
                                        });
                                    }
                                    return prev;
                                },
                                { replace: true }
                            );
                        }}
                    />
                </label>
            </div>
            <button
                aria-label="Clear search fields and URL"
                className="url-state__clear-button"
                onClick={clearFields}
            >
                Clear fields & URL
            </button>
            {filteredResults.length > 0 ? (
                <ul className="url-state__list">
                    {filteredResults.map((product, index) => (
                        <li key={index}>{product.name}</li>
                    ))}
                </ul>
            ) : (
                <p>No matching products found.</p>
            )}
        </div>
    );
};

export default FilterProductListStateFromUrl;
