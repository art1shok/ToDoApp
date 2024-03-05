export interface Task {
  id: number
  text: string
  completed: boolean
  order: number
}

export interface TasksState {
  tasks: Task[]
}
