type Props = {
  userName: string;
  datePosted: string;
  idUser: string;
};

export const InformationByUser = ({ userName, datePosted, idUser }: Props) => {
  return (
    <div className="mt-2">
      {/* Nombre del usuario */}
      <span className="text-lg">{userName} </span>

      {/* Contenedor para la fecha y carne del usuario */}
      <div className="flex text-subtitle items-center">
        {/* Fecha de publicación */}
        <span className="mr-1">{datePosted} </span>
        {/* Separador */}
        <span className="mb-2"> . </span>
        {/* Carne del estudiante */}
        <span className="ml-1"> {idUser} </span>
      </div>
    </div>
  );
};
