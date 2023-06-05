"use client";
import { useState, useEffect } from "react";

const useIsMounted = (): Boolean => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true)
    }, [])

    return isMounted;
}

export default useIsMounted;