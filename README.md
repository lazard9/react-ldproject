# LDProject – React Showcase App

Welcome to **LDProject**, a curated collection of React-based components, pages, and mini-projects. This app serves both as a sandbox for learning and a showcase of practical React skills.

The **home page** features a responsive layout with sliders and sections, while other routes contain fully functional interactive projects, including CRUD operations, games, and state-based UI behavior.

Rather than using a CSS framework, this project includes a **custom-built responsive grid system**, created for learning purposes and maximum flexibility.

Data is fetched from JSON files. To enable the test slider, start the JSON server using the command:

```bash
npm run server
```

before launching the project.

Navigate through the menu to explore different project pages, each featuring more intricate components. These components are predominantly sourced from online tutorials and courses, contributing to a diverse learning experience.

---

## Technologies Used

- React with Vite
- SCSS instead of plain CSS
- JSON server for local API simulation
- Swiper Slider ([https://swiperjs.com/](https://swiperjs.com/))
- Custom grid system

## Installation & Setup

1. Clone this repository:

    ```bash
    git clone https://github.com/lazard9/react-ldproject.git
    ```

2. Navigate to the project folder:

    ```bash
    cd react-ldproject
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

4. Start the JSON server [http://localhost:8080](http://localhost:8080):

    ```bash
    npm run server
    ```

5. Run the development server [http://localhost:8080](http://localhost:8080):

    ```bash
    npm run dev
    ```

## Available Scripts

Defined in `package.json`:

```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "lint": "eslint . --ext js,jsx --report-unused-disable-directives --max-warnings 0",
  "preview": "vite preview",
  "server": "json-server --watch src/assets/data/slider-cards.json --port 8080"
}
```

## Vite Configuration

Defined in `vite.config.js`:

```javascript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
    plugins: [react()],
    server: {
        proxy: {
            "/api": {
                target: "http://localhost:8080",
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, ""),
            },
        },
    },
});
```

## Custom Grid System

To better understand how CSS layout works under the hood, this project implements a minimal responsive grid system inspired by Bootstrap and CSS frameworks.

### Components

- `<Container containerWidth="lg">` – Sets content max-width
- `<Row>` – Flex container for `<Col>`s
- `<Col>` – Accepts responsive props like xs, sm, md, lg, xl, and custom margins like margin={3} or marginLg={4}

### Example Usage

```jsx
<Container containerWidth="lg">
  <Heading modifierClass="center">Portrait Cards</Heading>
  <Row>
    <Col xs={12} sm={6} md={4} lg={3} margin={3}>
      <PortraitCard ... />
    </Col>
  </Row>
</Container>
```

### Example CSS

```scss
.col {
  box-sizing: border-box;
  width: 100%;
  padding-left: 15px;
  padding-right: 15px;
}

.mb-col-3 {
  margin-bottom: 3rem;
}

@media (min-width: 1024px) {
  .mb-col-lg-4 {
    margin-bottom: 4rem;
  }
}
```

## Project Structure

- The **home page** is mostly static except for the slider.
- The **ProjectsOne** page contains various interactive projects inspired by online tutorials.
- The **Destinations** a full CRUD app using a custom UI

## Featured Projects in ProjectsOne

These projects are inspired by tasks and solutions found on the Web Dev Simplified, ByteGrad, and Web Dev Cody channels.

1. **Task List**

    - Based on the Web Dev Simplified Todo list project.
    - Added input validation: prevents empty tasks and duplicate entries.
    - First letter of each task is automatically capitalized.

2. **URL Search Parameters**

    - Demonstrates filtering a product list using two approaches:
        - `useState` for state management.
        - `useSearchParams` to store state in the URL, allowing bookmarking and sharing.
    - Includes reset buttons for easier state management.

3. **Product With Options**

    - Similar to the previous project, allows selecting product variations.
    - Uses `useSearchParams` instead of `useState` for managing state in the URL.
    - Two approaches shown:
        - Hybrid approach using `useState` and `useEffect` (not recommended for production).
        - Exclusive `useSearchParams` approach (better for URL-based state management).
    - Parameters only appear in the URL after user interaction.

4. **Guess Color Game**
    - A simple game where the user attempts to guess the correct color.
    - Once correctly guessed, the game resets after a few seconds.
    - Initially implemented with `useEffect`, but later refactored to rely only on `useState` for better control.

## Destinations Listing App

Inspired by a [YouTube crash course on job listings](https://youtu.be/LDB4uaJ87e0?si=9yJWcM9itMkhTCDr), this project takes the core idea and reshapes it into a tourist destination listing experience.

Key improvements and customizations:

- Replaces job posts with **tourist destinations**
- Uses a **custom-built grid system and styling** for this project (no CSS framework)
- Implements **full CRUD functionality** (Create, Read, Update, Delete)
- Uses **SEO-friendly slugs** in URLs instead of numeric IDs (UUID-based)
- Adds an **error boundary** for better route-level error handling
- Integrates **toast notifications** via `react-toastify`
- Introduces a **reusable components**, styled using BEM and Bootstrap-style variants
- Loads destination data and images from a **local JSON source**

Unlike the original course project, this version splits the frontend and backend across two local servers:

- The **JSON Server** runs on [http://localhost:8080](http://localhost:8080)
- The **React app (Vite)** runs on [http://localhost:5173](http://localhost:5173)

This app focuses on reinforcing React fundamentals and creating maintainable, scalable component structures through hands-on experimentation.

---

## Final Notes

This project is a collection of learning exercises and experiments, helping refine skills in React, state management, and UI development.
