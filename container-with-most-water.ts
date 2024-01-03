// function maxArea(height: number[]): number {
//   if (!height.length) return 0;
//   let currentMaxArea = 0;
//
//   for (let i = 0; i < height.length; i++) {
//     const inspectedHeight = height[i];
//     let newMaxArea = -Infinity;
//     for (let j = i + 1; j < height.length; j++) {
//       const comparedHeight = height[j];
//       let base = 1;
//
//       if (inspectedHeight < comparedHeight) {
//         base = inspectedHeight;
//       } else {
//         base = comparedHeight;
//       }
//
//       const other = j - i;
//
//       newMaxArea = base * other;
//       console.log({ base, j, inspectedHeight, comparedHeight, newMaxArea });
//
//       if (newMaxArea > currentMaxArea) {
//         currentMaxArea = newMaxArea;
//       }
//     }
//   }
//
//   return currentMaxArea;
// }

function maxArea(height: number[]): number {
  let i = 0;
  let j = height.length - 1;
  let area = 0;

  while (i < j) {
    const left = height[i];
    const right = height[j];

    const base = Math.min(left, right);

    const newArea = base * (j-i);
    console.log({ newArea });

    if (newArea > area) {
      area = newArea;
    }

    if (left <= right) {
      i++;
    } else if (right < left) {
      j--;
    }
  }

  return area;
}

console.log(maxArea([1, 0, 0, 0, 0, 0, 0, 2, 2]));
