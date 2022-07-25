import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  z-index: 100;
  bottom: 0;
  display: flex;
  position: fixed;
  width: 100%;
  height: 180px;
  justify-content: center;
  align-items: start
  ${mobile({
    height: '350px',
    bottom: '10px'
})}
`;

const ContainerPopup = styled.div`
    display: flex;
    flex-direction: row;
    width: 80%;
    height: 100px;
    padding: 15px;
    background-color: #fff;
    align-items: center;
    border-radius: 10px;
    box-shadow: 0px 6px 8px rgba(25, 50, 47, 0.08),0px 3px 4px rgba(18, 71, 52, 0.02), 0px 1px 16px rgba(18, 71, 52, 0.03);
  ${mobile({
    height: '350px',
    width: '100%'
})}
`;

const ContainerTextTitle = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    padding: 20px;
    `;

const TextTitle = styled.h2``;

const TextBody = styled.p``;

const TextButtom = styled.p`
        margin-top: 4px;
        font-weight: bold;
    `;

const ContainerButtom = styled.div`
    height: 30px;
    background-color: #05DA1B;
    border-radius: 10px;
    box-shadow: 0px 6px 8px rgba(25, 50, 47, 0.08),0px 3px 4px rgba(18, 71, 52, 0.02), 0px 1px 16px rgba(18, 71, 52, 0.03);
    padding: 10px;
    text-align: center;
    justify-content: center;
    color: #fff;
`;

const Categories = () => {
    return (
        <Container>
            <ContainerPopup>
                <ContainerTextTitle>
                    <TextTitle>Aviso de Cookies:</TextTitle>
                    <TextBody>
                        Quando você acessa este site, podem vir a ser coletados
                        alguns dados relacionados ao seu dispositivo, bem como
                        cookies, a fim de que possamos operacionalizar os nossos
                        sistemas e fornecer conteúdos personalizados para você.
                        Para saber mais sobre cookies acesse a nossa Política de
                        Privacidade. Para aceitar, clique no botão "Aceitar Cookies",
                        ou, caso não aceite, marque aqui suas preferências
                    </TextBody>
                </ContainerTextTitle>
                <ContainerButtom>
                    <TextButtom>
                        Aceitar Cookies
                    </TextButtom>
                </ContainerButtom>
            </ContainerPopup>
        </Container>
    );
};

export default Categories;
