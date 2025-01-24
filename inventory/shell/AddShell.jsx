'use client';

import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import { Textarea } from "@/app/components/ui/textarea";
import { ChevronLeft, ChevronRight, ImagePlus, Loader2 } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import SupplierInputForm from "./SupplierInputForm";
import { useParams, useRouter } from "next/navigation";
import useAxiosAuth from "@/hooks/useAxiosAuth";
import toast from "react-hot-toast";
import { createShellEquipment } from "@/services/shell";
import { cementDetails, formWorkHardwareDetails, formWorkSealingDetails, formWorkSupportDetails, foundationDampDetails, foundationReinforcementDetails, foundationSpacersDetails, precastBoltsDetails, precastConnectorsDetails, roofBracingDetails, roofBracketsDetails, roofConnectorsDetails, roofFlashingDetails, roofInsulationDetails, roofMasticsDetails, roofMembraneDetails, roofMetalDetails, roofPrimersDetails, roofSheatingDetails, roofShinglesDetails, roofStrapsDetails, roofTapesDetails, roofTensionersDetails, roofTilesDetails, roofToolsDetails, roofTrussDetails, roofUnderlaymentDetails, roofVentsDetails, wallsBrickStoneDetails, wallsDetails, wallsDrywallMDFDetails, wallsEngineeredWoodDetails, wallsGlassDetails, wallsInsulationDetails, wallsPlywoodDetails, wallsSolidWoodDetails, wallsTapeDetails, wallsWoodDetails } from "@/data/formGeneratorInputTypes";

function AddShell({branch, item, category, refetchShell, employees}) {

  const [formValues, setFormValues] = useState({});
  const [loading, setLoading] = useState(false);
  const [supplierInputValues, setSupplierInputValues] = useState(null);
  const [page, setPage] = useState(1);
  const router = useRouter();
  const { slug } = useParams();

  const handleSupplierInputValues = (data) => {
    setSupplierInputValues(data);
  };
  const axios = useAxiosAuth();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };
  const handleImage = (e) => {
    const {name} = e.target;
    const file = e.target.files[0];
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: file,
    }));
  };
  const handleEmployees = (e) => {
    const { name } = e.target;
    const options = Array.from(e.target.options);
      const selectedValues = options
        .filter(option => option.selected)
        .map(option => option.value);
      setFormValues((prevValues) => ({
        ...prevValues,
        [name]: selectedValues,
      }));
  };
  const handleSubmit = async(e) => {
    setLoading(true)
    e.preventDefault();
    const formData = new FormData();
        for (const key in formValues) {
      if (Array.isArray(formValues[key])) {
        formValues[key].forEach(value => formData.append(key, value));
      } else {
        formData.append(key, formValues[key]);
      }
    }
    formData?.append("branch", branch?.reference);
            formData?.append("company", branch?.company);
            formData?.append("sublayeritem", item?.name);
            formData?.append("layer", category?.name);
    console.log('Form submitted:', formData);
    try {
      await createShellEquipment(formData, axios);
            toast?.success(
              "Shell Equipment created successfully. Refreshing..."
            );
    } catch (error) {
      console.log(error)
    }finally{
      setLoading(false)
    }
  };

    const renderForm = () =>{
        switch (item?.sublayer) {          
              case "Glass Wall":
                return wallsGlassDetails;
              case "Stone Wall":
                case "Brick Wall":
                return wallsBrickStoneDetails;
              case "Dry Wall":
                return wallsDrywallMDFDetails;
              case "Wood Wall":
                switch(item?.name){
                    case "Engineered Wood":
                        return wallsEngineeredWoodDetails;
                    case "Solid Wood":
                        return wallsSolidWoodDetails;
                    case "Plywood":
                        return wallsPlywoodDetails;
                    default:
                        return wallsWoodDetails;
                }
              case "Roof Tiles":
                return roofTilesDetails;
              case "Roof Bracing":
                return roofBracingDetails;
              case "Roof Insulation":
                return roofInsulationDetails;
              case "Metal Roof":
                return roofMetalDetails;
              case "Roof Connectors":
                return roofConnectorsDetails;
              case "Roof Membrane":
                return roofMembraneDetails;
              case "Roof Underlayment":
                return roofUnderlaymentDetails;
              case "Roof Flashing":
                return roofFlashingDetails;
              case "Roof Shingles":
                return roofShinglesDetails;
              case "Roof Sheathing":
                return roofSheatingDetails;
              case "Roof Truss":
                return roofTrussDetails;
              case "Roofing Tools":
                return roofToolsDetails;
              case "Roof Accessories":
                switch(item?.name){
                  case "Roofing Tapes":
                    return roofTapesDetails;
                  case "Roofing Sealants":
                    case "Roofing Adhesives":
                      case "Roofing Cement":
                        case "Roofing Mastics":
                          return roofMasticsDetails; 
                  case "Roofing Vents":
                    return roofVentsDetails;
                  case "Roofing Tensioners":
                    return roofTensionersDetails;
                  case "Roofing Straps":
                    return roofStrapsDetails;
                  case "Roofing Brackets":
                    return roofBracketsDetails;
                  case "Roofing Primers":
                    return roofPrimersDetails               
                  default:
                    return roofMasticsDetails;  
                }
               case "Cement Accessories":
                return cementDetails;
                case "Foundation Accessories":
                  switch (item?.name){
                    case "Damp-Proof Membrane":
                      return foundationDampDetails;
                    case "Reinforcement Mesh":
                      return foundationReinforcementDetails;
                    case "Spacers":
                      return foundationSpacersDetails;
                    default:
                      return foundationReinforcementDetails;
                  }
                case "Walls Accessories":
                  switch(item?.name){
                    case "Wall Insulation":
                      return wallsInsulationDetails;
                    case "Joint Compound":
                      case "Joint Tape":
                        case "Joint Treatment":
                          return wallsTapeDetails;
                    default:
                      return wallsDetails
                  } 
                  case "Formwork Accessories":
                    switch (item?.name){
                      case "Formwork Sealing":
                        return formWorkSealingDetails;
                      case "Formwork Support":
                        return formWorkSupportDetails;  
                      default:
                        return formWorkHardwareDetails
                    }
                   case "Pre-Cast Accessories":
                    return precastConnectorsDetails; 
            default:
                return [];
        }
      }
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
       {page === 1 ? (
              <div>
                <div className="flex items-center gap-2 mt-3 mb-5">
                  <label htmlFor="image" className="flex gap-2">
                    <ImagePlus size={30} />
                  </label>
                  <input
                    type="file"
                    id="image"
                    name="image"
                    onChange={handleImage}
                  />
                </div>
                <div className="space-y-4 grid grid-cols-2 gap-2 lg:gap-5">
                  {renderForm().map((field) => (
                    <div key={field.name} className="">
                      {field.inputType === 'input' && (
                        <div className="flex flex-col gap-1">
                          <Label htmlFor={field.name}>{field.placeholder}</Label>
                          <Input
                            type="text"
                            name={field.name}
                            id={field.name}
                            onChange={handleChange}
                            className="border p-2 w-full"
                          />
                        </div>
                      )}
                      {field.inputType === 'textarea' && (
                        <div className="flex flex-col gap-1">
                        <Label htmlFor={field.name}>{field.placeholder}</Label>
                        <Textarea
                          name={field.name}
                          id={field.name}
                          onChange={handleChange}
                          className="border p-2 w-full"
                        />
                      </div>
                        
                      )}
                      {field.inputType === 'select' && (
                        <div className="flex flex-col gap-1">
                        <Label htmlFor={field.name}>{field.placeholder}</Label>
                        <select
                          name={field.name}
                          id={field.name}
                          onChange={handleChange}
                          className="border p-2 w-full rounded-md bg-white"
                        >
                          <option value="" disabled>
                            {field.placeholder}
                          </option>
                          {field.options.map((option) => (
                            <option key={option.id} value={option.value}>
                              {option.value}
                            </option>
                          ))}
                        </select>
                      </div>
                        
                      )}
                    </div>
                  ))}
                </div>
      <div className="mt-5 mb-5 flex justify-between gap-2">
                  <Button onClick={() => setPage(2)}>
                    Next page <ChevronRight />
                  </Button>
                  <p>Page {page} of 3</p>
                </div>
              </div>
              ) : page === 2 ? (
                <div className="">
                  <p className="font-semibold text-lg lg:text-xl mb-4">
                    Supplier Input Form
                  </p>
                  <div className="flex flex-col gap-1 mb-2 border p-4 rounded-lg">
                    <span className="text-lg font-semibold block mb-4">
                      Employee Allocation
                    </span>
                    <Label htmlFor="employee">Employee</Label>
                    <select
                      id="employee"
                      name="employees"
                      multiple
                      className="bg-white border-[1px] p-2 rounded-lg"
                      onChange={handleEmployees}
                    >
                      <option value="">N/A</option>
                      {employees?.length &&
                        employees.map((employee, index) => (
                          <option key={index} value={employee} id={employee}>
                            {employee}
                          </option>
                        ))}
                    </select>
                  </div>
                  <SupplierInputForm
                    onSupplierInputValues={handleSupplierInputValues}
                  />
                  <div className="mt-5 mb-5 flex justify-between gap-2">
                    <div className="flex justify-between gap-2 ">
                      <Button onClick={() => setPage(1)}>
                        <ChevronLeft /> Back
                      </Button>
                      <Button
                        disabled={supplierInputValues === null}
                        onClick={() => setPage(3)}
                      >
                        Next <ChevronRight />
                      </Button>
                    </div>
                    <p>Page {page} of 3</p>
                  </div>
                </div>
              ) : page === 3 ? (
                <div>
                  <div className="grid h-[70vh] place-content-center">
                    <Image
                      src="/thumbs.webp"
                      alt="thumbs up"
                      width={150}
                      height={150}
                      className="mx-auto"
                    />
                    <span className="font-semibold text-2xl text-center">
                      You&apos;re done.
                    </span>
                    <p>Click submit to save this information.</p>
                    {supplierInputValues && (
                      <Button
                        disabled={loading}
                        type="submit"
                        className="mt-10 mb-5"
                      >
                        {loading ? (
                          <Loader2 className="animate-spin" />
                        ) : (
                          "Submit"
                        )}
                      </Button>
                    )}
                  </div>
                  <div className="flex justify-between gap-2 ">
                    <Button
                      variant="outline"
                      disabled={loading}
                      onClick={() => setPage(2)}
                    >
                      <ChevronLeft /> Back
                    </Button>
                    <p>Page {page} of 3</p>
                  </div>
                </div>
              ) : null}
    </form>
  )
}

export default AddShell