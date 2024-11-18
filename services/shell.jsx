import { urlMultipartActions } from "@/tools/api"

export const createShellEquipment = async (formData, axios) => {
    await urlMultipartActions?.post(
        "/api/shellequipment/",
        formData,
        axios,
    )
}

export const getCategoryShellEquipment = async (axios, query) => {
    const response = await urlMultipartActions?.get(
        `/api/shellequipment/?layer=${query}`,
        axios
    )
    return response.data?.results
}

export const getSubCategoryShellEquipment = async (axios, query) => {
    const response = await urlMultipartActions?.get(
        `/api/shellequipment/?sublayer=${query}`,
        axios
    )
    return response.data?.results
}

export const getBracketShellEquipment = async (axios, query) => {
    const response = await urlMultipartActions?.get(
        `/api/shellequipment/?bracket=${query}`,
        axios
    )
    return response.data?.results
}

export const getSubCategoryItemShellEquipmentList = async (axios, query) => {
    const response = await urlMultipartActions?.get(
        `/api/shellequipment/?sublayeritem=${query}`,
        axios
    )
    return response.data?.results
}