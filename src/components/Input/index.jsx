import { Container } from './styles';

export function Input({ icon: Icon, ...rest }) {
    return (
        <Container>
            {Icon && <Icon sice={20}/>}
            <input {...rest} />

        </Container>
    )
}