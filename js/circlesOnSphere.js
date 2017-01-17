// circles on sphere
var circlesOnSphere = function(o, scale){
    
    var big_radius = 130;
    var radius = 18;
    var number_of_circles = 90;

    if( scale ){
        big_radius *= scale;
        radius *= scale;
    }

    var wpi = Math.PI * 2;
    var grp = new Group();
    var gray = new Color(1.0, 0.2);
    var white = new Color(1.0, 0.8);
    
    function clear(){
        grp.removeChildren();
    }

    var CirclePos = function(){
        this.t1 = Math.random() * wpi;
        this.rot_unit = (Math.PI + 1.5 * Math.random())  / 500;
        this.t2 = Math.random() * 180;
        this.sign = this.t < Math.PI ? 1 : -1;
        this.point;
        this.size;
    }
    
    var cps = [];

    for( var i = 0; i < number_of_circles; i++){
        cps.push( new CirclePos() );
    }

    function iterate(){
        // calcs positions
        for( var i = 0; i < cps.length; i++){
            var c = Math.cos( cps[i].t1 + Math.PI);
            var s = Math.sqrt(1 - c * c);
            var z = c * big_radius;

            cps[i].size = [radius * s, radius]; 
            cps[i].point = new Point(o.x + z, o.y);
        }
        
        clear();

        // draws circles
        for( var i = 0; i < cps.length; i++){
            var circle = new Path.Ellipse({
                point: cps[i].point,
                size:  cps[i].size,
                fillColor: cps[i].sign > 0 ? gray : white
                });
            circle.rotate(cps[i].t2, o);
            grp.addChild( circle );
    
            cps[i].t1 = (cps[i].t1 + cps[i].rot_unit) % wpi;
            cps[i].sign = cps[i].t1 < Math.PI ? 1 : -1;
        }
    }

    this.clearStage = function(){
        clear();
    }
    
    this.frameHandler = function(evt){
        iterate();
    }

    iterate();
    return this;
}
