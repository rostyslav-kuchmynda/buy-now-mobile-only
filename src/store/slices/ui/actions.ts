import { createAction } from '@reduxjs/toolkit';

import { UI_SLICE_ID } from './types';

export const uiIsButtonVisible = createAction<boolean>(`${UI_SLICE_ID}/isButtonVisible`);
export const uiProtectionButtonClick = createAction<number>(`${UI_SLICE_ID}/protectionButtonClick`);
