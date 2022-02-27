import { ITaskTimeRange } from './task-time-range.interface';

export interface IWorkDay {
    id?: number;
    date: Date;
    startTime: number;
    endTime: number;
    totalTime: number;
    taskTimeRange: ITaskTimeRange[];
}
