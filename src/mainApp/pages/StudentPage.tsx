import { Routes, Route } from 'react-router-dom';
import { StudentIndexPage } from './StudentIndexPage';
import { StudentReport } from './StudentReport';
import { useStudent } from '../../hooks/useStudent';

export const StudentPage = () => {

  const { usuarioActivo } = useStudent();

  if (usuarioActivo) {
    return (
      <>
        <Routes>
          <Route path='/' element={<StudentIndexPage usuario={usuarioActivo} />} />
          <Route path='/informes' element={<StudentReport />} />
        </Routes>
      </>
    );
  } else {
    return (<p>LOADING...</p>)
  }


};



