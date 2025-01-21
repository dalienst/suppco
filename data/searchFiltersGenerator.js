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

export const metalWorkSearchFilters = [
  { name: "source_location", inputType: "input", placeholder: "Source Location" },
  { name: "product_name", inputType: "input", placeholder: "Product Name" },

  { name: "manufacturer", inputType: "input", placeholder: "Manufacturer" },
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
  { name: "grade", inputType: "input", placeholder: "Grade" },
  { name: "finish", inputType: "input", placeholder: "Finish" },
];

export const cementSearhFilters = [
  { name: "source_location", inputType: "input", placeholder: "Source Location" },
  { name: "product_name", inputType: "input", placeholder: "Product Name" },
  { name: "manufacturer", inputType: "input", placeholder: "Manufacturer" },
  { name: "grade", inputType: "input", placeholder: "Grade" },
  { name: "packaging", inputType: "input", placeholder: "Packaging" },
];

export const readyMixSearchFilters = [
  { name: "product_name", inputType: "input", placeholder: "Product Name" },

  { name: "dimensions", inputType: "select", placeholder: "Dimensions", options: [{
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
{ name: "grade", inputType: "input", placeholder: "Grade" },
  { name: "slump_value", inputType: "input", placeholder: "Slump value" },
  { name: "cement_type", inputType: "input", placeholder: "Cement type" },
  { name: "admixture", inputType: "input", placeholder: "Admixture" },
  { name: "mix_proportions", inputType: "input", placeholder: "Mix proportions" },
];

export const wallsBrickStoneFilters = [
  { name: "source_location", inputType: "input", placeholder: "Source Location" },
  { name: "product_name", inputType: "input", placeholder: "Product Name" },

  { name: "manufacturer", inputType: "input", placeholder: "Manufacturer" },

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
  { name: "color", inputType: "input", placeholder: "Color" },
  { name: "finish", inputType: "input", placeholder: "Finish" },
  { name: "compressive_strength", inputType: "input", placeholder: "Compressive strength" },
  { name: "r_value", inputType: "input", placeholder: "R value" },
  { name: "moisture_absorption", inputType: "input", placeholder: "Moisture absorption" },
  { name: "mortar_type", inputType: "input", placeholder: "Mortar type " },
  { name: "packaging", inputType: "input", placeholder: "Packaging" },
  { name: "stone_cut", inputType: "input", placeholder: "Edge type" },
];

export const wallsDrywallMDFFilters = [
  { name: "source_location", inputType: "input", placeholder: "Source Location" },
  { name: "product_name", inputType: "input", placeholder: "Product Name" },

  { name: "manufacturer", inputType: "input", placeholder: "Manufacturer" },

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
  { name: "edge_type", inputType: "input", placeholder: "Edge type" },
  { name: "fire_rating", inputType: "input", placeholder: "Fire rating" },
  { name: "moisture_resistance", inputType: "input", placeholder: "Moisture resistance" },
  { name: "sound_proofing", inputType: "input", placeholder: "Sound proofing" },
  { name: "finish", inputType: "input", placeholder: "Finish" },
  { name: "packaging", inputType: "input", placeholder: "Packaging" },
  { name: "density", inputType: "input", placeholder: "Density" },
];

export const wallsWoodFilters = [
  { name: "source_location", inputType: "input", placeholder: "Source Location" },
  { name: "product_name", inputType: "input", placeholder: "Product Name" },

  { name: "manufacturer", inputType: "input", placeholder: "Manufacturer" },

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
  { name: "veneer_species", inputType: "input", placeholder: "Veneer species" },
  { name: "core_material", inputType: "input", placeholder: "Core material" },
  { name: "glue_bonding", inputType: "input", placeholder: "Glue bonding" },
  { name: "fire_rating", inputType: "input", placeholder: "Fire rating" },
  { name: "moisture_resistance", inputType: "input", placeholder: "Moisture resistance" },
  { name: "grade", inputType: "input", placeholder: "Grade" },
  { name: "moisture_content", inputType: "input", placeholder: "Moisture content" },
  { name: "wood_species", inputType: "input", placeholder: "Wood species" },
  { name: "fe_emission", inputType: "input", placeholder: "Fe emission" },
  { name: "finish", inputType: "input", placeholder: "Finish" },
];

export const wallsPlywoodFilters = [
  { name: "source_location", inputType: "input", placeholder: "Source Location" },
  { name: "product_name", inputType: "input", placeholder: "Product Name" },

  { name: "manufacturer", inputType: "input", placeholder: "Manufacturer" },

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
  { name: "veneer_species", inputType: "input", placeholder: "Veneer species" },
  { name: "core_material", inputType: "input", placeholder: "Core material" },
  { name: "glue_bonding", inputType: "input", placeholder: "Glue bonding" },
  { name: "fire_rating", inputType: "input", placeholder: "Fire rating" },
  { name: "moisture_resistance", inputType: "input", placeholder: "Moisture resistance" },
  { name: "finish", inputType: "input", placeholder: "Finish" },
];

export const wallsSolidWoodFilters = [
  { name: "source_location", inputType: "input", placeholder: "Source Location" },
  { name: "product_name", inputType: "input", placeholder: "Product Name" },

  { name: "manufacturer", inputType: "input", placeholder: "Manufacturer" },

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
  { name: "grade", inputType: "input", placeholder: "Grade" },
  { name: "moisture_content", inputType: "input", placeholder: "Moisture content" },
  { name: "fire_rating", inputType: "input", placeholder: "Fire rating" },
  { name: "finish", inputType: "input", placeholder: "Finish" },
];

export const wallsEngineeredWoodFilters = [
  { name: "source_location", inputType: "input", placeholder: "Source Location" },
  { name: "product_name", inputType: "input", placeholder: "Product Name" },

  { name: "manufacturer", inputType: "input", placeholder: "Manufacturer" },

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
  { name: "moisture_resistance", inputType: "input", placeholder: "Moisture resistance" },
  { name: "wood_species", inputType: "input", placeholder: "Wood species" },
  { name: "fe_emission", inputType: "input", placeholder: "Fe emission" },
  { name: "fire_rating", inputType: "input", placeholder: "Fire rating" },
  { name: "finish", inputType: "input", placeholder: "Finish" },
];

export const wallsGlassFilters = [
  { name: "source_location", inputType: "input", placeholder: "Source Location" },
  { name: "product_name", inputType: "input", placeholder: "Product Name" },

  { name: "manufacturer", inputType: "input", placeholder: "Manufacturer" },

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
  { name: "glass_coating", inputType: "input", placeholder: "Glass coating" },
  { name: "transparency", inputType: "input", placeholder: "Transparency" },
  { name: "edge_type", inputType: "input", placeholder: "Edge type" },
];

export const roofTrussFilters = [
  { name: "source_location", inputType: "input", placeholder: "Source Location" },
  { name: "product_name", inputType: "input", placeholder: "Product Name" },
  { name: "manufacturer", inputType: "input", placeholder: "Manufacturer" },
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
    { name: "width", inputType: "input", placeholder: "Width" },
  { name: "length", inputType: "input", placeholder: "Length" },
  { name: "height", inputType: "input", placeholder: "Height" },
  { name: "thickness", inputType: "input", placeholder: "Thickness" },
  { name: "wood_species", inputType: "input", placeholder: "Wood species" },
  { name: "grade", inputType: "input", placeholder: "Grade" },
  { name: "treatment", inputType: "input", placeholder: "Treatment" },
  { name: "surface_finish", inputType: "input", placeholder: "Surface finish" },
  { name: "fire_resistance", inputType: "input", placeholder: "Fire resistance" },
  { name: "moisture_content", inputType: "input", placeholder: "Moisture Content" },
];

export const roofSheatingFilters = [
  { name: "product_name", inputType: "input", placeholder: "Product Name" },
  { name: "source_location", inputType: "input", placeholder: "Source Location" },
  { name: "manufacturer", inputType: "input", placeholder: "Manufacturer" },
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
  { name: "width", inputType: "input", placeholder: "Width" },
  { name: "length", inputType: "input", placeholder: "Length" },
  { name: "height", inputType: "input", placeholder: "Height" },
  { name: "thickness", inputType: "input", placeholder: "Thickness" },
  { name: "grade", inputType: "input", placeholder: "Grade" },
  { name: "fire_resistance", inputType: "input", placeholder: "Fire resistance" },
  { name: "moisture_resistance", inputType: "input", placeholder: "Moisture resistance" },
  { name: "material", inputType: "input", placeholder: "Material" },
  { name: "finish", inputType: "input", placeholder: "Finish" },
  { name: "edge_profile", inputType: "input", placeholder: "Edge profile" },
  { name: "sheathing_compatibility", inputType: "input", placeholder: "Sheathing compatibility" },
];

export const roofShinglesFilters = [
  { name: "product_name", inputType: "input", placeholder: "Product Name" },
  { name: "source_location", inputType: "input", placeholder: "Source Location" },
  { name: "manufacturer", inputType: "input", placeholder: "Manufacturer" },
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
  { name: "width", inputType: "input", placeholder: "Width" },
  { name: "length", inputType: "input", placeholder: "Length" },
  { name: "height", inputType: "input", placeholder: "Height" },
  { name: "thickness", inputType: "input", placeholder: "Thickness" },
  { name: "grade", inputType: "input", placeholder: "Grade" },
  { name: "material", inputType: "input", placeholder: "Material" },
  { name: "style", inputType: "input", placeholder: "Style" },
  { name: "color", inputType: "input", placeholder: "Color" },
];

export const roofFlashingFilters = [
  { name: "product_name", inputType: "input", placeholder: "Product Name" },
  { name: "source_location", inputType: "input", placeholder: "Source Location" },
  { name: "manufacturer", inputType: "input", placeholder: "Manufacturer" },
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
  { name: "width", inputType: "input", placeholder: "Width" },
  { name: "length", inputType: "input", placeholder: "Length" },
  { name: "height", inputType: "input", placeholder: "Height" },
  { name: "thickness", inputType: "input", placeholder: "Thickness" },
  { name: "grade", inputType: "input", placeholder: "Grade" },
  { name: "material", inputType: "input", placeholder: "Material" },
  { name: "finish", inputType: "input", placeholder: "Finish" },
  { name: "color", inputType: "input", placeholder: "Color" },
  { name: "fire_resistance", inputType: "input", placeholder: "Fire resistance" },
];

export const roofUnderlaymentFilters = [
  { name: "product_name", inputType: "input", placeholder: "Product Name" },
  { name: "source_location", inputType: "input", placeholder: "Source Location" },
  { name: "manufacturer", inputType: "input", placeholder: "Manufacturer" },
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
  { name: "width", inputType: "input", placeholder: "Width" },
  { name: "length", inputType: "input", placeholder: "Length" },
  { name: "height", inputType: "input", placeholder: "Height" },
  { name: "thickness", inputType: "input", placeholder: "Thickness" },
  { name: "material", inputType: "input", placeholder: "Material" },
  { name: "color", inputType: "input", placeholder: "Color" },
  { name: "permeability", inputType: "input", placeholder: "Permeability" },
  { name: "slip_resistance", inputType: "input", placeholder: "Slip resistance" },
  { name: "compatibility", inputType: "input", placeholder: "Compatibility" },
  { name: "fire_resistance", inputType: "input", placeholder: "Fire resistance" },
];

export const roofTilesFilters = [
  { name: "product_name", inputType: "input", placeholder: "Product Name" },
  { name: "source_location", inputType: "input", placeholder: "Source Location" },
  { name: "manufacturer", inputType: "input", placeholder: "Manufacturer" },
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
  { name: "width", inputType: "input", placeholder: "Width" },
  { name: "length", inputType: "input", placeholder: "Length" },
  { name: "height", inputType: "input", placeholder: "Height" },
  { name: "thickness", inputType: "input", placeholder: "Thickness" },
  { name: "material", inputType: "input", placeholder: "Material" },
  { name: "color", inputType: "input", placeholder: "Color" },
  { name: "weight", inputType: "input", placeholder: "Weight" },
  { name: "finish", inputType: "input", placeholder: "Finish" },
  { name: "profile", inputType: "input", placeholder: "Profile" },
  { name: "compatibility", inputType: "input", placeholder: "Compatibility" },
  { name: "fire_resistance", inputType: "input", placeholder: "Fire resistance" },
];

export const roofMembraneFilters = [
  { name: "product_name", inputType: "input", placeholder: "Product Name" },
  { name: "source_location", inputType: "input", placeholder: "Source Location" },
  { name: "manufacturer", inputType: "input", placeholder: "Manufacturer" },
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
  { name: "width", inputType: "input", placeholder: "Width" },
  { name: "length", inputType: "input", placeholder: "Length" },
  { name: "height", inputType: "input", placeholder: "Height" },
  { name: "thickness", inputType: "input", placeholder: "Thickness" },
  { name: "material", inputType: "input", placeholder: "Material" },
  { name: "color", inputType: "input", placeholder: "Color" },
  { name: "fire_resistance", inputType: "input", placeholder: "Fire resistance" },
  { name: "ultra_violet_resistance", inputType: "input", placeholder: "Ultra violet resistance" },
];

export const roofConnectorsFilters = [
  { name: "product_name", inputType: "input", placeholder: "Product Name" },
  { name: "source_location", inputType: "input", placeholder: "Source Location" },
  { name: "manufacturer", inputType: "input", placeholder: "Manufacturer" },
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
  { name: "width", inputType: "input", placeholder: "Width" },
  { name: "length", inputType: "input", placeholder: "Length" },
  { name: "height", inputType: "input", placeholder: "Height" },
  { name: "thickness", inputType: "input", placeholder: "Thickness" },
  { name: "material", inputType: "input", placeholder: "Material" },
  { name: "profile", inputType: "input", placeholder: "Profile" },
  { name: "tooth_configuration", inputType: "input", placeholder: "Tooth configuration" },
  { name: "load_capacity", inputType: "input", placeholder: "Load capacity" },
  { name: "hole_pattern", inputType: "input", placeholder: "Hole pattern" },
  { name: "coating", inputType: "input", placeholder: "Coating" },
];

export const roofMetalFilters = [
  { name: "product_name", inputType: "input", placeholder: "Product Name" },
  { name: "source_location", inputType: "input", placeholder: "Source Location" },
  { name: "manufacturer", inputType: "input", placeholder: "Manufacturer" },
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
  { name: "width", inputType: "input", placeholder: "Width" },
  { name: "length", inputType: "input", placeholder: "Length" },
  { name: "height", inputType: "input", placeholder: "Height" },
  { name: "thickness", inputType: "input", placeholder: "Thickness" },
  { name: "material", inputType: "input", placeholder: "Material" },
  { name: "profile", inputType: "input", placeholder: "Profile" },
  { name: "coating", inputType: "input", placeholder: "Coating" },
  { name: "color", inputType: "input", placeholder: "Color" },
  { name: "fire_resistance", inputType: "input", placeholder: "Fire resistance" },
];

export const roofBracingFilters = [
  { name: "product_name", inputType: "input", placeholder: "Product Name" },
  { name: "source_location", inputType: "input", placeholder: "Source Location" },
  { name: "manufacturer", inputType: "input", placeholder: "Manufacturer" },
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
  { name: "width", inputType: "input", placeholder: "Width" },
  { name: "length", inputType: "input", placeholder: "Length" },
  { name: "height", inputType: "input", placeholder: "Height" },
  { name: "thickness", inputType: "input", placeholder: "Thickness" },
  { name: "material", inputType: "input", placeholder: "Material" },
  { name: "coating", inputType: "input", placeholder: "Coating" },
  { name: "grade", inputType: "input", placeholder: "Grade" },
  { name: "connection_detail", inputType: "input", placeholder: "Connection detail" },
];

export const roofInsulationFilters = [
  { name: "product_name", inputType: "input", placeholder: "Product Name" },
  { name: "source_location", inputType: "input", placeholder: "Source Location" },
  { name: "manufacturer", inputType: "input", placeholder: "Manufacturer" },
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
  { name: "width", inputType: "input", placeholder: "Width" },
  { name: "length", inputType: "input", placeholder: "Length" },
  { name: "height", inputType: "input", placeholder: "Height" },
  { name: "thickness", inputType: "input", placeholder: "Thickness" },
  { name: "material", inputType: "input", placeholder: "Material" },
  { name: "finish", inputType: "input", placeholder: "Finish" },
  { name: "density", inputType: "input", placeholder: "Density" },
  { name: "r_value", inputType: "input", placeholder: "R value" },
  { name: "vapor_barrier", inputType: "input", placeholder: "Vapor barrier" },
  { name: "fire_resistance", inputType: "input", placeholder: "Fire resistance" },
];

export const formWorkFilters = [
  { name: "source_location", inputType: "input", placeholder: "Source Location" },
  { name: "product_name", inputType: "input", placeholder: "Product Name" },
  { name: "manufacturer", inputType: "input", placeholder: "Manufacturer" },
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
  { name: "surface_finish", inputType: "input", placeholder: "Surface finish" },
  { name: "formwork_compatibility", inputType: "input", placeholder: "Formwork compatibility" },
  { name: "panel_strength", inputType: "input", placeholder: "Panel strength" },
  { name: "panel_thickness", inputType: "input", placeholder: "Panel thickness" },
  { name: "panel_surface_treatment", inputType: "input", placeholder: "Panel surface treatment" },
  { name: "panel_connection", inputType: "input", placeholder: "Panel connection" },
  { name: "edge_protection", inputType: "input", placeholder: "Edge protection" },
  { name: "re_use_number", inputType: "input", placeholder: "Re-use number" },
];

export const precastFilters = [
  { name: "source_location", inputType: "input", placeholder: "Source Location" },
  { name: "product_name", inputType: "input", placeholder: "Product Name" },
  { name: "manufacturer", inputType: "input", placeholder: "Manufacturer" },
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
  { name: "design", inputType: "input", placeholder: "Design" },
  { name: "re_enforcement", inputType: "input", placeholder: "Renforcement" },
  { name: "connection_details", inputType: "input", placeholder: "Connection details" },
];