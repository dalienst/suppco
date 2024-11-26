"use client";
import { useFetchCategoryByInventory } from "@/dataActions/categories/categoryActions";
import { ChevronRight, Loader2 } from "lucide-react";
import Link from "next/link";
import { useMemo, useState } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/app/components/ui/input";
import { Button } from "@/app/components/ui/button";

function ShellEquipment({ params: { slug } }) {
  const [searchQuery, setSearchQuery] = useState("");
  const {
    isLoading: isLoadingCategories,
    data: categories,
    refetch: refetchCategories,
  } = useFetchCategoryByInventory("shell");


  const processedCategories = useMemo(() => {
    if (!categories) return null;

    return categories.map((category) => ({
      ...category,
      sublayers: category.sublayers.map((sublayer) => ({
        ...sublayer,
        sublayeritems: sublayer.sublayeritems.map((item) => ({
          ...item,
          link: `/branch/${slug}/shell/${category.slug}/${item.slug}`,
        })),
      })),
    }));
  }, [categories, slug]);

  const filteredCategories = useMemo(() => {
    if (!categories || !searchQuery) return [];
    return categories.map((category) => ({
      ...category,
      sublayers: category.sublayers.filter(
        (sublayer) =>
          sublayer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          sublayer.sublayeritems.some((item) =>
            item.name.toLowerCase().includes(searchQuery.toLowerCase())
          )
      ),
    }));
  }, [categories, searchQuery]);

  if (isLoadingCategories) {
    return <div className="h-[90vh] flex justify-center items-center">
      <Loader2 className="animate-spin"/>
    </div>;
  }

  return (
    <div className="py-3 md:p-4">
      <span className="flex items-center font-semibold text-lg lg:text-xl">
        <span>Categories</span> <ChevronRight size={14} />{" "}
        <span className="text-blue800">Shell Equipment</span>{" "}
      </span>
      <div className="my-4">
        <Input
          type="text"
          className="w-fit"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        {searchQuery !== "" && (
          <>
            {filteredCategories?.length > 0 ? (
              <div className="mt-2 border p-4 rounded-lg">
                <span className="font-semibold text-lg">
                  Your search results:
                </span>
                {filteredCategories
                  .filter((category) =>
                    category.sublayers.some(
                      (sublayer) => sublayer.sublayeritems.length > 0
                    )
                  )
                  .map((category) => (
                    <div key={category.slug}>
                      <span className="ml-2">-&gt;{category.name}</span>
                      {category.sublayers
                        .filter((sublayer) => sublayer.sublayeritems.length > 0)
                        .map((sublayer) => (
                          <div key={sublayer.slug}>
                            <span className="ml-4 text-red-300">
                              -&gt;{sublayer.name}
                            </span>
                            {sublayer.sublayeritems
                              .filter((item) =>
                                item.name
                                  .toLowerCase()
                                  .includes(searchQuery.toLowerCase())
                              )
                              .map((item) => (
                                <ul key={item.slug} className="list-inside">
                                  <li>
                                    <Link
                                      className="ml-6 flex items-center justify-between bg-blue-50 border-blue-200 rounded-md px-5 py-2 mt-2 text-blue-900"
                                      href={`/branch/${slug}/shell/${category.slug}/${item.slug}`}
                                    >
                                      -&gt;{item.name}
                                      <Button variant="outline">+ Add</Button>
                                    </Link>
                                  </li>
                                </ul>
                              ))}
                          </div>
                        ))}
                    </div>
                  ))}
              </div>
            ) : (
              <p>No results found for your search query.</p>
            )}
          </>
        )}
      </div>
      <div>
        <Accordion type="single" collapsible className="border p-4 rounded-xl">
          {processedCategories?.map((category) => (
            <AccordionItem key={category.slug} value={category.name}>
              <AccordionTrigger>{`${category.name} (${category.sublayers.length})`}</AccordionTrigger>
              <AccordionContent>
                {category.sublayers?.map((sublayer) => (
                  <Accordion key={sublayer.slug} type="single" collapsible>
                    <AccordionItem value={sublayer.slug}>
                      <AccordionTrigger className="ml-4">{`${sublayer.name} (${sublayer?.sublayeritems?.length})`}</AccordionTrigger>
                      <AccordionContent>
                        {sublayer?.sublayeritems?.map((item) => (
                          <Accordion key={item.slug} type="single" collapsible>
                            <AccordionItem
                              className="border-none"
                              value={item.slug}
                            >
                              <Link
                                className="ml-6 flex items-center justify-between bg-blue-50 border-blue-200 rounded-md px-5 py-2 mt-2 text-blue-900"
                                href={`/branch/${slug}/shell/${category.slug}/${item.slug}`}
                              >
                                -&gt;{item.name}
                                <Button variant="outline">+ Add</Button>
                              </Link>
                            </AccordionItem>
                          </Accordion>
                        ))}
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                ))}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}

export default ShellEquipment;
