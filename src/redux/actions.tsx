// Types

export const ADD_NOTES = "ADD_NOTES";
export const SET_USERNAME = "SET_USERNAME";
export const SET_ONLINE = "SET_ONLINE";
export const SET_GAME_TAB_HIGHLIGHT = "SET_HIGHLIGHT";
export const UPDATE_CHAT_HIGHLIGHT = "UPDATE_CHAT_HIGHLIGHT";

interface AddNotesAction {
  type: typeof ADD_NOTES;
  text: string;
}

interface SetGameTabHighlight {
  type: typeof SET_GAME_TAB_HIGHLIGHT;
  value: boolean;
  index: number;
}

interface SetUsernameAction {
  type: typeof SET_USERNAME;
  text: string;
}

interface SetOnlineAction {
  type: typeof SET_ONLINE;
  value: boolean;
}

interface UpdateChatHighlight {
  type: typeof UPDATE_CHAT_HIGHLIGHT;
  player: string;
  color: string;
}

export type ActionTypes = AddNotesAction | SetGameTabHighlight | SetUsernameAction | SetOnlineAction | UpdateChatHighlight;

// Actions

export function addNotes(text: string): ActionTypes {
  return {
    type: ADD_NOTES,
    text,
  };
}

export function setGameTabHighlight(value: boolean, index: number): ActionTypes {
  return {
    type: SET_GAME_TAB_HIGHLIGHT,
    value,
    index
  }
}

export function setUsername(text: string): ActionTypes {
  return {
    type: SET_USERNAME,
    text,
  };
}

export function setOnline(value: boolean): ActionTypes {
  return {
    type: SET_ONLINE,
    value,
  };
}

export function updateChatHighlight(player: string, color: string) {
  return {
    type: UPDATE_CHAT_HIGHLIGHT,
    player: player,
    color: color,
  };
}
