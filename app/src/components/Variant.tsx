import { useState } from 'preact/hooks';
import { currentTeamSignal, scoreSignal } from '../store';

type VariantProps = {
    text: string,
    index: number,
    vCount: number,
}

export default function Variant({ text, index, vCount }: VariantProps) {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);

        scoreSignal.value = {
            ...scoreSignal.value,
            [currentTeamSignal.value]: scoreSignal.value[currentTeamSignal.value] + (vCount - index),
        };

        currentTeamSignal.value = currentTeamSignal.value === 'red' ? 'blue' : 'red';
    }

    return (
        <div 
            className={`variant-container ${isOpen ? 'is-open' : ''}`} 
            onClick={() => handleClick()}
        >
            <div className="variant-inner">
                <div className="variant-front">
                    <span className="variant-number">{index + 1}</span>
                </div>
                <div className="variant-back">
                    {text}
                </div>
            </div>
        </div>
    );
}
