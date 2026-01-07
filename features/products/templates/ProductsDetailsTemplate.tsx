import ProductsHero from "../components/ProductsHero";
import ProductBreadcrumb from "../components/ProductBreadcrumb";
import ProductDetails from "../components/ProductDetails";
import ProductReviews from "../components/ProductReviews";

export default function ProductsDetailsTemplate() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Our Category", href: "/category" },
    { label: "Product Details" },
  ];

  return (
    <main className="w-full bg-background min-h-screen space-y-8!">
      <ProductsHero />
      <ProductBreadcrumb items={breadcrumbItems} />

      <ProductDetails />

      <ProductReviews />

      <div className="container mx-auto px-4 py-12">
        {/* Related products or other content could go here */}
      </div>
    </main>
  );
}
