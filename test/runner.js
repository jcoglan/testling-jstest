JS.packages(function() { with(this) {
  var ROOT = (typeof window === 'undefined') ? '.' : '..'

  autoload(/^(.*)Spec$/, {from: ROOT + '/test/specs', require: '$1'})
  autoload(/^.*$/, {from: ROOT + '/lib'})
}})

JS.require( 'WidgetSpec',
            function() { JS.Test.autorun() })

