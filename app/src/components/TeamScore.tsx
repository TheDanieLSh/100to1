import { TeamColor } from "../index";
import { currentTeamSignal, scoreSignal } from "../store";

export default function TeamScore({ color }: { color: TeamColor}) {
    const isActive = currentTeamSignal.value === color;

    const handleClick = () => {
        currentTeamSignal.value = currentTeamSignal.value === 'red' ? 'blue' : 'red';
    }

    return (
        <div
            className={`team-score ${color} ${isActive ? 'active' : ''}`}
            onClick={() => handleClick()}
        >
            <div className={'team-score__color-box'}></div>
            <div className={'team-score__score'}>{scoreSignal.value[color]}</div>
        </div>
    );
}