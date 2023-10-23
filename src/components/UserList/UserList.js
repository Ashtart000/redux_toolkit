import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUsers } from 'store/slices/usersSlice';

const UserList = (props) => {
    const { users, isLoading, error } = useSelector((state) => state.users);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUsers());
    }, [])

    return (
        <>
            {isLoading && <div>Loading...</div>}
            {error && <div>ERROR</div>}
            {users.length > 0 && users.map((user) => <article>{JSON.stringify(user)}</article>)}
        </>
    );
}

export default UserList;
