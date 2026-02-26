import { Action, createReducer, on } from '@ngrx/store';
import * as SidebarActions from './sidebar.actions';

export const SIDEBAR_FEATURE_KEY = 'sidebar';

export interface SidebarState {
  activeMenu?: string;
}

export const initialState: SidebarState = {};

export const reducer = createReducer(
  initialState,
  on(SidebarActions.SetActiveMenu, (state, { menuName }) => ({
    ...state,
    activeMenu: menuName,
  })),
);

export function SidebarReducer(state: SidebarState | undefined, action: Action) {
  return reducer(state, action);
}
