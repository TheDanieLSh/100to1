import { TeamColor } from "../index";
import { scoreSignal } from "../store";

export default function TeamScore({ color }: { color: TeamColor}) {

    return (
        <div className={`team-score ${color}`}>
            <div className={'team-score__color-box'}></div>
            <div className={'team-score__score'}>{scoreSignal.value[color]}</div>
        </div>
    );
}