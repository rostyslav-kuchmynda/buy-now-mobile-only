import { createSelector } from '@reduxjs/toolkit';
import { UIStoreSlice, UI_SLICE_ID } from './types';

const rootUISelector = (state: UIStoreSlice) => state[UI_SLICE_ID];

export const getIsButtonVisible = createSelector(rootUISelector, state => state.buttonVisible);
export const getTotalProtectMeBtnClicks = createSelector(rootUISelector, state => state.protectMeNowTotal);
