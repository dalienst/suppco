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
import useFetchSiteDetail from "@/dataActions/site-equipment/FetchSiteDetail";
import CreateOrder from "../../../createOrder/CreateOrder";

export default function ItemDetail({
  params: { slug, categorySlug, itemSlug },
}) {
  // const {
  //   isLoading: isLoadingBranch,
  //   data: branch,
  //   refetch: refetchBranch,
  //   isSuccess,
  // } = useFetchBranchDetail(slug);
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
    <div className="py-3">
      <span className="flex items-center font-semibold text-lg lg:text-xl">
        <span>Products</span> <ChevronRight size={14} />{" "}
        <span className="text-blue800">{subCategoryItem?.name}</span>{" "}
      </span>
      <hr className="mb-4 mt-3" />
      <CreateOrder
            site={site}
            company={profile?.companies}
            onOpenChange={() => setOpen(false)}
            supplierProducts={supplierProducts}
          />
    </div>
  );
}
