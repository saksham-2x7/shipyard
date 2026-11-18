# ShipYard

A product-catalog storefront built from scratch with Next.js + TypeScript.

## What it does

- **Responsive product grid** on the home page, rendered dynamically from typed data.
- **Dynamic `/products/[id]` detail route**, with dedicated pages pre-rendered for each product.
- **Typed `ProductCard` component** and a strongly typed `Product` interface.
- **Custom 404 page** (`not-found.tsx`) for invalid or nonexistent product IDs.
- **`generateStaticParams`** to pre-build static pages for each catalog item.

## Run it locally

```bash
npm install
npm run dev
# open http://localhost:3000
```

## Build the static site

```bash
npm run build
```

## Project structure

```text
app/
  layout.tsx              root layout (nav + footer)
  page.tsx                home page: responsive product grid
  globals.css             storefront styling & responsive grid layout
  not-found.tsx           friendly 404 page
  components/
    ProductCard.tsx       typed card component, links to dynamic product page
    Stars.tsx             accessible rating stars
  data/
    products.ts           Product type + product catalog data + getProduct()
  products/
    [id]/
      page.tsx            dynamic product detail route with generateStaticParams
```
