import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  width: '30px',
  height:'20px',
  padding: '30px',
  backgroundColor: 'red',
  borderRadius: '20px'
};

const BoxSlice = createSlice({
  name: "count",
  initialState,
  reducers: {
    changeWidth: (state, actions) => {
        state.width= actions.payload + 'px'
    },
    changeHeigth:(state,actions)=>{
      state.height=actions.payload + 'px'
    },
    changeBackgroundColor:(state,actions)=>{
      state.backgroundColor=actions.payload 
    },
    changeCircle:(state,actions)=>{
      state.borderRadius=actions.payload
    }

  }
});

export const { changeWidth,changeHeigth,changeBackgroundColor, changeCircle} = BoxSlice.actions;
export default BoxSlice.reducer;
