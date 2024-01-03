function convert(s: string, numRows: number): string {
  const rows = new Array(numRows).fill("");
  let currentRow = -1;
  let ascending = true;

  for (let i = 0; i < s.length; i++) {
    currentRow += ascending ? 1 : -1;

    rows[currentRow] += s[i];

    if (currentRow === numRows - 1) {
      ascending = false;
    } else if (currentRow === 0) {
      ascending = true;
    }
  }

  return rows.join("");
}

console.log(convert("PAYPALISHIRING", 3));
