import {  useState } from "react"
import { Link } from "react-router-dom"
import useAxios from "../../Hooks/useAxios"
import Loading from "../Main/Loading"

const HeaderMenu = ()=>{
    const [catShow,setCatShow] = useState(false)
    const [url,setUrl] = useState("/categories/1")
    const hideCat = ()=>{
        setCatShow(cat=>!catShow)
    }
     const getCategory = (id)=>{
       setUrl(`/categories/${id}`)
    }
   const {response:categories}= useAxios({
        url:"categories",
    })
    const {response:subCategory,loading}= useAxios({
        url,
    })
    return (
        <ul className="flex gap-3 flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <button onClick={hideCat}
            id="mega-menu-full-dropdown-button"
            className="flex items-center justify-between w-full py-2 pl-3 pr-4  text-gray-900 rounded md:w-auto hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
          >
            دسته بندی
            <svg
              className="w-2.5 h-2.5 ml-2.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>
          <div className="absolute mt-7 p-3 flex-row bg-slate-700 top-8 left-0 right-0 text-white" style={{
            display: catShow ? "flex":"none",
            lineHeight:2
          }}>
            <div className="px-4 border-l ml-5 border-lime-300" style={{minWidth:"140px"}}>
                {
                    categories.map((cat)=>
                        (  
                        <div key={cat.id}>
                            <button type="button" onClick={e=>getCategory(cat.id)} className="pr-2 border-b border-dashed hover:text-blue-400 transition">{cat.name}</button>
                        </div>
                        )
                    )
                }
            </div>
            <div>
                {
                    loading ? <Loading/> : 
                    subCategory.map((cat)=>(
                        <div key={cat.id}>
                            <Link to={`/category/${cat.id}`} >{cat.name}</Link>
                        </div>
                    ))
                }
            </div>
          </div>
        </li>
        <li>
          <Link
            to="/shop"
            className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
          >
            فروشگاه
          </Link>
        </li>
        <li>
          <Link to={"تماس-با-ما"}
            className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
          >
            تماس با ما
          </Link>
        </li>
        <li>
          <Link
            to="/درباره-ما"
            className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
          >
            درباره ما
          </Link>
        </li>
      </ul>
    )
}
export default HeaderMenu