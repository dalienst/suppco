import { urlActions } from "@/tools/api"

// Cateories
export const getCategories = async (axios) => {
    const response = await urlActions?.get(
        "/api/layers/",
        axios,
    );

    return response?.data?.results;
};

export const createCategory = async (values, axios) => {
    await urlActions?.post(
        "/api/layers/",
        values,
        axios,
    )
};

export const getCategoryDetail = async (axios, slug) => {
    const response = await urlActions?.get(
        `/api/layers/${slug}/`,
        axios,
    )

    return response?.data
}

export const deleteCategory = async (slug, axios) => {
    await urlActions?.delete(
        `/api/layers/${slug}/`,
        axios
    )
}

// Sub Cateories
export const getSubCategory = async (axios) => {
    const response = await urlActions?.get(
        "/api/sublayers/",
        axios
    )

    return response?.data?.results;
}

export const createSubCategory = async (values, axios) => {
    await urlActions?.post(
        "/api/sublayers/",
        values,
        axios
    )
}

export const deleteSubCategory = async (slug, axios) => {
    await urlActions?.delete(
        `/api/sublayers/${slug}/`,
        axios
    )
}

export const getSubCategoryDetail = async (axios, slug) => {
    const response = await urlActions?.get(
        `/api/sublayers/${slug}/`,
        axios
    )

    return response?.data
}

// Sub Categories Items
export const getSubCategoryItem = async (axios) => {
    const response = await urlActions?.get(
        "/api/sublayeritems/",
        axios
    )

    return response?.data?.results;
}

export const createSubCategoryItem = async (values, axios) => {
    await urlActions?.post(
        "/api/sublayeritems/",
        values,
        axios
    )
}

export const getSubCategoryItemDetail = async (axios, slug) => {
    const response = await urlActions?.get(
        `/api/sublayeritems/${slug}/`,
        axios
    )

    return response?.data
}

export const deleteSubCategoryItem = async (slug, axios) => {
    await urlActions?.delete(
        `/api/sublayeritems/${slug}/`,
        axios
    )
}

// Brackets
export const createBracket = async (values, axios) => {
    await urlActions?.post(
        "/api/brackets/",
        values,
        axios
    )
}

export const getBrackets = async (axios) => {
    const response = await urlActions?.get(
        "/api/brackets/",
        axios
    )

    return response?.data?.results;
}

export const getBracketDetail = async (axios, slug) => {
    const response = await urlActions?.get(
        `/api/brackets/${slug}/`,
        axios
    )

    return response?.data
}

export const deleteBracket = async (slug, axios) => {
    await urlActions?.delete(
        `/api/brackets/${slug}/`,
        axios
    )
}
