"use client";

import { useFetchCategoryDetail } from "@/dataActions/categories/categoryActions";
import { useFetchSubCategoryItemDetail } from "@/dataActions/subcategoryitems/subCategoryItemActions";
import { useFetchSubCategoryItemShellEquipment } from "@/dataActions/shell/shellCategory";
import { ChevronRight, Loader2 } from "lucide-react";
import useFetchSiteDetail from "@/dataActions/site-equipment/FetchSiteDetail";
import { aggregateSearchFilters } from "@/data/searchFiltersGenerator";
import FiltersGenerator from "@/components/filtersGenerator/FiltersGenerator";
import { useState } from "react";
import { Button } from "@/app/components/ui/button";

export default function ItemDetail({
  params: { slug, categorySlug, itemSlug },
}) {
  const [filters, setFilters] = useState({})
  const handleFilterChange = (filterName, value) => {
    setFilters(prevFilters => ({
        ...prevFilters,
        [filterName]: value,
    }));
};
const handleSubmit = async(e)=>{
  e.preventDefault();
  console.log(filters,'filters')
}
  const {
    isLoading: isLoadingBranch,
    data: branch,
    refetch: refetchBranch,
    isSuccess
  } = useFetchSiteDetail(slug);

  const {
    isLoading: isLoadingCategory,
    data: category,
    refetch: refetchCategory,
  } = useFetchCategoryDetail(categorySlug);

  const {
    isLoading: isLoadingSubCategoryItem,
    data: subCategoryItem,
    refetch: refetchSubCategoryItem,
  } = useFetchSubCategoryItemDetail(itemSlug);

  const {
    isLoading: isLoadingShell,
    data: shell,
    refetch: refetchShell,
  } = useFetchSubCategoryItemShellEquipment(subCategoryItem?.id);

  if (isLoadingBranch || isLoadingCategory || isLoadingSubCategoryItem) {
    return (
      <div className="h-[90vh] flex justify-center items-center">
        <Loader2 className="animate-spin" />
      </div>
    );
  }

  return (
    <div className="p-3">
      <span className="flex items-center font-semibold text-lg lg:text-xl">
        <span>Products</span> <ChevronRight size={14} />{" "}
        <span className="text-blue800">{subCategoryItem?.name}</span>{" "}
      </span>
      <hr className="mb-4 mt-3" />
      <span className="block font-semibold text-lg mb-3">All filters</span>
      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-2 lg:gap-5">
                  {aggregateSearchFilters.map((field) => (
                    <FiltersGenerator
                    handleFilterChange={handleFilterChange}
                    filters={filters}
                      key={field.name}
                      name={field.name}
                      placeholder={field.placeholder}
                      label={field.placeholder}
                      inputType={field.inputType}
                      {...(field.options && { options: field.options })}
                      type="text"
                    />
                  ))}
                  <Button type='submit' >Filter</Button>
                </form>
    </div>
  );
}
