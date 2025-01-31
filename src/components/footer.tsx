import GitHubIcon from "./gitHubIcon";

const Footer = (): React.ReactNode => {
    return (
        <footer className="fixed bottom-0 w-full">
            <div className="flex justify-center m-4">
                <GitHubIcon height={25} />
                <a
                    href="https://github.com/diegoandgonzalez/finde-largo"
                    className="pl-2 underline"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {"Repositorio de GitHub"}
                </a>
            </div>
        </footer>
    )
}

export default Footer;