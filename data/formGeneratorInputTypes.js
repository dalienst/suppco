export const aggregateInputFields = [
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

export const cementInputFields = [
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
  { name: "shelf_life", inputType: "input", placeholder: "Shelf life" },
  { name: "grade", inputType: "input", placeholder: "Grade" },
  { name: "packaging", inputType: "input", placeholder: "Packaging" },
  { name: "standards_certifications", inputType: "input", placeholder: "Standards and Certifications" },
  { name: "environmental_specifications", inputType: "input", placeholder: "Environmental Specifications" },
  { name: "other", inputType: "input", placeholder: "Other" }
];

export const formWorkInputFields = [
  { name: "source_location", inputType: "input", placeholder: "Source Location" },
  { name: "product_name", inputType: "input", placeholder: "Product Name" },
  { name: "description", inputType: "textarea", placeholder: "Description" },
  { name: "manufacturer", inputType: "input", placeholder: "Manufacturer" },
  { name: "identification_number", inputType: "input", placeholder: "Identification Number" },
  { name: "features", inputType: "textarea", placeholder: "Features" },
  { name: "condition", inputType: "input", placeholder: "Condition" },
  { name: "date_of_manufacture", inputType: "date", placeholder: "Date of Manufacture" },
  { name: "minimum_order_quantity", inputType: "input", placeholder: "Minimum Order Quantity" },
  { name: "dimensions", inputType: "select", placeholder: "Dimensions", options: [{
    id:1, value:'inch',
  },
  {
    id:2, value:'mm',
  },
  {
    id:3, value:'cm',
  },] },
  { name: "width", inputType: "input", placeholder: "Width" },
  { name: "length", inputType: "input", placeholder: "Length" },
  { name: "height", inputType: "input", placeholder: "Height" },
  { name: "thickness", inputType: "input", placeholder: "Thickness" },
  { name: "material", inputType: "input", placeholder: "Material" },
  { name: "grade", inputType: "input", placeholder: "Grade" },
  { name: "warranty", inputType: "input", placeholder: "Warranty" },
  { name: "formwork_compatibility", inputType: "input", placeholder: "Formwork compatibility" },
  { name: "panel_strength", inputType: "input", placeholder: "Panel strength" },
  { name: "panel_thickness", inputType: "input", placeholder: "Panel thickness" },
  { name: "panel_surface_treatment", inputType: "input", placeholder: "Panel surface treatment" },
  { name: "panel_connection", inputType: "input", placeholder: "Panel connection" },
  { name: "re_use_number", inputType: "input", placeholder: "Re-use number" },
  { name: "edge_protection", inputType: "input", placeholder: "Edge protection" },
  { name: "surface_finish", inputType: "input", placeholder: "Surface finish" },
  { name: "standards_certifications", inputType: "input", placeholder: "Standards and Certifications" },
  { name: "environmental_specifications", inputType: "input", placeholder: "Environmental Specifications" },
  { name: "other", inputType: "input", placeholder: "Other" }
];

export const metalWorkInputFields = [
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
  { name: "dimensions", inputType: "select", placeholder: "Dimensions", options: [{
    id:1, value:'inch',
  },
  {
    id:2, value:'mm',
  },
  {
    id:3, value:'cm',
  },] },
  { name: "diameter", inputType: "input", placeholder: "Diameter" },
  { name: "width", inputType: "input", placeholder: "Width" },
  { name: "length", inputType: "input", placeholder: "Length" },
  { name: "height", inputType: "input", placeholder: "Height" },
  { name: "thickness", inputType: "input", placeholder: "Thickness" },
  { name: "material", inputType: "input", placeholder: "Material" },
  { name: "grade", inputType: "input", placeholder: "Grade" },
  { name: "finish", inputType: "input", placeholder: "Finish" },
  { name: "standards_certifications", inputType: "input", placeholder: "Standards and Certifications" },
  { name: "environmental_specifications", inputType: "input", placeholder: "Environmental Specifications" },
  { name: "other", inputType: "input", placeholder: "Other" }
];

export const precastInputFields = [
  { name: "source_location", inputType: "input", placeholder: "Source Location" },
  { name: "product_name", inputType: "input", placeholder: "Product Name" },
  { name: "description", inputType: "textarea", placeholder: "Description" },
  { name: "manufacturer", inputType: "input", placeholder: "Manufacturer" },
  { name: "identification_number", inputType: "input", placeholder: "Identification Number" },
  { name: "features", inputType: "textarea", placeholder: "Features" },
  { name: "condition", inputType: "input", placeholder: "Condition" },
  { name: "date_of_manufacture", inputType: "date", placeholder: "Date of Manufacture" },
  { name: "minimum_order_quantity", inputType: "input", placeholder: "Minimum Order Quantity" },
  { name: "dimensions", inputType: "select", placeholder: "Dimensions", options: [{
    id:1, value:'inch',
  },
  {
    id:2, value:'mm',
  },
  {
    id:3, value:'cm',
  },] },
  { name: "re_enforcement", inputType: "input", placeholder: "Re enforcement" },
  { name: "diameter", inputType: "input", placeholder: "Diameter" },
  { name: "width", inputType: "input", placeholder: "Width" },
  { name: "length", inputType: "input", placeholder: "Length" },
  { name: "height", inputType: "input", placeholder: "Height" },
  { name: "thickness", inputType: "input", placeholder: "Thickness" },
  { name: "material", inputType: "input", placeholder: "Material" },
  { name: "grade", inputType: "input", placeholder: "Grade" },
  { name: "finish", inputType: "input", placeholder: "Finish" },
  { name: "design", inputType: "input", placeholder: "Design" },
  { name: "reinforcement", inputType: "input", placeholder: "Reinforcement" },
  { name: "connection_details", inputType: "input", placeholder: "Connection details" },
  { name: "standards_certifications", inputType: "input", placeholder: "Standards and Certifications" },
  { name: "environmental_specifications", inputType: "input", placeholder: "Environmental Specifications" },
  { name: "other", inputType: "input", placeholder: "Other" }
];

export const readyMixInputFields = [
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
  { name: "minimum_order_quantity", inputType: "input", placeholder: "Minimum Order Quantity" },
  { name: "dimensions", inputType: "select", placeholder: "Dimensions", options: [{
    id:1, value:'inch',
  },
  {
    id:2, value:'mm',
  },
  {
    id:3, value:'cm',
  },] },
  { name: "texture", inputType: "input", placeholder: "Texture" },
  { name: "slump_value", inputType: "input", placeholder: "Slump value" },
  { name: "cement_type", inputType: "input", placeholder: "Cement type" },
  { name: "admixture", inputType: "input", placeholder: "Admixture" },
  { name: "mix_proportions", inputType: "input", placeholder: "Mix proportions" },
  { name: "standards_certifications", inputType: "input", placeholder: "Standards and Certifications" },
  { name: "environmental_specifications", inputType: "input", placeholder: "Environmental Specifications" },
  { name: "other", inputType: "input", placeholder: "Other" }
];

export const wallsInputFields = [
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

  { name: "dimensions", inputType: "select", placeholder: "Dimensions", options: [{
    id:1, value:'inch',
  },
  {
    id:2, value:'mm',
  },
  {
    id:3, value:'cm',
  },] },
  { name: "stone_cut", inputType: "input", placeholder: "Stone cut" },
  { name: "grade", inputType: "input", placeholder: "Grade" },
  { name: "width", inputType: "input", placeholder: "Width" },
  { name: "length", inputType: "input", placeholder: "Length" },
  { name: "height", inputType: "input", placeholder: "Height" },
  { name: "thickness", inputType: "input", placeholder: "Thickness" },
  { name: "color", inputType: "input", placeholder: "Color" },
  { name: "finish", inputType: "input", placeholder: "Finish" },
  { name: "compressive_strength", inputType: "input", placeholder: "Compressive strength" },
  { name: "r_value", inputType: "input", placeholder: "R value" },
  { name: "moisture_absorption", inputType: "input", placeholder: "Moisture absorption" },
  { name: "mortar_type", inputType: "input", placeholder: "Mortar type " },
  { name: "packaging", inputType: "input", placeholder: "Packaging" },
  { name: "edge_type", inputType: "input", placeholder: "Edge type" },
  { name: "fire_rating", inputType: "input", placeholder: "Fire rating" },
  { name: "moisture_resistance", inputType: "input", placeholder: "Moisture resistance" },
  { name: "moisture_content", inputType: "input", placeholder: "Moisture content" },
  { name: "sound_proofing", inputType: "input", placeholder: "Sound proofing" },
  { name: "density", inputType: "input", placeholder: "Density" },
  { name: "veneer_species", inputType: "input", placeholder: "Veneer species" },
  { name: "core_material", inputType: "input", placeholder: "Core material" },
  { name: "glue_bonding", inputType: "input", placeholder: "Glue bonding" },
  { name: "sustainability", inputType: "input", placeholder: "Sustainability" },
  { name: "wood_species", inputType: "input", placeholder: "Wood species" },
  { name: "fe_emission", inputType: "input", placeholder: "Fe emission" },
  { name: "glass_coating", inputType: "input", placeholder: "Glass coating" },
  { name: "transparency", inputType: "input", placeholder: "Transparency" },
  { name: "standards_certifications", inputType: "input", placeholder: "Standards and Certifications" },
  { name: "environmental_specifications", inputType: "input", placeholder: "Environmental Specifications" },
  { name: "other", inputType: "input", placeholder: "Other" }
];

export const roofInputFields = [
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
  { name: "dimensions", inputType: "select", placeholder: "Dimensions", options: [{
      id:1, value:'inch',
    },
    {
      id:2, value:'mm',
    },
    {
      id:3, value:'cm',
    },
    {
      id:4, value:'m',
    },
  ] },
  { name: "weather_resistance", inputType: "select", placeholder: "Weather resistance", options: [{
      id:1, value:'wind resistance',
    },
    {
      id:2, value:'impact resistance',
    },
    {
      id:3, value:'ultra violet',
    },
  ] },
    { name: "width", inputType: "input", placeholder: "Width" },
  { name: "length", inputType: "input", placeholder: "Length" },
  { name: "height", inputType: "input", placeholder: "Height" },
  { name: "thickness", inputType: "input", placeholder: "Thickness" },
  { name: "wood_species", inputType: "input", placeholder: "Wood species" },
  { name: "grade", inputType: "input", placeholder: "Grade" },
  { name: "material", inputType: "input", placeholder: "Material" },
  { name: "edge_profile", inputType: "input", placeholder: "Edge profile" },
  { name: "finish", inputType: "input", placeholder: "Finish" },
  { name: "profile", inputType: "input", placeholder: "Profile" },
  { name: "weight", inputType: "input", placeholder: "Weight" },
  { name: "sheathing_compatibility", inputType: "input", placeholder: "Sheathing compatibility" },
  { name: "tooth_configuration", inputType: "input", placeholder: "Tooth configuration" },
  { name: "load_capacity", inputType: "input", placeholder: "Load capacity" },
  { name: "hole_pattern", inputType: "input", placeholder: "Hole pattern" },
  { name: "coating", inputType: "input", placeholder: "Coating" },
  { name: "treatment", inputType: "input", placeholder: "Treatment" },
  { name: "style", inputType: "input", placeholder: "Style" },
  { name: "color", inputType: "input", placeholder: "Color" },
  { name: "density", inputType: "input", placeholder: "Density" },
  { name: "r_value", inputType: "input", placeholder: "R value" },
  { name: "vapor_barrier", inputType: "input", placeholder: "Vapor barrier" },
  { name: "permeability", inputType: "input", placeholder: "Permeability" },
  { name: "compatibility", inputType: "input", placeholder: "Compatibility" },
  { name: "surface_finish", inputType: "input", placeholder: "Surface finish" },
  { name: "fire_resistance", inputType: "input", placeholder: "Fire resistance" },
  { name: "ultra_violet_resistance", inputType: "input", placeholder: "Ultra violet resistance" },
  { name: "slip_resistance", inputType: "input", placeholder: "Slip resistance" },
  { name: "moisture_resistance", inputType: "input", placeholder: "Moisture resistance" },
  { name: "moisture_content", inputType: "input", placeholder: "Moisture Content" },
  { name: "standards_certifications", inputType: "input", placeholder: "Standards and Certifications" },
  { name: "other", inputType: "input", placeholder: "Other" }
];

export const cementDetails = [
  { name: "source_location", inputType: "input", placeholder: "Source Location" },
  { name: "product_name", inputType: "input", placeholder: "Product Name" },
  { name: "description", inputType: "textarea", placeholder: "Description" },
  { name: "units_of_measurement", inputType: "select", placeholder: "Units of Measurement", options: [ {
      id:1, value:'Kgs',
    },
    {
      id:2, value:'Tonnes',
    },
    {
      id:3, value:'Bags',
    },] },
  { name: "manufacturer", inputType: "input", placeholder: "Manufacturer" },
  { name: "model_number", inputType: "input", placeholder: "Model Number" },
  { name: "features", inputType: "textarea", placeholder: "Features" },
  { name: "condition", inputType: "input", placeholder: "Condition" },
  { name: "application", inputType: "input", placeholder: "Application" },
  { name: "chemical_composition", inputType: "input", placeholder: "Chemical composition" },
  { name: "physical_form", inputType: "input", placeholder: "Physical form" },
  { name: "color", inputType: "input", placeholder: "Color" },
  { name: "dosage", inputType: "input", placeholder: "Dosage" },
  { name: "effectiveness", inputType: "input", placeholder: "Effectiveness" },
  { name: "compatibility", inputType: "input", placeholder: "Compatibility" },
  { name: "stability", inputType: "input", placeholder: "Stability" },
  { name: "standards_certifications", inputType: "input", placeholder: "Standards and Certifications" },
  { name: "environmental_specifications", inputType: "input", placeholder: "Environmental Specifications" },
  { name: "other", inputType: "input", placeholder: "Other" }
];
// for mastics, cement, adhesives & sealants
export const roofMasticsDetails = [
  { name: "source_location", inputType: "input", placeholder: "Source Location" },
  { name: "product_name", inputType: "input", placeholder: "Product Name" },
  { name: "description", inputType: "textarea", placeholder: "Description" },
  { name: "units_of_measurement", inputType: "select", placeholder: "Units of Measurement", options: [ {
      id:1, value:'Metres',
    },
    {
      id:2, value:'Feet',
    },
    {
      id:3, value:'Cms',
    },] },
  { name: "manufacturer", inputType: "input", placeholder: "Manufacturer" },
  { name: "model_number", inputType: "input", placeholder: "Model Number" },
  { name: "features", inputType: "textarea", placeholder: "Features" },
  { name: "condition", inputType: "input", placeholder: "Condition" },
  { name: "application", inputType: "input", placeholder: "Application" },
  { name: "base", inputType: "input", placeholder: "Base" },
  { name: "reinforcement", inputType: "input", placeholder: "Reinforcement" },
  { name: "additives", inputType: "input", placeholder: "Additives" },
  { name: "form", inputType: "input", placeholder: "Form" },
  { name: "color", inputType: "input", placeholder: "Color" },
  { name: "density", inputType: "input", placeholder: "Density" },
  { name: "viscosity", inputType: "input", placeholder: "Viscosity" },
  { name: "adhesion", inputType: "input", placeholder: "Adhesion" },
  { name: "flexibility", inputType: "input", placeholder: "Flexibility" },
  { name: "durability", inputType: "input", placeholder: "Durability" },
  { name: "waterproofing", inputType: "input", placeholder: "Waterproofing" },
  { name: "cure_time", inputType: "input", placeholder: "Cure time" },
  { name: "application_method", inputType: "input", placeholder: "Application method" },
  { name: "surface_preparation", inputType: "input", placeholder: "Surface preparation" },
  { name: "application_thickness", inputType: "input", placeholder: "Application thickness" },
  { name: "application_coverage", inputType: "input", placeholder: "Application coverage" },
  { name: "standards_certifications", inputType: "input", placeholder: "Standards and Certifications" },
  { name: "environmental_specifications", inputType: "input", placeholder: "Environmental Specifications" },
  { name: "other", inputType: "input", placeholder: "Other" }
];

export const roofPrimersDetails = [
  { name: "source_location", inputType: "input", placeholder: "Source Location" },
  { name: "product_name", inputType: "input", placeholder: "Product Name" },
  { name: "description", inputType: "textarea", placeholder: "Description" },
  { name: "units_of_measurement", inputType: "select", placeholder: "Units of Measurement", options: [ {
    id:1, value:'Metres',
  },
  {
    id:2, value:'Feet',
  },
  {
    id:3, value:'Cms',
  },] },
  { name: "manufacturer", inputType: "input", placeholder: "Manufacturer" },
  { name: "model_number", inputType: "input", placeholder: "Model Number" },
  { name: "features", inputType: "textarea", placeholder: "Features" },
  { name: "condition", inputType: "input", placeholder: "Condition" },
  { name: "application", inputType: "input", placeholder: "Application" },
  { name: "base", inputType: "input", placeholder: "Base" },
  { name: "solvent", inputType: "input", placeholder: "Solvent" },
  { name: "additives", inputType: "input", placeholder: "Additives" },
  { name: "form", inputType: "input", placeholder: "Form" },
  { name: "color", inputType: "input", placeholder: "Color" },
  { name: "density", inputType: "input", placeholder: "Density" },
  { name: "viscosity", inputType: "input", placeholder: "Viscosity" },
  { name: "adhesion", inputType: "input", placeholder: "Adhesion" },
  { name: "penetration", inputType: "input", placeholder: "Penetration" },
  { name: "durability", inputType: "input", placeholder: "Durability" },
  { name: "cure_time", inputType: "input", placeholder: "Cure time" },
  { name: "application_method", inputType: "input", placeholder: "Application method" },
  { name: "surface_preparation", inputType: "input", placeholder: "Surface preparation" },
  { name: "application_thickness", inputType: "input", placeholder: "Application thickness" },
  { name: "application_coverage", inputType: "input", placeholder: "Application coverage" },
  { name: "standards_certifications", inputType: "input", placeholder: "Standards and Certifications" },
  { name: "environmental_specifications", inputType: "input", placeholder: "Environmental Specifications" },
  { name: "other", inputType: "input", placeholder: "Other" }
];

export const roofBracketsDetails = [
  { name: "source_location", inputType: "input", placeholder: "Source Location" },
  { name: "product_name", inputType: "input", placeholder: "Product Name" },
  { name: "description", inputType: "textarea", placeholder: "Description" },
  { name: "units_of_measurement", inputType: "select", placeholder: "Units of Measurement", options: [ {
    id:1, value:'Metres',
  },
  {
    id:2, value:'Feet',
  },
  {
    id:3, value:'Cms',
  },] },
  { name: "dimensions", inputType: "select", placeholder: "Dimensions", options: [{
    id:1, value:'inch',
  },
  {
    id:2, value:'mm',
  },
  {
    id:3, value:'cm',
  },
  {
    id:4, value:'m',
  },
] },
{ name: "gauge_diameter", inputType: "input", placeholder: "Gauge diameter" },
{ name: "width", inputType: "input", placeholder: "Width" },
{ name: "length", inputType: "input", placeholder: "Length" },
{ name: "height", inputType: "input", placeholder: "Height" },
{ name: "thickness", inputType: "input", placeholder: "Thickness" },
{ name: "volume", inputType: "input", placeholder: "Volume" },
  { name: "manufacturer", inputType: "input", placeholder: "Manufacturer" },
  { name: "model_number", inputType: "input", placeholder: "Model Number" },
  { name: "features", inputType: "textarea", placeholder: "Features" },
  { name: "condition", inputType: "input", placeholder: "Condition" },
  { name: "weight", inputType: "input", placeholder: "Weight" },
  { name: "application", inputType: "input", placeholder: "Application" },
  { name: "accessories", inputType: "input", placeholder: "accessories" },
  { name: "base_material", inputType: "input", placeholder: "Base material" },
  { name: "coating", inputType: "input", placeholder: "Coating" },
  { name: "d_c_type", inputType: "input", placeholder: "Design and contruction Type" },
  { name: "adjustability", inputType: "input", placeholder: "Adjustability" },
  { name: "reinforcement", inputType: "input", placeholder: "reinforcement" },
  { name: "attachment_method", inputType: "input", placeholder: "Attachment method" },
  { name: "mounting_holes", inputType: "input", placeholder: "Mounting holes" },

  { name: "load_bearing", inputType: "input", placeholder: "Load bearing" },
  { name: "safety_features", inputType: "input", placeholder: "Safety features" },
  { name: "durability", inputType: "input", placeholder: "Durability" },
  { name: "standards_certifications", inputType: "input", placeholder: "Standards and Certifications" },
  { name: "environmental_specifications", inputType: "input", placeholder: "Environmental Specifications" },
  { name: "other", inputType: "input", placeholder: "Other" }
];

export const roofTensionersDetails = [
  { name: "source_location", inputType: "input", placeholder: "Source Location" },
  { name: "product_name", inputType: "input", placeholder: "Product Name" },
  { name: "description", inputType: "textarea", placeholder: "Description" },
  { name: "units_of_measurement", inputType: "select", placeholder: "Units of Measurement", options: [ {
    id:1, value:'Metres',
  },
  {
    id:2, value:'Feet',
  },
  {
    id:3, value:'Cms',
  },] },
  { name: "dimensions", inputType: "select", placeholder: "Dimensions", options: [{
    id:1, value:'inch',
  },
  {
    id:2, value:'mm',
  },
  {
    id:3, value:'cm',
  },
  {
    id:4, value:'m',
  },
] },
{ name: "gauge_diameter", inputType: "input", placeholder: "Gauge diameter" },
{ name: "width", inputType: "input", placeholder: "Width" },
{ name: "length", inputType: "input", placeholder: "Length" },
{ name: "height", inputType: "input", placeholder: "Height" },
{ name: "thickness", inputType: "input", placeholder: "Thickness" },
{ name: "volume", inputType: "input", placeholder: "Volume" },
  { name: "manufacturer", inputType: "input", placeholder: "Manufacturer" },
  { name: "model_number", inputType: "input", placeholder: "Model Number" },
  { name: "features", inputType: "textarea", placeholder: "Features" },
  { name: "condition", inputType: "input", placeholder: "Condition" },
  { name: "weight", inputType: "input", placeholder: "Weight" },
  { name: "application", inputType: "input", placeholder: "Application" },
  { name: "base_material", inputType: "input", placeholder: "Base material" },
  { name: "coating", inputType: "input", placeholder: "Coating" },
  { name: "d_c_type", inputType: "input", placeholder: "Design and contruction Type" },
  { name: "adjustability", inputType: "input", placeholder: "Adjustability" },
  { name: "reinforcement", inputType: "input", placeholder: "reinforcement" },
  { name: "attachment_method", inputType: "input", placeholder: "Attachment method" },
  { name: "mounting_holes", inputType: "input", placeholder: "Mounting holes" },
  { name: "load_bearing", inputType: "input", placeholder: "Load bearing" },
  { name: "flexibility", inputType: "input", placeholder: "Flexibility" },
  { name: "durability", inputType: "input", placeholder: "Durability" },
  { name: "standards_certifications", inputType: "input", placeholder: "Standards and Certifications" },
  { name: "environmental_specifications", inputType: "input", placeholder: "Environmental Specifications" },
  { name: "other", inputType: "input", placeholder: "Other" }
];

export const roofVentsDetails = [
  { name: "source_location", inputType: "input", placeholder: "Source Location" },
  { name: "product_name", inputType: "input", placeholder: "Product Name" },
  { name: "description", inputType: "textarea", placeholder: "Description" },
  { name: "units_of_measurement", inputType: "select", placeholder: "Units of Measurement", options: [ {
    id:1, value:'Metres',
  },
  {
    id:2, value:'Feet',
  },
  {
    id:3, value:'Cms',
  },] },
  { name: "dimensions", inputType: "select", placeholder: "Dimensions", options: [{
    id:1, value:'inch',
  },
  {
    id:2, value:'mm',
  },
  {
    id:3, value:'cm',
  },
  {
    id:4, value:'m',
  },
] },
{ name: "gauge_diameter", inputType: "input", placeholder: "Gauge diameter" },
{ name: "width", inputType: "input", placeholder: "Width" },
{ name: "length", inputType: "input", placeholder: "Length" },
{ name: "height", inputType: "input", placeholder: "Height" },
{ name: "thickness", inputType: "input", placeholder: "Thickness" },
{ name: "volume", inputType: "input", placeholder: "Volume" },
  { name: "manufacturer", inputType: "input", placeholder: "Manufacturer" },
  { name: "model_number", inputType: "input", placeholder: "Model Number" },
  { name: "features", inputType: "textarea", placeholder: "Features" },
  { name: "condition", inputType: "input", placeholder: "Condition" },
  { name: "weight", inputType: "input", placeholder: "Weight" },
  { name: "application", inputType: "input", placeholder: "Application" },
  { name: "accessories", inputType: "input", placeholder: "Accessories" },
  { name: "shape", inputType: "input", placeholder: "Shape" },
  { name: "base_material", inputType: "input", placeholder: "Base material" },
  { name: "coating", inputType: "input", placeholder: "Coating" },
  { name: "d_c_type", inputType: "input", placeholder: "Design and contruction Type" },
  { name: "grill/blades", inputType: "input", placeholder: "Grill/blades" },
  { name: "ventilation_mechanism", inputType: "input", placeholder: "Ventilation mechanism" },
  { name: "mounting_flange", inputType: "input", placeholder: "Mounting flange" },
  { name: "airflow_capacity", inputType: "input", placeholder: "Airflow capacity" },
  { name: "water_resistance", inputType: "input", placeholder: "Water resistance" },
  { name: "durability", inputType: "input", placeholder: "Durability" },
  { name: "standards_certifications", inputType: "input", placeholder: "Standards and Certifications" },
  { name: "environmental_specifications", inputType: "input", placeholder: "Environmental Specifications" },
  { name: "other", inputType: "input", placeholder: "Other" }
];

export const roofStrapsDetails = [
  { name: "source_location", inputType: "input", placeholder: "Source Location" },
  { name: "product_name", inputType: "input", placeholder: "Product Name" },
  { name: "description", inputType: "textarea", placeholder: "Description" },
  { name: "units_of_measurement", inputType: "select", placeholder: "Units of Measurement", options: [ {
    id:1, value:'Metres',
  },
  {
    id:2, value:'Feet',
  },
  {
    id:3, value:'Cms',
  },] },
  { name: "dimensions", inputType: "select", placeholder: "Dimensions", options: [{
    id:1, value:'inch',
  },
  {
    id:2, value:'mm',
  },
  {
    id:3, value:'cm',
  },
  {
    id:4, value:'m',
  },
] },
{ name: "gauge_diameter", inputType: "input", placeholder: "Gauge diameter" },
{ name: "width", inputType: "input", placeholder: "Width" },
{ name: "length", inputType: "input", placeholder: "Length" },
{ name: "height", inputType: "input", placeholder: "Height" },
{ name: "thickness", inputType: "input", placeholder: "Thickness" },
{ name: "volume", inputType: "input", placeholder: "Volume" },
  { name: "manufacturer", inputType: "input", placeholder: "Manufacturer" },
  { name: "model_number", inputType: "input", placeholder: "Model Number" },
  { name: "features", inputType: "textarea", placeholder: "Features" },
  { name: "condition", inputType: "input", placeholder: "Condition" },
  { name: "weight", inputType: "input", placeholder: "Weight" },
  { name: "application", inputType: "input", placeholder: "Application" },
  { name: "accessories", inputType: "input", placeholder: "accessories" },
  { name: "base_material", inputType: "input", placeholder: "Base material" },
  { name: "coating", inputType: "input", placeholder: "Coating" },
  { name: "d_c_type", inputType: "input", placeholder: "Design and contruction Type" },
  { name: "shape", inputType: "input", placeholder: "Shape" },
  { name: "mounting_holes", inputType: "input", placeholder: "Mounting holes" },
  { name: "load_bearing", inputType: "input", placeholder: "Load bearing" },
  { name: "flexibility", inputType: "input", placeholder: "Flexibility" },
  { name: "durability", inputType: "input", placeholder: "Durability" },
  { name: "standards_certifications", inputType: "input", placeholder: "Standards and Certifications" },
  { name: "environmental_specifications", inputType: "input", placeholder: "Environmental Specifications" },
  { name: "other", inputType: "input", placeholder: "Other" }
];

export const roofTapesDetails = [
  { name: "source_location", inputType: "input", placeholder: "Source Location" },
  { name: "product_name", inputType: "input", placeholder: "Product Name" },
  { name: "description", inputType: "textarea", placeholder: "Description" },
  { name: "units_of_measurement", inputType: "select", placeholder: "Units of Measurement", options: [ {
      id:1, value:'Metres',
    },
    {
      id:2, value:'Feet',
    },
    {
      id:3, value:'Cms',
    },] },
    { name: "dimensions", inputType: "select", placeholder: "Dimensions", options: [{
      id:1, value:'inch',
    },
    {
      id:2, value:'mm',
    },
    {
      id:3, value:'cm',
    },
    {
      id:4, value:'m',
    },
  ] },
  { name: "gauge_diameter", inputType: "input", placeholder: "Gauge diameter" },
  { name: "width", inputType: "input", placeholder: "Width" },
  { name: "length", inputType: "input", placeholder: "Length" },
  { name: "height", inputType: "input", placeholder: "Height" },
  { name: "thickness", inputType: "input", placeholder: "Thickness" },
  { name: "volume", inputType: "input", placeholder: "Volume" },
  { name: "manufacturer", inputType: "input", placeholder: "Manufacturer" },
  { name: "model_number", inputType: "input", placeholder: "Model Number" },
  { name: "features", inputType: "textarea", placeholder: "Features" },
  { name: "condition", inputType: "input", placeholder: "Condition" },
  { name: "application", inputType: "input", placeholder: "Application" },
  { name: "base", inputType: "input", placeholder: "Base" },
  { name: "adhesive", inputType: "input", placeholder: "Adhesive" },
  { name: "form", inputType: "input", placeholder: "Form" },
  { name: "color", inputType: "input", placeholder: "Color" },
  { name: "adhesion", inputType: "input", placeholder: "Adhesion" },
  { name: "flexibility", inputType: "input", placeholder: "Flexibility" },
  { name: "durability", inputType: "input", placeholder: "Durability" },
  { name: "waterproofing", inputType: "input", placeholder: "Waterproofing" },
  { name: "cure_time", inputType: "input", placeholder: "Cure time" },
  { name: "application_method", inputType: "input", placeholder: "Application method" },
  { name: "surface_preparation", inputType: "input", placeholder: "Surface preparation" },
  { name: "application_temperature", inputType: "input", placeholder: "Application temperature" },
  { name: "application_coverage", inputType: "input", placeholder: "Application coverage" },
  { name: "standards_certifications", inputType: "input", placeholder: "Standards and Certifications" },
  { name: "environmental_specifications", inputType: "input", placeholder: "Environmental Specifications" },
  { name: "other", inputType: "input", placeholder: "Other" }
];

export const roofFastenersDetails = [
  { name: "source_location", inputType: "input", placeholder: "Source Location" },
  { name: "product_name", inputType: "input", placeholder: "Product Name" },
  { name: "description", inputType: "textarea", placeholder: "Description" },
  { name: "units_of_measurement", inputType: "select", placeholder: "Units of Measurement", options: [ {
      id:1, value:'Metres',
    },
    {
      id:2, value:'Feet',
    },
    {
      id:3, value:'Cms',
    },] },
    { name: "dimensions", inputType: "select", placeholder: "Dimensions", options: [{
      id:1, value:'inch',
    },
    {
      id:2, value:'mm',
    },
    {
      id:3, value:'cm',
    },
    {
      id:4, value:'m',
    },
  ] },
  { name: "gauge_diameter", inputType: "input", placeholder: "Gauge diameter" },
  { name: "width", inputType: "input", placeholder: "Width" },
  { name: "length", inputType: "input", placeholder: "Length" },
  { name: "height", inputType: "input", placeholder: "Height" },
  { name: "thickness", inputType: "input", placeholder: "Thickness" },
  { name: "volume", inputType: "input", placeholder: "Volume" },
  { name: "manufacturer", inputType: "input", placeholder: "Manufacturer" },
  { name: "model_number", inputType: "input", placeholder: "Model Number" },
  { name: "features", inputType: "textarea", placeholder: "Features" },
  { name: "condition", inputType: "input", placeholder: "Condition" },
  { name: "application", inputType: "input", placeholder: "Application" },
  { name: "accessories", inputType: "input", placeholder: "Accessories" },
  { name: "base_material", inputType: "input", placeholder: "Base material" },
  { name: "coating", inputType: "input", placeholder: "Coating" },
  { name: "threads", inputType: "input", placeholder: "Threads" },
  { name: "head_type", inputType: "input", placeholder: "Head type" },
  { name: "point_type", inputType: "input", placeholder: "Point type" },
  { name: "washers", inputType: "input", placeholder: "Washers" },
  { name: "achors", inputType: "input", placeholder: "Achors" },
  { name: "strength", inputType: "input", placeholder: "Strength" },
  { name: "corrosion", inputType: "input", placeholder: "Corrosion" },
  { name: "durability", inputType: "input", placeholder: "Durability" },
  { name: "load_capacity", inputType: "input", placeholder: "Load capacity" },
  { name: "standards_certifications", inputType: "input", placeholder: "Standards and Certifications" },
  { name: "environmental_specifications", inputType: "input", placeholder: "Environmental Specifications" },
  { name: "other", inputType: "input", placeholder: "Other" }
];

export const roofToolsDetails = [
  { name: "source_location", inputType: "input", placeholder: "Source Location" },
  { name: "product_name", inputType: "input", placeholder: "Product Name" },
  { name: "description", inputType: "textarea", placeholder: "Description" },
  { name: "units_of_measurement", inputType: "select", placeholder: "Units of Measurement", options: [ {
      id:1, value:'Metres',
    },
    {
      id:2, value:'Feet',
    },
    {
      id:3, value:'Cms',
    },] },
    { name: "dimensions", inputType: "select", placeholder: "Dimensions", options: [{
      id:1, value:'inch',
    },
    {
      id:2, value:'mm',
    },
    {
      id:3, value:'cm',
    },
    {
      id:4, value:'m',
    },
  ] },
  { name: "gauge_diameter", inputType: "input", placeholder: "Gauge diameter" },
  { name: "width", inputType: "input", placeholder: "Width" },
  { name: "length", inputType: "input", placeholder: "Length" },
  { name: "height", inputType: "input", placeholder: "Height" },
  { name: "thickness", inputType: "input", placeholder: "Thickness" },
  { name: "volume", inputType: "input", placeholder: "Volume" },
  { name: "manufacturer", inputType: "input", placeholder: "Manufacturer" },
  { name: "model_number", inputType: "input", placeholder: "Model Number" },
  { name: "features", inputType: "textarea", placeholder: "Features" },
  { name: "condition", inputType: "input", placeholder: "Condition" },
  { name: "application", inputType: "input", placeholder: "Application" },
  { name: "accessories", inputType: "input", placeholder: "Accessories" },
  { name: "base_material", inputType: "input", placeholder: "Base material" },
  { name: "coating", inputType: "input", placeholder: "Coating" },
  { name: "handles", inputType: "input", placeholder: "Handles" },
  { name: "blades", inputType: "input", placeholder: "Blades" },
  { name: "mechanism", inputType: "input", placeholder: "Mechanism" },
  { name: "durability", inputType: "input", placeholder: "Durability" },
  { name: "precision", inputType: "input", placeholder: "Precision" },
  { name: "comfort", inputType: "input", placeholder: "Comfort" },
  { name: "maintenance", inputType: "input", placeholder: "Maintenance" },
  { name: "standards_certifications", inputType: "input", placeholder: "Standards and Certifications" },
  { name: "environmental_specifications", inputType: "input", placeholder: "Environmental Specifications" },
  { name: "safety_features", inputType: "input", placeholder: "Safety features" },
  { name: "other", inputType: "input", placeholder: "Other" }
];

export const precastConnectorsDetails = [
  { name: "source_location", inputType: "input", placeholder: "Source Location" },
  { name: "product_name", inputType: "input", placeholder: "Product Name" },
  { name: "description", inputType: "textarea", placeholder: "Description" },
  { name: "units_of_measurement", inputType: "select", placeholder: "Units of Measurement", options: [ {
      id:1, value:'Metres',
    },
    {
      id:2, value:'Feet',
    },
    {
      id:3, value:'Cms',
    },] },
    { name: "dimensions", inputType: "select", placeholder: "Dimensions", options: [{
      id:1, value:'inch',
    },
    {
      id:2, value:'mm',
    },
    {
      id:3, value:'cm',
    },
    {
      id:4, value:'m',
    },
  ] },
  { name: "gauge_diameter", inputType: "input", placeholder: "Gauge diameter" },
  { name: "width", inputType: "input", placeholder: "Width" },
  { name: "length", inputType: "input", placeholder: "Length" },
  { name: "height", inputType: "input", placeholder: "Height" },
  { name: "thickness", inputType: "input", placeholder: "Thickness" },
  { name: "volume", inputType: "input", placeholder: "Volume" },
  { name: "manufacturer", inputType: "input", placeholder: "Manufacturer" },
  { name: "model_number", inputType: "input", placeholder: "Model Number" },
  { name: "features", inputType: "textarea", placeholder: "Features" },
  { name: "condition", inputType: "input", placeholder: "Condition" },
  { name: "application", inputType: "input", placeholder: "Application" },
  { name: "accessories", inputType: "input", placeholder: "Accessories" },
  { name: "base_material", inputType: "input", placeholder: "Base material" },
  { name: "coating", inputType: "input", placeholder: "Coating" },
  { name: "load_capacity", inputType: "input", placeholder: "Load capacity" },
  { name: "shape", inputType: "input", placeholder: "Shape" },
  { name: "welding", inputType: "input", placeholder: "Welding" },
  { name: "bolts", inputType: "input", placeholder: "Bolts and fasteners" },
  { name: "adjustability", inputType: "input", placeholder: "Adjustability" },

  { name: "durability", inputType: "input", placeholder: "Durability" },
  { name: "strength", inputType: "input", placeholder: "Strength" },
  { name: "compatibility", inputType: "input", placeholder: "Compatibility" },

  { name: "standards_certifications", inputType: "input", placeholder: "Standards and Certifications" },
  { name: "environmental_specifications", inputType: "input", placeholder: "Environmental Specifications" },
  { name: "installation_requirements", inputType: "input", placeholder: "Installation requirements" },
  { name: "other", inputType: "input", placeholder: "Other" }
];

export const precastBoltsDetails = [
  { name: "source_location", inputType: "input", placeholder: "Source Location" },
  { name: "product_name", inputType: "input", placeholder: "Product Name" },
  { name: "description", inputType: "textarea", placeholder: "Description" },
  { name: "units_of_measurement", inputType: "select", placeholder: "Units of Measurement", options: [ {
      id:1, value:'Metres',
    },
    {
      id:2, value:'Feet',
    },
    {
      id:3, value:'Cms',
    },] },
    { name: "dimensions", inputType: "select", placeholder: "Dimensions", options: [{
      id:1, value:'inch',
    },
    {
      id:2, value:'mm',
    },
    {
      id:3, value:'cm',
    },
    {
      id:4, value:'m',
    },
  ] },
  { name: "gauge_diameter", inputType: "input", placeholder: "Gauge diameter" },
  { name: "width", inputType: "input", placeholder: "Width" },
  { name: "length", inputType: "input", placeholder: "Length" },
  { name: "height", inputType: "input", placeholder: "Height" },
  { name: "thickness", inputType: "input", placeholder: "Thickness" },
  { name: "volume", inputType: "input", placeholder: "Volume" },
  { name: "manufacturer", inputType: "input", placeholder: "Manufacturer" },
  { name: "model_number", inputType: "input", placeholder: "Model Number" },
  { name: "features", inputType: "textarea", placeholder: "Features" },
  { name: "condition", inputType: "input", placeholder: "Condition" },
  { name: "application", inputType: "input", placeholder: "Application" },
  { name: "accessories", inputType: "input", placeholder: "Accessories" },
  { name: "base_material", inputType: "input", placeholder: "Base material" },
  { name: "coating", inputType: "input", placeholder: "Coating" },
  { name: "threads", inputType: "input", placeholder: "Threads" },
  { name: "grade", inputType: "input", placeholder: "Grade" },
  { name: "head_type", inputType: "input", placeholder: "Head type" },
  { name: "nut_type", inputType: "input", placeholder: "Nut type" },
  { name: "tolerance", inputType: "input", placeholder: "Tolerance" },
  { name: "finish", inputType: "input", placeholder: "Finish" },

  { name: "durability", inputType: "input", placeholder: "Durability" },
  { name: "strength", inputType: "input", placeholder: "Strength" },
  { name: "compatibility", inputType: "input", placeholder: "Compatibility" },
  { name: "corrosion_resistance", inputType: "input", placeholder: "Corrosion resistance" },

  { name: "standards_certifications", inputType: "input", placeholder: "Standards and Certifications" },
  { name: "environmental_specifications", inputType: "input", placeholder: "Environmental Specifications" },
  { name: "other", inputType: "input", placeholder: "Other" }
];

export const precastExpansionDetails = [
  { name: "source_location", inputType: "input", placeholder: "Source Location" },
  { name: "product_name", inputType: "input", placeholder: "Product Name" },
  { name: "description", inputType: "textarea", placeholder: "Description" },
  { name: "units_of_measurement", inputType: "select", placeholder: "Units of Measurement", options: [ {
      id:1, value:'Metres',
    },
    {
      id:2, value:'Feet',
    },
    {
      id:3, value:'Cms',
    },] },
    { name: "dimensions", inputType: "select", placeholder: "Dimensions", options: [{
      id:1, value:'inch',
    },
    {
      id:2, value:'mm',
    },
    {
      id:3, value:'cm',
    },
    {
      id:4, value:'m',
    },
  ] },
  { name: "gauge_diameter", inputType: "input", placeholder: "Gauge diameter" },
  { name: "width", inputType: "input", placeholder: "Width" },
  { name: "length", inputType: "input", placeholder: "Length" },
  { name: "height", inputType: "input", placeholder: "Height" },
  { name: "thickness", inputType: "input", placeholder: "Thickness" },
  { name: "volume", inputType: "input", placeholder: "Volume" },
  { name: "manufacturer", inputType: "input", placeholder: "Manufacturer" },
  { name: "model_number", inputType: "input", placeholder: "Model Number" },
  { name: "features", inputType: "textarea", placeholder: "Features" },
  { name: "condition", inputType: "input", placeholder: "Condition" },
  { name: "application", inputType: "input", placeholder: "Application" },
  { name: "accessories", inputType: "input", placeholder: "Accessories" },
  { name: "base_material", inputType: "input", placeholder: "Base material" },
  { name: "coating", inputType: "input", placeholder: "Coating" },
  { name: "reinforcement", inputType: "input", placeholder: "Reinforcement" },
  { name: "movement_capacity", inputType: "input", placeholder: "Movement capacity" },
  { name: "installation", inputType: "input", placeholder: "Installation" },
  { name: "flexibility", inputType: "input", placeholder: "Flexibility" },
  { name: "durability", inputType: "input", placeholder: "Durability" },
  { name: "compatibility", inputType: "input", placeholder: "Compatibility" },
  { name: "load_capacity", inputType: "input", placeholder: "Load capacity" },
  { name: "water_tightness", inputType: "input", placeholder: "Water tightness" },

  { name: "standards_certifications", inputType: "input", placeholder: "Standards and Certifications" },
  { name: "environmental_specifications", inputType: "input", placeholder: "Environmental Specifications" },
  { name: "other", inputType: "input", placeholder: "Other" }
];

export const precastDowelsDetails = [
  { name: "source_location", inputType: "input", placeholder: "Source Location" },
  { name: "product_name", inputType: "input", placeholder: "Product Name" },
  { name: "description", inputType: "textarea", placeholder: "Description" },
  { name: "units_of_measurement", inputType: "select", placeholder: "Units of Measurement", options: [ {
      id:1, value:'Metres',
    },
    {
      id:2, value:'Feet',
    },
    {
      id:3, value:'Cms',
    },] },
    { name: "dimensions", inputType: "select", placeholder: "Dimensions", options: [{
      id:1, value:'inch',
    },
    {
      id:2, value:'mm',
    },
    {
      id:3, value:'cm',
    },
    {
      id:4, value:'m',
    },
  ] },
  { name: "gauge_diameter", inputType: "input", placeholder: "Gauge diameter" },
  { name: "width", inputType: "input", placeholder: "Width" },
  { name: "length", inputType: "input", placeholder: "Length" },
  { name: "height", inputType: "input", placeholder: "Height" },
  { name: "thickness", inputType: "input", placeholder: "Thickness" },
  { name: "volume", inputType: "input", placeholder: "Volume" },
  { name: "manufacturer", inputType: "input", placeholder: "Manufacturer" },
  { name: "model_number", inputType: "input", placeholder: "Model Number" },
  { name: "features", inputType: "textarea", placeholder: "Features" },
  { name: "condition", inputType: "input", placeholder: "Condition" },
  { name: "application", inputType: "input", placeholder: "Application" },
  { name: "accessories", inputType: "input", placeholder: "Accessories" },
  { name: "base_material", inputType: "input", placeholder: "Base material" },
  { name: "coating", inputType: "input", placeholder: "Coating" },
  { name: "shape", inputType: "input", placeholder: "Shape" },
  { name: "ends", inputType: "input", placeholder: "Ends" },
  { name: "alignment", inputType: "input", placeholder: "Alignment" },
  { name: "tolerance", inputType: "input", placeholder: "Tolerance" },
  { name: "durability", inputType: "input", placeholder: "Durability" },
  { name: "strength", inputType: "input", placeholder: "Strength" },
  { name: "load_transfer", inputType: "input", placeholder: "Load transfer" },
  { name: "compatibility", inputType: "input", placeholder: "Compatibility" },

  { name: "standards_certifications", inputType: "input", placeholder: "Standards and Certifications" },
  { name: "environmental_specifications", inputType: "input", placeholder: "Environmental Specifications" },
   {name: "warranty", inputType: "input", placeholder: "Warranty"},
   {name: "safety_features", inputType: "input", placeholder: "Safety features"},
  { name: "other", inputType: "input", placeholder: "Other" }
];

export const precastEpoxyDetails = [
  { name: "source_location", inputType: "input", placeholder: "Source Location" },
  { name: "product_name", inputType: "input", placeholder: "Product Name" },
  { name: "description", inputType: "textarea", placeholder: "Description" },
  { name: "units_of_measurement", inputType: "select", placeholder: "Units of Measurement", options: [ {
      id:1, value:'Metres',
    },
    {
      id:2, value:'Feet',
    },
    {
      id:3, value:'Cms',
    },] },
  { name: "manufacturer", inputType: "input", placeholder: "Manufacturer" },
  { name: "model_number", inputType: "input", placeholder: "Model Number" },
  { name: "features", inputType: "textarea", placeholder: "Features" },
  { name: "condition", inputType: "input", placeholder: "Condition" },
  { name: "application", inputType: "input", placeholder: "Application" },
  { name: "accessories", inputType: "input", placeholder: "Accessories" },
  { name: "base_components", inputType: "input", placeholder: "Base components" },
  { name: "fillers_additives", inputType: "input", placeholder: "Fillers and additives" },
  { name: "form", inputType: "input", placeholder: "Form" },
  { name: "color", inputType: "input", placeholder: "Color" },
  { name: "viscosity", inputType: "input", placeholder: "Viscosity" },
  { name: "mix_ratio", inputType: "input", placeholder: "Mix ratio" },
  { name: "pot_life", inputType: "input", placeholder: "Pot life" },
  { name: "curing_time", inputType: "input", placeholder: "Curing time" },
  { name: "application_temparature", inputType: "input", placeholder: "Application temparature" },
  { name: "bond_strength", inputType: "input", placeholder: "Bond strength" },
  { name: "durability", inputType: "input", placeholder: "Durability" },
  { name: "adhesion", inputType: "input", placeholder: "Adhesion" },
  { name: "flexibility", inputType: "input", placeholder: "Flexibility" },

  { name: "standards_certifications", inputType: "input", placeholder: "Standards and Certifications" },
  { name: "environmental_specifications", inputType: "input", placeholder: "Environmental Specifications" },
  { name: "other", inputType: "input", placeholder: "Other" }
];

export const foundationSpacersDetails = [
  { name: "source_location", inputType: "input", placeholder: "Source Location" },
  { name: "product_name", inputType: "input", placeholder: "Product Name" },
  { name: "description", inputType: "textarea", placeholder: "Description" },
  { name: "units_of_measurement", inputType: "select", placeholder: "Units of Measurement", options: [ {
      id:1, value:'Metres',
    },
    {
      id:2, value:'Feet',
    },
    {
      id:3, value:'Cms',
    },] },
    { name: "dimensions", inputType: "select", placeholder: "Dimensions", options: [{
      id:1, value:'inch',
    },
    {
      id:2, value:'mm',
    },
    {
      id:3, value:'cm',
    },
    {
      id:4, value:'m',
    },
  ] },
  { name: "gauge_diameter", inputType: "input", placeholder: "Gauge diameter" },
  { name: "width", inputType: "input", placeholder: "Width" },
  { name: "length", inputType: "input", placeholder: "Length" },
  { name: "height", inputType: "input", placeholder: "Height" },
  { name: "thickness", inputType: "input", placeholder: "Thickness" },
  { name: "volume", inputType: "input", placeholder: "Volume" },
  { name: "manufacturer", inputType: "input", placeholder: "Manufacturer" },
  { name: "model_number", inputType: "input", placeholder: "Model Number" },
  { name: "features", inputType: "textarea", placeholder: "Features" },
  { name: "condition", inputType: "input", placeholder: "Condition" },
  { name: "application", inputType: "input", placeholder: "Application" },
  { name: "accessories", inputType: "input", placeholder: "Accessories" },
  { name: "base_material", inputType: "input", placeholder: "Base material" },
  { name: "coating", inputType: "input", placeholder: "Coating" },
  { name: "shape", inputType: "input", placeholder: "Shape" },
  { name: "load_capacity", inputType: "input", placeholder: "Load capacity" },
  { name: "surface", inputType: "input", placeholder: "Surface" },
  { name: "stability", inputType: "input", placeholder: "Stability" },
  { name: "attachment", inputType: "input", placeholder: "Attachment" },
  { name: "strength", inputType: "input", placeholder: "Strength" },
  { name: "durability", inputType: "input", placeholder: "Durability" },
  { name: "compatibility", inputType: "input", placeholder: "Compatibility" },

  { name: "standards_certifications", inputType: "input", placeholder: "Standards and Certifications" },
  { name: "environmental_specifications", inputType: "input", placeholder: "Environmental Specifications" },
  { name: "other", inputType: "input", placeholder: "Other" }
];

export const foundationReinforcementDetails = [
  { name: "source_location", inputType: "input", placeholder: "Source Location" },
  { name: "product_name", inputType: "input", placeholder: "Product Name" },
  { name: "description", inputType: "textarea", placeholder: "Description" },
  { name: "units_of_measurement", inputType: "select", placeholder: "Units of Measurement", options: [ {
      id:1, value:'Metres',
    },
    {
      id:2, value:'Feet',
    },
    {
      id:3, value:'Cms',
    },] },
    { name: "dimensions", inputType: "select", placeholder: "Dimensions", options: [{
      id:1, value:'inch',
    },
    {
      id:2, value:'mm',
    },
    {
      id:3, value:'cm',
    },
    {
      id:4, value:'m',
    },
  ] },
  { name: "gauge_diameter", inputType: "input", placeholder: "Gauge diameter" },
  { name: "width", inputType: "input", placeholder: "Width" },
  { name: "length", inputType: "input", placeholder: "Length" },
  { name: "height", inputType: "input", placeholder: "Height" },
  { name: "thickness", inputType: "input", placeholder: "Thickness" },
  { name: "volume", inputType: "input", placeholder: "Volume" },
  { name: "manufacturer", inputType: "input", placeholder: "Manufacturer" },
  { name: "model_number", inputType: "input", placeholder: "Model Number" },
  { name: "features", inputType: "textarea", placeholder: "Features" },
  { name: "condition", inputType: "input", placeholder: "Condition" },
  { name: "application", inputType: "input", placeholder: "Application" },
  { name: "accessories", inputType: "input", placeholder: "Accessories" },
  { name: "base_material", inputType: "input", placeholder: "Base material" },
  { name: "coating", inputType: "input", placeholder: "Coating" },
  { name: "shape", inputType: "input", placeholder: "Shape" },
  { name: "manufacturing_process", inputType: "input", placeholder: "Manufacturing process" },
  { name: "grid_pattern", inputType: "input", placeholder: "Grid pattern" },
  { name: "edges", inputType: "input", placeholder: "Edges" },
  { name: "tolerance", inputType: "input", placeholder: "Tolerance" },
  { name: "load_transfer", inputType: "input", placeholder: "Load transfer" },
  { name: "strength", inputType: "input", placeholder: "Strength" },
  { name: "durability", inputType: "input", placeholder: "Durability" },
  { name: "compatibility", inputType: "input", placeholder: "Compatibility" },

  { name: "standards_certifications", inputType: "input", placeholder: "Standards and Certifications" },
  { name: "environmental_specifications", inputType: "input", placeholder: "Environmental Specifications" },
  { name: "other", inputType: "input", placeholder: "Other" }
];

export const foundationDampDetails = [
  { name: "source_location", inputType: "input", placeholder: "Source Location" },
  { name: "product_name", inputType: "input", placeholder: "Product Name" },
  { name: "description", inputType: "textarea", placeholder: "Description" },
  { name: "units_of_measurement", inputType: "select", placeholder: "Units of Measurement", options: [ {
      id:1, value:'Metres',
    },
    {
      id:2, value:'Feet',
    },
    {
      id:3, value:'Cms',
    },] },
    { name: "dimensions", inputType: "select", placeholder: "Dimensions", options: [{
      id:1, value:'inch',
    },
    {
      id:2, value:'mm',
    },
    {
      id:3, value:'cm',
    },
    {
      id:4, value:'m',
    },
  ] },
  { name: "gauge_diameter", inputType: "input", placeholder: "Gauge diameter" },
  { name: "width", inputType: "input", placeholder: "Width" },
  { name: "length", inputType: "input", placeholder: "Length" },
  { name: "height", inputType: "input", placeholder: "Height" },
  { name: "thickness", inputType: "input", placeholder: "Thickness" },
  { name: "volume", inputType: "input", placeholder: "Volume" },
  { name: "manufacturer", inputType: "input", placeholder: "Manufacturer" },
  { name: "model_number", inputType: "input", placeholder: "Model Number" },
  { name: "features", inputType: "textarea", placeholder: "Features" },
  { name: "condition", inputType: "input", placeholder: "Condition" },
  { name: "application", inputType: "input", placeholder: "Application" },
  { name: "accessories", inputType: "input", placeholder: "Accessories" },
  { name: "color", inputType: "input", placeholder: "Color" },
  { name: "surface_finish", inputType: "input", placeholder: "Surface finish" },
  { name: "edge_treatment", inputType: "input", placeholder: "Edge treatment" },
  { name: "grid_pattern", inputType: "input", placeholder: "Grid pattern" },
  { name: "edges", inputType: "input", placeholder: "Edges" },
  { name: "waterproofing", inputType: "input", placeholder: "Waterproofing" },
  { name: "durability", inputType: "input", placeholder: "Durability" },
  { name: "chemical_resistance", inputType: "input", placeholder: "Chemical resistance" },
  { name: "flexibility", inputType: "input", placeholder: "Flexibility" },

  { name: "standards_certifications", inputType: "input", placeholder: "Standards and Certifications" },
  { name: "environmental_specifications", inputType: "input", placeholder: "Environmental Specifications" },
  { name: "other", inputType: "input", placeholder: "Other" }
];