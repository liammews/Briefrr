import React from "react";
import Card from "./briefcard"

const Articles = ({ articles }) => {
  const Articles = articles.slice();

  return (
    <div>
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