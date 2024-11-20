"use client";
import { useFetchCategoryDetail } from "@/dataActions/categories/categoryActions";
import React from "react";
import { useFetchBranchDetail } from "@/dataActions/branches/branchesActions";
import { useFetchSubCategoryItemDetail } from "@/dataActions/subcategoryitems/subCategoryItemActions";
import { useFetchSubCategoryItemShellEquipment } from "@/dataActions/shell/shellCategory";

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
    return <div>Loading...</div>;
  }

  return (
    <>
      <div>
        <h5 className="fw-medium text-green-700">{subCategoryItem?.name}</h5>
      </div>
    </>
  );
}
