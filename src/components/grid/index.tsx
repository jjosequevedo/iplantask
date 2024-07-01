'use client';

import { DragDropContext, DropResult, Droppable } from 'react-beautiful-dnd';
import { DraggableCard } from "../draggable";
import React, { useEffect } from 'react';
import { ColumnInterface, TaskInterface } from '@/interfaces';
import axios from 'axios';
import { TaskModal } from '../taskmodal';
import { Button } from '../button';
import { faAdd } from '@fortawesome/free-solid-svg-icons';
import { icon } from '@fortawesome/fontawesome-svg-core';

const Grid = () => {

  const [columns, setColumns] = React.useState<Array<ColumnInterface>>([]);

  const addTask = (task: TaskInterface, columnId: string) => setColumns(columns.map(c => {
    if (c.id == columnId) {
      c.tasks.push(task);
    }
    return c;
  }));

  const editTask = (task: TaskInterface, columnId: string) => setColumns(columns.map(c => {
    if (c.id == columnId) {
      let index = c.tasks.findIndex(t => t.id == task.id);
      c.tasks = [
        ...c.tasks.slice(0, index),
        task,
        ...c.tasks.slice(index + 1)
      ];
    }
    return c;
  }));

  useEffect(() => {
    axios.get('/api/load')
      .then(response => {
        if (response.status === 200) {
          let d = response.data;
          setColumns(d);
        }
      })
      .catch(e => console.error(e));
  }, []);

  const onDragEnd = (result: DropResult) => {
    if (!result.destination) return;
    const { source, destination } = result;
    if (source.droppableId !== destination.droppableId) {
      const sourceColumn = columns.filter(c => c.id == source.droppableId).shift();
      const destColumn = columns.filter(c => c.id == destination.droppableId).shift();
      if (sourceColumn && destColumn) {
        const sourceItems = [...sourceColumn.tasks];
        const destItems = [...destColumn.tasks];
        const [removed] = sourceItems.splice(source.index, 1);
        destItems.splice(destination.index, 0, removed);
        setColumns(columns.map(c => {
          if (c.id == source.droppableId) {
            c.tasks = sourceItems;
          }
          if (c.id == destination.droppableId) {
            c.tasks = destItems;
          }
          return c;
        }));
        return;
      }
      if (sourceColumn) {
        const copiedItems = [...sourceColumn.tasks];
        const [removed] = copiedItems.splice(source.index, 1);
        copiedItems.splice(destination.index, 0, removed);
        setColumns(columns.map(c => {
          if (c.id == source.droppableId) {
            c.tasks = copiedItems;
          }
          return c;
        }));
      }
    }
  };


  return (
    <div className="grid grid-cols-3 gap-2">
      {
        columns.map(c => (
          <div key={c.id} className="bg-slate-300 rounded-t p-2">
            <h2 className="text-center uppercase text-black font-semibold">{c.label}</h2>
          </div>
        ))
      }
      <DragDropContext onDragEnd={onDragEnd}>
        {
          columns.map((column, i) => (
            <div key={i} className="flex flex-col gap-2 bg-slate-300 rounded">
              <TaskModal
                column={column}
                onSubmitForm={addTask}
                button={{
                  icon: faAdd,
                  title: 'Add',
                  modalId: 'add-task-modal-' + i,
                  classes: 'bg-transparent hover:bg-teal-500 text-gray-700 font-semibold hover:text-white py-3 px-4 border border-gray-300 hover:border-transparent rounded flex gap-1 justify-center items-center'
                }} />
              <Droppable droppableId={column.id}>
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                  >
                    <div className='flex flex-col gap-1 p-1'>
                      {
                        column.tasks.map((item, index) => (
                          <DraggableCard
                            key={item.id}
                            column={column}
                            item={item}
                            index={index}
                            setItem={editTask} />
                        ))
                      }
                      {provided.placeholder}
                    </div>
                  </div>
                )}
              </Droppable>
            </div>
          ))
        }
      </DragDropContext>
    </div>
  )
};

export default Grid;
