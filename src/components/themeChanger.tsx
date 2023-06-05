"use client";
import useIsMounted from "@/hooks/useIsMounted";
import { useTheme } from "next-themes";

const ThemeChanger = (): React.ReactNode => {
    const { resolvedTheme, setTheme } = useTheme();
    const isMounted = useIsMounted();

    const toggleTheme = () => {
        if (resolvedTheme === "dark") {
            setTheme("light");
        } else {
            setTheme("dark");
        }
    }


    if (!isMounted) {
        return null;
    }

    return (
        <button className="fixed top-4 left-4 text-2xl" onClick={toggleTheme}>
            {resolvedTheme === "dark" ? "🔆" : "🌙"}
        </button>
    )
}

export default ThemeChanger;