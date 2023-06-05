"use client";
import useIsMounted from "@/hooks/useIsMounted";
import { ThemeProvider } from "next-themes";

type Props = {
    children: React.ReactNode;
};

const Provider = ({ children }: Props): React.ReactNode => {
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