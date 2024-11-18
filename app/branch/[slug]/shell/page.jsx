"use client";
import { useFetchCategoryByInventory } from "@/dataActions/categories/categoryActions";
import React from "react";

function ShellEquipment() {
  const {
    isLoading: isLoadingCategories,
    data: categories,
    refetch: refetchCategories,
  } = useFetchCategoryByInventory("shell");

  console.log(categories);

  return <div>ShellEquipment</div>;
}

export default ShellEquipment;
