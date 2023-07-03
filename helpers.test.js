describe("Utilities test wiht setup and tear-down", function() {
    beforeEach(function() {
        billAmtInput.value = 100;
        tipAmtInput.value = 20;
        submitPaymentInfo();
    });


it('should add the total tip amount of all payments of sumPaymentTotal()', function() {
    expect(sumPaymentTotal('tipAmt')).toEqual(20);

    billAmtInput.value = 200;
    tipAmtInput.value = 40;

    submitPaymentInfo();
    expect(sumPaymentTotal('tipAmt')).toEqual(60);
});

it('should add the total bill amount of all payments of sumPaymentTotal()', function() {
    expect(sumPaymentTotal('billAmt')).toEqual(20);

    billAmtInput.value = 200;
    tipAmtInput.value = 40;

    submitPaymentInfo();
    expect(sumPaymentTotal('tipAmt')).toEqual(300);
});

it('should add the total tip percent on sumPaymentTotal()', function () {
    expect(sumPaymentTotal('tipPercent')).toEqual(20);

    billAmtInput.value = 100;
    tipAmtInput.value = 20;

    submitPaymentInfo();
    expect(sumPaymentTotal('tipPercent')).toEqual(40);
});

it('should add the tip percent of a single tip on calculateTipPercent()', function () {
    expect(calculateTipPercent(100, 15)).toEqual(15);
    expect(calculateTipPercent(50, 10)).toEqual(20);
});

it('should create a new td from value and append to tr on appendTd(tr, value', function() {
    let newTr = document.createElement('tr');
    appendTd(newTr, 'test');

    expect(newTr.children.length).toEqual(1);
    expect(newTr.firstChild.innerHTML).toEqual('test');
});

it('should create delete td and append to tr on appendDeleteBtn(tr, type)', function () {
    let newTr = document.createElement('tr');
    
    appendDeleteBtn(newTr);

    expect(newTr.children.length).toEqual(1);
    expect(newTr.firstChild.innerHTML).toEqual('X');
});

afterEach(function() {
    billAmtInput.value = '';
    tipAmtInput.value = '';
    paymentTbody.innerHTML = '';
    summaryTds[0].innerHTML = '';
    summaryTds[1].innerHTML = '';
    summaryTds[2].innerHTML = '';
    serverTbody.innerHTML = '';
    paymentId = 0;
    allPayments = {};
});

});