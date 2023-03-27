import {Link, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {profileUser} from "../service/usersService";

export default function Menu() {
    const dispatch = useDispatch()
    const id = useSelector(state => {
        return  state.users.users.idUser;
    })
    useEffect(() => {
        dispatch(profileUser(id))
    },[])
    const users = useSelector(state => {
        return  state.users.profile.user;
    })
    return (
        <>
        </>
    )
}