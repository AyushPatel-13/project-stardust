export type Point = {
  x: number;
  y: number;
};

export function textToPoints(text: string): Point[] {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  if (!ctx) return [];

  canvas.width = 900;
  canvas.height = 250;

  ctx.fillStyle = "white";

  ctx.font = "bold 150px Arial";

  ctx.textAlign = "center";
  ctx.textBaseline = "middle";

  ctx.fillText(text, canvas.width / 2, canvas.height / 2);

  const image = ctx.getImageData(
    0,
    0,
    canvas.width,
    canvas.height
  );

  const points: Point[] = [];

  for (let y = 0; y < canvas.height; y += 6) {
    for (let x = 0; x < canvas.width; x += 6) {
      const alpha =
        image.data[(y * canvas.width + x) * 4 + 3];

      if (alpha > 128) {
        points.push({
          x: x - canvas.width / 2,
          y: y - canvas.height / 2,
        });
      }
    }
  }

  return points;
}