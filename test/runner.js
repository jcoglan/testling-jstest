JS.packages(function() { with(this) {
  var ROOT = (typeof window === 'undefined') ? '.' : '..'

  autoload(/^(.*)Spec$/, {from: ROOT + '/test/specs', require: '$1'})
  autoload(/^.*$/, {from: ROOT + '/lib'})
}})

JS.require('JS.Test', function(Test) {

  JS.require('WidgetSpec',
    function() {
      Test.autorun(function(r) {
        if (typeof window !== 'undefined') r.addReporter(new Test.Reporters.TAP())
      })
    })
})

