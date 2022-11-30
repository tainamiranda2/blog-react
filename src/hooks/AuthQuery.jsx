import { useLocation } from "react-router-dom";
import { useMemo } from "react";

export function AuthQuery(){
    const {search} =useLocation()

    return useMemo(()=> new URLSearchParams(search), [search])
}