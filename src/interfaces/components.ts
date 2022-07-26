import { Timestamp } from "firebase/firestore";

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
    fecha: Timestamp,
    imagen: string,
    titulo: string,
    secciones: componente[],
    categorias: string[]
}

export interface usuario {
    carnet: string,
    grupo: string,
    nombre: string,
    imagen: string,
    informes: informe[]
}