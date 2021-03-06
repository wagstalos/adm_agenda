import React from 'react';
import { Form, FormGroup, Input, Button } from 'reactstrap';

function Login() {
  return (
    <div className="container-login">
      <div className="blurred-box" >
        <div className="login user-login-box shadow-sm text-light">
          <Form className="form-signin text-center">
            <img className="mb-4" src="images/logo.png" alt="Celke" width="100" />
            <h1 className="h3 mb-3 font-weight-normal mb-4">Área Restrita</h1>
            <FormGroup>
              <Input type="email" name="email" id="email" placeholder="E-mail do usuário" />
            </FormGroup>
            <FormGroup>
              <Input type="password" name="senha" id="senha" placeholder="Senha do usuário" />
            </FormGroup>
            <Button color="primary btn-block mt-4">Acessar</Button>
            <p className="text-center mt-2">Esqueceu a senha?</p>
          </Form>
        </div>
      </div>

    </div>
  )
}

export default Login;