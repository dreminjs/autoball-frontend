import { useFilterCategories } from "../../model/hooks/use-filtration-categories"


export const ApplyFilteration = () => {

    const filterCategories = useFilterCategories()

    

    return (
        <button>
            Поиск
        </button>
    )
}