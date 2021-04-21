import { Exclude, Expose } from 'class-transformer';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { IsNomeUsuarioUnico } from './is-nome-de-usuario-unico.validator';

export class Usuario {
  id: number;

  @Expose({
    name: 'userName',
  })
  @IsNomeUsuarioUnico({
    message: 'nomeDeUsuario precisa ser único',
  })
  @IsNotEmpty({
    message: 'nomeDeUsuario é obrigatório',
  })
  @IsString()
  nomeDeUsuario: string;

  @Expose({
    name: 'email',
  })
  @IsEmail()
  email: string;

  @Expose({
    name: 'password',
  })
  @Exclude({
    toPlainOnly: true,
  })
  @IsNotEmpty()
  senha: string;

  @Expose({
    name: 'fullName',
  })
  @IsNotEmpty({
    message: 'nomeCompleto é obrigatório',
  })
  nomeCompleto: string;

  @Expose({
    name: 'joinDate',
  })
  dataDeEntrada: Date;
}
