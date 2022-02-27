const prompt = require('prompt-sync')({ sigint: true });

import { IProject } from '../../../shared/models/project.interface';
import { promptExitCheck } from '../../loop/exit';
import { workDayPrinter } from './work-day.printer';
import { IWorkDay } from '../../../shared/models/work-day.interface';

export const projectPrinter = (project: IProject): void => {
    console.log('');
    console.log(`   Project: ${ project.id } - ${ project.name }`);
    console.log(`   Workdays: ${ project.workDays.length }`);
    console.log(`   Settings: `);
    console.log(`       Base work time: ${ project.settings.baseWorkTime } hours`);
    console.log(`       Ticketing enabled: ${ project.settings.ticketing }`);
    console.log(`       Git enabled: ${ project.settings.git }`);
    console.log(``);
};

export const projectActionPrinter = (project: IProject): void => {
    console.log(`-----`);
    console.log(`Actions: `);
    console.log(`1. List all work days.`);
    console.log('   > To exit, type \'q\' or \'exit\'.');
    console.log('');
    console.log('What do you want to do ?');

    const answer = prompt('  > ') || '';

    if (!promptExitCheck(answer)) {
        switch (answer) {
            case '1':
                console.log(`---`);
                console.log(`List of all work days of project: ${project.name}`);
                project.workDays.forEach((workday: IWorkDay) => workDayPrinter(workday, project.settings));
                break;
        }
    }
    prompt('');
};
