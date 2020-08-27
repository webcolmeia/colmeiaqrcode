import React, { useState } from 'react';
import { Container } from '../../Components/Contaier';
import { Main } from '../../Components/Main';
import QRCode from "react-qr-code";
import { Button } from '../../Components/Button';

const Home = () => {
    return (
        <Container>
            <Main>
                <h1>
                    Olá, seja bem vindo(a)
                </h1>
                <h3>Vamos criar um Qr Code?</h3>
                <p>
                    Escolha abaixo qual tipo de Qr Code você gostaria de criar.
                </p>
                <Button bg='primary'>Button</Button>
            </Main>
        </Container>
    );
}

export default Home;