import React, { useState } from "react";
import { Container } from "../../Components/Contaier";
import { Main } from "../../Components/Main";
import { PageContainer, Input, Select } from "./style";
import QRCode from "react-qr-code";

const Urlqr = () => {
  const [urlValue, setUrlValue] = useState("");
  const [sizeValue, setSizeValue] = useState(128);
  const [fgValue, setFgValue] = useState("#000000");
  const [bgValue, setBgValue] = useState("#FFFFFF");
  const [lavelValue, setLavelValue] = useState("L");

  return (
    <Container>
      <Main>
        <h1>Gerar Qr Code de urls</h1>
        <PageContainer>
          <div>
            <Input>
              <Input.Title>Url:</Input.Title>
              <Input.Field
                type="text"
                value={urlValue}
                onChange={(text) => setUrlValue(text.target.value)}
              />
            </Input>
            <Input>
              <Input.Title>Tamanho do qr code:</Input.Title>
              <Input.Field
                type="number"
                onChange={(text) => setSizeValue(text.target.value)}
                value={sizeValue}
              />
            </Input>
            <Input>
              <Input.Title>Cor primaria:</Input.Title>
              <Input.Field
                value={fgValue}
                type="color"
                onChange={(text) => setFgValue(text.target.value)}
              />
            </Input>
            <Input>
              <Input.Title>Cor do fundo:</Input.Title>
              <Input.Field
                value={bgValue}
                type="color"
                onChange={(text) => setBgValue(text.target.value)}
              />
            </Input>
            <Select>
              <Select.Title>Level:</Select.Title>
              <Select.Field
                value={lavelValue}
                onChange={(text) => setLavelValue(text.target.value)}
              >
                <option selected value="L">
                  L
                </option>
                <option value="M">M</option>
                <option value="Q">Q</option>
                <option value="H">H</option>
              </Select.Field>
            </Select>
          </div>
          <div>
            <QRCode
              value={urlValue}
              size={sizeValue}
              bgColor={bgValue}
              fgColor={fgValue}
              level={lavelValue}
            />
          </div>
        </PageContainer>
      </Main>
    </Container>
  );
};

export default Urlqr;
