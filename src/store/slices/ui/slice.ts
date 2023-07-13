import { createSlice } from '@reduxjs/toolkit';

import { uiIsButtonVisible, uiProtectionButtonClick } from './actions';

import { UI_SLICE_ID, UIStateSlice } from './types';

const uiInitialState: UIStateSlice = {
  buttonVisible: true,
  protectMeNowTotal: 0,
};

export const uiSlice = createSlice({
  name: UI_SLICE_ID,
  initialState: uiInitialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(uiIsButtonVisible, (state, action) => {
      state.buttonVisible = action.payload;
    });

    builder.addCase(uiProtectionButtonClick, (state, action) => {
      state.protectMeNowTotal += action.payload;
    });
  },
});
