"use client";

import { useFetchCategoryDetail } from "@/dataActions/categories/categoryActions";
import { useFetchBranchDetail } from "@/dataActions/branches/branchesActions";
import { useFetchSubCategoryItemDetail } from "@/dataActions/subcategoryitems/subCategoryItemActions";
import { useFetchSubCategoryItemShellEquipment } from "@/dataActions/shell/shellCategory";
import AddMetalWork from "@/inventory/shell/AddMetalWork";
import AddReadyMix from "@/inventory/shell/AddReadyMix";
import AddAggregate from "@/inventory/shell/AddAggregate";
import AddAccessories from "@/inventory/shell/AddAccessories";
import AddWalls from "@/inventory/shell/AddWalls";
import AddRoof from "@/inventory/shell/AddRoof";
import AddPrecast from "@/inventory/shell/AddPrecast";
import AddCement from "@/inventory/shell/AddCement";
import AddFormwork from "@/inventory/shell/AddFormwork";
import { ChevronRight, Loader2 } from "lucide-react";

export default function ItemDetail({
  params: { slug, categorySlug, itemSlug },
}) {
  const {
    isLoading: isLoadingBranch,
    data: branch,
    refetch: refetchBranch,
    isSuccess,
  } = useFetchBranchDetail(slug);

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
    return <div className="h-[90vh] flex justify-center items-center">
    <Loader2 className="animate-spin"/>
  </div>;
  }
  
  const renderForm = () => {
    switch (category?.identity) {
      case "metal-work":
        return <AddMetalWork />;
      case "ready-mix-concrete":
        return <AddReadyMix />;
      case "aggregate":
        return (
          <AddAggregate
            branch={branch}
            item={subCategoryItem}
            category={category}
            refetchShell={refetchShell}
            employees={branch?.branch_employees}
          />
        );
      case "detail-subcomponentsaccessories":
        return <AddAccessories />;
      case "walls":
        return <AddWalls />;
      case "roof":
        return <AddRoof />;
      case "pre-cast":
        return <AddPrecast />;
      case "cement":
        return <AddCement />;
      case "formwork":
        return <AddFormwork />;
      default:
        return <div>No form available for this item</div>;
    }
  };

  return (
    <div className="py-3">
      <span className="flex items-center font-semibold text-lg lg:text-xl">
        <span>Products</span> <ChevronRight size={14} />{" "}
        <span className="text-blue800">{subCategoryItem?.name}</span>{" "}
      </span>
      <hr className="mb-4 mt-3"/>
      {renderForm()}
    </div>
  );
}
