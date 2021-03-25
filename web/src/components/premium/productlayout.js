
import React from "react";
import Card from "./productcard"

const Articles = ({ articles }) => {
  const Articles = articles.slice();

  return (
    <div className="grid grid-cols-1 gap-8 lg:gap-8 md:grid-cols-2 lg:grid-cols-4">
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