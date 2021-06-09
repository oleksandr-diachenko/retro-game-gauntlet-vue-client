import {ConsoleType} from "@/model/ConsoleType";

export class GameConsole {
    constructor(
        public consoleType: ConsoleType,
        public gameCount: number
    ) {
    }
}