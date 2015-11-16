import 'angular';
import 'angular-mocks';
import 'dom4';

import './analytics-ng';

describe('Ring.analytics', function () {
  beforeEach(
    window.module('Ring.analytics',
      function (analyticsProvider) {
        const send = sinon.stub();
        const AnalyticsCustomPlugin = require('../analytics/analytics__custom-plugin');
        analyticsProvider.plugins([new AnalyticsCustomPlugin(send)]);
      })
  );

  /* global inject, angular */
  it('should define module', inject(function () {
    expect(angular.module('Ring.analytics')).should.exist;
  }));

  it('should export factory', inject(function (analytics) {
    expect(analytics).should.exist;
  }));

  it('should export correct interface', inject(function (analytics) {
    expect(analytics.trackPageView).should.exist;
    expect(analytics.trackEvent).should.exist;
    expect(analytics.track).should.exist;
  }));

  describe('rgAnalytics', function () {
    let $rootScope;
    let $compile;
    let analytics;

    beforeEach(inject(function (_$rootScope_, _$compile_, _analytics_) {
      $rootScope = _$rootScope_;
      $compile = _$compile_;
      analytics = _analytics_;
      this.sinon.spy(analytics, 'trackEvent');
    }));

    function compileTemplate(template) {
      const elem = $compile(template)($rootScope);
      $rootScope.$digest();
      return elem;
    }

    const click = new CustomEvent('click');

    it('should track event for full arguments list', function () {
      const elem = compileTemplate('<a href="#" rg-analytics="some-category:some-event">Link</a>');
      elem[0].dispatchEvent(click);

      analytics.trackEvent.should.calledWith('some-category', 'some-event');
    });

    it('should track event (with empty event)', function () {
      const elem = compileTemplate('<a href="#" rg-analytics="some-category">Link</a>');
      elem[0].dispatchEvent(click);

      analytics.trackEvent.should.calledWith('some-category', '');
    });

    it('should track event (with empty category)', function () {
      const elem = compileTemplate('<a href="#" rg-analytics=":some-event">Link</a>');
      elem[0].dispatchEvent(click);

      analytics.trackEvent.should.calledWith('', 'some-event');
    });

    it('should track event for non-default user action)', function () {
      const elem = compileTemplate('<a href="#" rg-analytics="category:expand" rg-analytics-on="blur">Link</a>');
      elem[0].dispatchEvent(new CustomEvent('blur'));

      analytics.trackEvent.should.calledWith('category', 'expand');
    });
  });
});
