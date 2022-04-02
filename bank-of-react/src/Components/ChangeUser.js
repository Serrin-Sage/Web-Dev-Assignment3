function ChangeUser(props) {
    return (
        <div>
            <p>Update user name</p>
            <form onSubmit={props.changeUser}>
                <input type="text" name="user" />
                <button type="submit" />
            </form>
        </div>
    )
}

export default ChangeUser