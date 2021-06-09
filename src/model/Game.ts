import {ConsoleType} from "@/model/ConsoleType";

export class Game {
    constructor(
        public name: string,
        public year: number,
        public consoleType: ConsoleType) {
    }
}