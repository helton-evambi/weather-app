import AsideInformation from '../AsideInformation';
import CentralInformation from '../CentralInformation';
import Search from '../Search';

import './style.css';

function SideContent({data, setCity}) {
  return(
    <aside className="sideContent">
      <Search setCity={setCity}/>
      <CentralInformation data={data}/>
      <AsideInformation data={data}/>
    </aside>
  )
}

export default SideContent;