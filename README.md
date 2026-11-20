# ShipYard

A product-catalog storefront built from scratch with Next.js + TypeScript.

## What it does

- **Responsive product grid** on the home page, rendered dynamically from typed data.
- **Dynamic `/products/[id]` detail route**, with dedicated pages pre-rendered for each product.
- **Typed `ProductCard` component** and a strongly typed `Product` interface.
- **Custom 404 page** (`not-found.tsx`) for invalid or nonexistent product IDs.
- **`generateStaticParams`** to pre-build static pages for each catalog item.

## Performance & SEO Optimizations (Part 2)

- **`next/image`**: Responsive SVG product artwork with explicit width/height and responsive `sizes` to eliminate Cumulative Layout Shift (CLS). Priority loading enabled on the product detail hero image for optimal LCP.
- **`next/font`**: Self-hosted Google Font (`Inter` from `next/font/google`) loaded without external HTTP requests or render-blocking stylesheets.
- **Code Splitting & Lazy Loading (`next/dynamic`)**: Heavy below-the-fold customer `Reviews` component is lazy-loaded with a dedicated skeleton fallback to keep the initial page bundle lean.
- **Metadata & Dynamic SEO (`generateMetadata`)**: Root layout provides brand title templates (`%s | ShipYard`) and OpenGraph metadata; dynamic product detail pages use `generateMetadata` to populate tailored titles, descriptions, and preview images per product.
- **Static Export Friendly**: Configured with `unoptimized: true` and SVG CSP rules in `next.config.ts`.

## Run it locally

```bash
npm install
npm run dev
# open http://localhost:3000
```

## Build the production site

```bash
npm run build
```

## Project structure

```text
app/
  layout.tsx              root layout (next/font Inter + nav + footer + title template)
  page.tsx                home page: responsive product grid + page metadata
  globals.css             storefront styling, responsive grid & review cards
  not-found.tsx           friendly 404 page
  components/
    ProductCard.tsx       typed card component with next/image
    Stars.tsx             accessible rating stars
  data/
    products.ts           Product type + product catalog data + getProduct()
  products/
    [id]/
      page.tsx            dynamic product detail route with generateMetadata & next/image
      Reviews.tsx         lazy-loaded interactive customer reviews component ("use client")
public/
  products/               crisp vector SVG product artwork for all catalog items
```
