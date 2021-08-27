
export interface UsuarioRequest {
    id: number;
    nombre: string;
    apellido: string;
    sexo: Sexo;
    // sexoDescripcion: string;
    edad: number;
  }

export interface Sexo {
    id: number;
    nombre: string;
  }


