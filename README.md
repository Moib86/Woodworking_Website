KarlWoodWorking — Starter static portfolio (React + Vite)

Quick start:
1. cd woodworking-portfolio
2. npm install
3. npm run dev
4. Open http://localhost:5173

Add photos:
- Put image files into public/images/
- Add the file names (strings) to public/images.json

Add testimonials:
- Edit public/testimonials.json and add objects with { "name", "city", "quote" }

Build:
- npm run build
- npm run preview

Deploy to GitHub Pages:
- Configure a GitHub repo for this project
- Add repository remote
- npm run deploy
(You may need to set the "homepage" and/or confirm gh-pages config for your repo; alternatively use GitHub Actions or Netlify)