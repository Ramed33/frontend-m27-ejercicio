import { Link } from "react-router-dom";
import { MainHeader, TitleHeader, NavHeader } from "./styles";

const Header = () => {
    return (
        <MainHeader class="header">
            <TitleHeader>On Line Store</TitleHeader>
                <NavHeader>
                    <Link to="/login">Login</Link>
                </NavHeader>
        </MainHeader>
    );
}

export default Header;