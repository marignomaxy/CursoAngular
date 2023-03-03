export interface Producto{
    id:string,
    title:string,
    price:number,
    pictures:Pictures[],
    descriptions:Descripcion
    thumbnail:string
}

export interface Pictures{
    url:string
}

export interface Descripcion{
    plain_text:string
}

export interface ProductoCompleto{
    detalle:Producto,
    descripcion:Descripcion
}