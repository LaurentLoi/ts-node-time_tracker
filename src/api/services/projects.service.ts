import { projects } from '../../shared/mocks/projects.mock';
import { IProject } from '../../shared/models/project.interface';

/**
 * Service Methods
 */
export const findAll = async (): Promise<IProject[]> => Object.values(projects);

export const find = async (id: number): Promise<IProject> => projects[id];

export const create = async (newProject: IProject): Promise<IProject> => {
    const projects: IProject[] = await findAll();
    const id = projects.length + 1;

    projects[id] = {
        id, ...newProject,
    };
    return projects[id];
};

export const update = async (id: number, projectUpdate: IProject): Promise<IProject | null> => {
    const project = await find(id);
    if (!project) {
        return null;
    }
    projects[id] = {
        id, ...projectUpdate, // todo improve update on present fields only
    };
    return projects[id];
};

export const remove = async (id: number): Promise<null | void> => {
    const project = await find(id);
    if (!project) {
        return null;
    }
    delete projects[id];
};
