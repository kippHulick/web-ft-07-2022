import './App.css';

import Name from './components/Name'
// import City from './components/City'

function App() {

  let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
  let dias = ["lunes", 'martes', 'miercoles', 'jueves', 'viernes', 'sabado', 'domingo']
  let tag = ["Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag", "Sonntag"]
  let dag = ["måndag", "tisdag", "onsdag", "torsdag", "fredag", "lördag", "söndag"]
  const daysInKorean = ['wollyoil', 'hwayoil', 'suyoil', 'mongnyoil', 'geumyoil', 'toyoil', 'illyoil'];
  const Tydzień = ["Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota", "Niedziela"]
  
  return (
    <>
      <Name name="Kipp" days={days} language="english"/>

      <Name name="E" days={dias} language="spanish"/>

      <Name name="Hulick" days={tag} language="german"/>

      <Name name="Hulick" days={dag} language="idk"/>

      <Name name="Hulick" days={daysInKorean} language="korean"/>

      <Name name="Hulick" days={Tydzień} language="polish"/>

    </>
  );
}

export default App;