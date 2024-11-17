import { urlMultipartActions } from "@/tools/api"

export const createElectricityEquipment = async (formData, axios) => {
    await urlMultipartActions?.post(
        "/api/electricity/",
        formData,
        axios
    )
}

export const getCategoryElectricityEquipment = async (axios, query) => {
    const response = await urlMultipartActions?.get(
        `/api/electricity/?layer=${query}`,
        axios
    )
    return response.data?.results
}

export const getSubCategoryElectricityEquipment = async (axios, query) => {
    const response = await urlMultipartActions?.get(
        `/api/electricity/?sublayer=${query}`,
        axios
    )
    return response.data?.results
}

export const getItemElectricityEquipment = async (axios, query) => {
    const response = await urlMultipartActions?.get(
        `/api/electricity/?sublayeritem=${query}`,
        axios
    )
    return response.data?.results
}

export const getBracketElectricityEquipment = async (axios, query) => {
    const response = await urlMultipartActions?.get(
        `/api/electricity/?bracket=${query}`,
        axios
    )
    return response.data?.results
}
