import { createAction, props } from "@ngrx/store";

export const NavigateToTasksPage = createAction(
    '[SideBar] Navigate To Tasks Page'
)
export const NavigateToDashboardPage = createAction(
    '[SideBar] Navigate To Dashboard Page '
)
export const NavigateToNotesPage = createAction(
    '[SideBar] Navigate To Notes Page'
)
export const NavigateToCalendarPage = createAction(
    '[SideBar] Navigate To Calendar Page'
)
export const NavigateToProjectsPage = createAction(
    '[SideBar] Navigate To Projects Page'
)
export const SetActiveMenu = createAction(
    '[SideBar] Set Active Menu',
    props<{menuName: string}>()
)       