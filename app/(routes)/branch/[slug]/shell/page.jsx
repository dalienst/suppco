"use client";
import { useFetchCategoryByInventory } from "@/dataActions/categories/categoryActions";
import Link from "next/link";

function ShellEquipment({ params: { slug } }) {
  const {
    isLoading: isLoadingCategories,
    data: categories,
    refetch: refetchCategories,
  } = useFetchCategoryByInventory("shell");

  if (isLoadingCategories) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      Shell Equipment - Categories
      <div>
        {categories?.map((category) => (
          <div key={category.slug}>
            <span className="ml-2">{category.name}</span>
            {category.sublayers.map((sublayer) => (
              <div key={sublayer.slug}>
                <span className="ml-4">{sublayer.name}</span>
                {sublayer.sublayeritems.map((item) => (
                  <ul className="list-disc list-inside" key={item.slug}>
                    <Link
                      className="ml-6 text-blue-900"
                      href={`/branch/${slug}/shell/${category.slug}/${item.slug}`}
                    >
                      {item.name}
                    </Link>
                  </ul>
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShellEquipment;
