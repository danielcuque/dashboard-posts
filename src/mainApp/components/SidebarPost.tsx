type Props = {
  userName: string;
};

export const SidebarPost = ({ userName }: Props) => {
  return (
    <aside className="w-64">
      <img
        src="https://portal.ingenieria.usac.edu.gt/images/logo_facultad/fiusac_negro.png"
        alt="Logo Fiusac"
        className="w-80 ml-2"
      />
      <div>
        <h1 className="text-lg font-bold">Más publicaciones de {userName} </h1>
        <h1 className="text-lg font-bold">Práctica 1</h1>
        <p>Desarrollo Web</p>
      </div>
    </aside>
  );
};
