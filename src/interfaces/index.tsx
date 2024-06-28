import { IconProp } from "@fortawesome/fontawesome-svg-core";


export type Action = 'add' | 'edit';
export type Priority = 'low' | 'middle' | 'high' | 'urgent';

export interface TaskInterface {
    id: string;
    title: string;
    priority: Priority;
    start_date?: string;
    end_date?: string;
    description?: string;
}

export interface DraggableCardProps {
    columnId: string;
    index: number;
    item: TaskInterface;
}

export interface NavbarProps {
    title: string;
}

export interface ColumnInterface {
    id: string;
    label: string;
    tasks: Array<TaskInterface>
}

export interface ButtonProps {
    title?: string;
    icon?: IconProp;
    onClick?: Function;
    classes?: string;
    modalId?: string;
    children?: React.ReactNode;
}

export interface TaskModalProps {
    id?: string;
    action?: Action;
    title?: string;
    column: ColumnInterface;
    onSubmitForm?: Function;
    visible?: boolean;
}

export interface CardProps {
    task: TaskInterface;
}
