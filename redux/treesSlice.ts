import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { AppState } from './store'
import { fetchTrees, fetchTreeById } from './api'

type Querytype = string | string[] | undefined

export interface TreesState {
  items: []
  status: 'idle' | 'loading' | 'failed'
}

const initialState: TreesState = {
  items: [],
  status: 'idle',
}

export const loadTrees = createAsyncThunk('api/trees', async () => {
  const response = await fetchTrees()
  return response
})

export const loadTree = createAsyncThunk(
  `api/fetchTreeById`,
  async (treeId: string) => {
    const response = await fetchTreeById(treeId)
    return response
  }
)

export const treesSlice = createSlice({
  name: 'trees',
  initialState,
  reducers: {
    resetState: (state) => {
      state.items = []
      state.status = 'idle'
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadTrees.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(loadTrees.fulfilled, (state, action) => {
        state.status = 'idle'
        state.items = action.payload
      })
      .addCase(loadTree.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(loadTree.fulfilled, (state, action) => {
        state.status = 'idle'
        // TODO fix ts by normalizing state
        // @ts-ignore
        state.items.push(action.payload)
      })
  },
})

export const { resetState } = treesSlice.actions
export const selectTrees = (state: AppState) => state.trees.items
export const selectStatus = (state: AppState) => state.trees.status

export default treesSlice.reducer
