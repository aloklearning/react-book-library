import { useState } from "react";
import { Book } from "../Interfaces/bookInterface";

interface ReturnDataItems {
    next: Function;
    prev: Function;
    jump: Function;
    currentData: Function;
    currentPage: number;
    maxPage: number;
}

const usePagination = (data: Array<Book>, itemsPerPage: number): ReturnDataItems => {
    const [currentPage, setCurrentPage] = useState(1);
    const maxPage = Math.ceil(data.length / itemsPerPage);

    const currentData = (): Array<Book> => {
        const begin = (currentPage - 1) * itemsPerPage;
        const end = begin + itemsPerPage;
        return data.slice(begin, end);
    }

    const next = (): void => {
        setCurrentPage(currentPage => Math.min(currentPage + 1, maxPage));
    }

    const prev = (): void => {
        setCurrentPage(currentPage => Math.max(currentPage -1, 1));
    }

    const jump = (page: number): void => {
        const pageNumber = Math.max(1, page);
        setCurrentPage(_ => Math.min(pageNumber, maxPage));
    }

    return { next, prev, jump, currentData, currentPage, maxPage };
}

export default usePagination;