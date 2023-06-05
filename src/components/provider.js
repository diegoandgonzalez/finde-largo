"use client";
import useIsMounted from "@/hooks/useIsMounted";
import { ThemeProvider } from "next-themes";

const Provider = ({ children }) => {
    const isMounted = useIsMounted();

    if (!isMounted) {
        return null;
    }

    return (
        <ThemeProvider attribute="class" storageKey="finde-largo-theme">
            {children}
        </ThemeProvider>
    )
}

export default Provider;