$(window).on("load",function(){var a=dimple.newSvg("#grouped-vertical-step-area","100%",500);d3.tsv("robust-assets/demo-data/dimple/example-data.tsv",function(b){function c(){setTimeout(function(){d.draw(0,!0),e.titleShape.remove(),f.titleShape.remove()},100)}b=dimple.filterData(b,"Owner",["Aperture","Black Mesa"]);var d=new dimple.chart(a,b);d.setBounds(0,0,"100%","100%"),d.setMargins(40,10,0,50);var e=d.addMeasureAxis("x","Unit Sales"),f=d.addCategoryAxis("y",["Owner","Month"]);f.addGroupOrderRule("Date");var g=d.addSeries("Owner",dimple.plot.area);g.interpolation="step",g.lineWeight=1,g.barGap=.05,d.defaultColors=[new dimple.color("#673AB7"),new dimple.color("#F50057")],e.fontSize="12",f.fontSize="12",d.draw(),e.titleShape.remove(),f.titleShape.remove(),$(window).on("resize",c),$(".menu-toggle").on("click",c)})});