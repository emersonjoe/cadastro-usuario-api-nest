import { Injectable } from '@nestjs/common';
import {
  registerDecorator,
  ValidationArguments,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { UsuarioService } from './usuario.service';

@Injectable()
@ValidatorConstraint()
export class IsNomeUsuarioUnicoConstraint
  implements ValidatorConstraintInterface {
  constructor(private usuarioService: UsuarioService) {}

  validate(
    nomeDeUsuario: string,
    _validationArguments?: ValidationArguments,
  ): boolean | Promise<boolean> {
    //converte o valor pra boleano e inverte de true pra false
    return !!!this.usuarioService.buscaPorNomeDeUsuario(nomeDeUsuario);
  }
}

export function IsNomeUsuarioUnico(validationOptions?: ValidationOptions) {
  return function (object: any, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: IsNomeUsuarioUnicoConstraint,
    });
  };
}
