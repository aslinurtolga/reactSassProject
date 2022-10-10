import Card from "./components/card/Card";
import data from "./util/data";
function App() {
  //js
  return (
    <>
      {data.map((item) => {
        // { data.map( (item) => {...item} ) }
        console.log(item);
        const { id, language, img, btnName } = item;
        //! destr.
        return <Card key={id} language={language} img={img} btn={btnName} />; 
        //ya da keyi yukarıdaki data.map'in içerisinde item, index yaparakta sorunu giderebiliriz.

        // map
        // mapin arrowu
        // return
        // returnün parantezi
      })}
    </>
  );
}

export default App;
