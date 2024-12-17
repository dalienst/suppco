"use client";
import React from "react";
import { useFetchBranchDetail } from "@/dataActions/branches/branchesActions";
import UpdateBranch from "@/actionForms/branches/UpdateBranch";

function BranchSettings({ params: { slug } }) {
  const {
    isLoading: isLoadingBranch,
    data: branch,
    refetch: refetchBranch,
  } = useFetchBranchDetail(slug);

  return <div>
    <UpdateBranch isLoading={isLoadingBranch} branch={branch} refetchBranch={refetchBranch}/>
  </div>;
}

export default BranchSettings;
