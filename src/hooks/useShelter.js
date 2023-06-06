import { useState, useEffect } from "react";
import { fetchShelter } from "../api";

export function useShelter(guNm) {
  const [shelter, setShelter] = useState([]);

  async function _fetchShelter(guNm) {
    try {
      const shelter = await fetchShelter(guNm);
      setShelter(shelter);
    } catch (err) {
      console.log("error", err);
    }
  }

  useEffect(() => {
    _fetchShelter(guNm);
  }, [guNm]);

  return { shelter };
}