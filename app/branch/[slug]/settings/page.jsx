"use client";
import React from "react";
import { useFetchBranchDetail } from "@/dataActions/branches/branchesActions";

function BranchSettings({ params: { slug } }) {
  const {
    isLoading: isLoadingBranch,
    data: branch,
    refetch: refetchBranch,
  } = useFetchBranchDetail(slug);

  //   updateBranch form is at actionForms\branches\UpdateBranch.jsx

  return <div>BranchSettings</div>;
}

export default BranchSettings;
