import { configureStore } from '@reduxjs/toolkit'
import usersReducer from '../features/users/usersSlice'
import ngoReducer from '../features/ngo/ngoSlice'
import nodalReducer from '../features/nodal/NodalSlice'
import FoundChildReducer from '../features/foundchild/FoundChildSlice'
import TicketSlice from '../features/ticket/TicketSlice'


export const store = configureStore({
  reducer: {
    users: usersReducer,
    ngo: ngoReducer,
    nodal: nodalReducer,
    foundchild: FoundChildReducer,
    ticketslice: TicketSlice
  },
})
