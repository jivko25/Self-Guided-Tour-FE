"use client"
import { axiosTour } from "@/api/axios";
import { useEffect, useState } from "react";
import Card from "../components/Card/Card";


export default function Explore() {
    const [tours, setTours] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);
    const [pageSize, setPageSize] = useState(8);
    const [searchTerm, setSearchTerm] = useState();

    useEffect(() => {
        axiosTour.get('/')
                    .then(data => setTours([...data.data.result]))
                    .catch(err => console.log(err));
    }, []);
    return(
        <>
        {(tours.length > 0) && tours.map(t => <Card key={t.tourId} title={t.title} imageSrc={t.thumbnailImageUrl}/>)}
        </>
    );
}