"use client";
import UpdateSite from "@/actionForms/sites/UpdateSite";
import useFetchSiteDetail from "@/dataActions/site-equipment/FetchSiteDetail";

function BranchSettings({ params: { slug } }) {
  const {
    isLoading: siteLoading,
    data: site,
    refetch: refetchSite,
} = useFetchSiteDetail(slug)

  return <div>
    <UpdateSite isLoading={siteLoading} site={site} refetchSite={refetchSite}/>
  </div>;
}

export default BranchSettings;
