import { useState } from "react"



export const usePaginationAndSearch = () => {

    const [currentPage,setCurrentPage] = useState<number>(1)

    const [search,setSearch] = useState("")

    const handleChangeSearch = (newValue: string) => setSearch(newValue)
    const handleChangeCurrentPage = (newValue: number) => setCurrentPage(newValue)


    return {
        currentPage,
        search,
        onChangeSearch: handleChangeSearch,
        onChangeCurrentPage: handleChangeCurrentPage
    }
}