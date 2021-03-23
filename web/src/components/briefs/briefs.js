import React from "react";
import Card from "./briefcard"

const Articles = ({ articles }) => {
  const Articles = articles.slice();

  return (
    <div className="grid grid-cols-1 gap-8 lg:gap-12 lg:grid-cols-2 mb-12 ">
          {Articles.map((article, i) => {
            return (
              <Card
                article={article}
              />
            );
          })}
        </div>
  );
};

export default Articles;