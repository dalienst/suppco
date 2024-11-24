export const formGeneratorInputFields = [
    { name: "source_location", inputType: "input", placeholder: "Source Location" },
    { name: "product_name", inputType: "input", placeholder: "Product Name" },
    { name: "description", inputType: "textarea", placeholder: "Description" },
    { name: "units_of_measurement", inputType: "select", placeholder: "Units of Measurement", options: [ {
        id:1, value:'Kgs',
      },
      {
        id:2, value:'Grams',
      },
      {
        id:3, value:'Mgs',
      },] },
    { name: "manufacturer", inputType: "input", placeholder: "Manufacturer" },
    { name: "identification_number", inputType: "input", placeholder: "Identification Number" },
    { name: "features", inputType: "textarea", placeholder: "Features" },
    { name: "condition", inputType: "input", placeholder: "Condition" },
    { name: "date_of_manufacture", inputType: "date", placeholder: "Date of Manufacture" },
    { name: "minimum_order_quantity", inputType: "input", placeholder: "Minimum Order Quantity" },
    { name: "texture", inputType: "select", placeholder: "Texture", options: [{
        id:1, value:'fine',
      },
      {
        id:2, value:'coarse',
      },] },
    { name: "dimensions", inputType: "select", placeholder: "Dimensions", options: [{
        id:1, value:'inch',
      },
      {
        id:2, value:'mm',
      },
      {
        id:3, value:'cm',
      },] },
    { name: "shape", inputType: "input", placeholder: "Shape" },
    { name: "density", inputType: "input", placeholder: "Density" },
    { name: "compressive_strength", inputType: "input", placeholder: "Compressive Strength" },
    { name: "moisture_content", inputType: "input", placeholder: "Moisture Content" },
    { name: "contamination_levels", inputType: "input", placeholder: "Contamination Levels" },
    { name: "silt_content", inputType: "input", placeholder: "Silt Content" },
    { name: "gradation", inputType: "input", placeholder: "Gradation" },
    { name: "standards_certifications", inputType: "input", placeholder: "Standards and Certifications" },
    { name: "environmental_specifications", inputType: "input", placeholder: "Environmental Specifications" },
    { name: "other", inputType: "input", placeholder: "Other" }
];