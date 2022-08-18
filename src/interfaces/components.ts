import { Timestamp } from "firebase/firestore";

export interface video {
    id?: string,
    tipo: 'video',
    titulo: string,
    url: string
}

export interface parrafo {
    id?: string,
    tipo: 'parrafo',
    subtitulo: string,
    texto: string
}

export interface enlace {
    id?: string,
    tipo: 'enlace',
    nombre: string,
    url: string
}

export interface documento {
    id?: string,
    tipo: 'documento',
    nombre: string,
    url: string
}

export type componente = | video | parrafo | enlace | documento;

export interface informe {
    id?: string,
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