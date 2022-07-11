import styled from "styled-components";
import {mobile} from "../responsive";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: 
    url("https://www.ideiademarketing.com.br/wp-content/uploads/2014/02/apple.png")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
`;

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Login</Title>
        <Form>
          <Input placeholder="E-mail" />
          <Input placeholder="Senha" />
          <Button>LOGIN</Button>
          <Link to={'/'}>NÃO LEMBRA SUA SENHA?</Link>
          <Link to={'/register'}>CRIAR NOVA CONTA</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
