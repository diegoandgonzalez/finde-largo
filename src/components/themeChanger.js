"use client";
import useIsMounted from "@/hooks/useIsMounted";
import { useTheme } from "next-themes";

const ThemeChanger = () => {
    const { resolvedTheme, setTheme } = useTheme();
    const isMounted = useIsMounted();

    const toggleTheme = () => {
        switch (resolvedTheme) {
            case "dark": {
                setTheme("light");
                break;
            }
            case "light": {
                setTheme("dark");
                break;
            }
            default: break;
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