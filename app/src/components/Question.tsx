import Variant from "./Variant"

type QuestionProps = {
    title: string;
    variants: string[];
}

export default function Question({ title, variants }: QuestionProps) {
    return (
        <div className='question'>
            <div className='question__title'>{title}</div>
            <div className='question__list'>
                {variants.map((variant, i) => (
                    <Variant key={i} text={variant} index={i + 1} />
                ))}
            </div>
        </div>
    )
}
