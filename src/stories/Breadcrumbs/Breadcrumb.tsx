import React, { useEffect, useState } from "react";
import './breadcrumb.css'
interface Breadcrumb {
  label: string;
  path: string;
}

export interface breadCrumbProps {
  data: Breadcrumb[];
}
export const Breadcrumb: React.FC<breadCrumbProps> = ({ data }) => {
  /*   const [breadCrumbs, setBreadcrumbs] = useState<Breadcrumb[]>([]);
   */
  /*  useEffect(() => {
    const breadCrumbsData: Breadcrumb[] = [
      { label: "Home", path: "/" },
      { label: "About", path: "/about" },
      { label: "Services", path: "/services" },
      { label: "Contact", path: "/contact" },
    ];
    setBreadcrumbs(breadCrumbsData);
  }, []); */
  return (
    <nav>
      <ol className="breadcrumbs">
        {data.map((item, index) => {
          const isLast = index === data.length - 1;
          return (
            <li key={index}>
              {isLast ? (
                <span>{item.label}</span>
              ) : (
                <>
                  <a href={item.path}>{item.label}</a>
                  <span className="separator">&gt;</span>
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
