import { urlActions } from "@/tools/api"

export const sendInvitation = async (values, axios) => {
    await urlActions?.post(
        "/api/invitation/",
        values,
        axios,
    )
}