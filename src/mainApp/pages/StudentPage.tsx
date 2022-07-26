import { useParams, Routes, Route } from 'react-router-dom';
import { PracticeReport } from "../components";
import { SidebarPost } from "../components/SidebarPost";
import { useEffect, useState } from 'react';
import { getReportByUser } from "../../utils/getReportByUser";
import { usuario } from '../../interfaces/components';
import { StudentIndexPage } from './StudentIndexPage';

export const StudentPage = () => {
  // En esta parte se recupera de la URL la información de los integrantes del grupo

  const { nombre } = useParams();
  const [userData, setuserData] = useState<usuario>({
    carnet: '',
    grupo: '',
    nombre: '',
    informes: []
  })

  useEffect(() => {

    switch (nombre) {
      case 'damian':
        fetchData('bvDbcrrrcygJ6sBhW0IJmq14Elr1');
        break;

      case 'daniel':
        fetchData('TqLZBY3cFWb6t0Z20zNjfL5JUcB3');
        break;

      default:
        fetchData('bvDbcrrrcygJ6sBhW0IJmq14Elr1');
        break;
    }

  }, [nombre])

  const fetchData = async (id: string) => {
    const data = await getReportByUser(id) as usuario;
    setuserData(data);
  }


  return (
    <>
      <Routes>
        <Route path='/' element={<StudentIndexPage usuario={userData} />} />
      </Routes>
    </>
  );
};



// {/* Se podria utilizar un router aqui */}
// <PracticeReport />

// {/* Sidebar con las publicaciones del estudiante */}

// <SidebarPost idPost="1" idUser="1" userName="Daniel Cuque" />