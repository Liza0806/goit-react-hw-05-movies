import axios from "axios";
import { toast } from "react-toastify";

export async function fetchData(urlPart) {
  
    try {
      const headers = {
        Accept: "application/json",
        Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZmQwOGNhMTljY2JmM2U1MjgwN2ViZmVjZDEwOGUzNiIsInN1YiI6IjY1MTJiYjFkYTkxMTdmNzY1ZDg4OTgxNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wk5fdIqZPgG2xDOolV97Xo9axot0ymipWFnQCS9z3XQ",
      };
      const url = `
      https://api.themoviedb.org/3/${urlPart}`; 
      const response = await axios.get(url, { headers });
      return response.data;
    } catch (error) {
    
      console.error('Error:', error);
      return toast.error("'Error:', error")
      

   
    }
  }
  