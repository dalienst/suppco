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

// ACCESSORIES

export const cementDetailsFilters = [
  { name: "source_location", inputType: "input", placeholder: "Source Location" },
  { name: "product_name", inputType: "input", placeholder: "Product Name" },
  { name: "manufacturer", inputType: "input", placeholder: "Manufacturer" },
  { name: "model_number", inputType: "input", placeholder: "Model Number" },
  { name: "application", inputType: "input", placeholder: "Application" },
  { name: "chemical_composition", inputType: "input", placeholder: "Chemical composition" },
  { name: "physical_form", inputType: "input", placeholder: "Physical form" },
  { name: "color", inputType: "input", placeholder: "Color" },
  { name: "dosage", inputType: "input", placeholder: "Dosage" },
  { name: "effectiveness", inputType: "input", placeholder: "Effectiveness" },
  { name: "compatibility", inputType: "input", placeholder: "Compatibility" },
  { name: "stability", inputType: "input", placeholder: "Stability" },
];
// for mastics, cement, adhesives & sealants
export const roofMasticsFilters = [
  { name: "source_location", inputType: "input", placeholder: "Source Location" },
  { name: "product_name", inputType: "input", placeholder: "Product Name" },
  { name: "manufacturer", inputType: "input", placeholder: "Manufacturer" },
  { name: "model_number", inputType: "input", placeholder: "Model Number" },
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
];

export const roofPrimersFilters = [
  { name: "source_location", inputType: "input", placeholder: "Source Location" },
  { name: "product_name", inputType: "input", placeholder: "Product Name" },
  { name: "manufacturer", inputType: "input", placeholder: "Manufacturer" },
  { name: "model_number", inputType: "input", placeholder: "Model Number" },
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
];

export const roofBracketsFilters = [
  { name: "source_location", inputType: "input", placeholder: "Source Location" },
  { name: "product_name", inputType: "input", placeholder: "Product Name" },
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
];

export const roofTensionersFilters = [
  { name: "source_location", inputType: "input", placeholder: "Source Location" },
  { name: "product_name", inputType: "input", placeholder: "Product Name" },
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
];

export const roofVentsFilters = [
  { name: "source_location", inputType: "input", placeholder: "Source Location" },
  { name: "product_name", inputType: "input", placeholder: "Product Name" },
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
];

export const roofStrapsFilters = [
  { name: "source_location", inputType: "input", placeholder: "Source Location" },
  { name: "product_name", inputType: "input", placeholder: "Product Name" },
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
  { name: "application", inputType: "input", placeholder: "Application" },
  { name: "accessories", inputType: "input", placeholder: "accessories" },
  { name: "base_material", inputType: "input", placeholder: "Base material" },
  { name: "coating", inputType: "input", placeholder: "Coating" },
  { name: "d_c_type", inputType: "input", placeholder: "Design and contruction Type" },
  { name: "load_bearing", inputType: "input", placeholder: "Load bearing" },
  { name: "durability", inputType: "input", placeholder: "Durability" },
  { name: "adjustability", inputType: "input", placeholder: "Adjustability" },
  { name: "reinforcement", inputType: "input", placeholder: "Reinforcement" },
  { name: "safety_features", inputType: "input", placeholder: "Safety features" },

];

export const roofTapesFilters = [
  { name: "source_location", inputType: "input", placeholder: "Source Location" },
  { name: "product_name", inputType: "input", placeholder: "Product Name" },
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
  { name: "application", inputType: "input", placeholder: "Application" },
  { name: "base_material", inputType: "input", placeholder: "Base material" },
  { name: "adhesive", inputType: "input", placeholder: "Adhesive" },
  { name: "form", inputType: "input", placeholder: "Form" },
  { name: "color", inputType: "input", placeholder: "Color" },
  { name: "adhesion", inputType: "input", placeholder: "Adhesion" },
  { name: "flexibility", inputType: "input", placeholder: "Flexibility" },
  { name: "durability", inputType: "input", placeholder: "Durability" },
  { name: "waterproofing", inputType: "input", placeholder: "Waterproofing" },
  { name: "application_method", inputType: "input", placeholder: "Application method" },
  { name: "surface_preparation", inputType: "input", placeholder: "Surface preparation" },
  { name: "application_temperature", inputType: "input", placeholder: "Application temperature" },
  { name: "application_coverage", inputType: "input", placeholder: "Application coverage" },
  { name: "standards_certifications", inputType: "input", placeholder: "Standards and Certifications" },
];

export const roofFastenersFilters = [
  { name: "source_location", inputType: "input", placeholder: "Source Location" },
  { name: "product_name", inputType: "input", placeholder: "Product Name" },
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
];

export const roofToolsFilters = [
  { name: "source_location", inputType: "input", placeholder: "Source Location" },
  { name: "product_name", inputType: "input", placeholder: "Product Name" },
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
];

export const precastConnectorsFilters = [
  { name: "source_location", inputType: "input", placeholder: "Source Location" },
  { name: "product_name", inputType: "input", placeholder: "Product Name" },
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
  { name: "application", inputType: "input", placeholder: "Application" },
  { name: "accessories", inputType: "input", placeholder: "Accessories" },
  { name: "base_material", inputType: "textarea", placeholder: "Base material" },
  { name: "coating", inputType: "input", placeholder: "Coating" },
  { name: "load_capacity", inputType: "input", placeholder: "Load capacity" },
  { name: "shape", inputType: "input", placeholder: "Shape" },
  { name: "welding", inputType: "input", placeholder: "Welding" },
  { name: "bolts", inputType: "input", placeholder: "Bolts and fasteners" },
  { name: "adjustability", inputType: "input", placeholder: "Adjustability" },
  { name: "durability", inputType: "input", placeholder: "Durability" },
  { name: "strength", inputType: "input", placeholder: "Strength" },
  { name: "compatibility", inputType: "input", placeholder: "Compatibility" },
];

export const precastBoltsFilters = [
  { name: "source_location", inputType: "input", placeholder: "Source Location" },
  { name: "product_name", inputType: "input", placeholder: "Product Name" },
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
  { name: "application", inputType: "input", placeholder: "Application" },
  { name: "accessories", inputType: "input", placeholder: "Accessories" },
  { name: "base_material", inputType: "textarea", placeholder: "Base material" },
  { name: "coating", inputType: "input", placeholder: "Coating" },
  { name: "grade", inputType: "input", placeholder: "Grade" },
  { name: "head_type", inputType: "input", placeholder: "Head type" },
  { name: "nut_type", inputType: "input", placeholder: "Nut type" },
  { name: "tolerance", inputType: "input", placeholder: "Tolerance" },
  { name: "finish", inputType: "input", placeholder: "Finish" },
  { name: "durability", inputType: "input", placeholder: "Durability" },
  { name: "strength", inputType: "input", placeholder: "Strength" },
  { name: "compatibility", inputType: "input", placeholder: "Compatibility" },
  { name: "corrosion_resistance", inputType: "input", placeholder: "Corrosion resistance" },
];

export const precastExpansionFilters = [
  { name: "source_location", inputType: "input", placeholder: "Source Location" },
  { name: "product_name", inputType: "input", placeholder: "Product Name" },
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
  { name: "application", inputType: "input", placeholder: "Application" },
  { name: "accessories", inputType: "input", placeholder: "Accessories" },
  { name: "base_material", inputType: "textarea", placeholder: "Base material" },
  { name: "coating", inputType: "input", placeholder: "Coating" },
  { name: "reinforcement", inputType: "input", placeholder: "Reinforcement" },
  { name: "movement_capacity", inputType: "input", placeholder: "Movement capacity" },
  { name: "installation", inputType: "input", placeholder: "Installation" },
  { name: "flexibility", inputType: "input", placeholder: "Flexibility" },
  { name: "durability", inputType: "input", placeholder: "Durability" },
  { name: "compatibility", inputType: "input", placeholder: "Compatibility" },
  { name: "load_capacity", inputType: "input", placeholder: "Load capacity" },
  { name: "water_tightness", inputType: "input", placeholder: "Water tightness" },
];

export const precastDowelsFilters = [
  { name: "source_location", inputType: "input", placeholder: "Source Location" },
  { name: "product_name", inputType: "input", placeholder: "Product Name" },
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
  { name: "application", inputType: "input", placeholder: "Application" },
  { name: "accessories", inputType: "input", placeholder: "Accessories" },
  { name: "base_material", inputType: "textarea", placeholder: "Base material" },
  { name: "coating", inputType: "input", placeholder: "Coating" },
  { name: "shape", inputType: "input", placeholder: "Shape" },
  { name: "ends", inputType: "input", placeholder: "Ends" },
  { name: "alignment", inputType: "input", placeholder: "Alignment" },
  { name: "tolerance", inputType: "input", placeholder: "Tolerance" },
  { name: "durability", inputType: "input", placeholder: "Durability" },
  { name: "strength", inputType: "input", placeholder: "Strength" },
  { name: "load_transfer", inputType: "input", placeholder: "Load transfer" },
  { name: "compatibility", inputType: "input", placeholder: "Compatibility" },
];

export const precastEpoxyFilters = [
  { name: "source_location", inputType: "input", placeholder: "Source Location" },
  { name: "product_name", inputType: "input", placeholder: "Product Name" },
  { name: "manufacturer", inputType: "input", placeholder: "Manufacturer" },
  { name: "model_number", inputType: "input", placeholder: "Model Number" },
  { name: "application", inputType: "input", placeholder: "Application" },
  { name: "accessories", inputType: "input", placeholder: "Accessories" },
  { name: "base_components", inputType: "textarea", placeholder: "Base components" },
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
];

export const foundationSpacersFilters = [
  { name: "source_location", inputType: "input", placeholder: "Source Location" },
  { name: "product_name", inputType: "input", placeholder: "Product Name" },
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
  { name: "application", inputType: "input", placeholder: "Application" },
  { name: "accessories", inputType: "input", placeholder: "Accessories" },
  { name: "base_material", inputType: "textarea", placeholder: "Base material" },
  { name: "coating", inputType: "input", placeholder: "Coating" },
  { name: "shape", inputType: "input", placeholder: "Shape" },
  { name: "load_capacity", inputType: "input", placeholder: "Load capacity" },
  { name: "surface", inputType: "input", placeholder: "Surface" },
  { name: "stability", inputType: "input", placeholder: "Stability" },
  { name: "attachment", inputType: "input", placeholder: "Attachment" },
  { name: "strength", inputType: "input", placeholder: "Strength" },
  { name: "durability", inputType: "input", placeholder: "Durability" },
  { name: "compatibility", inputType: "input", placeholder: "Compatibility" },
];

export const foundationReinforcementFilters = [
  { name: "source_location", inputType: "input", placeholder: "Source Location" },
  { name: "product_name", inputType: "input", placeholder: "Product Name" },
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
  { name: "application", inputType: "input", placeholder: "Application" },
  { name: "accessories", inputType: "input", placeholder: "Accessories" },
  { name: "base_material", inputType: "textarea", placeholder: "Base material" },
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
];

export const foundationDampFilterss = [
  { name: "source_location", inputType: "input", placeholder: "Source Location" },
  { name: "product_name", inputType: "input", placeholder: "Product Name" },
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
];

export const formWorkSupportFilters = [
  { name: "source_location", inputType: "input", placeholder: "Source Location" },
  { name: "product_name", inputType: "input", placeholder: "Product Name" },
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
  { name: "application", inputType: "input", placeholder: "Application" },
  { name: "accessories", inputType: "input", placeholder: "Accessories" },
  { name: "base_material", inputType: "textarea", placeholder: "Base material" },
  { name: "coating", inputType: "input", placeholder: "Coating" },
  { name: "adjustability", inputType: "input", placeholder: "Adjustability" },
  { name: "head_plates", inputType: "input", placeholder: "Head plates" },
  { name: "base_plates", inputType: "input", placeholder: "Base plates" },
  { name: "strength", inputType: "input", placeholder: "Strength" },
  { name: "durability", inputType: "input", placeholder: "Durability" },
  { name: "load_capacity", inputType: "input", placeholder: "Load capacity" },
  { name: "flexibility", inputType: "input", placeholder: "Flexibility" },
];

export const formWorkHardwareFilters = [
  { name: "source_location", inputType: "input", placeholder: "Source Location" },
  { name: "product_name", inputType: "input", placeholder: "Product Name" },
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
  { name: "application", inputType: "input", placeholder: "Application" },
  { name: "accessories", inputType: "input", placeholder: "Accessories" },
  { name: "base_material", inputType: "input", placeholder: "Base material" },
  { name: "coating", inputType: "input", placeholder: "Coating" },
  { name: "shape", inputType: "input", placeholder: "Shape" },
  { name: "load_capacity", inputType: "input", placeholder: "Load capacity" },
  { name: "bolts_fasteners", inputType: "input", placeholder: "Bolts and fasteners" },
  { name: "adjustability", inputType: "input", placeholder: "Adjustability" },
  { name: "welding", inputType: "input", placeholder: "Welding" },
  { name: "strength", inputType: "input", placeholder: "Strength" },
  { name: "durability", inputType: "input", placeholder: "Durability" },
  { name: "compatibility", inputType: "input", placeholder: "Compatibility" },
];

export const formWorkSealingFilters = [
  { name: "source_location", inputType: "input", placeholder: "Source Location" },
  { name: "product_name", inputType: "input", placeholder: "Product Name" },
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
  { name: "application", inputType: "input", placeholder: "Application" },
  { name: "accessories", inputType: "input", placeholder: "Accessories" },
  { name: "surface_finish", inputType: "input", placeholder: "Surface finish" },
  { name: "shape", inputType: "input", placeholder: "Shape" },
  { name: "adhesion", inputType: "input", placeholder: "Adhesion" },
  { name: "waterproofing", inputType: "input", placeholder: "Waterproofing" },
  { name: "elasticity", inputType: "input", placeholder: "Elasticity" },
  { name: "compression_set_resistance", inputType: "input", placeholder: "cCompression set resistance" },
];

export const wallsFilters = [
  { name: "source_location", inputType: "input", placeholder: "Source Location" },
  { name: "product_name", inputType: "input", placeholder: "Product Name" },
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
  { name: "application", inputType: "input", placeholder: "Application" },
  { name: "accessories", inputType: "input", placeholder: "Accessories" },
  { name: "shape", inputType: "input", placeholder: "Shape" },
  { name: "base_material", inputType: "input", placeholder: "Base material" },
  { name: "coating", inputType: "input", placeholder: "Coating" },
  { name: "design_construction", inputType: "input", placeholder: "Design and construction" },
  { name: "perfomance_characteristics", inputType: "input", placeholder: "Perfomance characteristics" },
];

export const wallsInsulationFilters = [
  { name: "source_location", inputType: "input", placeholder: "Source Location" },
  { name: "product_name", inputType: "input", placeholder: "Product Name" },
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
  { name: "application", inputType: "input", placeholder: "Application" },
  { name: "accessories", inputType: "input", placeholder: "Accessories" },
  { name: "base_material", inputType: "input", placeholder: "Base material" },
  { name: "density", inputType: "input", placeholder: "Density" },
  { name: "thermal", inputType: "input", placeholder: "Thermal" },
  { name: "acoustic", inputType: "input", placeholder: "Acoustic" },
  { name: "fire_resistance", inputType: "input", placeholder: "Fire resistance" },
  { name: "moisture_resistance", inputType: "input", placeholder: "Moisture resistance" },
];
// for joint compound tape & treatment
export const wallsTapeFilters = [
  { name: "source_location", inputType: "input", placeholder: "Source Location" },
  { name: "product_name", inputType: "input", placeholder: "Product Name" },
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
  { name: "application", inputType: "input", placeholder: "Application" },
  { name: "accessories", inputType: "input", placeholder: "Accessories" },
  { name: "base_material", inputType: "input", placeholder: "Base material" },
  { name: "adhesive", inputType: "input", placeholder: "Adhesive" },
  { name: "additives", inputType: "input", placeholder: "Additives" },
  { name: "shape", inputType: "input", placeholder: "Shape" },
  { name: "color", inputType: "input", placeholder: "Color" },
  { name: "consistency", inputType: "input", placeholder: "Consistency" },
  { name: "drying_time", inputType: "input", placeholder: "Drying_time" },
  { name: "workability", inputType: "input", placeholder: "Workability" },
  { name: "surface_finish", inputType: "input", placeholder: "Surface finish" },
  { name: "adhesion", inputType: "input", placeholder: "Adhesion" },
  { name: "shrinkage", inputType: "input", placeholder: "Shrinkage" },
  { name: "sandability", inputType: "input", placeholder: "Sandability" },
  { name: "crack_resistance", inputType: "input", placeholder: "Crack resistance" },
  { name: "moisture_resistance", inputType: "input", placeholder: "Moisture resistance" },
];