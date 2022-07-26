import { useParams, Routes, Route, useNavigate } from 'react-router-dom';
import { PracticeReport } from "../components";
import { SidebarPost } from "../components/SidebarPost";
import { useEffect, useState } from 'react';
import { getReportByUser } from "../../utils/getReportByUser";
import { usuario } from '../../interfaces/components';
import { StudentIndexPage } from './StudentIndexPage';
import { StudentReport } from './StudentReport';

export const StudentPage = () => {
  // En esta parte se recupera de la URL la información de los integrantes del grupo

  const { nombre } = useParams();
  const navigate = useNavigate();
  const [userData, setuserData] = useState<usuario>({
    carnet: '',
    grupo: '',
    nombre: '',
    informes: [],
    imagen: ''
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
        navigate('/');
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
        {/* Aca o se trabaja con context (algo como practicaActiva) o se tiene que encontrar una forma de pasarle el id  */}
        <Route path='/informes' element={
          userData.imagen.length > 1
            ? <StudentReport />
            : <></>
        } />
      </Routes>
    </>
  );
};



