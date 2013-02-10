WidgetSpec = JS.Test.describe("Widget", function() { with(this) {
  before(function() {
    this.widget = new Widget("frank")
  })

  it("has a name", function() { with(this) {
    assertEqual( "FRANK", widget.getName() )
  }})
}})

