import { Textarea } from '../../components/Textarea'
import { Noteitem } from '../../components/Noteitem'
import { Section } from '../../components/Section'
import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Link } from 'react-router-dom'


import { Container, Form } from "./styles";

export function New() {
    return (
        <Container>
            <Header />
            <main>
                <Form>
                    <header>
                        <h1>Criar nota</h1>
                        <Link to="/">Voltar</Link>
                    </header>

                    <Input placeholder="Título" />
                    <Textarea placeholder="Observações" />

                    <Section title="Links úteis">
                        <Noteitem value="https://rocketseat.com.br" />
                        <Noteitem isNew placeholder="Novo link" />
                    </Section>

                    <Section title="Marcadores">
                        <div class="tags">
                            <Noteitem value="React" />
                            <Noteitem isNew placeholder="Nova tag" />
                        </div>
                    </Section>

                    <Button title="Salvar"/>
                </Form>
            </main>
        </Container>
    );
}