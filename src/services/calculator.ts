export function sum(n: number[]): number {
  return n.reduce((a, b) => a + b, 0);
}

export function multiplyTwoLists(xi: number[], yi: number[]): number[] {
  return xi.map((element, index) => element * yi[index]);
}

function getNumeratorResult(n: number, xi: number[], yi: number[]) {
  return n * sum(multiplyTwoLists(xi, yi)) - sum(xi) * sum(yi);
}

export function calculateLinearCorrelation(
  n: number,
  xi: number[],
  yi: number[]
): number {
  function getDenominatorResult() {
    function getSquareRootResult(ni: number[]): number {
      return Math.sqrt(
        n * sum(multiplyTwoLists(ni, ni)) - Math.pow(sum(ni), 2)
      );
    }

    return getSquareRootResult(xi) * getSquareRootResult(yi);
  }

  const finalResult = getNumeratorResult(n, xi, yi) / getDenominatorResult();

  return parseFloat(finalResult.toFixed(3));
}

export function calculateRegressionA(n: number, xi: number[], yi: number[]) {
  const numeratorResult = getNumeratorResult(n, xi, yi);

  const denominatorResult =
    n * sum(multiplyTwoLists(xi, xi)) - Math.pow(sum(xi), 2);

  const finalResult = numeratorResult / denominatorResult;

  return parseFloat(finalResult.toFixed(3));
}

export function calculateRegressionB(n: number, xi: number[], yi: number[]) {
  return (sum(yi) - calculateRegressionA(n, xi, yi) * sum(xi)) / n;
}
