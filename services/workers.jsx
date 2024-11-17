import { urlMultipartActions } from "@/tools/api"

export const getWorkerDetail = async (axios, slug) => {
    const response = await urlMultipartActions?.get(
        `/api/workers/${slug}/`,
        axios
    )
    return response.data
}

export const updateWorkerDetail = async (formData, slug, axios, ) => {
    const response = await urlMultipartActions?.patch(
        `/api/workers/${slug}/`,
        formData,
        axios
    )
    return response.data
}