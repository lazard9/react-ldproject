import { useSearchParams, useNavigate } from "react-router-dom";
import productsWithOptions from "../../../assets/data/products-with-options.json";

import Col from "../../grid/Col";

import "./ProductWithOptions.scss";

const sizeMap = ["small", "medium", "large", "luxury"];
const imageMap = productsWithOptions;

const ProductWithOptions = () => {
    const [searchParams, setSearchParams] = useSearchParams({
        usize: "medium",
        ucolor: "black",
    });

    const selectedSize = searchParams.get("usize");
    const selectedColor = searchParams.get("ucolor");

    const navigate = useNavigate();

    // const productImage = imageMap[selectedColor];
    const productImage = selectedColor
        ? imageMap.find((item) => item.color === selectedColor)
        : imageMap.find((item) => item.color === "black");

    const clearFields = () => {
        navigate("/projects-one");
    };

    return (
        <>
            <Col xs={12} sm={6} md={6} lg={6} xl={6}>
                {/* <img src={productImage.image} alt={productImage.alt} /> */}
                <div
                    className="product-options__image"
                    style={{
                        backgroundColor: productImage.color,
                    }}
                ></div>
            </Col>
            <Col xs={12} sm={6} md={6} lg={6} xl={6}>
                <div className="product-options">
                    <p>Select size:</p>
                    <div className="product-options__sizes">
                        {sizeMap.map((item) => (
                            <label
                                key={item}
                                className="size-option"
                                // className={`size-option ${
                                //     selectedSize === item ? "selected" : ""
                                // }`}
                            >
                                <input
                                    type="radio"
                                    name="usize"
                                    value={item}
                                    checked={selectedSize === item}
                                    onChange={(e) => {
                                        setSearchParams(
                                            (prev) => {
                                                if (prev.has("ucolor")) {
                                                    prev.set(
                                                        "usize",
                                                        e.target.value
                                                    );
                                                } else {
                                                    prev = new URLSearchParams({
                                                        usize: e.target.value,
                                                        ucolor: "black",
                                                    });
                                                }
                                                return prev;
                                            },
                                            { replace: true }
                                        );
                                    }}
                                />
                                {item}
                            </label>
                        ))}
                    </div>

                    <p>Product color:</p>
                    <div className="product-options__colors">
                        {imageMap.map((item) =>
                            item.color !== "black" ? (
                                <label
                                    key={item.color}
                                    className="color-option"
                                >
                                    <input
                                        type="radio"
                                        name="ucolor"
                                        value={item.color}
                                        checked={selectedColor === item.color}
                                        onChange={(e) => {
                                            setSearchParams(
                                                (prev) => {
                                                    if (prev.has("usize")) {
                                                        prev.set(
                                                            "ucolor",
                                                            e.target.value
                                                        );
                                                    } else {
                                                        prev =
                                                            new URLSearchParams(
                                                                {
                                                                    usize: "medium",
                                                                    ucolor: e
                                                                        .target
                                                                        .value,
                                                                }
                                                            );
                                                    }
                                                    return prev;
                                                },
                                                { replace: true }
                                            );
                                        }}
                                    />
                                    <span
                                        className={`checkmark ${item.color}`}
                                    ></span>
                                </label>
                            ) : null
                        )}
                    </div>
                    <button
                        aria-label="Clear product options"
                        className="product-options__clear-button"
                        onClick={clearFields}
                    >
                        Clear product options
                    </button>
                </div>
            </Col>
        </>
    );
};

export default ProductWithOptions;
