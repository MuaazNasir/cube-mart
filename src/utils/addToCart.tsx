"use client"
import { addProduct } from "@/redux/slices/useReducer";
import { useDispatch } from "react-redux";


const addToCart = (_id: string, setShowAlert: any) => {
    const dispatch = useDispatch()
    dispatch(
        addProduct([`"${_id}"`])
    );
    setShowAlert(true)
}

export default addToCart