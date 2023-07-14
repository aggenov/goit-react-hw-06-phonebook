import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  // Имя слайса
  name: 'contacts',
  // Начальное состояние редюсера слайса
  initialState: { contacts: [] },
  // Объект редюсеров
  reducers: {
    addContacts(state, action) {},
    deleteContacts(state, action) {},
  },
});

// Генераторы экшенов
const { addContacts, deleteContacts } = contactsSlice.actions;
// Редюсер слайса
const contactsReducer = contactsSlice.reducer;
