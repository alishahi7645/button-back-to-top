import { useEffect, useState } from 'react';
import {FaChevronUp} from 'react-icons/fa'
function App() {
  const [showBtn , setShowBtn] = useState(false);
  console.log(showBtn);
  useEffect(()=>{
    window.addEventListener('scroll', function(){
      if(this.window.pageYOffset > 400){
        setShowBtn(!showBtn)
      }else{
        setShowBtn(false)
      }
    })
  },[])
  return (
    <div>
      <section id="one">بخش اول</section>
      <section id="two">بخش دوم</section>
      <section id="three">بخش سوم</section>
      <section id="four">بخش چهارم</section>

      <a href="#" className={showBtn ? 'to-top active' : 'to-top'}>
        <FaChevronUp/>
      </a>
    </div>
  );
}

export default App;
