
it('should calculate the monthly rate correctly', function () {
  const values = {
    amount: 10000,
    years: 10,
    rate: 2
  };
  expect(calculateMonthlyPayment(values)).toEqual('92.01')
});


it("should return a result with 2 decimal places", function() {
  const values = {
    amount: 30000,
    years: 6,
    rate: 3
  }
  expect(calculateMonthlyPayment(values)).toEqual('455.81')
});

