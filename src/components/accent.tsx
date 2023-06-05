type Props = {
    children: React.ReactNode;
};

const Accent = ({ children }: Props): React.ReactNode => {
    return (
        <span className="text-customMain font-extrabold">
            {children}
        </span>
    )
}

export default Accent;