import { urlActions, urlMultipartActions } from "@/tools/api"

export const getEmployees = async (axios) => {
    const response = await urlActions?.get(
        "/api/employees/",
        axios
    )

    return response?.data?.results
}

export const getCompanyEmployees = async (axios, query) => {
    const response = await urlActions?.get(
        `/api/employees/?company=${query}`,
        axios
    )

    return response?.data?.results
}

export const getEmployeeDetail = async (axios, slug) => {
    const response = await urlMultipartActions?.get(
        `/api/employees/${slug}/`,
        axios
    )
    return response?.data
}

export const updateEmployee = async (formData, slug, axios) => {
    await urlMultipartActions?.patch(
        `/api/employees/${slug}/`,
        formData,
        axios
    )
}