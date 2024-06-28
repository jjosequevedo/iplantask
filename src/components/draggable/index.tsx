'use client';

import { DraggableCardProps } from '@/interfaces';
import React, { useEffect } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { Card } from '../card';

export const DraggableCard: React.FC<DraggableCardProps> = ({ item, index }) => {
  const [isDraggableReady, setIsDraggableReady] = React.useState(false);

  useEffect(() => {
    setIsDraggableReady(true);
  }, []); // Empty dependency array to run only once

  return (
    isDraggableReady &&
    <Draggable key={item.id} draggableId={item.id.toString()} index={index} >
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <Card task={item} />
        </div>
      )}
    </Draggable>
  );
};
