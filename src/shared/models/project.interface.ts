import { IWorkDay } from './work-day.interface';

export interface IProject {
    id?: number;
    name: string;
    workDays: IWorkDay[];
    settings: IProjectSettings;
}

export interface IProjectSettings {
    baseWorkTime: number;
    ticketing: boolean;
    git: boolean;
}
