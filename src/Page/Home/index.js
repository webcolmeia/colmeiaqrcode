import React from 'react';
import { Container } from '../../Components/Contaier';
import { Main } from '../../Components/Main';
import { Button } from '../../Components/Button';

const Home = () => {
    return (
        <Container>
            <Main>
                <h1>
                    Olá, seja bem vindo(a)
                </h1>
                <p>
                    Escolha abaixo qual tipo de Qr Code você gostaria de criar.
                </p>
                <Button bg='primary' to="/qrcode/text">Texto</Button>
                <Button bg='primary' to="/qrcode/phone">Telefone</Button>
                <Button bg='primary' to="/qrcode/url">Url</Button>
            </Main>
        </Container>
    );
}

export default Home;