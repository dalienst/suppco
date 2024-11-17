import { urlMultipartActions } from "@/tools/api"

export const createPlumbingEquipment = async (formData, axios) => {
    await urlMultipartActions?.post(
        "/api/plumbing/",
        formData,
        axios,
    )
}

export const getSubCategoryItemPlumbingEquipmentList = async (axios, query) => {
    const response = await urlMultipartActions?.get(
        `/api/plumbing/?sublayeritem=${query}`,
        axios
    )
    return response.data?.results
}

export const getCategoryPlumbingEquipmentList = async (axios, query) => {
    const response = await urlMultipartActions?.get(
        `/api/plumbing/?layer=${query}`,
        axios
    )
    return response.data?.results
}

export const getBracketPlumbingEquipmentList = async (axios, query) => {
    const response = await urlMultipartActions?.get(
        `/api/plumbing/?bracket=${query}`,
        axios
    )
    return response.data?.results
}

export const getSubCategoryPlumbingEquipmentList = async (axios, query) => {
    const response = await urlMultipartActions?.get(
        `/api/plumbing/?sublayer=${query}`,
        axios
    )
    return response.data?.results
}
