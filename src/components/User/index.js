import { NameUser, TitleUser } from "./styles";

const User = ({user}) => {
    return (
        <section className="user">
            <TitleUser><NameUser>User:</NameUser> {user}</TitleUser>
        </section>
    );
}

export default User;