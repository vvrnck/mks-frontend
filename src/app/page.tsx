import { IAPIResponse } from "./interfaces/response";
import { getURL } from "./utils";
import Products from "./components/products/Products";

export default async function Home() {      
      const data : IAPIResponse = await getData();

      if (!data) return null;

  	return <Products {...data} />
}

async function getData() {
      try{
            const baseURL = process.env.API_URL;
            const url = baseURL + getURL(`products`, {
                  page: 1,
                  rows: 8,
                  sortBy: "name",
                  orderBy: "ASC"
            });
            const res = await fetch(url, { cache: 'no-store' }); // no-store assuming that prices can change "fast"
            return res.json();            
      } catch (e) {
            console.warn("ERROR FETCHING API");
            console.error(e);
      }
}