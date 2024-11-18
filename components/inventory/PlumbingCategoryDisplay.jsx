/* eslint-disable jsx-a11y/aria-proptypes */
"use client"
import Link from 'next/link';
import React from 'react'


function PlumbingCategoryDisplay({ categories, companySlug }) {
  return (
      <div className="accordion" id="accordionExample">
          {categories?.map((category, index) => (
              <div className="accordion-item" key={category?.id}>
                  <h2 className="accordion-header">
                      <button
                          className="accordion-button bg-white"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target={`#collapse${category?.id}`}
                          aria-expanded={`${index === 0}`}
                          aria-controls={`collapse${category?.id}`}
                      >
                          {category?.name}
                      </button>
                  </h2>
                  <div
                      id={`collapse${category?.id}`}
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                  >
                      <div className="accordion-body">
                          {category?.subcategories && category?.subcategories.length > 0 ? (
                              <div className="list-group">
                                  {category.subcategories.map((subcategory) => (
                                      <Link href={`/company/${companySlug}/plumbing/${subcategory?.slug}`} className="list-group-item" key={subcategory?.id}>
                                          {subcategory?.name}
                                      </Link>
                                  ))}
                              </div>
                          ) : (
                              <p className="card-text fw-semibold">No subcategories</p>
                          )}
                      </div>
                  </div>
              </div>
          ))}
      </div>
  )
}

export default PlumbingCategoryDisplay