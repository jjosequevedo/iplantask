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

export interface NavbarProps {
    title: string;
}

export interface ColumnInterface {
    id: string;
    label: string;
    tasks: Array<TaskInterface>
}

export interface DraggableCardProps {
    column: ColumnInterface;
    index: number;
    item: TaskInterface;
    setItem?: Function;
}

export interface ButtonProps {
    title?: string;
    icon?: IconProp;
    iconClass?: string;
    onClick?: Function;
    classes?: string;
    modalId?: string;
    children?: React.ReactNode;
}

export interface TaskModalProps {
    title?: string;
    column: ColumnInterface;
    onSubmitForm?: Function;
    button?: ButtonProps;
    item?: TaskInterface
}

export interface CardProps {
    column: ColumnInterface;
    task: TaskInterface;
    setTask?: Function;
}
