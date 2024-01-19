import {createSlice} from "@reduxjs/toolkit";
const initialState={
    cars:["Model S","Model 3","Model 7","Model 9","Model X"]
    // "Solar Panels","Accesories"
}

const carSlice = createSlice({
    name: "car",
    initialState,
    reducers:{}
})
export const selectCars=state => state.car.cars
export default carSlice.reducer