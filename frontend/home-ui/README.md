# HOME-UI

Landing page for Municipal financial system

---


## 🚀 Getting Started

### Prerequisites

- **Node.js** `>= 20.0.0`
- **npm** `>= 10.0.0` (or `pnpm` / `bun`)

### Local Development

```bash
# Clone the repository
git clone <repository-url>
cd <repository-directory>

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be accessible at: `http://localhost:3001`

### Build for Production

```bash
# Type check and build static files
npm run build

# Preview production build locally
npm run preview
```

Static output will be generated inside the `/dist` directory.

---

### Run in Docker

```bash
# Start container with volume mounting for real-time code editing
docker compose -f web/docker/docker-compose.yml up --build
```
Access dev server at: **`http://localhost:3001`**

---
