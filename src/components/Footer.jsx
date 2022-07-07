import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  WhatsApp,
  Room,
  Twitter,
} from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  background-color: black;
  color: white;
  ${mobile({ flexDirection: "column" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "black" })}

`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
    width: 50%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>ShopSmart</Logo>
        <Desc>
          A maior e mais completa loja de eletrônicos 
          e celulares do litoral do Paraná. Venha conferir 
          os nosso produtos Novos e Seminovos.
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="19D909">
            <WhatsApp />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Buscar por Interesse</Title>
        <List>
          <ListItem>iPhone</ListItem>
          <ListItem>Xiaomi</ListItem>
          <ListItem>Capas</ListItem>
          <ListItem>Pelicolas</ListItem>
          <ListItem>SmartWatch</ListItem>
          <ListItem>Acessórios</ListItem>
          <ListItem>Meu Carrinho</ListItem>
          <ListItem>Termos de uso</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contato</Title>
        <ContactItem>
          <Room style={{marginRight:"10px"}}/> Avenida Juscelino Kubitschek 1212, 83260 000, Matinhos PR - Brasil
        </ContactItem>
        <ContactItem>
          <Phone style={{marginRight:"10px"}}/> +55 41 9 9590-0053
        </ContactItem>
        <ContactItem>
          <MailOutline style={{marginRight:"10px"}} /> contato@shopsmartt.com.br
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;
