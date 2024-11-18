"use client";
import { useFetchCategoryByInventory } from "@/dataActions/categories/categoryActions";

function ShellEquipment() {
  const {
    isLoading: isLoadingCategories,
    data: categories,
    refetch: refetchCategories,
  } = useFetchCategoryByInventory("shell");


  return <div>
    Shell Equipment
    <div>
      {categories?.map((item) => (
        <div key={item.slug}>
          <span className="ml-2">{item.name}</span>
          {item.sublayers.map((item) => (
            <div key={item.slug}>
              <span className="ml-4">{item.name}</span>
              {item.sublayeritems.map((item) => (
                <ul className="list-disc list-inside" key={item.slug}>
                  <li className="ml-6" onClick={()=>alert('Directs to form entry page')}>{item.name}</li>
                </ul>
              ))}
            </div>
          ))}
        </div>
      ))}
    </div>
  </div>;
}

export default ShellEquipment;
