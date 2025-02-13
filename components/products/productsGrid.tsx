import React from "react";
import { Decimal } from "@prisma/client/runtime/library";

type Product = {
  product_id: number;
  product_name: string;
  category_id: number | null;
  price: string | number | Decimal | null; // Prisma's Decimal type needs conversion
  description: string | null;
  image: string | null;
};

type ProductGridProps = {
  products: Product[];
};

const ProductsGrid: React.FC<ProductGridProps> = async ({ products }) => {
  console.log(products);
  return <div>test</div>;
};

export default ProductsGrid;
// Type '{ product_id: number; product_name: string; category_id: number | null; price: Decimal | null; description: string | null; image: string | null; }[]' is missing the following properties from type
//  '{ product_name: string; category_Id: string; description: string; image: string; price: number; product_Id: number; }': product_name, category_Id, description, image, and 2 more.ts(2740)
