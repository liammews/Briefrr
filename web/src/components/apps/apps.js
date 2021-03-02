import React from "react";
import Card from "./appscard"

const Articles = ({ articles }) => {
  const Articles = articles.slice();

  return (
    <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
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