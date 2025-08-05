import PropTypes from "prop-types";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import "./DestinationForm.scss";

const DestinationForm = ({ destinationSubmit, initialDestinationData }) => {
  const [formData, setFormData] = useState({
    title: initialDestinationData?.title || "",
    description: initialDestinationData?.description || "",
    ctaText: initialDestinationData?.ctaText || "",
  });

  const isEditMode = Boolean(initialDestinationData?.id); // Detekcija da li je update

  const generateSlug = (title) =>
    title
      .toLowerCase()
      .trim()
      .replace(/\s+/g, "-")
      .replace(/[^\w-]+/g, "");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const rnd = Math.floor(Math.random() * 4) + 1;
    const imgFile = `/media/destination-00${rnd}.jpg`;

    const onSubmitDestinationData = {
      id: initialDestinationData?.id || uuidv4(),
      title: formData.title,
      slug: generateSlug(formData.title),
      imgUrl: initialDestinationData?.imgUrl || imgFile,
      imgAlt: "Scenic view of destination",
      description: formData.description,
      ctaText: formData.ctaText,
    };

    destinationSubmit(onSubmitDestinationData);

    setFormData({
      title: "",
      description: "",
      ctaText: "",
    });
  };

  return (
    <form className="destination-form" onSubmit={handleSubmit}>
      <div className="destination-form__field">
        <label htmlFor="title">Title</label>
        <input
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />
      </div>

      <div className="destination-form__field">
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          rows="4"
          required
        />
      </div>

      <div className="destination-form__field">
        <label htmlFor="ctaText">CTA Text</label>
        <input
          id="ctaText"
          name="ctaText"
          value={formData.ctaText}
          onChange={handleChange}
        />
      </div>

      <button className="destination-form__submit" type="submit">
        {isEditMode ? "Update Destination" : "Create Destination"}
      </button>
    </form>
  );
};

DestinationForm.propTypes = {
  destinationSubmit: PropTypes.func.isRequired,
  initialDestinationData: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    slug: PropTypes.string,
    imgUrl: PropTypes.string,
    imgAlt: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    ctaText: PropTypes.string,
  }),
};

export default DestinationForm;
