export class SelectModel {
    id: number;
    descripcion: string;
    constructor(id: number,
      descripcion: string) {
      this.id = id || 0;
      this.descripcion = descripcion || '-';

    }
  }
