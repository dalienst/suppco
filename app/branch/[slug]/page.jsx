"use client";
import { useFetchBranchDetail } from "@/dataActions/branches/branchesActions";
import React from "react";

function BranchDashboard({ params: { slug } }) {
  // TODO: the dashboard for the branch.
  // As branch is only for the supplier, the code for the dashboard can be written here unlike in the previous where there
  // were different layouts.

  const {
    isLoading: isLoadingBranch,
    data: branch,
    refetch: refetchBranch,
  } = useFetchBranchDetail(slug);

  console.log(branch);

  return <div>{slug}</div>;
}

export default BranchDashboard;
