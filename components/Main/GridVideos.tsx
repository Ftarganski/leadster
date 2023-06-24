import React from 'react';

interface GridItem {
  title: string;
  link: string;
}

interface Props {
  data: GridItem[];
}

const Grid: React.FC<Props> = ({ data }) => {
  return (
    <div className="grid">
      {data.map((item: GridItem, index: number) => (
        <div key={index} className="grid-item">
          <img src={item.link} alt={item.title} />
        </div>
      ))}
    </div>
  );
};

interface GridVideosProps {
  jsonData: GridItem[];
}

const GridVideos: React.FC<GridVideosProps> = ({ jsonData }) => {
  return (
    <div className="container">
      <h1>Grid de Imagens</h1>
      <Grid data={jsonData} />
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch('../components/Main/videos.json');
  const jsonData = await response.json();

  return {
    props: {
      jsonData,
    },
  };
}

export default GridVideos;