/**
 * Created by Yuntian Chai on 15-3-19.
 */


THREE.elements = function(func,args)
    {
        var g = new THREE.Group();
        g.f = func;

        var elements =  [];

        var poslist;

        if(func){poslist = func(args);}else{return;}

        for(var i = 0;i<poslist.length;i++)
        {
            var geometry = new THREE.BoxGeometry( 0.1, 0.1, 0.1 );
            var material = new THREE.MeshLambertMaterial( {color: 0xff0000} );
            var cube = new THREE.Mesh( geometry, material );
            cube.needsUpdate = true;
            cube.position.x = poslist[i].x;
            cube.position.y = poslist[i].y;
            cube.position.z = poslist[i].z;
            g.add(cube);// add to group
            elements.push(cube);
        }

        g.elist = elements;

        g.updatePos = function(args2)
        {
            var plist = func(args2);
            console.log(poslist);

            for(var i = 0;i<poslist.length;i++)
            {
                //g.elist[i].position = plist[i];

                g.elist[i].position.x = plist[i].x;
                g.elist[i].position.y = plist[i].y;
                g.elist[i].position.z = plist[i].z;

            };

        };



        return g;


    };

THREE.elements.K1 = function(args)
{
    var l = args.l;
    var w = args.w;
    var h = args.h;
    var s = args.s;//space
    var skew = args.sk;

    var plist = [];

    var da = skew*Math.PI/h*1.0;

    for(var i = 0;i<w;i++){
        for(var j = 0;j<l;j++){
            for(var k = 0;k<h;k++){
                var x = i* s-s*w/2.0,y = j* s-s*l/2.0, z = k*s-s*h/2.0;
                var a = da*k;
                var x1 = x*Math.cos(a)-y*Math.sin(a);
                var y1 = x*Math.sin(a)+y*Math.cos(a);
                plist.push(new THREE.Vector3(x1/z,y1/z,z));
            }
        }
    };

    return plist;


};


THREE.elements.Test = function(scene)
{


}

