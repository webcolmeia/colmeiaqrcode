import React, { useState } from 'react';
import { Container } from '../../Components/Contaier';
import { Main } from '../../Components/Main';
import { PageContainer } from './style';
import QRCode from "react-qr-code";

const Textqr = () => {

    const [textValue, setTextValue] = useState("");

    return (
        <Container>
            <Main>
                <h1>
                    Texto
                </h1>
                <PageContainer>
                    <div>
                         <textarea value={textValue} onChange={text => setTextValue(text.target.value)} />
                    </div>
                    <div>
                        <QRCode value={textValue} />
                    </div>
                </PageContainer>
            </Main>
        </Container>
    );
}

export default Textqr;