import { signal } from "@preact/signals"
import { TeamColor } from "./index"

export const scoreSignal = signal({ red: 0, blue: 0 });

export const currentTeamSignal = signal<TeamColor>("red");