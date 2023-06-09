import { Carousel } from "@mantine/carousel";

export const Home: React.FC = () => {
  return (
    <>
      <h1>asdsdas</h1>
      <Carousel
        height={200}
        slideSize="33.333333%"
        slideGap="md"
        breakpoints={[
          { maxWidth: "md", slideSize: "50%" },
          { maxWidth: "sm", slideSize: "100%", slideGap: 0 },
        ]}
        align="start"
        dragFree
      >
        {Array(36)
          .fill("")
          .map((_, i) => {
            return (
              <Carousel.Slide>
                <div
                  style={{
                    backgroundColor: `hsl(${i * 10}, 37%, 43%)`,
                    height: "100%",
                    textAlign: "center",
                    fontSize: "4rem",
                    lineHeight: "200px",
                    textShadow: "0px 0px 16px #ddd6",
                    color: "white",
                  }}
                >
                  {i}
                </div>
              </Carousel.Slide>
            );
          })}
      </Carousel>
      <h1>asdsdas</h1>
      <h1>asdsdas</h1>
      <h1>asdsdas</h1>
      <h1>asdsdas</h1>
      <h1>asdsdas</h1>
      <h1>asdsdas</h1>
      <h1>asdsdas</h1>
      <h1>asdsdas</h1>
      <h1>asdsdas</h1>
      <h1>asdsdas</h1>
      <h1>asdsdas</h1>
      <h1>asdsdas</h1>
      <h1>asdsdas</h1>
      <h1>asdsdas</h1>
      <h1>asdsdas</h1>
      <h1>asdsdas</h1>
      <h1>asdsdas</h1>
      <h1>asdsdas</h1>
      <h1>asdsdas</h1>
      <h1>asdsdas</h1>
      <h1>asdsdas</h1>
      <h1>asdsdas</h1>
      <h1>asdsdas</h1>
      <h1>asdsdas</h1>
      <h1>asdsdas</h1>
      <h1>asdsdas</h1>
      <h1>asdsdas</h1>
      <h1>asdsdas</h1>
      <h1>asdsdas</h1>
    </>
  );
};
