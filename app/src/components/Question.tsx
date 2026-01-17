type QuestionProps = {
    title: string;
    variants: string[];
}

export default function Question({ title, variants }: QuestionProps) {
    return (
        <div className='question'>
            <div className='question__title'>{title}</div>
            {variants.map((variant, i) => (
                <div
                    key={i}
                    className='question__variant'
                    onClick={openVariant}
                >
                    {variant}
                </div>
            ))}
        </div>
    )
}

function openVariant() {

}