import React from "react";
import { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
import SearchResultItem from "./SearchResultItem";

const supabase = createClient('https://kwkbmjsvccedsnavgxyn.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt3a2JtanN2Y2NlZHNuYXZneHluIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzgwMDI3MDgsImV4cCI6MTk5MzU3ODcwOH0.sFj7s3wgWmKQZNqSNRBOtHV9ATgtTSblwhEe8ZuuJEY')

function Search()
{
    const [search, setSearch] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    // let params = new URLSearchParams(window.location.search);

    function handleSearch(e)
    {
        setSearch(e.target.value);
        console.log(search);
    }

    useEffect(() => {
        async function fetchDiseases() {
          let { data, error } = await supabase
            .from('nhs_disease_data')
            .select('key, text')
          if (error) {
            console.log(error)
            return
          }
          setSearchResults(data)
        }
        fetchDiseases()
        // console.log(searchResults);
    }, [])

    return (
        <>
            {/* <form> */}
                <input className="bg-[#ffdcdc] rounded-xl min-w-[50rem] max-w-[50%] py-3 mx-auto text-center my-3 shadow-md border-pink-200 focus:border-white" value={search} type="text" placeholder="Search Diseases..." name="search" onChange={handleSearch}/>
                {/* <input type="submit" className="hidden" /> */}
                <div className="flex flex-col">
                    {searchResults.filter((val) => {
                    if (val.text.toLowerCase().includes(search.toLowerCase()))
                    {
                        return val;
                    }
                    }).map((val) => 
                    {
                        <SearchResultItem name={val.text} info={val.key} />
                    })}
                    <SearchResultItem name="test" info="test" />
                </div>

            {/* </form> */}
        </>
    );
}

export default Search;