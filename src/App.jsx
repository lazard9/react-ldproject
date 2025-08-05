import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

import Layout from "./layouts/Layout";
import HomePage from "./pages/HomePage";
import ProjectsOne from "./pages/ProjectsOne";
import Destinations from "./pages/Destinations";
import DestinationsSingle from "./pages/DestinationsSingle";
import DestinationsNew from "./pages/DestinationsNew";
import DestinationsEdit from "./pages/DestinationsEdit";
import AboutPage from "./pages/AboutPage";
import BlogPage from "./pages/BlogPage";
import ContactPage from "./pages/ContactPage";
import NotFoundPage from "./pages/NotFoundPage";

import {
  fetchDestinationById,
  fetchAllDestinations,
  addDestination,
  editDestination,
  deleteDestination,
} from "@/api/destinations";

/**
 * A loader function for react-router-dom that fetches a single destination by ID.
 *
 * The function takes the route parameters as an object and returns a promise that resolves with the destination object.
 *
 * @param {{ params: { id: string | number } }} routeParams - The route parameters object.
 * @returns {Promise<Destination>} A promise that resolves with the destination object.
 * @throws {Error} If the fetch fails.
 */
const destinationLoader = async ({ params }) => {
  return await fetchDestinationById(params.id);
};

/**
 * A loader function for react-router-dom that fetches a single destination by slug.
 *
 * The function takes the route parameters as an object and returns a promise that resolves with the destination object.
 *
 * The function fetches all destinations and then finds the one with the matching slug. If no destination is found, it throws a 404 response.
 *
 * @param {{ params: { slug: string } }} routeParams - The route parameters object.
 * @returns {Promise<Destination>} A promise that resolves with the destination object.
 * @throws {Response} If no destination with the given slug is found.
 */
const destinationLoaderBySlug = async ({ params }) => {
  const data = await fetchAllDestinations();
  const destination = data.find((d) => d.slug === params.slug);

  if (!destination) {
    throw new Response("Not Found", { status: 404 });
  }

  return destination;
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<NotFoundPage />}>
      <Route index element={<HomePage />} />
      <Route path="projects-one" element={<ProjectsOne />} />
      <Route path="destinations" element={<Destinations />} />
      <Route
        path="destinations/:slug"
        element={<DestinationsSingle deleteDestination={deleteDestination} />}
        loader={destinationLoaderBySlug}
        errorElement={<NotFoundPage />}
      />
      <Route
        path="destinations/new"
        element={<DestinationsNew newDestination={addDestination} />}
      />
      <Route
        path="destinations/edit/:id"
        element={<DestinationsEdit updateDestination={editDestination} />}
        loader={destinationLoader}
        errorElement={<NotFoundPage />}
      />
      <Route path="about" element={<AboutPage />} />
      <Route path="blog" element={<BlogPage />} />
      <Route path="contact" element={<ContactPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
