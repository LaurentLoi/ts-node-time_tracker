import { IProject } from '../../../shared/models/project.interface';

export const baseMenuPrinter = (projects: IProject[]): void => {
    console.log('\n');
    console.log(
        '╔══════════════════════════════════════════════════════════════════════╗'
    );
    console.log(
        '║   > Hey there !                                                      ║'
    );
    console.log(
        "║   > Here are the current registered projects:                        ║"
    );
    console.log(
        '║                 ------                                               ║'
    );
    console.log(
        '║   Projects                                                           ║'
    );
    console.log(
        '║                                                                      ║'
    );
    for (const project of projects) {
        console.log(`║   > ${project.id}: ${project.name}`);
    }
    console.log(
        '║                 ------                                               ║'
    );
    console.log(
        "║   > To get select a project, type its id and press 'enter'.          ║"
    );
    console.log(
        '║   > To exit, type \'q\' or \'exit\'.                                     ║',
    );
    console.log(
        '╚══════════════════════════════════════════════════════════════════════╝'
    );
}
