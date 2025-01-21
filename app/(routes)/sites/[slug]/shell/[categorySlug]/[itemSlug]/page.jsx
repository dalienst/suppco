"use client";

import { useFetchCategoryDetail } from "@/dataActions/categories/categoryActions";
import { useFetchSubCategoryItemDetail } from "@/dataActions/subcategoryitems/subCategoryItemActions";
import { useFetchSubCategoryItemShellEquipment } from "@/dataActions/shell/shellCategory";
import { ChevronDown, ChevronRight, ChevronUp, Loader2 } from "lucide-react";
import useFetchSiteDetail from "@/dataActions/site-equipment/FetchSiteDetail";
import { aggregateSearchFilters } from "@/data/searchFiltersGenerator";
import FiltersGenerator from "@/components/filtersGenerator/FiltersGenerator";
import React, { useState } from "react";
import { Button } from "@/app/components/ui/button";
import { getUser } from "@/services/accounts";
import { useQuery } from "@tanstack/react-query";
import useAxiosAuth from "@/hooks/useAxiosAuth";
import useUserId from "@/hooks/useUserId";
import OrderForm from "@/actionForms/orders/OrderForm";
import CreateOrderForm from "@/actionForms/orders/CreateOrderForm";
import { useRouter } from "next/navigation";

const paymentInfoKeys = [
  "is_payment_on_delivery",
  "is_fixed",
  "is_fixed_fifty",
  "is_negotiable",
  "deposit_percentage",
];

const keysToExclude = ['user', 'supplier_company', 'slug', 'reference', 'layer', 'created_at', 'updated_at', 'company','branch','employees'];


export default function ItemDetail({
  params: { slug, categorySlug, itemSlug },
}) {
  const [filters, setFilters] = useState({});
  const [data, setData] = useState([]);
  const [showDetails, setShowDetails] = useState(false);
  const [hideFilters, setHideFilters] = useState(false);
  const [createOrder, setCreateOrder] = useState(false);
  const [supplier, setSupplier] = useState('');
  const handleFilterChange = (filterName, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterName]: value,
    }));
  };
  const axios = useAxiosAuth();
  const userId = useUserId();
  const router = useRouter()
  const { data: profile } = useQuery ({
    queryKey: ["profile"],
    queryFn: () => getUser(userId, axios),
  });
  const {
    isLoading: isLoadingBranch,
    data: branch,
    refetch: refetchBranch,
    isSuccess,
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
  const handleSubmit = async (e) => {
    e.preventDefault();
    let filteredData = shell;
    Object.keys(filters).forEach((key) => {
      const value = filters[key];
      if (value) {
        filteredData = filteredData?.filter((item) => {
          return (
            item[key] && item[key].toString().toLowerCase().includes(value.toLowerCase())
          );
        });
      }
    });
    setData(filteredData);
    setHideFilters(true);
  };

  const getAssociatedTerm = (key) => {
    switch (key) {
      case "is_fixed":
        return "fixed_terms";
      case "is_fixed_fifty":
        return "fixed_fifty_terms";
      case "is_negotiable":
        return "negotiable_terms";
      case "is_payment_on_delivery":
        return "pod_terms";
      default:
        return null;
    }
  };
  const getFormattedKey = (key) => {
    switch (key) {
      case "is_fixed":
        return "Fixed Payment plan";
      case "is_fixed_fifty":
        return "50-50 Payment plan";
      case "is_negotiable":
        return "Negotiable Payment plan";
      case "is_payment_on_delivery":
        return "Payment on Delivery";
      default:
        return null;
    }
  };
  const getAssociatedTermValue = (key, data) => {
    const termKey = getAssociatedTerm(key);
    return termKey ? data[termKey] : null;
  };
  const formatKey = (key) => {
    return key
      .replace(/_/g, ' ')
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' '); 
  };

  return (
    <>
    {!createOrder ? 
    <div className="p-3">
      <span className="flex items-center font-semibold text-lg lg:text-xl">
        <span>Products</span> <ChevronRight size={14} />{" "}
        <span className="text-blue800">{subCategoryItem?.name}</span>{" "}
      </span>
      <hr className="mb-4 mt-3" />
      <button onClick={()=>setHideFilters(prev=>!prev)} className="w-full flex justify-between items-center font-semibold text-lg mb-3">
        <span>{hideFilters ? 'Show ':'Hide '} filters</span>
        {hideFilters ? <ChevronDown/> : <ChevronUp/>}
      </button>
      {!hideFilters && <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-2 lg:gap-5 border rounded-xl p-2 md:border-none">
        {aggregateSearchFilters.map((field) => {
          const key = field.name;
          const value = filters[key]; 
          return (
          <FiltersGenerator
            handleFilterChange={handleFilterChange}
            filters={filters}
            key={field.name}
            name={field.name}
            value={value}
            placeholder={field.placeholder}
            label={field.placeholder}
            inputType={field.inputType}
            {...(field.options && { options: field.options })}
            type="text"
          />)
        })}
        <Button type="submit">Filter</Button>
      </form>}
      <section className="border rounded-xl p-3 mt-5">
      <h1 className="mb-3 font-semibold text-xl">Available suppliers</h1>
      {data?.length > 0 ? 
      <div>
        {data?.map((supplier, index) => {
          const filteredSupplierProductDetails = Object.entries(
            supplier
          ).filter(
            ([key, value]) =>
              value !== "" &&
            value !== null &&
            value !== undefined &&
            value !== false &&
            !keysToExclude.includes(key)
          );
          return (
            <div key={supplier?.reference} className="border rounded-xl p-2 mb-2">
              <span className="text-lg font-semibold w-full flex justify-between">
                <span>{index + 1}. {supplier?.supplier_company?.name}
                  <span className="text-[#696969] block font-normal text-sm ml-3">{supplier?.supplier_company?.address}</span>
                </span>
                <Button onClick={()=>{setCreateOrder(true); setSupplier(supplier)}} className="font-medium text-sm">Select</Button>
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2">
              <div className="mt-3 mx-2">
              <span className="font-medium ">Payment Information</span>
              {data && 
              <ul className="border p-2 rounded-xl">
                {paymentInfoKeys.map((key) => {
                      const value = supplier[key];
                      if (value) {
                        return (
                            <li key={key} className="mb-3">
                              {getFormattedKey(key)} 
                              <span className="text-[#696969] text-sm block">{getAssociatedTermValue(key, supplier)}</span>
                            </li>
                        );
                      }
                      return null;
                    })}
              </ul>
              }
              </div>
              <div className="mt-3 mx-3">
              <span className="font-medium ">Delivery Information</span>
              <div className="border p-2 rounded-xl">
                <span>
                <span>Delivery charges</span>
                <span className="text-[#696969] text-sm block">{supplier?.delivery_charges && supplier?.delivery_charges }</span>
                </span>
                {supplier?.delivery_mode && <span>Delivery mode</span>}
                <span className="text-[#696969] text-sm block">{supplier?.delivery_mode && supplier?.delivery_mode }</span>
              </div>
              </div>
              </div>
              <button onClick={()=>setShowDetails(prev=>!prev)} className="mt-3 mx-2 underline flex items-center">{showDetails ? 'Hide ':'Show '}Product details <ChevronDown size={16}/> </button>
              {showDetails && <div className="overflow-auto">
                <ul className="border rounded-xl p-3 mt-3 grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-3">
                  {filteredSupplierProductDetails.map(([key, value]) => (
                    <li key={key} className="flex flex-col">
                      <span className="font-medium">{formatKey(key)}</span>
                      <span className="border rounded-lg p-2 text-sm text-[#696969]">
                        {String(value)}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>}
            </div>
          );
        })}
      </div>
      :
      <p>No suppliers found. Try changing your filters.</p>
      }
      {data.length === 0 && <div>
        <h1 className="my-3 font-semibold text-xl">All suppliers with {subCategoryItem?.name}</h1>
        {shell?.map((supplier, index) => {
          const filteredSupplierProductDetails = Object.entries(
            supplier
          ).filter(
            ([key, value]) =>
              value !== "" &&
            value !== null &&
            value !== undefined &&
            value !== false &&
            !keysToExclude.includes(key)
          );
          return (
            <div key={supplier?.reference} className="border rounded-xl p-2 mb-2">
              <span className="text-lg font-semibold w-full flex justify-between">
                <span>{index + 1}. {supplier?.supplier_company?.name}
                  <span className="text-[#696969] block font-normal text-sm ml-3">{supplier?.supplier_company?.address}</span>
                </span>
                <Button onClick={()=>{setCreateOrder(true); setSupplier(supplier)}} className="font-medium text-sm">Select</Button>
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2">
              <div className="mt-3 mx-2">
              <span className="font-medium ">Payment Information</span>
              {data && 
              <ul className="border p-2 rounded-xl">
                {paymentInfoKeys.map((key) => {
                      const value = supplier[key];
                      if (value) {
                        return (
                            <li key={key} className="mb-3">
                              {getFormattedKey(key)} 
                              <span className="text-[#696969] text-sm block">{getAssociatedTermValue(key, supplier)}</span>
                            </li>
                        );
                      }
                      return null;
                    })}
              </ul>
              }
              </div>
              <div className="mt-3 mx-3">
              <span className="font-medium ">Delivery Information</span>
              <div className="border p-2 rounded-xl">
                <span>
                <span>Delivery charges</span>
                <span className="text-[#696969] text-sm block">{supplier?.delivery_charges && supplier?.delivery_charges }</span>
                </span>
                {supplier?.delivery_mode && <span>Delivery mode</span>}
                <span className="text-[#696969] text-sm block">{supplier?.delivery_mode && supplier?.delivery_mode }</span>
              </div>
              </div>
              </div>
              <button onClick={()=>setShowDetails(prev=>!prev)} className="mt-3 mx-2 underline flex items-center">{showDetails ? 'Hide ':'Show '}Product details <ChevronDown size={16}/> </button>
              {showDetails && <div className="overflow-auto">
                <ul className="border rounded-xl p-3 mt-3 grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-3">
                  {filteredSupplierProductDetails.map(([key, value]) => (
                    <li key={key} className="flex flex-col">
                      <span className="font-medium">{formatKey(key)}</span>
                      <span className="border rounded-lg p-2 text-sm text-[#696969]">
                        {String(value)}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>}
            </div>
          );
        })}
      </div>}
      </section>
    </div> 
    : 
    <div>
      <OrderForm 
      company={profile?.companies}
      site={branch}
      supplier={supplier}
      filters={filters}
      onClose={()=>setCreateOrder(false)}
      onRedirect={()=>router.push(`/sites/${slug}/orders`)}
      />
    </div>
    }
    </>
  );
}
