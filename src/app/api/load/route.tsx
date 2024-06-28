import { ColumnInterface, TaskInterface } from "@/interfaces";
import { NextResponse } from "next/server";
import { v4 as uuidv4 } from 'uuid';

export async function GET() {

    const tasks: Array<TaskInterface> = [
        {
            id: uuidv4(),
            title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent.',
            priority: 'urgent',
            end_date: '2023-06-01',
        },
        {
            id: uuidv4(),
            title: 'Class aptent taciti sociosqu ad litora torquent per conubia nostra.',
            priority: 'high',
            end_date: '2022-05-01',
        },
        {
            id: uuidv4(),
            title: 'Morbi a dui dignissim, cursus ante sed, congue ipsum.',
            priority: 'middle',
            end_date: '2022-09-01',
        },
        {
            id: uuidv4(),
            title: 'Sed tempus, ex in aliquet fermentum, nunc sapien viverra enim.',
            priority: 'low',
            end_date: '2023-10-01',
        },
    ];

    const columns: Array<ColumnInterface> = [
        {
            id: uuidv4(),
            label: 'TO DO',
            tasks: tasks
        },
        {
            id: uuidv4(),
            label: 'IN PROGRESS',
            tasks: []
        },
        {
            id: uuidv4(),
            label: 'DONE',
            tasks: []
        },
    ];

    return NextResponse.json(columns, { status: 200 })
}
