import { Injectable } from '@nestjs/common';
import { Usuario } from './usuario.entity';

@Injectable()
export class UsuarioService {
  private usuarios: Array<Usuario> = [
    {
      id: 1,
      nomeDeUsuario: 'joao.silva',
      email: 'joao@joao.com.br',
      senha: '123',
      nomeCompleto: 'Joao da Silva',
      dataDeEntrada: new Date(),
    },
  ];

  public cria(usuario: Usuario): Usuario {
    this.usuarios.push(usuario);

    return usuario;
  }

  buscaPorNomeDeUsuario(nomeDeUsuario: string) {
    return this.usuarios.find(
      (usuario) => usuario.nomeDeUsuario == nomeDeUsuario,
    );
  }
}
