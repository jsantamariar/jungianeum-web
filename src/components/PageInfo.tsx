import { useLocation } from "react-router-dom";

function PageInfo() {
  const location = useLocation();

  const getPageName = (pathLess: string) => {
    if (pathLess === "/") return "Home";
    return pathLess.charAt(1).toUpperCase() + pathLess.slice(2);
  };

  const pageName = getPageName(location.pathname);

  return (
    <div className="page-info">
      <div className="page-info-left">{pageName}</div>
      <div className="page-info-right">JUNGIANEUM</div>
    </div>
  );
}

export default PageInfo;
