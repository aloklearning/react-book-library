import { useState } from "react";
import { Book } from "../Interfaces/bookInterface";

interface ReturnDataItems {
    jump: Function;
    currentData: Function;
}

const usePagination = (data: Array<Book>, itemsPerPage: number): ReturnDataItems => {
    const [currentPage, setCurrentPage] = useState(1);
    const maxPage = Math.ceil(data.length / itemsPerPage);

    const currentData = (): Array<Book> => {
        const begin = (currentPage - 1) * itemsPerPage;
        const end = begin + itemsPerPage;
        return data.slice(begin, end);
    }

    const jump = (page: number): void => {
        const pageNumber = Math.max(1, page);
        setCurrentPage(_ => Math.min(pageNumber, maxPage));
    }
    return { jump, currentData }
}

export default usePagination;