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
import AddShell from "@/inventory/shell/AddShell";

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
  console.log('my category',category)
  
  const {
    isLoading: isLoadingSubCategoryItem,
    data: subCategoryItem,
    refetch: refetchSubCategoryItem,
  } = useFetchSubCategoryItemDetail(itemSlug);
  console.log('my subcategory item',subCategoryItem)

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
  const renderForm = () => {
    switch (category?.identity) {
      case "metal-work":
        return <AddMetalWork 
          branch={branch}
            item={subCategoryItem}
            category={category}
            refetchShell={refetchShell}
            employees={branch?.employees}
        />;
      case "ready-mix-concrete":
        return <AddReadyMix 
          branch={branch}
            item={subCategoryItem}
            category={category}
            refetchShell={refetchShell}
            employees={branch?.employees}
        />;
      case "aggregate":
        return (
          <AddAggregate
            branch={branch}
            item={subCategoryItem}
            category={category}
            refetchShell={refetchShell}
            employees={branch?.employees}
          />
        );
      case "walls":
        case "roof":
          case "detail-subcomponentsaccessories":
            return (
              <AddShell
                branch={branch}
                item={subCategoryItem}
                category={category}
                refetchShell={refetchShell}
                employees={branch?.employees}
              />
            );
      case "pre-cast":
        return <AddPrecast 
          branch={branch}
            item={subCategoryItem}
            category={category}
            refetchShell={refetchShell}
            employees={branch?.employees}
        />;
      case "cement":
        return (
          <AddCement
            branch={branch}
            item={subCategoryItem}
            category={category}
            refetchShell={refetchShell}
          />
        );
      case "formwork":
        return <AddFormwork 
          branch={branch}
            item={subCategoryItem}
            category={category}
            refetchShell={refetchShell}
            employees={branch?.employees}
        />;
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
      <hr className="mb-4 mt-3" />
      {renderForm()}
    </div>
  );
}
