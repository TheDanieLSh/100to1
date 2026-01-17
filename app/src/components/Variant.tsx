import { useState } from 'preact/hooks';

type VariantProps = {
    text: string,
    index: number,
}

export default function Variant({ text, index }: VariantProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div 
            className={`variant-container ${isOpen ? 'is-open' : ''}`} 
            onClick={() => setIsOpen(!isOpen)}
        >
            <div className="variant-inner">
                <div className="variant-front">
                    <span className="variant-number">{index}</span>
                </div>
                <div className="variant-back">
                    {text}
                </div>
            </div>
        </div>
    );
}