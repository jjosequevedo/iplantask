'use client';

import { CardProps } from "@/interfaces";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { TaskModal } from "../taskmodal";

export const Card: React.FC<CardProps> = ({ column, task, setTask }) => {

    const bg_color = {
        'low': 'bg-green-500',
        'middle': 'bg-yellow-500',
        'high': 'bg-orange-500',
        'urgent': 'bg-red-500'
    };

    const due_date = task.end_date && (new Date(task.end_date));

    return (
        <div className="max-w p-6 border border-gray-400 bg-white rounded">
            <div className="flex items-center justify-between mb-2">
                <span className={`${bg_color[task.priority]} text-white text-xs font-medium me-2 px-2.5 py-0.5 rounded`}>{task.priority.toUpperCase()}</span>
                <TaskModal
                    title="Edit Task"
                    column={column}
                    item={task}
                    onSubmitForm={setTask}
                    button={{
                        icon: faEdit,
                        iconClass: 'text-gray-300 hover:text-gray-600 w-5 h-5',
                        modalId: 'add-task-modal-' + task.id,
                        classes: 'flex items-center focus:outline-none'
                    }} />
            </div>
            <a href="#">
                <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900">{task.title}</h5>
            </a>
            {
                (task.start_date || due_date) && (
                    <div className="flex items-center justify-between mb-2">
                        {
                            task.start_date && (
                                <div className="text-center font-medium text-gray-700">
                                    Start: {(new Date(task.start_date)).toLocaleDateString()}
                                </div>
                            )
                        }
                        {
                            due_date && (
                                <div className="text-center font-medium text-gray-700">
                                    {due_date.toLocaleDateString().includes('Today')
                                        ? 'Due Today'
                                        : due_date.toLocaleDateString().includes('Tomorrow')
                                            ? 'Due Tomorrow'
                                            : 'Due: ' + due_date.toLocaleDateString()}
                                </div>
                            )
                        }
                    </div>
                )
            }
        </div>
    );
}
