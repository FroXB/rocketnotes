import { RiShutDownLine } from 'react-icons/ri'
import { Container, Profile, Logout } from "./styles";

export function Header() {
    return (
        <Container>

            <Profile to="/profile">
                <img src="https://github.com/FroXB.png" alt="Foto do usúario" />

                <div>
                    <span>Bem-vindo</span>
                    <strong>Rafael Barbosa</strong>
                </div>
            </Profile>

            <Logout>
                <RiShutDownLine />
            </Logout>

        </Container>
    )
}