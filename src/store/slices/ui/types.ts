export const UI_SLICE_ID = 'ui';

export type UIStateSlice = {
  buttonVisible: boolean;
  protectMeNowTotal: number;
};

export type UIStoreSlice = { [UI_SLICE_ID]: UIStateSlice };
