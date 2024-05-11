import { listData } from "../../lib/dummydata";
import "./projectPage.scss";
import Filter from "../../components/filter/Filter"
import Card from "../../components/card/Card"

function ProjectPage() {
  const data = listData;

  return <div className="listPage">
    <div className="listContainer">
      <div className="wrapper">
        <Filter/>
        {data.map(item=>(
          <Card key={item.id} item={item}/>
        ))}
      </div>
    </div>
  </div>;
}

export default ProjectPage;