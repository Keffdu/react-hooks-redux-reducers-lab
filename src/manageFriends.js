const initialState = { friends: [] }

export function manageFriends(state = initialState, action) {
  switch (action.type) {
    case "friends/add":
      return { friends: [...state.friends, action.payload]}
    break;
    case "friends/remove":
      return { friends: state.friends.filter((friend) => friend.id !== action.payload)}
    break;
    default:
      return state
  }
}
