sap.ui.define(['sap/fe/test/ListReport'], function (ListReport) {
  'use strict';

  var CustomPageDefinitions = {
    actions: {},
    assertions: {},
  };

  return new ListReport(
    {
      appId: 'ns.risksi538979',
      componentId: 'RisksList',
      entitySet: 'Risks',
    },
    CustomPageDefinitions
  );
});
