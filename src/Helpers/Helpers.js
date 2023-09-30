import axios from "axios";
import React from "react";
import { ColorRing } from "react-loader-spinner";


export async function fetchData(url) {
  try {
    const headers = {
      Accept: "application/json",
      Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZmQwOGNhMTljY2JmM2U1MjgwN2ViZmVjZDEwOGUzNiIsInN1YiI6IjY1MTJiYjFkYTkxMTdmNzY1ZDg4OTgxNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wk5fdIqZPgG2xDOolV97Xo9axot0ymipWFnQCS9z3XQ",
    };

    const response = await axios.get(url, { headers });
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
}

export const LoadingSpinner = () => {
  return (
    <div
    style={{
      position: "fixed",
      top: "50%", 
      left: "50%", 
      transform: "translate(-50%, -50%)",
      zIndex: 9999, 
    }}
  >
      <ColorRing
        visible={true}
        height="180"
        width="180"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={[
          "#e15b64",
          "#f47e60",
          "#f8b26a",
          "#abbd81",
          "#849b87",
        ]}
      />
    </div>
  );
};

