
import { createAsyncThunk } from '@reduxjs/toolkit';

export const sendContactForm = createAsyncThunk(
  'contact/sendForm',
  async (formData, thunkAPI) => {
    try {
      // Simulate API request
      await new Promise(resolve => setTimeout(resolve, 1000));
      return formData;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
   