import { useEffect, useState } from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import UserService from "../service/user";
import constants from "../utils/constants";

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
  width: 40%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const Register = () => {
  const [user, setUser] = useState(null)
  const [warningMessage, setWarningMessage] = useState(null)

  const createUser = async () => {

      const verifyPass = user.password !== user.passwordCombine ? false : true

      if(!verifyPass) {
        return setWarningMessage(constants.WARNING_MESSAGE.PASS_COMBINE)
      }

      const newUser = {
        name: user.name,
        email: user.email,
        password: user.password
      }

      const response = await UserService.createUser(newUser)

      console.log('criou: ', response)

      return response

  }

  useEffect(() => {
    console.error('Error/Warning: ', warningMessage)
  }, [warningMessage])

  useEffect(() => {
    console.log('user: ', user)
  }, [user])

  return (
    <Container>
      <Wrapper>
        <Title>CRIE SUA CONTA</Title>
        <Form>
          <Input placeholder="name" onChange={(e) => setUser({...user, name: e.target.value})} />
          <Input placeholder="email" onChange={(e) => setUser({...user, email: e.target.value})} />
          <Input placeholder="password" onChange={(e) => setUser({...user, password: e.target.value})} />
          <Input placeholder="confirm password" onChange={(e) => setUser({...user, passwordCombine: e.target.value})} />
          <Agreement>
            Ao criar uma conta, concordo com o processamento dos meus dados pessoais
             dados de acordo com o <b>POLITICA DE PRIVACIDADE</b>
          </Agreement>
          <Button onClick={createUser()}>Criar</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
