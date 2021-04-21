import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class Usuario {
  id: number;

  @IsNotEmpty()
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
