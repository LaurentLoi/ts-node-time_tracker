import { ITaskTimeRange } from '../../../shared/models/task-time-range.interface';
import { IWorkDay } from '../../../shared/models/work-day.interface';
import { IProjectSettings } from '../../../shared/models/project.interface';

export const workDayPrinter = (workDay: IWorkDay, settings: IProjectSettings): void => {
    console.log(`---`);
    console.log(`   ${workDay.id}   Date: ${workDay.date.toLocaleDateString()}`);
    console.log(`       Total time: ${workDay.totalTime} hours`);
    console.log(`       Tasks: `);
    workDay.taskTimeRange.forEach((taskRange: ITaskTimeRange) => {
        console.log(`           Task name: ${taskRange.name}`);
        console.log(`           Task duration: ${taskRange.duration}`);
        if (settings.ticketing) {
            console.log(`           Ticket code: ${taskRange.code}`);
        }
        if (settings.git) {
            console.log(`           Commit message: ${taskRange.commitMessage}`);
        }
        console.log(`---`);
    })
}
