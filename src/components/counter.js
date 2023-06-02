const Counter = ({ amount, small }) => {
    const getText = () => {
        if (small) return <b>En {amount} días</b>;
        if (amount <= 0) return <>Ya arrancó el <b>finde largo</b> 🥳</>;
        if (amount <= 7) return <>El <b>finde largo</b> arranca en <b>{amount}</b> días 🥵</>;
        return <>Faltan <b>{amount}</b> días para el <b>finde largo</b> 😴</>;
    }

    return (
        <p className={small ? "text-2xl" : "text-3xl md:text-5xl font-semibold"}>
            {getText()}
        </p>
    )
}

export default Counter;