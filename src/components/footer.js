import Image from 'next/image';
import github from "public/github-mark-white.png";

const Footer = async () => {
    return (
        <footer className="fixed bottom-0 w-full">
            <div className="flex justify-center m-4">
                <Image
                    src={github}
                    alt="GitHub icon"
                    height={25}
                />
                <a
                    href="https://github.com/dagonzalez1757/finde-largo"
                    className="pl-2 text-white underline"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Repositorio de GitHub
                </a>
            </div>
        </footer>
    )
}

export default Footer;