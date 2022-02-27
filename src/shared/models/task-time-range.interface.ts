import { ITimer } from './timer.interface';

export interface ITaskTimeRange {
    id?: number;
    name: string;
    timers: ITimer[];
    duration: number;
    code?: string;
    commitMessage?: string;
}
