import axios from "axios"
import { useEffect, useState } from "react";

const instanceAxios = axios.create({
    baseURL:"http://127.0.0.1:8000"
})
const useAxios = (axiosParam)=>{
    const [response,setResponse] = useState([])
    const [error,setError] = useState("")
    const [loading,setLoading] = useState(true)
    const fetchData = async () => {
        setLoading(true)
        try{
            const result = await instanceAxios.request(axiosParam)
            setResponse(result.data)
        }catch(err){
            setError(err)
        }
        finally{
            setLoading(false)
        }
    }
    useEffect(()=>{
        fetchData()
    },[axiosParam.url])
    return {response,error,loading}
}
export default useAxios