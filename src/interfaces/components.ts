export interface video {
    tipo: 'video',
    titulo: string,
    url: string
}

export interface parrafo {
    tipo: 'parrafo',
    subtitulo: string,
    texto: string
}

export interface enlace {
    tipo: 'enlace',
    nombre: string,
    url: string
}

export interface documento {
    tipo: 'documento',
    nombre: string,
    url: string
}

export type componente = | video | parrafo | enlace | documento;

export interface informe {
    fecha: Date,
    imagen: string,
    secciones: componente[]
}

export interface usuario {
    carnet: string,
    grupo: string,
    nombre: string,
    informes: informe[]
}