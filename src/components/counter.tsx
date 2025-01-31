import Accent from "./accent";

type Props = {
    amount: number,
    small: boolean,
};

const Counter = ({ amount, small }: Props): React.ReactNode => {
    const getText = () => {
        if (small) return <Accent>En {amount} días</Accent>;
        if (!amount) return <>No hay findes largos... <Accent>¿Qué pasó?</Accent></>
        if (amount <= 0) return <>Ya arrancó el <Accent>finde largo</Accent> 🥳</>;
        if (amount <= 7) return <>El <Accent>finde largo</Accent> arranca en <Accent>{amount}</Accent> días 🥵</>;
        return <>Faltan <Accent>{amount}</Accent> días para el <Accent>finde largo</Accent> 😴</>;
    }

    return (
        <p className={small ? "text-2xl" : "text-3xl md:text-5xl font-semibold"}>
            {getText()}
        </p>
    )
}

export default Counter;