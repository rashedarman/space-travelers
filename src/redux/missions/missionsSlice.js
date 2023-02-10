import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api from '../../api';

const FETCH = 'missions/FETCH';

const initialState = {
  missions: [],
};

export const getMissions = createAsyncThunk(FETCH, async () => {
  const missions = await api.get('/missions');
  return missions.data.map((mission) => ({
    id: mission.mission_id,
    name: mission.mission_name,
    description: mission.description,
    reserved: false,
  }));
});

const missionsSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {
    reserveMission(state, action) {
      const missions = state.missions.map((mission) => {
        if (mission.id === action.payload) {
          return {
            // set the reverse value
            ...mission,
            reserved: !mission.reserved,
          };
        }
        return mission;
      });
      return { ...state, missions };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getMissions.fulfilled, (state, action) => ({
      ...state,
      missions: action.payload,
    }));
  },
});

export const { reserveMission } = missionsSlice.actions;
export default missionsSlice.reducer;
