import { urlActions } from "@/tools/api"

export const getInventoryCategories = async (inventory, axios) => {
    const response = await urlActions?.get(
        `/api/layers/?inventory=${inventory}`,
        axios
    )

    return response?.data?.results;
}
