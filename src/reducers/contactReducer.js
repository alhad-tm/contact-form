
import { createSlice } from '@reduxjs/toolkit';
import { sendContactForm } from '../actions/contactActions';

const initialState = {
  loading: false,
  error: null,
  success: false,
};

const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(sendContactForm.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(sendContactForm.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(sendContactForm.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default contactSlice.reducer;
