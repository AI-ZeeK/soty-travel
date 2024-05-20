import { createSlice } from "@reduxjs/toolkit";

interface initialTypes {
  openSubNav: boolean;
  isSuccessModal: boolean;
  isFailureModal: boolean;
  isFilterNav: boolean;
}

const initialState: initialTypes = {
  openSubNav: false,
  isSuccessModal: false,
  isFailureModal: false,
  isFilterNav: false,
};

export const AppSlice = createSlice({
  name: "app-slice",
  initialState,
  reducers: {
    openFilterNav: (state) => {
      state.isFilterNav = true;
    },
    closeFilterNav: (state) => {
      state.isFilterNav = false;
    },
    openSuccessModal: (state) => {
      state.isSuccessModal = true;
    },
    closeSuccessModal: (state) => {
      state.isSuccessModal = false;
    },
    openFailureModal: (state) => {
      state.isFailureModal = true;
    },
    closeFailureModal: (state) => {
      state.isFailureModal = false;
    },
    setSubNav: (state) => {
      state.openSubNav = !state.openSubNav;
    },
    closeSubNav: (state) => {
      state.openSubNav = false;
    },
  },
});
export const {
  setSubNav,
  closeSubNav,
  openSuccessModal,
  closeSuccessModal,
  openFilterNav,
  closeFilterNav,
  openFailureModal,
  closeFailureModal,
} = AppSlice.actions;
export default AppSlice.reducer;
