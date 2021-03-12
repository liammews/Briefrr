import React from "react";
import Card from "./appscard"

const Articles = ({ articles }) => {
  const Articles = articles.slice();

  return (
    <div className="grid grid-cols-1 gap-8 lg:gap-8 lg:grid-cols-3">
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