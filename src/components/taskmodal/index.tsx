'use client';

import { Priority, TaskInterface, TaskModalProps } from "@/interfaces";
import { faAdd, faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { v4 as uuidv4 } from 'uuid';

export const TaskModal: React.FC<TaskModalProps> = ({ 
    action = 'add', 
    id,
    title = 'Create new task', 
    column, 
    onSubmitForm = undefined,
    visible
}) => {

    const [isDisplayed, setDisplayed] = React.useState(false);

    const [taskItem, setTaskItem] = React.useState<TaskInterface>({
        id: uuidv4(),
        title: '',
        priority: 'low',
        start_date: '',
        end_date: '',
        description: ''
    });

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmitForm?.call(this, taskItem);
        setDisplayed(!isDisplayed);
        setTaskItem({
            id: uuidv4(),
            title: '',
            priority: 'low',
            start_date: '',
            end_date: '',
            description: ''
        });
    };

    return (
        <>
            {/* <!-- Main modal --> */}
            <div id={id} tabIndex={-1} aria-hidden="true" className={`${isDisplayed || visible ? '' : 'hidden'} place-content-center overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-screen bg-gray-900 bg-opacity-50`}>
                <div className="relative m-auto p-4 w-full max-w-md max-h-full">
                    {/* <!-- Modal content --> */}
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        {/* <!-- Modal header --> */}
                        <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                {title}
                            </h3>
                            <button onClick={() => setDisplayed(!isDisplayed)} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="crud-modal">
                                <FontAwesomeIcon icon={faClose} />
                            </button>
                        </div>
                        {/* <!-- Modal body --> */}
                        <form className="p-4 md:p-5" onSubmit={onSubmit}>
                            <div className="grid gap-4 mb-4 grid-cols-2">
                                <div className="col-span-2">
                                    <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
                                    <input type="text"
                                        name="title"
                                        id="title"
                                        placeholder="Title"
                                        required
                                        value={taskItem.title}
                                        onChange={e => setTaskItem({ ...taskItem, title: e.target.value })}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" />
                                </div>
                                <div className="col-span-2 sm:col-span-1">
                                    <label htmlFor="start_date" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Start Date</label>
                                    <input type="date"
                                        name="start_date"
                                        id="start_date"
                                        placeholder="Start Date"
                                        value={taskItem.start_date}
                                        onChange={e => setTaskItem({ ...taskItem, start_date: e.target.value })}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" />
                                </div>
                                <div className="col-span-2 sm:col-span-1">
                                    <label htmlFor="end_date" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">End Date</label>
                                    <input type="date"
                                        name="end_date"
                                        id="end_date"
                                        placeholder="End Date"
                                        value={taskItem.end_date}
                                        onChange={e => setTaskItem({ ...taskItem, end_date: e.target.value })}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" />
                                </div>
                                <div className="col-span-2">
                                    <label htmlFor="priority" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category</label>
                                    <select id="priority"
                                        name="priority"
                                        required
                                        value={taskItem.priority}
                                        onChange={e => setTaskItem({ ...taskItem, priority: (e.target.value as Priority) })}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                                        <option value='-1'>Select priority</option>
                                        <option value="low">Low</option>
                                        <option value="middle">Middle</option>
                                        <option value="high">High</option>
                                        <option value="urgent">Urgent</option>
                                    </select>
                                </div>
                                <div className="col-span-2">
                                    <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                                    <textarea id="description"
                                        rows={5}
                                        value={taskItem.description}
                                        onChange={e => setTaskItem({ ...taskItem, description: e.target.value })}
                                        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write task description here"></textarea>
                                </div>
                            </div>
                            <button type="submit" className="text-white flex gap-1 justify-center items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                <FontAwesomeIcon icon={faAdd} />
                                <span>Add new task</span>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
