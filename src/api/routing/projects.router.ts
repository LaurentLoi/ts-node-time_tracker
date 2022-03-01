/**
 * Required External Modules and Interfaces
 */
import express, { Request, Response } from 'express';
import { IProject } from '../../shared/models/project.interface';
import * as ProjectService from '../services/projects.service';

/**
 * Router Definition
 */
export const projectsRouter = express.Router();

/**
 * Controller Definitions
 */
// GET projects.ts
projectsRouter.get('/', async (req: Request, res: Response) => {
    try {
        const projects: IProject[] = await ProjectService.findAll();
        res.status(200).send(projects);
    } catch (e: any) {
        res.status(500).send(e.message);
    }
});

// GET projects.ts/:id
projectsRouter.get('/:id', async (req: Request, res: Response) => {
    const id: number = +req.params.id;
    try {
        const project: IProject = await ProjectService.find(id);
        if (project) {
            return res.status(200).send(project);
        }

        res.status(404).send('project not found');
    } catch (e: any) {
        res.status(500).send(e.message);
    }
});

// POST projects.ts
projectsRouter.post('/', async (req: Request, res: Response) => {
    try {
        const project: IProject = req.body;
        const newProject = await ProjectService.create(project);
        res.status(201).json(newProject);
    } catch (e: any) {
        res.status(500).send(e.message);
    }
});

// PUT projects.ts/:id
projectsRouter.put('/:id', async (req: Request, res: Response) => {
    const id: number = +req.params.id;
    try {
        const projectUpdate: IProject = req.body;
        const existingProject: IProject = await ProjectService.find(id);
        if (existingProject) {
            const updatedProject: IProject | null = await ProjectService.update(id, projectUpdate);
            return updatedProject ? res.status(200).json(updatedProject) : res.status(404).send('project not found');
        }
    } catch (e: any) {
        res.status(500).send(e.message);
    }
});

// DELETE projects.ts/:id
projectsRouter.delete('/:id', async (req: Request, res: Response) => {
    try {
        const id: number = +req.params.id;
        await ProjectService.remove(id);
        res.sendStatus(204);
    } catch (e: any) {
        res.status(500).send(e.message);
    }
});
