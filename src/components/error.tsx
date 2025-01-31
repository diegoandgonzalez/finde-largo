import Accent from "./accent";

const Error = (): React.ReactNode => {
    return (
        <h1 className="text-3xl md:text-5xl">
            Algo <Accent>salió mal</Accent> 🔥
        </h1>
    )
}

export default Error;