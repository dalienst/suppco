export const aggregateSearchFilters = [
    { name: "source_location", inputType: "input", placeholder: "Source Location" },
    { name: "shape", inputType: "input", placeholder: "Shape" },
    { name: "density", inputType: "input", placeholder: "Density" },
    { name: "compressive_strength", inputType: "input", placeholder: "Compressive Strength" },
    { name: "moisture_content", inputType: "input", placeholder: "Moisture Content" },
    { name: "silt_content", inputType: "input", placeholder: "Silt Content" },
    { name: "gradation", inputType: "input", placeholder: "Gradation" },
    { name: "product_name", inputType: "input", placeholder: "Product Name" },
    { name: "dimensions", inputType: "select", placeholder: "Size dimensions", options: [{
        id:1, value:'inch',
      },
      {
        id:2, value:'mm',
      },
      {
        id:3, value:'cm',
      },] },
      { name: "texture", inputType: "select", placeholder: "Texture", options: [{
        id:1, value:'fine',
      },
      {
        id:2, value:'coarse',
      },
      {
        id:3, value:'5mm-20mm',
      },
    ] },
]