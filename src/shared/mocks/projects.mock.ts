import { IProject } from '../models/project.interface';

export const projects: IProject[] = [
    {
        id: 1,
        name: 'project-1',
        settings: {
            baseWorkTime: 8,
            ticketing: false,
            git: false
        },
        workDays: [
            {
                id: 1,
                date: new Date(),
                startTime: new Date().setHours(9),
                endTime: new Date().setHours(18),
                totalTime: 8,
                taskTimeRange: [
                    {
                        id: 1,
                        name: 'task-1',
                        timers: [
                            {
                                startTime: new Date().setHours(9),
                                endTime: new Date().setHours(13)
                            }
                        ],
                        duration: 4
                    },
                    {
                        id: 2,
                        name: 'task-2',
                        timers: [
                            {
                                startTime: new Date().setHours(14),
                                endTime: new Date().setHours(14)
                            }
                        ],
                        duration: 8
                    }
                ]
            }
        ]
    }
]
