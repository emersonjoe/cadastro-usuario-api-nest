import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { IsNomeUsuarioUnico } from './is-nome-de-usuario-unico.validator';

export class Usuario {
  id: number;

  @IsNomeUsuarioUnico({
    message: 'nomeDeUsuario precisa ser único',
  })
  @IsNotEmpty({
    message: 'nomeDeUsuario é obrigatório',
  })
  @IsString()
  nomeDeUsuario: string;

  @IsEmail()
  email: string;

  @IsNotEmpty()
  senha: string;

  @IsNotEmpty({
    message: 'nomeCompleto é obrigatório',
  })
  nomeCompleto: string;
  dataDeEntrada: Date;
}
