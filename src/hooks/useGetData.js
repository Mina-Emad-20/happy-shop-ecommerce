import baseUrl from "../api/baseURL";

const useGetData = async (url, params) => {
    const res = await baseUrl.get(url, params)
    return res.data
}

export default useGetData;