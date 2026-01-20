import { TeamColor } from "../index";
import { currentTeamSignal, scoreSignal } from "../store";

export default function TeamScore({ color }: { color: TeamColor}) {
    const isActive = currentTeamSignal.value === color;

    return (
        <div className={`team-score ${color} ${isActive ? 'active' : ''}`}>
            <div className={'team-score__color-box'}></div>
            <div className={'team-score__score'}>{scoreSignal.value[color]}</div>
        </div>
    );
}