import ProductsHero from "../components/ProductsHero";
import ProductBreadcrumb from "../components/ProductBreadcrumb";

export default function ProductsTemplate() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Our Category", href: "/category" },
    { label: "Product Details" },
  ];

  return (
    <main className="w-full bg-background min-h-screen space-y-8!">
      <ProductsHero />
      <ProductBreadcrumb items={breadcrumbItems} />

      <div className="container mx-auto px-4 py-12">
        {/* Product details content will go here */}
      </div>
    </main>
  );
}
