const prompt = require('prompt-sync')({ sigint: true });

import { IProject } from '../../shared/models/project.interface';
import { exit, promptExitCheck } from '../loop/exit';
import { findAll } from '../../api/services/projects.service';
import { projectActionPrinter, projectPrinter } from '../utils/printers/project.printer';
import { baseMenuPrinter } from '../utils/printers/base-menu.printer';

export const command = 'projects';
export const desc = 'Projects cli';

export const handler = async (): Promise<void> => {
    const play = true;
    const projects: IProject[] = await findAll();

    while (play) {

        baseMenuPrinter(projects);

        const answer = prompt('> ') || '';

        if (promptExitCheck(answer)) {
            exit();
        } else {
            const projectToFind = projects.find((project: IProject) => project.id === +answer);
            if (projectToFind) {
                projectPrinter(projectToFind);
                projectActionPrinter(projectToFind);
            } else {
                console.log('unknown command: ', answer);
            }
        }
    }
};
