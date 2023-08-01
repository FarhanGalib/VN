import { getApi } from "utils/utils";

export const getProducts = async ({ params }) => await getApi(`/videos`, { params })